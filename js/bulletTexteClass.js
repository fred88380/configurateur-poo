import { Bullet} from "./bullet.js";
import {  variables} from "./data.js";
import { bulletTexteArray } from "./data.js";
import { repricing } from "./configurateur.js";
export class BulletTexte extends Bullet {
    constructor(couleur, code) {
      super(couleur, code);
      this.html.addEventListener("click", (event) => {
        variables.selectedTextColor = this.couleur;
        bulletTexteArray.forEach((texteColor) => {
          texteColor.unSelected();
          if (texteColor.getCouleur == variables.selectedTextColor) {
            texteColor.selected();
          }
        });
        document.querySelector(".textePerso").style.color = this.code;
        repricing();
      });
    }
  }