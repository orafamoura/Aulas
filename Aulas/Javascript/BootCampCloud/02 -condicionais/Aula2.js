/* Boolean */

const CamisetaRaphaelAzul = true;
const CamisetaBeatrizVerde = false;

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;
/* O numero par esta pegando o que sobra do 2, entao 11/2 sobra o 1, entao tudo que da maior que 0 nao é par*/

if (numero === 0) {
    console.log("O numero não pode ser 0");
} else if (numeroDivisivelPor5) {
   console.log('SIM');
} else {
    console.log('NAO');
}
/* se numero for igual a 0 'o numero nao pode ser 0 se nao else if SIM, se nao, NAO */
