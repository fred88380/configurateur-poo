class BulletPoche extends Bullet {
    constructor(couleur, code, image, price) {
      super(couleur, code, image, price);
      this.html.addEventListener("click", (event) => {
        variables.selectedPoche = this.couleur;
        bulletPocheArray.forEach((poche) => {
          poche.unSelected();
          if (poche.getCouleur == variables.selectedPoche) {
            poche.selected();
          }
        });
        document.getElementById("optionPocheImage").src = this.image;
        repricing();
      });
    }
  }