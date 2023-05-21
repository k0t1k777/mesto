export default class Card {
  constructor(cardData, selectorTemplate, openImagePopup, popupConfirm) {
    this._item = cardData;
    this._link = cardData.link;
    this._name = cardData.title;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._popupConfirm = popupConfirm;
  };
  _getTemplate() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".elements__element")
      .cloneNode(true);
  };
  _handleLike = () => {
    this.like.classList.toggle("elements__button_active");
  };
  _handleDelete = () => {
    this._popupConfirm(this);
  };
  deleteCard() {
    this.urn.closest(".elements__element").remove();
  }
  _handleCreateImage = () => {
    this._openImagePopup(this._item);
  };
  _setEventListener() {
    this.like.addEventListener("click", this._handleLike);
    this.urn.addEventListener("click", this._handleDelete);
    this.image.addEventListener("click", this._handleCreateImage);
  };
  createCard() {
    this._cloneTemplateElement = this._getTemplate();
    this.image = this._cloneTemplateElement.querySelector(".elements__image");
    this.urn = this._cloneTemplateElement.querySelector(
      ".elements__element_urn"
    );
    this.like = this._cloneTemplateElement.querySelector(".elements__button");
    this._cloneTemplateName =
      this._cloneTemplateElement.querySelector(".elements__name");
    this._cloneTemplateName.textContent = this._name;
    this.image.src = this._link;
    this.image.alt = this._name;
    this._setEventListener();
    return this._cloneTemplateElement;
  };
};
