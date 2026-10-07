## Tombola

Realizzare un programma che simuli il gioco della tombola. Il file `cartella.txt` contiene i numeri e la struttura di una cartella.

Durante il gioco vengono estratti numeri da 1 a 90 senza ripetizioni. Se un numero estratto è presente nella cartella, viene segnato.

Le vincite, ciascuna valida una sola volta, sono:

- ambo: 2 numeri segnati sulla stessa riga;
- terno: 3 numeri segnati sulla stessa riga;
- quaterna: 4 numeri segnati sulla stessa riga;
- cinquina: 5 numeri segnati sulla stessa riga;
- tombola: tutti i numeri della cartella segnati.

Il gioco prosegue dopo ogni vincita per verificare la successiva.

Si suggerisce di usare:

- una matrice `int` `3x5` per la cartella, con `0` nelle caselle vuote;
- una matrice `bool` `3x5` per indicare i numeri segnati;
- un array `bool` di 90 elementi per i numeri estratti.

## Requisiti

1. `initCartella`: inizializza la cartella dai dati del file.
2. `stampaCartella`: stampa la cartella, indicando con un segno (ad esempio `X`) i numeri estratti presenti.
3. `trovaNumero`: verifica se il numero ricevuto è nella cartella e, se presente, imposta a `true` l'elemento corrispondente di `segnati`.
4. `estraiNumero`: estrae pseudo-casualmente un numero tramite `rand()`; verifica che non sia già stato estratto e aggiorna l'array `estratti`.

   ```cpp
   int x = 1 + rand() % MAXN; // MAXN = 90
   ```

5. `contaTrovatiRiga`: restituisce il numero di elementi segnati nella riga ricevuta.
6. `contaTrovatiCartella`: restituisce il numero totale di elementi segnati nella cartella.
7. `controllaPremi`: ricevuti cartella, matrice dei trovati e le variabili necessarie ai risultati, verifica ambo, terno, quaterna, cinquina e tombola.
8. Testare opportunamente le funzioni nel `main`, lasciando visibile il codice dei test.

## Limitazioni

- Implementare da zero le funzioni di ricerca e le altre funzioni necessarie.
- Non usare funzioni di libreria per la ricerca.
