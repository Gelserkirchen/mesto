import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'

import {
  addNewCardButton,
  cardsContainerSelector,
  imagePopupSelector,
  initialCards,
  newCardFormValidation,
  newCardPopupSelector,
  profileEditPopupButton,
  profilePopupSelector,
  profileValidation,
  usersInfo
} from '../utils/constants.js';

profileValidation.enableValidation();
newCardFormValidation.enableValidation();

const popupNewCard = new PopupWithForm(newCardPopupSelector, handleNewCard);
popupNewCard.setEventListeners();

const popupUserProfile = new PopupWithForm(profilePopupSelector, handleProfileFormSubmit);
popupUserProfile.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector, closePopupImage);
imagePopup.setEventListeners();

function closePopupImage() {
  imagePopup.close();
}

function handleCardClick() {
  imagePopup.open(this);
}

function renderItems(data) {
  const item = new Card(data, '.card__template', handleCardClick);
  return item;
}

function render() {
  const cards = new Section({ items: initialCards, renderer: renderItems }, cardsContainerSelector);
  const items = cards.renderItems();

  items.forEach((item) => {
    cards.addItem(item);
  })
}

function handleNewCard(evt, data) {
  const card = new Section({ items: data, renderer: renderItems }, cardsContainerSelector);
  const item = card.renderItems();
  card.addItem(item[0]);
  newCardFormValidation.resetForm();
  newCardFormValidation.disableButtonState();
}

function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  usersInfo.setUserInfo(data[0]);
}

// Add listeners
profileEditPopupButton.addEventListener('click', () => {
  popupUserProfile.open();
});

addNewCardButton.addEventListener('click', () => {
  popupNewCard.open();
});


render();
