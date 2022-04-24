let global = {
    IMAGE_COUNT: 5, //aantal figuren
    IMAGE_SIZE: 48, //grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", //map van de figuren
    IMAGE_PATH_SUFFIX: ".png", //extensie van de figuren

    MOVE_DELAY: 3000, //aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, //aantal hits
    timeoutid: 0 //id van de timeout timer, zodat we die kunnen annuleren
}

const setup = () => {
    let btnStart = document.getElementById('start');
    btnStart.addEventListener('click', start);
    let image = document.getElementById('target');
    image.addEventListener('click', klikImage);
    document.getElementById('score').textContent = global.score;
}

const start = () => {
    let btnStart = document.getElementById('start');
    btnStart.remove();
    global.timeoutid = setInterval(newImage, global.MOVE_DELAY);
}

const newImage = () => {
    moveImage();
    randomImage();
}

const klikImage = (event) => {
    if(event.target.getAttribute('src') === (global.IMAGE_PATH_PREFIX+0+global.IMAGE_PATH_SUFFIX)){
        stop();
    } else {
        newImage();
        global.score++;
        document.getElementById('score').textContent = global.score;
        clearInterval(global.timeoutid);
        global.timeoutid = setInterval(newImage, global.MOVE_DELAY);
    }
}

const randomImage = () => {
    let random = Math.floor(Math.random() * global.IMAGE_COUNT);
    let image = document.getElementById('target');
    image.setAttribute('src', global.IMAGE_PATH_PREFIX+random+global.IMAGE_PATH_SUFFIX)
}

const moveImage = () => {
    let image = document.getElementById('target');
    let playField = document.getElementById('playField');
    let maxLeft = playField.clientWidth - image.offsetWidth;
    let maxHeight = playField.clientHeight - image.offsetHeight;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    image.style.left = left+"px";
    image.style.top = top+"px";
}

const stop = () => {
    clearInterval(global.timeoutid);
    window.alert('GAME OVER');
}

window.addEventListener("load", setup);