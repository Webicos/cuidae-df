const telas = document.querySelectorAll(".tela");
const btnLinks = document.querySelectorAll(".btn--link");

btnLinks.forEach((e) => {
    e.addEventListener("click", (link) => {
        link.preventDefault();
        linkURL = e.getAttribute("href");
        selecionarTela = document.querySelector(linkURL);
        classeAtiva = "js--ativo";

        telas.forEach((e) => {
            e.classList.remove(classeAtiva);
        });

        selecionarTela.classList.add(classeAtiva);
    });
});

const btnInteracao = document.querySelectorAll(".btn--interacao");

btnInteracao.forEach((e) => {
    e.addEventListener("click", (btn) => {
        btn.preventDefault();
        btnURL = e.getAttribute("href");
        selecionarElemento = document.querySelector(btnURL);
        classeAtiva = "js--ativo";
        selecionarElemento.classList.add(classeAtiva);
    });
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
    .then((reg) => console.log('Service Work registrado', reg))
    .catch((err) => console.log('Service Work não registrado', err));
}

