import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm = '') {
        super(popupSelector);
        this._submit = submitForm;
        this._popupInputs = this._popup.querySelector('.popup__inputs');
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        super.close();
        this._popupInputs.reset();
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        this._submit(evt, this._getInputValues());
        this.close();
    }

    changeSubmitHandler(newSubmitHandler) {
        this._handleSubmitForm = newSubmitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupInputs.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._handleSubmitForm(evt); 
        });
    }
}