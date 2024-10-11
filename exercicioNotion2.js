const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
/*
Object
nome:"Juca"
idade: 3
raca: "SRD"
*/
console.log(gato)
/*
Object
nome:"Juba"
idade: 3
raca: "SRD"
*/
console.log(tartaruga)
/*
Object
nome:"Jubo"
idade: 3
raca: "SRD"
*/

/*Os três pontos antes do nome do objeto copia todas as propriedades do objeto em questão,
para um novo objeto, desconsiderando qualquer propriedade repetida usada na declaração do novo objeto*/