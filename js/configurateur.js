// const optionsTissu = [
//     { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
//     { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
//     { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
// ];
// const optionsPoche = [
//     { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
//     { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
//     { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
//     { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
// ];
// const couleurText = [
//     { couleur: 'Blanc', code: '#FFFFFF' },
//     { couleur: 'Noir', code: '#000000' },
//     { couleur: 'Bleu', code: '#11119e' },
//     { couleur: 'Fuchsia', code: '#991157' },
//     { couleur: 'Rouge', code: '#d31431' },
//     { couleur: 'vert', code: '#a1cc16' },
//     { couleur: 'Jaune', code: '#e2d047' },
//     { couleur: 'Orange', code: '#f1722f' }
// ];

// const variables = { selectedTissu: "Violet", selectedPoche: "Rouge", customText: '', selectedTextColor: 'Noir', textOption: true, prixLettre: 1.80 };

// const bulletTissuArray = [];
// const bulletTexteArray = [];
// const bulletPocheArray = [];
import { optionsTissu } from "./data.js";
import { optionsPoche } from "./data.js";
import {  couleurText} from "./data.js";
import { BulletTissu } from "./bulletTissuClass.js";
import { BulletTexte } from "./bulletTexteClass.js";
import { BulletPoche } from "./bulletPocheClass.js";
import { bulletTissuArray } from "./data.js";
import {  bulletTexteArray} from "./data.js";
import { bulletPocheArray } from "./data.js";
import { variables } from "./data.js";
export function repricing() {
    let calculatedPrice = 0;
    calculatedPrice += bulletTissuArray.find(tissu => tissu.getCouleur == variables.selectedTissu).getPrice;

    calculatedPrice += bulletPocheArray.find(poche => poche.getCouleur == variables.selectedPoche).getPrice;
    if (variables.textOption) {
        calculatedPrice += variables.customText.replaceAll(" ", "").length * variables.prixLettre;
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "visible";
    } else {
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "hidden";
    }

    document.querySelector(".price").textContent = calculatedPrice.toFixed(2) + " €";
}


window.addEventListener("load", () => {
    // start option tissu
    const tissuOptions = document.getElementById("tissu");
    optionsTissu.forEach(tissu => {
        const newBulletTissu = new BulletTissu(tissu.couleur, tissu.code, tissu.image, tissu.price);
        if (tissu.couleur == variables.selectedTissu) {
            newBulletTissu.selected();
        }
        bulletTissuArray.push(newBulletTissu);
        tissuOptions.appendChild(newBulletTissu.getHtml);
    });

    // start option poche
    const pocheOptions = document.getElementById("optionPoche");
    optionsPoche.forEach(poche => {
        const newBulletPoche = new BulletPoche(poche.couleur, poche.code, poche.image, poche.price);
        if (poche.couleur == variables.selectedPoche) {
            newBulletPoche.selected();
        }
        bulletPocheArray.push(newBulletPoche);
        pocheOptions.appendChild(newBulletPoche.getHtml);
    });

    // start option couleur texte
    const texteColorOptions = document.getElementById("textColorOptions");
    couleurText.forEach(texteColor => {
        const newBulletTexte = new BulletTexte(texteColor.couleur, texteColor.code);
        if (texteColor.couleur == variables.selectedTextColor) {
            newBulletTexte.selected();
        }
        bulletTexteArray.push(newBulletTexte);
        texteColorOptions.appendChild(newBulletTexte.getHtml);
    });

    document.querySelector("#customText").addEventListener("input", (event) => {
        document.querySelector(".textePerso").textContent = variables.customText = event.target.value;
        repricing();
    })
    document.querySelectorAll('[name="UseText"]').forEach(element => {
        element.addEventListener("change", event => {
            variables.textOption = event.target.value === "true" ? true : false;
            repricing();
        })
    })
    repricing();
})
