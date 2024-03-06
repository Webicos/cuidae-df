const btnOverlay = document.querySelector(".overlay__fechar");

btnOverlay.addEventListener("click", () => {
    btnOverlay.parentElement.classList.remove("js--ativo");
});
