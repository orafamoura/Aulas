/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.


class carro {
  marca;
  cor;
  gastoMedioPorKm;
  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
  calcularGastoDePercurso(distanciaEmKm, preçoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * preçoCombustivel;
  }
  descrever() {
    console.log(`a marca é ${this.marca} da cor ${this.cor} e gasta pela distancia que deseja`)
  }
}

const bmw = new carro('bmw', 'azul', 1 / 15);
const mercedes = new carro('mercedes', 'branca', 1 / 18);
const ferrari = new carro('ferrari', 'vermelha', 1 / 20);


console.log(bmw.calcularGastoDePercurso(100, 6.10))*/
/*
const preçoCombustivel = 6.10
const Kilometros = 100
class carro {
  marca;
  cor;
  gastoMedio;
  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = (Kilometros / gastoMedio) * preçoCombustivel;
  }
  descrever() {
    console.log(`a marca é ${this.marca} da cor ${this.cor} e gasta ${this.gastoMedio} pela distancia que deseja`)
}
}
const bmw = new carro('bmw', 'azul', 15);
const mercedes = new carro('mercedes', 'branca', 18);
const ferrari = new carro('ferrari', 'vermelha', 20);
bmw.descrever();
mercedes.descrever();
ferrari.descrever();*/
/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class pessoa {
  nome;
  peso;
  altura;
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calculadorDeImc() {
    return (this.peso / (this.altura * this.altura))
  }
  classificarImc() {
    const imc = this.calculadorDeImc();
    if (imc < 18.5) {
      return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 25) {
      return ('Peso Normal');
    } else if (imc > 25 && imc < 30) {
      return ('Acima do peso');
    } else if (imc > 30 && imc < 40) {
      return ('Obeso');
    } else {
      return ('Obesidade Grave');
    }
  }
}
const jose = new pessoa('jose', 80, 1.70);
const jair = new pessoa('jair', 90, 1.90);

/*console.log(jose.calculadorDeImc(80, 1.70));
console.log(jair.calculadorDeImc(90, 1.90));
console.log(jair.calculadorDeImc())
console.log(jose.calculadorDeImc(),jose.classificarImc())*/
console.log(jose.classificarImc())
