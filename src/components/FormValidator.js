export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._activeButtonClass = config.activeButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._button = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }
  enableValidation() {
    this._setEventListener();
  }
  _setEventListener() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  }
  // Проверка валидности инпутов
  _checkInputValidity(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.validity.valid
      ? this._hideErrorMessage(input, error)
      : this._showErrorMessage(input, error);
  }
  _hideErrorMessage(input, error) {
    input.classList.remove(this._inputErrorClass);
    error.textContent = "";
    error.classList.remove(this._errorClass);
  }
  _showErrorMessage(input, error) {
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
  }
  _toggleButton() {
    if (this._hasInvalidInput()) {
      this._disableButton(this._button);
    } else {
      this._enableButton();
    }
  }
  _hasInvalidInput() {
    return Array.from(this._inputList).some((item) => !item.validity.valid);
  }
  _enableButton = () => {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.classList.add(this._activeButtonClass);
    this._button.removeAttribute("disabled", "disabled");
  };
  _disableButton = () => {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.classList.remove(this._activeButtonClass);
    this._button.setAttribute("disabled", "disabled");
  };
  // Сброс ошибок
  resetValidation () {
    this._inputList.forEach((input) => {
      const error = this._form.querySelector(`#${input.id}-error`);
      if (!input.validity.valid) {
        this._hideErrorMessage(input, error);
      }
    });
    this._disableButton();
  }
}
