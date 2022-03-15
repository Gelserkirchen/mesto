import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const cardsContainer = document.querySelector('.cards');
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_profile');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.image-popup');
const addNewCardButton = document.querySelector('.profile__add-button');
const inputProfileName = profilePopup.querySelector('.popup__input_type_name');
const inputProfileProfession = profilePopup.querySelector('.popup__input_type_profile');
const inputPlaceName = newCardPopup.querySelector('.popup__input_type_place');
const inputPlaceLink = newCardPopup.querySelector('.popup__input_type_link');
const addNewCardPopupButton = newCardPopup.querySelector('.popup__save-button');
const validationSettings = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};

const newCardValidation = new FormValidator(validationSettings, profilePopup);
const profileValidation = new FormValidator(validationSettings, newCardPopup);

newCardValidation.enableValidation();
profileValidation.enableValidation();

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function render() {
  initialCards.reverse().forEach(renderItem);
}

function openCardPopup() {
  openPopup(newCardPopup);
}

// Add new card to cards
function handleNewCard(evt) {
  evt.preventDefault();

  const data = {};

  data.name = inputPlaceName.value;
  data.link = inputPlaceLink.value;

  inputPlaceName.value = '';
  inputPlaceLink.value = '';

  addNewCardPopupButton.disabled = true;
  addNewCardPopupButton.classList.add('popup__save-button_inactive');

  closePopup(newCardPopup);
  renderItem(data);
}

function renderItem(data) {
  const item = new Card(data, '.card__template')
  cardsContainer.prepend(item.createCard());
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
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);
}

// Close popup without saving
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnEsc);
}

function closePopupByClickOnEsc(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
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
newCardPopup.querySelector('.popup__inputs').addEventListener('submit', handleNewCard);
newCardPopup.querySelector('.popup__close-button').addEventListener('click', () => {
  closePopup(newCardPopup)
});
newCardPopup.addEventListener('click', (evt) => {
  closePopupByClickOnDarkBackground(evt, newCardPopup);
})

profilePopup.querySelector('.popup__inputs').addEventListener('submit', handleProfileFormSubmit);
profilePopup.querySelector('.popup__close-button').addEventListener('click', () => {
  closePopup(profilePopup)
});
profilePopup.addEventListener('click', (evt) => {
  closePopupByClickOnDarkBackground(evt, profilePopup);
})

render();
