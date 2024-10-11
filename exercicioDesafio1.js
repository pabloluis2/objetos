let pessoa = {
    nome: "",
    idade: "",
    profissao: ""
}

pessoa.nome = prompt("Informe seu nome:")
pessoa.idade = Number(prompt("Informe sua idade:"))
pessoa.profissao = prompt("Informe sua profissão:")

console.log(pessoa,typeof(pessoa))