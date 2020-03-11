const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");

/* Klicka på skicka */
elementSkicka.addEventListener("click", vadSägs);


function vadSägs() {
    var antal = elementAntal.value;
    var frukt = elementFrukt.value;

    /* Antal är tomt? */
    if (antal == "") {
        elementFel.innerHTML = "Du har inte valt antal frukt<br>";
    }
    /* Frukt är tomt */
    if (frukt == "") {
        elementFel.innerHTML += "Du har inte valt någon frukt";
    }
    if (frukt != "äpplen") /* inte är tom != */ {
        elementFel.innerHTML = "Välj äpplen istället";
    }

    if (antal == 1) {
        antal = "ett";
    }
    if (antal < 1) {
        antal = "ett";
    }

    if (antal == 2) {
        antal = "två";
    }
    if (antal > 2) {
        antal = "två";
    }

    if (elementFel.textContent == "Inga fel!") {
        elementOutput.textContent = "Doktorn säger: " + antal + " " + frukt + " om dagen håller daktorn borta.";
    }
}