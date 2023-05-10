const log = console.log;
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButtons = this._popup.querySelector(".popup__close");
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  _handleCloseButtons = () => {
    this.close();
  };
  _handleClosePopupOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };
  setEventListeners() {
    this._popup.addEventListener("click", this._handleClosePopupOnOverlay);
    this._closeButtons.addEventListener("click", this._handleCloseButtons);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
