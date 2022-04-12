const setup = () => {
    document.addEventListener('click', wijzig);

}

const wijzig = () => {
    document.querySelectorAll("p")[0].textContent = "Good job";
}

window.addEventListener("load", setup);