# Gestione di una biblioteca multimediale

Realizzare un programma C che gestisca il catalogo e i prestiti di una piccola biblioteca multimediale.

Ogni risorsa è descritta da:

- `codice`: codice intero univoco;
- `titolo`: stringa di massimo 40 caratteri validi;
- `tipo`: carattere che vale `'L'` per libro, `'F'` per film oppure `'A'` per audiolibro;
- `anno`: anno di pubblicazione;
- `disponibile`: valore intero che vale `1` se la risorsa può essere prestata, `0` altrimenti.

Ogni prestito è descritto da:

- `codicePrestito`: codice intero univoco;
- `codiceRisorsa`: codice della risorsa prestata;
- `utente`: cognome dell'utente, massimo 30 caratteri validi;
- `dataInizio`: data di inizio del prestito;
- `dataScadenza`: data entro cui la risorsa deve essere restituita;
- `restituito`: valore intero che vale `1` se il prestito è concluso, `0` altrimenti.

Il catalogo può contenere al massimo 200 risorse e l'archivio al massimo 500 prestiti. È consigliato definire le strutture `Data`, `Risorsa` e `Prestito`.

Usare array statici, funzioni adeguate e passaggio di parametri. Le funzioni di ricerca, controllo e calcolo non devono effettuare stampe con `printf`.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Verificare se una data è valida, considerando anche gli anni bisestili.

2. Confrontare due date, restituendo `-1`, `0` oppure `1` se la prima è rispettivamente precedente, uguale o successiva alla seconda.

3. Cercare una risorsa tramite il suo codice. La funzione restituisce la posizione oppure `-1`.

4. Aggiungere una risorsa al catalogo. Controllare capienza, unicità del codice, lunghezza del titolo, tipo e anno. La funzione deve restituire codici diversi per i diversi errori.

5. Cercare un prestito tramite `codicePrestito`.

6. Registrare un nuovo prestito. L'operazione è possibile soltanto se:
   - il codice del prestito è univoco;
   - la risorsa esiste ed è disponibile;
   - il cognome e le date sono validi;
   - la data di scadenza non precede la data di inizio;
   - l'archivio non è pieno.

   In caso di successo, la funzione deve anche impostare a `0` il campo `disponibile` della risorsa.

7. Registrare la restituzione di una risorsa. La funzione individua un prestito non ancora concluso, imposta `restituito` a `1` e rende nuovamente disponibile la risorsa corrispondente.

8. Contare i prestiti attivi e scaduti di un utente rispetto a una data corrente. I due risultati devono essere restituiti tramite parametri passati per indirizzo.

9. Trovare la risorsa disponibile più vecchia di un tipo fornito. Restituire la posizione nel catalogo oppure `-1`. In caso di parità scegliere la prima.

10. Contare quante volte ogni risorsa è stata prestata, considerando anche i prestiti conclusi, e trovare quella più richiesta. Non memorizzare il conteggio nella struttura `Risorsa`.

11. Eliminare una risorsa dal catalogo, compattando l'array. L'eliminazione è consentita soltanto se la risorsa è disponibile e non compare in alcun prestito attivo.

12. Stampare una risorsa, un prestito completo, il catalogo e l'elenco dei prestiti. Le funzioni di stampa devono riutilizzarsi tra loro.

## Main

Nel `main`, mostrare un menu che permetta di:

- aggiungere una risorsa;
- registrare un prestito o una restituzione;
- cercare una risorsa;
- mostrare i prestiti attivi e quelli scaduti di un utente;
- mostrare la risorsa disponibile più vecchia di un certo tipo;
- mostrare la risorsa più richiesta;
- eliminare una risorsa;
- stampare catalogo e prestiti;
- uscire dal programma.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Usare le funzioni di `string.h` per le stringhe.
- Non memorizzare dati riepilogativi che possono essere calcolati quando richiesti.
- Una funzione che modifica sia il catalogo sia i prestiti deve ricevere entrambi gli array come parametri.
- Per velocizzare i test è possibile pre-riempire gli array in fase di dichiarazione.

