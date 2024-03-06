const labelCheckbox = document.querySelectorAll(".input--checkbox");
const labelInputCheckbox = document.querySelectorAll(".input--checkbox input");

labelInputCheckbox.forEach((e) => {
    e.addEventListener("change", () => {
        e.parentElement.classList.toggle("selecionado");
    });
});
