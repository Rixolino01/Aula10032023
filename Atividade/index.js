// Crie uma classe chamada Estudante, essa classe deve conter os atributos: nome, e-mail, RA,
// curso e uma lista com o nome das disciplinas que o estudante está matriculado
// Para testar, crie dois estudantes de exemplo e imprima os valores na tela

const disciplinas = [["Lógica de programação","HTML","Banco de dados"],
["matematica","Simulação","rotinas aeroportuárias"]]

class Aluno {
    constructor(nome, email, RA, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }
    }    
    const aluno1 = new Aluno("Caio","caio.santos@gmail.com","123456","ADS", disciplinas[0])
    const aluno2 = new Aluno("Ana","ana.cruz@gmail.com","987654","Log", disciplinas[1])

    console.log(aluno1)
    console.log(aluno2)


 