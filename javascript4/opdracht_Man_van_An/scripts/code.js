const setup = () => {
    let indexof = document.getElementById('buttonIndexOf');
    let lastIndexof = document.getElementById('buttonLastIndexOf');
    indexof.addEventListener('click', berekenIndexOf);
    lastIndexof.addEventListener('click', berekenLastIndexOf);
}

const berekenIndexOf = () => {
    let zin = document.getElementById('zin').innerHTML;
    let aantal = 0;
    let index = 0;

    while(index < zin.length && index !== -1){
        index = zin.indexOf('an', index);
        if(index !== -1){
            aantal++;
            index++;
        }
    }
    console.log(aantal);
}

const berekenLastIndexOf = () => {
    let zin = document.getElementById('zin').innerHTML;
    let aantal = 0;
    let index = 0;

    while(zin.length > 0 && index !== -1){
        index = zin.lastIndexOf('an');
        if(index !== -1){
            aantal++;
            zin = zin.substring(0, index);
        }
    }
    console.log(aantal);
}

window.addEventListener("load", setup);