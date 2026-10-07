# Prenotazioni di una sala cinema

Realizzare un programma C che gestisca le prenotazioni dei posti in una sala cinema.

La sala ha al massimo 12 righe e 15 colonne. Ogni posto puo essere:

- libero;
- prenotato.

Il programma deve usare:

- una matrice di `char` per rappresentare lo stato dei posti;
- un array di stringhe per memorizzare i nomi degli spettatori;
- un array di interi per memorizzare, per ogni spettatore, riga e colonna del posto assegnato;
- funzioni dedicate per separare le diverse operazioni;
- le funzioni di `string.h`, ad esempio `strcmp`, `strcpy`, `strlen`.

Usare costanti simboliche per le dimensioni massime, ad esempio:

```c
#define MAX_RIGHE 12
#define MAX_COLONNE 15
#define MAX_SPETTATORI 100
#define MAX_NOME 30
```

## Rappresentazione dei dati

La matrice dei posti deve contenere:

- `'L'` per un posto libero;
- `'P'` per un posto prenotato.

Per ogni spettatore memorizzato negli array paralleli devono essere conservati:

- nome dello spettatore;
- riga del posto;
- colonna del posto.

Esempio:

```c
char nomi[MAX_SPETTATORI][MAX_NOME + 1];
int righe[MAX_SPETTATORI];
int colonne[MAX_SPETTATORI];
```

## Requisiti

Sviluppare almeno le seguenti funzioni.

1. Inizializzare la sala, impostando tutti i posti della matrice a `'L'`.

2. Stampare la sala in forma ordinata, mostrando righe e colonne. La funzione puo effettuare stampe con `printf`.

3. Verificare se una posizione della sala e valida. La funzione riceve numero di righe, numero di colonne, riga richiesta e colonna richiesta, e restituisce `1` se la posizione e valida, `0` altrimenti.

4. Cercare uno spettatore per nome usando `strcmp`. La funzione restituisce la posizione dello spettatore nell'array oppure `-1` se non e presente.

5. Prenotare un posto per uno spettatore:
   - il nome non deve superare la lunghezza massima;
   - lo spettatore non deve essere gia presente;
   - la posizione richiesta deve essere valida;
   - il posto deve essere libero;
   - se la prenotazione riesce, aggiornare la matrice e gli array paralleli.

   La funzione deve restituire:

   - `1` se la prenotazione riesce;
   - `0` se il posto non e libero;
   - `-1` se la posizione non e valida;
   - `-2` se lo spettatore e gia presente;
   - `-3` se il nome e troppo lungo;
   - `-4` se l'array degli spettatori e pieno.

6. Annullare una prenotazione:
   - cercare lo spettatore per nome;
   - riportare il posto a libero;
   - rimuovere lo spettatore dagli array paralleli compattando gli elementi successivi.

   La funzione restituisce `1` se l'annullamento riesce, `0` se lo spettatore non esiste.

7. Calcolare quanti posti sono liberi e prenotati nella sala. La funzione deve ricevere la matrice e restituire i due valori tramite parametri passati per indirizzo.

8. Trovare la riga con piu posti liberi. Se piu righe hanno lo stesso numero massimo di posti liberi, restituire la prima.

9. Stampare l'elenco degli spettatori memorizzati, con nome, riga e colonna. La funzione puo effettuare stampe con `printf`.

## Main

Nel `main`:

1. chiedere all'utente il numero effettivo di righe e colonne della sala, rispettando i massimi indicati;
2. inizializzare la sala;
3. mostrare un menu che permetta di:
   - stampare la sala;
   - prenotare un posto;
   - annullare una prenotazione;
   - cercare uno spettatore per nome;
   - stampare il riepilogo dei posti liberi e prenotati;
   - stampare la riga con piu posti liberi;
   - stampare l'elenco degli spettatori;
   - uscire dal programma;
4. testare tutte le funzioni almeno una volta.

## Vincoli

- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non usare `struct`.
- Non usare allocazione dinamica.
- Non usare funzioni di libreria per cercare direttamente negli array: la ricerca deve essere implementata con cicli.
- Usare `string.h` per confrontare, copiare e misurare le stringhe.
- Le funzioni, salvo quelle di stampa, non devono effettuare `printf`.
