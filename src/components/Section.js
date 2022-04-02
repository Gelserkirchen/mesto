export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._data = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems = [];

        this._data.reverse().forEach((item) => {
            const newItem = this._renderer(item);
            this._renderedItems.push(newItem);
        });
        return this._renderedItems;
    }

    addItem(item) {
        this._container.prepend(item.createCard());
    }
}