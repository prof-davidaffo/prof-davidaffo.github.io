# Monitoraggio dei server

Realizzare un programma C per monitorare i server di un piccolo datacenter aziendale.

Ogni server è definito da:

- `hostName`: nome del server, massimo 25 caratteri validi;
- `caricoCPU`: percentuale di utilizzo della CPU, compresa tra 0 e 1 inclusi, con un decimale;
- `ramLibera`: memoria libera espressa in GB, con due decimali;
- `IDServer`: codice intero univoco del server.

È possibile monitorare al massimo 10 server in un array. I nomi delle informazioni devono essere esattamente quelli indicati e nello stesso ordine.

Usare funzioni adeguate e il passaggio di parametri per favorire il riuso del codice. Le funzioni non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

Sviluppare le seguenti funzioni:

1. Ottimizzare il consumo di RAM di un server individuato da `hostName`, modificando `ramLibera` di una percentuale fornita. Esempio: con `ramLibera = 4,5 GB` e ottimizzazione del 10%, il valore finale è `4,05 GB`.
2. Modificare il `caricoCPU` di un server individuato da `IDServer`, sostituendo il valore precedente con quello fornito.
3. Verificare l'eventuale sovraccarico di un server individuato da `hostName`, controllando se `caricoCPU` supera l'85%. La funzione restituisce `1` se il nome non viene trovato e `0` se viene trovato.
4. Modificare il nome di un server con un nuovo nome, a partire da una posizione fornita. La funzione restituisce `0` se la sostituzione riesce e `1` in caso contrario, ad esempio se il server non è presente o il nuovo nome è troppo lungo. In presenza di più nomi uguali, modificare solo la prima occorrenza.
5. Aggiungere server al monitoraggio, anche a partire da una posizione diversa dalla prima.

Per sperimentare e testare più rapidamente le funzioni, è possibile inizializzare l'array con un pre-riempimento in fase di dichiarazione.

Il `main` deve testare tutte le funzioni, con inizializzazioni e stampe necessarie a verificarne il comportamento. Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
