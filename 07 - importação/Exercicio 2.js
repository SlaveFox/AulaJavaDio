//2) Faça um programa que receba a quantidade de números e seus respectivos valores. Imprima o maior e o menor número deste conjunto.

const { gets, print } = require('./Exercicio 2 aux');

const entrada = gets();
let maiorValorEncontrado = 0;
let menorValorEncontrado = gets();

for (let i = 0; i <= entrada; i++) {
    const maiorValor = gets();
    if (maiorValor > maiorValorEncontrado) {
        maiorValorEncontrado = maiorValor;
    }
    if (maiorValor < menorValorEncontrado){
        menorValorEncontrado = maiorValor;
    }
}


print(maiorValorEncontrado)
print(menorValorEncontrado)