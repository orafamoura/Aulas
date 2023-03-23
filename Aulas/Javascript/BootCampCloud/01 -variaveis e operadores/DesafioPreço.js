/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let PreçoCombustivel = 6.24;
  let PreçoCombustivel2 = 6.10;

const GastoMedioKm = 10;
const DistanciaKm = 100;

const LitrosConsumidos = DistanciaKm / GastoMedioKm;
const ValorTotal = PreçoCombustivel2 * LitrosConsumidos;

console.log(ValorTotal);






