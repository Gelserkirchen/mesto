import {FormValidator} from '../components/FormValidator.js'
import {Card} from '../components/Card.js'
import {Section} from '../components/Section.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {UserInfo} from '../components/UserInfo.js'

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
  newCardPopupSelector
} from '../utils/constants';


// создаем новую карточку 
const newCardPopupB = new PopupWithImage(newCardPopupSelector, handleNewCard);

const newCardValidation = new FormValidator(validationSettings, newCardPopupB);
const profileValidation = new FormValidator(validationSettings, profilePopup);

newCardValidation.enableValidation();
profileValidation.enableValidation();

function renderCardItem(data) { // data это
  const item = new Card(data, '.card__template', handleNewCard);
  return item;
}

function render() {
  const cards = new Section({initialCards, renderItems: renderCardItem}, cardsContainer);
  const items = cards.renderItems();
  cards.addItem(items);
}

function openCardPopup() {
  openPopup(newCardPopup);
}

function clearInputs() {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
}

// Add new card to cards
function handleNewCard(evt, data) {
    evt.preventDefault();

    const section = new Section({data, renderItems: renderCardItem}, cardsContainer);

    const items = section.renderItems();
    items.forEach((item) => {
      section.addItem(item);
    });
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
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputProfileProfession.value;

  closePopup(profilePopup);
}

export function openPopup(popup) {
  // popup.classList.add('popup_opened');
  // document.addEventListener('keydown', closePopupByClickOnEsc);
}

// Close popup without saving
function closePopup(popup) {
  // popup.classList.remove('popup_opened');
  // document.removeEventListener('keydown', closePopupByClickOnEsc);
}

function closePopupByClickOnEsc(evt) {
  // if (evt.key === 'Escape') {
  //   const currentPopup = document.querySelector('.popup_opened');
  //   closePopup(currentPopup);
  // }
}

function closePopupByClickOnDarkBackground(evt, nameOfPopup) {
  if (evt.target === evt.currentTarget) {
    closePopup(nameOfPopup);
  }
}

// Add listeners
profileEditPopupButton.addEventListener('click', renderProfilePopup);
addNewCardButton.addEventListener('click', openCardPopup);

imagePopup.addEventListener('click', (evt) => {
  closePopupByClickOnDarkBackground(evt, imagePopup);
})

imagePopup.querySelector('.popup__close-button').addEventListener('click', () => {
  closePopup(imagePopup)
});
newCardPopup.querySelector('.popup__inputs').addEventListener('submit', (evt) => {
  const data = new UserInfo({inputPlaceName, inputPlaceLink});
  handleNewCard(evt, data);
});

newCardPopup.querySelector('.popup__close-button').addEventListener('click', () => {
  clearInputs();
  newCardValidation.resetForm();
  closePopup(newCardPopup);
});
newCardPopup.addEventListener('click', (evt) => {
  closePopupByClickOnDarkBackground(evt, newCardPopup);
})

profilePopup.querySelector('.popup__inputs').addEventListener('submit', handleProfileFormSubmit);
profilePopup.querySelector('.popup__close-button').addEventListener('click', () => {
  profileValidation.resetForm();
  profileValidation.enableButtonState();
  closePopup(profilePopup)
});
profilePopup.addEventListener('click', (evt) => {
  profileValidation.resetForm();
  profileValidation.enableButtonState();
  closePopupByClickOnDarkBackground(evt, profilePopup);
})

render();
