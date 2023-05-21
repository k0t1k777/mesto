import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
  }
  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this.item);
    });
  };
  open = (item) => {
    super.open();
    this.item = item;
  };
  setEventListeners() {
    super.setEventListeners();
  }
};





