export class FormValidator {
  constructor(setting, formElement) {
    this._setting = setting;
    this._formElement = formElement;
    this._inputs = Array.from(
      this._formElement.querySelectorAll(setting.inputSelector)
    );
    this._button = this._formElement.querySelector(
      setting.submitButtonSelector
    );
  }

  resetValidation = () => {
    this._inputs.forEach((inputs) => {
      this._hideError(inputs, this._setting);
    });
  };

  _showError = (input) => {
    const error = input.validationMessage;
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
    errorElement.classList.add(this._setting.errorClass);
  };

  _hideError = (input) => {
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(this._setting.errorClass);
  };

  disableButton = () => {
    this._button.disabled = true;
    this._button.classList.add(this._setting.inactiveButtonClass);
  };

  _enableButton = () => {
    this._button.disabled = false;
    this._button.classList.remove(this._setting.inactiveButtonClass);
  };

  _toggleInputError = (input) => {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  };

  _setEventListeners = () => {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleInputError(input);
        this.toggleButtonState(this._inputs, this._button);
      });
    });
  };

  _isValid = () => {
    return this._inputs.every((input) => input.validity.valid);
  };

  toggleButtonState = () => {
    if (this._isValid()) {
      this._enableButton(this._button);
    } else {
      this.disableButton(this._button);
    }
  };

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => e.preventDefault());
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleInputError(input);
        this.toggleButtonState();
      });
    });
  }
}
