/*1) Crie um programa que dado um número imprima a sua tabuada.
const numero = 5

for (let i = 1; i <= 10; i++){
  console.log(i * numero);
}*/
/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const lista = [1,2,3,4,5,6,7,8,9,10,11];

for (let i = 0; i < lista.length; i++) {
  const numero = lista[i];
  if (numero % 2 === 0){
    console.log(numero);
  }
}*/
/*3)Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const nomes = ['vitor', 'raphael', 'beatris', 'vitoria', 'verusca', 'fernando'];


for (let i = 0; i < nomes.length; i++) {
  var nomeAtual = nomes[i];
  if (nomeAtual[0] === "v" ) {
    console.log(nomeAtual)
  }
}
*/
/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
for (let i = 10; i <= 50; i++) {
  if ( i % 2 === 0) {
    console.log(i);
  }
}*/
/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]
const lista = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < lista.length; i++) {
  const media = lista[i];
  if (media < 5) {
    console.log(media);
  }

}*/
/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const lista = [2, 7, 3, 8, 10, 4];

let nota = 0;

for (let i = 0; i < lista.length; i++) {
  const maiorNota = lista[i];
  if (maiorNota > nota) {
    nota = maiorNota;
  }
}
console.log(nota);*/



let data = "12,02,1992";
const mesPorExtenso = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

var dia = data.substring(0,2)
var ano = data.substring(6,10)
var mes = data.substring(3,5)

if (mesPorExtenso === mes) {
  return true;
}

console.log();




