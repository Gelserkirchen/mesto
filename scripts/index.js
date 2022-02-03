const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const card = document.querySelector('.card__template').content;
const cardsContainer = document.querySelector('.cards');
const bodyRoot = document.querySelector('.root');
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_profile');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.image-popup');
const addNewCardButton = document.querySelector('.profile__add-button');

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
  deleteButton.addEventListener('click', deleteCardHandler);
  cardImage.addEventListener('click', openCardImageHandler);

  return cardElement
}

function handleLikeButton(evt) {
  const likeButton = evt.target
  if (!likeButton.classList.contains('card__like-button_active')) {
    likeButton.classList.add('card__like-button_active');
    likeButton.classList.remove('card__like-button');

  } else {
    likeButton.classList.add('card__like-button');
    likeButton.classList.remove('card__like-button_active');
  }
}

function deleteCardHandler(evt) {
  evt.target.closest('.card').remove();
}

// open image to full screen
function openCardImageHandler(evt) {
  const imageSrc = evt.target.src;
  const imageDescription = evt.target.parentElement.querySelector('.card__text').textContent;

  imagePopup.querySelector('.image-popup__picture').src = imageSrc;
  imagePopup.querySelector('.image-popup__description').textContent = imageDescription;
  openPopup(imagePopup);

  // imagePopup.querySelector('.close-button').addEventListener('click', closeImagePopup);
  imagePopup.querySelector('.close-button').addEventListener('click', closePopup);
  bodyRoot.appendChild(imagePopup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function renderProfilePopup() {
  // add listener for inputs
  const placePopupFormInputs = profilePopup.querySelector('.popup__inputs');
  placePopupFormInputs.addEventListener('submit', handleProfileFormSubmit);

  // add listener for close button
  const profilePopupCloseButton = profilePopup.querySelector('.close-button');
  profilePopupCloseButton.addEventListener('click', closePopup);

  openPopup(profilePopup);
  bodyRoot.appendChild(profilePopup);
}

function renderNewCardPopup() {
  // add listener for inputs
  const placePopupFormInputs = newCardPopup.querySelector('.popup__inputs');
  placePopupFormInputs.addEventListener('submit', addNewCardHandler);

  // add listener for close button
  const profilePopupCloseButton = newCardPopup.querySelector('.close-button');
  profilePopupCloseButton.addEventListener('click', closePopup);

  openPopup(newCardPopup);
  bodyRoot.appendChild(newCardPopup);
}

// Add new card to cards
function addNewCardHandler(evt) {
  evt.preventDefault();
  const obj = {};
  obj.name = evt.target.querySelector('.popup__input_type_name').value;
  obj.link = evt.target.querySelector('.popup__input_type_profile').value;

  closePopup(evt);
  renderItem(obj);
}

// Save result of popup to profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  removePopupEventListeners(evt, popup);
  profileName.textContent = popup.querySelector('.popup__input_type_name').value;
  profileJob.textContent = popup.querySelector('.popup__input_type_profile').value;
  closePopup(evt);
}

// Close popup without saving
function closePopup(evt) {
  const popup = evt.target.closest('.popup_opened');
  removePopupEventListeners(evt, popup);
  popup.classList.remove('popup_opened');
  bodyRoot.removeChild(popup);
}

// Remove profile popup listeners
function removePopupEventListeners(evt, popup) {
  const closeButton = popup.querySelector('.close-button');
  closeButton.removeEventListener('click', closePopup);
}

profileEditPopupButton.addEventListener('click', renderProfilePopup);
addNewCardButton.addEventListener('click', renderNewCardPopup);


render();