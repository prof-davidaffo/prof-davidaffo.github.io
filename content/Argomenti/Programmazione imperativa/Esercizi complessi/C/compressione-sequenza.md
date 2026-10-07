# Compressione di una sequenza

Realizzare un programma C che comprima una sequenza contenente al massimo 50 numeri interi.

La sequenza non è necessariamente ordinata e il programma non deve ordinarla. Tutti i valori devono mantenere lo stesso ordine in cui compaiono nella sequenza originale.

La compressione deve raggruppare i valori consecutivi uguali usando due array:

- `valori`, che contiene una sola volta il valore di ogni gruppo;
- `ripetizioni`, che indica quante volte consecutive compare quel valore.

Ad esempio, la sequenza:

```text
4 4 4 2 2 7 4 4
```

deve essere compressa nel seguente modo:

```text
Valori:      4 2 7 4
Ripetizioni: 3 2 1 2
```

I due gruppi contenenti il valore `4` devono rimanere separati perché non sono consecutivi nella sequenza originale. Non si devono quindi raggruppare tutte le occorrenze dello stesso valore, ma soltanto quelle adiacenti.

Il programma deve inoltre ricostruire la sequenza iniziale a partire dai due array compressi.

Usare funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`, ma devono restituire i valori necessari al `main`.

## Funzioni richieste

Sviluppare le seguenti cinque funzioni.

1. Caricare la sequenza.
   La funzione riceve l'array e la sua dimensione massima, legge il numero di elementi controllandone la validità, carica i valori e restituisce il numero di elementi inseriti.

2. Stampare un array.
   La funzione riceve un array e il numero di elementi da mostrare.

3. Comprimere la sequenza.
   La funzione riceve la sequenza originale e riempie gli array `valori` e `ripetizioni`, senza ordinare o modificare la sequenza. Deve restituire il numero di gruppi consecutivi ottenuti.

4. Stampare la sequenza compressa.
   La funzione riceve gli array `valori` e `ripetizioni` e il numero di gruppi.

5. Decomprimere la sequenza.
   La funzione riceve i due array compressi e ricostruisce la sequenza in un altro array. Deve restituire il numero di elementi ricostruiti oppure `-1` se lo spazio disponibile non è sufficiente.

## Main

Nel `main`:

1. dichiarare gli array necessari;
2. caricare la sequenza oppure usare un pre-riempimento per velocizzare i test;
3. stampare la sequenza originale;
4. comprimere e stampare il risultato;
5. decomprimere la sequenza;
6. stampare la sequenza ricostruita per verificare che coincida con quella iniziale.

Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
