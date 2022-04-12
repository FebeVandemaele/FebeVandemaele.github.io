const setup = () => {
    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');
    let btnSave = document.getElementById('btnSave');

    update();

    sliderRed.addEventListener('change', update);
    sliderGreen.addEventListener('change', update);
    sliderBlue.addEventListener('change', update);
    sliderRed.addEventListener('input', update);
    sliderGreen.addEventListener('input', update);
    sliderBlue.addEventListener('input', update);

    btnSave.addEventListener('click', save);
}

const update = () => {
    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');
    let txtRed = document.getElementById('txtRed');
    let txtGreen = document.getElementById('txtGreen');
    let txtBlue = document.getElementById('txtBlue');

    let valueRed = sliderRed.value;
    let valueGreen = sliderGreen.value;
    let valueBlue = sliderBlue.value;

    txtRed.innerHTML = valueRed;
    txtGreen.innerHTML = valueGreen;
    txtBlue.innerHTML = valueBlue;

    let colorBlok = document.getElementById('swatch');
    colorBlok.style.backgroundColor = "rgb("+valueRed+", "+valueGreen+", "+valueBlue+")";
}

const save = () => {
    let div = document.createElement("div");
    div.setAttribute("class", "copy");

    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');

    div.style.backgroundColor = "rgb("+sliderRed.value+", "+sliderGreen.value+", "+sliderBlue.value+")";
    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.setAttribute("class", "x");
    div.appendChild(btn);

    document.getElementsByClassName("copySwatch")[0].appendChild(div);
}


window.addEventListener("load", setup);