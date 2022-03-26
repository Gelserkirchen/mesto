import { openPopup} from '../pages'
import {image, imagePopupDescription} from '../utils/constants';
import {PopupWithImage} from './PopupWIthImage';
// import {image, imagePopup, imagePopupDescription} from '../utils/constants';
export class Card {
    constructor(data, templateSelector, submitFormHandler) {
        this._data = data; // name and link
        this._templateSelector = templateSelector; // .card_template
        this._submitFormHandler = submitFormHandler;
    }

    _handleLikeButton() {
        this.classList.toggle('card__like-button_active');
        this.classList.toggle('card__like-button');
    }

    _handleCardDelete() {
        this.closest('.card').remove();
    }

    // open image to full screen
    _handleOpenCardImage() {
        const imagePopup = new PopupWithImage(this._templateSelector, this._submitFormHandler);
        imagePopup.open(this._data);
    }

    createCard() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        const cardElement = cardTemplate.cloneNode(true);
        const cardImage = cardElement.querySelector('.card__image');

        cardImage.src = this._data.link;
        cardImage.alt = this._data.name;

        cardElement.querySelector('.card__text').textContent = this._data.name;
        const likeButton = cardElement.querySelector('.card__like-button');
        const deleteButton = cardElement.querySelector('.card__delete-button');

        // Add EvtListener to card
        likeButton.addEventListener('click', this._handleLikeButton);
        deleteButton.addEventListener('click', this._handleCardDelete);
        cardImage.addEventListener('click', this._handleOpenCardImage);

        return cardElement
    }
}

