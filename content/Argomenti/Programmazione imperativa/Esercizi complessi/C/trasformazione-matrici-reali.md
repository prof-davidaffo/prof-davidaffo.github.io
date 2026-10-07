# Trasformazione di matrici di numeri reali

Realizzare un programma C che, date due matrici di `float`, `matr1` e `matr2`, contenenti valori compresi tra `-100,1` e `200,3` inclusi, ne trasformi il contenuto.

Le matrici hanno dimensioni operative `m × n`, con un massimo di 15 righe e 8 colonne.

La trasformazione deve:

- dimezzare tutti i valori minori di zero;
- sottrarre 20 ai valori positivi, senza scendere sotto lo zero.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

Sviluppare almeno le seguenti funzioni:

1. Riempire casualmente una matrice.
2. Trasformare una matrice secondo la richiesta.
3. Stampare ordinatamente il contenuto di una matrice.

Usare `srand(1)` per inizializzare la sequenza pseudocasuale.

Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
