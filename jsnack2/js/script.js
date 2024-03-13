// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedere la prima e seconda parola
const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

// stabilire la più corta e la più lunga per deciderne l'ordine
if (firstWord.length > secondWord.length) {
  alert(`${secondWord} ${firstWord}`);
} else {
  alert(`${firstWord} ${secondWord}`);
}
