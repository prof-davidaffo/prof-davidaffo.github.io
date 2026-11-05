## Esercizio Java – Gestione di una biblioteca
### Obiettivo
Realizzare un programma Java per la gestione di una piccola biblioteca, che consenta di registrare libri, effettuare prestiti e restituzioni e consultare il catalogo.
Il progetto deve utilizzare i principi della programmazione orientata agli oggetti, con particolare attenzione a:
- Incapsulamento e controllo dell'accesso agli attributi.
- Overloading dei metodi.
- Gestione delle eccezioni.
- Utilizzo di `ArrayList` per gestire collezioni dinamiche di oggetti.
## 1. Classe Libro
Creare una classe `Libro` caratterizzata dai seguenti attributi privati:

|Attributo|Tipo|Descrizione|
|---|---|---|
|`titolo`|`String`|Titolo del libro|
|`autore`|`String`|Autore del libro|
|`isbn`|`String`|Codice identificativo univoco|
|`disponibile`|`boolean`|Stato di disponibilità|
La classe deve prevedere:
1. Un costruttore che riceva titolo, autore e ISBN. Il libro viene inizialmente considerato disponibile.
2. I metodi getter necessari per accedere agli attributi.
3. Un metodo `presta()` che imposti il libro come non disponibile.
4. Un metodo `restituisci()` che renda nuovamente disponibile il libro.
5. Un metodo `toString()` che restituisca una rappresentazione testuale delle informazioni del libro.
Vincoli: gli attributi devono essere accessibili esclusivamente attraverso i metodi della classe. I metodi `presta()` e `restituisci()` devono verificare che l'operazione sia consentita.
## 2. Gestione delle eccezioni
Realizzare le seguenti eccezioni personalizzate, tutte derivate dalla classe `Exception`.

|Eccezione|Quando deve essere sollevata|
|---|---|
|`LibroNonTrovatoException`|Quando viene richiesto un libro inesistente|
|`LibroNonDisponibileException`|Quando si tenta di prestare un libro già in prestito|
|`LibroDuplicatoException`|Quando si tenta di aggiungere un libro con un ISBN già presente|
|`OperazioneNonValidaException`|Quando si tenta di restituire un libro già disponibile|
Ogni eccezione deve prevedere un costruttore che consenta di specificare un messaggio descrittivo.
I metodi interessati devono dichiarare le eccezioni attraverso la parola chiave `throws`.
## 3. Classe Biblioteca
Creare una classe `Biblioteca` che contenga un attributo privato:
```java
private ArrayList<Libro> libri;
```
La lista deve essere inizializzata nel costruttore.
Implementare i seguenti metodi.
### Inserimento dei libri
```java
public void aggiungiLibro(Libro libro)
```
Aggiunge un libro alla biblioteca.
Il metodo deve impedire l'inserimento di due libri con lo stesso ISBN.
### Ricerca dei libri 
```java
public Libro cercaLibro(String isbn)
```
Cerca un libro attraverso il suo ISBN.

```java
public ArrayList<Libro> cercaLibri(String autore)
```
- Restituisce tutti i libri dell'autore indicato.
### Gestione dei prestiti – Overloading
Implementare due versioni del metodo `prestaLibro`:
```java
public void prestaLibro(String isbn)
public void prestaLibro(Libro libro)
```
Entrambi i metodi devono consentire il prestito di un libro presente nella biblioteca, verificandone la disponibilità.
### Restituzione dei libri
```java
public void restituisciLibro(String isbn)
```
Registra la restituzione del libro identificato dall'ISBN.
### Visualizzazione del catalogo
```java
public void stampaCatalogo()
```
Stampa le informazioni di tutti i libri presenti nella biblioteca, indicando anche la disponibilità.
## 4. Classe Main
Creare una classe `Main` per verificare il corretto funzionamento del programma.
Il programma deve:
1. Creare un oggetto `Biblioteca`.
2. Creare almeno cinque libri, di cui almeno due dello stesso autore.
3. Aggiungere i libri alla biblioteca.
4. Visualizzare l'intero catalogo.
5. Cercare un libro attraverso il suo ISBN.
6. Cercare tutti i libri disponibili di un determinato autore.
7. Effettuare il prestito di un libro utilizzando entrambe le versioni del metodo `prestaLibro`.
8. Restituire un libro precedentemente prestato.
9. Visualizzare il catalogo aggiornato.
Il `Main` deve inoltre verificare la gestione delle eccezioni, provocando intenzionalmente le seguenti situazioni:
- Inserimento di un libro duplicato.
- Ricerca di un ISBN inesistente.
- Prestito di un libro già prestato.
- Restituzione di un libro già disponibile.
Ogni eccezione deve essere intercettata mediante `try-catch` e gestita mostrando un messaggio appropriato, permettendo al programma di proseguire con le operazioni successive.
## 5. Requisiti di implementazione
Il progetto deve rispettare i seguenti requisiti:
- Ogni classe deve essere definita in un file `.java` separato.
- Tutti gli attributi delle classi devono essere dichiarati `private`.
- L'accesso e la modifica dello stato degli oggetti devono avvenire attraverso metodi pubblici opportunamente definiti.
- La classe `Biblioteca` deve utilizzare un'`ArrayList<Libro>` per memorizzare i libri.
- Devono essere presenti almeno due esempi di overloading.
- Le eccezioni personalizzate devono essere utilizzate nei casi previsti.
- Il codice deve essere organizzato in modo da separare la logica applicativa dalle operazioni di test presenti nel `Main`.
## 6. Attività aggiuntiva facoltativa
Implementare un metodo:
```java
public boolean rimuoviLibro(String isbn)
```
che consenta di eliminare un libro dal catalogo.
Il metodo deve rispettare le seguenti regole:
- Un libro attualmente in prestito non può essere eliminato.
- Se il libro viene eliminato correttamente, il metodo restituisce `true`.
- Se il libro richiesto non esiste, deve essere sollevata `LibroNonTrovatoException`.
- Se il libro è in prestito, deve essere sollevata un'apposita eccezione personalizzata.
Risultato atteso: un'applicazione Java in grado di gestire correttamente un catalogo di libri, applicando incapsulamento, overloading, collezioni dinamiche ed eccezioni personalizzate.