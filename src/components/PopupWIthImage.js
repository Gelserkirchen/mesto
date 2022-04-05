import { Popup } from './Popup.js';
import { image, imagePopupDescription } from '../utils/constants.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, {imagePopup, imagePopupDescription}) {
        super(popupSelector);
        this._image = imagePopup;
        this._imagePopupDescription = imagePopupDescription;
    }

    open(data) {
        super.open();
        this._image.src = data.src;
        this._image.alt = data.alt;
        this._imagePopupDescription.textContent = data.alt;
    }
}