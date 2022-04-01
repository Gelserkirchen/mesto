import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'

import {
  addNewCardButton,
  cardsContainer,
  imagePopup,
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

// создаем новую карточку 
// const newCardPopupB = new PopupWithImage(newCardPopupSelector, handleNewCard);
// const newCardValidation = new FormValidator(validationSettings, newCardPopupB);
// newCardValidation.enableValidation();

// PR8 
const profileValidation = new FormValidator(validationSettings, profilePopup);
const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);

const popupNewCard = new PopupWithForm('.popup_type_new-card', handleNewCard);
// const popupNewCard = new PopupWithForm('.popup_type_new-card', (evt, data) => );
const popupUserProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);

profileValidation.enableValidation();
newCardFormValidation.enableValidation();

function closePopupImage() {
  debugger
}

// PR8 
function handleCardClick() {
  // debugger
  const imagePopup = new PopupWithImage('.image-popup', closePopupImage); //сюда засунуть закрывашку
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

// function openCardPopup() // { переименовал в -> function openPopup() { 
//   const popup =  new PopupWithForm()
//   openPopup(newCardPopup); 
// }

// PR8 
function openPopupNew(popupSelector) { // instead of openCardPopup()
  // debugger
  const popup =  new PopupWithForm(popupSelector, handleProfileFormSubmit);
  popup.setEventListeners(); // может быть сделать приватным
  popup.open();
}

function clearInputs() {
  // inputPlaceName.value = '';
  // inputPlaceLink.value = '';
}

// PR8 Callback add new card to cards
// function handleNewCard(evt) {
//   evt.preventDefault();
function handleNewCard(evt, data) {
  const card = new Section({ items: data, renderer: renderItems }, cardsContainerSelector);
  const item = card.renderItems();
  card.addItem(item[0]); 
}

function insertItem(item) {
  // cardsContainer.prepend(item.createCard());
}

function renderProfilePopup() {
  inputProfileName.value = profileName.textContent;
  inputProfileProfession.value = profileJob.textContent;
  openPopup(profilePopup);
}

// Save result of popup to profile
function handleProfileFormSubmit(evt) {
  debugger
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputProfileProfession.value;

  // closePopup(profilePopup);
}

export function openPopup(popup) {
  // popup.classList.add('popup_opened');
  // document.addEventListener('keydown', closePopupByClickOnEsc);
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
