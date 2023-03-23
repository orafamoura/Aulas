/*function meuNome(nome){
  console.log('nome dele é: ' + nome);
}
meuNome('raphael');

function VerificarIdade(idade){
  if (idade >= 18){
    console.log('maior de idade');
  } else {
    console.log('menor de idade');
  }
}
VerificarIdade(14);




1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/
function AplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}
function AplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}

const preçoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(AplicarDesconto(preçoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(AplicarDesconto(preçoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(preçoEtiqueta);
} else
  console.log(AplicarJuros(preçoEtiqueta, 10));

/* mesma coisa só que formas diferentes */
  console.log(200 * 0.10);
  console.log(10 / 100);