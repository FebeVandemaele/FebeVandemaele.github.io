const setup = () => {
    let button = document.getElementById('createP');
    button.addEventListener('click', create);
}

const create = () => {
    let para = document.createElement('p');
    para.textContent = "Dit is een nieuwe paragraaf.";
    document.getElementById('myDIV').appendChild(para);
}

window.addEventListener("load", setup);