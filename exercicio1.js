const filme = {
    direcao: "Gérard Pirès",
    nome: "Taxi",
    anoLancamento: 1998,
    elenco: ["Samy Naceri","Frédéric Diefenthal","Marion Cotillard","Manuela Gourary","Emma Sjöberg","Bernard Farcy","Dan Herzberg"],
    assistido: true
}

console.log(
    `Nome do filme: ${filme.nome}`,
    `\nDiretor: ${filme.direcao}`,
    `\nAno de Lançamento: ${filme.anoLancamento}`,
    `\nElenco: ${filme["elenco"]}`,
    `\nJá assistiu?: ${filme["assistido"]}`
)