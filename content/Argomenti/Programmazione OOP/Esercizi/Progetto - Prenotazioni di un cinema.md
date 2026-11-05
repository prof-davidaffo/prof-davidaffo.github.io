# Progetto Java — Prenotazioni di un cinema

Un piccolo cinema vuole gestire le prenotazioni delle proprie proiezioni. Ogni proiezione ha un numero limitato di posti; una prenotazione riserva uno o più posti a nome di un cliente. Se viene annullata, i posti tornano disponibili.

Realizza un'applicazione da terminale che permetta all'operatore di consultare le proiezioni, registrare le prenotazioni e annullarle.

Il progetto riprende classi, costruttori, incapsulamento, riferimenti, collaborazione tra oggetti, `ArrayList` ed eccezioni della dispensa **Programmazione orientata agli oggetti in Java**. Servono inoltre cicli, condizioni, metodi e input con `Scanner`.

## Confini del progetto

Il programma gestisce un elenco di proiezioni già programmate. Ogni proiezione ha un codice univoco: lo stesso film può comparire in proiezioni diverse, con codici e disponibilità indipendenti.

I posti non sono numerati: interessa soltanto quanti ne rimangono. Il nome del cliente è un dato della prenotazione, quindi due persone con lo stesso nome possono prenotare e una persona può effettuare più prenotazioni. Ogni prenotazione si riconosce attraverso il proprio codice, univoco **all'interno della proiezione**.

Pagamenti, assegnazione delle sale e salvataggio su file sono fuori dall'ambito della consegna. Alla chiusura del programma i dati vengono persi.

## Modello e responsabilità

Il programma comprende tre classi principali:

| Classe | Responsabilità |
|---|---|
| `Prenotazione` | Conservare codice, nominativo e numero di posti richiesti. |
| `Proiezione` | Gestire le proprie prenotazioni e impedire di superare la capienza. |
| `Cinema` | Raccogliere le proiezioni, cercarle per codice e inoltrare le operazioni a quella richiesta. |

`Main` gestisce il dialogo con l'operatore. Le altre classi non devono leggere dalla tastiera o stampare messaggi: restituiscono risultati oppure lanciano eccezioni.

La struttura dei riferimenti è:

```text
Cinema
  └── ArrayList<Proiezione>
        └── ogni Proiezione contiene un ArrayList<Prenotazione>
```

## Classe `Prenotazione`

Definisci i campi privati `codice`, `nominativo` e `numeroPosti`. Il costruttore riceve tutti e tre i valori.

Codice e nominativo devono essere non nulli e non vuoti dopo aver eliminato gli spazi iniziali e finali con `trim()`. Il numero di posti deve essere positivo. Conserva le stringhe ripulite e usa `IllegalArgumentException` quando un dato non è valido.

I dati non cambiano dopo la costruzione: usa campi `final`, getter e nessun setter. Aggiungi `toString()` per ottenere un riepilogo leggibile della prenotazione.

## Classe `Proiezione`

Definisci i campi privati `codice`, `titoloFilm`, `capienza` e `prenotazioni`, di tipo `ArrayList<Prenotazione>`. Il costruttore riceve codice, titolo e capienza e crea una lista inizialmente vuota.

Anche qui le stringhe devono essere non nulle e non vuote dopo `trim()`; la capienza deve essere positiva. Codice, titolo e capienza rimangono invariati.

Implementa questi metodi, oltre ai getter dei dati descrittivi:

```java
public int getPostiOccupati()
public int getPostiDisponibili()
public int getNumeroPrenotazioni()
public Prenotazione cercaPrenotazione(String codice)
public void aggiungiPrenotazione(Prenotazione prenotazione)
        throws PostiInsufficientiException
public void annullaPrenotazione(String codice)
public ArrayList<Prenotazione> getPrenotazioni()
```

- `getPostiOccupati()` somma i posti delle prenotazioni presenti. `getPostiDisponibili()` sottrae quel totale alla capienza. **Non conservare un secondo contatore dei posti:** la lista deve essere l'unica fonte del calcolo.
- `cercaPrenotazione()` cerca per codice con un ciclo e restituisce l'oggetto presente nella lista. Se non lo trova, lancia `NoSuchElementException`, da importare da `java.util`.
- `aggiungiPrenotazione()` rifiuta `null` e un codice già presente con `IllegalArgumentException`. Se i posti richiesti superano quelli disponibili, lancia `PostiInsufficientiException`. Esegui tutti i controlli prima di aggiungere l'oggetto.
- `annullaPrenotazione()` rimuove la prenotazione individuata dal codice. Se non esiste, lancia `NoSuchElementException`. Puoi prima cercare l'oggetto e poi rimuoverlo, evitando di modificare la lista durante un for-each.
- `getPrenotazioni()` restituisce una nuova lista contenente le prenotazioni attuali, per esempio con `new ArrayList<>(prenotazioni)`. Il chiamante può così consultarle senza poter svuotare la lista interna. Gli oggetti contenuti possono essere condivisi perché i loro dati non sono modificabili.

I codici ricevuti dai metodi vanno validati e ripuliti come quelli del costruttore. Il confronto con `equals()` distingue maiuscole e minuscole: `P1` e `p1` sono codici diversi. Per riconoscere un duplicato confronta i **codici**, non i riferimenti agli oggetti.

L'invariante da garantire è:

```text
0 <= posti occupati <= capienza
posti disponibili = capienza - posti occupati
```

## Eccezione `PostiInsufficientiException`

Definisci una sola eccezione personalizzata, derivata da `Exception`. Il costruttore riceve posti richiesti e posti disponibili e prepara un messaggio che riporti entrambi.

È un'eccezione checked: i metodi che possono propagarla devono dichiararla con `throws`. Nel menu, questo caso deve produrre un messaggio che permetta all'operatore di scegliere una quantità minore o un'altra proiezione.

Per gli altri errori usa le eccezioni standard:

| Situazione | Eccezione |
|---|---|
| Dati nulli, vuoti, non positivi o codici duplicati | `IllegalArgumentException` |
| Proiezione o prenotazione cercata ma inesistente | `NoSuchElementException` |
| Testo che non rappresenta un intero | `NumberFormatException` |

Quando più condizioni non sono rispettate, controlla prima la validità degli argomenti, poi l'esistenza della proiezione o l'eventuale codice duplicato e infine la disponibilità. Un'operazione fallita deve lasciare i dati invariati.

## Classe `Cinema`

Definisci un campo privato `ArrayList<Proiezione> proiezioni`, inizializzato nel costruttore.

```java
public void aggiungiProiezione(Proiezione proiezione)
public Proiezione cercaProiezione(String codice)
public ArrayList<Proiezione> getProiezioni()
public void prenota(String codiceProiezione,
                    Prenotazione prenotazione)
        throws PostiInsufficientiException
public void annulla(String codiceProiezione,
                    String codicePrenotazione)
```

L'inserimento rifiuta `null` e codici di proiezione duplicati con `IllegalArgumentException`. La ricerca usa un ciclo e lancia `NoSuchElementException` se il codice non esiste. Anche `getProiezioni()` restituisce una copia della lista; le proiezioni restituite sono gli stessi oggetti gestiti dal cinema, non copie indipendenti.

`prenota()` e `annulla()` validano gli argomenti, cercano la proiezione e chiamano rispettivamente `aggiungiPrenotazione()` e `annullaPrenotazione()` su quell'oggetto. Il controllo della capienza rimane in `Proiezione`: `Cinema` non deve ripeterlo.

Questa è la collaborazione centrale del progetto: `Main` chiede un'operazione al cinema, il cinema individua la proiezione e la proiezione gestisce le proprie prenotazioni.

## Applicazione da terminale

All'avvio crea un cinema e aggiungi queste proiezioni:

| Codice | Film | Capienza |
|---|---|---|
| `P1` | Il castello errante di Howl | 10 |
| `P2` | Il castello errante di Howl | 6 |
| `P3` | Ritorno al futuro | 8 |

Mostra un menu ripetuto fino alla scelta di uscita:

```text
1. Elenca proiezioni e posti disponibili
2. Registra una prenotazione
3. Elenca le prenotazioni di una proiezione
4. Annulla una prenotazione
0. Esci
```

Per prenotare, chiedi codice della proiezione, codice della prenotazione, nominativo e numero di posti. Per annullare, chiedi i due codici necessari. L'elenco delle prenotazioni deve distinguere una lista vuota da una proiezione inesistente.

Leggi ogni dato con `Scanner.nextLine()` e converti i numeri con `Integer.parseInt()`. Usa un ciclo e uno `switch` per il menu. Una scelta numerica sconosciuta deve mostrare un messaggio e riproporre il menu.

Gestisci gli errori attorno alla singola operazione, così il programma può proseguire. Intercetta `NumberFormatException` prima di `IllegalArgumentException`, perché ne è una sottoclasse. Gestisci anche `NoSuchElementException` e `PostiInsufficientiException`. Mostra la conferma di successo soltanto quando l'operazione è terminata correttamente.

## Casi con cui verificare il progetto

Esegui la sequenza seguente partendo dai dati iniziali. Le prenotazioni indicate sono tutte per `P1`, salvo dove specificato.

| Operazione | Risultato atteso |
|---|---|
| Consulta le proiezioni appena create | Disponibilità: `P1 = 10`, `P2 = 6`, `P3 = 8`. |
| Prenota `R1`, Anna, 4 posti | `P1` ha 6 posti disponibili e una prenotazione. |
| Prenota `R2`, Luca, 6 posti | `P1` ha 0 posti disponibili e due prenotazioni. |
| Tenta `R3`, Sara, 1 posto | `PostiInsufficientiException`; restano due prenotazioni e 0 posti disponibili. |
| Annulla `R1` | `P1` ha 4 posti disponibili; rimane soltanto `R2`. |
| Prenota `R3`, Sara, 3 posti | `P1` ha 1 posto disponibile e due prenotazioni. |
| Tenta di aggiungere un'altra `R3` da 1 posto | Codice duplicato; disponibilità ancora 1. |
| Tenta di annullare nuovamente `R1` | Prenotazione inesistente; disponibilità ancora 1. |
| Prenota su `P2` con codice `R2`, Luca, 2 posti | Operazione valida: `P2` ha 4 posti disponibili; `P1` rimane invariata. |

Verifica inoltre, con prove indipendenti:

- una prenotazione da 0 posti, un nominativo di soli spazi e un codice nullo vengono rifiutati;
- cercare `P99` segnala una proiezione inesistente;
- aggiungere una seconda proiezione con codice `P1` non altera l'elenco;
- inserire `tre` come quantità mostra un errore e permette di continuare;
- cancellare tutti gli elementi dalla lista restituita da `getPrenotazioni()` non annulla le prenotazioni della proiezione;
- annullare l'ultima prenotazione ripristina l'intera capienza;
- un cinema senza proiezioni e una proiezione senza prenotazioni producono elenchi vuoti leggibili.

## Consegna

Consegna `Prenotazione.java`, `Proiezione.java`, `Cinema.java`, `PostiInsufficientiException.java` e `Main.java`, con una classe pubblica per file, senza librerie esterne. Aggiungi un breve resoconto dei casi verificati e disegna un diagramma UML con campi, metodi principali e molteplicità delle relazioni.

Nel resoconto spiega perché la disponibilità viene calcolata dalle prenotazioni, perché non serve una classe per il cliente in questi requisiti e perché il controllo dei posti appartiene alla proiezione.

Il progetto è completo quando il menu permette di svolgere le operazioni richieste, gli errori lasciano lo stato coerente e ciascuna classe svolge la responsabilità assegnata.
