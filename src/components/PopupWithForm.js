import { Popup } from "./Popup.js";
import { newCardPopupSelector } from "../utils/constants.js"

export class PopupWithForm extends Popup {

    constructor(popupSelector, submitForm) {
        // debugger
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._submit = submitForm
    }

    _getInputValues() {
        debugger
        // const newItem = ;
        // this._popup.querySelector('.popup__inputs');

        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));

        // this._inputList.forEach(input => {
        //     this._formValues[input.name] = input.value;
        // });

        // this._popup[this._inputList[0].name] = this._inputList[0].value;
        // this._popup[this._inputList[1].name] = this._inputList[1].value;

        const name = this._inputList[0].value
        const link = this._inputList[1].value; 

        return { name, link }

    }

    open() {
       super.open();
    //    this.setEventListeners(); 
    }    

    close() {
        super.close();
        // закрыть попап:
        // -- если это попап с новой карточкой -> очистить поля, заблокировать кнопку
        // -- если это попап с профилем -> ничего не очищать, 
        // debugger
        this._popup.querySelector('.popup__inputs').addEventListener('submit', (evt) => {this._handleSubmitForm(evt)});
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        debugger
        const data = [];
        data.push(this._getInputValues());
        this._submit(evt, data);

        // debugger
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        // const data = new UserInfo({ inputPlaceName, inputPlaceLink }); // for Profile Popup

        // debugger
        // this._popup.querySelector('.popup__inputs').addEventListener('submit', (evt) => {
        //     // debugger
        //     evt.preventDefault();

        //     const data = [];
        //     data.push(this._getInputValues());
        //     this._submit(evt, data);

        //     // debugger
        //     this.close();
        // });

        this._popup.querySelector('.popup__inputs').addEventListener('submit', (evt) => {this._handleSubmitForm(evt)});


    }
}