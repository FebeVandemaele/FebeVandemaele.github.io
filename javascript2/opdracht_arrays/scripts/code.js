const setup = () => {
    let namen = ['Sophie', 'Wouter', 'Ann', 'Johan', 'Kurt'];
    console.log(namen.length);
    console.log(namen[0]);
    console.log(namen[2]);
    console.log(namen[4]);
    voegNaamToe(namen, window.prompt('Wat is uw naam?', 'onbekend'));
    console.log(namen);
    console.log(namen.toString());
}

const voegNaamToe = (namen, arr) => {
    namen.push(arr);
}

window.addEventListener("load", setup);