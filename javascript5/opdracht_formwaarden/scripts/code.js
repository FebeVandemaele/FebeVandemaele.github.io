const setup = () => {
    let button = document.getElementById('resultaat');
    button.addEventListener('click', toonResultaat);

}

const toonResultaat = () => {
    let roker = document.getElementById('roker');
    let moedertaalList = document.getElementsByName('moedertaal');
    let buurlanden = document.getElementById('landen');
    let bestellingList = document.getElementById('bestelling');
    if(roker.checked){
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }
    for (let i = 0; i < moedertaalList.length; i++) {
        if(moedertaalList[i].checked){
            console.log("moedertaal is "+moedertaalList[i].value);
        }
    }
    console.log("favoriete buurland is "+buurlanden.options[buurlanden.selectedIndex].text);
    let tekst = "";
    for (let i = 0; i < bestellingList.length; i++) {
        if (bestellingList.options[i].selected)
        tekst += bestellingList.options[i].text + " ";
    }
    console.log("bestelling bestaat uit "+tekst);

}

window.addEventListener("load", setup);