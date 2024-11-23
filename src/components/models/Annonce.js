class Annonce {
    
    constructor(title, domaine, type, price, proposition, interaction, rapidity, description, isNew, size) {
        this._title = title;
        this._domaine = domaine;
        this._type = type;
        this._price = price;
        this._proposition = proposition;
        this._interaction = interaction;
        this._rapidity = rapidity;
        this._description = description;
        this._isNew = isNew;
        this._size = size;
    }

    // Getter and Setter for title
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    // Getter and Setter for domaine
    get domaine() {
        return this._domaine;
    }

    set domaine(value) {
        this._domaine = value;
    }

    // Getter and Setter for type
    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    // Getter and Setter for price
    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    // Getter and Setter for proposition
    get proposition() {
        return this._proposition;
    }

    set proposition(value) {
        this._proposition = value;
    }

    // Getter and Setter for interaction
    get interaction() {
        return this._interaction;
    }

    set interaction(value) {
        this._interaction = value;
    }

    // Getter and Setter for rapidity
    get rapidity() {
        return this._rapidity;
    }

    set rapidity(value) {
        this._rapidity = value;
    }

    // Getter and Setter for description
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    // Getter and Setter for isNew
    get isNew() {
        return this._isNew;
    }

    set isNew(value) {
        this._isNew = value;
    }

    // Getter and Setter for size
    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }
}