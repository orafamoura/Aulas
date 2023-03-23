
/*function sayMyName(name) {
    console.log('Your name is:' + name);
}

sayMyName('Raphael');
sayMyName('Beatriz');
---------------------------------------------------
function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros){
  const valorDeAcrecimo = (percentualJuros / 100) * valor
  return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));*/
/*function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function classificarImc(IMC) {
  if (IMC < 18.5) {
      return 'Abaixo do peso';
  } else if (IMC >= 18.5 && IMC <= 25) {
      return 'Peso Normal';
  } else if (IMC > 25 && IMC < 30) {
      return 'Acima do peso';
  } else if (IMC > 30 && IMC < 40) {
      return 'Obeso';
  } else {
      return 'Obesidade Grave';
  }
}
  
function main() {
    const peso = 120;
    const altura = 1.67;

    const IMC = calcularImc(peso, altura);
    console.log(classificarImc(IMC));
}
main();
/* function dentro de um parenteses fica, funcao nao nomeada, pois pode se tirar o main
(function () {
  const peso = 120;
  const altura = 1.67;

  const IMC = calcularImc(peso, altura);
  console.log(classificarImc(IMC));
})();
*/
function removeVogaisString( remove ){
  return remove.replace(/[aeiouà-ú]/g,'');
}

var resultado = removeVogaisString( "mundo!" );

console.log( resultado );