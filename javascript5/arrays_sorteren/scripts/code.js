const setup = () => {
    let arrayGetallen = [34,67,12,5,23];
    console.log(arrayGetallen.sort(getallenSorteren));
    let arrayStrings = ["zebra", "aap", "giraf", "ezel"];
    console.log(arrayStrings.sort(stringsSorteren));
}

const getallenSorteren = (a,b) => {
    return a-b;
}

const stringsSorteren = (a,b) => {
    return a.localeCompare(b);
}
window.addEventListener("load", setup);