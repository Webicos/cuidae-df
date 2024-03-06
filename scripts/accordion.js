const accordion = document.querySelectorAll(".accordion");
const accordionButton = document.querySelectorAll(".accordion__btn");

accordionButton.forEach( (e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.toggle("ativo");
    });
})