const setup = () => {
    document.addEventListener('click', wijzig);
}

const wijzig = () => {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
        list[i].className = "listitem";
        document.getElementsByClassName("listitem")[i].style.color = "red";
    }
    createImg();
}

const createImg = () => {
    let img = document.createElement('img');
    img.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/001/196/554/non_2x/person-png.png");
    img.setAttribute("alt", "persoon");
    img.setAttribute("width", 250);
    document.body.appendChild(img);
}

window.addEventListener("load", setup);