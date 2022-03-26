import {Popup} from './Popup';
import {image, imagePopupDescription} from '../utils/constants';

export class PopupWithImage extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
    }

    open(data) {
        image.src = data.link;
        image.alt = data.name;
        imagePopupDescription.textContent = this._data.name;
    }

    close() {
        
    }

    _getInputValues() {

    }

    setEventListeners() {
        super.setEventListeners();
        this._submitFormHandler();
    }
}