const precoGasolina = 4.91;
const precoEtanol = 3.37;
const kmPorLitro = 4.8;
const distanciaKM = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKM / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


