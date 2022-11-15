//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota. Ex de lista de notas = [2, 7, 3, 8, 10, 4]

var numeros = [2, 7, 3, 8, 10, 4];

var maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {

    var numero = numeros[i];

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }

}

console.log(maiorNumero);