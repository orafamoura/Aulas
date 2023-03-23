/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol; 4.31
 2 - Preço do gasolina; 6.l0
 3 - O tipo de combustível que está no seu carro; 
 4 - Gasto médio de combustível do carro por KM; 10 gasolina / 8 etanol
 5 - Distância em KM da viagem; 100

Imprima no console o valor que será gasto para realizar esta viagem. */

const PreçoEtanol = 4.31;
const PreçoGasolina = 6.10;
const GastoMedio = 10;
const DistanciaPercorrida = 100;
const TipoDeCombustivel = 'gasolina';

const litrosConsumidos = DistanciaPercorrida / GastoMedio


if (TipoDeCombustivel === 'etanol') {
  const ValorTotal = litrosConsumidos * PreçoEtanol;
  console.log(ValorTotal);
} else {
  const ValorTotal = litrosConsumidos * PreçoGasolina;
  console.log(ValorTotal);
}


