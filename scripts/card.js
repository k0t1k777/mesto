export default class Card {
  constructor(cardData, selectorTemplate, openImagePopup) {
    this._item = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
  }
  _getTemplate() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".elements__element")
      .cloneNode(true);
  }

  _handleLike = () => {
    // log(this)
    this._cloneTemplateLike.classList.toggle("elements__button_active");
  };

  _handleDelete = () => {
    this._cloneTemplateUrn.closest(".elements__element").remove();
  };

  _handleCreateImage = () => {
    this._openImagePopup(this._item);
  };

  _setEventListener() {
    this._cloneTemplateLike.addEventListener("click", this._handleLike);
    this._cloneTemplateUrn.addEventListener("click", this._handleDelete);
    this._cloneTemplateImage.addEventListener("click", this._handleCreateImage);
  }

  createCard() {
    this._cloneTemplateElement = this._getTemplate();
    this._cloneTemplateImage =
      this._cloneTemplateElement.querySelector(".elements__image");
    this._cloneTemplateUrn = this._cloneTemplateElement.querySelector(
      ".elements__element_urn"
    );
    this._cloneTemplateLike =
      this._cloneTemplateElement.querySelector(".elements__button");
    this._cloneTemplateName =
      this._cloneTemplateElement.querySelector(".elements__name");
    this._cloneTemplateName.textContent = this._name;
    this._cloneTemplateImage.src = this._link;
    this._cloneTemplateImage.alt = this._name;
    this._setEventListener();
    return this._cloneTemplateElement;
  }
}
