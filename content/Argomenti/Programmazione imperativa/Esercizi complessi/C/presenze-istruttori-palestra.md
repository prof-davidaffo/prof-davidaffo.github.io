# Presenze degli istruttori in palestra

Realizzare un programma C che elabori al massimo 50 presenze di istruttori in una palestra.

Ogni presenza è caratterizzata da:

- giorno, mese, anno, ora di inizio e ora di fine, tutti in formato numerico intero; si assume che l'ora di inizio sia sempre minore dell'ora di fine;
- cognome dell'istruttore presente;
- specialità di cui si occupa.

Il programma deve caricare i dati dei giorni di attività della palestra e stampare nel `main`:

- il totale delle ore caricate per un dato giorno e il loro rapporto rispetto al totale delle presenze di tutti gli istruttori caricati;
- le informazioni sulle presenze di uno specifico istruttore letto da tastiera, se presenti nei dati caricati.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni non devono effettuare stampe con `printf`; devono invece restituire i dati necessari.

Sviluppare almeno le seguenti funzioni:

1. Riempire il vettore delle presenze, fino a un massimo di 50 elementi.
2. Calcolare quante ore sono state caricate per una data (`giorno`, `mese`, `anno`) e la loro percentuale rispetto al totale delle ore di presenza caricate.
3. Fornire le informazioni sulle presenze di uno specifico istruttore, se presente nei dati caricati.

Per sperimentare più rapidamente le funzioni 2 e 3, è possibile inizializzare l'array di strutture con un pre-riempimento in fase di dichiarazione.

Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
