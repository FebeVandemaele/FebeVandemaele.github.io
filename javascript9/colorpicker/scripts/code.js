let kleuren = [];

const setup = () => {
    let btnClear = document.getElementById('btnClear');
    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');
    let btnSave = document.getElementById('btnSave');

    update();

    sliderRed.addEventListener('change', update);
    sliderGreen.addEventListener('change', update);
    sliderBlue.addEventListener('change', update);
    sliderRed.addEventListener('input', update);
    sliderGreen.addEventListener('input', update);
    sliderBlue.addEventListener('input', update);

    btnSave.addEventListener('click', save);
    btnClear.addEventListener('click', clearLocalStorage);

    readLocalStorage();
}

const readLocalStorage = () => {
    if(localStorage.length > 0){
        let storage = localStorage.getItem('kleuren');
        let array = JSON.parse(storage);
        for (let i = 0; i < array.length; i++) {
            kleuren.push(array[i]);
        }
        console.log(kleuren)

        for (let i = 0; i < kleuren.length; i++) {

        }
    }

}

const toonKleur = () => {

}

const update = () => {
    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');
    let txtRed = document.getElementById('txtRed');
    let txtGreen = document.getElementById('txtGreen');
    let txtBlue = document.getElementById('txtBlue');

    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;

    txtRed.innerHTML = valueRed;
    txtGreen.innerHTML = valueGreen;
    txtBlue.innerHTML = valueBlue;

    let colorBlok = document.getElementById('swatch');
    colorBlok.style.backgroundColor = "rgb("+valueRed+", "+valueGreen+", "+valueBlue+")";
}

const clearLocalStorage = () => {
    kleuren = [];
    localStorage.clear();
}

const save = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "copy");

    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');

    div.style.backgroundColor = "rgb("+sliderRed.value+", "+sliderGreen.value+", "+sliderBlue.value+")";
    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.setAttribute("class", "x");
    div.appendChild(btn);

    let kleur = {};
    bewaarKleur(kleur);
    kleuren.push(kleur);
    let tekst = JSON.stringify(kleuren);
    localStorage.setItem("kleuren",tekst);

    document.getElementsByClassName("copySwatch")[0].appendChild(div);
    btn.addEventListener("click", verwijder);
    div.addEventListener('click', toonGeselecteerdKleur);
}

const bewaarKleur = (kleur) => {
    let rood = document.getElementById('red').value;
    let groen = document.getElementById('green').value;
    let blauw = document.getElementById('blue').value;

    kleur.rood = rood;
    kleur.groen = groen;
    kleur.blauw = blauw;
}

const toonGeselecteerdKleur = (event) => {
    let colorBlok = document.getElementById('swatch');
    let geselecteerdKleur = event.target;
    let kleur = geselecteerdKleur.style.backgroundColor;
    colorBlok.style.backgroundColor = kleur;

    let rood = kleur.substring(kleur.indexOf('(')+1, kleur.indexOf(','));
    let groen = kleur.substring(kleur.indexOf(', ')+2, kleur.lastIndexOf(', '));
    let blauw = kleur.substring(kleur.lastIndexOf(', ')+2, kleur.indexOf(')'));

    let txtRed = document.getElementById('txtRed');
    let txtGreen = document.getElementById('txtGreen');
    let txtBlue = document.getElementById('txtBlue');

    txtRed.innerHTML = rood;
    txtGreen.innerHTML = groen;
    txtBlue.innerHTML = blauw;
}

const verwijder = (event) => {
    let geselecteerdeBlok = event.target;
    geselecteerdeBlok.parentElement.remove();

    update();
    event.stopPropagation();
}

window.addEventListener("load", setup);