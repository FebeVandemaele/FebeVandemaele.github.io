const setup = () => {
    let btnWijzig = document.getElementById('btnWijzig');

    btnWijzig.addEventListener('click', drukWijzig);
}
const drukWijzig = () =>{
    let pElement = document.getElementById('txtOutput');
    pElement.innerHTML = 'Welkom!';
}
window.addEventListener("load", setup);