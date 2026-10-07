# Prestiti di attrezzature sportive

Realizzare un programma C per gestire fino a 80 prestiti di attrezzature sportive effettuati da una palestra scolastica.

Ogni prestito è caratterizzato da:

- `codicePrestito`: codice intero univoco del prestito;
- `studente`: cognome dello studente, massimo 30 caratteri validi;
- `attrezzatura`: nome dell'attrezzatura presa in prestito, massimo 30 caratteri validi;
- `dataPrestito`: data in cui l'attrezzatura è stata prestata allo studente;
- `dataRestituzionePrevista`: data entro cui l'attrezzatura dovrebbe essere restituita;
- `restituito`: valore intero che vale `1` se l'attrezzatura è già stata restituita, `0` altrimenti.

È consigliato usare una struttura per rappresentare una data e una struttura per rappresentare un prestito.

Il programma deve permettere di caricare un insieme di prestiti e di mostrare nel `main`:

- l'elenco completo dei prestiti caricati;
- l'elenco e il numero dei prestiti non ancora restituiti;
- il numero di prestiti scaduti rispetto a una data corrente letta da tastiera;
- tutti i prestiti effettuati da uno studente letto da tastiera;
- il prestito non ancora restituito con la data di restituzione prevista più vicina, considerando solo le scadenze uguali o successive alla data corrente;
- l'elenco aggiornato dopo aver registrato la restituzione di un'attrezzatura.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni di controllo, confronto e calcolo non devono effettuare stampe con `printf`, ma devono restituire valori utili al `main`. Le funzioni il cui compito è mostrare uno o più prestiti possono invece usare `printf` e, quando richiesto, restituire anche il numero di elementi stampati.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Leggere una data da tastiera.
   La funzione deve restituire una variabile di tipo `Data`.

2. Stampare una data.
   La funzione riceve una `Data` e la stampa nel formato `giorno/mese/anno`.

3. Confrontare due date.
   La funzione riceve due date e restituisce:
   - `-1` se la prima data è precedente alla seconda;
   - `0` se le due date sono uguali;
   - `1` se la prima data è successiva alla seconda.

4. Verificare se una data è scaduta.
   La funzione riceve una data di restituzione prevista e una data corrente.
   Deve restituire `1` se la data di restituzione prevista è precedente alla data corrente, `0` altrimenti.
   Questa funzione deve riutilizzare la funzione di confronto tra date.

5. Stampare un prestito completo.
   La funzione deve mostrare codice del prestito, studente, attrezzatura, data del prestito, data di restituzione prevista e stato della restituzione.
   Questa funzione deve riutilizzare la funzione di stampa di una data.

6. Caricare un singolo prestito.
   La funzione deve leggere da tastiera tutti i dati di un prestito e restituire una variabile di tipo `Prestito`.

7. Caricare un array di prestiti.
   La funzione riceve l'array e il numero massimo di prestiti caricabili.
   Deve chiedere quanti prestiti inserire, controllare che il numero non superi il massimo e restituire il numero effettivo di prestiti caricati.

8. Stampare tutti i prestiti presenti nell'array.
   La funzione deve ricevere l'array e il numero di prestiti caricati.
   Deve riutilizzare la funzione di stampa di un singolo prestito.

9. Cercare un prestito tramite `codicePrestito`.
   La funzione restituisce la posizione del prestito nell'array oppure `-1` se il codice non è presente.

10. Stampare tutti i prestiti di uno studente.
    La funzione riceve il cognome dello studente da cercare e deve usare `strcmp`.
    Deve stampare i prestiti trovati riutilizzando la funzione di stampa di un prestito.
    Deve restituire il numero di prestiti trovati.

11. Stampare tutti i prestiti non ancora restituiti.
    La funzione deve riutilizzare la funzione di stampa di un prestito.
    La funzione deve restituire il numero di prestiti stampati.

12. Contare quanti prestiti sono scaduti rispetto a una data corrente.
    Un prestito è scaduto se:
    - non è stato restituito;
    - la data di restituzione prevista è precedente alla data corrente.
    La funzione deve riutilizzare la funzione che verifica se una data è scaduta.

13. Trovare la posizione del prestito non restituito con la data di restituzione prevista più vicina.
    La funzione riceve l'array, il numero di prestiti caricati e la data corrente.
    Deve considerare solo i prestiti non restituiti e con data di restituzione prevista uguale o successiva alla data corrente.
    Deve restituire la posizione del prestito trovato oppure `-1` se non esiste nessun prestito valido.

14. Registrare la restituzione di un'attrezzatura.
    La funzione riceve il codice del prestito.
    Se il codice esiste, deve impostare `restituito` a `1` e restituire `1`.
    Se il codice non esiste, deve restituire `0`.

## Main

Nel `main`:

1. dichiarare l'array di prestiti;
2. caricare i prestiti, oppure inizializzare l'array con un pre-riempimento per velocizzare i test;
3. stampare tutti i prestiti caricati;
4. leggere da tastiera la data corrente;
5. stampare l'elenco dei prestiti non ancora restituiti e conservare il numero restituito dalla funzione;
6. stampare tale numero senza eseguire un secondo conteggio;
7. stampare il numero di prestiti scaduti rispetto alla data corrente;
8. leggere il cognome di uno studente e stampare tutti i suoi prestiti;
9. cercare e stampare il prestito non restituito con la data di restituzione prevista più vicina;
10. leggere un codice di prestito e registrare la restituzione dell'attrezzatura corrispondente;
11. ristampare l'elenco dei prestiti per verificare la modifica.

Per sperimentare più rapidamente il programma, è possibile inizializzare l'array di strutture con alcuni prestiti già presenti in fase di dichiarazione.

Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
