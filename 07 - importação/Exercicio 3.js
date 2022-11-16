// Faça um programa que receba a quantidade de números e seus respectivos valores. Imprima todos os números pares.
const { gets, print } = require('./Exercicio 3 aux');

const entrada = gets();
for (let i = 0; i < entrada; i++) {
    const numeroPar = gets();
    if (numeroPar % 2 === 0) {
        print(numeroPar);
    }

}
