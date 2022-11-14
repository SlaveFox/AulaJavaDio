class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
  
  
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e possuo ${this.altura} de altura`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}

const Raphael = new pessoa ('Raphael', 21);
const Daniel = new pessoa ('Daniel', 15);

compararPessoas(Raphael, Daniel);