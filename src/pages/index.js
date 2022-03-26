import {FormValidator} from '../components/FormValidator.js'
import {Card} from '../components/Card.js'
import {Section} from '../components/Section.js'
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
  initialCards
} from '../utils/constants';

// создаем новую карточку 



const newCardValidation = new FormValidator(validationSettings, newCardPopup);
const profileValidation = new FormValidator(validationSettings, profilePopup);

newCardValidation.enableValidation();
profileValidation.enableValidation();


function render() {
  initialCards.reverse().forEach(
    (data) => {
      const item = renderItem(data);
      insertItem(item);
    }
  );
}

function openCardPopup() {
  openPopup(newCardPopup);
}

function clearInputs() {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
}

// Add new card to cards
function handleNewCard(evt) {
  evt.preventDefault();

  const data = {};

  data.name = inputPlaceName.value;
  data.link = inputPlaceLink.value;

  clearInputs();
  newCardValidation.disableButtonState();
  closePopup(newCardPopup);

  const item = renderItem(data);
  insertItem(item);
}

function renderItem(data) {
  const item = new Card(data, '.card__template');
  return item;
}

function insertItem(item) {
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
newCardPopup.querySelector('.popup__inputs').addEventListener('submit', handleNewCard);
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
