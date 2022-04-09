export class Card {
    constructor(data, templateSelector, handleImageClick, handleDeleteCard) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
        this._handleDeleteCard = handleDeleteCard; // нужно переименовать то что я добавил
    }

    _handleLikeButton(evt) {
        evt.target.classList.toggle('card__like-button_active');
        evt.target.classList.toggle('card__like-button');
    }

    _deleteCard(evt) { 
        evt.target.closest('.card').remove();
    }

    _setLikes(numberOfLikes) {
        const numberOfLikesElement = this._cardElement.querySelector('.card__like-number');
        numberOfLikesElement.textContent = numberOfLikes; 
    }

    createCard() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        this._cardElement = cardTemplate.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.card__image');

        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;
        this._cardId = this._data.cardId;

        this._cardElement.querySelector('.card__text').textContent = this._data.name;
        this._likeButton = this._cardElement.querySelector('.card__like-button');
        this._deleteButton = this._cardElement.querySelector('.card__delete-button');

        this._setLikes(Array.from(this._data.likes).length);


        this._setEventListeners();

        return this._cardElement
    }

    _setEventListeners() {
        // Add EvtListener to card
        this._likeButton.addEventListener('click', this._handleLikeButton);
        this._deleteButton.addEventListener('click', (evt) => { 
            this._handleDeleteCard(() => {this._deleteCard(evt)}, this._cardId); 
        } );
        this._cardImage.addEventListener('click', this._handleImageClick);
    }
}

