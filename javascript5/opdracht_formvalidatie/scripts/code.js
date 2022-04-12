const setup = () => {
    let btnValideer = document.getElementById('valideer');
    btnValideer.addEventListener('click', valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerDatum();
    valideerMail();
    valideerKinderen();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById('txtVoornaam');
    let errorVoornaam = document.getElementById('errorVoornaam');
    let voornaam = txtVoornaam.value.trim();
    if(voornaam.length > 30){
        txtVoornaam.className="invalid";
        errorVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className="";
        errorVoornaam.innerHTML = "";
    }
}

const valideerFamilienaam = () => {
    let txtNaam = document.getElementById('txtFamilienaam');
    let errorNaam = document.getElementById('errorFamilienaam');
    let naam = txtNaam.value.trim();
    if(naam.length === 0){
        txtNaam.className="invalid";
        errorNaam.innerHTML = "verplicht veld";
    } else if(naam.length > 50){
        txtNaam.className="invalid";
        errorNaam.innerHTML = "max. 50 karakters";
    } else {
        txtNaam.className="";
        errorNaam.innerHTML = "";
    }
}

const valideerDatum = () => {
    let datum = document.getElementById('datum');
    let errorDatum = document.getElementById('errorDatum');
    if(datum.length === 0){
        datum.className="invalid";
        errorDatum.innerHTML = "verplicht veld";
    } else {
        datum.className="";
        errorDatum.innerHTML = "";
    }
}

const valideerMail = () => {
    let txtMail = document.getElementById('txtMail');
    let errorMail = document.getElementById('errorMail');
    let mail = txtMail.value.trim();
    let index = mail.indexOf("@");
    let regMail = new RegExp('.@.');
    if(mail.length === 0) {
        txtMail.className = "invalid";
        errorMail.innerHTML = "verplicht veld";
    } else if(!regMail.test(mail) || mail.indexOf('@', index+1) !== -1){
        txtMail.className="invalid";
        errorMail.innerHTML = "geen geldig email adres";
    } else {
        txtMail.className="";
        errorMail.innerHTML = "";
    }
}

const valideerKinderen = () => {
    let aantalKinderen = document.getElementById('kinderen');
    let errorKinderen = document.getElementById('errorKinderen');
    let aantal = parseInt(aantalKinderen.value);
    if(!isGetal(aantal) || aantal < 0){
        aantalKinderen.className="invalid";
        errorKinderen.innerHTML = "is geen positief getal";
    } else if(aantal > 99){
        aantalKinderen.className="invalid";
        errorKinderen.innerHTML = "is te vruchtbaar";
    } else {
        aantalKinderen.className="";
        errorKinderen.innerHTML = "";
    }

}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener("load", setup);