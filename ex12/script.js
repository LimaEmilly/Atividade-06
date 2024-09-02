let idade = prompt("Digite sua idade:");
idade = parseInt(idade);

if (idade >= 18 && idade <= 67) {
  document.write("Você pode doar sangue.");
} else {
  document.write("Você não pode doar sangue.");
}