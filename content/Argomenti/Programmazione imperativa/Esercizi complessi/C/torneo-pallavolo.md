# Gestione di un torneo di pallavolo

Realizzare un programma C che gestisca squadre, partite e classifica di un torneo scolastico di pallavolo.

Ogni squadra è descritta da:

- `codice`: codice intero univoco;
- `nome`: stringa univoca di massimo 30 caratteri validi;
- `classe`: stringa di massimo 10 caratteri validi.

Ogni set è descritto da:

- `puntiCasa`: punti ottenuti dalla squadra di casa;
- `puntiOspite`: punti ottenuti dalla squadra ospite.

Ogni partita è descritta da:

- `id`: codice intero univoco;
- `codiceCasa`: codice della squadra di casa;
- `codiceOspite`: codice della squadra ospite;
- `set`: array di al massimo 5 elementi di tipo `Set`;
- `numeroSet`: numero effettivo di set giocati;
- `conclusa`: valore intero che vale `1` se la partita è terminata, `0` altrimenti.

Il torneo può contenere al massimo 24 squadre e 100 partite. È consigliato definire le strutture `Squadra`, `Set` e `Partita`.

## Regole semplificate

- Vince un set la squadra che ha più punti; non è necessario controllare le regole reali sullo scarto minimo.
- Una partita è conclusa quando una squadra vince 3 set.
- Una vittoria assegna 3 punti in classifica, una sconfitta 0 punti.
- Le partite non concluse non contribuiscono alla classifica.

## Funzioni richieste

1. Cercare una squadra tramite codice e cercarla tramite nome. Le due funzioni restituiscono la posizione oppure `-1`.

2. Aggiungere una squadra, controllando capienza, unicità di codice e nome e lunghezza delle stringhe.

3. Cercare una partita tramite `id`.

4. Creare una partita non ancora iniziata. Le squadre devono esistere, essere diverse e non deve essere già presente una partita tra le stesse due squadre, anche con campo invertito.

5. Contare i set vinti dalle due squadre in una partita. I risultati devono essere restituiti tramite parametri passati per indirizzo.

6. Aggiungere il risultato di un set. La partita deve esistere e non essere già conclusa, i punteggi devono essere non negativi e diversi tra loro e l'array dei set non deve essere pieno. Dopo l'inserimento aggiornare automaticamente `conclusa` se una squadra raggiunge 3 set vinti.

7. Determinare il codice della squadra vincitrice di una partita conclusa. La funzione restituisce `1` se il risultato è disponibile e `0` altrimenti; il codice deve essere restituito tramite parametro passato per indirizzo.

8. Calcolare, per una squadra, partite giocate, vinte, perse, set vinti e set persi. Tutti i dati devono essere restituiti tramite parametri e non memorizzati nella struttura.

9. Calcolare i punti in classifica di una squadra riutilizzando le funzioni precedenti.

10. Confrontare due squadre ai fini della classifica. Ordinare secondo:
    1. punti in classifica decrescenti;
    2. differenza tra set vinti e persi decrescente;
    3. nome in ordine alfabetico.

11. Stampare la classifica senza riordinare fisicamente l'array delle squadre. Evitare di stampare due volte la stessa squadra usando un array locale di posizioni già selezionate.

12. Trovare la partita conclusa con il maggior numero totale di punti segnati nei set. In caso di parità restituire la prima.

13. Eliminare una squadra. L'operazione è consentita soltanto se non compare in nessuna partita; in caso di successo compattare l'array.

14. Stampare una squadra, una partita completa e tutte le partite. Le funzioni di stampa devono riutilizzarsi tra loro.

## Main

Realizzare un menu che permetta di:

- aggiungere una squadra;
- creare una partita;
- registrare un set;
- cercare e mostrare una partita;
- visualizzare le statistiche di una squadra;
- stampare la classifica;
- mostrare la partita con più punti;
- eliminare una squadra;
- stampare squadre e partite;
- uscire dal programma.

## Vincoli

- Non usare allocazione dinamica.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Non memorizzare nella struttura `Squadra` punti o statistiche calcolabili.
- Non ordinare fisicamente l'array delle squadre per produrre la classifica.
- Le funzioni di ricerca e calcolo non devono effettuare stampe.
- Usare le funzioni di `string.h` per gestire le stringhe.

