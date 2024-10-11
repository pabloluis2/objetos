const pessoa = {
    nome: "Poliana Muller",
    idade: 25,
    generoMusicalFavorito: "Punkpop"
}

console.log(
    `O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito}`
)

function adicionaComidaMelhorAmigo(pessoaFL = {}){
    let novaPessoa = {
        ...pessoaFL,
        comidasFavoritas: ["Pizza","Feijoada","Churrasco"],
        melhorAmigo: {
            nome: "Pablo Luis dos Santos",
            idade: 26
        }
    }
    console.log(`O nome da pessoa é ${novaPessoa.nome}, e suas comidas favoritas são ${novaPessoa.comidasFavoritas}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}

adicionaComidaMelhorAmigo(pessoa)
console.log(pessoa)