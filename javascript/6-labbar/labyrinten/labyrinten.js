/* element vi arbetar med */
const eNamn = document.querySelector("#namn");
const eVerb = document.querySelector("#verb");
const eKnapp = document.querySelector("button");
const eOutput = document.querySelector("#output");
const ePoäng = document.querySelector("#poäng");

var rum = "entrén";
var poäng = 0;
eOutput.innerHTML += "Du är i " + rum + ".<br>";

/* Vad händer när vi klickar på gå? */
eKnapp.addEventListener("click", function() {
    /* läs av input rutan */
    var namn = eNamn.value;
    var verb = eVerb.value;


    /* vad vill man göra? */
    if (rum == "entrén") {

        if (verb == "fram") {
            rum = "kafeterian";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "biblioteket";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 1";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }

    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entrén";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum = "biblioteket") {
        if (verb == "tillbaka") {
            rum = "entrén";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "plocka") {
            poäng++;
            eOutput.innerHTML += "Du hittade ett guldmynt.<br>";
            ePoäng.textContent = poäng;
        }
    } else if (rum == "rum 1") {
        if (verb == "tillbaka") {
            rum = "entrén";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 2") {
        if (verb == "fram") {

        }
    }

})