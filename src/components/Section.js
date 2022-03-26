class Section {
    constructor({itmes, renderer}, containerSelector) {
        this._data = itmes;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItmes() { // нарисовать картину
        // this.clear(); 

        this._data.forEach((item) => {
            this._renderer(item)   
        });
    }

    addItem(item) { // повесить картину
        this._container.append(item);
    }
}