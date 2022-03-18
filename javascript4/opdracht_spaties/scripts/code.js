const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click', spaties);
}

const spaties = () => {
    let input = document.getElementById('txtInput').value;
    let output ='';
    for (let i = 0; i < input.length; i++){
        if(input.charAt(i) !== ' '){
            output += input.charAt(i) + ' ';
        }
    }
    console.log(output);
}

window.addEventListener("load", setup);