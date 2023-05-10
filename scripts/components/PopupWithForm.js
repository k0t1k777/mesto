import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector(".popup__form");
    this._inputsList = this._form.querySelectorAll(".popup__input");
  }
  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }

  getInputsValues() {
    this._values = {};
    this._inputsList.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }
  setInputsValues(dataUser) {
    this._inputsList.forEach((input) => {
      input.value = dataUser[input.name];
    });
  }
}
