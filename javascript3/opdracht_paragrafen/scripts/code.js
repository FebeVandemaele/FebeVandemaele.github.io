const setup = () => {
    addClassname();
}

const addClassname = () => {
    let i;
    let classNameParagraaf = document.getElementsByClassName('belangrijk');

    for(i = 0; i < classNameParagraaf.length; i++){
        classNameParagraaf[i].classList.add('opvallend');
    }
}

window.addEventListener("load", setup);