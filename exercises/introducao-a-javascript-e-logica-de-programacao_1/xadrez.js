let piece = prompt('Digite o nome da peça de xadrez:'); 
let lowerCase = piece.toLowerCase();

switch (lowerCase) {
    case 'peão':
        console.log('Para frente (captura peças na diagonal)');
        break;

    case 'rei':
        console.log('Vertical, horizontal e diagonal');
        break;

    case 'rainha':
        console.log('Vertical, horizontal e diagonal');
        break;

    case 'torre':
        console.log('Linha reta na vertical ou horizontal');
        break;

    case 'bispo':
        console.log('Diagonal');
        break;

    case 'cavalo':
        console.log('Em L');
        break;

    default:
        console.log('Peça inválida');
}