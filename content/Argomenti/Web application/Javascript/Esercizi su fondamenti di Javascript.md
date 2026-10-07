#### Esercizio 1 Primo script
Crea un file `index.html` con dentro uno `<script>` che stampi `"Hello JavaScript!"` in console.
Domanda: cosa succede se sposti il tag `<script>` all’inizio del `<head>`?
#### Esercizio 2 Strict mode
Scrivi uno script con:
```js
x = 10;
console.log(x);
```
Poi aggiungi `"use strict";` in cima.
Domanda: perché il secondo caso dà errore?
#### Esercizio 3 Variabili
Dichiara una variabile `let nome = "Anna";`, una `const eta = 20;` e prova a riassegnarle.
Domanda: quale variabile non puoi modificare?
#### Esercizio 4 Tipi di dato
Scrivi variabili di tipo stringa, numero, booleano, null, undefined.
Usa `console.log(typeof variabile)` per ciascuna.
Domanda: che tipo restituisce `typeof null`?
#### Esercizio 5 Array base
Crea un array `[1, 2, 3]`.
* Stampa l’elemento in posizione 1
* Stampa l’elemento in posizione 10
* Assegna `arr[5] = 99` e poi stampa `arr` e `arr.length`
  Domanda: perché compaiono “buchi” nell’array?
#### Esercizio 6 Array loop
Crea un array `[10, 20, 30, 40]`.
* Somma i valori con un ciclo `for`
* Ripeti con `for...of`
#### Esercizio 7 Oggetti
Crea un oggetto:
```js
let student = {
  name: "Luca",
  age: 17,
  grade: "B"
};
```
* Stampa `student.name`
* Modifica `student.grade` in `"A"`
* Aggiungi `student.email = "luca@mail.com"`
#### Esercizio 8 Array di oggetti
Crea un array di 3 oggetti `student` con proprietà `name` e `age`.
Stampa i nomi di tutti gli studenti con un ciclo.
#### Esercizio 9 Type coercion
Scrivi e osserva i risultati:
```js
console.log("40" + 2);
console.log("40" - 2);
console.log(5 == "5");
console.log(5 === "5");
```
#### Esercizio 10 Condizionali
Scrivi una funzione `checkNumber(x)` che stampi:
* `"positivo"` se x > 0
* `"negativo"` se x < 0
* `"zero"` se x == 0
#### Esercizio 11 Cicli
Stampa la tabellina del 7 (da 1 a 10) usando:
* un ciclo `for`
* un ciclo `while`
#### Esercizio 12 Funzioni
Scrivi:
* una funzione `square(x)` che ritorni il quadrato
* una funzione `isEven(x)` che ritorni `true` se pari
* una funzione `countEvens(arr)` che conti i numeri pari in un array
#### Esercizio 13 Mini-progetto
Crea un array di oggetti `student` con proprietà `name` e `grades` (array di voti).
Scrivi funzioni che:
* calcolino la media dei voti di ciascuno studente
* stampino un report con nome e media
* indichino “Promosso” se la media ≥ 18, “Bocciato” altrimenti
