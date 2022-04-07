import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { FormValidator } from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'
import '../pages/index.css'

import {
  addNewCardButton,
  cardsContainerSelector,
  imagePopupSelector,
  initialCards,
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
  profileJobSelector
} from '../utils/constants.js';

const profileValidation = new FormValidator(validationSettings, profilePopup);
const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
const usersInfo = new UserInfo({ nameSelector: profileNameSelector, professionSelector: profileJobSelector });
const cards = new Section({ items: initialCards.reverse(), renderer: renderItems }, cardsContainerSelector);

profileValidation.enableValidation();
newCardFormValidation.enableValidation();

const popupNewCard = new PopupWithForm(newCardPopupSelector, handleNewCard);
popupNewCard.setEventListeners();

const popupUserProfile = new PopupWithForm(profilePopupSelector, handleProfileFormSubmit);
popupUserProfile.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector, { imagePopup: image, imagePopupDescription: imagePopupDescription });
imagePopup.setEventListeners();

function handleCardClick(evt) {
  imagePopup.open(evt.target);
}

function render() {
  cards.renderItems();
}

function handleNewCard(evt, data) {
  cards.addItem(data);
  newCardFormValidation.removeErrors();
  newCardFormValidation.disableButtonState();
}

function renderItems(data) {
  const item = new Card(data, '.card__template', handleCardClick);
  return item.createCard();
}

function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  usersInfo.setUserInfo({ name: data.name, profession: data.profession });
}

// Add listeners
profileEditPopupButton.addEventListener('click', () => {
  inputProfileName.value = usersInfo.getUserInfo().name;
  inputProfileProfession.value = usersInfo.getUserInfo().profession;
  popupUserProfile.open();
});

addNewCardButton.addEventListener('click', () => {
  newCardFormValidation.removeErrors(); //
  popupNewCard.open();
});

render();
