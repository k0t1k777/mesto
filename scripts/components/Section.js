export default class Section {
  constructor({ items, renderer }, selector) {
    this._container = document.querySelector(selector);
    this._initialCards = items;
    this.renderer = renderer;
  }
  // Отрисовка всех элементов на странице
  addOnPage() {
    this._initialCards.forEach((element) => {
      this.addItem(this.renderer(element));
    });
  }
  // Размещает на странице
  addItem(domElement) {
    this._container.prepend(domElement);
  }
}
