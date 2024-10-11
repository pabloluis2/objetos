let filme1 = {
    nome: "Madagascar",
    anoLancamento: 2005
}
let filme2 = {
    nome: "Fuga das Galinhas",
    anoLancamento: 2000
}

function comparaFilme(objFilme1,objFilme2){
    console.log(
        `O primeiro filme foi lançado antes do segundo? ${objFilme1.anoLancamento < objFilme2.anoLancamento}`,
        `\nO primeiro filme foi lançado no mesmo ano do segundo? ${objFilme1.anoLancamento === objFilme2.anoLancamento}`
    )
}

comparaFilme(filme1,filme2)
comparaFilme(filme2,filme1)