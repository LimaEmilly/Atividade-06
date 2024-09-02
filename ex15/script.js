let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo equilátero: todos os lados são iguais.");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo isósceles: dois lados são iguais.");
  } else {
    console.log("Triângulo escaleno: todos os lados são diferentes.");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo.");
}