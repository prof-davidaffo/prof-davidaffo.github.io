# Analisi delle vendite settimanali

Realizzare un programma C che analizzi le quantità vendute di un insieme di prodotti durante una settimana.

Le vendite sono memorizzate in una matrice di interi:

- ogni riga rappresenta un prodotto;
- le sette colonne rappresentano i giorni da lunedì a domenica;
- ogni valore indica il numero di unità vendute e deve essere maggiore o uguale a zero.

Si possono gestire al massimo 20 prodotti. I nomi dei prodotti sono memorizzati in un array di stringhe e hanno una lunghezza massima di 30 caratteri.

Usare funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Caricare i nomi dei prodotti.
   I nomi devono essere non vuoti e univoci. La funzione restituisce il numero di prodotti effettivamente inseriti.

2. Caricare la matrice delle vendite.
   La funzione deve rifiutare valori negativi.

3. Cercare un prodotto tramite il nome usando `strcmp`.
   La funzione restituisce la posizione del prodotto oppure `-1` se non è presente.

4. Calcolare il totale settimanale di ogni prodotto.
   La funzione riceve la matrice e riempie un array con i totali delle righe.

5. Calcolare il totale delle vendite di ogni giorno.
   La funzione riempie un array di sette elementi con i totali delle colonne.

6. Trovare il prodotto più venduto.
   La funzione restituisce la posizione del prodotto con il totale settimanale maggiore. In caso di parità deve restituire il primo; se non ci sono prodotti deve restituire `-1`.

7. Trovare il giorno con più vendite complessive.
   La funzione restituisce l'indice della colonna corrispondente. In caso di parità deve restituire il primo giorno.

8. Calcolare la media giornaliera di vendita di un prodotto.
   La funzione restituisce `-1` se la posizione ricevuta non è valida.

9. Contare i giorni senza vendite per un prodotto.
   La funzione riceve la posizione del prodotto e restituisce il numero di valori uguali a zero oppure `-1` per una posizione non valida.

10. Stampare una tabella con nomi, vendite giornaliere e totale settimanale.
    Questa funzione può effettuare stampe con `printf`.

## Main

Nel `main`:

1. caricare i nomi e la matrice oppure usare un pre-riempimento per velocizzare i test;
2. calcolare i totali per prodotto e per giorno;
3. stampare la tabella completa;
4. mostrare il prodotto più venduto e il giorno con più vendite;
5. leggere il nome di un prodotto;
6. mostrarne media giornaliera, totale settimanale e numero di giorni senza vendite;
7. gestire il caso in cui il prodotto cercato non esista.

## Vincoli

- Non usare `struct`.
- Non usare allocazione dinamica.
- Usare costanti simboliche per tutte le dimensioni massime.
- Non ricalcolare i totali nel `main`: usare i risultati restituiti dalle funzioni.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
