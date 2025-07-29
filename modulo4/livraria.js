const estoque = [
    { titulo: 'Harry Potter e o Prisioneiro de Azkabam',autor: 'J.K.Rowling', quantidade: 12}
];

const adicionaLivro = (titulo, autor, quantidade) => {
    estoque.push({
        titulo, autor, quantidade
    })
};

const removeLivro = (tituloLivro) => {
    const existeLivro = estoque.find(livro => livro.titulo === tituloLivro)
    if (existeLivro) {
        for(let indice = 0; indice < estoque.length; indice++){
            if(estoque[indice].titulo === tituloLivro){
                console.log(`O livro ${tituloLivro} foi removido`)
                estoque.splice(indice, 1)
                break;
            }
        }
    }
    else
        console.log(`O livro ${tituloLivro} não foi encontrado`)
}

const atualizarQuantidade = (tituloLivro, novaQuantidade) => {
    const existeLivro = estoque.find(livro => livro.titulo === tituloLivro)
    if (existeLivro) {
        for (let livro of estoque) {
            if (livro.titulo === tituloLivro) {
                livro.quantidade = novaQuantidade
                console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade}`)
                break;
            }
        }
    }
    else{
        console.log(`O livro ${tituloLivro} não foi encontrado`)
    }
}

const listarLivros = () => {
    if(estoque.length === 0){
        console.log('O estoque está vazio')
    }
    else{
        for(let livro of estoque){
            console.log(`Título: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}`)
        }
    }
}

