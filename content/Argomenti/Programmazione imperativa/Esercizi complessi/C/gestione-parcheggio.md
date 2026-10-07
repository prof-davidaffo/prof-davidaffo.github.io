# Gestione di un parcheggio

Realizzare un programma C che gestisca i veicoli presenti in un parcheggio.

Ogni sosta è descritta da:

- `targa`: stringa di massimo 10 caratteri validi;
- `tipo`: carattere che vale `'A'` per automobile oppure `'M'` per motocicletta;
- `oraIngresso`: ora di ingresso, compresa tra 0 e 23;
- `minutoIngresso`: minuto di ingresso, compreso tra 0 e 59.

Il parcheggio può contenere al massimo 100 veicoli. I nomi delle informazioni devono essere esattamente quelli indicati e nello stesso ordine.

Usare una struttura, un array statico e funzioni adeguate con passaggio di parametri. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

## Requisiti

Sviluppare almeno le seguenti funzioni.

1. Verificare se un orario è valido. La funzione restituisce `1` se ora e minuto sono validi, `0` altrimenti.

2. Cercare un veicolo tramite la targa, usando `strcmp`. La funzione restituisce la posizione del veicolo nell'array oppure `-1` se non è presente.

3. Registrare l'ingresso di un veicolo:
   - la targa non deve superare la lunghezza massima;
   - la targa non deve essere già presente;
   - il tipo e l'orario devono essere validi;
   - il parcheggio non deve essere pieno.

   La funzione restituisce:

   - `1` se l'inserimento riesce;
   - `0` se il parcheggio è pieno;
   - `-1` se la targa è già presente;
   - `-2` se la targa è troppo lunga;
   - `-3` se il tipo o l'orario non sono validi.

4. Calcolare la durata di una sosta in minuti, conoscendo l'orario di ingresso e quello di uscita. Si assume che ingresso e uscita avvengano nello stesso giorno. La funzione restituisce `-1` se l'orario di uscita non è valido o precede quello di ingresso.

5. Registrare l'uscita di un veicolo individuato dalla targa:
   - calcolare la durata della sosta;
   - calcolare il costo sapendo che ogni ora iniziata costa 2 euro per le automobili e 1 euro per le motociclette;
   - rimuovere il veicolo compattando gli elementi successivi dell'array.

   La funzione restituisce il costo tramite un parametro passato per indirizzo e:

   - `1` se l'uscita viene registrata;
   - `0` se la targa non è presente;
   - `-1` se l'orario di uscita non è valido.

6. Contare separatamente automobili e motociclette presenti. I due risultati devono essere restituiti tramite parametri passati per indirizzo.

7. Cercare il veicolo presente da più tempo rispetto a un orario corrente fornito. La funzione restituisce la posizione del veicolo oppure `-1` se il parcheggio è vuoto o l'orario non è valido. In caso di parità, restituire la prima posizione.

8. Stampare ordinatamente tutti i veicoli presenti. Questa funzione può effettuare stampe con `printf`.

## Main

Nel `main`:

1. inizializzare il numero di veicoli presenti;
2. mostrare un menu che permetta di:
   - registrare un ingresso;
   - registrare un'uscita e visualizzarne il costo;
   - cercare un veicolo;
   - contare automobili e motociclette;
   - individuare il veicolo presente da più tempo;
   - stampare tutti i veicoli;
   - uscire dal programma;
3. testare tutte le funzioni almeno una volta.

Per sperimentare più rapidamente è possibile inizializzare l'array con un pre-riempimento in fase di dichiarazione.

## Vincoli

- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non usare allocazione dinamica.
- Usare le funzioni di `string.h` per confrontare, copiare e misurare le stringhe.
- Non memorizzare separatamente il numero di automobili e motociclette: i valori devono essere calcolati quando richiesti.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
