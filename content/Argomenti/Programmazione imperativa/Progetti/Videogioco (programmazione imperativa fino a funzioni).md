## Progetto C++ – “Crea il tuo videogioco”
**Obiettivo:**
Ogni gruppo deve progettare e realizzare un videogioco testuale o semigrafico (basato su console) in linguaggio C++, rispettando vincoli tecnici comuni. Il tipo di gioco è libero (es. gestionale, quiz, combattimento, labirinto, simulazione...), ma deve essere originale e progettato dal gruppo.
## Requisiti tecnici obbligatori
Il progetto deve includere **tutti** i seguenti elementi:
1. **Utilizzo sensato e coerente delle struct**, per rappresentare entità significative del gioco (es. giocatore, nemico, oggetto, livello...). Le `struct` devono essere progettate con più campi e utilizzate attivamente nella logica del gioco.
2. **Funzioni personalizzate**, con:
   - passaggio di parametri
   - return di valori (dove opportuno)
   - almeno una funzione che modifichi strutture tramite riferimento o puntatore
   - Il programma deve essere **correttamente modularizzato**, con funzioni che suddividono in modo logico le parti del gioco
3. **Uso di array statici o matrici**
   - per gestire entità multiple (es. nemici, inventario, mappa...)
4. **Strutture di controllo del flusso (SCF):**
   - if/else, switch, for/while, input validati
5. **Menù interattivo** per guidare l’utente nelle azioni del gioco
6. **Gestione di input e output da console**, in modo chiaro e leggibile
7. **Controllo degli errori** (es. input scorretto, scelte impossibili...)
8. **Il gioco deve avere un buon grado di complessità**, sia nella struttura che nelle regole di gioco
9. **Utilizzare solo le competenze apprese in classe:** non sarà possibile utilizzare strutture dati non viste in classe, come ad esempio gli array dinamici (classe vector).
## Suggerimenti
- Le matrici sono comode per rappresentare griglie di gioco, mappe, dungeon...
- Usa le `struct` per modellare entità principali come personaggi, nemici, oggetti o missioni.
- Usa array di `struct` per gestire più entità dello stesso tipo (es. inventario, squadra, livello).
- Organizza il codice in funzioni distinte per: inizializzazione, gestione input, logica di gioco, stampa dello stato.
- Valuta l'uso di una matrice per gestire la posizione dei personaggi o ostacoli.
- Prevedi livelli di difficoltà, condizioni di vittoria/sconfitta, punteggi o statistiche per aumentare la profondità del gioco.
- Anche un gioco semplice può diventare interessante se ben rifinito e completo.
## Materiale da consegnare
1. **Codice C++** ben strutturato, indentato e commentato nei punti chiave
2. **Relazione tecnica**:
   - Descrizione del gioco e delle regole con le relative istruzioni
   - Spiegazione della struttura del codice e delle funzioni
   - Divisione del lavoro e responsabilità
## Valutazione
- Qualità tecnica e funzionamento del gioco
- Aderenza ai vincoli tecnici
- Qualità del codice sorgente
- Chiarezza e cura della relazione
- Originalità e complessità (senza bisogno di grafica)
- Il docente potrebbe chiedere una breve discussione orale per confermare che il gruppo abbia effettivamente lavorato
## Organizzazione dei gruppi e distribuzione del voto
- I gruppi sono composti da 3-4 studenti, **formati in base al livello** degli studenti sulla base dei risultati ottenuti nelle verifiche precedenti, questo per evitare trascinamenti e per incentivare l'intero gruppo a lavorare sodo per acquisire le competenze richieste.
- Il **voto finale del gruppo andrà moltiplicato per il numero dei componenti** e i membri dovranno **distribuire i punti tra loro**, giustificando la scelta nella relazione tecnica.
- Non è possibile **specializzare** i membri del gruppo in task troppo specifici (ad esempio: scrivere solo la relazione, occuparsi della grafica ecc...). Ogni componente deve contribuire in tutti gli aspetti tecnici del progetto, soprattutto quelli obbligatori.
- Il docente deciderà comunque come distribuire i voti sulla base della discussione orale, **a prescindere da quanto scritto nelle relazioni**.