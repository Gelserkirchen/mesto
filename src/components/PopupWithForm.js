import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {

    constructor(popupSelector, callback) {
        super(popupSelector);
        this._submit = callback
    }

    _getInputValues() {

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
        this.querySelector('.popup__inputs').removeEventListener('submit', this._submit);

        
    }

    setEventListeners() {
        super.setEventListeners()

        // debugger
        this._popup.querySelector('.popup__inputs').addEventListener('submit', this._submit);
        

        //   profilePopup.querySelector('.popup__inputs').addEventListener('submit', handleProfileFormSubmit);
        //   profilePopup.querySelector('.popup__close-button').addEventListener('click', () => {
        //     profileValidation.resetForm();
        //     profileValidation.enableButtonState();
        //     closePopup(profilePopup)
        //   });
        //   profilePopup.addEventListener('click', (evt) => {
        //     profileValidation.resetForm();
        //     profileValidation.enableButtonState();
        //     // closePopupByClickOnDarkBackground(evt, profilePopup);
        //   })


        // newCardPopup.querySelector('.popup__inputs').addEventListener('submit', (evt) => {
        //     const data = new UserInfo({ inputPlaceName, inputPlaceLink });
        //     handleNewCard(evt, data);
        //   });
          
        //   newCardPopup.querySelector('.popup__close-button').addEventListener('click', () => {
        //     clearInputs();
        //     newCardValidation.resetForm();
        //     closePopup(newCardPopup);
        //   });
        //   newCardPopup.addEventListener('click', (evt) => {
        //     closePopupByClickOnDarkBackground(evt, newCardPopup);
        //   })
          

    }
}