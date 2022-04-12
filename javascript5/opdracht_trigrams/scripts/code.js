const setup = () => {
    document.addEventListener("click", trigram)
}

const trigram = () => {
    let woord = "onoorbaar";
    let index = 0;
    while (index + 2 < woord.length){
        console.log(woord.slice(index, index+3));
        index++;
    }
}
window.addEventListener("load", setup);