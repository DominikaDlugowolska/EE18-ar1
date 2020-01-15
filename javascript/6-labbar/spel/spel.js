/* Sport, fritid, blandat

Efter en imponerande lång rad SM-guld vinner brottaren Pelle "Swing" Svensson sitt första VM-guld.
1970

Peter "Foppa" Forsberg gör sin första säsong i Colorado Avalanche.
1995

"Lev skönare!" är Johan Holmsäters motto när han grundar Friskis och Svettis
1978

Sju Mancherster United-spelare dör i en flygolycka.
1958

Prylar, nyheter, uppfinningar

Erik Wallenberg uppfinner den pyramidformade tetraförpackningen.
1944

Christer Fuglesang tar sin första rymdpromenad.
2006

Kända personer och händelser

På Gärdet i Stockholm ockuperas västtyska ambassaden och gisslandramat som följer kommer att kräva fyra liv.
1975

Kinas siste kejsare dör.
1967

Den fjärde oktober demonstrerar 75 000 mot införandet av löntagarfonder.
1983

Göran Persson gifter sig med Anitra Steen.
2003
*/

/* Globala variabler och konstanter*/
var frågor = [
    "Efter en imponerande lång rad SM-guld vinner brottaren Pelle \"Swing\" Svensson sitt första VM-guld.",
    "Peter \"Foppa\" Forsberg gör sin första säsong i Colorado Avalanche.",
    "\"Lev skönare!\" är Johan Holmsäters motto när han grundar Friskis och Svettis.",
    "Sju Mancherster United-spelare dör i en flygolycka.",
    "Erik Wallenberg uppfinner den pyramidformade tetraförpackningen.",
    "Christer Fuglesang tar sin första rymdpromenad.",
    "På Gärdet i Stockholm ockuperas västtyska ambassaden och gisslandramat som följer kommer att kräva fyra liv.",
    "Kinas siste kejsare dör.",
    "Den fjärde oktober demonstrerar 75 000 mot införandet av löntagarfonder.",
    "Göran Persson gifter sig med Anitra Steen."
];

var årtal = [
    1970, 1995, 1978, 1958, 1944, 2006, 1975, 1967, 1983, 2003
];
var slumptal,
    poäng = 0,
    varv = 10;
const elementKontainer = document.querySelector("div");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");

/* Skapa en funktion för att slumpa fram en fråga */
function nyFråga() {
    /* Slumptal 0-9, väljer talet närmast under */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    elementFrågaRuta.value = frågor[slumptal];
    elementÅrtalRuta.value = "";

    /* Dölj tummarna */
    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}

/* Körs i början */
/* Kör funktionen */
nyFråga();

/* Plocka fram ny fråga när man klickar på knappen Nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla om man svarat rätt årtal på frågan */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla om svaret är rätt */
function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Det rätta årtalet */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        console.log("Du har svarat rätt. Congrats.");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
        poäng = poäng + 1;
        /* Man kan också skriva poäng++; vilket betyder samma sak men är kortare */

    } else {
        console.log("Fel, försök igen senare.");
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";
    }

    /* skriv ut poäng */
    elementPoängRuta.value = poäng;

    /* Antal varv */
    varv--;

    if (varv == 0) {
        if (poäng == 10) {
        elementKontainer.innerHTML = "Grattis! Du kunde alla frågor.";
        } else {
          /* elementKontainer.style.display = "none"; */
        elementKontainer.innerHTML = "Game over, du har gissat 10 gånger.";  
        }
        
    }
}