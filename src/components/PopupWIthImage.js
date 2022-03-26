class PopupWithImage extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
    }

    open(src) {
        this._src = src;
    }

    close() {
        
    }

    _getInputValues() {

    }

    setEventListeners() {
        super.setEventListeners();
    }
}