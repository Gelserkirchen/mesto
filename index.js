const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const profilePopupCloseButton = document.querySelector('.popup__close');


let formElement = document.querySelector('.popup__container'); // Попап

let nameInput = document.querySelector('.profile__name'); // Имя с сайта
let jobInput = document.querySelector('.profile__profession'); // Фио с сайта
let namePopup = document.querySelector('.popup__input_name'); // Имя с попапа
let jobPopup = document.querySelector('.popup__input_profile'); // Работа с попапа

const submitPopupButton = document.querySelector('.popup-button');

function openPopup(event) {
  event.preventDefault();
  namePopup.value = nameInput.textContent;
  jobPopup.value = jobInput.textContent;
  profilePopup.classList.add('popup_opened');
}

function closePopup() {
  profilePopup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput.textContent = namePopup.value;
    jobInput.textContent = jobPopup.value;
    closePopup();

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
submitPopupButton.addEventListener('click', formSubmitHandler);
profileEditPopupButton.addEventListener('click', openPopup); // открытие попапа
profilePopupCloseButton.addEventListener('click', closePopup); // закрытие попапа
// Закрытие по пустому полю
profilePopup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    closePopup();
  }
})
