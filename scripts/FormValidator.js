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

    disableButtonState() {
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    }

    enableButtonState() {
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }

    _setEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);

                if (this._hasInvalidInput()) {
                    this.disableButtonState();
                } else {
                    this.enableButtonState();
                }
            });
        });
    };

    resetForm() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
    }    

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    };
}