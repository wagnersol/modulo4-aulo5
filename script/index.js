function buscaimagem() {
    return fetch("https://dog.ceo/api/breed/hound/images/random/30").then(function (resp) {
        return resp.json();
    });
}
buscaimagem().then(construirlista);
function construirlista(listaimg) {
    const lista = listaimg.message;
    const olListaImg = document.getElementById("lista-img");
    for (let posicao = 0; posicao < lista.length; posicao++) {
        const item = lista[posicao];
        const itemHtml = "<li><img src=\"" + item + "\"></li>";
        olListaImg.innerHTML = olListaImg.innerHTML + itemHtml;

    }

}


