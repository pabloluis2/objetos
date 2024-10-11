const pessoa = {
    nome: "Pablo",
    idade: 26,
    profissao: "Analista de MIS"
}

const pessoa2 = {
    nome: "Poliana",
    idade: 25,
    profissao: "Digitadora de Laudos"
}

function avaliaPessoa(objPessoa){
    return [
        objPessoa.nome,
        objPessoa.nome.length,
        objPessoa.idade,
        objPessoa.profissao,
        objPessoa.profissao.length
    ]
}

console.log(avaliaPessoa(pessoa))
console.log(avaliaPessoa(pessoa2))