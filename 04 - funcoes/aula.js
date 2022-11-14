function sayMyName(name) {
    return ('Your name is ' + name);
}
sayMyName('Raphael Trindade');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(sayMyName('Raphael') + ' you are of legal age');
    }
    if (idade < 18) {
        console.log(sayMyName('Raphael') + ' you are underage');
    }
}

verificarIdade(1);