// Fazer um calculadora que receberá dois valores e a operação (+,-,*,/).
// Ao clicar no botão calcular o resultado é demonstrado.

const fatoresInput = document.querySelectorAll('input');
const select = document.querySelector('select');
const resultado = document.querySelector('.resultado');

const handleCalculate = () => {
  const primeiroFator = fatoresInput[0].value;
  const segundoFator = fatoresInput[1].value;

  if (primeiroFator.length && segundoFator.length) {
    resultado.innerText = eval(
      `${primeiroFator} ${select.value} ${segundoFator}`
    );
  }
};

fatoresInput.forEach((elementoAtual) => {
  elementoAtual.addEventListener('input', handleCalculate);
});

select.addEventListener('input', handleCalculate);
