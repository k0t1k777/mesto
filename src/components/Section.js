export default class Section {
  constructor(renderer, selector) {
    this._container = document.querySelector(selector);
    this._renderer = renderer;
  }
  // Отрисовка всех элементов на странице
  renderItems(card) {
    card.forEach((data) => {
      this._renderer(data);
    });
  }
  // Размещает на странице вначале
  addItemFirst(domElement) {
    this._container.prepend(domElement);
  }
  // Размещает на странице вконце
  addItemLast(domElement) {
    this._container.append(domElement);
  }
}
