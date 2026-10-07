# Gestione della coda di un pronto soccorso

Realizzare un programma C che gestisca la coda dei pazienti in attesa in un piccolo pronto soccorso.

Ogni paziente è descritto da:

- `codice`: codice intero univoco;
- `cognome`: stringa di massimo 30 caratteri validi;
- `priorita`: carattere che vale `'R'` per rossa, `'G'` per gialla oppure `'V'` per verde;
- `oraArrivo`: ora di arrivo, compresa tra 0 e 23;
- `minutoArrivo`: minuto di arrivo, compreso tra 0 e 59.

La coda può contenere al massimo 60 pazienti. I nomi delle informazioni devono essere esattamente quelli indicati e nello stesso ordine.

La priorità rossa è maggiore della gialla, che a sua volta è maggiore della verde. A parità di priorità deve essere chiamato per primo il paziente arrivato prima.

Usare una struttura, un array statico e funzioni adeguate con passaggio di parametri. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Verificare se un orario è valido.
   La funzione restituisce `1` se ora e minuto sono validi, `0` altrimenti.

2. Verificare se un carattere rappresenta una priorità valida.

3. Cercare un paziente tramite il codice.
   La funzione restituisce la posizione nell'array oppure `-1` se il paziente non è presente.

4. Aggiungere un paziente alla coda.
   Il codice deve essere univoco, il cognome non deve superare la lunghezza massima, la priorità e l'orario devono essere validi e la coda non deve essere piena.
   La funzione restituisce:
   - `1` se l'inserimento riesce;
   - `0` se la coda è piena;
   - `-1` se il codice è già presente;
   - `-2` se il cognome è troppo lungo;
   - `-3` se priorità o orario non sono validi.

5. Confrontare l'ordine di chiamata di due pazienti.
   La funzione restituisce:
   - `-1` se il primo paziente deve essere chiamato prima del secondo;
   - `0` se i due pazienti hanno stessa priorità e stesso orario di arrivo;
   - `1` se il secondo deve essere chiamato prima del primo.

6. Trovare il prossimo paziente da chiamare.
   La funzione restituisce la posizione del paziente oppure `-1` se la coda è vuota. Deve riutilizzare la funzione di confronto.

7. Chiamare il prossimo paziente.
   La funzione deve copiare il paziente scelto in una variabile ricevuta per indirizzo, rimuoverlo dall'array e compattare gli elementi successivi. Restituisce `1` se l'operazione riesce, `0` se la coda è vuota.

8. Modificare la priorità di un paziente individuato tramite codice.
   La funzione restituisce `1` se la modifica riesce, `0` se il codice non è presente e `-1` se la nuova priorità non è valida.

9. Calcolare il tempo di attesa in minuti rispetto a un orario corrente.
   La funzione restituisce `-1` se l'orario corrente non è valido o precede quello di arrivo.

10. Contare separatamente i pazienti con priorità rossa, gialla e verde.
    I tre risultati devono essere restituiti tramite parametri passati per indirizzo.

11. Stampare ordinatamente tutti i pazienti in attesa.
    Questa funzione può effettuare stampe con `printf`.

## Main

Nel `main`, mostrare un menu che permetta di:

- aggiungere un paziente;
- cercare un paziente tramite codice;
- modificare una priorità;
- visualizzare il prossimo paziente da chiamare;
- chiamare e rimuovere il prossimo paziente;
- calcolare l'attesa di un paziente rispetto all'orario corrente;
- mostrare il numero di pazienti per ciascuna priorità;
- stampare tutta la coda;
- uscire dal programma.

Tutte le funzioni devono essere testate almeno una volta.

## Vincoli

- Non ordinare fisicamente l'array.
- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Usare le funzioni di `string.h` per copiare e misurare le stringhe.
- Non memorizzare separatamente il numero di pazienti per priorità: calcolarlo quando richiesto.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
