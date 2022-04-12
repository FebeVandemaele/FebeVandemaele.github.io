const setup = () => {
    voegStedenToe();
}

const voegStedenToe = () => {
    let gemeente = window.prompt("Gemeente:");
    let array = [];
    while(gemeente !== "stop"){
        array.push(gemeente);
        gemeente = window.prompt("Gemeente:");
    }
    array.sort();
    let select = document.getElementById('gemeenten')
    for (let i = 0; i < array.length; i++) {
        select.innerHTML += `<option>${array[i]}</option>`
    }

}


window.addEventListener("load", setup);