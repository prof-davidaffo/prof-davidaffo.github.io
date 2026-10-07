# Tracciamento di spedizioni

Realizzare un programma C che gestisca le spedizioni di un piccolo corriere e la cronologia dei loro eventi di tracciamento.

Ogni data e ora è descritta da:

- `giorno`, `mese`, `anno`;
- `ora`, `minuto`.

Ogni evento di tracciamento è descritto da:

- `momento`: struttura contenente data e ora;
- `luogo`: stringa di massimo 30 caratteri validi;
- `stato`: carattere che vale:
  - `'P'` per spedizione preparata;
  - `'T'` per spedizione in transito;
  - `'C'` per spedizione in consegna;
  - `'E'` per spedizione consegnata;
  - `'A'` per anomalia.

Ogni spedizione è descritta da:

- `codice`: stringa univoca di massimo 15 caratteri validi;
- `destinatario`: stringa di massimo 40 caratteri validi;
- `peso`: valore reale positivo espresso in chilogrammi;
- `eventi`: array di al massimo 20 eventi;
- `numeroEventi`: numero effettivo di eventi presenti.

L'archivio può contenere al massimo 100 spedizioni. È consigliato definire le strutture `DataOra`, `Evento` e `Spedizione`.

## Regole di avanzamento

- Il primo evento deve avere stato `'P'`.
- Dopo `'P'` sono ammessi `'T'` oppure `'A'`.
- Dopo `'T'` sono ammessi `'T'`, `'C'` oppure `'A'`.
- Dopo `'C'` sono ammessi `'E'`, `'T'` oppure `'A'`.
- Dopo `'A'` sono ammessi `'T'` oppure `'C'`.
- Dopo `'E'` non è possibile aggiungere altri eventi.
- Ogni nuovo evento deve essere successivo, e non uguale, al precedente.

## Funzioni richieste

1. Verificare la validità di una data e ora, considerando gli anni bisestili.

2. Confrontare due valori di tipo `DataOra`, restituendo `-1`, `0` oppure `1`.

3. Verificare se un carattere rappresenta uno stato valido.

4. Verificare se il passaggio da uno stato al successivo rispetta le regole indicate.

5. Cercare una spedizione tramite codice usando `strcmp`.

6. Aggiungere una spedizione senza eventi, controllando capienza, unicità del codice, lunghezza delle stringhe e validità del peso.

7. Aggiungere un evento a una spedizione. La funzione deve controllare il momento, il luogo, lo stato, la capienza dell'array interno, l'ordine cronologico e la validità dell'avanzamento.

8. Ottenere lo stato corrente di una spedizione. Lo stato deve essere restituito tramite un parametro passato per indirizzo. La funzione restituisce `0` se la spedizione non esiste o non possiede eventi, `1` altrimenti.

9. Trovare l'evento più recente di una spedizione. Non si può assumere che gli eventi siano fisicamente ordinati, anche se gli inserimenti normali rispettano l'ordine.

10. Contare quante spedizioni si trovano attualmente in ciascuno stato. I cinque conteggi devono essere restituiti tramite parametri.

11. Stampare tutte le spedizioni che hanno avuto almeno un'anomalia, senza stampare due volte la stessa spedizione.

12. Trovare la spedizione non consegnata ferma da più tempo rispetto a una data e ora corrente. Considerare il momento dell'evento più recente e restituire la posizione della spedizione oppure `-1`.

13. Correggere il luogo dell'ultimo evento di una spedizione, controllando la lunghezza della nuova stringa.

14. Eliminare una spedizione consegnata, compattando l'array. Una spedizione priva di eventi o non ancora consegnata non può essere eliminata.

15. Stampare una data e ora, un evento, una spedizione completa e tutto l'archivio. Le funzioni di stampa devono riutilizzarsi tra loro.

## Main

Nel `main`, mostrare un menu che permetta di:

- inserire e cercare una spedizione;
- aggiungere un evento di tracciamento;
- mostrare lo stato corrente e la cronologia di una spedizione;
- contare le spedizioni per stato;
- mostrare le spedizioni che hanno avuto anomalie;
- individuare la spedizione ferma da più tempo;
- correggere il luogo dell'ultimo evento;
- eliminare una spedizione consegnata;
- stampare l'intero archivio;
- uscire dal programma.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non memorizzare separatamente lo stato corrente: deve essere ricavato dagli eventi.
- Usare le funzioni di `string.h` per le stringhe.
- Le funzioni di ricerca, controllo e calcolo non devono effettuare stampe.
- Prevedere nel `main` casi di test validi e non validi per le regole di avanzamento.
