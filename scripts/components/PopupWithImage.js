import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._zoomPicture = this._popup.querySelector(".popupForImage__image");
    this._figcaptionPicture = this._popup.querySelector(
      ".popupForImage__figcaption"
    );
  }
  open = (cardData) => {
    this._zoomPicture.src = cardData.link;
    this._zoomPicture.alt = cardData.title;
    this._figcaptionPicture.textContent = cardData.title;
    super.open();
  };
}
