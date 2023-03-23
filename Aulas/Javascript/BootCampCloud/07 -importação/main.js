


const { gets, print } = require('./aula');
const quantidadeDeAlunos = gets();
let maiorValor = 0;


for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numerosSorteado = gets();
  if (numerosSorteado > maiorValor){
    maiorValor = numerosSorteado;
  }
}
print(maiorValor);
/*1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20*/

/*console.log(funcoes);*/

/* console.log(funcoes.gets()); */
/* console.log(funcoes.print()); */

/*const pessoa = {
  nome : 'raphael'
};

const { nome } = pessoa;
const nomes = pessoa.nome; ESSES 2 CODIGOS SAO EQUIVALENTES*/