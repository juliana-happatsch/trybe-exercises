let salarioBruto = 3000;
let INSS;
let IR;
let parcela;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto - ((salarioBruto * 8) / 100);
} else if (salarioBruto <= 2594.92) {
    INSS = salarioBruto - ((salarioBruto * 9) / 100);
} else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto - ((salarioBruto * 11) / 100);
} else {
    INSS = salarioBruto - 570.88;
}

console.log(INSS);

if (INSS >= 1903.99 && INSS <= 2826.65) {
    parcela = ((INSS * 7.5) / 100) - 142.80; 
    IR = INSS - parcela;
} else if (INSS >= 2826.66 && INSS <= 3751.05) {
    parcela = ((INSS * 15) / 100) - 354.80; 
    IR = INSS - parcela;
} else if (INSS >= 3751.06 && INSS <= 4664.68) {
    parcela = ((INSS * 22.5) / 100) - 636.13; 
    IR = INSS - parcela;
} else if (INSS > 4664.68) {
    parcela = ((INSS * 27.5) / 100) - 869.36; 
    IR = INSS - parcela;
}

console.log(IR);