/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }
    calcularGasto(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel;
    }
}

const opala = new Carro('Chevrolet', 'Preto', 1 / 4.32);

opala.calcularGasto(70, 4.91);
console.log(opala.calcularGasto(70, 4.91).toFixed(2));