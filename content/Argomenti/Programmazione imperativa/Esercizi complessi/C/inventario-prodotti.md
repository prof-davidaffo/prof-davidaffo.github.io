# Inventario di un negozio di informatica

Realizzare un programma C che gestisca l'inventario dei prodotti di un negozio di informatica.

Ogni prodotto è descritto da:

- `id`: codice intero univoco del prodotto;
- `nome`: nome del prodotto, massimo 30 caratteri validi;
- `prezzo`: prezzo di vendita in euro, con al massimo due decimali;
- `quantita`: numero di pezzi disponibili in magazzino.

È possibile memorizzare al massimo 500 prodotti in un array. I nomi delle informazioni devono essere esattamente quelli indicati e nello stesso ordine.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

Sviluppare le seguenti funzioni:

1. Modificare il nome di un prodotto con un nuovo nome. La funzione restituisce `1` se la sostituzione riesce, `0` se il prodotto non è presente oppure se il nuovo nome è troppo lungo.
2. Applicare uno sconto a un prodotto individuato dal nome e aggiornare il prezzo. Lo sconto è un valore reale compreso tra 0 e 1, estremi esclusi. Il nuovo prezzo è: `prezzo - prezzo * sconto`. Possono esistere più prodotti con lo stesso nome.
3. Modificare la quantità di un prodotto individuato dall'`id`, incrementandola o decrementandola con un valore fornito.
4. Cercare, a partire da una posizione iniziale, la posizione di un prodotto individuato dal nome. La funzione restituisce `0` se il nome non viene trovato, `1` altrimenti.
5. Aggiungere prodotti all'inventario, anche a partire da una posizione diversa dalla prima.

Per velocizzare la sperimentazione è possibile inizializzare l'array con un pre-riempimento in fase di dichiarazione.

Il `main` deve testare tutte le funzioni, con inizializzazioni e stampe necessarie a verificarne il comportamento. Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
