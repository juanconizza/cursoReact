let valor = document.getElementById("valor");
let btnDecrementar = document.getElementById("dec");
let btnIncrementar = document.getElementById("inc");
let valorInicial = 0;

valor.innerHTML = `${valorInicial}`;

btnIncrementar.addEventListener("click", () => {
    valorInicial++;
    valor.innerHTML = `${valorInicial}`;
});

btnDecrementar.addEventListener("click", () => {
    valorInicial--;
    valor.innerHTML = `${valorInicial}`;
});
