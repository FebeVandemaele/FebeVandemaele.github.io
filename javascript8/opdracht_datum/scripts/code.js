const setup = () => {
    let geboortedatum = new Date('2003-02-07');
    let nu = new Date();

    console.log(Math.round((nu - geboortedatum) /1000 /60/60/24));
}

window.addEventListener("load", setup);