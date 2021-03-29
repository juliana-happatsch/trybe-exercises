function verificaPalindromo(string) {
    let palavraInvertida = string.split('').reverse().join('');

    if (palavraInvertida === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));