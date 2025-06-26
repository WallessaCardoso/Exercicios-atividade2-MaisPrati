const readline = require('readline');

// Interface de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função de validação de data
function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

    const diasNoMes = [
        31,
        (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? 29 : 28,
        31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    return dia <= diasNoMes[mes - 1];
}

// Solicita ao usuário as entradas
rl.question("Digite o dia: ", (dia) => {
    rl.question("Digite o mês: ", (mes) => {
        rl.question("Digite o ano: ", (ano) => {
            const resultado = ehDataValida(Number(dia), Number(mes), Number(ano));
            console.log(resultado); // mostra true ou false
            rl.close();
        });
    });
});