import { personnage } from "./variableFile.js";
let scroll = document.querySelector(".personnage");
let testBtn = document.querySelector(".next");
let parent = document.querySelector(".parent");

//////////////////// ajouter plusieur element dans le carousell
const moreContent = () => {
  for (let i = 0; i < personnage.length; i++) {
    parent.innerHTML += `
        <div class="persoCarte">
              <img
                class="imageCaroussel"
                src="${personnage[i].lien}"
                alt="image de killmonger"
              />
              <div class="aproposPerso">
                <h2>${personnage[i].nom}</h2>
                <p>
                ${personnage[i].Text}
                </p>
                <a href="#">Voir plus ></a>
              </div>
            </div>
        `;
  }
};
moreContent();

let persoCarte = document.querySelector(".persoCarte");
let nombre = 0;

//////////////////// ajouter un element dans le carousell

const oneMoreContent = () => {
  if (nombre > personnage.length - 1) {
    nombre = 0;
  }
  parent.innerHTML += `
  <div class="persoCarte">
        <img
          class="imageCaroussel"
          src="${personnage[nombre].lien}"
          alt="image de killmonger"
        />
        <div class="aproposPerso">
          <h2>${personnage[nombre].nom}</h2>
          <p>
          ${personnage[nombre].Text}
          </p>
          <a href="#">Voir plus ></a>
        </div>
      </div>
  `;
  nombre++;
};

/////////////// fonction pour faire defiler le caroussel
const plus = () => {
  // scroll.scrollLeft += persoCarte.clientWidth;
  parent.removeChild(parent.firstChild);
  oneMoreContent();
  parent.removeChild(parent.firstChild);
  AddEventClick();
};
testBtn.addEventListener("click", plus);

/////////////// fonction qui place a gauche l'element selectionne
function selection() {
  let clique = 0;
  while (parent.children[0] != this) {
    parent.removeChild(parent.children[0]);
    clique++;
  }
  for (let index = 0; index < clique; index++) {
    oneMoreContent();
  }
  AddEventClick();
}
///////////////// fonction qui ajoute cette evenement au element du caroussel
const AddEventClick = () => {
  for (let index = 0; index < parent.children.length; index++) {
    parent.children[index].addEventListener("click", selection);
  }
};
AddEventClick();

let apearProgressive = document.querySelectorAll(".abra");
apearProgressive.forEach((Element) => {
  Element.style.display = "none";
});

const test = (element) => {
  let nombre = apearProgressive.length - 1;
  while (nombre != apearProgressive[nombre]) {
    apearProgressive[nombre].style.display = "none";
  }
  console.log("test");
};

// affiche progrissevement les elements au fur a mesure du scroll

const cubeComponent = (element, pointApear) => {
  if (window.scrollY > pointApear) {
    element.style.display = "flex";
  }
};

window.addEventListener("scroll", () => {
  apearProgressive[0].style.display = "flex";
  cubeComponent(apearProgressive[1], 230);
  cubeComponent(apearProgressive[2], 2000);
  cubeComponent(apearProgressive[3], 2700);
});
