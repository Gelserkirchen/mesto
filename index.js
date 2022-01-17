const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const profilePopupCloseButton = document.querySelector('.popup__close-button');
const submitPopupButton = document.querySelector('.popup__save-button');

let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__profession');
let namePopup = document.querySelector('.popup__input_name');
let jobPopup = document.querySelector('.popup__input_profile');

function openPopup(event) {
  event.preventDefault();
  namePopup.value = nameInput.textContent;
  jobPopup.value = jobInput.textContent;
  profilePopup.classList.add('popup_opened');
}

function closePopup() {
  profilePopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.textContent = namePopup.value;
  jobInput.textContent = jobPopup.value;
  closePopup();
}

submitPopupButton.addEventListener('click', formSubmitHandler);
profileEditPopupButton.addEventListener('click', openPopup);
profilePopupCloseButton.addEventListener('click', closePopup);
profilePopup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
})
