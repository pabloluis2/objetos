const pessoa = {
    nome: "Poliana Muller",
    apelidos: ["Polly","Baixinha","Pokoio"]
}

function imprimeNomeApelidos(objPessoa = {}){
    console.log(`Eu sou ${objPessoa.nome}, mas pode me chamar de: ${objPessoa.apelidos[0]}, ${objPessoa.apelidos[1]} ou ${objPessoa.apelidos[2]}`)
}

imprimeNomeApelidos(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos: ["Pequenes","Bravinha","Toquinho"]
}

imprimeNomeApelidos(pessoa2)