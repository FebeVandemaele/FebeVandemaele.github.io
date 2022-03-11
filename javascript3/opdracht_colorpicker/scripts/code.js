const setup = () => {
    let sliderRed = document.getElementById('red');
    let sliderGreen = document.getElementById('green');
    let sliderBlue = document.getElementById('blue');
    let txtRed = document.getElementById('txtRed');
    let txtGreen = document.getElementById('txtGreen');
    let txtBlue = document.getElementById('txtBlue');

    txtRed.innerHTML = sliderRed.value;
    txtGreen.innerHTML = sliderGreen.value;
    txtBlue.innerHTML = sliderBlue.value;

    sliderRed.addEventListener('change', update);
    sliderGreen.addEventListener('change', update);
    sliderBlue.addEventListener('change', update);
    sliderRed.addEventListener('input', update);
    sliderGreen.addEventListener('input', update);
    sliderBlue.addEventListener('input', update);

    update();
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

window.addEventListener("load", setup);