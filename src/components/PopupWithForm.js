import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector(".popup__form");
    this._inputsList = this._form.querySelectorAll(".popup__input");
    this._submitBtn = this._form.querySelector(".popup__submit-button");
    this._submitBtnNew = this._submitBtn.textContent;
  }
  close() {
    super.close();
    this._form.reset();
  }
  // Сабмит формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitBtn.textContent = `Сохранение...`;
      this._submitForm(this._getInputsValues());
    });
  }
  // "..." при загрузке
  textLoading() {
    this._submitBtn.textContent = this._submitBtnNew;
  }
  setInputsValues(dataUser) {
    this._inputsList.forEach((input) => {
      input.value = dataUser[input.name];
    });
  }
  // Значения Инпутов
  _getInputsValues() {
    this._values = {};
    this._inputsList.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }
}
