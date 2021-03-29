function verificaFimPalavra(palavra, final) {
    let palavraInvertida = palavra.split('').reverse().join('');
    let finalInvertido = final.split('').reverse().join('');

    for (let i = 0; i < finalInvertido.length; i += 1) {
        if (palavraInvertida[i] !== finalInvertido[i]) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));