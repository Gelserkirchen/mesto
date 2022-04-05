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
  profileName,
  profileJob,
  image,
  imagePopupDescription
} from '../utils/constants.js';

// newCardPopupSelector,
// inputPlaceName,
// inputPlaceLink,

// profilePopupSelector,
// inputProfileProfession,
// inputProfileName,

// usersInfo


const profileValidation = new FormValidator(validationSettings, profilePopup);
const newCardFormValidation = new FormValidator(validationSettings, newCardPopup);
const usersInfo = new UserInfo({ name: profileName.textContent, profession: profileJob.textContent });

profileValidation.enableValidation();
newCardFormValidation.enableValidation();

// const newCardPopupInputs = { firstInput: inputPlaceName, secondInput: inputPlaceLink}
const popupNewCard = new PopupWithForm(newCardPopupSelector, handleNewCard);
popupNewCard.setEventListeners();

const popupUserProfile = new PopupWithForm(profilePopupSelector, handleProfileFormSubmit);
popupUserProfile.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector, { image, imagePopupDescription });
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
  newCardFormValidation.removeErrors();
  newCardFormValidation.disableButtonState();
}

function resetPopupInputs() {

}

function handleProfileFormSubmit(evt, data) {
  evt.preventDefault();
  usersInfo.setUserInfo(data[0]);
}

// Add listeners
profileEditPopupButton.addEventListener('click', () => {
  inputProfileName.value = usersInfo.getUserInfo().name;
  inputProfileProfession.value = usersInfo.getUserInfo().profession;
  popupUserProfile.open();
});

addNewCardButton.addEventListener('click', () => {
  newCardFormValidation.removeErrors(); // 777
  popupNewCard.open();
});


render();
