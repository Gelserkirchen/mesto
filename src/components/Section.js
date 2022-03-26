export class Section {
    constructor({items, renderer}, containerSelector) {
        this._data = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() { // нарисовать картину
        this._renderedItems = {};
        this._data.forEach((item) => {
            const newItem = this._renderer(item);
            this._renderedItems.push(newItem);
        });
        return this._renderedItems;
    }

    addItem(item) { // повесить картину
        this._container.prepend(item.createCard());
    }
}