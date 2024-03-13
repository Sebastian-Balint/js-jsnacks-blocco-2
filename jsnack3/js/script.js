// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [42, 10, 31, 7, 8, 22, 53, 97];
const redDiv = document.querySelector("#red");
const greenDiv = document.querySelector("#green");

// Scorriamo l'array
for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i];

  // Per ogni numero
  // Se è pari lo mettiamo nel div verde
  // altrimenti lo mettiamo nel div rosso
  if (thisNumber % 2 === 0) {
    greenDiv.innerHTML += `<div>${thisNumber}</div>`;
  } else {
    redDiv.innerHTML += `<div>${thisNumber}</div>`;
  }
}
