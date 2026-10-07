# Prenotazioni di un laboratorio informatico

Realizzare un programma C che gestisca le prenotazioni giornaliere dei laboratori informatici di una scuola.

Ogni laboratorio è descritto da:

- `codice`: stringa univoca di massimo 10 caratteri validi;
- `posti`: numero di postazioni disponibili;
- `sistemaOperativo`: stringa di massimo 20 caratteri validi;
- `attivo`: valore intero che vale `1` se il laboratorio è utilizzabile, `0` altrimenti.

Ogni prenotazione è descritta da:

- `id`: codice intero univoco;
- `codiceLaboratorio`: codice del laboratorio prenotato;
- `docente`: cognome del docente, massimo 30 caratteri validi;
- `giorno`: numero intero da 1 a 5, dove 1 indica lunedì e 5 venerdì;
- `oraInizio`: ora intera compresa tra 8 e 17;
- `oraFine`: ora intera compresa tra 9 e 18;
- `numeroStudenti`: numero degli studenti che useranno il laboratorio.

Si possono gestire al massimo 20 laboratori e 150 prenotazioni. Usare le strutture `Laboratorio` e `Prenotazione` e due array statici separati.

## Funzioni richieste

1. Cercare un laboratorio tramite il codice usando `strcmp`. La funzione restituisce la posizione oppure `-1`.

2. Cercare una prenotazione tramite l'`id`.

3. Verificare se una fascia oraria è valida. L'ora finale deve essere strettamente successiva a quella iniziale.

4. Verificare se due prenotazioni si sovrappongono. Due intervalli si sovrappongono se appartengono allo stesso giorno e condividono almeno una parte della fascia oraria; se uno termina esattamente quando l'altro inizia non c'è sovrapposizione.

5. Aggiungere un laboratorio, controllando capienza, unicità del codice, lunghezza delle stringhe e validità dei posti.

6. Aggiungere una prenotazione. La funzione deve controllare che:
   - l'`id` sia univoco;
   - il laboratorio esista e sia attivo;
   - giorno e fascia oraria siano validi;
   - il numero di studenti sia positivo e non superi i posti disponibili;
   - non esista già una prenotazione sovrapposta per lo stesso laboratorio;
   - l'array non sia pieno.

   Restituire un codice diverso per ogni tipo di errore e riutilizzare le funzioni di ricerca e sovrapposizione.

7. Spostare una prenotazione in un altro laboratorio o in un'altra fascia oraria. I nuovi dati devono superare gli stessi controlli dell'inserimento, ignorando la prenotazione che si sta modificando.

8. Annullare una prenotazione individuata tramite `id`, compattando l'array.

9. Calcolare per un laboratorio il numero totale di ore prenotate in una settimana.

10. Trovare il laboratorio attivo con la percentuale di occupazione più alta. Considerare disponibili 50 ore settimanali per ogni laboratorio. La percentuale non deve essere memorizzata nella struttura.

11. Contare le prenotazioni di ciascun docente e trovare il docente con il maggior numero di ore prenotate. Il nome del docente deve essere restituito tramite un parametro opportuno.

12. Disattivare un laboratorio. L'operazione è consentita soltanto se non possiede prenotazioni future, considerando come riferimento un giorno e un'ora forniti.

13. Stampare il calendario di un laboratorio ordinato logicamente per giorno e ora, senza modificare l'ordine fisico dell'array. È possibile stampare cercando ripetutamente la prenotazione successiva.

## Main

Nel `main`, mostrare un menu che permetta di:

- aggiungere e disattivare un laboratorio;
- inserire, spostare e annullare una prenotazione;
- cercare una prenotazione;
- visualizzare il calendario di un laboratorio;
- calcolare le ore prenotate;
- mostrare il laboratorio più occupato e il docente con più ore;
- stampare tutti i dati;
- uscire dal programma.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non ordinare fisicamente l'array delle prenotazioni.
- Non duplicare nella struttura informazioni ricavabili dagli altri campi.
- Le funzioni di elaborazione non devono effettuare stampe.
- Tutte le operazioni principali devono essere testate almeno una volta.

