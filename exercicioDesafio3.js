const carrinho = []

let fruta = {
    nome: "Banana",
    disponibilidade: true
}
let fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}
let fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function adicionarFrutaCarrinho(objFruta){
    carrinho.push(objFruta)
}
function alteraDisponibilidade(objFruta){
    objFruta.disponibilidade = !objFruta.disponibilidade
}

adicionarFrutaCarrinho(fruta)
adicionarFrutaCarrinho(fruta2)
adicionarFrutaCarrinho(fruta3)

console.log(carrinho)

alteraDisponibilidade(fruta)

console.log(fruta)