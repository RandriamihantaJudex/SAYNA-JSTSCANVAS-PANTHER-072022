import { enigmeComponents } from "./variableFile.js";
let reponseVrai = [
  "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
  "La puce et le bulldozer ont rencontre un obstacle. Il semble que ce soit juste une grosse branche mais il faudrait la deplacer pour pouvoir continuer la construction en toute securite",
  "LE ROI LION",
];

let questionTemplate = document.querySelector(".deuxieme");
let questionNumber = 0;

questionTemplate.innerHTML = enigmeComponents[0];
let btnSendTest = document.querySelector("#sendTest");

btnSendTest.addEventListener("click", nextQuestion);

// fonction pour afficher la question suivante
const NextPart = () => {
  let myPopUp = document.querySelector(".myPopUp");
  myPopUp.style.display = "none";
  questionTemplate.innerHTML = enigmeComponents[questionNumber + 1];
  questionNumber += 1;
  let nextBouton = document.querySelector("#boutonNext");
  nextBouton.removeEventListener("click", NextPart);
};

// fonction pour gerer l'affichage du pop'Up
const gestionPop = () => {
  let myPopUp = document.querySelector(".myPopUp");
  myPopUp.style.display == "flex"
    ? (myPopUp.style.display = "none")
    : (myPopUp.style.display = "flex");
};

const popVue = (number) => {
  let myPopUp = document.querySelector(".myPopUp");
  if (number == 0) {
    myPopUp.children[0].children[0].innerHTML = "MAUVAISE REPONSE";
    myPopUp.children[0].children[1].innerHTML = "Recommencer";
    myPopUp.style.backgroundColor = "#d43017";
    myPopUp.style.boxShadow = "0px 0px 30px 10px #d43017";
  } else {
    myPopUp.children[0].children[0].innerHTML = "BONNE REPONSE";
    myPopUp.children[0].children[1].innerHTML = "Question suivante";
    myPopUp.style.backgroundColor = "#3017d4";
    myPopUp.style.boxShadow = "0px 0px 30px 10px #3017d4";
  }
};

// fonction qui test si la reponse est bonne ou pas
function nextQuestion() {
  let userReponse = document.querySelector(".notFound").value;
  if (questionNumber < 2) {
    if (userReponse == reponseVrai[questionNumber]) {
      let myPopUp = document.querySelector(".myPopUp");
      let nextBouton = document.querySelector("#boutonNext");
      popVue(1);
      myPopUp.style.display = "flex";
      nextBouton.addEventListener("click", NextPart);
    } else {
      let myPopUp = document.querySelector(".myPopUp");
      let nextBouton = document.querySelector("#boutonNext");
      popVue(0);
      myPopUp.style.display = "flex";
      nextBouton.addEventListener("click", gestionPop);
    }
  } else if ((questionNumber = 2)) {
    if (userReponse == reponseVrai[questionNumber]) {
      let myPopUp2 = document.querySelector(".myPopUp2");
      myPopUp2.style.display = "flex";
      let seconde = document.querySelector(".seconde");
      let temps = 59;
      setInterval(() => {
        if (temps >= 0) {
          if (temps < 10) {
            seconde.innerHTML = "0" + temps;
          } else {
            seconde.innerHTML = temps;
          }
          temps--;
        } else {
          clearInterval;
        }
      }, 1000);
    } else {
      let myPopUp = document.querySelector(".myPopUp");
      let nextBouton = document.querySelector("#boutonNext");
      popVue(0);
      myPopUp.style.display = "flex";
      nextBouton.addEventListener("click", gestionPop);
    }
  }
}

