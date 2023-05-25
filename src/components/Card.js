export default class Card {
  constructor(
    cardData,
    selectorTemplate,
    openImagePopup,
    popupConfirm,
    makeLike
  ) {
    this._makeLike = makeLike;
    this._cardID = cardData._id;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._selfId = cardData.selfId;
    this._ownerId = cardData.owner._id;
    this._item = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._popupConfirm = popupConfirm;
    this._cloneTemplateElement = this._getTemplate();
    this._image = this._cloneTemplateElement.querySelector(".elements__image");
    this._urn = this._cloneTemplateElement.querySelector(
      ".elements__element_urn"
    );
    this._like = this._cloneTemplateElement.querySelector(".elements__button");
    this._cloneTemplateName =
      this._cloneTemplateElement.querySelector(".elements__name");
    this._count = this._cloneTemplateElement.querySelector(".elements__count");
  }
  // Покраска лайка
  _checkLikes() {
    this._likes.forEach((like) => {
      if (like._id === this._selfId) {
        this._like.classList.add("elements__button_active");
        return;
      }
    });
    this._count.textContent = this._likesLength;
  }
  // Тогл лайков
  _isLike(likes) {
    this._like.classList.toggle("elements__button_active");
    this._count.textContent = likes.length;
  }
  _getTemplate() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".elements__element")
      .cloneNode(true);
  }
  _handleLike = () => {
    this._makeLike(this._like, this._cardID);
  };
  _handleDelete = () => {
    this._popupConfirm({ card: this, cardID: this._cardID });
  };
  deleteCard() {
    this._cloneTemplateElement.remove();
    this._cloneTemplateElement = null;
  }
  _handleCreateImage = () => {
    this._openImagePopup(this._item);
  };
  _setEventListener() {
    this._like.addEventListener("click", this._handleLike);
    this._urn.addEventListener("click", this._handleDelete);
    this._image.addEventListener("click", this._handleCreateImage);
  }
  _visibleUrn() {
    if (this._selfId !== this._ownerId) {
      this._urn.remove();
    }
  }
  createCard() {
    this._cloneTemplateName.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._visibleUrn();
    this._setEventListener();
    this._checkLikes();
    return this._cloneTemplateElement;
  }
}
