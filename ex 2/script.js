let idadeMotorista = prompt("Digite a sua idade:");
let temCarteira = prompt(
  "Tem carteira de motorista? (responda 'sim' ou 'não')"
);

if (idadeMotorista < 18 || temCarteira.toLowerCase() !== "sim") {
  console.log("Não pode dirigir");
} else {
  console.log("Pode dirigir");
}