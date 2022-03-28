import { newCardPopup } from '../utils/constants.js';
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() { // открыть попап
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() { // закрыть попап
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscCLose);
        this._popup.removeEventListener('click', this._handleClosePopupByClickOnDarkBackground.bind(this));
    }

    _handleClosePopupByClickOnDarkBackground(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleEscCLose(evt) { // логика закрытия попапа через Esc
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() { // добавляет слушатель клика иконке закрытия попапа
        document.addEventListener('keydown', this._handleEscCLose.bind(this));
        this._popup.addEventListener('click', this._handleClosePopupByClickOnDarkBackground.bind(this));
    }
}