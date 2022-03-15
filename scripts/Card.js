import { openPopup } from './index.js'
import { imagePopup, image, imagePopupDescription } from './constants.js';

export class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
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
        image.src = this.src;
        image.alt = this.alt; 
        imagePopupDescription.textContent = this.alt;

        openPopup(imagePopup);
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

        console.log('i am here')

        return cardElement
    }
}

