# Analisi di un campo minato

Realizzare un programma C che rappresenti un campo minato mediante una matrice di caratteri.

Il campo ha dimensioni operative `m × n`, con un massimo di 15 righe e 20 colonne. Ogni cella contiene:

- `'*'` se è presente una mina;
- `'.'` se la cella è libera.

Il programma deve costruire una seconda matrice di interi. Per ogni cella libera, questa matrice deve contenere il numero di mine presenti nelle celle adiacenti; nelle posizioni occupate da una mina deve contenere `-1`.

Sono considerate adiacenti le celle orizzontali, verticali e diagonali. Le celle sul bordo e negli angoli hanno quindi meno celle adiacenti.

Esempio:

```text
Campo:          Conteggi:
* . .           -1 2 1
. * .            2 -1 1
. . .            1 1 1
```

Usare funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Verificare se una coppia di coordinate appartiene al campo.
   La funzione restituisce `1` se riga e colonna sono valide, `0` altrimenti.

2. Inizializzare il campo impostando tutte le celle a `'.'`.

3. Inserire una mina.
   La funzione riceve le coordinate e restituisce:
   - `1` se la mina viene inserita;
   - `0` se nella cella è già presente una mina;
   - `-1` se le coordinate non sono valide.

4. Rimuovere una mina.
   La funzione usa gli stessi codici di ritorno della funzione di inserimento: `1` in caso di rimozione, `0` se la cella è già libera, `-1` per coordinate non valide.

5. Contare le mine adiacenti a una cella.
   La funzione deve controllare correttamente bordi e angoli e non deve accedere a posizioni esterne alla matrice.

6. Costruire la matrice dei conteggi.
   La funzione deve riutilizzare la funzione che conta le mine adiacenti.

7. Trovare la cella libera con il maggior numero di mine adiacenti.
   La funzione restituisce riga e colonna tramite parametri passati per indirizzo e restituisce `1` se esiste almeno una cella libera, `0` altrimenti. In caso di parità deve scegliere la prima cella in ordine di riga e colonna.

8. Contare separatamente mine e celle libere.
   I due risultati devono essere restituiti tramite parametri passati per indirizzo.

9. Stampare il campo e la matrice dei conteggi affiancati.
   Questa funzione può effettuare stampe con `printf`; al posto di `-1` deve visualizzare il carattere `'*'`.

## Main

Nel `main`:

1. leggere e controllare le dimensioni operative;
2. inizializzare il campo;
3. permettere l'inserimento di un numero di mine scelto dall'utente;
4. costruire e stampare la matrice dei conteggi;
5. mostrare il numero di mine e di celle libere;
6. mostrare le coordinate della cella libera con più mine adiacenti;
7. provare a inserire e rimuovere una mina, quindi aggiornare i conteggi.

## Vincoli

- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non usare allocazione dinamica.
- Non usare array aggiuntivi oltre alle due matrici richieste.
- Le funzioni devono lavorare con le dimensioni operative ricevute come parametri.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
