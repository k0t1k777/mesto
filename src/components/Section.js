export default class Section {
  constructor({ items, renderer }, selector) {
    this._container = document.querySelector(selector);
    this._initialCards = items;
    this._renderer = renderer;
  }
  // Отрисовка всех элементов на странице
  renderItems() {
    this._initialCards.forEach((element) => {
      this._renderer(element);
    });
  }
  // Размещает на странице
  addItem(domElement) {
    this._container.prepend(domElement);
  }
}
