let turno = prompt("Por favor,digite 'M' para matutino 'V' para vespertino ou 'N' para noturno").toUpperCase();
  
  switch (turno) {
    case 'M':
      alert("Bom dia!");
      break;
    case 'V':
      alert("Boa tarde!");
      break;
    case 'N':
      alert("Boa Noite");
      break;
    default:
      alert("Valor inválido");
  }