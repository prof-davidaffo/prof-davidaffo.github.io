# Monitoraggio dei pazienti di un reparto

Realizzare un programma C che gestisca i pazienti ricoverati in un piccolo reparto e le loro rilevazioni giornaliere.

Ogni orario è descritto da:

- `ora`: numero intero compreso tra 0 e 23;
- `minuto`: numero intero compreso tra 0 e 59.

Ogni rilevazione è descritta da:

- `orario`: struttura di tipo `Orario`;
- `temperatura`: valore reale espresso in gradi Celsius;
- `pressioneMassima`: valore intero;
- `pressioneMinima`: valore intero;
- `frequenzaCardiaca`: valore intero.

Ogni paziente è descritto da:

- `codice`: codice intero univoco;
- `cognome`: stringa di massimo 30 caratteri validi;
- `stanza`: numero intero positivo;
- `rilevazioni`: array contenente al massimo 12 rilevazioni;
- `numeroRilevazioni`: numero effettivo di rilevazioni presenti.

Il reparto può contenere al massimo 40 pazienti. Usare strutture annidate e array statici.

## Intervalli di validità

Una rilevazione è valida se:

- la temperatura è compresa tra 34.0 e 43.0;
- la pressione massima è compresa tra 70 e 250;
- la pressione minima è compresa tra 40 e 150 ed è inferiore alla massima;
- la frequenza cardiaca è compresa tra 30 e 220;
- l'orario è valido.

Una rilevazione è considerata critica se si verifica almeno una condizione:

- temperatura minore di 35.0 o maggiore di 39.0;
- pressione massima maggiore di 180;
- pressione minima maggiore di 110;
- frequenza cardiaca minore di 45 o maggiore di 130.

## Funzioni richieste

1. Verificare se un orario è valido e confrontare due orari.

2. Verificare se una rilevazione è valida.

3. Verificare se una rilevazione è critica.

4. Cercare un paziente tramite codice.

5. Ricoverare un nuovo paziente, controllando capienza, codice univoco, lunghezza del cognome e numero della stanza.

6. Aggiungere una rilevazione a un paziente. Il paziente deve esistere, la rilevazione deve essere valida, l'array interno non deve essere pieno e non deve già esistere una rilevazione allo stesso orario.

7. Trovare la rilevazione più recente di un paziente, riutilizzando la funzione di confronto tra orari.

8. Calcolare temperatura media, pressione massima media, pressione minima media e frequenza cardiaca media di un paziente. I risultati devono essere restituiti tramite parametri passati per indirizzo.

9. Contare le rilevazioni critiche di un paziente e trovare quella più recente tra esse.

10. Trovare il paziente con il maggior numero di rilevazioni critiche. Considerare soltanto i pazienti con almeno una rilevazione; in caso di parità scegliere il primo.

11. Spostare un paziente in un'altra stanza.

12. Dimettere un paziente copiandone prima tutti i dati in una variabile ricevuta per indirizzo e poi compattando l'array del reparto.

13. Costruire, in un array separato, l'elenco dei codici dei pazienti che possiedono almeno una rilevazione critica. La funzione restituisce il numero di codici inseriti senza effettuare stampe.

14. Stampare un orario, una rilevazione, un paziente completo e l'intero reparto. Le funzioni di stampa devono riutilizzarsi tra loro.

## Main

Nel `main`, mostrare un menu che permetta di:

- ricoverare, cercare, spostare e dimettere un paziente;
- aggiungere una rilevazione;
- mostrare l'ultima rilevazione e le medie di un paziente;
- mostrare i pazienti con rilevazioni critiche;
- individuare il paziente con più rilevazioni critiche;
- stampare tutto il reparto;
- uscire dal programma.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non memorizzare medie o conteggi nella struttura `Paziente`.
- Non ordinare fisicamente le rilevazioni.
- Le funzioni di elaborazione non devono effettuare stampe.
- Tutte le funzioni devono essere testate almeno una volta.

