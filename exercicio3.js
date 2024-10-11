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


filme.personagens = ["Daniel Morales","Emilien","Lily","Camille, mãe de Emilien","Petra","Comissário Gibert","Paulo"]

console.log(
    `${filme.elenco[0]} como ${filme.personagens[0]}`,
    `\n${filme.elenco[1]} como ${filme.personagens[1]}`,
    `\n${filme.elenco[2]} como ${filme.personagens[2]}`,
    `\n${filme.elenco[3]} como ${filme.personagens[3]}`,
    `\n${filme.elenco[4]} como ${filme.personagens[4]}`,
    `\n${filme.elenco[5]} como ${filme.personagens[5]}`
)

filme.elenco[0] = "Xuxa"

console.log(
    `Nome do filme: ${filme.nome}`,
    `\nDiretor: ${filme.direcao}`,
    `\nAno de Lançamento: ${filme.anoLancamento}`,
    `\nElenco: ${filme["elenco"]}`,
    `\nPersonagens: ${filme["personagens"]}`,
    `\nJá assistiu?: ${filme["assistido"]}`,
    `\n${filme.elenco[0]} como ${filme.personagens[0]}`,
    `\n${filme.elenco[1]} como ${filme.personagens[1]}`,
    `\n${filme.elenco[2]} como ${filme.personagens[2]}`,
    `\n${filme.elenco[3]} como ${filme.personagens[3]}`,
    `\n${filme.elenco[4]} como ${filme.personagens[4]}`,
    `\n${filme.elenco[5]} como ${filme.personagens[5]}`
)