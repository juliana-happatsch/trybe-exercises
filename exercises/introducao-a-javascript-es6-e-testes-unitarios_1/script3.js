const fatorial = numero => {
    let resultado = numero;
    if (numero > 0) {
        for (let i = 1; i < numero; i += 1) {
            resultado *= i;
        }
    }
    return resultado;
}

console.log(fatorial(4))