export const imagePopup = document.querySelector('.image-popup');
export const image = imagePopup.querySelector('.image-popup__picture');
export const imagePopupDescription = imagePopup.querySelector('.image-popup__description');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__profession');
export const cardsContainer = document.querySelector('.cards');
export const profileEditPopupButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_type_profile');
export const newCardPopup = document.querySelector('.popup_type_new-card');
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