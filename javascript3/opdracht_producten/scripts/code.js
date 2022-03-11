const setup = () => {
    let btnHerbereken = document.getElementById('btnHerbereken');
    btnHerbereken.addEventListener('click', herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName('prijs');
    let aantallen = document.getElementsByClassName('aantal');
    let btws = document.getElementsByClassName('btw');
    let txtOutputTotaal = document.getElementById('totaal');
    let txtOutputSubtotalen = document.getElementsByClassName('subtotaal');
    let totaal=parseInt('0', 10);

    for (let i = 0; i < prijzen.length; i++){
        let subtotaal = parseFloat(prijzen[i].innerHTML) * parseFloat(aantallen[i].value);
        let btw = (parseFloat(btws[i].innerHTML) / 100) * subtotaal;
        subtotaal += btw;
        txtOutputSubtotalen[i].innerHTML = subtotaal.toFixed(2);
        totaal += subtotaal;
    }
    txtOutputTotaal.innerHTML = totaal.toFixed(2);
}

window.addEventListener("load", setup);