const setup = () => {

}
let namen = ['Sophie', 'Wouter', 'Ann', 'Johan', 'Kurt'];
console.log(namen.length);
console.log(namen[0]);
console.log(namen[2]);
console.log(namen[4]);
const voegNaamToe = (arr) => {
    namen.push(arr);
}
voegNaamToe(window.prompt('Wat is uw naam?', 'onbekend'));
console.log(namen);
console.log(namen.toString());
window.addEventListener("load", setup);