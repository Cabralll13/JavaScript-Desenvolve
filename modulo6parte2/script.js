const campoNome = document.getElementById('campoNome');
const botaoCurtir = document.getElementById('botaoCurtir');
const paragrafoCurtidas = document.getElementById('paragrafoCurtidas');

let listaNomes = [];

botaoCurtir.addEventListener('click', function(){
    const nome = campoNome.value.trim;

    if(nome !== "" && !listaNomes.includes(nome)){
        listaNomes.push(nome);
        campoNome.value = "";
        atualizarExibicao();
    }
})

function atualizarExibicao() {
    const quantidade = listaNomes.length;
    let mensagem = "";

    if (quantidade === 0) {
        mensagem = 'Ninguém curtiu';
    } else if (quantidade === 1) {
        mensagem = `${listaNomes[0]} curtiu`;
    } else if (quantidade === 2) {
        mensagem = `${listaNomes[0]} e ${listaNomes[1]} curtiram`;
    } else { // Se for 3 ou mais
        mensagem = `${listaNomes[0]}, ${listaNomes[1]} e mais ${quantidade - 2} pessoas curtiram`;
    }
    paragrafoCurtidas.textContent = mensagem;
}