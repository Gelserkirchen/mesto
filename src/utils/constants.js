import {FormValidator} from '../components/FormValidator';
import {UserInfo} from '../components/UserInfo';

export const imagePopup = document.querySelector('.image-popup');
export const imagePopupSelector = '.image-popup';
export const image = imagePopup.querySelector('.image-popup__picture');
export const imagePopupDescription = imagePopup.querySelector('.image-popup__description');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__profession');
// export const cardsContainer = document.querySelector('.cards');
export const cardsContainerSelector = '.cards';
export const profileEditPopupButton = document.querySelector('.profile__edit-button');
export const profilePopupSelector = '.popup_type_profile';
export const profilePopup = document.querySelector(profilePopupSelector);
export const newCardPopupSelector = '.popup_type_new-card';
export const newCardPopup = document.querySelector(newCardPopupSelector);
export const addNewCardButton = document.querySelector('.profile__add-button');
export const inputProfileName = profilePopup.querySelector('.popup__input_type_name');
export const inputProfileProfession = profilePopup.querySelector('.popup__input_type_profile');
export const inputPlaceName = newCardPopup.querySelector('.popup__input_type_place');
export const inputPlaceLink = newCardPopup.querySelector('.popup__input_type_link');

// const addNewCardPopupButton = newCardPopup.querySelector('.popup__save-button');
export const validationSettings = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};

export const profileValidation = new FormValidator(validationSettings, profilePopup);
export const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
export const usersInfo = new UserInfo({name: profileName.textContent, profession: profileJob.textContent});

export const initialCards = [
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
