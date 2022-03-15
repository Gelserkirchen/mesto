export class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
    }

    _showInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._settings.errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };


    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _toggleButtonState() {
        const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);

        if (this._hasInvalidInput()) {
            buttonElement.disabled = true;
            buttonElement.classList.add(this._settings.inactiveButtonClass);
        } else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    };

    _setEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    };
}





