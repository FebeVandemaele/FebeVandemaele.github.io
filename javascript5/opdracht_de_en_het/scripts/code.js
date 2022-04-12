const setup = () => {
    document.addEventListener('click', wijzig);
}

const wijzig = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let index = 0;
    let output = '';
    let woord = '';
    while (index < zin.length && index !== -1){
        let einde = zin.indexOf(' ', index);
        if(einde !== -1){
            woord = zin.slice(index, einde);
        } else {
            woord = zin.substring(index);
        }
        if (woord.toLowerCase().includes('de')){
            woord = 'het';
        }
        output += woord + ' ';
        if(einde !== -1){
            index = einde + 1;
        } else {
            index = -1;
        }
        woord = '';
    }
    console.log(output);
}
window.addEventListener("load", setup);