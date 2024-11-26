/**
 * Classe représentant une annonce.
 */
class Annonce {
    /**
     * @param {string} id - L'identifiant unique de l'annonce.
     * @param {string} title - Le titre de l'annonce.
     * @param {string} domaine - Le domaine de l'annonce.
     * @param {string} type - Le type de l'annonce.
     * @param {number} price - Le prix de l'annonce.
     * @param {string} proposition - Proposition associée à l'annonce.
     * @param {number} interaction - Le nombre d'interactions.
     * @param {string} rapidity - La rapidité associée.
     * @param {string} description - Une description détaillée de l'annonce.
     * @param {string} time - L'heure ou date de l'annonce.
     * @param {boolean} isNew - Indique si l'annonce est nouvelle.
     * @param {boolean} isGreen - Indique si l'annonce est marquée comme "verte".
     * @param {boolean} isPurple - Indique si l'annonce est marquée comme "violette".
     * @param {boolean} isPremium - Indique si l'annonce est premium.
     * @param {string} size - La taille ou une mesure associée.
     */
    constructor(
        id,
        title,
        domaine,
        type,
        price,
        proposition,
        interaction,
        rapidity,
        description,
        time,
        isNew,
        isGreen,
        isPurple,
        isPremium,
        size
    ) {
        this._id = id;
        this._title = title;
        this._domaine = domaine;
        this._type = type;
        this._price = price;
        this._proposition = proposition;
        this._interaction = interaction;
        this._rapidity = rapidity;
        this._time = time;
        this._description = description;
        this._isNew = isNew;
        this._isGreen = isGreen;
        this._isPurple = isPurple;
        this._isPremium = isPremium;
        this._size = size;
    }

    /** @returns {string} */
    get title() {
        return this._title;
    }

    /** @param {string} value */
    set title(value) {
        this._title = value;
    }

    /** @returns {string} */
    get id() {
        return this._id;
    }

    /** @param {string} value */
    set id(value) {
        this._id = value;
    }

    /** @returns {string} */
    get domaine() {
        return this._domaine;
    }

    /** @param {string} value */
    set domaine(value) {
        this._domaine = value;
    }

    /** @returns {string} */
    get type() {
        return this._type;
    }

    /** @param {string} value */
    set type(value) {
        this._type = value;
    }

    /** @returns {number} */
    get price() {
        return this._price;
    }

    /** @param {number} value */
    set price(value) {
        this._price = value;
    }

    /** @returns {string} */
    get proposition() {
        return this._proposition;
    }

    /** @param {string} value */
    set proposition(value) {
        this._proposition = value;
    }

    /** @returns {number} */
    get interaction() {
        return this._interaction;
    }

    /** @param {number} value */
    set interaction(value) {
        this._interaction = value;
    }

    /** @returns {string} */
    get rapidity() {
        return this._rapidity;
    }

    /** @param {string} value */
    set rapidity(value) {
        this._rapidity = value;
    }

    /** @returns {string} */
    get description() {
        return this._description;
    }

    /** @param {string} value */
    set description(value) {
        this._description = value;
    }

    /** @returns {string} */
    get time() {
        return this._time;
    }

    /** @param {string} value */
    set time(value) {
        this._description = value;
    }

    /** @returns {boolean} */
    get isNew() {
        return this._isNew;
    }

    /** @param {boolean} value */
    set isNew(value) {
        this._isNew = value;
    }

    /** @returns {boolean} */
    get isGreen() {
        return this._isGreen;
    }

    /** @param {boolean} value */
    set isGreen(value) {
        this._isGreen = value;
    }

    /** @returns {boolean} */
    get isPurple() {
        return this._isPurple;
    }

    /** @param {boolean} value */
    set isPurple(value) {
        this._isPurple = value;
    }

    /** @returns {boolean} */
    get isPremium() {
        return this._isPremium;
    }

    /** @param {boolean} value */
    set isPremium(value) {
        this._isPremium = value;
    }

    /** @returns {string} */
    get size() {
        return this._size;
    }

    /** @param {string} value */
    set size(value) {
        this._size = value;
    }
}

export default Annonce;
