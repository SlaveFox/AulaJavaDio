/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(peso, altura) {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso indicado');
        } if (imc >= 18.5 && imc <= 25) {
            return ('Peso normal');
        } if (imc > 25 && imc <= 30) {
            return ('Acima do peso')
        } if (imc > 30 && imc <= 40) {
            return ('Obeso')
        } if (imc > 40) {
            return ('Obesidade grave')
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose.calcularImc().toFixed(2));
const raphael = new pessoa('Raphael', 75, 1.80);
console.log(raphael.classificarImc());