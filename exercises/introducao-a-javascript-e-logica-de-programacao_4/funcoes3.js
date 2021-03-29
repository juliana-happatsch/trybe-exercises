function menorValor(numeros) {
    let indiceMin = 0;

    for (let i in numeros) {
        if (numeros[indiceMin] > numeros[i]) {
            indiceMin = i;
        }
    }
    return indiceMin;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));