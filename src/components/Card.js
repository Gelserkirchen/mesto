export class Card {
    constructor(data, templateSelector, handleImageClick) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }

    _handleLikeButton(evt) {
        evt.target.classList.toggle('card__like-button_active');
        evt.target.classList.toggle('card__like-button');
    }

    _handleCardDelete(evt) {
        evt.target.closest('.card').remove();
    }

    createCard() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        this._cardElement = cardTemplate.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.card__image');

        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;

        this._cardElement.querySelector('.card__text').textContent = this._data.name;
        this._likeButton = this._cardElement.querySelector('.card__like-button');
        this._deleteButton = this._cardElement.querySelector('.card__delete-button');

        this._setEventListeners();

        return this._cardElement
    }

    _setEventListeners() {
        // Add EvtListener to card
        this._likeButton.addEventListener('click', this._handleLikeButton);
        this._deleteButton.addEventListener('click', this._handleCardDelete);
        this._cardImage.addEventListener('click', this._handleImageClick);
    }
}

