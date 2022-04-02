import {Popup} from './Popup.js';
import {image, imagePopupDescription, imagePopup} from '../utils/constants.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector); // выбрать попап
        this._submitFormHandler = submitFormHandler; // добавить попапу хендлеры
    }

    open(data) {
        super.open(); 
        image.src = data.src;
        image.alt = data.alt;
        imagePopupDescription.textContent = data.alt;
        this.setEventListeners();
    }
}