import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { FormValidator } from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'
import { api } from '../components/Api.js'
import '../pages/index.css'

import {
  addNewCardButton,
  cardsContainerSelector,
  imagePopupSelector,
  popupSubmitButton,
  newCardPopupSelector,
  profileEditPopupButton,
  profilePopupSelector,
  validationSettings,
  profilePopup,
  newCardPopup,
  image,
  imagePopupDescription,
  inputProfileName,
  inputProfileProfession,
  profileNameSelector,
  profileJobSelector,
  popupDeleteCardSelector,
  avatar,
  avatarSelector,
  updAvatarSelector,
  updAvatarPopup,
  updAvatarPopupInput
} from '../utils/constants.js';

let userId = '';

const profileValidation = new FormValidator(validationSettings, profilePopup);
const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
const avatarFormValidation = new FormValidator(validationSettings, updAvatarPopup);
const usersInfo = new UserInfo({ nameSelector: profileNameSelector, professionSelector: profileJobSelector, avatarSelector: avatarSelector });
const cards = new Section({ items: [], renderer: renderItems }, cardsContainerSelector);

api.getProfile().then(res => {
  usersInfo.setUserInfo({ name: res.name, profession: res.about, avatarSrc: res.avatar });
  userId = res._id;
});

api.getInitialCards().then(serverCards => {
  serverCards.forEach(element => {
    const card = {};
    card.link = element.link;
    card.name = element.name;
    card.likes = element.likes;
    card.cardId = element._id;
    card.userId = userId;
    card.ownerId = element.owner._id;

    cards.addItem(card);
  });
})

profileValidation.enableValidation();
newCardFormValidation.enableValidation();
avatarFormValidation.enableValidation();

const popupUpdAvatar = new PopupWithForm(updAvatarSelector, handleUpdateAvatar);
popupUpdAvatar.setEventListeners();

const popupNewCard = new PopupWithForm(newCardPopupSelector, handleNewCard);
popupNewCard.setEventListeners();

const popupDeleteConfirm = new PopupWithForm(popupDeleteCardSelector);
popupDeleteConfirm.setEventListeners();

const popupUserProfile = new PopupWithForm(profilePopupSelector, handleProfileFormSubmit);
popupUserProfile.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector, { imagePopup: image, imagePopupDescription: imagePopupDescription });
imagePopup.setEventListeners();


// ПРОФАЙЛ
// -- обработчик аватара
function handleUpdateAvatar() {
  setButtonText(evt, 'Сохранение...');
  const avatarLink = updAvatarPopupInput.value;
  api.updAvatar(avatarLink).then(res => {
    setButtonText(evt, 'Сохранить');
    usersInfo.setUserInfo({ name: res.name, profession: res.about, avatarSrc: res.avatar });
  })
}

// -- обработчик профайл - попапа
function handleProfileFormSubmit(evt, data) {
  setButtonText(evt, 'Сохранение...');
  const { name, profession } = data
  evt.preventDefault();
  api.editProfile(name, profession).then((res) => {
    setButtonText(evt, 'Сохранить');
    usersInfo.setUserInfo({ name: res.name, profession: res.about, avatarSrc: res.avatar });
  })
}

// ОТРИСОВЫВАЕМ КАРТОЧКИ
// создать новую карточку
function handleNewCard(evt, data) {
  setButtonText(evt, 'Сохранение...');
  const { name, link, likes, cardId, userId, ownerId } = data;
  api.addCard(name, link, likes, cardId, userId, ownerId).then(res => {
    setButtonText(evt, 'Сохранить');
    cards.addItem(res);
  })
}

// функция отрисовки карточки
function renderItems(data) {
  const item = new Card(data, '.card__template', handleCardClick, handleDeleteCardButton, handleLikeClick);
  return item.createCard();
}

// -- обработчик на кнопку с заменой сабмита
function handleDeleteCardButton(removeCard, cardId) {
  popupDeleteConfirm.open();
  popupDeleteConfirm.changeSubmitHandler(() => { deleteCard(removeCard, cardId) });
}

// -- открыть попап с фото
function handleCardClick(evt) {
  imagePopup.open(evt.target);
}

// -- обработчик лайка
function handleLikeClick(cardId, isLike, likeElement) {
  if (!isLike) {
    api.addLike(cardId).then(res => {
      likeElement.textContent = res.likes.length
    })
  } else {
    api.deleteLike(cardId).then(res => {
      likeElement.textContent = res.likes.length
    })
  }
}

// -- удаление карточки
function deleteCard(removeCard, cardId) {
  api.deleteCard(cardId).then(res => {
    removeCard();
    popupDeleteConfirm.close();
  });
}

function setButtonText(evt, statusText) {
  evt.target.querySelector(popupSubmitButton).textContent = `${statusText}`;
}

// ADD LISTENERS
profileEditPopupButton.addEventListener('click', () => {
  const { name, profession } = usersInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileProfession.value = profession;
  popupUserProfile.open();
});

addNewCardButton.addEventListener('click', () => {
  newCardFormValidation.disableButtonState();
  newCardFormValidation.removeErrors();
  popupNewCard.open();
});

avatar.addEventListener('click', () => {
  const { avatar } = usersInfo.getUserInfo();
  updAvatarPopupInput.value = avatar.replace('url("', '').replace('")', ''); // stackoverflow
  popupUpdAvatar.open();
})
