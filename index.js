const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const profilePopupCloseButton = document.querySelector('.popup__close-button');
const submitPopupButton = document.querySelector('.popup__save-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
let namePopupInput = document.querySelector('.popup__input_name');
let jobPopupInput = document.querySelector('.popup__input_profile');

// Open popup
function openPopup(event) {
  event.preventDefault();
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

// Enter for save Name of user
namePopupInput.addEventListener('keyup', function (evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    evt.preventDefault();
    formSubmitHandler(evt);
  }
});

// Enter for save job title
jobPopupInput.addEventListener('keyup', function (evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    evt.preventDefault();
    formSubmitHandler(evt);
  }
});


// add Event Listeners to objects
submitPopupButton.addEventListener('click', formSubmitHandler);
profileEditPopupButton.addEventListener('click', openPopup);
profilePopupCloseButton.addEventListener('click', closePopup);
profilePopup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
})
