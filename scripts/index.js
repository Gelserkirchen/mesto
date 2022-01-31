let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
const card = document.querySelector('.card__template').content;
const imageCard = document.querySelector('.image-popup__template').content;
const cardsContainer = document.querySelector('.cards');
const bodyRoot = document.querySelector('.root');
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup__template').content;
const profileAddCardButton = document.querySelector('.profile__add-button');

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

function renderItem(obj) {
  const Item = card.cloneNode(true);

  // Set image and name to card item
  Item.querySelector('.card__image').src = obj.link;
  Item.querySelector('.card__text').textContent = obj.name;
  const likeButton = Item.querySelector('.card__like-button');
  const deleteButton = Item.querySelector('.card__delete-button');
  const imageCard = Item.querySelector('.card__image');

  // Add EvtListener to card
  likeButton.addEventListener('click', likeHandler);
  deleteButton.addEventListener('click', deleteCardHandler);
  imageCard.addEventListener('click', openCardImageHandler)

  cardsContainer.prepend(Item);
}

function likeHandler(evt) {
  const likeButton = evt.target
  if (!likeButton.classList.contains('card__like-button_active')) {
    console.log('i am here');
    likeButton.classList.add('card__like-button_active');
    likeButton.classList.remove('card__like-button');

  } else {
    console.log('i am not here');
    likeButton.classList.add('card__like-button');
    likeButton.classList.remove('card__like-button_active');
  }
}

function deleteCardHandler(evt) {
  evt.target.closest('.card').remove();
}

// open image to full screen
function openCardImageHandler(evt) {
  const templateImagePopup = imageCard.cloneNode(true);

  const imageSrc = evt.target.src;
  const imageDescription = evt.target.parentElement.querySelector('.card__text').textContent;

  templateImagePopup.querySelector('.image-popup__picture').src = imageSrc;
  templateImagePopup.querySelector('.image-popup__description').textContent = imageDescription;
  templateImagePopup.querySelector('.image-popup').classList.add('image-popup_active');

  templateImagePopup.querySelector('.image__close-button').addEventListener('click', closeImagePopup);

  bodyRoot.appendChild(templateImagePopup);
}

// close full image popup
function closeImagePopup(evt) {
  evt.target.removeEventListener('click', closeImagePopup);
  evt.target.closest('.image-popup').classList.remove('image-popup_active');
  bodyRoot.removeChild(evt.target.closest('.image-popup'));
}

// Open profile popup
function openProfilePopup() {
  openPopup(formSubmitHandler, 'Редактировать профиль', 'Имя', 'Профессия', 'Создать');
}

// Open new card popup
function openNewCardPopup() {
  openPopup(addNewCardHandler, 'Новое место', 'Название', 'Ссылка на картинку', 'Создать');
}

function openPopup(inputsHandler, popupName, firstPlaceholder, secondPlaceholder, buttonName) {
  const templatePopup = profilePopup.cloneNode(true);

  // add listener for inputs
  const placePopupFormInputs = templatePopup.querySelector('.popup__inputs');
  placePopupFormInputs.addEventListener('submit', inputsHandler);

  // add listener for close button
  const profilePopupCloseButton = templatePopup.querySelector('.popup__close-button');
  profilePopupCloseButton.addEventListener('click', closePopup);

  // set name for popup and nameInput
  templatePopup.querySelector('.popup__title').textContent = popupName;
  const namePopupInput = templatePopup.querySelector('.popup__input_type_name');
  namePopupInput.setAttribute('placeholder', firstPlaceholder);
  namePopupInput.value = popupName === 'Редактировать профиль' ? profileName.textContent : '';

  // set profile/link for input
  const jobPopupInput = templatePopup.querySelector('.popup__input_type_profile');
  jobPopupInput.setAttribute('placeholder', secondPlaceholder);
  placePopupFormInputs.querySelector('.popup__save-button').innerText = buttonName;
  jobPopupInput.value = popupName === 'Редактировать профиль' ? profileJob.textContent : '';

  // add popup to the root
  const popup = templatePopup.querySelector('.popup');
  popup.classList.add('popup_opened');
  bodyRoot.appendChild(popup);
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
function formSubmitHandler(evt) {
  evt.preventDefault();
  const popup = evt.target.closest('.popup');
  removePopupEventListeners(evt, popup);
  profileName.textContent = popup.querySelector('.popup__input_type_name').value;
  profileJob.textContent = popup.querySelector('.popup__input_type_profile').value;
  closePopup(evt);
}

// Close popup without saving
function closePopup(evt) {
  const popup = evt.target.closest('.popup');
  removePopupEventListeners(evt, popup);
  popup.classList.remove('popup_opened');
  bodyRoot.removeChild(popup);
}

// Remove profile popup listeners
function removePopupEventListeners(evt, popup) {
  const closeButton = popup.querySelector('.popup__close-button');
  closeButton.removeEventListener('click', closePopup);

  const inputs = popup.querySelector('.popup__inputs');
  inputs.removeEventListener('submit', formSubmitHandler);
}

profileEditPopupButton.addEventListener('click', openProfilePopup);
profileAddCardButton.addEventListener('click', openNewCardPopup);


render();