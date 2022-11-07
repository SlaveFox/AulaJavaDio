/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log('Débito o valor é de:');
    console.log(preco - (preco * 0.1));
}if (formaDePagamento === 2){
    console.log('Pix ou dinheiro o valor é de:');
    console.log(preco - (preco * 0.15));
}if (formaDePagamento === 3){
    console.log('Em até 2x o valor é de:');
    console.log(preco);
}if (formaDePagamento === 4){
    console.log('Mais que 2x o valor é de:');
    console.log(preco + (preco * 0.1));
}