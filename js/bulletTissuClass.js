class BulletTissu extends Bullet {
    constructor(couleur, code, image, price) {
      super(couleur, code, image, price);
      this.html.addEventListener("click", (event) => {
        variables.selectedTissu = this.couleur;
        bulletTissuArray.forEach((tissu) => {
          tissu.unSelected();
          if (tissu.getCouleur == variables.selectedTissu) {
            tissu.selected();
          }
        });
        document.getElementById("optionTissuImage").src = this.image;
        repricing();
      });
    }
  }
  