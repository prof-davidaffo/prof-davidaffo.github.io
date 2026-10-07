# Fusione di due sequenze ordinate

Realizzare un programma C che elabori due sequenze di numeri interi ordinate in senso crescente.

Le due sequenze possono avere lunghezze diverse e contenere valori ripetuti. Ciascuna sequenza può contenere al massimo 50 elementi.

Il programma deve costruire:

- un array `fusione`, contenente tutti gli elementi delle due sequenze in ordine crescente, comprese le ripetizioni;
- un array `unici`, contenente gli stessi valori in ordine crescente, ma senza duplicati.

Ad esempio, date le sequenze:

```text
A: 1 2 2 7 10
B: 2 3 7 7 12
```

si devono ottenere:

```text
Fusione: 1 2 2 2 3 7 7 7 10 12
Unici:   1 2 3 7 10 12
```

La fusione deve essere realizzata confrontando gli elementi delle due sequenze. Non è consentito concatenare gli array e ordinarli successivamente.

Usare funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Caricare una sequenza ordinata.
   La funzione legge la lunghezza e gli elementi, verifica che la lunghezza sia valida e che ogni valore inserito sia maggiore o uguale al precedente. Deve essere richiamata due volte nel `main`.

2. Verificare se una sequenza è ordinata in senso crescente.
   La funzione restituisce `1` se la sequenza è ordinata, `0` altrimenti.

3. Fondere le due sequenze.
   La funzione riempie l'array `fusione` senza modificare gli array originali e restituisce il numero di elementi inseriti.

4. Eliminare i duplicati da una sequenza ordinata.
   La funzione riceve `fusione`, riempie l'array `unici` e restituisce il numero di valori distinti.

5. Cercare un valore in un array ordinato usando la ricerca binaria.
   La funzione restituisce la posizione di una sua occorrenza oppure `-1` se il valore non è presente.

6. Contare quante volte un valore compare in una sequenza.
   La funzione restituisce il numero di occorrenze del valore richiesto.

7. Stampare una sequenza.
   Questa funzione può effettuare stampe con `printf`.

## Main

Nel `main`:

1. dichiarare tutti gli array necessari;
2. caricare le due sequenze oppure usare un pre-riempimento per velocizzare i test;
3. verificare che entrambe siano ordinate;
4. costruire e stampare `fusione`;
5. costruire e stampare `unici`;
6. leggere un valore, cercarlo in `fusione` e mostrarne il numero di occorrenze;
7. verificare che gli array originali non siano stati modificati.

## Vincoli

- Non usare allocazione dinamica.
- Non usare funzioni di ordinamento della libreria standard.
- La funzione di fusione deve scorrere ciascuna sequenza una sola volta.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
