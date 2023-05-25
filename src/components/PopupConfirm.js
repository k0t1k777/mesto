import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitBtn = this._form.querySelector(".popup__submit-button");
    this._submitBtnNew = this._submitBtn.textContent;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitBtn.textContent = `Удаление...`;
      this._submitForm({ card: this._item, cardID: this._cardID });
    });
  }
  textLoading() {
    this._submitBtn.textContent = this._submitBtnNew;
  }
  open = ({ card, cardID }) => {
    super.open();
    this._item = card;
    this._cardID = cardID;
  };
}
