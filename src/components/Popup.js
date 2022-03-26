import {newCardPopup} from '../utils/constants.js';
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() { // открыть попап
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscCLose.bind(this));
    }

    close() { // закрыть попап
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscCLose);
    }

    _handleEscCLose(evt) { // логика закрытия попапа через Esc
        if (evt.key === 'Escape') {
            const currentPopup = document.querySelector('.popup_opened');
            this.close(currentPopup);
        }
    }

    setEventListeners() { // добавляет слушатель клика иконке закрытия попапа

    }
}