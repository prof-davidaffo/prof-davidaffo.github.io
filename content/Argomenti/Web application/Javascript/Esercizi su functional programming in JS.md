## 11.1 Functions ARE Variables

1. **Funzione come valore**  
    Scrivi una funzione `sayHello(name)` che stampi `"Hello, [name]"`. Assegnala poi a una variabile `greet` e invoca `greet("Alice")`.
2. **Funzione anonima assegnata a variabile**  
    Crea una funzione anonima che riceve un parametro `x` e stampi `x * x`. Assegnala a una variabile `square` e testala con un numero a tua scelta.
3. **Verifica del tipo di una funzione**  
    Dichiarata la funzione `sayHello`, stampa in console il risultato di `typeof sayHello`. Che tipo restituisce?
4. **Passaggio di funzione come parametro**  
    Scrivi una funzione `execute(fn)` che riceve una funzione come argomento e la esegue. Passale una funzione anonima che stampi `"Executing!"`.
5. **Funzione restituita da un’altra funzione**  
    Crea una funzione `makeAdder(n)` che restituisca una nuova funzione che somma `n` al numero ricevuto come parametro.  
    Esempio:

```js
const addFive = makeAdder(5)
console.log(addFive(10)) // 15
```

7. **Funzione come elemento di array**  
    Crea un array `actions` contenente tre funzioni anonime: una che stampi `"A"`, una che stampi `"B"` e una che stampi `"C"`. Invoca la seconda funzione.
8. **Funzione come valore di oggetto**  
    Crea un oggetto `mathOps` con due proprietà:

- `add`: funzione che somma due numeri
- `multiply`: funzione che moltiplica due numeri  
    Usa le due funzioni tramite `mathOps.add(2,3)` e `mathOps.multiply(2,3)`.

9. **Differenza di hoisting**  
    Scrivi due versioni della stessa funzione `foo()`:

- una come dichiarazione di funzione (`function foo() { ... }`)
- una come funzione anonima assegnata a variabile (`let foo = function() { ... }`)  
    Invocale entrambe prima della loro definizione e spiega cosa accade.
## 11.2 Object Functions
1. **Metodi di un oggetto**
   Crea un oggetto `counter` con una proprietà `count` inizializzata a 0 e un metodo `increment()` che aumenti `count` di 1 ogni volta che viene chiamato. Stampa il valore aggiornato dopo ogni chiamata.
2. **Uso di `this` nei metodi**
   Aggiungi al precedente oggetto `counter` un metodo `reset()` che riporti `count` a 0. Assicurati di usare `this` per accedere alla proprietà interna.
3. **Condivisione di metodi**
   Definisci una funzione `showBalance` che stampi il valore di `this.balance`. Crea due oggetti `walletA` e `walletB` con proprietà `balance` diverse e assegna loro la funzione `showBalance` come metodo. Osserva come cambia il risultato a seconda dell’oggetto che la chiama.
4. **Metodo che riceve una funzione come parametro**
   Crea un oggetto `bankAccount` con una proprietà `balance` e un metodo `update(fn)` che accetti una funzione come parametro. Il metodo deve aggiornare `balance` in base al valore restituito da `fn(balance)`. Prova a passare diverse funzioni (es. una che raddoppia il saldo, una che lo dimezza).
5. **Perdita del contesto di `this`**
   Usa l’oggetto `bankAccount` del punto precedente. Assegna il metodo `update` a una variabile separata, ad esempio `const updater = bankAccount.update`, e poi chiamala. Spiega con un commento cosa accade e perché `this` non si riferisce più all’oggetto originale.
6. **Oggetto con metodi interdipendenti**
   Crea un oggetto `player` con proprietà `name` e `score`. Aggiungi tre metodi:
* `addPoints(n)` che aggiunge punti al punteggio,
* `penalty(n)` che sottrae punti,
* `summary()` che restituisce una stringa con nome e punteggio aggiornato.
  Assicurati che tutti i metodi usino `this` e che sia possibile concatenarli come:
```js
player.addPoints(10).penalty(3).summary()
```

### Project – Dog Shelter Manager
Scrivi un programma JavaScript per simulare la gestione di un rifugio per cani. L’obiettivo è esercitarsi con **oggetti, metodi, `this`, e interazioni tra funzioni e array di oggetti**.
#### Specifiche
1. Crea un oggetto `shelter` che rappresenti il rifugio. Deve contenere:
   * una proprietà `dogs`, inizialmente un array vuoto
   * un metodo `addDog(dog)` che aggiunge un nuovo cane all’array
   * un metodo `listDogs()` che mostra in console tutti i cani con nome e razza
   * un metodo `feedAll()` che richiama il metodo `eat()` su ciascun cane
   * un metodo `playAll()` che richiama il metodo `play()` su ciascun cane
2. Crea una **funzione costruttrice `Dog(name, breed, age)`** o una **factory function** che restituisca oggetti cane con:
   * proprietà `name`, `breed`, `age`, `energy` (valore iniziale 100)
   * metodo `bark()` che stampa `${this.name} barks loudly!`
   * metodo `eat()` che aumenta `energy` di 10 (max 100) e stampa lo stato aggiornato
   * metodo `play()` che riduce `energy` di 20 e stampa lo stato aggiornato
     Se l’energia è sotto 20, il cane rifiuta di giocare e “barks sadly”.
3. Aggiungi al prototipo (o alla factory) un metodo `status()` che restituisca una stringa con tutte le informazioni del cane:
   `"Rex (Labrador, 4 years old) – Energy: 80"`
4. Crea almeno **5 cani diversi** e aggiungili al rifugio con `shelter.addDog()`.
5. Simula una giornata nel rifugio:
   * Mostra tutti i cani (`listDogs()`)
   * Falli giocare (`playAll()`)
   * Falli mangiare (`feedAll()`)
   * Mostra di nuovo i loro stati aggiornati.
6. Aggungi le seguenti funzionalità
* Aggiungi un metodo `findDogByName(name)` che restituisce il cane corrispondente.
* Implementa un metodo `adopt(name)` che rimuove il cane dall’array e mostra un messaggio come `"Luna has been adopted!"`.
* Aggiungi una proprietà `isAdopted` che cambia stato dopo l’adozione.
* Gestisci i casi di errore (es. adozione di cane inesistente).
* Usa `this` in modo corretto in tutti i metodi, anche all’interno di callback come `forEach`.
#### Esempio di output
```
*** Dogs in the shelter ***
Rex (Labrador, 4 years old) – Energy: 100
Luna (Mutt, 2 years old) – Energy: 100
Spot (Beagle, 5 years old) – Energy: 100
*** Playing time ***
Rex barks loudly!
Rex plays and now has 80 energy.
Luna barks loudly!
Luna plays and now has 80 energy.
Spot barks loudly!
Spot plays and now has 80 energy.
*** Feeding time ***
Rex eats happily and now has 90 energy.
Luna eats happily and now has 90 energy.
Spot eats happily and now has 90 energy.
*** Adoption ***
Luna has been adopted!
Dogs remaining: Rex, Spot
```

## 11.3 Callback Functions
###  Esercizio 1 Callback di base
Scrivi una funzione `shoutMessage` che prende una stringa e la stampa tutta in maiuscolo. Scrivi poi una funzione `withExclamation` che accetta una funzione callback e una stringa: deve chiamare la callback aggiungendo un punto esclamativo alla fine della stringa.
Chiama `withExclamation(shoutMessage, "hello")`.
###  Esercizio 2 Callback anonima
Scrivi una funzione `repeatAction` che accetta due parametri: un numero `n` e una funzione `action`.
La funzione deve eseguire `action()` per `n` volte.
Chiama `repeatAction` passando un callback anonimo che stampi `"Doing it!"` tre volte.
###  Esercizio 3 Callback che restituisce il risultato
Scrivi una funzione `compute` che prende due numeri e una callback. La callback deve ricevere i due numeri e restituire un risultato. `compute` deve poi stampare quel risultato.
Chiama `compute` con:
* una callback che calcola la differenza
* una callback che calcola il massimo tra i due
###  Esercizio 4 Callback in un array
Hai un array di funzioni:
```js
let actions = [
    function(){ console.log("jump"); },
    function(){ console.log("run"); },
    function(){ console.log("stop"); }
];
```
Scrivi una funzione `doAll` che prende un array di funzioni come argomento e le esegue una alla volta.
Chiama `doAll(actions)`.
###  Esercizio 5 Closure semplice
Scrivi una funzione `makeCounter` che crea e restituisce un’altra funzione.
La funzione restituita, ogni volta che viene eseguita, deve incrementare un contatore interno e stamparlo.
Usa il contatore in tre chiamate consecutive: noti qualcosa di particolare?
###  Esercizio 6 Closure parametrica
Scrivi una funzione `multiplier(factor)` che restituisce una funzione capace di moltiplicare qualunque numero per `factor`.
Crea:
* `double = multiplier(2)`
* `triple = multiplier(3)`
  E chiamali su un numero a tua scelta.
###  Esercizio 7 Closure per salvare stato testuale
Scrivi una funzione `makeLogger(prefix)` che restituisce una funzione capace di stampare messaggi preceduti dal `prefix`.
Esempio:
`let warn = makeLogger("[WARN]");`
`warn("Disk almost full");`
Produce: `[WARN] Disk almost full`.
###  Esercizio 8 Combinare callback e closure
Scrivi una funzione `countAndDo(callback)` che contiene un contatore interno (closure). Ogni chiamata:
* incrementa il contatore
* stampa `"Call number: X"`
* esegue la callback ricevuta
  Chiama `countAndDo` tre volte con una callback che stampa `"Action!"`.
###  Esercizio 9 Fabbrica di funzioni con comportamento diverso
Scrivi una funzione `makeTagger(tag)` che restituisce una funzione che prenda una stringa e la stampi racchiusa nel tag HTML specificato.
Esempi:
* `let bold = makeTagger("b")` → `bold("hello")` stampa `<b>hello</b>`
* `let italic = makeTagger("i")`
###  Esercizio 10 Closure per accumulare dati
Scrivi una funzione `makeAccumulator(startValue)` che restituisce una funzione capace di sommare un valore al totale interno e restituire il nuovo totale.
Provala con una serie di incrementi.
###  Esercizio 11 Callback nel filtraggio personalizzato
Scrivi una funzione `filterArray(arr, testCallback)` che genera un nuovo array includendo solo gli elementi per cui `testCallback(element)` restituisce `true`.
Usala per filtrare:
* solo numeri pari
* solo numeri maggiori di 10
* solo stringhe più lunghe di 4 caratteri
###  Mini progetto finale
Realizzare un piccolo gestore di attività con queste caratteristiche:
- Deve esistere un “TaskManager” creato tramite una factory function.
- Ogni task ha:
    - un nome
    - una funzione da eseguire (callback)
- Il TaskManager deve permettere:
    - aggiungere task
    - eseguire tutti i task
    - eseguire solo i task che soddisfano una condizione (callback filtro)
- Il TaskManager deve mantenere internamente il conteggio totale delle esecuzioni (closure).
- Ogni task deve essere un oggetto con:
    - proprietà `name`
    - proprietà `action` (funzione)

## 11.4 Functional Looping
1. **forEach**
   Crea un array di nomi e usa `forEach()` per stampare un messaggio personalizzato per ciascuno (ad esempio “Ciao, Anna!”).
2. **map**
   Crea un array di numeri e usa `map()` per ottenere un nuovo array in cui ogni numero è elevato al quadrato. Stampa l’array originale e quello trasformato per mostrare che `map()` non modifica l’originale.
3. **filter**
   Crea un array di oggetti con le proprietà `{name, score}` e usa `filter()` per ottenere solo gli studenti con punteggio maggiore di 70.
4. **reduce**
   Usa `reduce()` per calcolare la somma totale dei punteggi ottenuti dagli studenti filtrati nell’esercizio precedente.
5. **Combinazione di funzioni funzionali**
   Data la lista `const data = [3, 12, 7, 25, 9, 18]`, usa in un’unica catena `filter`, `map` e `reduce` per:
* filtrare solo i numeri maggiori di 10,
* raddoppiare i valori rimanenti,
* calcolare la somma finale.
6. **Funzione `compose`**
   Scrivi una funzione `compose(f, g)` che restituisca una nuova funzione corrispondente a `x => f(g(x))`. Provala creando due semplici funzioni come `double(x)` e `increment(x)` e combinandole in diversi ordini.
7. **Analisi dati completa**
   Crea un array di oggetti rappresentanti studenti, ad esempio:
```js
const students = [
  { name: "Anna", grade: 28 },
  { name: "Luca", grade: 18 },
  { name: "Sara", grade: 30 },
  { name: "Marco", grade: 22 }
]
```
Usa `filter`, `map` e `reduce` per:
* selezionare solo gli studenti con voto ≥ 24,
* ottenere un array dei loro nomi in maiuscolo,
* calcolare la media dei voti filtrati.
  Stampa tutti i risultati in modo leggibile.
## 11.5 Pure Functions
1. **Funzione pura semplice**
   Scrivi una funzione `addTax(price)` che restituisca il prezzo aumentato del 22% di IVA, senza modificare la variabile passata come argomento.
2. **Evitare effetti collaterali**
   Scrivi una funzione `applyDiscount(products, discount)` che restituisca **un nuovo array** di oggetti con il prezzo scontato, senza modificare l’array originale. Ogni oggetto ha la forma `{name, price}`.
3. **Funzione impura da correggere**
   Analizza e riscrivi in forma pura il seguente codice:
```js
let counter = 0
function increase() { counter++ }
increase()
```
La versione pura deve restituire un nuovo valore senza modificare variabili esterne.
4. **Composizione di funzioni pure**
   Crea tre funzioni pure:
```js
const double = x => x * 2
const addOne = x => x + 1
const square = x => x * x
```
Usando solo queste, costruisci manualmente una pipeline che calcoli `((x + 1) * 2)²` a partire da un numero di input.
5. **Pipeline generica**
   Scrivi una funzione `pipe(...fns)` che riceve una serie di funzioni e restituisca una nuova funzione che le applichi in sequenza a un valore iniziale.
   Esempio:
```js
const transform = pipe(addOne, double, square)
console.log(transform(2)) // 36
```
6. **Riconoscere funzioni pure e impure**
   Scrivi quattro piccole funzioni, due pure e due impure. Commenta nel codice quali sono e spiega in una riga perché.
   Esempio di criterio: modificano variabili globali, dipendono da input esterni, oppure restituiscono sempre lo stesso risultato con gli stessi argomenti.
7. **Versione pura di un flusso di calcolo**
   Scrivi un frammento di codice impuro che elabora una lista di prezzi modificando l’array originale:
```js
let prices = [100, 250, 80]
for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 1.22
}
```
Riscrivilo in forma **pura** usando `map()` e memorizzando il risultato in un nuovo array `updatedPrices`.
Poi usa `reduce()` per calcolare il totale con IVA.
Il codice finale non deve modificare `prices`.
###  Progetto Finale – Mini Data Processor
####  Obiettivo
Realizzare un piccolo programma che gestisca un insieme di dati (ad esempio prodotti, studenti o transazioni) **solo tramite funzioni, metodi e operazioni funzionali**, senza cicli tradizionali e senza modificare i dati originali.
####  Descrizione generale
Crea un file `dataProcessor.js` che contenga:
1. **Una struttura dati di partenza**
   Un array di oggetti, ad esempio:
   ```js
   const products = [
     { name: "Laptop", price: 1200, category: "tech" },
     { name: "Book", price: 18, category: "media" },
     { name: "Headphones", price: 80, category: "tech" },
     { name: "Shirt", price: 25, category: "clothing" }
   ]
   ```
2. **Funzioni pure per la trasformazione dei dati**
   * `addTax(product)` → restituisce un nuovo oggetto con il prezzo aumentato del 22%.
   * `isExpensive(product)` → restituisce `true` se il prezzo è superiore a 100.
   * `toLabel(product)` → restituisce una stringa formattata come `"[CATEGORIA] Nome - Prezzo €"`.
3. **Uso di metodi funzionali**
   * Usa `map()` per creare una nuova lista di prodotti con l’IVA applicata.
   * Usa `filter()` per estrarre solo i prodotti “costosi”.
   * Usa `reduce()` per calcolare il costo totale dei prodotti filtrati.
4. **Composizione di funzioni**
   Crea una funzione `processProducts(products)` che combini tutti i passaggi precedenti, restituendo un oggetto finale come:
   ```js
   {
     labels: [ "TECH Laptop - 1464 €", "TECH Headphones - 97.6 €" ],
     total: 1561.6
   }
   ```
5. **Oggetto con metodi**
   Trasforma il programma in un oggetto `store` con metodi:
   ```js
   const store = {
     products,
     process: processProducts,
     showSummary() {
       const result = this.process(this.products)
       console.log(result.labels.join("\n"))
       console.log("Totale con IVA:", result.total.toFixed(2))
     }
   }
   ```
   Invoca `store.showSummary()` per visualizzare l’intero flusso di lavoro.
6. **Callback opzionale**
   Modifica `processProducts` per accettare una `callback` che riceva il risultato finale e lo stampi o lo salvi in un formato diverso (ad esempio JSON).
7. **Estensione**
   Aggiungi un metodo `store.sortByPrice(order)` che ordini i prodotti in base al prezzo, restituendo un nuovo array ordinato senza modificare quello originale.
## 11.4 Functional looping
### Esercizio 1 forEach base
Dato l’array:
```js
let colors = ["red", "green", "blue", "yellow"];
```
Scrivi una chiamata a `forEach()` che stampa ogni colore in console usando una callback anonima.
Senza usare cicli `for`.
### Esercizio 2 forEach con più parametri
Dato:
```js
let names = ["Alice", "Bob", "Carol"];
```
Usa `forEach()` per stampare una frase del tipo `"Index 1: Bob"` utilizzando sia l’elemento sia l’indice.
### Esercizio 3 map base
Dato:
```js
let nums = [3,6,9,12];
```
Usa `map()` per creare un array contenente la metà di ogni numero.
### Esercizio 4 map per trasformare stringhe
Dato:
```js
let words = ["Apple", "BANANA", "peAr"];
```
Crea un nuovo array con tutte le parole trasformate in minuscolo. Usa una callback anonima.
### Esercizio 5 filter base
Dato:
```js
let values = [0, 11, 4, -2, 9, 18];
```
Usa `filter()` per ottenere solo i valori maggiori di 5.
### Esercizio 6 combinazione filter + map
Dato:
```js
let numbers = [5,12,8,130,44];
```
Ottieni un nuovo array che contiene il doppio dei soli numeri maggiori di 10.
### Esercizio 7 reduce per somma
Dato:
```js
let arr = [1,2,3,4];
```
Usa `reduce()` per calcolare la somma degli elementi.
### Esercizio 8 reduce con valore iniziale personalizzato
Usa lo stesso array dell’esercizio precedente ma fai partire la somma da 100.
### Esercizio 9 riduzione non numerica
Dato:
```js
let chars = ["H","e","l","l","o"];
```
Usa `reduce()` per ottenere la stringa `"Hello"`.
### Esercizio 10 mappa di oggetti
Dato:
```js
let people = [
  {name: "Alice", age: 20},
  {name: "Bob", age: 25},
  {name: "Carol", age: 30}
];
```
Usa `map()` per ottenere un array contenente solo i nomi.
### Esercizio 11 filtro su oggetti
Usa la stessa lista dell’esercizio precedente per ottenere solo le persone con età ≥ 25.
### Esercizio 12 riduzione per calcolare la media
Usando `people`, calcola l’età media con `reduce()`.
### Esercizio 13 concatenazione multipla
Dato:
```js
let nums2 = [1,2,3,4,5,6,7,8];
```
Scrivi una pipeline:
1. Filtra i numeri dispari
2. Elevane ciascuno al quadrato
3. Somma tutti i quadrati
   Deve essere una singola catena: `nums2.filter(...).map(...).reduce(...)`
### Esercizio 14 creare la propria funzione di forEach
Implementa una funzione `myForEach(array, callback)` che simula il comportamento di `Array.forEach`.
Non usare `forEach` o `map`.
## Mini progetto finale
### Obiettivo
Creare un piccolo “processore di dati” usando **map**, **filter** e **reduce** in combinazione, applicati a una lista complessa di oggetti.
### Dataset iniziale
```js
let products = [
  { name: "Laptop", price: 1200, category: "tech", rating: 4.5 },
  { name: "Headphones", price: 80, category: "tech", rating: 4.1 },
  { name: "Shoes", price: 60, category: "fashion", rating: 3.9 },
  { name: "Keyboard", price: 150, category: "tech", rating: 4.7 },
  { name: "Jacket", price: 200, category: "fashion", rating: 4.3 },
  { name: "Monitor", price: 300, category: "tech", rating: 4.2 }
];
```
### Task richiesti
1. Filtrare solo i prodotti della categoria `"tech"` con rating ≥ 4.2.
2. Trasformarli in un nuovo array contenente oggetti del tipo:
   ```js
   { name: "...", priceWithTax: ... }
   ```
   dove `priceWithTax` = `price * 1.22`.
3. Calcolare con `reduce()` la somma totale dei `priceWithTax`.
4. Creare una funzione finale `processData(products)` che esegue internamente tutti i passaggi e restituisce un oggetto del tipo:
   ```js
   {
     items: [...],              // i prodotti trasformati
     totalCost: <numero>        // risultato della reduce
   }
   ```
### Requisiti tecnici
* Niente cicli espliciti (`for`, `while`, `for...of`).
* Solo `map`, `filter`, `reduce`, `forEach` (se serve).
* Tutte le trasformazioni devono avvenire in maniera funzionale (senza mutare gli oggetti originali).