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
const cards = new Section({ items: [], renderer: (item) => cards.addItem(item)}, cardsContainerSelector);

Promise.all([api.getProfile(), api.getInitialCards()])
  .then((data) => {
    const profileData = data[0];
    const dataFromServer = data[1];

    usersInfo.setUserInfo({ name: profileData.name, profession: profileData.about, avatarSrc: profileData.avatar });
    userId = profileData._id;

    const arrayOfCards = [];

    dataFromServer.forEach(element => {
      const data = {};
      data.link = element.link;
      data.name = element.name;
      data.likes = element.likes;
      data.cardId = element._id;
      data.userId = userId;
      data.ownerId = element.owner._id;

      const card = renderItem(data);
      arrayOfCards.push(card);
    });

    cards.renderItems(arrayOfCards);

  }
  )
  .catch((err) => {
    console.log('Ошибка загрузки начальных данных', err)
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
function handleUpdateAvatar(evt, data) {
  setButtonText(evt, 'Сохранение...');
  api.updAvatar(data.link).then(res => {
    usersInfo.setUserInfo({ name: res.name, profession: res.about, avatarSrc: res.avatar });
  }).catch(err => {
    console.log('ошибка обновления аватара ', err)
  }).finally(() => {
    setButtonText(evt, 'Сохранить');
  })
}

// -- обработчик профайл - попапа
function handleProfileFormSubmit(evt, data) {
  setButtonText(evt, 'Сохранение...');
  const { name, profession } = data
  api.editProfile(name, profession).then((res) => {
    usersInfo.setUserInfo({ name: res.name, profession: res.about, avatarSrc: res.avatar });
  }).catch((err) => {console.log('ошибка сохранения данных в профиле', err)})
  .finally(() => {
    setButtonText(evt, 'Сохранить');
  })
}

// ОТРИСОВЫВАЕМ КАРТОЧКИ
// создать новую карточку
function handleNewCard(evt, data) {
  setButtonText(evt, 'Сохранение...');
  const { name, link } = data;
  api.addCard(name, link).then(res => {
    const card = renderItem({ name: res.name, link: res.link, likes: res.likes, cardId: res._id, userId: userId, ownerId: res.owner._id });
    cards.renderItems([].concat(card));
  })
  .catch((err) => {
    console.log('ошибка открытия карточки', err)
  })
  .finally(() => {
    setButtonText(evt, 'Сохранить');
  })
}

// функция отрисовки карточки
function renderItem(data) {
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
    api.addLike(cardId)
    .then(res => {
      likeElement.textContent = res.likes.length
    })
    .catch((err) => {console.log('ошибка добавления лайка', err)})
  } else {
    api.deleteLike(cardId).then(res => {
      likeElement.textContent = res.likes.length
    })
    .catch((err) => {console.log('ошибка удаления лайка', err)})
  }
}

// -- удаление карточки
function deleteCard(removeCard, cardId) {
  api.deleteCard(cardId).then(res => {
    removeCard();
    popupDeleteConfirm.close();
  }).catch((err) => {console.log('ошибка удаления карточки', err)})
}

function setButtonText(evt, statusText) {
  evt.target.querySelector(popupSubmitButton).textContent = `${statusText}`;
}

// ADD LISTENERS
profileEditPopupButton.addEventListener('click', () => {
  const { name, profession } = usersInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileProfession.value = profession;
  profileValidation.removeErrors();
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
