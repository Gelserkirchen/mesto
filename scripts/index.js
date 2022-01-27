const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const profilePopupFormInputs = document.querySelector('.popup__inputs');
const profilePopupCloseButton = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
let namePopupInput = document.querySelector('.popup__input_type_name');
let jobPopupInput = document.querySelector('.popup__input_type_profile');

// Open popup
function openPopup() {
  namePopupInput.value = profileName.textContent;
  jobPopupInput.value = profileJob.textContent;
  profilePopup.classList.add('popup_opened');
}

// Close popup without saving
function closePopup() {
  profilePopup.classList.remove('popup_opened');
}

// Save result of popup to profile
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = namePopupInput.value;
  profileJob.textContent = jobPopupInput.value;
  closePopup();
}

// add Event Listeners to objects
profilePopupFormInputs.addEventListener('submit', formSubmitHandler);
profileEditPopupButton.addEventListener('click', openPopup);
profilePopupCloseButton.addEventListener('click', closePopup);
// profilePopup.addEventListener('click', function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup();
//   }
// })
