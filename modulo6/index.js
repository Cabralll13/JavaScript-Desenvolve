const mudaTitulo = (novoTitulo) =>{
    const titulo = document.getElementById('tituloPrincipal')
    titulo.innerText = novoTitulo
}

setTimeout(() => mudaTitulo('Oba! Alterei o título'), 2000)

const listaLi = document.getElementsByTagName('li')

const listaCores = ['#d60000', '#05f7ab']

const listaParagrafos = document.getElementsByTagName('p')

const botao = document.getElementsByTagName('button')[0]

setTimeout(() => botao.innerText = 'Clique com o novo texto', 3000)

for(let paragrafo of listaParagrafos) {
    paragrafo.classList = 'paragrafo'
}

for(let li in listaLi) {
    
    listaLi[li].style.color = listaCores[li]
}

