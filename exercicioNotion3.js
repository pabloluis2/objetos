function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) //undefined

/*O valor impresso no console foi proveniente da função minhaFuncao que retorna a propriedade de um objeto, ambos informados através dos parametros da função.
O primeiro console.log encontrou o valor pois ambas as informações passadas haviam sido declaradas
Já o segundo console.log retornou um valor undefined pois a propridade declarada no segundo parametro não foi declara e não possui um valor definido*/