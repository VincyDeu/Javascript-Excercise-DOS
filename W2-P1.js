/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 10;
let y = 20;

if (x > y) {
  console.log("X = " + x);
} else {
  console.log("Y = " + y);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num = 10;
let num2 = 5;

console.log(num != num2);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 10;
console.log(numero%5);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number = 8;
let sum = (3+5);
console.log(number);
console.log(sum);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let saldoTotale = totalShoppingCart;

if (saldoTotale > 50) {
    console.log("Spedizione Gratuita!");
} else {
    console.log("Spese di spedizione: 10€");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 40;
let saldoTotale1 = totalShoppingCart1;
let BlackFriday = 20;

if ( (saldoTotale1>50) && (BlackFriday/100*totalShoppingCart1) ) {
   console.log("Spesa Gratuita + Sconto Black Friday");
} else {
    console.log("Spesa di spedizione di 10 euro + Sconto Applicato");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let number1 = 50;
let number2 = 60;
let number3 = 70;

if (number1 < number2) {
  console.log(number1);
} else {
  console.log(number3);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numberint = 10;
console.log(typeof numberint);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let altroNumero = 31;

if (altroNumero%3 == true) {
  console.log("Il numero è dispari");
} else {
  console.log("Il numero è pari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 10;
if ((val < 10) || (val < 5) || (val >= 10)) {
    console.log("Meno di 10 & Meno di 5 & Uguale o maggiore");
}

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let supers = 20;

if (supers < 5) {
  console.log("Tiny");
} else if (supers < 10) {
  console.log("Small");
} else if (supers < 15) {
  console.log("Medium");
} else if (supers < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

let person = {
  gender: "male",
  gender: "female"
}

let isMale = person ? "male" : "female";
console.log(isMale);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

let numeros = 0;
while (numeros <= 5) {
  console.log("numero è : " + numeros);
  numeros++; 
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for (let numeros2 = 0; numeros2 <= 10; numeros2++) {
  console.log("numero2 è :" + numeros2);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

  for (let numeros3 = 0; numeros3 <= 10; numeros3++) {
      if (numeros3 == 3) {
          continue;
      }
      if (numeros3 == 8) {
          continue;
      }
      console.log("NUMERI : " + numeros3);
  }

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

  for (let jimmy = 0; jimmy <=15; jimmy++) {
  if  (jimmy%2 == false) {
    console.log("Il numero " + (jimmy) +  " -> è Pari");
  } else if (jimmy%2 == true) {
    console.log("Il numero " + (jimmy) +  " -> è Dispari");
  }
} 

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
// Fizz%3 , Buzz%5

for (let You = 1; You <= 100; You++) {
  if ((You%3==0)&&(You%5==0)) {
    console.log("FizzBuzz");
    continue;
  }
  if (You%3 == 0) {
    console.log("Fizz");
    continue;
  } else if (You%5 == 0) {
    console.log("Buzz");
    continue; 
    }
  console.log(You);
}



/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 1;

switch (day) {
  case 1:
    console.log("Lunedì")
    break;
  case 2:
    console.log("Martedì")
    break;
  case 3:
    console.log("Mercoledì")
    break;
  case 4:
    console.log("Giovedì")
    break;
  case 5:
    console.log("Venerdi")
    break;
  case 6:
    console.log("Sabato")
    break;
  case 7:
    console.log("Domenica");
    break;
    default:
    console.log("Valore non valido! Inserisci un valore da 1 a 7");
}

// let name = "Flow";

// switch (name) {
//   case 'Mario'

// }