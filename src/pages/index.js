import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'

import {
  addNewCardButton,
  newCardPopup,
  profileEditPopupButton,
  profileJob,
  profileName,
  profilePopup,
  validationSettings,
  initialCards,
  cardsContainerSelector
} from '../utils/constants.js';


// PR8 add validation
export const profileValidation = new FormValidator(validationSettings, profilePopup);
profileValidation.enableValidation();
export const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
newCardFormValidation.enableValidation();

// PR8 create new cards
const popupNewCard = new PopupWithForm('.popup_type_new-card', handleNewCard);
popupNewCard.setEventListeners();

const popupUserProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
popupUserProfile.setEventListeners();

const imagePopup = new PopupWithImage('.image-popup', closePopupImage); 
imagePopup.setEventListeners();

export const usersInfo = new UserInfo({name: profileName.textContent, profession: profileJob.textContent});


function closePopupImage() {
  imagePopup.close();
}

// PR8 
function handleCardClick() {
  // debugger
  imagePopup.open(this);
}

// PR8 
function renderItems(data) { 
  const item = new Card(data, '.card__template', handleCardClick);  
  return item;
}

// PR8 
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
