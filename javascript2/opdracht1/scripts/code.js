const setup = () => {

}
window.alert("Dit is een mededeling");
console.log(window.confirm('Weet u het zeker?'));
// ok => true
// cancel => false
console.log((window.prompt('Wat is uw naam?', 'onbekend')));
// ok => de ingetypte tekst
// cancel => null
window.addEventListener("load", setup);