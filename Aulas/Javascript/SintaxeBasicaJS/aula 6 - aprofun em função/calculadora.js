function calculadora() {
    const operacao = prompt('Escolha uma operaç?o: \n 1 - Soma (+)\n 2 - subtraç?o (-)\n 3 - multiplicaç?o (*)\n 4 - divis?o real (/)\n 5 - Divis?o  inteira (%)\n 6 - Potenciaç?o (**)');

    if (!operacao || operacao >= 7) {
        alert('erro - operaç?o invalida')
        calculadora();
    } else {
        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt('insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parametros invalidos!')
            calculadora();
        } else {        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaoperacao();
        } function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaoperacao();
        } function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaoperacao();
        } function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaoperacao();
        } function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divis?o entre ${n1} % ${n2} é igual a ${resultado}`)
            novaoperacao();
        } function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}? é igual a ${resultado}`)
            novaoperacao();
        }

        function novaoperacao() {
            let opcao = prompt('Deseja fazer outra operaç?o?\n 1 - sim\n 2 - n?o');

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('ate mais')
            } else {
                alert('digite uma opç?o valida')
                novaoperacao();
            }
        }
    }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
       /* switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
    }*/

    }
}
calculadora();


