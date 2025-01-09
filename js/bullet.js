class Bullet {
    constructor(couleur,code,image,price) {
        this.couleur = couleur;
        this.code = code;
        this.image = image;
        this.price = price;
        this.html = this.createHtml();

    }
    createHtml() {
        const div = document.createElement("div");
        div.classList.add("ColorRound");
        div.dataset.couleur = this.couleur;
        div.style.backgroundColor = this.code;

        return div
    }
    selected() {
        this.html.classList.add("selectedColor");
    }
    unSelected() {
        this.html.classList.remove("selectedColor");
    }

    get getHtml() {
        return this.html;
    }
    
    get getCouleur() {
        return this.couleur;
    }

    get getPrice() {
        return this.price;
    }
}