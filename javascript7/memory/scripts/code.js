let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_PREFIX: "images/kaart",
    KAART_SUFFIX: ".png",
    aantalGedraaid: 0,
    gedraaideKaartenID: [],
    gedraaideKaartenSRC: []
}

const setup = () => {
    kaartenMaken();
    for (let i = 0; i < 12; i++) {
        let div = document.getElementById("kaart"+i);
        div.addEventListener("click", klikKaart);
    }
}

const kaartenMaken = () => {
    let speelveld = document.getElementById("speelveld");
    let kaarten = [];
    let kaart = 1;
    //kaarten in array stoppen
    for (let i = 0; i < 12; i++) {
        kaarten[i] = global.KAART_PREFIX+kaart+global.KAART_SUFFIX;
        kaarten[i+1] = global.KAART_PREFIX+kaart+global.KAART_SUFFIX;
        i++;
        kaart++;
    }

    shuffle(kaarten);

    for (let i = 0; i < kaarten.length; i++) {
        //voorkant aanmaken in html
        let voorkant = document.createElement("img");
        voorkant.setAttribute("src", kaarten[i]);
        voorkant.setAttribute("class", "voorkant");

        //achterkant aanmaken in html
        let achterkant = document.createElement("img");
        achterkant.setAttribute("src", "images/achterkant.png");
        achterkant.setAttribute("class", "achterkant");

        let div = document.createElement("div");
        div.setAttribute("class", "kaart");
        div.setAttribute("id", "kaart"+i);
        speelveld.appendChild(div);

        div.appendChild(voorkant);
        div.appendChild(achterkant);
    }

}

const shuffle = (array) =>{
    array.sort(() => Math.random() - 0.5);
}

const klikKaart = (event) => {
    let id = event.currentTarget.getAttribute("id");
    let div = document.getElementById(id);

    if(global.aantalGedraaid < 2 && global.gedraaideKaartenSRC[0] !== div){

        event.target.classList.toggle("gedraaideKaart");

        let idKaart = event.currentTarget.firstChild.getAttribute("src");

        global.gedraaideKaartenID.push(idKaart);
        global.gedraaideKaartenSRC.push(div);
        global.aantalGedraaid++;
        console.log(global.gedraaideKaartenSRC);
        console.log(global.gedraaideKaartenID);
    }

    if(global.aantalGedraaid === 2){
        controleerKaarten();
        setTimeout(aanpassenKaarten, 2000);
    }

}

const aanpassenKaarten = () => {
        if(global.gedraaideKaartenID[0] === global.gedraaideKaartenID[1]){
            global.gedraaideKaartenSRC[0].classList.toggle("gevonden");
            global.gedraaideKaartenSRC[1].classList.toggle("gevonden");
            global.gedraaideKaartenSRC[0].classList.toggle("juist");
            global.gedraaideKaartenSRC[1].classList.toggle("juist");

        } else {
            global.gedraaideKaartenSRC[0].lastChild.classList.toggle("gedraaideKaart");
            global.gedraaideKaartenSRC[1].lastChild.classList.toggle("gedraaideKaart");
            global.gedraaideKaartenSRC[0].classList.toggle("fout");
            global.gedraaideKaartenSRC[1].classList.toggle("fout");
        }
        global.gedraaideKaartenID.pop();
        global.gedraaideKaartenID.pop();
        global.gedraaideKaartenSRC.pop();
        global.gedraaideKaartenSRC.pop();
        global.aantalGedraaid = 0;
}

const controleerKaarten = () => {
        if(global.gedraaideKaartenID[0] === global.gedraaideKaartenID[1]){
            global.gedraaideKaartenSRC[0].classList.toggle("juist");
            global.gedraaideKaartenSRC[1].classList.toggle("juist");
        } else {
            global.gedraaideKaartenSRC[0].classList.toggle("fout");
            global.gedraaideKaartenSRC[1].classList.toggle("fout");
        }
}

window.addEventListener("load", setup);