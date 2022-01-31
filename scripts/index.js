let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
let card = document.querySelector('.card__template').content;
let cardsContainer = document.querySelector('.cards');
let bodyRoot = document.querySelector('.root');

const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup__template').content;

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
  initialCards.forEach(renderItem);
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
  cardsContainer.appendChild(Item);
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

function openCardImageHandler(evt) {
  const image = evt.target;
  console.log(image)
}

// Open popup
function openPopup() {
  const templatePopup = profilePopup.cloneNode(true);

  const profilePopupFormInputs = templatePopup.querySelector('.popup__inputs');
  profilePopupFormInputs.addEventListener('submit', formSubmitHandler);

  const profilePopupCloseButton = templatePopup.querySelector('.popup__close-button');
  profilePopupCloseButton.addEventListener('click', closePopup);

  let namePopupInput = templatePopup.querySelector('.popup__input_type_name');
  namePopupInput.value = profileName.textContent;
  let jobPopupInput = templatePopup.querySelector('.popup__input_type_profile');
  jobPopupInput.value = profileJob.textContent;

  const popup = templatePopup.querySelector('.popup');
  popup.classList.add('popup_opened');
  bodyRoot.appendChild(popup);
}

// Close popup without saving
function closePopup(evt) {
  const popup = evt.target.closest('.popup');
  removePopupEventListeners(evt, popup);
  popup.classList.remove('popup_opened');
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

function removePopupEventListeners(evt, popup) {
  const closeButton = popup.querySelector('.popup__close-button');
  closeButton.removeEventListener('click', closePopup);

  const inputs = popup.querySelector('.popup__inputs');
  inputs.removeEventListener('submit', formSubmitHandler);
}

profileEditPopupButton.addEventListener('click', openPopup);

render();