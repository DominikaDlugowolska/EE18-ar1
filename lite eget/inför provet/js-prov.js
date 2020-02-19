const elementLabel = document.querySelector("label");
const elementInput = document.querySelector("input");
const elementKnapp = document.querySelector("button");
const elementRubrik = document.querySelector("h1");
const elementImg = document.querySelector("img");
const elementH2 = document.querySelector("h2");
const elementP = document.querySelector("p");



function åldersKoll() {
    /* Läs av ålder */
    var ålder = elementInput.value;
    console.log(ålder);

    if (ålder >= 18) {
        /* Gör resten synligt */
        elementImg.hidden = false;
        elementH2.hidden = false;
        elementP.hidden = false;

        elementLabel.hidden = true;
        elementInput.hidden = true;
        elementKnapp.hidden = true;

        /* animation */
        window.animatelo.fadeInLeft("img");
        window.animatelo.fadeInRight("h2");
        window.animatelo.fadeInLeft("p");

    } else {
        /* Omvandla h1 */
        elementLabel.hidden = true;
        elementInput.hidden = true;
        elementKnapp.hidden = true;
        elementRubrik.textContent = "Tyvärr måste du vara äldre för att få vara med";
    }
}