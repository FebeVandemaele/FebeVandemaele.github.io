let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById('lstPersonen');

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let invalid = document.getElementsByClassName("invalid");
    if(invalid.length === 0){
        let tekst;
        let option;
        let persoon
        if(lstPersonen.selectedIndex !== -1){
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonAan(persoon);
            option = lstPersonen.children[lstPersonen.selectedIndex];
            option.setAttribute("value", persoon.voornaam+" "+persoon.familienaam);
            tekst = document.createTextNode(persoon.voornaam+" "+persoon.familienaam);
            option.removeChild(option.firstChild);
        } else {
            persoon = {};
            vulPersoonAan(persoon);
            personen.push(persoon);
            option = document.createElement("option");
            option.setAttribute("id", (personen.length -1).toString());
            option.setAttribute("value", persoon.voornaam+" "+persoon.familienaam);
            tekst = document.createTextNode(persoon.voornaam+" "+persoon.familienaam);
            lstPersonen.appendChild(option);
        }
        option.appendChild(tekst);

    }

    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const vulPersoonAan = (persoon) => {
    let familienaam = document.getElementById("txtFamilienaam");
    let voornaam = document.getElementById("txtVoornaam");
    let email = document.getElementById("txtEmail");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let kinderen = document.getElementById("txtAantalKinderen");

    persoon.voornaam = voornaam.value;
    persoon.familienaam = familienaam.value;
    persoon.geboortedatum = geboortedatum.value;
    persoon.email = email.value;
    persoon.kinderen = kinderen.value;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let kinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = "";
    familienaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    kinderen.value = "";

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const toonPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let index = lstPersonen.selectedIndex;
    let persoon = personen[index];

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let kinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = persoon.voornaam;
    familienaam.value = persoon.familienaam;
    geboortedatum.value = persoon.geboortedatum;
    email.value = persoon.email;
    kinderen.value = persoon.kinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);