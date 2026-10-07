# Archivio degli esami degli studenti

Realizzare un programma C che gestisca gli esami sostenuti dagli studenti di una classe.

Ogni esame è descritto da:

- `materia`: stringa di massimo 25 caratteri validi;
- `voto`: numero intero compreso tra 1 e 10;
- `data`: giorno, mese e anno dell'esame.

Ogni studente è descritto da:

- `matricola`: codice intero univoco;
- `cognome`: stringa di massimo 30 caratteri validi;
- un array contenente al massimo 12 esami;
- il numero effettivo di esami presenti.

L'archivio può contenere al massimo 30 studenti. È consigliato usare una struttura `Data`, una struttura `Esame` e una struttura `Studente`.

Usare funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`, salvo quando richiesto esplicitamente.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Verificare se una data è valida.
   Considerare anche gli anni bisestili.

2. Confrontare due date.
   La funzione restituisce `-1`, `0` oppure `1` a seconda che la prima data sia precedente, uguale o successiva alla seconda.

3. Cercare uno studente tramite matricola.
   La funzione restituisce la posizione nell'archivio oppure `-1`.

4. Aggiungere uno studente.
   La matricola deve essere univoca, il cognome deve rispettare la lunghezza massima e l'archivio non deve essere pieno.
   La funzione restituisce:
   - `1` se l'inserimento riesce;
   - `0` se l'archivio è pieno;
   - `-1` se la matricola è già presente;
   - `-2` se il cognome è troppo lungo.

5. Cercare un esame di una determinata materia per uno studente.
   La funzione restituisce la posizione dell'esame oppure `-1`.

6. Aggiungere un esame a uno studente.
   Lo studente deve esistere, la materia non deve essere già presente, il voto e la data devono essere validi e l'array degli esami non deve essere pieno.
   La funzione restituisce:
   - `1` se l'inserimento riesce;
   - `0` se lo studente non esiste;
   - `-1` se la materia è già presente;
   - `-2` se voto o data non sono validi;
   - `-3` se il nome della materia è troppo lungo;
   - `-4` se l'array degli esami è pieno.

7. Modificare il voto di un esame.
   La funzione individua studente e materia e controlla che il nuovo voto sia valido.

8. Calcolare la media dei voti di uno studente.
   La media deve essere restituita tramite un parametro passato per indirizzo. La funzione restituisce `1` se il calcolo riesce, `0` se lo studente non esiste o non ha esami.

9. Trovare l'esame più recente di uno studente.
   La funzione restituisce la posizione dell'esame oppure `-1` se lo studente non esiste o non ha esami. Deve riutilizzare la funzione di confronto tra date.

10. Trovare lo studente con la media più alta.
    Considerare soltanto gli studenti con almeno un esame. La funzione restituisce la posizione dello studente oppure `-1`; in caso di parità restituisce il primo.

11. Contare quanti studenti hanno sostenuto un esame di una materia fornita.

12. Stampare un esame, uno studente completo e l'intero archivio.
    Le funzioni di stampa devono riutilizzarsi tra loro e possono effettuare stampe con `printf`.

## Main

Nel `main`, mostrare un menu che permetta di:

- aggiungere uno studente;
- aggiungere un esame;
- modificare un voto;
- cercare uno studente;
- visualizzare la media e l'esame più recente di uno studente;
- mostrare lo studente con la media più alta;
- contare gli studenti che hanno sostenuto una certa materia;
- stampare l'intero archivio;
- uscire dal programma.

Per velocizzare i test è possibile inizializzare l'array con alcuni studenti ed esami già presenti.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non memorizzare la media nella struttura: deve essere calcolata quando richiesta.
- Usare le funzioni di `string.h` per confrontare, copiare e misurare le stringhe.
- Le funzioni di ricerca e calcolo non devono effettuare stampe.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
