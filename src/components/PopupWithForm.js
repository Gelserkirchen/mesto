import { Popup } from "./Popup.js";
import {
    newCardPopupSelector,
    profilePopupSelector,
    inputProfileName,
    inputProfileProfession,
    inputPlaceName,
    inputPlaceLink,
    usersInfo
} from "../utils/constants.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submit = submitForm;
        this._popupInputs = this._popup.querySelector('.popup__inputs');
        this._inputList = this._popup.querySelectorAll('.form__input');
    }

    _getInputValues() {
        debugger
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        super.close();
        // this._validator.removeErrors();
        if (this._popupSelector === newCardPopupSelector) {
            inputPlaceName.value = '';
            inputPlaceLink.value = '';
        }
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        this._submit(evt, this._getInputValues());
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupInputs.addEventListener('submit', (evt) => { this._handleSubmitForm(evt) });
    }
}