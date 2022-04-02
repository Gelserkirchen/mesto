import { Popup } from "./Popup.js";
import {
  newCardPopupSelector,
  profilePopupSelector,
  inputProfileName,
  inputProfileProfession,
  profileName,
  profileJob,
  inputPlaceName,
  inputPlaceLink,
  profileValidation, newCardFormValidation, usersInfo
} from "../utils/constants.js"

export class PopupWithForm extends Popup {

    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._submit = submitForm;

    }

    _getInputValues() {
        if (this._popupSelector === newCardPopupSelector) {
            return { name: inputPlaceName.value, link: inputPlaceLink.value }
        }
        else {
            return { name: inputProfileName.value, profession: inputProfileProfession.value};
        }
    }

    open() { // открыть попап
        super.open();

        if (this._popupSelector === profilePopupSelector) {
            inputProfileName.value = usersInfo.getUserInfo().name;
            inputProfileProfession.value = usersInfo.getUserInfo().profession;
        }

    }

    close() {
        super.close();

        if (this._popupSelector === newCardPopupSelector) {
            newCardFormValidation.resetForm();
            inputPlaceName.value = '';
            inputPlaceLink.value = '';
        }
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        const data = [];
        data.push(this._getInputValues());
        this._submit(evt, data);
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__inputs').addEventListener('submit', (evt) => { this._handleSubmitForm(evt) });
    }
}