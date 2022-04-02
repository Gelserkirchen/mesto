import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'

import {
  addNewCardButton,
  cardsContainer,
  inputPlaceLink,
  inputPlaceName,
  inputProfileName,
  inputProfileProfession,
  newCardPopup,
  profileEditPopupButton,
  profileJob,
  profileName,
  profilePopup,
  validationSettings,
  initialCards,
  newCardPopupSelector,
  cardsContainerSelector
} from '../utils/constants.js';


// PR8 add validation
const profileValidation = new FormValidator(validationSettings, profilePopup);
profileValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
newCardFormValidation.enableValidation();

// PR8 create new cards
const popupNewCard = new PopupWithForm('.popup_type_new-card', handleNewCard);
popupNewCard.setEventListeners();
const popupUserProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
popupUserProfile.setEventListeners();
const imagePopup = new PopupWithImage('.image-popup', closePopupImage); 
imagePopup.setEventListeners();


function closePopupImage() {
  imagePopup.close();
}

// PR8 
function handleCardClick() {
  // debugger
  imagePopup.open(this);
}

// PR8 
function renderItems(data) { // data это
  const item = new Card(data, '.card__template', handleCardClick);  // данные, шаблон карточки, клик на карту
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

// function clearInputs() {
//   // inputPlaceName.value = '';
//   // inputPlaceLink.value = '';
// }

// PR8 Callback add new card to cards
// function handleNewCard(evt) {
//   evt.preventDefault();
function handleNewCard(evt, data) {
  const card = new Section({ items: data, renderer: renderItems }, cardsContainerSelector);
  const item = card.renderItems();
  card.addItem(item[0]);  
}


// Save result of popup to profile
function handleProfileFormSubmit(evt, data) {
  // debugger
  evt.preventDefault();

  profileName.textContent = data[0].name;
  profileJob.textContent = data[0].profession;
}

// Add listeners
// profileEditPopupButton.addEventListener('click', renderProfilePopup);
profileEditPopupButton.addEventListener('click', () => {
  popupUserProfile.open();
  // openPopupNew('.popup_type_profile')
});

addNewCardButton.addEventListener('click', () => {
  // debugger
  popupNewCard.open();
  // openPopupNew('.popup_type_new-card')
});



render();
