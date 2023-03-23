
class pessoa {
  nome;
  idade;
  anoDeNascimento;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }
  descrever() {
    console.log(`meu nome é ${this.nome}, minha idade é ${this.idade} e nasci em ${this.anoDeNascimento}`)
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`eles tem a mesma idade`);
  }
}
const raphael = new pessoa('raphael moura', 24);
const beatriz = new pessoa('beatriz reis', 23);

compararPessoas(raphael, beatriz);




/* const jaime = new pessoa('jaime', 27);

raphael.descrever();
beatriz.descrever();
jaime.descrever();

console.log(raphael)*/
/*const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa.descrever = function (){
  console.log(`meu nome é ${this.nome}`);
}

pessoa.descrever();
raphael.altura = 1.79;
delete raphael.nome;
console.log(raphael.nome,raphael.idade);
console.log(raphael)*/


