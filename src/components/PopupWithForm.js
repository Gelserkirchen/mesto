import { Popup } from "./Popup.js";
import { newCardPopupSelector, profilePopupSelector, inputProfileName, inputProfileProfession, profileName, profileJob } from "../utils/constants.js"

export class PopupWithForm extends Popup {

    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._submit = submitForm;

    }

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));

        const firstInput = this._inputList[0].value
        const secondInput = this._inputList[1].value;

        if (this._popupSelector === newCardPopupSelector) { 
            return { name: firstInput, link: secondInput} } 
            else { return { name: firstInput, profession: secondInput } 
        }
    }

    open() { // открыть попап
        super.open();

        if (this._popupSelector === profilePopupSelector) { 
            debugger
            inputProfileName.value = profileName.textContent;
            inputProfileProfession.value = profileJob.textContent;
        }

    }

    close() {
        super.close();
        // закрыть попап:
        // -- если это попап с новой карточкой -> очистить поля, заблокировать кнопку
        // -- если это попап с профилем -> ничего не очищать, 
        // debugger
        // this._popup.querySelector('.popup__inputs').removeEventListener('submit', (evt) => { this._handleSubmitForm(evt) });
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
        this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
    }
}