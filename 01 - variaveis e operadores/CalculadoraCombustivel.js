/*Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - preço do combustivel;
2 - gasto médio de combustivel do carro po KM;
3 - Distancia em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/

//Opala

const precoCombustivel = 4.91;
const kmPorLitro = 4.8;
const distanciaKM = 2653;

const litrosConsumidos = distanciaKM / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));