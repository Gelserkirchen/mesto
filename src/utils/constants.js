export const imagePopup = document.querySelector('.image-popup');
export const avatarSelector = '.profile__avatar';
export const avatar = document.querySelector('.profile__avatar');
export const imagePopupSelector = '.image-popup';
export const image = imagePopup.querySelector('.image-popup__picture');
export const imagePopupDescription = imagePopup.querySelector('.image-popup__description');
export const profileName = document.querySelector('.profile__name');
export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__profession';
export const profileJob = document.querySelector('.profile__profession');
export const cardsContainerSelector = '.cards';
export const profileEditPopupButton = document.querySelector('.profile__edit-button');
export const profilePopupSelector = '.popup_type_profile';
export const profilePopup = document.querySelector(profilePopupSelector);
export const newCardPopupSelector = '.popup_type_new-card';
export const newCardPopup = document.querySelector(newCardPopupSelector);
export const updAvatarSelector = '.popup_type_update-avatar';
export const updAvatarPopup = document.querySelector(updAvatarSelector);
export const updAvatarPopupInput = updAvatarPopup.querySelector('.popup__input_type_link');
export const addNewCardButton = document.querySelector('.profile__add-button');
export const inputProfileName = profilePopup.querySelector('.popup__input_type_name');
export const inputProfileProfession = profilePopup.querySelector('.popup__input_type_profile');
export const inputPlaceName = newCardPopup.querySelector('.popup__input_type_place');
export const inputPlaceLink = newCardPopup.querySelector('.popup__input_type_link');
export const popupDeleteCardSelector = '.popup_type_delete-card';
export const popupSubmitButton = '.popup__save-button';

export const validationSettings = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: popupSubmitButton,
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};