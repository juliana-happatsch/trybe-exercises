const longestWord = phrase => {
  const array = phrase.split(' ');
  let longestLength = 0;
  let word = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestLength) {
      longestLength = array[i].length;
      word = array[i];
    }
  }

  return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'