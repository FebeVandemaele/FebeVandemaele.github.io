const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substringMaken);
}

const substringMaken = () => {
    let txtInput = document.getElementById("txtInput");
    let links = document.getElementById("numberLeft");
    let rechts = document.getElementById("numberRight");
    let txtOutput = document.getElementById("txtOutput");

    let tekst = txtInput.value;

    let begin = parseInt(links.value, 10);
    let einde = parseInt(rechts.value, 10);

    txtOutput.innerHTML = tekst.substring(begin, einde);
}
window.addEventListener("load", setup);