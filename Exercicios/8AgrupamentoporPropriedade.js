const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function agruparPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

function perguntar(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function main() {
    const vendas = [];
    const qtdStr = await perguntar("Quantas vendas deseja registrar? ");
    const qtd = parseInt(qtdStr);

    if (isNaN(qtd) || qtd <= 0) {
        console.log("Quantidade inválida.");
        rl.close();
        return;
    }

    for (let i = 0; i < qtd; i++) {
        const cliente = await perguntar(`Nome do cliente da venda ${i + 1}: `);
        const totalStr = await perguntar(`Total da venda ${i + 1}: `);
        const total = parseFloat(totalStr);

        if (cliente.trim() === "" || isNaN(total) || total < 0) {
            console.log("Dados inválidos, tente novamente.");
            i--; // repetir esse índice
        } else {
            vendas.push({ cliente: cliente.trim(), total });
        }
    }

    const agrupado = agruparPorCliente(vendas);
    console.log("Vendas agrupadas por cliente:");
    console.log(agrupado);

    rl.close();
}

main();