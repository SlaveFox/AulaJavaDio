//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

function retornaNumerosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

console.log(retornaNumerosPares(25));