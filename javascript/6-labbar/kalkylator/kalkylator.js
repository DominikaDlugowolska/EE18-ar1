/* Element vi använder */
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

elementKol4.addEventListener("click", tryck);
function tryck(event) {
    /* vad är det för element vi klickar på */
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);

        switch (event.target.textContent) {
            case 0:
                
                break;
                elementFönster.value = event.target.textContent;
            case 1:
                
                break;
                elementFönster.value = event.target.textContent;
            case 2:
                
                break;
                elementFönster.value = event.target.textContent;
            case 3:
                
                break;
                elementFönster.value = event.target.textContent;
            case 4:
                
                break;
                elementFönster.value = event.target.textContent;
            case 5:
                
                break;
                elementFönster.value = event.target.textContent;
            case 6:
                
                break;
                elementFönster.value = event.target.textContent;
            case "7":
                
                break;
                elementFönster.value = event.target.textContent;
            case "8":
                
                break;
                elementFönster.value = event.target.textContent;
            case "9":
                
                break;
                elementFönster.value = event.target.textContent;
        }

        //elementFönster.value = event.target.textContent;
    }
}