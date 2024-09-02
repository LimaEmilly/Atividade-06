let precoTabela = parseFloat(prompt("Digite o preço de tabela do produto:"));
let numeroParcelas = parseInt(
  prompt("Digite o número de vezes para o pagamento:")
);

if (numeroParcelas < 1 || numeroParcelas > 15) {
  console.log(
    "Número de parcelas inválido. Por favor, insira um valor entre 1 e 15."
  );
} else {
  let precoFinal;
  let valorParcela;

  if (numeroParcelas === 1) {
    precoFinal = precoTabela * (1 - 0.025);
  } else if (numeroParcelas <= 5) {
    precoFinal = precoTabela;
  } else if (numeroParcelas <= 10) {
    precoFinal = precoTabela * (1 + 0.06);
  } else {
    precoFinal = precoTabela * (1 + 0.13);
  }

  valorParcela = precoFinal / numeroParcelas;
  console.log("O preço total da compra é: R$" + precoFinal.toFixed(2));
  console.log("O valor de cada parcela é: R$" + valorParcela.toFixed(2));
}