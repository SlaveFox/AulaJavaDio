function aplicarDesconta(valor,desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarAcrescimo(valor,acrescimo){
    return (valor + (valor * (acrescimo/100)));
}


const preco = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log('Débito o valor é de:');
    console.log(aplicarDesconta(preco, 10));
}if (formaDePagamento === 2){
    console.log('Pix ou dinheiro o valor é de:');
    console.log(aplicarDesconta(preco, 15));
}if (formaDePagamento === 3){
    console.log('Em até 2x o valor é de:');
    console.log(preco);
}if (formaDePagamento === 4){
    console.log('Mais que 2x o valor é de:');
    console.log(aplicarAcrescimo(preco, 10));
}