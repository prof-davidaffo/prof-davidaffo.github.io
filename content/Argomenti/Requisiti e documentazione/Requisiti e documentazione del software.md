# I requisiti software

### Obiettivi dell'unità

**Conoscenze**

- Comprendere l'importanza della fase di analisi nel ciclo di vita del software
- Distinguere requisiti utente e requisiti di sistema
- Conoscere la fase di esplorazione e le sue tecniche
- Comprendere i concetti di scenario e caso d'uso
- Conoscere la struttura del documento SRS
- Conoscere i principi S.O.L.I.D. per la progettazione delle classi

**Competenze**

- Individuare i requisiti utente e di sistema a partire da una specifica
- Applicare le tecniche di esplorazione per raccogliere requisiti
- Identificare scenari d'uso e attori di un sistema
- Analizzare e compilare un documento SRS

**Abilità**

- Descrivere in UML i casi d'uso e il diagramma di contesto
- Documentare i casi d'uso con lo schema di Jacobson
- Compilare e validare le specifiche di un SRS

---

## Lezione 1 — La specifica dei requisiti

> **In questa lezione impareremo:**
> 
> - le diverse tipologie di requisiti software
> - la differenza tra requisiti utente e requisiti di sistema
> - la differenza tra requisiti funzionali, non funzionali e di dominio

---

### Premessa: dove si colloca la specifica dei requisiti

Nel ciclo di vita del software, le prime fasi che seguono lo studio di fattibilità sono la **raccolta** e l'**analisi dei requisiti**.

Lo studio di fattibilità è una valutazione preliminare in cui si stabilisce se conviene avviare il progetto, se esistono soluzioni già pronte sul mercato, e quali risorse umane ed economiche sono necessarie. Si conclude di norma con un **preventivo** (o documento di fattibilità) presentato al cliente, che impegna la software house alla realizzazione nei tempi e nei costi indicati. Questo documento viene tipicamente redatto da un **Software Architect Senior** — figura con almeno 10 anni di esperienza nel settore.

La fase successiva, la **specifica dei requisiti**, si articola in quattro attività principali:

|Attività|Descrizione|
|---|---|
|**Analisi del problema**|Comprendere cosa deve fare il sistema: necessità degli utenti, ambiente operativo, condizioni di mercato|
|**Definizione delle funzionalità**|Elencare funzionalità, vincoli interni/esterni, prestazioni richieste|
|**Redazione dell'SRS**|Trasformare i requisiti in un documento formalizzato (Software Requirements Specification)|
|**Convalida delle specifiche**|Rivedere l'SRS con il committente e validare ogni singolo requisito|

> 💡 La specifica dei requisiti risponde alla domanda **"che cosa deve fare il sistema?"** senza preoccuparsi di _come_ lo farà. È un documento che descrive il comportamento atteso, non le scelte implementative.

> **Esempio — Biblioteca comunale**
> 
> Per un sistema di gestione di una biblioteca, i requisiti potrebbero essere:
> 
> - archiviare i dati relativi a libri, giornali, riviste, DVD e CD-ROM
> - permettere ricerche per titolo, autore, argomento o ISBN
> - gestire le operazioni di prestito
> - sostenere almeno 10 transazioni al secondo
> - riconoscere l'utente tramite smart card o smartphone
> 
> L'interfaccia dovrà essere realizzata tramite browser Internet.

L'insieme di tutte le attività che si occupano di requisiti prende il nome di **ingegneria dei requisiti** (requirements engineering) e comprende:

1. raccolta dei requisiti
2. analisi dei requisiti
3. specifica e documentazione dei requisiti
4. verifica e validazione dei requisiti

---

### Requisiti software e stakeholder

> **Definizione — Requisito**
> 
> Ogni informazione (ottenuta in qualche modo) circa le funzionalità, i servizi, le modalità operative e di gestione del sistema da sviluppare.

Un requisito è una proprietà richiesta — o auspicabile — del prodotto finale. Il documento dei requisiti deve rendere esplicito se ogni requisito è **obbligatorio** o semplicemente **desiderabile**.

> **Esempio — Sito di e-commerce**
> 
> - Il sito deve permettere di inserire prodotti nel carrello _(obbligatorio)_
> - Il carrello deve contenere almeno 15 prodotti contemporaneamente _(obbligatorio)_
> - Ogni scheda prodotto deve avere foto, nome, produttore, prezzo, descrizione max 5 righe _(obbligatorio)_
> - Il pagamento deve accettare carte di credito elettroniche e tradizionali _(obbligatorio)_
> - L'intero processo di acquisto dovrebbe richiedere al massimo 5 minuti _(auspicabile)_

La raccolta dei requisiti è considerata l'attività più difficile dell'intero processo di sviluppo, perché richiede la collaborazione tra persone con background molto diversi: sviluppatori, committenti, utenti finali, manager, consulenti legali. Queste figure si chiamano **stakeholder**.

> **Definizione — Stakeholder**
> 
> "Gli stakeholder — o portatori di interesse — sono tutte quelle persone o gruppi che influenzano e/o sono influenzati dalle attività di un'organizzazione, dai suoi prodotti o servizi e dai relativi risultati di performance." _(Edward Freeman, 1984)_

In pratica: sono stakeholder tutti coloro che hanno un interesse nella messa in opera del sistema, a qualsiasi livello dell'organizzazione.

Il problema principale è che:

- **Gli stakeholder** all'inizio del progetto spesso non hanno le idee chiare, usano il proprio gergo tecnico e fanno richieste contraddittorie tra loro
- **Gli sviluppatori** devono prima imparare il linguaggio del dominio del cliente prima di poter dialogare efficacemente
- **Il cliente e gli utenti finali** sono esperti del loro settore, ma hanno poca o nessuna esperienza nello sviluppo software

Tutto questo rende la fase di analisi particolarmente delicata: un errore qui si propaga a tutto il progetto ed è costoso da correggere nelle fasi successive.

I rischi principali sono:

- dimenticare o ignorare una funzionalità
- implementare in modo errato o incompleto una richiesta
- realizzare interfacce utente poco intuitive

#### La norma ISO 13407 — Human-Centered Design

Un riferimento utile per identificare i requisiti è la norma **ISO 13407** (Human-Centered Design Process), il cui principio di base è: _"fondare il progetto sui reali bisogni degli utenti"_.

La norma indica di definire:

- le prestazioni richieste al nuovo sistema (obiettivi operativi ed economici)
- i requisiti normativi e legislativi (sicurezza, salute, privacy)
- la comunicazione e cooperazione tra gli utenti e gli altri attori
- le attività degli utenti, la distribuzione dei compiti, le motivazioni
- la progettazione dei flussi di lavoro
- la gestione del cambiamento introdotto dal nuovo sistema (formazione, personale coinvolto)
- la fattibilità delle operazioni di manutenzione
- la progettazione dell'interfaccia uomo-computer

---

### Classificazione dei requisiti

I requisiti si classificano secondo due criteri ortogonali:

```mermaid
flowchart TD
    A[Requisiti software]
    A --> B[Livello di dettaglio]
    A --> C[Tipo di requisito]

    B --> B1[Requisiti utente]
    B --> B2[Requisiti di sistema]

    C --> C1[Requisiti funzionali]
    C --> C2[Requisiti non funzionali]
    C --> C3[Requisiti di dominio]
```
#### Classificazione per livello di dettaglio

**Requisiti utente** — Descrivono le esigenze dell'utente finale nel suo linguaggio. Sono meno formali, lasciano spazio a diverse soluzioni implementative, e vengono anche detti _requisiti aperti_.

**Requisiti di sistema** — Descrivono vincoli tecnici imposti dall'ambiente (hardware esistente, sistemi legacy con cui interfacciarsi, normative fiscali e di sicurezza). Sono molto strutturati, scritti in linguaggio tecnico o semi-formale, non lasciano margini di scelta (_requisiti chiusi_). Spesso l'utente non li conosce — li conosce solo il programmatore.

> **Esempio — Visualizzazione di file esterni**
> 
> **Requisito utente:** L'applicazione deve permettere di rappresentare e visualizzare file esterni prodotti da altri pacchetti software.
> 
> **Requisiti di sistema derivati:**
> 
> - L'utente deve poter definire il tipo dei file esterni
> - L'utente deve poter associare a ogni tipo di file il programma che lo ha generato
> - A ogni tipo di file deve essere associata una specifica icona
> - L'icona deve poter essere scelta dall'utente
> - Selezionando l'icona, il sistema deve avviare l'applicazione appropriata per visualizzare il file

#### Classificazione per tipo di requisito

**1. Requisiti funzionali**

Descrivono _cosa_ il sistema fa: le funzionalità che offre, i servizi che eroga agli utenti.

Devono essere:

- **completi** — devono coprire tutti i servizi richiesti dagli utenti
- **coerenti** — non devono contenere definizioni contraddittorie

Per sistemi grandi è difficile ottenere entrambe le proprietà, perché i vari stakeholder hanno spesso esigenze diverse o in conflitto.

**2. Requisiti non funzionali**

Descrivono _come_ il sistema deve operare — non le funzioni, ma i vincoli su di esse: prestazioni, affidabilità, sicurezza, compatibilità, normative da rispettare.

Ian Sommerville li classifica in tre categorie principali:

|Categoria|Esempi|
|---|---|
|**Di prodotto**|Affidabilità, portabilità, efficienza, usabilità, spazio|
|**Organizzativi**|Requisiti di consegna, di implementazione, su standard|
|**Esterni**|Interoperabilità, requisiti etici, requisiti legislativi|

> **Esempio:** "Il sistema deve rispondere a ogni richiesta in meno di 2 secondi nel 95% dei casi" è un requisito non funzionale di prestazione. "Il sistema deve essere accessibile a persone con disabilità motoria" è un requisito non funzionale di usabilità.

**3. Requisiti di dominio**

Dipendono dallo specifico settore in cui il sistema opera. Non derivano dagli utenti, ma dall'ambiente operativo: leggi della fisica, normative settoriali, regole di business.

> **Esempio:** In un'applicazione bancaria, il requisito di autenticarsi con un codice segreto per accedere al conto è un requisito di dominio (imposto dalla normativa bancaria, non scelto dall'utente).

> **Esempio completo — Carta di credito**
> 
> Una banca rilascia ai suoi clienti una carta di credito con la quale è possibile:
> 
> - effettuare pagamenti (🟢 _funzionale_)
> - prelevare contanti allo sportello (🟢 _funzionale_)
> - visualizzare saldo ed estratto conto (🟢 _funzionale_)
> 
> Il sistema deve:
> 
> - garantire un tempo di risposta inferiore al minuto (🔴 _non funzionale — prestazione_)
> - essere sviluppato su architettura X86 (🔴 _non funzionale — implementazione_)
> - essere accessibile a persone con handicap (🔴 _non funzionale — usabilità_)
> - essere facilmente espandibile (🔴 _non funzionale — manutenibilità_)
> 
> Le operazioni di pagamento devono avere un limite mensile (🔵 _dominio — regola di business_) Le operazioni allo sportello richiedono un codice segreto (🔵 _dominio — normativa bancaria_)

#### Il modello FURPS

Un'altra classificazione molto usata è il modello **FURPS** (1987), che organizza i requisiti non funzionali in cinque categorie:

|Lettera|Termine|Cosa misura|
|---|---|---|
|**F**|Functionality|Funzionalità, sicurezza dell'intero sistema|
|**U**|Usability|Facilità d'apprendimento, qualità dell'interfaccia, manualistica|
|**R**|Reliability|Affidabilità nel tempo, frequenza dei guasti, capacità di recupero|
|**P**|Performance|Tempi di risposta, throughput, consumo di risorse|
|**S**|Supportability|Manutenibilità, estendibilità, adattabilità, configurabilità|

A questi si aggiungono i **vincoli** (pseudorequisiti):

- **implementazione**: linguaggi, tool, piattaforme hardware obbligatori
- **interfacce**: sistemi esterni o legacy con cui il sistema deve comunicare
- **operazioni**: vincoli sull'amministrazione e gestione del sistema
- **packaging**: modalità di consegna e installazione
- **legali**: licenze, certificazioni, normative

---

### I requisiti: l'anello debole dello sviluppo software

Uno studio dello Standish Group su 8.000 progetti ha prodotto un risultato sconfortante:

|Esito|Percentuale|
|---|---|
|✅ Successo (nei tempi, nei costi, con tutte le funzionalità)|16%|
|⚠️ Fallimento parziale (problemi su costi, tempi o funzionalità)|53%|
|❌ Fallimento completo (progetto cancellato)|31%|

Analizzando le cause dei fallimenti, 5 degli 8 principali fattori riguardano direttamente i requisiti:

|Causa del fallimento|%|
|---|---|
|Requisiti incompleti|13,1|
|Mancato coinvolgimento dell'utente|12,4|
|Mancanza di risorse|10,6|
|Attese irrealistiche|9,9|
|Mancanza del supporto della direzione|9,3|
|**Cambiamento dei requisiti in corso d'opera**|8,7|
|Mancanza di pianificazione|8,1|
|Non serviva più|7,5|

In totale, problemi legati ai requisiti causano oltre il **51%** delle principali cause di fallimento.

Il problema spesso emerge solo a sistema completato, quando il committente si accorge che il prodotto non corrisponde a ciò che si aspettava. Le cause tipiche di questo ritardo nell'individuazione:

- scarsa interazione e discussione tra gli attori durante l'analisi
- conflitti tra requisiti non identificati e risolti in tempo
- utenti non coinvolti nella verifica dei requisiti
- mancato accordo su contenuti, costi e tempi quando emergono nuovi requisiti in corso d'opera

> 💡 **Regola pratica**: La raccolta dei requisiti deve avvenire _prima_ che i progettisti inizino a proporre soluzioni tecniche. I requisiti devono poi rimanere un punto di riferimento durante tutto lo sviluppo, fino al collaudo.

---

### Verifica e validazione dei requisiti

I requisiti funzionali sono abbastanza semplici da verificare: si effettua il collaudo del sistema con gli utenti e si verifica se le loro aspettative sono state soddisfatte.

La validazione dei requisiti deve essere eseguita **durante tutto il ciclo di sviluppo** e richiede di controllare:

- **correttezza**: la specifica rappresenta perfettamente il sistema che il cliente richiede
- **completezza**: la specifica contempla tutti i possibili scenari del sistema
- **coerenza**: i requisiti non si contraddicono tra di loro
- **chiarezza**: la descrizione non dà adito a interpretazioni diverse
- **realismo**: la richiesta è realizzabile e implementabile entro i vincoli esistenti
- **verificabilità**: una volta costruito il sistema, è possibile eseguire test per certificare che i requisiti siano soddisfatti
- **tracciabilità**: tutte le funzioni del sistema sono messe in relazione con un requisito funzionale — fondamentale per sviluppare test e valutare l'impatto dei cambiamenti

I **requisiti di dominio** si verificano collaudando le interazioni del sistema con l'esterno: integrazione con software aziendale preesistente, terze parti e rispetto delle normative di settore.

I **requisiti non funzionali** sono i più difficili da verificare: spesso sono indicati in modo generico dagli utenti e risultano non quantificabili se non vengono resi espliciti. A differenza dei requisiti funzionali — per cui si può dire in modo binario se sono rispettati o no — per i requisiti non funzionali è necessario esprimere un **valore quantitativo** del grado di soddisfacimento.

La tabella seguente riporta esempi di indicatori misurabili per le principali proprietà non funzionali:

| Proprietà | Indicatori misurabili |
|-----------|----------------------|
| **Velocità** | Numero di transazioni per secondo; tempo di risposta a un evento; tempo di refresh dello schermo |
| **Dimensione** | Occupazione disco fisso del programma; occupazione disco per i dati; occupazione memoria RAM |
| **Semplicità d'uso** | Tempo richiesto per la formazione; dimensione della documentazione; numero di pagine di help online |
| **Affidabilità** | Frequenza delle failure; gravità di una failure; accuratezza degli output; capacità di recupero; predicibilità del programma |
| **Robustezza** | Tempo di riavvio dopo un guasto; percentuale di eventi che causano crash; probabilità di danneggiamento dei dati |
| **Portabilità** | Percentuale di istruzioni dipendenti dall'hardware; percentuale di istruzioni dipendenti dal sistema operativo |

> **Mettiti alla prova — Validazione dei requisiti**
>
> Data la seguente situazione, individua ogni tipo di requisito e, per i requisiti non funzionali, predisponi una tabella di valutazione quantitativa.
>
> Si deve realizzare un sistema per archiviare i dati di una biblioteca: libri, giornali, riviste, video, nastri audio e CD-ROM. Il sistema permetterà ricerche per titolo, autore, genere o ISBN tramite interfaccia browser. L'accesso avviene con smart card; ogni prestito dura al massimo 30 giorni per i libri, 7 giorni per gli altri articoli; un utente può avere contemporaneamente fino a 10 articoli in consegna. Il sistema deve gestire almeno 20 transazioni al secondo ed essere consultabile anche da smartphone.

---

### Verifica di fine Lezione 1

#### Scelta multipla

1. Quale tra i seguenti **non** è un tipo di requisito secondo la classificazione per tipo? a) Requisiti funzionali   b) Requisiti utente   c) Requisiti non funzionali   d) Requisiti di dominio
    
2. Quale tra i seguenti **non** appartiene al primo livello della classificazione di Sommerville per i requisiti non funzionali? a) Di prodotto   b) Di sistema   c) Esterni   d) Organizzativi
    
3. Nel modello FURPS, la lettera P sta per: a) Portability   b) Performance   c) Privacy   d) Packaging
    

<details> <summary>📋 Risposte</summary>

1. **b) Requisiti utente** — "utente" e "sistema" sono classificazioni per _livello di dettaglio_, non per tipo. I tipi sono: funzionali, non funzionali, di dominio.
    
2. **b) Di sistema** — Sommerville classifica i requisiti non funzionali in: di prodotto, organizzativi, esterni. "Di sistema" è una classificazione per livello di dettaglio, non per tipo di requisito non funzionale.
    
3. **b) Performance** — FURPS: **F**unctionality, **U**sability, **R**eliability, **P**erformance, **S**upportability.
    

</details>

#### Competenze

Date le situazioni seguenti, individua ogni tipo di requisito. Per i requisiti non funzionali, predisponi una tabella con la valutazione quantitativa.

1. **Telefono cellulare:** sistema per l'immissione di testi in SMS e rubrica, con T9, gestione SMS per destinatario e per data, rubrica multi-numero con gestore e minuti di conversazione, accesso protetto da password.
    
2. **Ufficio postale:** due moduli (Posta e Banca), servizi agli utenti, interazioni tra moduli, funzionalità Web con limitazioni appropriate.
    
3. **Ristorante:** gestione clienti, tavoli, prenotazioni, camerieri, conto con portate, calcolo totale.
    
4. **Azienda con dipartimenti:** gestione impiegati, dipartimenti, stipendi, progetti aziendali con budget.
    
5. **Campionato di calcio:** calendario, arbitri, squadre, giocatori, classifica generale e marcatori, consultabile da web e smartphone.
    

---

## Lezione 2 — Raccolta e analisi dei requisiti

> **In questa lezione impareremo:**
> 
> - cos'è la fase di esplorazione e quando si usa
> - le principali tecniche per raccogliere requisiti dagli stakeholder
> - i problemi tipici che si incontrano in questa fase

---

### Premessa

Per redigere l'SRS è necessario prima raccogliere e analizzare i requisiti. Queste due attività rientrano nell'**ingegneria dei requisiti** (Requirements Engineering), che comprende quattro fasi in sequenza:

1. raccolta dei requisiti
2. analisi dei requisiti
3. stesura della documentazione (SRS)
4. verifica e approvazione

> "The most difficult part of building a software system is to decide, precisely, what must be built. No other part of the work can undermine so badly the resulting software if not done correctly. No other part is so difficult to fix later." _(Fred Brooks)_

---

### Tipi di progetto: da dove si parte

A seconda del contesto, il tipo di raccolta requisiti cambia radicalmente:

|Tipo|Situazione|Fonte dei requisiti|
|---|---|---|
|**Greenfield engineering**|Si parte da zero, nessun sistema preesistente|Il committente e gli stakeholder; ricerca di soluzioni già presenti sul mercato|
|**Re-engineering**|Esiste un sistema obsoleto da riprogettare|Analisi del sistema esistente (pregi, difetti, funzionalità da migrare, miglioramenti)|
|**Interface engineering**|Il sistema core non si può sostituire, ma si aggiorna solo l'interfaccia|Nessun nuovo requisito funzionale: si ridisegnano solo le interfacce sul sistema legacy esistente|

> **Definizione — Sistema legacy**
> 
> Il termine _legacy_ (dal latino: eredità) indica un sistema informatico di valore consolidato, su cui l'azienda continua a fare affidamento nonostante l'età tecnologica. **Non significa "vecchio" o "obsoleto"**: significa un sistema ereditato dal passato che continua a svolgere funzioni critiche e che non si può semplicemente spegnere.

> **Esempio — Comune di XYZ**
> 
> Il Comune di XYZ vuole automatizzare la gestione delle contravvenzioni: ogni vigile ha un palmare per comunicare i dati dell'infrazione, e il sistema invia la notifica al cittadino per posta ordinaria. Il Comune bandisce una gara vinta dalla Ditta ABC.
> 
> Gli attori coinvolti:
> 
> - **Committente**: Comune di XYZ
> - **Esperto del dominio**: funzionario esperto del Codice della Strada
> - **Utenti finali**: vigili urbani
> - **Progettista, Analista, Programmatore, Manutentore**: personale della Ditta ABC

---

### La fase di esplorazione

La raccolta dei requisiti è detta **fase di esplorazione** perché il problema va _sviscerato_ in ogni sua componente. La letteratura anglosassone la chiama anche _elicitation_ (elicitazione) o _discovery_ (scoperta), perché i requisiti spesso non sono evidenti e vanno "estratti".

La fase si articola in due passi fondamentali:

1. **Esame delle richieste del committente** — il cliente che ha approvato il preventivo è il principale referente; ha chiari gli obiettivi e i tempi
2. **Definizione e coinvolgimento degli stakeholder** — si identificano tutti coloro che hanno interessi nel progetto e si avvia il loro _engagement_ (coinvolgimento attivo)

#### Lo stakeholder engagement

Il termine _engagement_ va inteso come **coinvolgimento attivo**, non come semplice consultazione. Non significa fare sondaggi o comunicare decisioni già prese: significa dialogare, confrontarsi, ascoltare, prendere impegni.

Gli ingegneri del software devono avviare un processo di dialogo interattivo per:

- confrontare le diverse aspettative di ciascun attore
- far emergere il punto di vista di chi operativamente esegue le attività (spesso diverso da quello del management)
- far sentire gli attori parte integrante del gruppo di lavoro

È altrettanto importante selezionare gli stakeholder garantendo **rappresentatività e inclusività**, così che il processo produca risultati utili per la definizione dei requisiti.

La raccolta dei requisiti dagli stakeholder è anche chiamata **requirements elicitation** e richiede di conoscere tutti i "punti di vista" (_viewpoint_) del sistema, cioè analizzarlo dalla prospettiva di tutti i suoi possibili utilizzatori.

---

### Tecniche di esplorazione
Di seguito una tabella che riassume le tecniche principali di raccolta dei requisiti usate nella fase di esplorazione.
Dopo la tabella vi sono gli approfondimenti di ogni tecnica.

|Tecnica|Obiettivo|Vantaggi|Svantaggi|
|---|---|---|---|
|**Interviste individuali**|Esplorare aspetti specifici e punti di vista particolari|L'intervistatore guida il dialogo verso le aree più produttive|Richiedono molto tempo; gli intervistati potrebbero essere reticenti su aspetti delicati|
|**Focus group**|Mettere a fuoco un argomento con diversi punti di vista|Fanno emergere aree di consenso e conflitto; possono generare soluzioni condivise|Richiedono un mediatore esperto; figure dominanti possono monopolizzare la discussione|
|**Osservazioni sul campo**|Comprendere il contesto operativo reale dell'utente|Danno una consapevolezza sull'uso reale che nessuna altra tecnica offre|Difficili da realizzare, richiedono molto tempo e risorse|
|**Suggerimenti spontanei**|Individuare esigenze di miglioramento non anticipate|Bassi costi di raccolta; molto specifici|Carattere episodico, non sistematico|
|**Questionari**|Rispondere a domande specifiche su grande scala|Raggiungono molte persone con poco sforzo|Vanno progettati con cura; tasso di risposta basso; attendibilità generalmente bassa|
|**Analisi della concorrenza**|Identificare le best practice del settore|Evita di "reinventare la ruota"; fornisce vantaggio competitivo|L'analisi è costosa in tempo e risorse|
|**Scenari e casi d'uso**|Descrivere ogni singola operazione che il sistema deve compiere|Riutilizzabili nella fase di collaudo per verificare le funzionalità|Gli intervistati spesso non riescono a descrivere le criticità|

#### Interviste individuali

La migliore fonte di requisiti è l'**intervista individuale**. Si inizia dal committente (che conosce gli obiettivi e i tempi), che poi indica gli stakeholder più significativi per ogni categoria di personale.

Più persone vengono intervistate, più informazioni si raccolgono — ma anche più contraddizioni, perché ciascuno vede il sistema dal proprio punto di vista.

**Modalità di individuazione degli attori (campione di domande):**

- Chi o cosa usa il sistema? Che compito svolge?
- Chi ottiene informazioni dal sistema e chi gliene fornisce?
- Quali gruppi di utenti eseguono le funzioni principali? E quelle secondarie?
- Sono presenti funzioni eseguite a intervalli prestabiliti o da una sola persona?
- Chi sono gli attori esterni all'organizzazione?
- Con quali sistemi hardware o software il sistema interagisce?

#### Livelli di strutturazione delle interviste:
Le interviste possono avere diversi livelli di strutturazione

|Tipo|Caratteristiche|Quando usarla|
|---|---|---|
|**Non strutturata**|Domande aperte prestabilite, con possibilità di approfondire liberamente|All'inizio, per esplorare il dominio in modo ampio|
|**Strutturata**|Domande specifiche a risposta chiusa, simile a un questionario orale|Quando si vogliono dati statistici su requisiti già identificati|
|**Semi-strutturata**|Misto: domande aperte e domande specifiche|Il caso più comune; bilancia flessibilità e sistematicità|

> **Domande tipiche per una intervista non strutturata:**
> 
> - Quali sono le attività che svolgi regolarmente?
> - Descrivi il flusso normale delle tue attività.
> - Cosa può andar male nell'esecuzione normale?
> - Cosa non funziona nel sistema attuale?
> - Come intendi usare il nuovo sistema?
> - Cosa ti aspetti quando il sistema parte?

> ⚠️ La maggiore difficoltà è identificare i **requisiti impliciti**: le cose che le persone considerano ovvie e non dicono, o le discrepanze tra come le attività "dovrebbero" essere svolte in teoria e come vengono svolte in pratica.

#### Questionari

Utili per raccogliere informazioni in modo strutturato su grandi numeri di utenti. Tipicamente usano la **scala di Likert** (5 livelli: completamente d'accordo → completamente in disaccordo), che permette di calcolare medie e fare analisi statistiche.

Limite principale: l'**attendibilità è generalmente bassa**, e devono essere progettati con estrema cura per produrre risposte utili. Vengono usati principalmente in fase di consuntivazione (giudizio sul sistema appena realizzato).

**Esempio — Questionario per la valutazione di un sistema di e-commerce**

Per ciascuna affermazione indicare il proprio grado di accordo: **1** = Completamente in disaccordo  **5** = Completamente d'accordo

|#|Affermazione|1|2|3|4|5|
|---|---|:-:|:-:|:-:|:-:|:-:|
|1|Trovare un prodotto nel catalogo è semplice e veloce|○|○|○|○|○|
|2|Il processo di acquisto è chiaro e guidato|○|○|○|○|○|
|3|Le informazioni sul prodotto sono complete e accurate|○|○|○|○|○|
|4|Il sistema risponde rapidamente alle mie azioni|○|○|○|○|○|
|5|Mi sento sicuro inserendo i dati della mia carta di credito|○|○|○|○|○|
|6|Userei di nuovo questo sistema per i miei acquisti|○|○|○|○|○|

_Domande aperte (facoltative):_

- Qual è la cosa che trovi più difficile da fare nel sistema?
- C'è qualche funzionalità che ti aspettavi di trovare e non hai trovato?

La media delle risposte a domande 1–3 misura l'**usabilità**, la domanda 4 le **prestazioni percepite**, la domanda 5 la **sicurezza percepita**, la domanda 6 la **soddisfazione generale**.

#### Focus group

Interviste di gruppo gestite come **brainstorming**: si parte da un singolo argomento e si fa esprimere tutti i partecipanti, cercando punti di consenso e di contrasto.

Il mediatore deve gestire il gruppo evitando che la discussione degeneri e che figure dominanti monopolizzino il dialogo.

> **Esempio — Traccia per un focus group su un sistema di gestione contravvenzioni (Comune di XYZ)**
> 
> _Partecipanti:_ 6 vigili urbani (utenti finali), 1 funzionario amministrativo, 1 mediatore (analista)
> 
> _Durata prevista:_ 90 minuti
> 
> **Apertura (10 min)** Il mediatore introduce l'obiettivo: raccogliere feedback sul prototipo del nuovo sistema di gestione contravvenzioni da palmare.
> 
> **Tema 1 — Operatività sul campo (25 min)**
> 
> - _Domanda di avvio:_ "Descrivete come emettete una contravvenzione oggi, passo per passo."
> - _Stimolo:_ "Cosa è più lento o scomodo nell'attuale procedura?"
> - _Conflitto atteso:_ i vigili anziani preferiscono la scheda cartacea, i più giovani vogliono tutto digitale → il mediatore fa emergere e registra entrambe le posizioni.
> 
> **Tema 2 — Requisiti del palmare (25 min)**
> 
> - _Domanda di avvio:_ "Quali informazioni dovete inserire obbligatoriamente per ogni infrazione?"
> - _Stimolo:_ "Cosa succede se il palmari non ha campo? Come gestite oggi questa situazione?"
> - _Punto critico da esplorare:_ sincronizzazione offline/online — requisito emerso spesso in questi contesti.
> 
> **Tema 3 — Notifica al cittadino (20 min)**
> 
> - _Domanda di avvio:_ "Quante volte capita che l'indirizzo del proprietario del veicolo non sia aggiornato?"
> - _Stimolo:_ "Preferireste che il sistema verificasse i dati in tempo reale con il PRA?"
> 
> **Chiusura (10 min)** Il mediatore riepiloga i punti emersi e chiede conferma: "Ho capito bene che il punto più critico è la gestione offline?"
> 
> _Output del focus group:_ verbale con requisiti emersi, punti di consenso, punti di disaccordo non risolti da sottoporre al committente.

#### Osservazioni sul campo

Consiste nell'affiancare l'utente nelle sue attività quotidiane. Utile perché:

- l'utente spesso fatica a descrivere il proprio lavoro a parole
- molte criticità emergono solo osservando il lavoro reale
- si scoprono dettagli che l'utente dà per scontati

Limite: è onerosa, richiede tempo, e tende a fotografare le funzioni _già esistenti_ — difficilmente suggerisce funzionalità nuove.

#### Analisi della concorrenza e delle best practice

Confrontarsi con prodotti simili già presenti sul mercato è fondamentale: permette di trarre indicazioni preziose, comparare prezzi, punti di forza e debolezze dei concorrenti.

> **Best practice** — Il termine rientra nel concetto di _benchmarking_: identificare, comprendere e adattare le pratiche di eccellenza usate da altre organizzazioni per migliorare la propria.

Va fatta all'inizio del progetto, appena definiti gli obiettivi essenziali, e i risultati devono essere mostrati agli stakeholder per valutarne l'applicabilità al contesto specifico.

#### Scenari e casi d’uso

Gli **scenari** e i **casi d’uso** sono tecniche utilizzate per descrivere il comportamento di un sistema dal punto di vista degli utenti.

Uno **scenario** è una sequenza concreta di azioni che descrive una situazione reale.

> Esempio: uno studente prende in prestito un libro in biblioteca e il sistema registra l’operazione.

Un **caso d’uso** è una descrizione più generale che raccoglie più scenari con lo stesso obiettivo.

> Esempio: _Effettuare prestito libro_

Un caso d’uso può includere:

- flusso principale (scenario normale)
- scenari alternativi
- scenari di errore

> Esempio: _Prenotare un viaggio_
> 
> Scenario principale:
> 
> 1. Il cliente sceglie un viaggio
> 2. Il sistema mostra disponibilità
> 3. Il cliente conferma
> 4. Il sistema registra la prenotazione

Seguono più dettagli nei paragrafi successivi.

---

### Problemi nella fase di esplorazione

La fase di esplorazione è tra le più delicate di tutto il processo software. I problemi tipici si classificano in quattro categorie:

|Tipo|Descrizione|
|---|---|
|**Problemi di ambito**|È difficile calibrare il giusto livello di dettaglio: troppo superficiale si perdono dettagli critici, troppo approfonditi si esce dalle competenze dello stakeholder interrogato|
|**Problemi di comprensione**|Gli stakeholder usano un gergo tecnico diverso da quello degli sviluppatori; tendono a dare per scontate le cose ovvie e a non pesare correttamente le proprie richieste in termini di complessità e costo|
|**Problemi di conflitto**|Lo stesso requisito può essere descritto in modo incompatibile da stakeholder diversi. I conflitti devono emergere in questa fase, non durante lo sviluppo|
|**Problemi di volatilità**|I requisiti cambiano durante il progetto per ragioni esterne (nuove leggi, mercato, tecnologia) o interne (cambio del management, ristrutturazioni aziendali). Questo è **normale** e va gestito, non ignorato|

#### La metafora dell'altalena

Una delle immagini più efficaci per capire i problemi di comunicazione nella raccolta dei requisiti è la cosiddetta **metafora dell'altalena**: 


![[Media/altalena.png]]

Questo illustra come ogni passaggio nella catena di comunicazione introduce possibilità di fraintendimento, e perché è essenziale **coinvolgere il cliente in modo continuativo** lungo tutto il progetto.

---

### Mettiti alla prova

Si vuole realizzare un sistema per la gestione di un'agenzia turistica che:

- propone viaggi e crociere organizzate da terzi
- esegue operazioni di biglietteria (aerea, navale, ferroviaria)
- progetta viaggi personalizzati per gruppi di almeno 15 persone

Vincoli: sistema installato sia in sede che online; solo gli impiegati possono effettuare tutte le operazioni; non sono ammessi pagamenti in contanti.

Richiesto:

1. Individuare gli stakeholder
2. Specificare i requisiti usando almeno tre tecniche di esplorazione
3. Classificare i casi d'uso distinguendo operazioni in presenza da operazioni online
4. Identificare eventuali conflitti tra requisiti

---

### Verifica di fine Lezione 2

#### Scelta multipla

1. Quale tra le seguenti **non** è un'attività dell'ingegneria dei requisiti? a) Raccolta   b) Collaudo   c) Analisi   d) Documentazione SRS
    
2. Quale **non** è una tipologia di progetto? a) Greenfield engineering   b) Reverse engineering   c) Re-engineering   d) Interface engineering
    
3. Quale tecnica fa emergere aree di conflitto tra stakeholder? a) Interviste individuali   b) Focus group   c) Osservazioni sul campo   d) Questionari
    
4. Quale tecnica richiede più tempo? a) Questionari   b) Suggerimenti spontanei   c) Osservazioni sul campo   d) Focus group
    

#### Vero/Falso

1. Se esiste già nella azienda un sistema da riprogettare si parla di re-engineering.
2. Il termine legacy indica qualcosa di valore ereditato dal passato.
3. Nell'informatica, legacy significa semplicemente "vecchio e da buttare".
4. Con Stakeholder Engagement si intende la semplice scelta degli attori.
5. La raccolta dei requisiti può avvenire tramite sondaggio.
6. La migliore fonte per reperire requisiti sono le interviste individuali.
7. Le interviste agli stakeholder devono sempre essere strutturate.
8. L'attendibilità delle risposte ai questionari è generalmente alta.
9. I requisiti individuati non rimangono stabili per tutto il ciclo di vita del progetto.
10. I requisiti non possono variare durante la fase di analisi.

<details> <summary>📋 Risposte</summary>

1. **Vero** — il re-engineering riguarda esattamente la riprogettazione di un sistema esistente.
2. **Vero** — legacy viene dal latino _legatum_ (lascito, eredità) e in informatica indica un sistema di valore consolidato ereditato dal passato.
3. **Falso** — legacy non significa vecchio e da buttare, ma un sistema su cui l'azienda continua a fare affidamento.
4. **Falso** — l'engagement è il _coinvolgimento attivo_ degli stakeholder nel processo, non la loro semplice identificazione.
5. **Vero** — i questionari sono una delle tecniche di esplorazione, anche se con bassa attendibilità.
6. **Vero** — le interviste individuali sono considerate la fonte migliore per raccogliere requisiti.
7. **Falso** — le interviste possono essere non strutturate, strutturate o semi-strutturate a seconda del contesto.
8. **Falso** — l'attendibilità dei questionari è generalmente bassa.
9. **Vero** — i requisiti sono volatili e cambiano per eventi interni ed esterni all'organizzazione.
10. **Falso** — i requisiti possono cambiare anche durante la fase di analisi; gestire questa volatilità è parte del lavoro dell'analista.

</details>

---

## Lezione 3 — Attori, casi d'uso e scenari

> **In questa lezione impareremo:**
> 
> - a identificare gli attori e i casi d'uso di un sistema
> - a descrivere gli scenari d'uso
> - a rappresentare i casi d'uso in UML e a documentarli con lo schema di Jacobson

---

### Introduzione

I requisiti funzionali descrivono il comportamento atteso del sistema in termini di servizi e funzioni. Il modo più efficace per rappresentarli è attraverso i **casi d'uso** (use case), usati nel modello classico. La metodologia agile usa invece le **user stories**, che vedremo nella parte finale della lezione.

L'approccio base è semplice: si descrive il sistema come una **scatola nera** (black box), senza specificare come il comportamento viene realizzato internamente. Si risponde a due domande:

- **Chi interagisce con il sistema?** → _attori_
- **Cosa fanno?** → _casi d'uso_

---

### Attore (actor)

> **Definizione — Attore**
> 
> Un attore specifica un ruolo assunto da un utente o da un'altra entità che interagisce con il sistema nell'ambito di un'unità di funzionamento (caso d'uso).

Un attore non è necessariamente una persona fisica. Può essere:

- un singolo utente o una classe omogenea di utenti
- un "ruolo" che diversi utenti possono svolgere
- un altro sistema software o hardware che interagisce con quello in sviluppo
- un processo automatico che si attiva a intervalli prestabiliti (trigger temporale)

Nel diagramma UML gli attori non umani (altri sistemi) vengono indicati con l'etichetta `<<sistema>>` al posto del nome.

Gli attori eseguono i casi d'uso. Nella fase di analisi si cercano prima gli attori, poi per ciascuno di essi si descrivono i casi d'uso corrispondenti.

---

### Caso d'uso (use case)

> **Definizione — Use case** _(Ivar Jacobson, 1992)_
> 
> Un caso d'uso è una sequenza di transazioni in un sistema il cui compito è di conseguire un risultato di valore misurabile per un singolo attore del sistema.

In parole più semplici: un caso d'uso descrive **un'interazione completa tra un attore e il sistema**, con un obiettivo preciso. Rappresenta _cosa_ ci si aspetta dal sistema ("what?"), non come lo fa.

Un caso d'uso:

- è **avviato da un attore** con un obiettivo specifico
- si **conclude con successo** quando l'obiettivo è raggiunto
- può avere **scenari alternativi** (percorsi diversi dallo scenario principale)

> **Esempio — Negozio online**
> 
> Casi d'uso identificati:
> 
> - registrare un nuovo utente
> - modificare i dati di un utente
> - acquistare un prodotto
> - ricercare un prodotto nel catalogo
> - inserire un nuovo prodotto in catalogo
> - modificare i dati di un prodotto

Attori e loro casi d'uso:

|Attore|Casi d'uso|
|---|---|
|Utente visitatore|Ricercare un prodotto, Registrarsi|
|Utente registrato|Ricercare un prodotto, Modificare i dati, Acquistare un prodotto|
|Amministratore del sistema|Inserire nuovo prodotto, Modificare prodotto|
|Sistema bancario|Regolare l'acquisto (attore secondario)|

Quando un caso d'uso coinvolge più attori, quello che persegue l'obiettivo del caso d'uso è l'**attore principale**. In "Acquistare un prodotto", l'utente registrato è l'attore principale, il sistema bancario è l'attore secondario.

---

### Scenario

> **Definizione — Scenario**
> 
> Uno scenario è una **specifica istanza** di un caso d'uso: descrive un particolare percorso di esecuzione, con valori concreti, che porta a un esito specifico (successo o fallimento).

Per descrivere completamente un caso d'uso bisogna individuare tutti i suoi scenari significativi:

- lo **scenario principale** (basic flow o "happy path"): il caso di successo, quello che si verifica nella grande maggioranza delle volte
- gli **scenari alternativi** (alternative flows): percorsi alternativi validi
- le **eccezioni** (exceptional flows): cosa succede quando qualcosa va storto

> **Esempio — Acquisto di un prodotto (negozio online)**
> 
> Scenario principale (successo): Il cliente naviga nel catalogo, aggiunge articoli al carrello, inserisce i dati di spedizione e della carta di credito, il sistema autorizza il pagamento e conferma l'ordine.
> 
> Scenario alternativo 1 — Carta di credito scaduta: Tutto come sopra fino alla verifica della carta; il sistema rileva che è scaduta e invia una e-mail con la segnalazione del problema.
> 
> Scenario alternativo 2 — Credito insufficiente: Come sopra, ma il sistema rileva credito esaurito e lo comunica al cliente.

Uno scenario può essere descritto anche come un "dialogo" tra sistema e attore:

```mermaid
sequenceDiagram
    actor Cliente
    participant Sistema

    Cliente->>Sistema: Richiede l'elenco dei prodotti
    Sistema-->>Cliente: Propone i prodotti disponibili

    Cliente->>Sistema: Sceglie i prodotti desiderati
    Sistema-->>Cliente: Fornisce il costo totale

    Cliente->>Sistema: Conferma l'ordine
    Sistema-->>Cliente: Comunica l'accettazione dell'ordine
```

#### Tipi di scenari

| Tipo                    | Quando si usa                  | Scopo                                                                                                                                       |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **As-is scenario**      | Nel re-engineering             | Descrive come funziona il sistema _attuale_, per capire da dove si parte                                                                    |
| **Visionary scenario**  | In greenfield o re-engineering | Descrive il sistema _futuro desiderato_, tipicamente proposto dal committente                                                               |
| **Evaluation scenario** | Prima del collaudo             | Descrive i task su cui sarà valutato il sistema; usato anche per i test                                                                     |
| **Training scenario**   | Dopo il rilascio               | Tutorial passo-passo per i nuovi utenti per imparare i corretti passaggi per utilizzare il sistema per raggiungere un determinato obiettivo |

#### Individuazione degli scenari

Domande utili per identificare gli scenari:

- Quali sono i compiti primari che ciascun attore vuole che il sistema esegua?
- Quali dati saranno creati, letti, modificati, cancellati?
- Di quali eventi esterni l'attore deve informare il sistema? Con quale frequenza?
- Di quali cambiamenti o eventi il sistema deve informare l'attore?

Se il sistema già esiste (re-engineering o interface engineering), gli scenari si ricavano osservando il sistema esistente. Se il sistema è nuovo (greenfield), il processo è iterativo: si abbozza, si discute col cliente, si raffina.

> ⚠️ Attenzione: negli scenari si descrivono le **interazioni** generate dal sistema, non le attività interne o il modo in cui vengono svolte.

---

### Descrizione dei casi d'uso in UML

I casi d'uso si rappresentano con il **Use Case Diagram (UCD)** di UML:

> [!info]
> Per limiti tecnici di questo sito, i diagrammi qui sono simili e replicati nel linguaggio Mermaid e non in UML puro, ma rendono l'idea.


> [!danger] Attenzione
> A causa di un bug di Mermaid, i collegamenti senza direzione sono indicati con due punte di frecce.


- **Attori** → omini stilizzati con il nome sotto (o `<<sistema>>` per attori non umani)
- **Casi d'uso** → ellissi con il nome all'interno
- **Associazione** → segmento che collega attore e caso d'uso
- **Sistema** → rettangolo che racchiude tutti i casi d'uso, con il nome del sistema

La freccia nell'associazione indica l'attore principale solo quando c'è ambiguità tra più attori; di norma non si usa.

Un diagramma che mostra _tutti_ i casi d'uso del sistema si chiama **diagramma di contesto**: indica i confini del sistema e tutti gli attori che lo utilizzano.

#### Notazione grafica UML — elementi base
```mermaid
flowchart LR
    AH[Attore umano] <---> UC((Caso d'uso))
    SE[Sistema esterno] <---> UC
    subgraph S[Sistema]
        UC
    end
```

#### Esempio completo — Diagramma di contesto negozio online
```mermaid
flowchart LR
    UV[Utente visitatore]
    UR[Utente registrato]
    A[Amministratore]
    SB[Sistema bancario]

    subgraph NO[Negozio Online]
        UC1((Ricerca prodotto))
        UC2((Registra nuovo utente))
        UC3((Acquista prodotto))
        UC4((Visualizza profilo utente))
        UC5((Inserisci nuovo prodotto))
        UC6((Modifica prodotto))
    end

    UV <---> UC1
    UV <---> UC2

    UR <---> UC1
    UR ---> UC3
    UR <---> UC4

    A <---> UC5
    A <---> UC6

    UC3 ---> SB
```

### Relazioni tra casi d'uso

Nella stesura degli use case si applica la metodologia **top-down**: prima una descrizione ad alto livello, poi raffinamenti successivi. In questo processo si possono identificare relazioni tra casi d'uso riutilizzabili.

Esistono tre tipi di relazioni:

#### 1. Inclusione `<<include>>`

Si usa quando una sequenza di passi è **comune a più casi d'uso** e il suo utilizzo è **sempre obbligatorio**. Si isola quella sequenza in un caso d'uso separato che viene "incluso" dagli altri.

La freccia tratteggiata va **dal caso che include verso il caso incluso** (dal caso più esterno verso il caso comune).

```mermaid
flowchart LR
    U1((Acquista prodotto))
    U2((Verifica stato ordine))
    U3((Autenticazione))

    U1 -. &lt;&lt;include&gt;&gt; .-> U3
    U2 -. &lt;&lt;include&gt;&gt; .-> U3
```

Lettura: "Acquista prodotto _include sempre_ Autenticazione."

> ⚠️ Errore tipico: mettere la freccia al contrario. Deve andare dal caso _esterno_ al caso _comune_, non viceversa.

```mermaid
flowchart LR
    UC1((Caso esterno))
    UC2((Caso comune))

    UC1 -. &lt;&lt;include&gt;&gt; .-> UC2
```

#### 2. Estensione `<<extend>>`

Si usa per aggiungere **comportamento opzionale o alternativo** a un caso d'uso esistente, senza modificarlo. Il caso esteso è come il caso originale "con qualcosa in più".

La freccia tratteggiata va **dal caso variante verso il caso standard**.

```mermaid
flowchart LR
    U1((Help on Line))
    U2((Acquista prodotto))

    U1 -. &lt;&lt;extend&gt;&gt; .-> U2
```

Lettura: "Help on Line _estende_ Acquista prodotto."

> ⚠️ Anche qui, errore tipico: la freccia va dal caso _variante_ al caso _standard_, non viceversa.

```
  ✅ CORRETTO:   ( Caso variante ) - - -<<extend>>- - → ( Caso standard )
  ❌ SBAGLIATO:  ( Caso standard ) - - -<<extend>>- - → ( Caso variante )
```

**Regola pratica per scegliere:**

- usa `<<include>>` quando il comportamento è **sempre** richiesto ed è già descritto in un altro caso d'uso
- usa `<<extend>>` quando il comportamento è **opzionale** o rappresenta una variazione eccezionale

#### 3. Generalizzazione

Come l'ereditarietà nelle classi OOP: un caso d'uso figlio **eredita** il comportamento del padre e aggiunge le proprie caratteristiche. Si applica la relazione IS-A: dove si può usare il padre, si può usare il figlio.

La freccia **continua con triangolo aperto** va dal figlio al padre (come in UML per le classi).

```mermaid
flowchart LR
    U0((Acquista prodotto))
    U1((Acquista libro))
    U2((Acquista CD))

    U1 --> U0
    U2 --> U0
```

Posso generalizzare anche gli attori:

```mermaid
flowchart LR
    C[Cliente]
    CP[Cliente privato]
    DP[Ditta con P.IVA]

    CP -->C
    DP --> C
```

---

### Documentazione dei casi d'uso (schema di Jacobson)

Ogni caso d'uso del diagramma va corredato da una **scheda descrittiva**, comprensibile anche a chi non ha conoscenze informatiche. Si usa il linguaggio naturale.

| **Sezione**               | **Campo**                             | **Contenuto / Descrizione**                                                                                                                                     |
| ------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Informazioni generali** | Nome del caso d’uso                   | `<xyz>`                                                                                                                                                         |
|                           | Descrizione                           | `<operazione effettuata>`                                                                                                                                       |
|                           | Scopo                                 | `<sintesi dell’attività>`                                                                                                                                       |
|                           | Attori                                | `<descrizione degli attori coinvolti nel caso d’uso>`                                                                                                           |
|                           | Attore primario                       | `<se un attore ha prevalenza sugli altri sull’esito del caso d’uso>`                                                                                            |
|                           | Use Case d’extend                     | `<use case che potrebbe seguire a quello corrente>`                                                                                                             |
|                           | Scenario principale                   | `<nome dello scenario principale>`                                                                                                                              |
| **Scenario principale**   | 1. Entry condition (precondizione)    | È un vincolo che il sistema deve rispettare affinché il caso d’uso possa iniziare; si incomincia con _“questo caso d’uso inizia quando…”_                       |
|                           | 2. Flusso di eventi                   | `<descrizione in linguaggio naturale informale>`                                                                                                                |
|                           | 3. Exit condition (postcondizione)    | È una condizione verificata quando il caso d’uso termina (può variare in base allo scenario effettivo); si incomincia con _“questo caso d’uso termina quando…”_ |
| **Scenari alternativi**   | Scenari alternativi                   | `<descrizione delle modalità alternative di esecuzione del caso>`                                                                                               |
|                           | 1. Flussi alternativi                 | `<descrizione di cosa accade in tutte le situazioni di errore, cioè quando non va a buon fine il caso principale>`                                              |
|                           | 2. Eccezioni                          | `<descrizione di cosa accade in tutte le situazioni di errore, cioè quando non va a buon fine il caso principale>`                                              |
| **Altri attributi**       | Requisiti speciali                    | `<sono eventuali requisiti non funzionali (cioè non relativi alle funzionalità del sistema nell’assolvere al caso d’uso) e i vincoli>`                          |
|                           | Extension Points                      | `<sono relazioni con eventuali altri casi d’uso correlati>`                                                                                                     |
|                           | Frequenza stimata di utilizzo         | `<per decidere le priorità nel piano di sviluppo>`                                                                                                              |
|                           | Criticità                             | `<per stimare il rischio legato al requisito>`                                                                                                                  |
|                           | Specializza il caso d’uso (opzionale) | `<nome del caso d’uso generico del quale il caso d’uso corrente costituisce una specializzazione>`                                                              |
|                           | Generalizza il caso d’uso (opzionale) | `<nome del caso d’uso specifico del quale il caso d’uso corrente costituisce una generalizzazione>`                                                             |


**Esempio completo — Acquisto di uno o più prodotti (negozio online)** 

| **Sezione**               | **Campo**                          | **Contenuto**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Informazioni generali** | Nome del caso d’uso                | **Acquisto di uno o più prodotti**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                           | Descrizione                        | Un utente registrato effettua un acquisto online                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                           | Scopo                              | Scelta prodotto, aggiornamento carrello, pagamento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                           | Attori                             | Utente, Sistema bancario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                           | Attore principale                  | Utente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                           | Use Case d’extend                  | Organizzazione spedizione prodotti, fatturazione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                           | Scenario principale                | Acquisto andato a buon fine                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Scenario principale**   | 1. Entry condition (precondizione) | Per poter fare un acquisto online l’utente deve essere registrato                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                           | 2. Flusso di eventi                | 1) Il cliente ricerca nel catalogo e inserisce nel carrello uno o più articoli.2) Il cliente va “alla cassa”.3) Il sistema presenta il conto degli articoli selezionati.4) Il cliente inserisce le informazioni per la spedizione (indirizzo, tempo di consegna).5) Il sistema fornisce il conto totale, comprese le spese di spedizione.6) Il cliente inserisce le informazioni riguardo la sua carta di credito.7) Il sistema autorizza l’acquisto.8) Il sistema conferma il perfezionamento con successo dell’ordine.9) Il sistema invia una e-mail di conferma dell’acquisto all’indirizzo indicato dal cliente. |
|                           | 3. Exit condition (postcondizione) | Se il cliente conferma l’ordine esso viene passato al magazzino, se invece l’utente lo annulla il sistema rimane inalterato                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Scenari alternativi**   | 1. Flussi alternativi              | Nessuno                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                           | 2. Eccezioni                       | **Eccezione a)** Carta di credito non valida:- Il sistema al passo 7 non autorizza l’acquisto.- Il sistema avverte l’utente e gli consente di reinserire i dati.**Eccezione b)** Credito esaurito:- Il sistema al passo 7 non autorizza l’acquisto.- Il sistema avverte l’utente e gli consente di inserire i dati di una diversa carta.**Eccezione c)** Collegamento con i servizi interbancari interrotto:- Il sistema salva il carrello dell’utente.- Invita a riprovare a perfezionare l’ordine in seguito.**Eccezione d)** <altre situazioni>                                                                   |
| **Altri attributi**       | Requisiti speciali                 | Il sistema deve garantire che l’inoltro dell’ordine al magazzino avvenga entro le 24 ore successive alla sua conferma. Gli articoli richiesti dagli utenti devono essere presenti in magazzino almeno il 90% delle volte                                                                                                                                                                                                                                                                                                                                                                                             |
|                           | Extension Points                   | Sistema di consegna della merce                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                           | Frequenza stimata di utilizzo      | Un utente al minuto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                           | Criticità                          | Tempo di risposta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

> **Consiglio di Alistair Cockburn:** Lo scenario principale non dovrebbe mai superare i 9 passi. Il vero valore di un caso d'uso sta negli scenari alternativi. Uno scenario principale da 35 passi produce un caso d'uso illeggibile che "viene soltanto firmato — di solito con sgradevoli conseguenze sul progetto, alcuni mesi più tardi."

---

### Le user stories del modello agile

Nei modelli agili i requisiti si scrivono come **user stories**, con questa struttura fissa:

```
Come <ruolo dell'attore>          → situazione (as a)
voglio <funzione desiderata>      → motivazione (i want)
in modo da <valore ottenuto>      → aspettativa (so that)
```

> **Esempio:** "Come appassionato di musica, voglio consultare il programma dei concerti, in modo da riservarmi un posto."

Le user stories sono essenzialmente casi d'uso arricchiti con la definizione del ruolo. Da ogni user story si derivano le **feature** del prodotto e i relativi test di accettazione. Per ogni story si devono considerare tutte le possibili situazioni (es. nessun posto disponibile, prezzo troppo alto, più posti vicini richiesti ecc.) e predisporre i test corrispondenti.

---

### Mettiti alla prova

1. Realizza il diagramma dei casi d'uso di un sistema di vendita online dei biglietti del treno.
2. Realizza il diagramma dei casi d'uso di un sistema di prenotazione posti per un concerto.
3. Realizza il diagramma dei casi d'uso di un sistema di vendita dischi vinile e CD, con le alternative di spedizione.

---

## Lezione 4 — La documentazione dei requisiti (SRS)

> **In questa lezione impareremo:**
> 
> - cos'è e a cosa serve il documento SRS
> - la struttura standard proposta da Sommerville (IEEE 830-1998)
> - le caratteristiche di un SRS efficace e come validarlo

---

### Generalità

Al termine della raccolta e analisi dei requisiti, si redige il documento di **Specifica dei Requisiti Software** — in inglese _Software Requirements Specification_ (**SRS**).

L'SRS è il documento ufficiale che descrive cosa lo sviluppatore deve realizzare, come risultato del lavoro di analisi condotto tra cliente, utenti e sviluppatori.

> ⚠️ **Un errore nell'SRS si propaga a tutto il sistema finale.** La rimozione di un difetto scoperto dopo il rilascio del sistema può costare fino a **100 volte** quella di un difetto individuato in fase di progettazione.

L'SRS deve rispondere a tre domande fondamentali:

|Domanda|Analisi da effettuare|
|---|---|
|_A chi è destinato il prodotto?_|Analisi degli utenti: categorie, caratteristiche, priorità|
|_Di cosa hanno bisogno?_|Analisi dei bisogni: necessità per categoria, priorità|
|_In quale contesto lo useranno?_|Analisi del contesto d'uso: situazioni d'uso per categoria|

> ⚠️ L'SRS **non descrive** dettagli progettuali o implementativi, e **non impone** vincoli aggiuntivi sulla qualità del software (quelli vanno in documenti specifici separati).

---

### Struttura dell'SRS — Standard IEEE 830-1998

Lo standard più diffuso è lo **IEEE Std 830-1998** (_Recommended Practice for Software Requirements Specifications_). La struttura proposta da Sommerville che si ispira a questo standard è:

```
1  INTRODUZIONE
   1.1 Scopo del documento dei requisiti
   1.2 Scopo del prodotto
   1.3 Glossario (definizioni, acronimi, abbreviazioni)
   1.4 Riferimenti
   1.5 Overview dell'intero documento

2  DESCRIZIONE GENERALE
   2.1 Prospettive sul prodotto (contesto d'uso)
   2.2 Funzioni del prodotto (riepilogo ad alto livello)
   2.3 Caratteristiche degli utenti
   2.4 Vincoli generali
   2.5 Assunzioni e dipendenze

3  REQUISITI SPECIFICI
   3.1 Requisiti funzionali (requisiti utente)
   3.2 Requisiti non funzionali (requisiti utente)
   3.3 Architettura: strutturazione in sottosistemi
   3.4 Specifiche dei requisiti di sistema
   3.5 Modelli del sistema
   3.6 Evoluzione del sistema

4  APPENDICI
   4.1 Piattaforma hardware
   4.2 Requisiti di database
   4.3 Piani di test

5  INDICI
```

**Termini IEEE usati nel documento:**

|Termine|Significato|
|---|---|
|**Contratto** (Contract)|Documento legale tra committente e fornitore; l'SRS ne è parte integrante|
|**Committente** (Customer)|Chi paga il prodotto e tipicamente decide i requisiti|
|**Fornitore** (Supplier)|Chi sviluppa il prodotto per il committente|
|**Utente** (User)|Chi usa direttamente il sistema (spesso coincide col committente)|

#### Descrizione delle funzionalità (sezione 3.1)

Per ogni funzionalità si specificano: utenti che la utilizzano, descrizione sintetica, precondizioni, input, elaborazione, output.

---

#### Esempio di SRS parziale compilato — Sistema negozio online

Di seguito è riportata la compilazione delle prime due sezioni dell'SRS per il sistema negozio online usato come filo conduttore nelle lezioni precedenti. Questo è l'aspetto che ha un documento reale.

---

```
DOCUMENTO DI SPECIFICA DEI REQUISITI SOFTWARE (SRS)
Sistema: Negozio Online "ShopFacile"
Versione: 1.2
Data: 15/03/2024
Redatto da: Mario Rossi (Analista), Anna Bianchi (Analista junior)
Approvato da: Luca Verdi (Project Manager)
Stato: In revisione con il cliente
```

---

**1. INTRODUZIONE**

**1.1 Scopo del documento**

Questo documento descrive i requisiti software del sistema di commercio elettronico "ShopFacile" commissionato da RetailSrl. Costituisce il riferimento tecnico per lo sviluppo, il collaudo e l'accettazione del sistema e forma parte integrante del contratto stipulato tra RetailSrl (committente) e DevHouse srl (fornitore).

**1.2 Scopo del prodotto**

ShopFacile è una piattaforma web di commercio elettronico che consente a RetailSrl di vendere i propri prodotti online. Il sistema deve permettere ai clienti di navigare il catalogo, effettuare acquisti e gestire i propri ordini. Deve permettere agli amministratori di gestire catalogo, magazzino e clienti.

**1.3 Glossario**

|Termine|Definizione|
|---|---|
|Utente visitatore|Persona che accede al sito senza essere autenticata|
|Utente registrato|Cliente con account attivo, autenticato nel sistema|
|Amministratore|Dipendente di RetailSrl con accesso al pannello di gestione|
|Carrello|Area temporanea dove l'utente raccoglie i prodotti prima dell'acquisto|
|Ordine|Acquisto confermato dall'utente e accettato dal sistema|
|SKU|Stock Keeping Unit — codice univoco che identifica ogni prodotto|
|PG|Passerella di pagamento (Payment Gateway) — servizio esterno di pagamento|

**1.4 Riferimenti**

- Verbale di analisi del 02/03/2024 con il committente
- Catalogo prodotti RetailSrl v3.1 (allegato A)
- Documentazione API del Payment Gateway Stripe v2023-10

**1.5 Overview del documento**

La sezione 2 descrive il sistema nel suo contesto. La sezione 3 contiene i requisiti specifici, organizzati per funzionalità (3.1), requisiti non funzionali (3.2) e architettura di massima (3.3).

---

**2. DESCRIZIONE GENERALE**

**2.1 Prospettive sul prodotto**

ShopFacile si interfaccia con tre sistemi esterni:

- **Payment Gateway (Stripe)**: per la gestione dei pagamenti con carta di credito
- **Sistema gestionale RetailSrl (SAP)**: per la sincronizzazione del magazzino
- **Servizio e-mail (SendGrid)**: per le notifiche agli utenti

```mermaid
flowchart LR
    U[Utente]
    Stripe[Stripe]
    SAP[SAP]
    SendGrid[SendGrid]

    subgraph ShopFacile
        Catalogo[Catalogo]
        Carrello[Carrello]
        Ordini[Ordini]
        Utenti[Utenti]
        Admin[Admin]
    end

    U --> Catalogo
    U --> Carrello
    U --> Ordini
    U --> Utenti
    U --> Admin

    Ordini -->|pagamenti| Stripe
    Catalogo -->|magazzino| SAP
    Ordini -->|notifiche| SendGrid
    Utenti -->|e-mail account| SendGrid
```

**2.2 Funzioni del prodotto (riepilogo)**

|Area|Funzioni principali|
|---|---|
|Catalogo|Navigazione per categoria, ricerca, scheda prodotto|
|Carrello|Aggiunta/rimozione prodotti, calcolo totale|
|Checkout|Inserimento dati spedizione, pagamento, conferma ordine|
|Account utente|Registrazione, login, storico ordini, modifica dati|
|Amministrazione|Gestione prodotti, ordini, clienti, report vendite|

**2.3 Caratteristiche degli utenti**

|Tipo utente|Frequenza d'uso|Competenza informatica|Dispositivo tipico|
|---|---|---|---|
|Utente visitatore|Occasionale|Bassa-media|Smartphone (60%), Desktop (40%)|
|Utente registrato|Settimanale|Media|Smartphone (55%), Desktop (45%)|
|Amministratore|Quotidiana|Alta|Desktop|

**2.4 Vincoli generali**

- Il sistema deve essere accessibile tramite browser (Chrome ≥ 90, Firefox ≥ 88, Safari ≥ 14, Edge ≥ 90) senza installazione di plugin
- Il sistema deve rispettare il GDPR per il trattamento dei dati personali
- I pagamenti devono essere conformi allo standard PCI DSS
- Il sistema deve essere operativo 24 ore su 24, 7 giorni su 7

**2.5 Assunzioni e dipendenze**

- La disponibilità del Payment Gateway Stripe è garantita al 99,9% dal fornitore
- RetailSrl fornirà le credenziali di accesso al SAP entro la fase di integrazione
- Il catalogo prodotti verrà importato dal file Excel fornito da RetailSrl

---

**3. REQUISITI SPECIFICI (estratto)**

**3.1 Requisiti funzionali**

**RF-001 — Ricerca prodotto**

|Campo|Valore|
|---|---|
|Utenti|Utente visitatore, Utente registrato|
|Priorità|Alta|
|Precondizione|Nessuna|
|Input|Testo libero (nome, marca, descrizione) oppure selezione categoria|
|Elaborazione|Il sistema cerca nel catalogo i prodotti che corrispondono ai criteri. La ricerca è case-insensitive e tollera errori di battitura di 1 carattere.|
|Output|Lista di prodotti con immagine, nome, prezzo, disponibilità. Massimo 20 risultati per pagina.|
|Eccezioni|Se non ci sono risultati: messaggio "Nessun prodotto trovato" con suggerimento di categorie correlate|

**RF-002 — Aggiunta prodotto al carrello**

|Campo|Valore|
|---|---|
|Utenti|Utente visitatore, Utente registrato|
|Priorità|Alta|
|Precondizione|Il prodotto deve essere disponibile in magazzino (quantità > 0)|
|Input|SKU prodotto, quantità desiderata (default: 1)|
|Elaborazione|Verifica disponibilità in magazzino. Aggiunge il prodotto al carrello (o incrementa la quantità se già presente). Aggiorna il totale.|
|Output|Carrello aggiornato con il nuovo articolo. Messaggio di conferma.|
|Eccezioni|Quantità richiesta > disponibile: avvisa l'utente e propone la quantità massima disponibile. Prodotto già esaurito: messaggio di errore.|

**3.2 Requisiti non funzionali (estratto)**

|ID|Categoria|Requisito|Metrica|
|---|---|---|---|
|RNF-001|Prestazioni|Tempo di risposta alla ricerca|< 2 secondi nel 95% dei casi con carico di 500 utenti concorrenti|
|RNF-002|Prestazioni|Tempo di caricamento pagina prodotto|< 3 secondi su connessione 4G|
|RNF-003|Disponibilità|Uptime del sistema|≥ 99,5% mensile (esclusa manutenzione programmata)|
|RNF-004|Sicurezza|Dati carta di credito|Non memorizzati sul server; gestiti interamente da Stripe|
|RNF-005|Usabilità|Completamento acquisto senza assistenza|≥ 85% degli utenti nuovi deve completare un acquisto senza contattare il supporto|
|RNF-006|Scalabilità|Picchi di traffico|Il sistema deve reggere picchi di 2000 utenti concorrenti (es. Black Friday)|

---

> **Esempio — Inserimento articolo nel carrello (negozio online)**
> 
> **3.x Inserisci articolo nel carrello**
> 
> _Utenti:_ clienti registrati
> 
> _Introduzione:_ la funzionalità consente l'immissione di un nuovo articolo nel carrello di acquisto
> 
> _Precondizione:_ l'utente è autenticato come cliente registrato
> 
> _Input:_
> 
> - codice articolo: **obbligatorio**
> - quantità: **obbligatorio** (default: 1)
> 
> _Elaborazione:_
> 
> - si presenta una videata di ricerca articoli a più livelli
> - selezionato l'articolo, si visualizza un form di immissione
> - si legge e verifica la quantità
> - si verifica la disponibilità e si segnalano eventuali tempi di attesa
> 
> _Output:_
> 
> - aggiunta di una riga nel carrello
> - messaggio di errore se l'articolo è già presente

---

### Caratteristiche di un SRS efficace

Lo standard IEEE 830-1998 identifica le caratteristiche che deve avere un buon SRS:

|Caratteristica|Descrizione|
|---|---|
|**Correttezza**|Il sistema soddisfa pienamente ogni requisito specificato; la specifica rappresenta accuratamente ciò che il cliente vuole|
|**Completezza**|Tutti gli scenari possibili sono descritti (inclusi comportamenti eccezionali); sono presenti tutti i riferimenti a figure, tabelle, glossario|
|**Consistenza**|Nessun requisito è in conflitto con altri|
|**Coerenza**|I requisiti non si contraddicono tra loro|
|**Chiarezza**|Ogni requisito ha un'unica interpretazione possibile; nessuna ambiguità terminologica o di dettaglio|
|**Realismo**|I requisiti possono essere implementati con i vincoli e le risorse disponibili|
|**Modificabilità**|La struttura del documento permette modifiche senza riscrivere tutto (no ridondanze eccessive)|
|**Verificabilità**|Per ogni requisito esiste un test che può stabilire se il software lo soddisfa|
|**Tracciabilità**|L'origine di ogni requisito è chiara; ogni requisito ha un identificatore univoco|

#### Verificabilità — esempi

|Non verificabile ❌|Verificabile ✅|
|---|---|
|"Il programma deve funzionare bene"|"Il sistema deve rispondere a ogni richiesta in meno di 2 secondi"|
|"L'interfaccia deve essere buona"|"Il 90% degli utenti deve completare l'operazione X senza assistenza"|
|"Il tempo di risposta deve essere di norma 10 secondi"|"Il tempo di risposta all'evento X deve essere inferiore a 10 secondi nel 95% dei casi"|

#### Tracciabilità

La tracciabilità si realizza:

1. assegnando un **identificatore univoco** a ogni requisito (es. `RF-001` per funzionale, `RNF-003` per non funzionale)
2. costruendo una **matrice di tracciabilità** che collega requisiti e componenti del sistema

Un SRS è tracciabile se:

- è chiara l'origine di ogni requisito (**tracciatura all'indietro**, verso i documenti precedenti)
- ogni requisito ha un nome o un numero (**tracciatura in avanti**, verso i sviluppi futuri)

#### Esempio di matrice di tracciabilità

La matrice incrocia i requisiti (righe) con i componenti del sistema (colonne). Una cella contiene ✓ se il componente è coinvolto nella realizzazione di quel requisito.

|Requisito|Descrizione|Modulo Catalogo|Modulo Carrello|Modulo Pagamento|Modulo Utenti|Modulo Magazzino|
|---|---|:-:|:-:|:-:|:-:|:-:|
|RF-001|Ricerca prodotto per nome|✓|||||
|RF-002|Aggiunta prodotto al carrello|✓|✓|||✓|
|RF-003|Acquisto prodotto||✓|✓|✓|✓|
|RF-004|Registrazione nuovo utente||||✓||
|RF-005|Inserimento nuovo prodotto|✓||||✓|
|RNF-001|Risposta < 2 sec nel 95% dei casi|✓|✓|✓|✓|✓|
|RNF-002|Disponibilità 24/7|✓|✓|✓|✓|✓|

La matrice permette di:

- verificare che ogni requisito sia coperto da almeno un componente (completezza)
- identificare i componenti più critici (quelli con più ✓)
- gestire i cambiamenti: se un requisito cambia, si sa subito quali componenti sono impattati
- pianificare i test: ogni ✓ è un caso di test da prevedere

---

### Validazione delle specifiche

L'SRS deve evolversi insieme allo sviluppo: non è possibile specificare tutto all'inizio, e i requisiti cambiano in corso d'opera. Per questo è fondamentale **validare frequentemente** il documento con tutti gli attori (cliente, progettista, esperto di qualità, autore del documento).

Prima delle riunioni di revisione, è buona norma distribuire una copia del documento a tutti i partecipanti con sufficiente anticipo.

**Errori più frequenti negli SRS:**

|Tipo di errore|Causa|Rimedio|
|---|---|---|
|Requisiti non chiari|Male espressi o incompleti|Riscrivere i requisiti|
|Informazioni mancanti|Non raccolte durante l'analisi|Tornare dagli stakeholder|
|Conflitti tra requisiti|Contraddizioni non risolte|Negoziazione con il cliente|
|Requisiti non realistici|Richieste impossibili da soddisfare|Consultare il cliente, modificare o eliminare|

**Check list per la convalida (da sottoporre all'utente finale):**

1. Sono state definite tutte le risorse hardware?
2. È stato specificato il tempo di risposta per ogni funzione?
3. Sono state specificate tutte le interfacce esterne (hardware, software, dati)?
4. Sono state specificate tutte le funzioni richieste?
5. È possibile testare ogni requisito?
6. Sono state specificate le risposte a condizioni eccezionali?
7. È stato definito lo stato iniziale del sistema?
8. Sono state specificate le future possibili modifiche?

**Consigli per una specifica chiara:**

- evitare termini troppo generici o troppo specifici
- mantenere un livello di astrazione costante in tutto il documento
- usare sempre lo stesso termine per lo stesso concetto (evitare sinonimi e omonimi)
- usare frasi brevi e semplici con struttura uniforme
- dedicare ogni paragrafo a una singola entità, evidenziandola chiaramente

---

### Mettiti alla prova

In riferimento al sistema negozio online, descrivi le seguenti funzionalità secondo lo schema IEEE 830-1998:

- 3.e Registrazione di un nuovo cliente
- 3.f Cancellazione di un vecchio cliente
- 3.g Variazione dei dati di un cliente
- 3.h Inserimento di un nuovo articolo in magazzino
- 3.i Eliminazione di un vecchio articolo in magazzino

---

### Verifica di fine Lezione 4

#### Competenze

**1. Situazione: biblioteca scolastica**

Il sistema dovrà archiviare i dati di una biblioteca scolastica (libri, giornali, riviste, video, nastri audio, CD-ROM). Gli utenti possono cercare per titolo, autore, categoria o ISBN. Il bibliotecario può stampare l'elenco dei ritardi di consegna. L'utente viene riconosciuto tramite la stessa smart card usata per il registro presenze.

Individua e realizza i diagrammi dei casi d'uso, poi descrivi le seguenti funzionalità secondo IEEE 830-1998:

- 3.m Inserimento di una nuova categoria
- 3.n Cancellazione di un alunno
- 3.o Inserimento di un nuovo libro
- 3.p Elenco dei ritardi di consegna per una data specifica
- 3.q Elenco dei ritardi di consegna per una classe

**2. Situazione: gite scolastiche**

Il sistema gestisce itinerari (destinazione, giorni, tipo, descrizione, numero min/max partecipanti, costo, anno di corso, optional). Gestisce prenotazioni, autorizzazioni genitori, acconti. Permette cancellazioni e annullamenti motivati. Un alunno può rinunciare con documentazione medica, con ripartizione del costo sulla comitiva.

Individua e realizza i diagrammi dei casi d'uso, poi descrivi le funzionalità: 3.k, 3.l, 3.m, 3.n secondo lo schema IEEE 830-1998.

---

## Lezione 5 — Dai requisiti al codice: i principi S.O.L.I.D.

> **In questa lezione impareremo:**
> 
> - i concetti fondamentali della metodologia Agile
> - i cinque principi S.O.L.I.D. per la progettazione Object-Oriented

---

### Introduzione: da requisiti a codice di qualità

Terminata la specifica dei requisiti, si entra nella fase di progetto. In un contesto **Agile**, lo sviluppo procede per cicli brevi chiamati **Sprint**: ogni Sprint aggiunge nuove funzionalità e raffina quelle esistenti. I team Agile (spesso chiamati team Scrum) sono piccoli e stabili, tipicamente 7-9 persone.

In questo contesto è fondamentale che il codice sia progettato con criteri che ne garantiscano **flessibilità**, **manutenibilità** e **testabilità**. I tre pilastri OOP su cui si lavora sono:

- **Alta coesione**: ogni classe fa una cosa sola e la fa bene
- **Basso accoppiamento**: le classi dipendono il meno possibile l'una dall'altra
- **Forte incapsulamento**: i dettagli implementativi sono nascosti all'esterno

Per gestire bene queste proprietà, **Robert C. Martin** — conosciuto come _"Uncle Bob"_ (Zio Bob) — ha codificato cinque principi di progettazione Object-Oriented, raccolti nell'acronimo **S.O.L.I.D.**

---

### S.O.L.I.D. — Panoramica

|Lettera|Principio (inglese)|Principio (italiano)|
|---|---|---|
|**S**|Single Responsibility Principle|Principio di singola responsabilità|
|**O**|Open/Closed Principle|Principio aperto/chiuso|
|**L**|Liskov Substitution Principle|Principio di sostituzione di Liskov|
|**I**|Interface Segregation Principle|Principio di segregazione delle interfacce|
|**D**|Dependency Inversion Principle|Principio di inversione delle dipendenze|

Questi principi non sono obblighi assoluti: sono **linee guida** da applicare con giudizio in base ai requisiti e agli obiettivi del progetto. Aiutano soprattutto i programmatori meno esperti a produrre codice di qualità.

---

### S — Single Responsibility Principle (SRP)

> **"A class should have one and only one reason to change."** _Una classe deve avere uno e un solo motivo per cambiare._

Ogni classe, metodo o variabile deve avere **una sola responsabilità**, interamente incapsulata al suo interno. Non deve offrire servizi non allineati con quella responsabilità.

**Perché è importante:**

Se una classe ha più responsabilità, qualsiasi cambiamento in una di esse può introdurre bug nelle altre. Più responsabilità = più ragioni per cambiare = più superficie d'errore.

**Vantaggi:**

- Oggetti piccoli e concisi, facili da leggere
- Testabilità migliorata (testare una sola cosa alla volta è molto più semplice)
- Manutenzione semplificata
- Basso accoppiamento tra entità
- Massimo riutilizzo del codice

**Come verificarlo:** cerca di trovare più di un motivo per cui la classe potrebbe cambiare. Se ne trovi più di uno, la classe ha troppe responsabilità e va ristrutturata.

**Esempio con codice — SRP violato e corretto**

❌ VIOLAZIONE — una classe fa troppo
```java
class Ordine {
    private List<Prodotto> prodotti;

    public double calcolaTotale() { ... }       // logica di business
    public void stampaRicevuta() { ... }        // presentazione
    public void salvasuDatabase() { ... }       // persistenza
}
```


✅ CORRETTO — tre classi, tre responsabilità separate
```java
class Ordine {
    private List<Prodotto> prodotti;
    public double calcolaTotale() { ... }       // solo logica di business
}

class StampatoreOrdine {
    public void stampa(Ordine o) { ... }        // solo presentazione
}

class RepositoryOrdine {
    public void salva(Ordine o) { ... }         // solo persistenza
}
```


Ora se cambia il formato della ricevuta, si tocca solo `StampatoreOrdine`. Se cambia il database, si tocca solo `RepositoryOrdine`. Le altre classi restano intatte.

---

### O — Open/Closed Principle (OCP)

> **"Objects or entities should be open for extension, but closed for modification."** _Il codice deve essere aperto alle estensioni ma chiuso alle modifiche._

Deve essere possibile **aggiungere nuovi comportamenti** a una classe senza modificarne l'implementazione esistente. Si aggiunge, non si tocca ciò che già funziona.

**Come si realizza in pratica:**

Lo strumento principale è l'**ereditarietà** con classi astratte o interfacce, sfruttando il **polimorfismo**. Si definisce un'astrazione (interfaccia o classe astratta) e si aggiungono nuove implementazioni senza toccare il codice che usa l'astrazione.

**Perché è importante:**

Modificare codice esistente che funziona introduce sempre il rischio di rompere qualcosa. Con OCP si riduce questo rischio: si estende, non si modifica.

> **Esempio pratico:**
> 
> Invece di una funzione con una catena di `if/else` che cambia comportamento in base al tipo di forma geometrica, si definisce un'interfaccia `Forma` con un metodo `calcolaArea()`, e ogni forma (Cerchio, Rettangolo, Triangolo) la implementa. Aggiungere una nuova forma significa aggiungere una nuova classe, senza toccare il codice esistente.

Questo principio va usato insieme al principio di Liskov (il prossimo).

**Esempio con codice — OCP violato e corretto**

❌ VIOLAZIONE — per aggiungere una forma devo modificare questa classe
```java
class CalcolatoreArea {
    public double calcola(Object forma) {
        if (forma instanceof Cerchio) {
            return Math.PI * ((Cerchio) forma).raggio * ((Cerchio) forma).raggio;
        } else if (forma instanceof Rettangolo) {
            return ((Rettangolo) forma).base * ((Rettangolo) forma).altezza;
        }
        // ogni nuova forma richiede di modificare questo metodo
        return 0;
    }
}
```

✅ CORRETTO — per aggiungere una forma creo solo una nuova classe

```java
interface Forma {
    double calcolaArea();
}

class Cerchio implements Forma {
    public double calcolaArea() { return Math.PI * raggio * raggio; }
}

class Rettangolo implements Forma {
    public double calcolaArea() { return base * altezza; }
}

// Aggiungere Triangolo = nuova classe, zero modifiche al codice esistente
class Triangolo implements Forma {
    public double calcolaArea() { return (base * altezza) / 2; }
}

class CalcolatoreArea {
    public double calcola(Forma forma) {
        return forma.calcolaArea();  // non cambia mai
    }
}
```

---

### L — Liskov Substitution Principle (LSP)

> **"Subtypes must be substitutable for their base types."** _Le classi derivate devono poter sostituire le classi base in modo trasparente._

In qualsiasi punto del programma in cui si usa un oggetto di tipo `T`, si deve poter usare in sua vece un oggetto di tipo `S` (sottotipo di `T`) **senza che il comportamento del programma cambi**.
In parole povere, una classe figlia deve poter sostituire la classe padre in qualunque situazione, senza compromettere il funzionamento del programma.

> **Esempio del controesempio classico:**
> 
> In geometria, un quadrato _è_ un rettangolo. Ma se `Rettangolo` ha metodi `setAltezza()` e `setLarghezza()` indipendenti, e `Quadrato` li sovrascrive imponendo che altezza == larghezza, sostituire un `Rettangolo` con un `Quadrato` rompe il comportamento atteso (impostare altezza e larghezza separatamente). **LSP è violato.**

**Attenzione alle precondizioni e postcondizioni:** una classe derivata non deve avere precondizioni più forti o postcondizioni più deboli della classe base.

**Esempio con codice — LSP violato e corretto**

❌ VIOLAZIONE — il Quadrato rompe il comportamento atteso del Rettangolo
```java
class Rettangolo {
    protected int altezza, larghezza;
    public void setAltezza(int h)   { altezza = h; }
    public void setLarghezza(int w) { larghezza = w; }
    public int area() { return altezza * larghezza; }
}

class Quadrato extends Rettangolo {
    // Il quadrato forza altezza == larghezza: rompe il contratto del Rettangolo
    public void setAltezza(int h)   { altezza = h; larghezza = h; }
    public void setLarghezza(int w) { larghezza = w; altezza = w; }
}

// Questo codice funziona con Rettangolo ma si rompe con Quadrato:
void testaRettangolo(Rettangolo r) {
    r.setAltezza(5);
    r.setLarghezza(4);
    assert r.area() == 20;  // ❌ Fallisce se r è un Quadrato: area = 16
}
```
✅ CORRETTO — gerarchia riprogettata rispettando LSP
```java
interface Forma { int area(); }

class Rettangolo implements Forma {
    public Rettangolo(int altezza, int larghezza) { ... }
    public int area() { return altezza * larghezza; }
}

class Quadrato implements Forma {
    public Quadrato(int lato) { ... }
    public int area() { return lato * lato; }
}
// Rettangolo e Quadrato non sono in relazione di ereditarietà
// Entrambi implementano Forma: non si violano reciprocamente i contratti
```

> Il principio prende il nome da **Barbara Liskov**, che ha descritto questo problema per la prima volta nel 1988.

---

### I — Interface Segregation Principle (ISP)

> **"A client should never be forced to implement an interface that it doesn't use."** _Una classe non dovrebbe dipendere da metodi che non usa._

È preferibile avere **molte interfacce specifiche e piccole** (una per ciascun ruolo) piuttosto che poche interfacce grandi e generali.

**Il problema che risolve:**

Se una classe implementa un'interfaccia grande, è costretta a implementare tutti i metodi — anche quelli che non usa. Quando l'interfaccia cambia (per motivi che riguardano solo altri metodi), la classe deve essere modificata inutilmente.

**La soluzione:**

Spezzare le interfacce grandi in interfacce più piccole e coese. Ogni classe implementa solo le interfacce di cui ha bisogno.

> **Esempio pratico:**
> 
> Un'interfaccia `Animale` con metodi `nuota()`, `vola()`, `corre()` è sbagliata: i pesci non volano, gli uccelli non nuotano ecc. Meglio tre interfacce separate: `Nuotatore`, `Volatore`, `Corridore`, implementate solo dalle classi appropriate.

**Esempio con codice — ISP violato e corretto**

❌ VIOLAZIONE — interfaccia "grassa" che forza implementazioni vuote
```java
interface Stampante {
    void stampa(Documento d);
    void scansiona(Documento d);
    void invia(Documento d);    // fax
}

// La stampante semplice deve implementare metodi che non usa
class StampanteSemplice implements Stampante {
    public void stampa(Documento d) { /* OK */ }
    public void scansiona(Documento d) { throw new UnsupportedOperationException(); }
    public void invia(Documento d)    { throw new UnsupportedOperationException(); }
}
```
✅ CORRETTO — interfacce separate per ruoli separati
```java
interface Stampabile  { void stampa(Documento d); }
interface Scansionabile { void scansiona(Documento d); }
interface Faxabile    { void invia(Documento d); }

class StampanteSemplice implements Stampabile {
    public void stampa(Documento d) { /* OK, solo quello che serve */ }
}

class StampanteMultifunzione implements Stampabile, Scansionabile, Faxabile {
    public void stampa(Documento d)   { ... }
    public void scansiona(Documento d){ ... }
    public void invia(Documento d)    { ... }
}
```

---

### D — Dependency Inversion Principle (DIP)

> **"Entities must depend on abstractions, not on concretions."** _I moduli di alto livello non devono dipendere da quelli di basso livello. Entrambi devono dipendere da astrazioni._

Anche se è il quinto principio in ordine alfabetico, per importanza concettuale è tra i più significativi.

```mermaid
classDiagram
    class GestoreOrdini
    class DatabaseRepository {
        <<interface>>
    }
    class MySQLRepository
    class PostgreSQLRepository

    GestoreOrdini --> DatabaseRepository
    DatabaseRepository <|.. MySQLRepository
    DatabaseRepository <|.. PostgreSQLRepository
```

**Il problema:**

Nelle architetture mal progettate, i moduli di alto livello (logica di business) dipendono direttamente dai moduli di basso livello (database, file system, servizi esterni). Cambiare il database, per esempio, costringe a modificare anche la logica di business.

**La soluzione:**

Entrambi i livelli dipendono da un'**astrazione** (interfaccia). I dettagli concreti dipendono dall'astrazione, non viceversa. In questo modo si possono sostituire le implementazioni concrete senza toccare la logica di alto livello.

> **Esempio pratico:**
> 
> La logica di business non usa direttamente `MySQLDatabase`, ma dipende dall'interfaccia `DatabaseRepository`. L'implementazione concreta `MySQLDatabaseRepository` implementa quell'interfaccia. Se si vuole passare a PostgreSQL, si crea `PostgreSQLDatabaseRepository` senza toccare la logica di business.

**Conseguenze:**

- basso accoppiamento tra livelli dell'architettura
- sostituibilità delle implementazioni concrete senza impatto sui livelli superiori
- maggiore testabilità (si possono usare mock/stub per le dipendenze)

**Esempio con codice — DIP violato e corretto**

❌ VIOLAZIONE — la logica di business dipende da un database specifico
```java
class GestoreOrdini {
    private MySQLDatabase db = new MySQLDatabase();  // dipendenza diretta!

    public void salvaOrdine(Ordine o) {
        db.insert("ordini", o);   // se cambia database, cambia questa classe
    }
}
```
✅ CORRETTO — entrambi i livelli dipendono dall'astrazione
```java
// 1. Definire l'astrazione (interfaccia)
interface DatabaseRepository {
    void salva(String tabella, Object dato);
}

// 2. La logica di business dipende dall'interfaccia, non dall'implementazione
class GestoreOrdini {
    private DatabaseRepository db;   // dipende dall'astrazione

    public GestoreOrdini(DatabaseRepository db) {
        this.db = db;   // la dipendenza viene "iniettata" dall'esterno
    }

    public void salvaOrdine(Ordine o) {
        db.salva("ordini", o);   // non cambia mai, indipendente dal DB usato
    }
}

// 3. Le implementazioni concrete dipendono dall'interfaccia
class MySQLRepository implements DatabaseRepository {
    public void salva(String tabella, Object dato) { /* MySQL */ }
}

class PostgreSQLRepository implements DatabaseRepository {
    public void salva(String tabella, Object dato) { /* PostgreSQL */ }
}

// Passare da MySQL a PostgreSQL: zero modifiche a GestoreOrdini
GestoreOrdini g = new GestoreOrdini(new PostgreSQLRepository());
```

> Questo pattern si chiama **Dependency Injection (DI)** ed è la forma più comune di applicare il DIP.

---
### Conclusione

Conoscere S.O.L.I.D. è importante, ma lo è ancora di più saper **riconoscere quando si sta violando un principio**. I principi si applicano con giudizio: non sono dogmi, ma strumenti che — usati bene — portano a un codice più flessibile, estendibile, testabile e mantenibile.

Applicati sia durante la progettazione iniziale che durante il **refactoring** di sistemi legacy, i principi S.O.L.I.D. aiutano gli sviluppatori a governare la complessità nel tempo.

---

#### Scelta multipla

1. Quali tra i seguenti **non** sono concetti delle metodologie Agili? a) Basso accoppiamento   b) Alto accoppiamento   c) Bassa coesione   d) Alta coesione

2–6. Da quale termine è stata presa l'iniziale S/O/L/I/D di S.O.L.I.D.?

#### Vero/Falso

1. Ogni classe/oggetto si deve focalizzare su una singola responsabilità.
2. Il codice deve essere aperto alle estensioni ma chiuso alle modifiche.
3. È necessario aumentare per quanto possibile l'accoppiamento tra le entità.
4. Le classi astratte favoriscono il principio Open/Closed.
5. Deve essere sempre possibile sostituire un sottotipo col suo supertipo.
6. È sconsigliato avere molte interfacce piccole in una classe client.
7. I moduli di alto livello non devono dipendere da quelli di basso livello.
8. Sono i dettagli che dipendono dalle astrazioni, non viceversa.
9. I principi S.O.L.I.D. non vanno applicati durante il refactoring di sistemi legacy.

<details> <summary>📋 Risposte</summary>

1. **Vero** — è la definizione del principio SRP.
2. **Vero** — è la definizione del principio OCP.
3. **Falso** — al contrario, si deve _minimizzare_ l'accoppiamento (basso accoppiamento è uno degli obiettivi fondamentali dell'OOP e di S.O.L.I.D.).
4. **Vero** — le classi astratte e le interfacce permettono di estendere il comportamento senza modificare il codice esistente, applicando OCP.
5. **Vero** — è la definizione del principio LSP di Liskov.
6. **Falso** — al contrario, ISP raccomanda _molte_ interfacce piccole e specifiche piuttosto che poche interfacce generali e grandi.
7. **Vero** — è la definizione del principio DIP: i moduli di alto livello dipendono da astrazioni, non da moduli di basso livello.
8. **Vero** — nel DIP i dettagli (implementazioni concrete) dipendono dalle astrazioni (interfacce), non il contrario.
9. **Falso** — S.O.L.I.D. è particolarmente utile proprio durante il refactoring di sistemi legacy, per migliorarne la struttura progressivamente.

</details>

---

## Esercizi in Laboratorio L1 — Use Case Diagram con StarUML

### Strumenti disponibili per i diagrammi UML

|Strumento|Tipo|Download|
|---|---|---|
|**StarUML**|Open source (valutazione gratuita)|http://staruml.io/download|
|**Visual Paradigm Community**|Gratuito|http://www.visual-paradigm.com/|
|**ArgoUML**|Open source, richiede JVM|http://argouml.tigris.org|
|**Microsoft Visio**|A pagamento, con condivisione Web|—|

### StarUML

StarUML è un progetto open source per lo sviluppo rapido di diagrammi UML, basato sul paradigma **MDA (Model Driven Architecture)** — un approccio che tratta i modelli come parte integrante del processo di implementazione.

Supporta i principali tipi di diagramma UML: Use Case, Class, Sequence, Collaboration, Statechart, Activity, Component, Deployment. Con plug-in aggiuntivi supporta la generazione di codice sorgente in C++, Java, C#, VB.NET e altri linguaggi, nonché la generazione automatica di documenti Office.

È disponibile per macOS (≥10.9), Windows (≥7) e Linux (64/32 bit).

### Mettiti alla prova

1. **Sistema biblioteca:** il bibliotecario effettua prestiti, riceve resi, gestisce i libri (classifica, riposiziona, segnala danneggiati, ordina nuovi).
    
2. **Sistema ordini:** clienti effettuano ordini e pagamenti; il sistema processa l'ordine o lo mette in attesa; i fornitori consegnano merce e il sistema evade gli ordini pendenti.
    
3. **Negozio di musica:** gestione magazzino con VerificaDispProdotto e EffettuaOrdineFornitore (creazione ordine → aggiunta prodotti → invio).
    
4. **Sistema bancario:** apertura conto corrente (cliente si presenta, addetto verifica l'anagrafica, crea il conto, comunica il numero al cliente).
    

---

## Esercizi in Laboratorio L2 — Use Case Diagram con ArgoUML

ArgoUML è un tool open source per la modellizzazione UML (standard UML 1.4), scaricabile all'indirizzo https://argouml.it.uptodown.com/windows. Richiede Java.

### Mettiti alla prova

1. Installa ArgoUML.
2. Disegna i diagrammi dei casi d'uso per tutti gli esercizi dell'Esercizio in Laboratorio L1.
3. Realizza il diagramma dei casi d'uso di un sistema di vendita online di biglietti ferroviari.

---

---

# 🔗 Come si collegano le due unità

Prima di entrare nell'Unità 5 è utile capire come i documenti e le attività dell'Unità 4 alimentano concretamente il lavoro dell'Unità 5. Non sono due argomenti separati: sono fasi consecutive dello stesso processo.

```mermaid
flowchart TD
    A([Inizio]) --> B[Raccolta requisiti]
    B --> C[Casi d'uso UCD]
    C --> D[SRS - Specifica dei Requisiti]

    D --> E[Piano delle prove]
    D --> F[Analisi dei requisiti]
    D --> G[Specifica architetturale]
    D --> H[Specifica di dettaglio]

    E --> I[Principi SOLID]
    F --> I
    G --> I
    H --> I

    I --> J[Documentazione del codice]
    J --> K[Sviluppo del software]
    K --> L[Controllo delle versioni]
    L --> M([Fine])
```


### I punti di connessione chiave

**Casi d'uso → Piano delle prove**

Ogni caso d'uso dell'SRS descrive un'interazione tra attore e sistema con uno o più scenari. Ogni scenario — principale, alternativo, eccezione — diventa un **caso di test** nel piano delle prove. Se è stato definito lo scenario "carta di credito scaduta", nel piano delle prove ci sarà un test che verifica che il sistema si comporti esattamente come descritto in quello scenario.

**SRS → Specifica architetturale**

I requisiti funzionali dell'SRS definiscono _cosa_ il sistema deve fare; la specifica architetturale definisce _come_ è strutturato per farlo. I requisiti non funzionali (prestazioni, affidabilità, sicurezza) guidano direttamente le scelte architetturali: un requisito di risposta < 2 secondi, per esempio, può imporre l'uso di cache o di un'architettura distribuita.

**S.O.L.I.D. → Documentazione del codice**

I principi S.O.L.I.D. producono classi con singola responsabilità, interfacce coese e dipendenze ben gestite. Questo rende la documentazione Javadoc/Doxygen più utile: se ogni classe fa una cosa sola, la sua documentazione è breve, precisa e comprensibile.

**Diario di progetto → Git**

Il diario di progetto (documento del management) tiene traccia di tutte le versioni dei documenti e del software. Git è lo strumento tecnico che implementa questa tracciabilità per il codice: ogni commit è una voce del "diario" del codice, con autore, data, descrizione della modifica.

---

# Unità 5 — Documentazione del software

### Obiettivi dell'unità

**Conoscenze**

- Comprendere la necessità di documentare durante (non dopo) lo sviluppo
- Conoscere i tipi di documenti necessari in un progetto software
- Distinguere documentazione interna ed esterna
- Conoscere le modalità per realizzare documentazione esterna di sistema e utente
- Conoscere Javadoc e Doxygen come tool di documentazione automatica del codice

**Competenze**

- Organizzare la documentazione di progetto
- Definire e rispettare uno standard di documentazione
- Formattare e documentare il codice sorgente
- Condividere componenti di progetto con il team di sviluppo tramite VCS

**Abilità**

- Utilizzare Javadoc per documentazione automatica Java
- Installare e usare Doxygen per documentazione multi-linguaggio
- Installare, configurare e usare Git in locale e in remoto
- Installare e usare Subversion/TortoiseSVN

---

## Lezione 1 — La documentazione del progetto

> **In questa lezione impareremo:**
> 
> - perché documentare è un'attività produttiva, non burocratica
> - la struttura della documentazione esterna di progetto
> - le sezioni che compongono un manuale utente
> - i tool di documentazione automatica del codice

---

### Perché documentare (e quando)

Documentare il software è un'attività che i programmatori tendono a posticipare — spesso viene fatta solo al termine dello sviluppo, come adempimento finale prima della consegna. **Questo è un errore.**

La documentazione deve essere prodotta **durante** lo sviluppo, in parallelo con il codice, per due ragioni fondamentali:

1. **È un supporto attivo al processo di sviluppo**, non un optional burocratico. Man mano che viene prodotta, la documentazione aiuta il team a chiarire le scelte fatte e a coordinarsi.
2. **Influenza direttamente la qualità del software**. Molti fattori di qualità (manutenibilità, testabilità, riusabilità) dipendono direttamente da una buona documentazione.

Non esiste uno standard universale sui documenti da produrre; questa lezione raccoglie l'insieme di documenti raccomandati dai principali teorici dell'ingegneria del software per un progetto di medie dimensioni.

---

### Standard della documentazione

Prima di iniziare il progetto, il responsabile deve definire **tre tipi di standard**:

#### A — Standard per la produzione

Definiscono struttura, contenuto, editing e presentazione visiva dei documenti (font, stili, logo).

#### B — Standard per la manutenzione

Definiscono come i documenti vengono identificati (codifica univoca), aggiornati (versioni, changelog) e come le modifiche a una versione precedente si riflettono nel documento.

La tracciabilità delle modifiche è fondamentale: se è facile risalire alla "storia" di una decisione progettuale, si riduce enormemente il tempo necessario per capire il codice in manutenzione.

#### C — Standard per la distribuzione

Definiscono come i documenti vengono condivisi tra sistemi diversi. Un formato comune raccomandato è **XML**, perché ha una vita potenzialmente più lunga dei formati proprietari dei word processor.

---

### Classificazione della documentazione di progetto

La documentazione si compone di tre parti principali:

1. il **manuale per l'utente**
2. la **documentazione tecnica** (include il codice sorgente)
3. le **prove di collaudo**

Può essere classificata lungo quattro assi:

|Asse|Opzione A|Opzione B|
|---|---|---|
|**Posizione**|Esterna (separata dal programma)|Interna (commenti nel codice)|
|**Accesso**|In linea (richiamabile durante l'esecuzione)|Fuori linea (manuale separato)|
|**Portata**|Globale (riguarda l'intero sistema)|Locale (commenti in punti specifici del codice)|
|**Destinatario**|Per l'utente (manuale d'uso, installazione, help online)|Per il programmatore (architettura, algoritmi, strutture dati)|

La documentazione non riguarda solo il codice sorgente, ma include anche:

- le specifiche funzionali e non funzionali
- le scelte architetturali (strutture dati, algoritmi principali)
- le modalità d'uso del programma
- i collaudi effettuati e i loro risultati

---

### La documentazione esterna — gestione del progetto

Dopo l'approvazione del preventivo, il **project manager** è la prima figura nominata. Il suo primo compito è stilare l'elenco dei documenti necessari durante lo sviluppo.

La documentazione si divide in due gruppi:

#### Documentazione del management di progetto

|Documento|Descrizione|
|---|---|
|**Organigramma**|Elenco dei membri del team con ruoli e competenze; firmato da tutti. Non ha versioni (si sostituisce interamente se cambia)|
|**Diario di progetto**|Registro ufficiale di tutti i movimenti documentali (data, riferimento univoco, versione, consegnatario/ricevente). Solo i documenti approvati dal PM entrano nell'archivio|
|**Verbale**|Resoconto di ogni riunione (data, luogo, presenti, sintesi delle discussioni, impegni presi). Viene firmato da tutti i presenti. Sempre con il punto "Varie ed eventuali"|
|**Piano di progetto**|Obiettivi, analisi dei rischi, modello di processo, stima dei costi, WBS, Gantt, consuntivo, strumenti. Si divide in _pianificazione_ (preventivo) e _consuntivazione_ (confronto con l'effettivo)|
|**Norme di progetto**|Convenzioni generali (documentazione, comunicazione, spazio di lavoro, strumenti) e norme di sviluppo (analisi, progettazione, codifica)|
|**Offerta**|Documento precontrattuale con descrizione del prodotto, dettagli economici, analisi dei requisiti, tempi, penali. Firmato dal cliente per accettazione|
|**Contratto**|Al momento della firma dell'offerta. Include: limiti di responsabilità, proprietà del codice, modalità di collaudo, termini di consegna, penali, periodo di prova, tipo di assistenza post-rilascio|
|**Piano di gestione della qualità**|Politiche e obiettivi di qualità, strumenti e procedure di controllo (Management reviews, Technical reviews, Inspections, Audits), azioni per non conformità|
|**Relazione finale**|Descrizione delle funzionalità implementate, architettura, linguaggi e ambienti usati, strutture dati, interfacce, collaudo. Include il manuale operativo e propone contratti di manutenzione e assistenza|

#### Documentazione tecnica di progetto

|Documento|Descrizione|
|---|---|
|**Analisi del dominio**|Contesto d'intervento, descrizione dell'azienda e del progetto, glossario del settore, descrizione dei clienti/utenti, analisi della concorrenza|
|**Analisi dei requisiti (SRS)**|Il documento SRS descritto nella Lezione 4 dell'Unità 4|
|**Specifica architetturale**|Decomposizione del sistema in moduli, interfacce tra moduli, albero di chiamata dei sottoprogrammi; per OOP: descrizione di classi, gerarchie, modellizzazione comportamentale|
|**Specifica di dettaglio**|Per ogni componente: algoritmi, significato dei parametri, variabili globali/locali, casi d'uso specifici; allegato: codice sorgente e modello logico del database|
|**Piano delle prove**|Due sezioni: (1) prove di integrazione (driver, stub, strategia d'integrazione); (2) prove di collaudo del sistema completo. Si conclude con il documento di accettazione firmato dal cliente|
|**Risultati delle prove**|Per ogni test: data, tipo, dati di prova, esito, commenti su risultati inattesi, indicazioni per eventuali ripetizioni|
|**Manuale d'uso**|Vedi sezione dedicata di seguito|

---

### Il manuale d'uso (manuale utente)

Il manuale utente deve essere scritto in linguaggio semplice, accessibile anche a chi non ha conoscenze informatiche. Esiste sia in formato cartaceo che elettronico (help online).

**Struttura obbligatoria:**

1. **Introduzione**
    
    - Breve descrizione dell'utilizzo del manuale
    - Servizi forniti dal programma
    - Ambiente hardware/software richiesto (tipo di computer, RAM, SO, versione del linguaggio)
    - Modalità di avvio del programma
2. **Istruzioni d'uso**
    
    - Descrizione di ogni singola funzione e voce di menu
    - Esempi guidati con le singole azioni richieste
    - Per ogni funzione: elenco delle possibili situazioni di errore, cause, interventi correttivi
3. **Appendice**
    
    - Glossario
    - Elenco completo dei messaggi di errore
    - Guida alla risoluzione delle situazioni critiche più comuni

---

### Tool di documentazione automatica del codice

Per facilitare la produzione della documentazione interna, esistono **tool di generazione automatica** che analizzano il codice sorgente cercando commenti con una sintassi specifica (tag), e producono automaticamente documentazione in HTML, PDF o altri formati.

**Vantaggi:**

- Il programmatore documenta mentre scrive — non dopo
- La documentazione è sempre aggiornata con il codice
- Chi testa può usare la documentazione durante le operazioni di collaudo
- Risparmio di tempo e risorse significativo

I due tool principali sono **Javadoc** e **Doxygen**, descritti in dettaglio negli Esercizi in Laboratorio.

---

### Verifica di fine Lezione 1

#### Vero/Falso

1. La documentazione è un supporto al processo di sviluppo del software.
2. La documentazione deve essere redatta durante lo svolgimento del progetto, non solo alla fine.
3. La documentazione di un sistema riguarda soltanto il codice sorgente.
4. L'offerta rientra nella documentazione del management del progetto.
5. Il piano di gestione della qualità non è tra i documenti del management del progetto.
6. Tra le norme di progetto rientra l'elenco degli strumenti utilizzati.
7. Nel contratto per lo sviluppo sono presenti i tempi di consegna e le eventuali penali.
8. Alla relazione finale viene generalmente allegato il manuale operativo.
9. Nel manuale utente sono presenti gli esiti delle prove delle funzionalità del prodotto.

<details> <summary>📋 Risposte</summary>

1. **Vero** — la documentazione è un supporto attivo, non un adempimento burocratico.
2. **Vero** — deve essere prodotta in parallelo con il codice, non solo alla consegna.
3. **Falso** — la documentazione comprende anche specifiche funzionali e non funzionali, scelte architetturali, modalità d'uso e risultati dei collaudi.
4. **Vero** — l'offerta (preventivo) rientra nella documentazione del management del progetto.
5. **Falso** — il piano di gestione della qualità è uno dei documenti del management del progetto.
6. **Vero** — le norme di progetto includono l'elenco degli strumenti, delle piattaforme e dei compilatori utilizzati.
7. **Vero** — il contratto riporta termini di consegna ed eventuali penali.
8. **Vero** — alla relazione finale viene allegato il manuale operativo per il corretto utilizzo del programma.
9. **Falso** — gli esiti delle prove sono nel documento "Risultati delle prove", non nel manuale utente. Il manuale utente contiene istruzioni d'uso, messaggi di errore e glossario.

</details>

#### Scelta multipla

1. Quale **non** è uno standard nella produzione della documentazione? a) Standard per la produzione   b) Standard per la manutenzione   c) **Standard per la pubblicazione**   d) Standard per la distribuzione
    
2. Quale **non** è uno standard di manutenzione di un documento? a) Identificazione   b) **Editing**   c) Aggiunta   d) Aggiornamento
    
3. Quale tra questi **non** rientra nella documentazione del management del progetto? a) Organigramma   b) Verbale   c) **Analisi del dominio**   d) Piano di progetto
    

<details> <summary>📋 Risposte</summary>

1. **c) Standard per la pubblicazione** — gli standard definiti sono: produzione, manutenzione, distribuzione. La "pubblicazione" non è una categoria prevista.
    
2. **b) Editing** — gli standard di manutenzione riguardano: identificazione (codifica univoca), aggiunta (validazione e versioning), aggiornamento (come le modifiche si riflettono nel documento). L'editing è parte della produzione, non della manutenzione.
    
3. **c) Analisi del dominio** — l'analisi del dominio appartiene alla _documentazione del progetto_ (documentazione tecnica), non alla documentazione del management. Il management comprende: organigramma, diario, verbali, piano di progetto, norme, offerta, contratto, piano qualità, relazione finale.
    

</details>

---

## Esercizi in Laboratorio L1 — Documentazione automatica con Javadoc

### Cos'è Javadoc

Javadoc è lo strumento standard per documentare programmi Java, sviluppato da Sun Microsystems nel 1990. Il programmatore inserisce commenti con una sintassi specifica direttamente nel codice sorgente; Javadoc li analizza e genera automaticamente un ipertesto HTML con la documentazione completa.

**Principio di funzionamento:**

```
Codice sorgente Java
    + commenti Javadoc (/** ... */)
        → Javadoc (parser)
            → Documentazione HTML / PDF
```

Javadoc può essere eseguito su interi package, singoli file, o entrambi. Per i package è possibile includere immagini e file HTML aggiuntivi in una sottocartella `doc-files`.

**Comando base:**

```bash
javadoc Prova.java -d doc
```

---

### Sintassi dei commenti Javadoc

Un commento Javadoc è racchiuso tra `/**` e `*/` (non tra `/*` e `*/`).

La documentazione minima deve descrivere ogni package, classe, interfaccia, metodo pubblico e attributo pubblico.

#### Tag per le classi

|Tag|Descrizione|
|---|---|
|`@author [nome]`|Aggiunge "Author:" seguito dal nome (possibile più di uno)|
|`@version [versione]`|Aggiunge "Version:" seguita dalla versione|
|`@see [riferimento]`|Aggiunge "See Also:" con un riferimento correlato|

#### Tag per i metodi

|Tag|Descrizione|
|---|---|
|`@param [nome] [descrizione]`|Documenta un parametro; un tag per ogni parametro, nell'ordine del metodo|
|`@return [descrizione]`|Descrive il valore restituito (non usare per void e costruttori)|
|`@throws [Classe] [descrizione]`|Documenta un'eccezione; uno per ogni eccezione nella clausola throws|
|`@deprecated [descrizione]`|Segnala che l'entità sarà rimossa in versioni future|

#### Struttura di un file ben documentato

```java
/**
 * Descrizione della classe.
 * @author Nome Cognome, email@example.com
 * @version 1.0
 */
public class MiaClasse {

    /** Descrizione dell'attributo. */
    private int mioAttributo;

    /**
     * Descrizione del metodo.
     * @param a  primo parametro
     * @param b  secondo parametro
     * @return   risultato dell'operazione
     * @throws IllegalArgumentException se i parametri non sono validi
     */
    public int mioMetodo(int a, int b) {
        // ...
    }
}
```

Per generare la documentazione con PDF è possibile usare la doclet PDFDoclet:

```bash
javadoc -doclet com.tarsec.javadoc.pdfdoclet.PDFDoclet \
        -docletpath pdfdoclet-1.0.2-all.jar \
        -pdf output.pdf Prova.java
```

### Mettiti alla prova

Riprendi gli esercizi in Java delle Unità precedenti e aggiungili tag Javadoc, generando l'ipertesto completo.

---

## Esercizi in Laboratorio L2 — Il software Doxygen

### Cos'è Doxygen

Doxygen è un tool open source (sviluppato da Dimitri van Heesch dal 1997) per la generazione automatica di documentazione da codice sorgente in **molti linguaggi**: C, C++, Java, Python, Objective C, PHP, C#, IDL.

A differenza di Javadoc (solo Java), Doxygen è multi-linguaggio e supporta formati di output multipli:

- **HTML** (ipertesto navigabile)
- **LaTeX** → PDF (Reference Manual)
- **RTF** (editabile con Word)

La sintassi dei comandi è praticamente identica a quella di Javadoc.

---

### Installazione

- **Linux**: già incluso in Cygwin; altrimenti dal sito ufficiale http://www.doxygen.nl
- **Windows**: installer dal sito ufficiale, installazione guidata passo-passo

---

### Configurazione e generazione da riga di comando (Linux/Cygwin)

```bash
# 1. Creare il file di configurazione
doxygen -g config_DG

# 2. Editare config_DG (con qualsiasi editor)
#    Impostare almeno:
#    PROJECT_NAME     = nome_del_progetto
#    OUTPUT_DIRECTORY = cartella_output
#    INPUT            = cartella_sorgenti
#    FILE_PATTERNS    = *.h *.cpp *.java

# 3. Generare la documentazione
doxygen config_DG
```

L'output HTML si trova nella cartella `html/`. Per generare il PDF si entra nella cartella `latex/` e si esegue `make`.

---

### Sintassi dei tag Doxygen

I commenti Doxygen vanno scritti tra `/*` e `*/`:

|Tag|Descrizione|Esempio|
|---|---|---|
|`\fn`|Nome della funzione|`\fn int somma(int a, int b)`|
|`\brief`|Commento breve|`\brief Somma due interi`|
|`\param`|Parametro di funzione|`\param a Primo addendo`|
|`\return`|Valore restituito|`\return La somma di a e b`|
|`\author`|Autore|`\author Mario Rossi`|
|`\version`|Versione del file|`\version 2.1`|
|`\date`|Data di creazione/modifica|`\date 15/03/2024`|
|`\file`|Nome del file sorgente|`\file somma.c`|
|`\class`|Classe documentata|`\class Calcolatrice`|
|`\bug`|Bug noto|`\bug Il risultato può superare INT_MAX`|
|`\warning`|Avvertimento|`\warning Il metodo non è thread-safe`|
|`\example`|File di esempio|`\example esempio_uso.c`|

### Struttura minima raccomandata

```c
/*
 @file nomefile.c
 @author Nome Cognome, email
 @version 1.0
 */

/** Descrizione della classe/struttura.
 @code
 // esempio di utilizzo
 @endcode
 */

/**
 Descrizione del metodo.
 @param a  primo parametro
 @param b  secondo parametro
 @return   valore di ritorno
 @throws   eccezioni possibili
*/

/** Descrizione dell'attributo */
```

### GraphViz

GraphViz è un tool opzionale che si integra con Doxygen per generare **grafi di chiamata**: mostra dove una funzione viene chiamata e cosa chiama a sua volta. Molto utile per comprendere le dipendenze nel codice.

---

### Mettiti alla prova

1. Scarica `Mucca.java`, aggiungi almeno altri tre metodi, copiali in una directory `progettoJava`, poi:
    
    - `doxygen –g documenta`
    - `doxygen documenta`
    - Esplora i vari output generati
    - Visualizza `html/index.html` nel browser
    - Nella cartella `latex/`, esegui `make` per generare il PDF
2. Esplora esempi reali di documentazione Doxygen:
    
    - http://api.kde.org/
    - http://www.opensg.org/doxygen/

---

## Esercizi in Laboratorio L3 — Controllo delle versioni con Git

### Premessa: perché il versionamento

Lo sviluppo software è un processo continuo: il codice cambia durante lo sviluppo, cambia dopo il rilascio (manutenzione correttiva, migliorativa, adattativa), e spesso lo modificano più persone contemporaneamente.

Senza un sistema strutturato, i programmatori tendono a inventarsi soluzioni artigianali: rinominare i file (`progetto_v2_FINALE_davvero.zip`), copiare cartelle su dischi esterni, comprimere directory. Questi approcci non scalano e portano inevitabilmente a perdite di lavoro o versioni difficili da gestire.

Un **VCS (Version Control System)** risolve questi problemi in modo sistematico.

---

### Numerazione delle versioni

La convenzione più diffusa usa tre livelli separati da punti (es. `2.14.11`):

|Livello|Nome|Quando si incrementa|
|---|---|---|
|Primo|**Major** (release)|Modifica sostanziale: nuova architettura, nuova piattaforma, nuova veste grafica|
|Secondo|**Minor** (versione)|Nuove funzionalità o aggiornamenti fiscali/normativi che non rompono la compatibilità|
|Terzo|**Patch** (correzione)|Correzione di bug, senza nuove funzionalità|

Regole essenziali:

1. ogni nuova versione deve avere un numero
2. il numero di ogni nuova versione deve essere maggiore del precedente

---

### Caratteristiche di un VCS

Un buon VCS garantisce tre proprietà fondamentali:

|Proprietà|Descrizione|
|---|---|
|**Reversibilità**|Si può tornare a qualsiasi punto della storia del codice in qualsiasi momento|
|**Concorrenza**|Più sviluppatori possono lavorare contemporaneamente sullo stesso progetto, con meccanismi di integrazione delle modifiche|
|**Annotazione**|A ogni versione si possono aggiungere note che spiegano le modifiche, le migliorie, le ragioni delle scelte|

> Il vecchio dogma "se qualcosa funziona, non cambiarla" non regge con i VCS: si possono apportare modifiche con la certezza di poter tornare indietro se qualcosa va storto.

---

### VCS centralizzati vs distribuiti

|Caratteristica|CVCS (Centralizzato, es. SVN)|DVCS (Distribuito, es. Git)|
|---|---|---|
|Repository|Solo sul server centrale|Copia completa su ogni macchina dello sviluppatore|
|Lavoro offline|❌ Impossibile (richiede il server)|✅ Possibile (si sincronizza in seguito)|
|Rischio di perdita|Alto (se il server va giù o viene corrotto)|Basso (ogni clone è un backup completo)|
|Complessità|Minore|Maggiore|

**Git è un DVCS.** Ogni sviluppatore ha una copia locale completa del repository. Il server remoto è uno strumento di condivisione, non un requisito per lavorare.

---

### Cos'è Git — concetti fondamentali

Git gestisce il codice attraverso **tre aree**:

```mermaid
flowchart LR
    WD[Working Directory]
    ST[Index (Stage)]
    LR[HEAD / Local Repository]

    WD -->|git add| ST
    ST -->|git commit| LR
```

|Area|Descrizione|
|---|---|
|**Working Directory**|I file su cui stai lavorando adesso|
|**Index (Stage)**|Area di transito: i file pronti per essere inclusi nel prossimo commit|
|**HEAD**|Punta all'ultimo commit effettuato nel repository locale|

**Struttura interna di Git:**

Git usa un append-only object database con quattro tipi di oggetti:

- **blob**: contenuto di un file (ogni versione)
- **tree**: equivalente di una directory
- **commit**: collega tree in una cronologia (nome del tree, data/ora, messaggio, riferimento al commit genitore)
- **tag**: riferimento a un altro oggetto con metadati aggiuntivi (es. firma digitale per i rilasci)

---

### Installazione

```bash
# Linux
sudo apt-get update
sudo apt-get install git

# Windows
# Scaricare l'installer da https://git-scm.com/downloads
# L'installazione è guidata passo-passo
```

---

### Comandi essenziali

#### Inizializzare e fare il primo commit

```bash
# Posizionarsi nella cartella del progetto, poi:
git init                          # crea il repository locale
git add .                         # aggiunge tutti i file allo stage
git commit -m "Primo backup"      # crea il primo snapshot (commit)

# Se richiesto, configurare l'identità:
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua@email.com"
```

#### Gestire le versioni

```bash
git log                           # mostra la cronologia dei commit con i codici SHA1
git diff                          # mostra le modifiche dall'ultimo commit
git diff "@{yesterday}"           # modifiche dall'ieri
git diff 1b6d "master~2"          # differenze tra due versioni specifiche
git whatchanged --since="2 weeks ago"  # modifiche nelle ultime due settimane

# Tornare a una versione precedente (cancella i commit successivi!)
git reset --hard                  # torna all'ultimo commit
git reset --hard 6409             # torna al commit con codice che inizia con 6409

# Annullare un commit specifico (senza cancellare la storia)
git revert 88a9                   # crea un nuovo commit che annulla quello indicato
```

#### I branch — sviluppo parallelo

Un branch è una **ramificazione** dello sviluppo principale: permette di lavorare su funzionalità nuove o sperimentali senza toccare la versione stabile.

```bash
git checkout 6409                 # "visita" temporanea a un vecchio commit (senza cancellare)
                                  # → se si fa un commit qui, si crea automaticamente un nuovo branch

git checkout master               # torna al branch principale
git checkout -b nome_branch       # crea e passa a un nuovo branch
git checkout -d nome_branch       # cancella un branch
git merge nome_branch             # incorpora le modifiche del branch nel branch corrente
git diff branch_sorgente branch_target   # confronta due branch
```

**Quattro scenari tipici di branching:**

|Tipo|Quando si usa|
|---|---|
|**Branch per tecnologia**|Il prodotto deve girare su piattaforme diverse (es. Unix e Windows) con codice parzialmente diverso|
|**Branch per componente**|Componenti A e B vengono sviluppati in parallelo da team diversi|
|**Branch per task**|Task A e Task B hanno priorità diverse e cicli di sviluppo indipendenti|
|**Branch per release**|Release 1 riceve solo bugfix, Release 2 riceve nuove funzionalità|

Quando lo sviluppo parallelo è completo, i branch si riuniscono con un'operazione di **merge** che fonde le modifiche in un'unica versione.

#### Generare il changelog

```bash
git log > ChangeLog.txt    # crea un file di testo con l'intera cronologia dei commit
```

---

### Il flusso di lavoro in team: Feature Branch Workflow

Il **Feature Branch Workflow** è il flusso di lavoro più usato nelle software house che usano Git. Il principio è semplice: ogni nuova funzionalità viene sviluppata in un branch dedicato, e nessuno lavora mai direttamente su `main` (o `master`).

#### Come funziona passo per passo

```bash
# 1. Partire sempre da main aggiornato
git checkout main
git pull origin main

# 2. Creare un branch per la nuova funzionalità
git checkout -b feature/login-utente
# convenzione nome: feature/nome-funzione, bugfix/nome-bug, hotfix/nome-fix

# 3. Sviluppare e fare commit sul branch
git add .
git commit -m "Aggiunta form di login"
git add .
git commit -m "Validazione email e password"

# 4. Prima di fare merge, sincronizzarsi con main (qualcuno potrebbe aver fatto push)
git fetch origin
git rebase origin/main   # oppure: git merge origin/main

# 5. Pubblicare il branch sul repository remoto
git push origin feature/login-utente

# 6. Aprire una Pull Request (PR) su GitHub/Bitbucket per revisione del codice
# I colleghi rivedono il codice, fanno commenti, approvano

# 7. Dopo approvazione, fare merge in main
git checkout main
git merge feature/login-utente
git push origin main

# 8. Eliminare il branch ormai integrato
git branch -d feature/login-utente
git push origin --delete feature/login-utente
```

#### Schema visuale del flusso

```mermaid
flowchart TD
    A([Inizio]) --> B[checkout main]
    B --> C[pull origin main]
    C --> D[create branch feature/login-utente]
    D --> E[sviluppo e commit]
    E --> F[fetch / rebase]
    F --> G[push branch]
    G --> H[Pull Request]
    H --> I[merge in main]
    I --> J[push origin main]
    J --> K[elimina branch]
    K --> L([Fine])
```

---

### Gestione dei conflitti durante il merge

Un **conflitto** si verifica quando due sviluppatori hanno modificato le stesse righe dello stesso file in branch diversi. Git non può scegliere automaticamente quale versione tenere: deve farlo il programmatore.

#### Come riconoscere un conflitto

Quando si esegue `git merge` o `git pull` e ci sono conflitti, Git segnala:

```bash
$ git pull
Auto-merging src/Carrello.java
CONFLICT (content): Merge conflict in src/Carrello.java
Automatic merge failed; fix conflicts and then commit the result.
```

#### Come appare il conflitto nel file

Git marca i conflitti direttamente nel file con marcatori speciali:

```java
<<<<<<< HEAD                    ← inizio della tua versione
public void aggiungi(Prodotto p) {
    if (prodotti.size() < 15) {
        prodotti.add(p);
    }
}
=======                         ← separatore
public void aggiungi(Prodotto p) {
    if (p != null && prodotti.size() < 20) {
        prodotti.add(p);
    }
}
>>>>>>> feature/carrello-ampliato   ← inizio della versione dell'altro
```

#### Come risolvere un conflitto

```bash
# 1. Aprire il file nel tuo editor e scegliere la versione corretta
#    (tua, quella dell'altro, o una combinazione)
#    Eliminare tutti i marcatori <<<, ===, >>>

# 2. Esempio di risoluzione — si decide di tenere entrambe le verifiche:
public void aggiungi(Prodotto p) {
    if (p != null && prodotti.size() < 20) {
        prodotti.add(p);
    }
}

# 3. Marcare il file come risolto
git add src/Carrello.java

# 4. Completare il merge
git commit -m "Risolto conflitto in Carrello.aggiungi()"
```

> ⚠️ **Regola pratica**: i conflitti si minimizzano lavorando su parti diverse del codice e sincronizzandosi spesso con main (`git pull` frequente). Più a lungo si aspetta prima di integrare, più è probabile che i branch divergano e generino conflitti complessi.

---

### Condivisione del progetto — repository remoto

Git supporta due modalità di condivisione:

1. **In rete locale** (via SSH o condivisione di file)
2. **In cloud** (GitHub, Bitbucket, GitLab ecc.)

Le software house preferiscono il cloud per sicurezza e semplicità di collaborazione.

> **Definizione — Repository:** archivio nel quale sono raccolti e conservati dati e informazioni corredati da metadati che li rendono identificabili.

**Piattaforme di hosting:**

- **GitHub** (https://github.com) — la più diffusa; repository privati a pagamento nella versione base
- **Bitbucket** (https://bitbucket.org) — repository privati illimitati anche nella versione gratuita

#### Collegare e usare un repository remoto

```bash
# Collegare il repository locale a quello remoto
git remote add origin https://github.com/utente/progetto.git
# "origin" è il nome convenzionale del repository remoto principale

# Inviare i file locali al repository remoto
git push origin
# Se il push fallisce perché altri hanno fatto push nel frattempo:
# 1. aggiornare il repository locale
# 2. risolvere i conflitti
# 3. riprovare il push

# Scaricare (clonare) un repository remoto esistente
git clone https://github.com/utente/progetto.git

# Aggiornare il repository locale con le modifiche remote (senza merge automatico)
git fetch origin

# Aggiornare + merge automatico delle proprie modifiche
git pull
# ⚠️ Richiede accesso SSH

# Confermare il merge dopo aver risolto i conflitti
git commit -a
```

**Schema dell'architettura con repository remoto:**

```mermaid
flowchart LR
    subgraph DevA[Developer A]
        WDA[Working Dir A]
        IA[Index A]
        LRA[Local Repo A]
        WDA -->|git add| IA
        IA -->|git commit| LRA
    end

    RR[Remote Repository]

    subgraph DevB[Developer B]
        WDB[Working Dir B]
        IB[Index B]
        LRB[Local Repo B]
        WDB -->|git add| IB
        IB -->|git commit| LRB
    end

    LRA <-->|push / pull| RR
    LRB <-->|push / pull| RR
```

---

### Conclusioni

Git è oggi lo strumento di versioning più usato nella comunità dei programmatori. Le sue possibilità sono molto più ampie di quanto trattato qui; questa introduzione copre i concetti essenziali.

Per la documentazione completa: https://git-scm.com/doc

### Mettiti alla prova

1. Crea un repository locale con Git per un progetto su cui stai lavorando.
2. Effettua almeno 10 salvataggi (commit).
3. Dopo il sesto commit, crea una situazione di branch e visualizzala con l'interfaccia Git GUI.
4. Crea un repository su GitHub con nome `<tuonome>/tpsit.git`, condividilo con la classe e usa tutte le funzionalità disponibili.

---

---

# Glossario

Raccolta alfabetica dei termini tecnici usati in questo documento.

---

**Annotazione (Git)** — Funzione dei VCS che permette di aggiungere note e commenti a ogni versione del codice, spiegando le modifiche effettuate.

**As-is scenario** — Scenario che descrive il sistema _attuale_ così come funziona oggi, usato tipicamente nel re-engineering come punto di partenza.

**Attore (UML)** — Entità (persona, sistema esterno o processo automatico) che interagisce con il sistema dall'esterno. Rappresentato graficamente con un omino stilizzato.

**Benchmark / Best practice** — Metodo di confronto con le pratiche eccellenti di altre organizzazioni per migliorare le proprie prestazioni.

**Blob (Git)** — Tipo di oggetto Git che memorizza il contenuto di un file in una specifica versione.

**Branch (Git)** — Ramificazione dello sviluppo: una linea di lavoro parallela e indipendente dal ramo principale, usata per sviluppare funzionalità o correggere bug senza toccare il codice stabile.

**Brainstorming** — Tecnica creativa di gruppo in cui tutti i partecipanti esprimono liberamente idee su un argomento, senza critiche iniziali, per stimolare la creatività collettiva.

**Caso d'uso (use case)** — Sequenza di interazioni tra un attore e il sistema che porta a un risultato di valore per l'attore. Strumento fondamentale per rappresentare i requisiti funzionali.

**Changelog** — Diario delle modifiche: elenco cronologico di tutte le variazioni apportate a un software tra una versione e l'altra.

**Checkout (Git)** — Operazione Git che sposta il puntatore HEAD a un branch o a un commit specifico, aggiornando la directory di lavoro.

**Clone (Git)** — Copia locale completa di un repository remoto, inclusa tutta la cronologia dei commit.

**Commit (Git)** — Operazione Git che salva uno snapshot dello stato corrente dei file nel repository locale, associato a un messaggio descrittivo e all'identità dell'autore.

**Concorrenza (VCS)** — Capacità di un sistema di versionamento di permettere a più sviluppatori di lavorare contemporaneamente sullo stesso progetto, con meccanismi per integrare le modifiche.

**Conflitto (Git)** — Situazione in cui due sviluppatori hanno modificato le stesse righe dello stesso file in branch diversi, richiedendo una risoluzione manuale.

**CVCS** — Centralized Version Control System: sistema di versionamento con un unico repository centrale (es. SVN).

**Dependency Injection (DI)** — Pattern di progettazione in cui le dipendenze di una classe vengono "iniettate" dall'esterno (tipicamente nel costruttore) anziché create internamente. È la forma più comune di applicare il principio DIP.

**Diagramma di contesto** — Use Case Diagram che mostra _tutti_ i casi d'uso di un sistema e tutti gli attori che vi interagiscono, delineando i confini del sistema.

**Discovery / Elicitation** — Termini anglosassoni per la fase di esplorazione dei requisiti: indicano che i requisiti spesso vengono "scoperti" o "estratti" dagli stakeholder, non semplicemente dichiarati.

**DIP — Dependency Inversion Principle** — I moduli di alto livello non devono dipendere da quelli di basso livello; entrambi devono dipendere da astrazioni.

**DVCS** — Distributed Version Control System: sistema di versionamento distribuito dove ogni sviluppatore ha una copia locale completa del repository (es. Git).

**Engagement (stakeholder)** — Coinvolgimento attivo degli stakeholder nel processo di raccolta dei requisiti: dialogare, confrontarsi, ascoltare, prendere impegni.

**Evaluation scenario** — Scenario che descrive i task su cui il sistema sarà valutato; usato come base per i casi di test.

**Feature Branch Workflow** — Flusso di lavoro Git in cui ogni nuova funzionalità viene sviluppata in un branch dedicato, poi integrata nel branch principale tramite Pull Request.

**Fetch (Git)** — Scarica gli aggiornamenti dal repository remoto nel repository locale senza effettuare il merge automatico.

**Focus group** — Tecnica di raccolta requisiti basata su interviste di gruppo: un mediatore guida la discussione tra più stakeholder su un argomento specifico.

**FURPS** — Modello di classificazione dei requisiti non funzionali: Functionality, Usability, Reliability, Performance, Supportability.

**Git** — Sistema di controllo di versione distribuito (DVCS), open source, sviluppato da Linus Torvalds nel 2005. Oggi lo strumento di versioning più usato al mondo.

**GitHub** — Piattaforma di hosting per repository Git, con funzionalità collaborative (Pull Request, Issues, Actions).

**Greenfield engineering** — Sviluppo software che parte da zero, senza sistemi preesistenti da considerare.

**HEAD (Git)** — Puntatore all'ultimo commit effettuato nel branch corrente; rappresenta la versione corrente del progetto.

**IEEE 830-1998** — Standard IEEE per la redazione di documenti SRS (Software Requirements Specification). Definisce struttura e caratteristiche di un efficace documento dei requisiti.

**Index / Stage (Git)** — Area di transito in Git tra la working directory e il repository: contiene i file pronti per essere inclusi nel prossimo commit.

**Ingegneria dei requisiti** (Requirements Engineering) — Insieme delle attività che si occupano di requisiti: raccolta, analisi, documentazione, verifica e validazione.

**Interface engineering** — Tipologia di progetto in cui il sistema sottostante (legacy) resta invariato ma si riprogetta l'interfaccia utente per adattarla ai nuovi ambienti operativi.

**ISP — Interface Segregation Principle** — Una classe non dovrebbe essere costretta a implementare metodi che non usa; preferire molte interfacce piccole e specifiche.

**Jacobson, Ivar** — Ingegnere svedese che ha introdotto il concetto di use case e contribuito alla definizione di UML e della metodologia RUP.

**Javadoc** — Tool sviluppato da Sun Microsystems per generare automaticamente documentazione HTML da commenti con sintassi specifica inseriti nel codice Java.

**Legacy** — Sistema informatico di valore consolidato, ereditato dal passato, su cui l'azienda continua a fare affidamento; non significa "vecchio da buttare" ma "sistema critico ereditato".

**Liskov, Barbara** — Informatica statunitense che ha descritto per prima il principio di sostituzione (LSP) nel 1988.

**LSP — Liskov Substitution Principle** — Le classi derivate devono poter sostituire le classi base in modo trasparente, senza alterare il comportamento del programma.

**Major / Minor / Patch** — I tre livelli della numerazione delle versioni software: Major (cambio sostanziale), Minor (nuove funzionalità), Patch (correzione bug).

**Martin, Robert C. ("Uncle Bob")** — Ingegnere software e autore che ha codificato i cinque principi S.O.L.I.D. per la progettazione orientata agli oggetti.

**MDA — Model Driven Architecture** — Approccio allo sviluppo software in cui i modelli sono parte integrante del processo di implementazione, non solo documentazione.

**Merge (Git)** — Operazione che unisce le modifiche di due branch in un'unica versione, integrando le storie parallele di sviluppo.

**Mock** — Oggetto fittizio usato nei test al posto di una dipendenza reale (database, servizio esterno ecc.), per isolare il componente sotto test.

**OCP — Open/Closed Principle** — Il codice deve essere aperto alle estensioni (si può aggiungere nuovo comportamento) ma chiuso alle modifiche (il codice esistente non va toccato).

**Origin (Git)** — Nome convenzionale assegnato al repository remoto principale da cui il repository locale è stato clonato.

**Polimorfismo** — Capacità di oggetti di classi diverse di rispondere allo stesso messaggio in modo diverso; meccanismo chiave per implementare OCP.

**Pull (Git)** — Scarica gli aggiornamenti dal repository remoto e li integra automaticamente nel branch corrente (equivale a fetch + merge).

**Pull Request (PR)** — Richiesta formale di integrare un branch nel branch principale, con possibilità di revisione del codice da parte dei colleghi prima del merge.

**Push (Git)** — Invia i commit del repository locale al repository remoto.

**Re-engineering** — Tipologia di progetto in cui si riprogetta un sistema esistente perché obsoleto o insufficiente, mantenendone le funzionalità e migliorandone la struttura.

**Repository** — Archivio in cui sono conservati il codice sorgente, la sua cronologia di modifiche e i metadati associati.

**Requirements elicitation** — Raccolta dei requisiti dagli stakeholder; il termine "elicitation" (elicitazione) sottolinea che i requisiti spesso vanno estratti, non sono spontaneamente dichiarati.

**Reversibilità (VCS)** — Capacità di un sistema di versionamento di tornare a qualsiasi punto della storia del codice.

**Scala di Likert** — Scala di valutazione a 5 livelli (da "completamente in disaccordo" a "completamente d'accordo") usata nei questionari per misurare atteggiamenti e opinioni.

**Scenario** — Istanza specifica di un caso d'uso: descrive un particolare percorso di esecuzione con valori concreti e un esito definito (successo o fallimento).

**Sommerville, Ian** — Accademico britannico, autore del libro _Software Engineering_ (10a edizione), punto di riferimento per la disciplina.

**Sprint** — Ciclo di sviluppo breve e iterativo (tipicamente 1-4 settimane) usato nelle metodologie Agili; al termine di ogni sprint viene rilasciato un incremento funzionante del prodotto.

**SRP — Single Responsibility Principle** — Ogni classe deve avere una sola responsabilità e un solo motivo per cambiare.

**SRS — Software Requirements Specification** — Documento ufficiale che descrive in modo formale e completo i requisiti di un sistema software. È il contratto tecnico tra committente e fornitore.

**Stakeholder** — Qualsiasi persona o gruppo che influenza o è influenzato dal sistema in sviluppo: committenti, utenti finali, manager, esperti del dominio, sviluppatori.

**StarUML** — Tool open source per la creazione di diagrammi UML, basato sul paradigma MDA.

**Stereotipo (UML)** — Etichetta racchiusa tra `<<` e `>>` che specializza il significato di un elemento UML; esempi: `<<include>>`, `<<extend>>`, `<<sistema>>`.

**TDD — Test Driven Development** — Metodologia di sviluppo in cui i test vengono scritti _prima_ del codice che devono verificare; S.O.L.I.D. facilita il TDD rendendo il codice testabile.

**Training scenario** — Scenario scritto come tutorial passo-passo per guidare i nuovi utenti nell'uso del sistema.

**UML — Unified Modeling Language** — Linguaggio di modellazione standardizzato per descrivere e progettare sistemi software tramite diagrammi; include Use Case Diagram, Class Diagram, Sequence Diagram e altri.

**Use Case Diagram (UCD)** — Diagramma UML che mostra le relazioni tra attori e casi d'uso di un sistema; strumento principale per rappresentare i requisiti funzionali.

**User story** — Nelle metodologie Agili, descrizione di un requisito dal punto di vista dell'utente, nella forma: "Come <ruolo>, voglio <funzione>, in modo da <valore ottenuto>".

**VCS — Version Control System** — Sistema di controllo delle versioni: software che gestisce le modifiche ai file di un progetto nel tempo, permettendo di tenere traccia della storia, collaborare in team e tornare a versioni precedenti.

**Viewpoint** — Punto di vista di uno specifico attore o categoria di stakeholder sul sistema; analizzare tutti i viewpoint assicura che nessun requisito venga ignorato.

**Visionary scenario** — Scenario che descrive il sistema futuro desiderato, tipicamente proposto dal committente in fase di greenfield engineering o re-engineering.

**Working directory (Git)** — La directory locale con i file su cui si sta lavorando; uno dei tre livelli dell'architettura Git (working directory → index → repository).
