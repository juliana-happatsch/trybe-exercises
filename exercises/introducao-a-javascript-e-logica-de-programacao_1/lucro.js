let custo = 5;
let venda = 10;
let imposto = custo + ((custo * 20) / 100);
let lucro = venda - imposto;
let lucroMil = lucro * 1000;

if (custo < 0 || venda < 0) {
    console.log('Erro');
} else {
    console.log('O lucro será de R$' + lucroMil);
}