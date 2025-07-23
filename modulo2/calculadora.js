const soma = (n1, n2) => n1 + n2;
const subtrai = (n1, n2) => n1 - n2;
const multiplica = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const mostraResultado = (n1, n2) => {
    console.log(`soma entre ${n1} e ${n2}: `, soma(n1, n2))
    console.log(`subtração entre ${n1} e ${n2}: `, subtrai(n1, n2))
    console.log(`multiplicação entre ${n1} e ${n2}: `, multiplica(n1, n2))
    console.log(`divisão entre ${n1} e ${n2}: `, divide(n1, n2))
}

mostraResultado(10, 2)