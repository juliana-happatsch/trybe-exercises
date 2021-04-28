const searchX = (phrase, string) => {
  const splitPhrase = phrase.split(' ');
  for (let i = 0; i < splitPhrase.length; i += 1) {
    if (splitPhrase[i] === 'x') {
      splitPhrase[i] = string;
    }
  }

  return splitPhrase.join(' ');
}

const array = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Git'];

const joinFunctionArray = (phrase, string) => {
  const sortArray = array.sort();
  const name = searchX(phrase, string);
  let result = '';

  for (let i = 0; i < sortArray.length; i += 1) {
    result += `${sortArray[i]}
  `;
  }
  

  return `Tryber ${name} aqui! Minhas cinco habilidade são: 
  ${result}
  #goTrybe`;

}
 console.log(joinFunctionArray('x', 'Juliana'))