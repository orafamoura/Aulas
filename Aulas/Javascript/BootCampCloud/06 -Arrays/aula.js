
const alunos = ['joao', 'vitor','marina',]; 

alunos.push('Renan');

alunos[0] = 'Raphael';
console.log(alunos);
/*const alunos = ['1', '2', '3'];

console.log(alunos.pop());
console.log(alunos);*/
/*for loop - let i = 0, quer dizer que começa do 0, pois geralmente é usado em arrays
index < 10, se index for menos que 10, continua sendo executado
index++, significa index = index + 1, ai se cria o looping, ele soma até o index parar no 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}*/
/*const nome = 'Raphael moura';

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}*/
/*const notas = [];

notas.push(6);
notas.push(5);
notas.push(9);
notas.push(2);
notas.push(4);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];  
  soma = soma + nota;
}
const media = soma / notas.length
console.log(media);*/