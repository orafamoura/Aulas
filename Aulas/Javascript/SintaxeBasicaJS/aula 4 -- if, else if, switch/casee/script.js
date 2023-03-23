//condições
var jogador1 = -1;
var jogador2 = 0
var placar;
if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('jogador 1 marcou ponto')
    } else if (jogador2 > 0) {
        console.log('jogador 2 marcou ponto')
    } else {
        console.log('ninguem marcou ponto')
    }
}

//if ternario

jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores sao validos'):
console.log('jogadores invalidos');
    
//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}
//usando else if
 else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1
}
//usando if
 else {
    console.log('ninguem marcou ponto')
}
//usando switch/case, condição tambem
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
 //default, se os casos não derem resultado, pula pro default
        default:
        console.log('ninguem ganhou');
}
 