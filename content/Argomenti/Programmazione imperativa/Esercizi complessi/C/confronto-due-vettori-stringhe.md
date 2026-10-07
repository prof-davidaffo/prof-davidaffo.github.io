# Confronto tra due vettori di stringhe

Realizzare un programma C che memorizzi due insiemi di stringhe, `arStrA` e `arStrB`.

Le stringhe hanno lunghezza massima di 30 caratteri alfanumerici validi e vengono lette da tastiera. I vettori hanno dimensioni massime differenti, rispettivamente `MAXA` e `MAXB`; il numero di stringhe effettivamente memorizzate è `narStrA` e `narStrB`.

Il programma deve cercare e contare quante stringhe di `arStrB` sono presenti in `arStrA`, quindi concatenare le due stringhe identiche, quando possibile.

Esempio: se la terza stringa di `arStrA` è `ciao` e la quinta di `arStrB` è anch'essa `ciao`, la terza stringa di `arStrA` deve diventare `ciaociao`.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

Sviluppare almeno le seguenti funzioni:

1. Riempire un vettore di stringhe; la funzione deve essere richiamata due volte nel `main` con parametri diversi.
2. Calcolare quante stringhe di `arStrB` sono presenti in `arStrA` e, quando trovate identiche, concatenarle alla relativa stringa di `arStrA`.
3. Trovare la prima posizione di una stringa fornita sia in `arStrA` sia in `arStrB`. La funzione restituisce `0` se la stringa non è presente in entrambi gli array e `1` se è presente in entrambi.

Per sperimentare più rapidamente le funzioni 2 e 3, è possibile inizializzare i due array con un pre-riempimento in fase di dichiarazione.

Il `main` deve testare le funzioni. Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
