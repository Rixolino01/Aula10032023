const lista = ["Item 1","item 2","Item 3"]

const mt = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(lista)
console.log(mt[2][2])

//lista.forEach(item => console.log(item))

mt.forEach(function(item){
    item.forEach(function(valor){
    console.log(valor)})
})

// usando itens

const pessoa = {
    nome: "Carlos",
    idade: 35
}

console.log(pessoa.nome)

pessoa.nome = "Maria"
pessoa.cpf = "123456"

console.log(pessoa)

//criando uma classe "pessoa"

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    podeDirigir(){
        return(this.idade >18)? "Pode" : "Não pode"
    }
}

const pessoa2 = new Pessoa("Ivonente",42)
console.log(pessoa2)
console.log(pessoa2.podeDirigir)