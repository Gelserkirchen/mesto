const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const card = document.querySelector('.card__template').content;
const cardsContainer = document.querySelector('.cards');
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_profile');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.image-popup');
const addNewCardButton = document.querySelector('.profile__add-button');
const image = imagePopup.querySelector('.image-popup__picture');
const imagePopupDescription = imagePopup.querySelector('.image-popup__description');
const cardPopupInputs = newCardPopup.querySelectorAll('.popup__input');
const inputProfileName = profilePopup.querySelector('.popup__input_type_name');
const inputProfileProfession = profilePopup.querySelector('.popup__input_type_profile');
const inputPlaceName = newCardPopup.querySelector('.popup__input_type_place');
const inputPlaceLink = newCardPopup.querySelector('.popup__input_type_link');
const addNewCardPopupButton = newCardPopup.querySelector('.popup__save-button');

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

  const obj = {};

  obj.name = inputPlaceName.value;
  obj.link = inputPlaceLink.value;

  inputPlaceName.value = '';
  inputPlaceLink.value = '';

  addNewCardPopupButton.disabled = true;
  addNewCardPopupButton.classList.add('popup__save-button_inactive');

  closePopup(newCardPopup);
  renderItem(obj);
}

function renderItem(data) {
  const item = createCard(data)
  cardsContainer.prepend(item);
}

function createCard(data) {
  const cardElement = card.cloneNode(true);
  // Set image and name to card item
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardElement.querySelector('.card__text').textContent = data.name;
  const likeButton = cardElement.querySelector('.card__like-button');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  // Add EvtListener to card
  likeButton.addEventListener('click', handleLikeButton);
  deleteButton.addEventListener('click', handleCardDelete);
  cardImage.addEventListener('click', handleOpenCardImage);

  return cardElement
}

function handleLikeButton(evt) {
  const likeButton = evt.target

  likeButton.classList.toggle('card__like-button_active');
  likeButton.classList.toggle('card__like-button');
}

function handleCardDelete(evt) {
  evt.target.closest('.card').remove();
}

// open image to full screen
function handleOpenCardImage(evt) {
  const imageSrc = evt.target.src;
  const imageDescription = evt.target.alt;

  image.src = imageSrc;
  image.alt = imageDescription;
  imagePopupDescription.textContent = imageDescription;

  openPopup(imagePopup);
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

function openPopup(popup) {
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
