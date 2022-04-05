export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupSelector = popupSelector;
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('click', this._handleClosePopupByClickOnDarkBackground.bind(this));
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleClosePopupByClickOnDarkBackground(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleClosePopupByClickOnDarkBackground.bind(this));
        this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
    }
}