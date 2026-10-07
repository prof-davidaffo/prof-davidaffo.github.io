> [!warning] Attenzione
> Prima di studiare questa dispensa, hai bisogno di studiare le basi dell'algebra di Boole: [[Dispensa sull'algebra di Boole e circuiti logici]] e dei sistemi di numerazione [[Codifica dei numeri#2. Sistemi di numerazione]]
## Introduzione
Questa dispensa segue un percorso completo per comprendere e costruire tutti i circuiti logici fondamentali che costituiscono l’architettura di un computer. L’obiettivo è mostrare come, partendo esclusivamente da porte logiche elementari, sia possibile arrivare a realizzare unità aritmetiche, dispositivi di memoria, sistemi di controllo e infine un processore funzionante. Il metodo è incrementale: ogni circuito introduce un concetto nuovo e fornisce il blocco costruttivo necessario per il successivo. In questo modo l’intero sistema emerge in modo naturale, come risultato della composizione di componenti semplici ma estremamente potenti.
La progressione di questa dispensa segue quella del gioco [nandgame.com]().
## Porte logiche di base

###  Porta logica NAND: costruzione e fondamenti
####  La logica digitale e i circuiti fondamentali
Nel contesto dell’elettronica digitale, i segnali binari (0 e 1) vengono elaborati mediante **circuiti logici**, detti **porte logiche**, ciascuna delle quali realizza una specifica operazione booleana.
Tra tutte le porte logiche, la **porta NAND** occupa un ruolo privilegiato: essa è **funzionalmente completa**, il che significa che tutte le altre operazioni logiche (AND, OR, NOT, XOR, ecc.) possono essere costruite a partire da essa. Per questo motivo, è la porta scelta come **mattoncino base** nell’introduzione ai circuiti logici.

---
####  La porta NAND: definizione logica
La porta NAND (abbreviazione di **NOT AND**) restituisce un valore logico **falso (0)** **solo** quando **entrambi** gli ingressi sono veri (1); in tutti gli altri casi restituisce **vero (1)**.
#####  Tavola di verità della porta NAND
| Ingresso A | Ingresso B | Uscita (A NAND B) |
| ---------- | ---------- | ----------------- |
| 0          | 0          | 1                 |
| 0          | 1          | 1                 |
| 1          | 0          | 1                 |
| 1          | 1          | 0                 |
####  Implementazione della NAND tramite relè
Per comprendere la costruzione fisica della NAND, è utile modellare il circuito usando **relè**, dispositivi elettromeccanici che funzionano come interruttori controllati da corrente elettrica. Storicamente, i primi computer digitali furono costruiti proprio con relè prima dell’avvento dei transistor.
#####  Cos'è un relè?
Un **relè** è un interruttore azionato da un campo magnetico generato da una corrente di controllo. Quando il segnale di controllo è attivo (livello logico 1), il relè **chiude il contatto**, permettendo il passaggio della corrente. Quando è inattivo (livello logico 0), il contatto rimane **aperto**, impedendo la trasmissione del segnale.
Nel contesto logico:
* Un relè controllato da un segnale `x` si comporta come un **interruttore che chiude solo se x = 1**.
* I relè possono essere **concatenati** per implementare operazioni logiche complesse.
---
####  Costruzione della NAND con due relè
#####  Principio di funzionamento
Per costruire una porta NAND con relè, si possono usare **due stadi**:
1. **Primo stadio**: si ottiene collegando due relè in **serie**, controllati rispettivamente dagli ingressi `a` e `b`. In questa configurazione, il segnale passa solo se **entrambi i relè sono chiusi**, cioè se `a = 1` e `b = 1`.
2. **Secondo stadio**: si inverte il risultato del primo stadio usando un **meccanismo invertente**, ad esempio con un relè configurato per **aprire il passaggio** quando il segnale è attivo, e viceversa.

#####  Schema del circuito
![[Media/nand.png]]

---
####  Equivalenza con i circuiti moderni
Sebbene oggi i circuiti digitali siano implementati mediante **transistor**, l’analogia con i relè è diretta:
* Entrambi sono **interruttori controllabili**.
* Entrambi realizzano **funzioni logiche binarie**.
* L’inversione, il controllo multiplo e la combinazione logica si ottengono con configurazioni simili.
Utilizzare relè come modello didattico (come avviene in *nandgame.com*) è vantaggioso perché permette di **visualizzare** i meccanismi logici al livello fisico e strutturale.
###  Porta logica NOT (inverter) costruita con una porta NAND
####  Definizione della porta NOT
La **porta NOT**, detta anche **inverter**, è una delle operazioni logiche fondamentali in algebra booleana. Essa restituisce l’opposto del valore logico in ingresso:
* Se l’ingresso è `0`, l’uscita è `1`.
* Se l’ingresso è `1`, l’uscita è `0`.
#####  Tavola di verità della porta NOT
| Ingresso A | Uscita (NOT A) |
| ---------- | -------------- |
| 0          | 1              |
| 1          | 0              |

---
####  Implementazione della NOT tramite NAND
Una delle proprietà più importanti della porta NAND è che essa può essere **riconfigurata per replicare qualsiasi altra operazione logica**, incluso l’inversore.
Per ottenere una porta NOT utilizzando **solo una NAND**, è sufficiente collegare **entrambi gli ingressi della NAND allo stesso segnale**.
#####  Formula logica
Poiché la NAND restituisce 0 solo quando **entrambi** gli ingressi sono 1, se colleghiamo ad entrambi lo stesso segnale `A`, otteniamo:
* Se `A = 0`, allora `NAND(0, 0) = 1` ⇒ `NOT 0 = 1`
* Se `A = 1`, allora `NAND(1, 1) = 0` ⇒ `NOT 1 = 0`
Questa configurazione simula esattamente il comportamento di una porta NOT.
---
####  Interpretazione circuitale nel contesto logico
Dalla costruzione a partire dalla NAND, possiamo trarre un’importante conseguenza didattica: **la negazione logica può essere vista come un caso particolare dell’operazione NAND**, in cui i due argomenti coincidono.
Nel simulatore *nandgame.com*, questo è il primo esempio in cui si **riutilizza una porta precedentemente costruita (NAND)** per creare un nuovo blocco funzionale (NOT), avviando la costruzione **gerarchica** di un sistema logico.

---
####  Schema logico
![[Media/invert.png]]

---
####  Astrazione e semplificazione
A partire da questo livello, i circuiti non richiedono più la rappresentazione fisica dei componenti interni (come relè, alimentazione, magneti, ecc.). Si passa dunque a una **visione logico-funzionale**, in cui ogni componente viene trattato come una **scatola nera** che trasforma ingressi in uscite secondo una funzione booleana.
Questa astrazione riflette il modello di progettazione digitale usato nell’ingegneria elettronica e nell’informatica teorica: i componenti complessi vengono costruiti componendo **blocchi funzionali più semplici**, ciascuno definito dal proprio comportamento logico.

---
###  Porta logica AND costruita con NAND e NOT
####  Definizione della porta AND
La **porta AND** è una delle tre operazioni logiche fondamentali del sistema booleano. Essa restituisce `1` (vero) **solo quando entrambi** gli ingressi sono `1`.
#####  Tavola di verità della porta AND
| Ingresso A | Ingresso B | Uscita (A AND B) |
| ---------- | ---------- | ---------------- |
| 0          | 0          | 0                |
| 0          | 1          | 0                |
| 1          | 0          | 0                |
| 1          | 1          | 1                |
####  Implementazione della AND con NAND e NOT
Poiché la porta NAND è già stata implementata e può essere usata come **blocco logico riutilizzabile**, e la porta NOT è a sua volta costruita con una NAND, è possibile realizzare la porta AND sfruttando la **negazione del risultato di una NAND**.
#####  Passaggi logici
1. Calcolare `NAND(A, B)`: questa operazione restituisce `¬(A ∧ B)`
2. Invertire il risultato: `NOT(NAND(A, B)) = ¬(¬(A ∧ B)) = A ∧ B`
---
####  Schema logico del circuito
![[Media/and.png]]

---
####  Considerazioni didattiche
Un aspetto importante da sottolineare è che, **dal punto di vista fisico-costruttivo**, non è la porta NAND a derivare dalla AND con negazione, ma esattamente il contrario:

> **La porta AND è costruita invertendo il risultato della NAND.**

In termini teorici, è comune definire la NAND come una **AND seguita da NOT**. Tuttavia, in un contesto di progettazione logica a partire da componenti elementari (come in _nandgame_), **la NAND è il componente primitivo**, e tutte le altre operazioni (inclusa l’AND stessa) **vengono derivate da essa**. Questo rovesciamento di prospettiva è fondamentale per comprendere la logica costruttiva dei circuiti digitali.
###  Porta logica OR costruita con NAND e NOT
####  Definizione della porta OR
La **porta OR** restituisce `1` (vero) se **almeno uno** dei due ingressi è `1`. Solo nel caso in cui **entrambi** gli ingressi siano `0`, l’uscita sarà `0`.
#####  Tavola di verità della porta OR
| Ingresso A | Ingresso B | Uscita (A OR B) |
| ---------- | ---------- | --------------- |
| 0          | 0          | 0               |
| 0          | 1          | 1               |
| 1          | 0          | 1               |
| 1          | 1          | 1               |
####  Derivazione della OR tramite NAND e NOT
Per costruire una porta OR utilizzando solo NAND (e quindi eventualmente inverter costruiti con NAND), si può applicare una trasformazione logica basata sulle **leggi di De Morgan**, che permettono di riscrivere l’OR in termini di AND e NOT.
#####  Legge di De Morgan applicata
$A \lor B = \neg (\neg A \land \neg B)$
Questa espressione ci dice che si può ottenere l’OR in tre passaggi:
1. Invertire `A` → `NOT A`
2. Invertire `B` → `NOT B`
3. Calcolare `AND(NOT A, NOT B)`
4. Invertire il risultato finale
Nel nostro contesto, poiché la **porta AND è costruita come `NOT(NAND(...))`**, questa formula può essere direttamente riscritta in termini di NAND:
#####  Formula completa in NAND
$\text{OR}(A, B) = \text{NAND}(\text{NAND}(A, A), \text{NAND}(B, B))$
Ovvero:
* `NAND(A, A)` = `NOT A`
* `NAND(B, B)` = `NOT B`
* `NAND(NOT A, NOT B)` = `OR(A, B)`
---
####  Schema logico del circuito
![[Media/or.png]]
###  Porta logica XOR costruita con NAND e NOT
####  Definizione della porta XOR
La **porta XOR** (eXclusive OR) restituisce `1` **solo se uno solo** dei due ingressi è `1`. Se entrambi gli ingressi sono uguali (entrambi `0` o entrambi `1`), l’uscita è `0`.
È la porta logica che implementa la **disuguaglianza logica** tra due segnali binari.
#####  Tavola di verità della porta XOR
| Ingresso A | Ingresso B | Uscita (A XOR B) |
| ---------- | ---------- | ---------------- |
| 0          | 0          | 0                |
| 0          | 1          | 1                |
| 1          | 0          | 1                |
| 1          | 1          | 0                |
Formula logica:
[
A \oplus B = (A \land \neg B) \lor (\neg A \land B)
]
---
####  Costruzione della XOR con NAND e NOT
La porta XOR è più complessa rispetto alle precedenti, poiché **non può essere realizzata con una sola o due NAND**, ma richiede una combinazione **gerarchica di più operazioni**.
Partendo dalla definizione logica sopra, e sapendo che abbiamo a disposizione solo:
* **NAND**: $(\neg(A \land B))$
* **NOT**: costruita come $(\text{NAND}(A, A))$
si può derivare una costruzione equivalente della XOR interamente in NAND.
#####  Costruzione funzionale in passi
Un possibile modo per costruire la XOR è il seguente:
1. Calcolare `NAND(A, B)` → chiamiamolo `n1`
   (equivale a `¬(A ∧ B)`)
2. Calcolare `NAND(A, n1)` → chiamiamolo `n2`
   (equivale a `¬(A ∧ ¬(A ∧ B))`)
3. Calcolare `NAND(B, n1)` → chiamiamolo `n3`
   (equivale a `¬(B ∧ ¬(A ∧ B))`)
4. Calcolare `NAND(n2, n3)` → questo è il risultato finale
   (equivale a `¬(¬(A ∧ ¬(A ∧ B)) ∧ ¬(B ∧ ¬(A ∧ B)))`)
#####  Formula finale in NAND
$\text{XOR}(A, B) = \text{NAND}(\text{NAND}(A, \text{NAND}(A, B)), \text{NAND}(B, \text{NAND}(A, B)))$
Questa espressione utilizza **quattro porte NAND**, e non richiede inverter espliciti se si considera che il NOT è implementato con una NAND autocollegata.

---
####  Schema logico del circuito
![[Media/xor.png]]

---
### Conclusione – Dalla NAND al calcolatore
Attraverso la costruzione progressiva delle principali porte logiche (NOT, AND, OR, XOR), a partire dalla sola **porta NAND**, si è dimostrato un principio fondamentale dell’informatica teorica e dell’ingegneria digitale:

> **L’intera logica di un calcolatore può essere costruita a partire dalla porta NAND.**

Questo è possibile grazie alla proprietà di **completezza funzionale** della NAND: qualsiasi funzione booleana, e quindi qualsiasi circuito logico, può essere realizzata combinando un numero finito di porte NAND. In particolare:

* **NOT** si ottiene collegando i due ingressi della NAND allo stesso segnale.
* **AND** si ottiene negando l’uscita della NAND.
* **OR** si ottiene negando gli ingressi e applicando NAND (secondo De Morgan).
* **XOR** si costruisce tramite una combinazione multilivello di NAND.
A partire da questi blocchi, si possono realizzare **unità aritmetiche**, **registri**, **contatori**, **memorie**, **unità di controllo**, fino ad arrivare al cuore del calcolatore: la **CPU** (unità centrale di elaborazione). Ogni singola operazione svolta da un processore — dall’addizione di due numeri alla valutazione di una condizione logica — può essere ricondotta a una sequenza di operazioni realizzate con **porte logiche costruite su NAND**.
Questa visione è ciò che *nandgame.com* traduce in forma interattiva: costruire **dal basso verso l’alto** la logica di un calcolatore, partendo da un singolo, semplicissimo componente.
## Aritmetica
###  Sommatore binario
####  Introduzione
L’addizione è una delle operazioni fondamentali alla base di qualunque sistema digitale. Ogni volta che un processore esegue un calcolo, aggiorna un indirizzo di memoria o incrementa un contatore, sta effettuando una somma binaria. Per questo motivo il **sommatore** è uno dei circuiti combinatori più importanti dell’intera architettura di un computer.
Sommare numeri binari segue le stesse idee dell’addizione decimale: ogni cifra viene sommata con quella della stessa posizione e, quando la somma supera il valore rappresentabile con un solo bit, si genera un riporto verso la posizione successiva. La differenza è che nel sistema binario ci sono solo due cifre possibili, quindi l’addizione tra bit è estremamente semplice e può essere implementata direttamente con poche porte logiche.
Per progettare un sommatore completo occorre partire da due elementi base:
* il **semisommatore**, che somma due bit e calcola sia il bit di somma sia il riporto;
* il **sommatore completo**, che aggiunge al modello precedente la gestione di un riporto in ingresso.
Da questi due blocchi è possibile costruire circuiti in grado di sommare numeri di qualunque lunghezza, come i **sommatori paralleli**, ottenuti collegando più full-adder in cascata. Una volta implementata correttamente la somma binaria, è possibile sfruttare le stesse strutture anche per la sottrazione grazie alla rappresentazione in complemento a 2, rendendo i sommatori uno dei pilastri essenziali nella costruzione dell'ALU.
Le sezioni che seguono illustrano passo dopo passo la costruzione di questi blocchi, utilizzando le immagini e gli schemi presenti nel materiale originale per seguire in modo chiaro l’evoluzione dalla somma di un singolo bit fino alla realizzazione di un circuito aritmetico completo.
#### Semisommatore (Half-Adder)
Il **semisommatore** è il circuito più semplice in grado di effettuare la somma tra due bit. Riceve in ingresso i bit **A** e **B** e produce:
* **S**, il bit della somma
* **C**, il riporto generato dalla somma
La somma binaria segue regole molto immediate:
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0 con riporto 1
Questa logica corrisponde esattamente al comportamento della porta XOR per la somma e della porta AND per il riporto.
![[Media/fcf44d3ab12f26cbb5e97443c594c43f_MD5.jpeg]]
Per tenere conto sia del bit di somma sia del riporto, il circuito completo del semisommatore deve rispettare la seguente tabella della verità:
![[Media/44e7d070f3cba39d82500c24a0917cb8_MD5.jpeg]]
* **A** e **B** sono i bit da sommare
* **S** è il bit della somma
* **C** è il bit del riporto
Combinando una porta XOR e una porta AND si ottiene il comportamento desiderato, formando così il semisommatore o **Half-Adder (HA)**.
#### Circuito Sommatore (Full-Adder)
Il **sommatore completo** (Full-Adder, FA) estende il comportamento del semisommatore permettendo di sommare non solo i bit **A** e **B**, ma anche un **riporto in ingresso** proveniente dalla posizione meno significativa. È questo elemento che consente di concatenare più sommatori per ottenere la somma di numeri con più bit.
Il full-adder ha quindi:
* **Ingressi:**
  * A
  * B
  * Cᵢ (riporto in ingresso)
* **Uscite:**
  * S (bit di somma)
  * Cₒ (riporto in uscita)
Il suo schema logico è il seguente:
![[Media/full_adder.png]]
![[Media/308ee129c6dc461ac15d1c95c5624572_MD5.jpeg]]
La somma S viene calcolata sommando prima A e B, poi aggiungendo il riporto Cᵢ.
Osservando la tabella di verità, si può ricavare la formula finale:
```
S = (A ⊕ B) ⊕ Cᵢ
```
Il riporto in uscita Cₒ è 1 in due situazioni:
1. quando almeno due tra A, B e Cᵢ valgono 1
2. quando la somma dei tre bit genera un overflow verso il bit successivo
Questo porta alla formula:
```
Cₒ = (A AND B) OR (Cᵢ AND (A ⊕ B))
```
Queste due relazioni sono fondamentali per implementare un sommatore a più bit, poiché permettono di “passarsi” il riporto da un full-adder al successivo. Nel prossimo punto vedremo come concatenare questi blocchi per ottenere un **sommatore parallelo**, capace di sommare numeri binari completi.
#### Sommatore Parallelo
Finora abbiamo visto come sommare singoli bit usando semisommatori e full-adder. Per sommare numeri binari composti da più bit è sufficiente mettere in cascata più full-adder, uno per ogni posizione, formando un **sommatore parallelo**.
![[Media/51529a5f41b1f9a0769f199e948e1693_MD5.jpeg]]
Consideriamo il caso di un sommatore a 4 bit. I due numeri da sommare sono:
* A = A₃ A₂ A₁ A₀
* B = B₃ B₂ B₁ B₀
  dove A₀ e B₀ sono i bit meno significativi. A ciascuna coppia di bit (Aᵢ, Bᵢ) è associato un full-adder:
* il full-adder meno significativo somma A₀, B₀ e il riporto iniziale (di solito 0)
* il riporto in uscita viene passato al full-adder successivo, che somma A₁, B₁ e quel riporto
* il processo continua fino al bit più significativo, che produce l’ultimo riporto C₄
  In questo modo tutti i bit dei due numeri vengono presentati **in parallelo** agli ingressi del sommatore e la somma viene calcolata contemporaneamente, con i riporti che si propagano da destra verso sinistra.
![[Media/multibit_adder.png]]
  ![[Media/1ad6471b63cd2b6c56d9303f7935b843_MD5.jpeg]]
  Nel caso di un sommatore a 4 bit, le uscite saranno:
* S₀, S₁, S₂, S₃: i bit della somma
* C₄: il riporto finale, che può indicare un overflow se la somma esce dal range rappresentabile con 4 bit
  Questo tipo di struttura è chiamata anche **sommatore a propagazione di riporto** (ripple-carry adder), perché ogni full-adder deve attendere il riporto dal blocco precedente. È una soluzione semplice e diretta, sufficiente per capire il funzionamento interno dei calcolatori e per costruire i primi modelli di ALU.
###  Increment

L’operazione di incremento aumenta di uno il valore binario in ingresso. Per realizzarla non è necessario un circuito dedicato: è sufficiente sfruttare direttamente il comportamento del sommatore già introdotto.

Incrementare equivale a eseguire:

```
X + 1
```

Per ottenere questo risultato si collega:

- il numero da incrementare all’ingresso A,
    
- il valore **000…0000** all’ingresso B,
    
- e si imposta il **carry-in iniziale a 1**.
    

Il sommatore esegue automaticamente l’incremento tramite la normale propagazione dei riporti.

Esempio a 4 bit:

```
 A:   0111
 B:   0000
Cin:     1
--------------
 S:   1000
```

Il carry iniziale avvia l’addizione con 1, e i riporti si propagano tra i bit finché necessario. Il risultato è un incremento ottenuto in modo semplice ed efficiente sfruttando esclusivamente la logica del sommatore.
![[Media/increment.png]]

### Sottrattori binari
Nei calcolatori attuali **non esiste** un circuito separato per la sottrazione. L’hardware non implementa direttamente A − B. Al contrario, la sottrazione viene trasformata in un’addizione, sfruttando la rappresentazione dei numeri in **complemento a 2**.
Questo approccio permette di utilizzare esattamente lo stesso sommatore già costruito per l’addizione, evitando di progettare un circuito dedicato.
L’idea è la seguente:
```
A − B = A + (complemento a 2 di B)
```
Per ottenere il complemento a 2 di un numero occorre:
1. invertire tutti i bit (complemento a 1)
2. aggiungere 1 tramite il carry-in del sommatore
![[Media/ebd31e412d0091b89a91f851d20d5d6f_MD5.jpeg]]
![[Media/subtraction.png]]
In questo modo, sommando A con la versione complementata di B, il risultato binario rappresenta esattamente A − B secondo le convenzioni del complemento a 2. Il circuito sfrutta quindi un normale sommatore, con poche modifiche per gestire l’inversione di B e l’impostazione del riporto iniziale.
Quando A è maggiore di B, il risultato è positivo e il riporto finale indica che non si è verificato overflow:
**Caso A – minuendo maggiore del sottraendo**
![[Media/1482b9ef70a223cdb7cf5c5bc6f39a9e_MD5.jpeg]]
Quando invece A è minore di B, la sottrazione produce un risultato negativo, che viene espresso direttamente in complemento a 2:
**Caso B – minuendo minore del sottraendo**
![[Media/b9f4127311d9c62864e7d9d96ffffe29_MD5.jpeg]]
In questo caso il riporto finale *non* si genera, e il bit più significativo del risultato è 1, segnalando che il numero è negativo.
Se si desidera ottenere il valore assoluto, basta applicare nuovamente il complemento (invertire i bit e sommare 1).
Questo meccanismo rende la struttura aritmetica molto più semplice, perché la stessa rete combinatoria può realizzare sia l’addizione sia la sottrazione con una sola modifica del percorso di ingresso di uno degli operandi.
#### Circuito di sottrazione basato sul complemento
Per implementare una sottrazione utilizzando lo stesso circuito impiegato per l’addizione, occorre essere in grado di generare il **complemento dell’operando B** e di gestire correttamente il riporto iniziale. La struttura si basa sul complemento a 1 applicato bit per bit, seguito dall’eventuale somma di 1 tramite il carry-in.
Il primo passo è costruire un circuito che possa **invertire ogni bit di B quando richiesto**.
L’idea è semplice: utilizzare una porta XOR per ciascun bit di B, controllata da un segnale P che indica se stiamo facendo una sottrazione.
* Se **P = 0**, l’uscita è B (nessuna sottrazione).
* Se **P = 1**, l’uscita è NOT B (primo passo per ottenere il complemento).
![[Media/49d000ab4f74955cd67ef59a85240cd7_MD5.jpeg]]
Il secondo passaggio consiste nell’aggiungere **il riporto iniziale** C₀.
Quando P = 1 (sottrazione), il carry-in deve essere impostato a 1 per completare il **complemento a 2**:
* Somma di A + (NOT B) + 1 → A − B
Il riporto finale C₃ riportato in uscita dal bit più significativo contiene un’informazione importante:
* se è 1, significa che **A ≥ B**
* se è 0, significa che **A < B**, quindi il risultato è negativo
![[Media/ba6e7d8daf9eea442b6586d2433f879c_MD5.jpeg]]
Per permettere al circuito di funzionare sia da sommatore sia da sottrattore, il segnale P deve:
1. decidere se invertire B (tramite XOR)
2. decidere se attivare il carry-in iniziale
In questo modo, con un solo selettore è possibile controllare entrambe le operazioni.
Il circuito completo, ottenuto sostituendo uno dei due input con la sua versione condizionatamente invertibile, è costituito da **4 full-adder collegati in cascata**, ognuno dotato del proprio XOR per l'inversione:
![[Media/1e1845e2fbb1989509866ffbae4a01d3_MD5.jpeg]]
Quando il risultato è negativo (bit più significativo = 1 e riporto finale = 0), potrebbe essere necessario ottenere il valore assoluto. Anche questo si ottiene tramite la stessa tecnica: un XOR controllato più un incremento finale.
Il circuito per la **complementazione finale** è infatti identico a quello utilizzato per invertire B:
![[Media/417de07d8b8d11e63b863d5c090143c6_MD5.jpeg]]
Questo schema permette quindi di realizzare:
* addizione
* sottrazione
* complemento a 1
* complemento a 2
* modulo (valore assoluto di un numero negativo)
…il tutto riutilizzando esclusivamente:
* XOR
* full-adder
* linee di controllo
#### Complemento a 2 e numeri negativi
Come visto nei sistemi digitali, i numeri interi relativi si rappresentano con il [[Codifica dei numeri#2.6 Rappresentazione dei numeri negativi il complemento a 2|complemento a 2]], utilizzando il bit più pesante come bit di segno:
0 → numero positivo
1 → numero negativo
Nel complemento a 2, il range di valori rappresentabili non è simmetrico: con 4 bit, ad esempio, si possono rappresentare i numeri da −8 a +7. I numeri negativi non sono memorizzati con un “segno” separato, ma come particolari configurazioni di bit che si ottengono complementando a 2 il corrispondente valore positivo.
![[Media/d23276f5237eed75bd9a1277ae89f675_MD5.jpeg]]
Per calcolare il complemento a 2 di un numero binario si procede così:
1. si invertono tutti i bit (complemento a 1)
2. si aggiunge 1 al risultato utilizzando un sommatore
Questa operazione può essere realizzata in hardware con un circuito dedicato.
![[Media/b7a973de578dc6120275f9df90a609f6_MD5.jpeg]]
Il circuito rappresentato permette di eseguire il complemento a 2 di un numero a 4 bit: se A₀ = 1 viene attivata la complementazione a 2 sui bit di ingresso X; se A₀ = 0 il numero attraversa il circuito senza essere modificato. In questo modo lo stesso blocco può essere usato sia per lasciare invariato il dato sia per trasformarlo nel suo opposto.
Esempio:
Numero +5 = 0101
Dopo la complementazione (A₀ = 1):
![[Media/45a68b168e41b903f565a931e896e286_MD5.jpeg]]
Risultato: 1011, che in complemento a 2 rappresenta −5
Nel sistema binario a complemento a 2, la differenza tra due numeri positivi si ottiene complementando a 2 il sottraendo e sommando il risultato al minuendo. Lo stesso circuito può però essere sfruttato anche per ricavare il modulo (valore assoluto) di un numero negativo.
   ![[Media/5567723d08e1b5714e520cd6bf2f2f03_MD5.jpeg]]
Se il numero in ingresso è negativo, il bit più significativo X₃ vale 1. Questo bit può essere usato per pilotare direttamente l’ingresso di complementazione A₀: quando X₃ = 1 il circuito esegue automaticamente il complemento a 2, trasformando il numero negativo nel suo valore assoluto.
Esempio: per calcolare |1101₍C2₎| si pone A₀ = X₃.
1101₍C2₎ = −3 → il circuito restituisce 0011₍C2₎ = 3
Questo meccanismo permette di realizzare in modo compatto operazionidel tipo A ± |B| con A positivo e B rappresentato in complemento a 2. In un sistema a 4 bit è sufficiente collegare i dispositivi visti (sommatore, circuito di complemento e logica di controllo) nel modo seguente:
![[Media/2120a628f152cfb8100b913b1c6fb2e8_MD5.jpeg]]
Una volta implementate correttamente somma, sottrazione tramite complemento a 2 e calcolo del modulo, si dispone di tutti i blocchi necessari per costruire una vera e propria unità aritmetico-logica (ALU). La moltiplicazione può essere vista come una somma ripetuta, mentre la divisione come una sottrazione ripetuta: le operazioni più complesse si appoggiano quindi sempre alla struttura dei sommatori e ai circuiti di complemento.
###  Equal to Zero
Questo circuito verifica se un numero binario in ingresso è uguale a zero. L’idea è semplice: se almeno uno dei bit è pari a 1, allora il numero non è zero; se tutti i bit sono 0, allora l’ingresso rappresenta effettivamente lo zero.
Il comportamento si ottiene combinando i bit tramite un’operazione di OR multi-bit. L’uscita dell’OR sarà:
* 1 se almeno un bit è uguale a 1
* 0 se tutti i bit sono 0
Per ottenere il segnale “uguale a zero” si applica una negazione a questo risultato.
Esempio a 4 bit:
```
Input: 0000
OR → 0
NOT → 1   (il numero è zero)
```
Altro esempio:
```
Input: 0101
OR → 1
NOT → 0   (il numero non è zero)
```
Il circuito finale è quindi costituito da:
1. una serie di OR che combinano tutti i bit dell’ingresso
2. una singola NOT sull’uscita dell’OR
Il risultato è un segnale a 1 quando il numero è esattamente zero.
![[Media/equal_to_zero.png]]
###  Less than Zero
Questo circuito determina se un numero binario rappresentato in complemento a 2 è negativo. Nei sistemi digitali il segno di un numero è indicato dal bit più significativo (MSB):
* **0** → numero positivo
* **1** → numero negativo
Di conseguenza, per verificare se un valore è minore di zero non serve alcun calcolo: è sufficiente osservare direttamente l’MSB.
Esempio a 4 bit:
```
1001  → negativo
0110  → positivo
```
Il circuito è quindi estremamente semplice: l’uscita corrisponde al valore del bit più significativo.
Se l’MSB è 1, il numero è minore di zero; se è 0, è maggiore o uguale a zero.
![[Media/less_than_zero.png]]

## Switching
###  Multiplexer (MUX) (Selector)

Un **multiplexer** (abbreviato in MUX) è un circuito logico combinatorio che seleziona uno tra molteplici ingressi e lo indirizza verso una singola uscita. Questa selezione è governata da specifici segnali di controllo, detti **linee di selezione**.
Immaginalo come un interruttore elettronico: in base a un comando (le linee di selezione), decide quale ingresso "passare" all'uscita.
![[Media/selector.png]]
####  Come Funziona?

1. **Ingressi:** $2^n$ ingressi ($A, B, C, D$), che rappresentano i dati tra cui scegliere.
2. **Linee di selezione:** $n$ linee di selezione ($P_1, P_2$) che servono per indicare quale ingresso attivare.
3. **Uscita:** L’uscita ($Y$) è il valore dell’ingresso selezionato.

---

####  Multiplexer 2-a-1
![[Media/mux_2_1.png]]
Un **multiplexer 2-a-1** è il tipo più semplice di multiplexer. Ha:

- **2 ingressi**: $A$ e $B$,
- **1 linea di selezione**: $P$, che decide quale dei dati in ingresso viene inviato all'uscita,
- **1 uscita**: $Y$, che rappresenta l'ingresso selezionato.

#####  Schema Logico del MUX 2-a-1

La funzione logica del MUX 2-a-1 è:

$$Y=A \cdot P + B \cdot \overline{P}$$

- Quando $P = 0$, l'uscita è uguale a $B$.
- Quando $P = 1$, l'uscita è uguale a $A$.

#####  Tabella della Verità del MUX 2-a-1

|Linea di selezione $P$|Ingresso $A$|Ingresso $B$|Uscita $Y$|
|---|---|---|---|
|0|0|0|0|
|0|0|1|1|
|0|1|0|0|
|0|1|1|1|
|1|0|0|0|
|1|0|1|0|
|1|1|0|1|
|1|1|1|1|

---
#### Multiplexer ottimale
In realtà posso semplificare il circuito utilizzando solo le nand e ottenendo un comportamento analogo:
![[Media/selector.png]]
####  Multiplexer 4-a-1
![[Media/mux_4_1.png]]
Un **multiplexer 4-a-1**:

- Ha **4 ingressi** ($A, B, C, D$).
- Ha **2 linee di selezione** ($P_1$ e $P_2$) per scegliere uno degli ingressi.
- Ha **1 uscita** ($Y$).

Le linee di selezione determinano quale ingresso passa all'uscita:

- Se $P_1 = 0$ e $P_2 = 0$, l’ingresso $A$ viene inviato all’uscita.
- Se $P_1 = 0$ e $P_2 = 1$, viene inviato $B$.
- Se $P_1 = 1$ e $P_2 = 0$, l’ingresso $C$ viene inviato all’uscita.
- Se $P_1 = 1$ e $P_2 = 1$, l’ingresso $D$ viene inviato all’uscita.

#####  Espressione logica del MUX 4 a 1

L'espressione logica del MUX 4 a 1 è dunque:  
$$Y = A \cdot \overline{P_1} \cdot \overline{P_2} + B \cdot \overline{P_1} \cdot P_2 + C \cdot P_1 \cdot \overline{P_2} + D \cdot P_1 \cdot P_2$$

#####  Tabella di verità

Ecco la tabella di verità per un MUX 4 a 1:

| $P_1$ | $P_2$ | $A$ | $B$ | $C$ | $D$ | $Y$ (uscita) |
| :---: | :---: | :-: | :-: | :-: | :-: | :----------: |
|   0   |   0   | $A$ |  X  |  X  |  X  |     $A$      |
|   0   |   1   |  X  | $B$ |  X  |  X  |     $B$      |
|   1   |   0   |  X  |  X  | $C$ |  X  |     $C$      |
|   1   |   1   |  X  |  X  |  X  | $D$ |     $D$      |

- $X$ indica che quel valore è irrilevante, poiché non influisce sull’uscita.
####  Altri multiplexer
Posso creare multiplexer con un qualunque numero di dati in ingresso, ricordando di avere $n$ linee di selezione e $2^n$ linee di dati.
###  Demultiplexer (DMUX) (Switch)
Il **demultiplexer** è il circuito complementare al multiplexer. Mentre il multiplexer seleziona uno tra più ingressi e lo invia a un’unica uscita, il demultiplexer prende **un solo ingresso** e lo indirizza verso **una delle due uscite** in base a un segnale di controllo.
Per questo motivo viene anche chiamato **1-a-2**, oppure semplicemente **switch**.
Il comportamento è il seguente:
* se il segnale di controllo è 0, l’ingresso viene inviato all’uscita 0
* se il segnale di controllo è 1, l’ingresso viene inviato all’uscita 1
L’uscita non selezionata rimane forzata a 0.
####  Funzionamento logico
Indichiamo con:
* **I** l’ingresso del demultiplexer
* **P** la linea di controllo
* **Y₀** e **Y₁** le due uscite
Le due uscite vengono generate così:
```
Y₀ = I AND (NOT P)
Y₁ = I AND P
```
Esempio:
* Se `I = 1` e `P = 0` → `Y₀ = 1`, `Y₁ = 0`
* Se `I = 1` e `P = 1` → `Y₀ = 0`, `Y₁ = 1`
* Se `I = 0` → entrambe le uscite sono 0, indipendentemente da P
####  Tabella della verità
| P (controllo) | I (ingresso) | Y₀ | Y₁ |
| ------------- | ------------ | -- | -- |
| 0             | 0            | 0  | 0  |
| 0             | 1            | 1  | 0  |
| 1             | 0            | 0  | 0  |
| 1             | 1            | 0  | 1  |
####  Utilità del demultiplexer
Il demultiplexer permette di:
* instradare un segnale verso linee diverse
* gestire distribuzione condizionata di dati
* costruire sistemi di memoria e registri controllati da linee di abilitazione
* definire percorsi logici alternativi all’interno di unità di controllo
È un blocco essenziale nei sistemi digitali perché permette al segnale di “scegliere dove andare” in base allo stato del controllo, completando il comportamento opposto rispetto al multiplexer.
![[Media/switch.png]]
####   Demultiplexer 1-a-4
Un demultiplexer 1-a-4 estende il comportamento del demultiplexer 1-a-2: l’ingresso unico viene inviato a una sola tra quattro uscite, selezionata tramite due linee di controllo. Le altre uscite vengono forzate a zero.
Il circuito ha:
* ingresso unico **I**
* due linee di controllo **P₁** e **P₂**
* quattro uscite **Y₀**, **Y₁**, **Y₂**, **Y₃**
#####   Funzionamento logico
Le combinazioni delle linee di controllo determinano quale uscita viene attivata. Le equazioni risultano:
```
Y₀ = I AND (NOT P₁) AND (NOT P₂)
Y₁ = I AND (NOT P₁) AND P₂
Y₂ = I AND P₁ AND (NOT P₂)
Y₃ = I AND P₁ AND P₂
```
#####   Tabella della verità
| P₁ | P₂ | I | Y₀ | Y₁ | Y₂ | Y₃ |
| -- | -- | - | -- | -- | -- | -- |
| 0  | 0  | 0 | 0  | 0  | 0  | 0  |
| 0  | 0  | 1 | 1  | 0  | 0  | 0  |
| 0  | 1  | 1 | 0  | 1  | 0  | 0  |
| 1  | 0  | 1 | 0  | 0  | 1  | 0  |
| 1  | 1  | 1 | 0  | 0  | 0  | 1  |
E così via...

> [!warning] Attenzione
> Nel contesto dei circuiti digitali, _switch_ indica un demultiplexer: un singolo ingresso viene deviato verso una delle uscite in base a linee di controllo.  
> Nella programmazione, invece, _switch…case_ è un costrutto che seleziona quale blocco di istruzioni eseguire.  
> I due concetti condividono il nome perché entrambi “deviano” un flusso, ma non sono collegati né funzionano allo stesso modo.

## Arithmetic Logic Unit (ALU)
L’ALU è il blocco centrale di ogni processore, responsabile dell’esecuzione delle operazioni aritmetiche e logiche sui dati. È il punto in cui i valori binari vengono effettivamente manipolati: sommate, sottratte, confrontate, combinate tramite operazioni bit-a-bit. Tutto ciò che un computer “calcola” passa attraverso questo circuito.
Un’ALU tipica è composta da due sezioni principali:
* una **unità aritmetica**, che esegue operazioni come somma, sottrazione e incremento usando i sommatori realizzati in precedenza
* una **unità logica**, che applica funzioni logiche come AND, OR o XOR sui bit in ingresso
Entrambi i risultati vengono prodotti in parallelo. Un segnale di controllo seleziona poi quale dei due utilizzare in uscita. In questo modo l’ALU può svolgere molte operazioni diverse riutilizzando gli stessi blocchi fondamentali. Eventuali segnali aggiuntivi, come quelli che indicano se il risultato è zero o negativo, completano il comportamento necessario alla costruzione della logica di controllo del processore.
### Logic Unit
La Logic Unit esegue operazioni logiche bit-a-bit sui due ingressi a 16 bit, **X** e **Y**. Il comportamento è controllato da due bit di selezione, **op1** e **op0**, che determinano quale delle quattro operazioni viene applicata. Ogni bit della parola in uscita è calcolato indipendentemente dagli altri, applicando la stessa operazione alle coppie di bit corrispondenti di X e Y.

| op1 | op0 | Operazione | Descrizione                                                     |
| --- | --- | ---------- | --------------------------------------------------------------- |
| 0   | 0   | X AND Y    | Confronto logico bit-a-bit: 1 solo quando entrambi i bit sono 1 |
| 0   | 1   | X OR Y     | 1 quando almeno uno dei due bit è 1                             |
| 1   | 0   | X XOR Y    | 1 quando i bit sono diversi                                     |
| 1   | 1   | NOT X      | Inversione di ogni bit dell’operando X                          |
Le quattro funzioni sono ottenute componendo porte elementari costruite in precedenza. In particolare:
* **X AND Y** utilizza una rete di AND parallele, una per ciascun bit.
* **X OR Y** combina i bit di X e Y tramite OR parallele.
* **X XOR Y** utilizza XOR parallele; questa operazione è utile nei confronti e nelle somme.
* **NOT X** richiede l’inversione di ciascun bit tramite una rete di NOT.
La Logic Unit è quindi un selettore di operazioni: tutti i risultati parziali vengono calcolati in parallelo, mentre **op1** e **op0** scelgono quale dei quattro valori debba comparire in uscita, tramite un multiplexer a 4 ingressi per ciascun bit.
In questo modo, la struttura rimane uniforme: 16 multiplexer identici, tutti controllati dagli stessi due bit, producono l’uscita logica finale.

#### Circuito completo
![[Media/logic_unit.png]]
### Arithmetic Unit
#### Arithmetic Unit
L’Arithmetic Unit è il blocco responsabile delle operazioni aritmetiche fondamentali eseguite dall’ALU. In questo caso opera su due ingressi a 16 bit, **X** e **Y**, e utilizza due bit di controllo (**op1** e **op0**) per determinare quale operazione eseguire. Le quattro combinazioni possibili corrispondono a quattro operazioni:

| op1 | op0 | Operazione | Descrizione                         |
| --- | --- | ---------- | ----------------------------------- |
| 0   | 0   | X + Y      | Addizione dei due operandi          |
| 1   | 0   | X - Y      | Sottrazione tramite complemento a 2 |
| 0   | 1   | X + 1      | Incremento dell’operando X          |
| 1   | 1   | X - 1      | Decremento dell’operando X          |
Il cuore dell’unità aritmetica è sempre un **sommatore a 16 bit**. Le altre operazioni vengono ottenute manipolando opportunamente l’ingresso Y e il carry-in del sommatore, sfruttando il principio secondo cui tutte le operazioni aritmetiche si possono ricondurre a una somma.
Funzionamento dei quattro casi:
* **X + Y**
  Y passa invariato al sommatore; carry-in iniziale = 0.
* **X - Y**
  L’unità genera il complemento a 2 di Y (invertendo ogni bit e aggiungendo 1 al carry-in) e poi somma X + (−Y).
* **X + 1**
  L’ingresso Y viene posto a 0 e il carry-in iniziale è impostato a 1, ottenendo l’incremento tramite la somma X + 1.
* **X - 1**
  L’ingresso Y viene posto a 0, ma l’unità genera il complemento a 2 di 1 (ossia tutti 1 in ingresso al sommatore) ottenendo X + (−1), cioè X − 1.
In tutti i casi l’unico blocco realmente utilizzato è il sommatore parallelo, reso versatile grazie al controllo sui bit op0 e op1, che determinano se invertire Y, se iniettare un carry iniziale e se ignorare Y completamente. Questa strategia mantiene il progetto hardware semplice ed efficiente, evitando circuiti separati per ogni operazione.
#### Circuito completo
![[Media/arithmetic_unit.png]]

### ALU
#### Introduzione
L’ALU (Arithmetic Logic Unit) combina in un unico circuito tutte le operazioni logiche e aritmetiche richieste dal processore. La sua struttura è modulare: le operazioni logiche vengono gestite dalla Logic Unit, quelle aritmetiche dalla Arithmetic Unit, mentre una serie di selettori e flag aggiuntivi permettono di manipolare gli operandi prima dell’elaborazione.
L’uscita finale dell’ALU è scelta tramite un multiplexer che, in base al bit di controllo **u**, seleziona se restituire un risultato aritmetico oppure logico.

---
#### Manipolazione degli operandi: zx e sw
Prima di passare alle unità logiche e aritmetiche, l’ALU può trasformare i due ingressi X e Y attraverso due flag:
* **zx** (zero X): se vale 1, il valore X viene sostituito con 0
* **sw** (swap): se vale 1, X e Y vengono scambiati
Questi due controlli permettono di generare varianti delle operazioni senza aggiungere nuove funzioni. Per esempio, nel caso dell’operazione X − Y:

| zx | sw | Operazione eseguita |
| -- | -- | ------------------- |
| 0  | 0  | X − Y               |
| 0  | 1  | Y − X               |
| 1  | 0  | 0 − Y               |
| 1  | 1  | 0 − X               |
I due ingressi modificati vengono poi inviati sia alla Logic Unit sia alla Arithmetic Unit.

---
#### Logic Unit
La Logic Unit riceve in ingresso gli (eventualmente modificati) X e Y e genera quattro risultati in parallelo:
* X AND Y
* X OR Y
* X XOR Y
* NOT X
Un selettore a due bit (**op1, op0**) sceglie quale delle quattro operazioni logiche viene prodotta come risultato logico finale.
---
#### Arithmetic Unit
La Arithmetic Unit elabora gli stessi operandi modificati e calcola quattro operazioni aritmetiche:
* X + Y
* X − Y
* X + 1
* X − 1
Anche qui, due bit di controllo (**op1, op0**) determinano quale delle quattro uscite aritmetiche deve essere selezionata.

---
#### Selezione finale: u
L’ultimo livello dell’ALU consiste in un multiplexer a 16 bit controllato dal segnale **u**:
* **u = 0 → uscita logica** (proveniente dalla Logic Unit)
* **u = 1 → uscita aritmetica** (proveniente dalla Arithmetic Unit)
Il risultato del multiplexer è l’uscita finale dell’ALU.
---
#### Tabella delle operazioni dell’ALU
| u | op1 | op0 | Operazione finale |
| - | --- | --- | ----------------- |
| 0 | 0   | 0   | X AND Y           |
| 0 | 0   | 1   | X OR Y            |
| 0 | 1   | 0   | X XOR Y           |
| 0 | 1   | 1   | NOT X             |
| 1 | 0   | 0   | X + Y             |
| 1 | 1   | 0   | X − Y             |
| 1 | 0   | 1   | X + 1             |
| 1 | 1   | 1   | X − 1             |
I flag **zx** e **sw** agiscono *prima* della selezione delle otto operazioni, modificando gli operandi e quindi influenzando qualunque operazione aritmetica o logica.
![[Media/alu.png]]
### Condition
#### Introduzione
Il blocco **Condition** valuta il risultato numerico **X** prodotto dall’ALU e stabilisce se soddisfa una o più condizioni logiche. Queste condizioni sono codificate tramite tre flag in ingresso:
* **lt** → indica la condizione *“less than zero”* (X < 0)
* **eq** → indica la condizione *“equal to zero”* (X = 0)
* **gt** → indica la condizione *“greater than zero”* (X > 0)
Ogni flag non descrive direttamente una condizione, ma specifica **se la condizione deve essere verificata**. L'uscita vale 1 solo se almeno una delle condizioni richieste è soddisfatta dal valore X.
---
#### Condizioni fondamentali
Le tre condizioni di base dipendono da due proprietà del numero X:
* il **bit di segno** (MSB) indica se X è negativo
* lo **zero flag** indica se X è uguale a zero
Combinando queste due informazioni si ottiene:
* X < 0 → bit di segno = 1
* X = 0 → zero flag = 1
* X > 0 → bit di segno = 0 e zero flag = 0
Il blocco Condition usa questi due segnali per verificare le condizioni richieste dai flag lt, eq e gt.
---
#### Combinazioni dei flag di condizione
I tre flag possono essere combinati per esprimere qualunque confronto base. L’uscita vale 1 se **il valore di X soddisfa almeno una delle condizioni selezionate**.
La tabella seguente riassume il comportamento:

| lt | eq | gt | Uscita = 1 quando… |
| -- | -- | -- | ------------------ |
| 0  | 0  | 0  | Mai                |
| 0  | 0  | 1  | X > 0              |
| 0  | 1  | 0  | X = 0              |
| 0  | 1  | 1  | X ≥ 0              |
| 1  | 0  | 0  | X < 0              |
| 1  | 0  | 1  | X ≠ 0              |
| 1  | 1  | 0  | X ≤ 0              |
| 1  | 1  | 1  | Sempre             |
#### Interpretazione
Questa struttura permette di ottenere con pochi segnali tutte le condizioni necessarie per i salti condizionali della Control Unit:
* verifica di uguaglianza
* maggiore/minore
* maggiore o uguale
* minore o uguale
* diverso da zero
* salto incondizionato
Il blocco Condition funziona come un decoder di condizioni, trasformando i flag lt/eq/gt in un singolo segnale di controllo utilizzabile per determinare il flusso di esecuzione del programma.
#### Circuito
![[Media/condition_my.png]]
#### Circuito ottimizzato
![[Media/condition.png]]

## Memory
### SR Latch
L’**SR Latch** (Set/Reset Latch) è il circuito più semplice in grado di **memorizzare un singolo bit**. Diversamente dai circuiti combinatori, che producono un’uscita immediata in base agli ingressi, un latch mantiene il proprio stato anche dopo che i segnali in ingresso sono cambiati.
Il circuito ha due ingressi:
* **s** (set): serve per impostare l’uscita a 1
* **r** (reset): serve per impostare l’uscita a 0
Il comportamento dell’SR Latch è il seguente:
* Quando **s = 1** e **r = 0**, l’uscita viene forzata a 1.
* Quando **s = 0** e **r = 1**, l’uscita viene forzata a 0.
* Quando **s = 1** e **r = 1**, l’uscita **non cambia**: viene mantenuto il valore precedente memorizzato nel latch.
* Quando **s = 0** e **r = 0**, il comportamento è **non definito**: il circuito non ha un valore stabile e il risultato non è garantito.
Questo significa che il latch può mantenere l’informazione solo se almeno uno dei due ingressi è attivo (set o reset).
Prima della prima attivazione di set o reset, l’uscita è anch’essa indefinita.
Tabella di funzionamento:

| s | r | Uscita            |
| - | - | ----------------- |
| 1 | 0 | 1                 |
| 0 | 1 | 0                 |
| 1 | 1 | Valore precedente |
| 0 | 0 | Indefinita        |
Lo SR Latch rappresenta il primo passo verso l’introduzione della **memoria sequenziale**, poiché consente di conservare uno stato nel tempo e costituisce la base per circuiti più complessi come latch abilitati e flip-flop.
![[Media/latch.png]]
#### Dal SR Latch al D Latch: perché serve un’evoluzione
Lo SR Latch è il componente più semplice capace di memorizzare un bit, ma presenta due problemi strutturali:
La combinazione s = 0 e r = 0 è indeterminata: l’uscita non è definita.
La combinazione s = 1 e r = 1 è ambigua: il valore precedente viene mantenuto, ma non rappresenta un comando “chiaro” al circuito.
In altre parole, lo SR Latch richiede due segnali separati (set e reset) che non devono mai essere attivi insieme e che non devono mai essere entrambi a zero. Questo lo rende poco pratico da utilizzare in circuiti reali, dove è necessario un comportamento prevedibile e privo di combinazioni vietate.
Per risolvere questo limite, si introduce il D Latch, che semplifica radicalmente il meccanismo di scrittura.
### D Latch
Il **D Latch** (Data Latch) è un circuito sequenziale in grado di **memorizzare un singolo bit**.
Rispetto all’SR Latch, il D Latch è progettato per evitare condizioni non definite: il dato da memorizzare è fornito da un unico ingresso (**d**), mentre il controllo dell’aggiornamento avviene tramite un segnale di abilitazione (**st**, store).
Il suo comportamento è semplice:
* Quando **st = 1**, il valore presente su **d** viene acquisito e inviato in uscita.
* Quando **st = 0**, l’uscita **rimane invariata**, indipendentemente dal valore di d.
  In questa fase il latch mantiene il bit precedentemente memorizzato.
Prima della prima memorizzazione, l’uscita è indefinita (può assumere 0 o 1).
Tabella di funzionamento:

| st | d | Uscita            |
| -- | - | ----------------- |
| 1  | 0 | 0                 |
| 1  | 1 | 1                 |
| 0  | 0 | Valore precedente |
| 0  | 1 | Valore precedente |
Il D Latch viene spesso utilizzato come blocco base per la costruzione di registri e memorie, poiché consente di controllare in maniera pulita quando il dato deve essere aggiornato e quando invece mantenuto stabile.
![[Media/d_latch.png]]
### Data Flip-Flop (DFF)
Il **Data Flip-Flop (DFF)** è il componente fondamentale della memoria sincrona. A differenza dei latch, che aggiornano immediatamente l’uscita quando cambia l’ingresso, il DFF utilizza un **clock** per controllare *esattamente quando* memorizzare un valore e quando renderlo disponibile in uscita. Questo meccanismo evita le problematiche presenti nei sistemi basati esclusivamente sui latch.
##### Perché i latch non bastano
Un circuito costruito solo con latch cambia stato in tempo reale: ogni variazione degli ingressi si propaga immediatamente e senza coordinamento. In circuiti complessi ciò genera aggiornamenti che avvengono in ordine imprevedibile, dando luogo a **race condition** e comportamenti non deterministici.
Per evitare questi problemi, tutti i componenti sequenziali devono aggiornarsi **contemporaneamente**.
La soluzione è il **clock**, un segnale binario condiviso che oscilla periodicamente tra 0 e 1.
Quando i componenti cambiano stato solo in corrispondenza delle transizioni del clock, l’intero circuito evolve in modo sincronizzato e prevedibile.
Un **ciclo di clock** corrisponde al passaggio:
```
0 → 1 → 0
```
La velocità con cui il clock oscilla è il **clock rate**: più è alta, più velocemente opera il processore.

> Nota
> Il clock non misura il tempo: fornisce solo un ritmo regolare. In combinazione con un contatore, è possibile costruire dispositivi che tengono traccia del tempo o scandiscono operazioni.
##### Il Flip-Flop come combinazione di due latch
Un DFF può essere costruito utilizzando **due latch** collegati in sequenza:
1. **Primo latch (fase di memorizzazione)**
   Viene aggiornato quando **cl = 1**.
   In questa fase il valore d viene acquisito e memorizzato internamente come *next*, ma non è ancora inviato all’uscita.
2. **Secondo latch (fase di aggiornamento dell’uscita)**
   Viene aggiornato quando il clock torna **a 0**.
   In questo momento *next* viene trasferito in uscita.
In questo modo il DFF:
* **cattura il dato** durante la transizione del clock verso 1,
* **aggiorna l’uscita** solo durante il ritorno del clock a 0.
L’uscita rimane quindi stabile per l’intera durata del ciclo di clock, evitando propagazioni incontrollate.
##### Comportamento del DFF
Durante il funzionamento, gli ingressi sono:
* **d**: valore da memorizzare
* **st**: abilita la memorizzazione
* **cl**: clock
Il comportamento complessivo è:
* **cl = 0**
  Gli ingressi possono cambiare liberamente; nessun aggiornamento dell’uscita avviene.
* **transizione cl: 0 → 1**
  Se **st = 1**, il valore di d viene memorizzato (next).
  Se **st = 0**, il valore precedente viene conservato.
* **transizione cl: 1 → 0**
  Il valore memorizzato viene trasferito all’uscita.
Tabella degli effetti quando cl = 1:

| st | d | Effetto sul valore memorizzato |
| -- | - | ------------------------------ |
| 1  | 0 | next = 0                       |
| 1  | 1 | next = 1                       |
| 0  | 0 | invariato                      |
| 0  | 1 | invariato                      |
Prima della prima scrittura, l’uscita del DFF è indefinita.
Il DFF, grazie alla sua sincronizzazione con il clock, è la base per registri, contatori, memorie e per l’intera logica sequenziale dei moderni processori.


![[Media/data_flipflop.png]]
### Register
Un **Register** è un componente sequenziale che permette di **memorizzare più bit contemporaneamente** e di recuperarli come un’unica parola.
Dal punto di vista concettuale, un registro non è altro che **più Data Flip-Flop affiancati**, tutti sincronizzati dallo stesso segnale di clock.
Per comprendere il funzionamento, partiamo dal caso più semplice: un **registro a 2 bit**.

---
#### Registro a 2 bit: idea di base
Un **DFF** memorizza **un solo bit**.
Per memorizzare **due bit nello stesso istante**, è sufficiente usare **due DFF in parallelo**:
* il primo memorizza **d1**
* il secondo memorizza **d0**
Entrambi condividono:
* lo stesso **clock (cl)**
* lo stesso segnale di **store (st)**
In questo modo i due bit vengono memorizzati e aggiornati **insieme**, come un’unica unità.
---
#### Costruzione del registro a 2 bit
Il registro è composto da:
* **2 Data Flip-Flop**
* ingressi dati: **d1**, **d0**
* un segnale **st** comune
* un segnale **cl** comune
---
#### Funzionamento
Il comportamento del registro è identico a quello di un DFF, ma applicato a più bit contemporaneamente.
* Quando **st = 1** e il clock compie un ciclo:
  * i valori **d1** e **d0** vengono memorizzati
* Quando **st = 0**:
  * il contenuto del registro rimane invariato
* L’uscita (**q1, q0**) viene aggiornata **solo alla transizione cl: 1 → 0**
I due bit vengono sempre scritti e letti **insieme**.
---
#### Tabella di funzionamento (concettuale)
| st | Effetto                       |
| -- | ----------------------------- |
| 1  | memorizza (d1, d0)            |
| 0  | mantiene il valore precedente |
L’uscita cambia solo in corrispondenza del clock, come per ogni DFF.

---
#### Estensione a registri più grandi
Il passaggio da 2 bit a 16 bit non introduce **nessuna nuova idea**:
si tratta solo di affiancare più DFF.
* Registro a 2 bit → 2 DFF
* Registro a 4 bit → 4 DFF
* Registro a 8 bit → 8 DFF
* Registro a 16 bit → 16 DFF
Tutti i flip-flop condividono:
* lo stesso **st**
* lo stesso **cl**
e formano una parola unica.
#### Circuito
![[Media/register.png]]
### Counter
Il **Counter** è un componente sequenziale che produce in uscita un numero a 16 bit e lo aggiorna automaticamente a ogni ciclo di clock. È costruito sopra un registro (basato su flip-flop), ma con una logica aggiuntiva che permette di:
* **caricare** un valore esterno X quando richiesto
* **incrementare** il valore corrente quando non viene effettuato alcun caricamento
Il funzionamento dipende da due ingressi:
* **st** (store): se vale 1, il contatore carica il valore X
* **cl** (clock): definisce il momento in cui l’uscita viene aggiornata
Il contatore possiede due valori interni:
* **output** → il valore attualmente in uscita
* **next** → il valore che diventerà output alla prossima discesa del clock
Il comportamento è il seguente.
##### Quando cl = 0
Durante questa fase, il contatore calcola il valore **next**:
* Se **st = 1**
  il valore X viene caricato come prossimo contenuto:
  ```
  next = X
  ```
* Se **st = 0**
  il contatore incrementa il valore attuale:
  ```
  next = output + 1
  ```
In entrambi i casi, l’uscita corrente non cambia ancora.
##### Transizione del clock: cl = 1 → 0
Quando il clock torna a 0, il valore memorizzato in **next** viene trasferito in uscita:
```
output = next
```
Da questo momento, l’uscita rappresenta il nuovo stato del contatore, valido fino al ciclo successivo.
##### Riepilogo degli effetti (quando cl = 0)
| st | cl | Effetto           |
| -- | -- | ----------------- |
| 0  | 0  | next = output + 1 |
| 1  | 0  | next = X          |
L’uscita viene aggiornata solo alla transizione **cl: 1 → 0**, esattamente come per un registro basato su flip-flop.
Il Counter è la base per:
* contatori di programma (PC)
* gestione degli indirizzi nelle RAM
* temporizzatori
* dispositivi di sincronizzazione
e rappresenta uno dei componenti fondamentali nei processori e nelle architetture digitali.
![[Media/counter.png]]
### RAM
Una **RAM** (Random Access Memory) è un’unità di memoria composta da più registri, ognuno dei quali è in grado di conservare un valore a 16 bit. La caratteristica principale della RAM è l’**accesso diretto**: ogni parola di memoria può essere letta o scritta conoscendone l’indirizzo, indipendentemente dalla sua posizione fisica nel circuito.
Per comprendere il meccanismo di indirizzamento, costruiamo prima una memoria composta da **due registri** e la rendiamo selezionabile tramite un singolo bit di indirizzo.
##### Ingressi
La RAM riceve i seguenti segnali:
* **ad** (address): seleziona quale dei due registri usare (0 → registro 0, 1 → registro 1).
* **st** (store): indica se si vuole scrivere un valore nella memoria.
  * Se **st = 1**, il valore **X** viene memorizzato nel registro selezionato.
  * Se **st = 0**, la memoria non viene modificata.
* **X**: valore a 16 bit da memorizzare.
* **cl** (clock): sincronizza le operazioni di scrittura e aggiornamento dell’uscita.
##### Funzionamento temporale
Come in tutti i componenti sequenziali basati su flip-flop, la RAM segue due momenti distinti:
* **Transizione cl: 0 → 1**
  Se **st = 1**, il valore X viene memorizzato nel registro selezionato dall’indirizzo ad.
  Se **st = 0**, nessuna scrittura avviene.
* **Transizione cl: 1 → 0**
  Il registro selezionato emette il proprio valore aggiornato in uscita.
In questo modo la lettura e la scrittura sono perfettamente sincronizzate con il clock.
##### Uscita
L’uscita del blocco RAM è semplicemente il contenuto del registro selezionato da **ad**, reso disponibile dopo la discesa del clock.
##### Indirizzamento e scalabilità
In questa costruzione iniziale disponiamo di due registri, quindi di due possibili indirizzi:
```
ad = 0 → seleziona il registro 0
ad = 1 → seleziona il registro 1
```
Questa semplice struttura è però **ricorsiva**: utilizzando selettori più ampi (MUX e DEMUX) e combinando più registri, è possibile costruire memorie più grandi:
* 2 registri → 1 bit di indirizzo
* 4 registri → 2 bit di indirizzo
* 8 registri → 3 bit
* …
* 65.536 registri → 16 bit di indirizzo
Poiché la nostra architettura è a 16 bit, disponendo di 16 linee di indirizzo possiamo indirizzare fino a:
```
2^16 = 65.536 parole
```
##### Capacità della memoria
Ogni parola è lunga **16 bit = 2 byte**.
Quindi la capacità totale della memoria diventa:
```
65.536 parole × 2 byte = 131.072 byte
```
Questa quantità viene espressa come:
```
128 KB
```
perché nel contesto delle memorie digitali:
* 1 KB = 1024 byte
  e non 1000 come nelle unità di misura decimali.
![[Media/ram.png]]
###   Combined Memory
La **Combined Memory** rappresenta l’intero sistema di memoria del processore. È costituita da **due registri da 16 bit**, chiamati **A** e **D**, e da una **RAM**. Dal punto di vista architetturale, questo blocco raccoglie e coordina tutti i meccanismi di memorizzazione disponibili per il processore.
Il processore può scrivere un valore a 16 bit **X** in uno o più elementi di memoria nello stesso ciclo di clock, utilizzando opportuni **flag di controllo**.
####   Struttura della memoria
Il sistema di memoria è organizzato su **due livelli**:
* i **registri**, pochi e direttamente accessibili, usati per valori temporanei e calcoli intermedi;
* la **RAM**, molto più capiente, usata per memorizzare dati e programmi, ma accessibile solo tramite un indirizzo.
In questo processore sono presenti solo due registri:
* **A**, usato principalmente per contenere indirizzi di memoria;
* **D**, usato per contenere dati.
Questa scelta rappresenta il minimo indispensabile per realizzare un processore funzionante. Nei processori reali il numero di registri è generalmente molto maggiore, ma il principio rimane identico.
####   Scrittura nella memoria
La scrittura è controllata da tre flag indipendenti:
* **a**: scrive il valore X nel registro A;
* **d**: scrive il valore X nel registro D;
* **\*a**: scrive il valore X nella RAM all’indirizzo contenuto nel registro A.
I flag possono essere **attivati in qualsiasi combinazione**. Questo significa che lo stesso valore X può essere scritto contemporaneamente:
* solo in A,
* solo in D,
* solo in RAM,
* in A e D,
* in A e RAM,
* in D e RAM,
* in A, D e RAM.
Se tutti e tre i flag sono uguali a 0, l’ingresso X viene ignorato e nessuna memoria viene modificata.
Tutte le operazioni di scrittura sono **sincronizzate dal clock** (**cl**), come per gli altri componenti sequenziali del processore.
####   Lettura della memoria
La Combined Memory fornisce tre uscite distinte:
* **A**: il valore attualmente contenuto nel registro A;
* **D**: il valore attualmente contenuto nel registro D;
* **\*A**: il valore contenuto nella RAM all’indirizzo specificato dal registro A.
In questo modo il registro A svolge un doppio ruolo: è una memoria veloce interna al processore e, allo stesso tempo, fornisce l’indirizzo per accedere alla RAM.
####   *Ruolo dei flag*
Un *flag* è un ingresso binario che abilita una specifica operazione. In questo componente i flag **a**, **d** e **a\*** sono indipendenti tra loro e non si escludono a vicenda. Questo consente al processore di eseguire più scritture nello stesso ciclo di clock, rendendo il flusso delle istruzioni più efficiente.
####   Considerazioni architetturali
La Combined Memory mostra chiaramente come un processore utilizzi contemporaneamente *registri* e *RAM*, assegnando a ciascun tipo di memoria un ruolo preciso. Questa separazione tra memoria veloce e memoria capiente è una caratteristica fondamentale di tutti i computer reali e costituisce la base per l’esecuzione delle istruzioni e dei programmi.
#### Circuito
![[Media/combined_memory.png]]
###   ALU Instruction
Una **ALU Instruction** è una parola di controllo che specifica **che operazione deve eseguire l’ALU**, **dove deve andare il risultato** e **se devono essere verificate condizioni sul risultato**.
In pratica, questa istruzione collega tre blocchi fondamentali del processore:
* **ALU** (calcolo)
* **memoria combinata** (destinazione del risultato)
* **unità di condizione** (verifica logica sul risultato)
L’istruzione è codificata in un insieme di bit, ognuno dei quali ha un significato preciso.
####   Struttura dell’istruzione
Ogni bit dell’istruzione controlla un aspetto specifico del comportamento del processore.

| Bit | Gruppo       | Flag | Significato                                |
| --: | ------------ | ---- | ------------------------------------------ |
|  10 | ALU          | u    | seleziona unità logica o aritmetica        |
|   9 | ALU          | op1  | selezione operazione ALU                   |
|   8 | ALU          | op0  | selezione operazione ALU                   |
|   7 | ALU          | zx   | forza a zero l’operando sinistro           |
|   6 | ALU          | sw   | scambia gli operandi                       |
|   5 | destinazione | a    | scrive il risultato nel registro A         |
|   4 | destinazione | d    | scrive il risultato nel registro D         |
|   3 | destinazione | *a   | scrive il risultato in RAM all’indirizzo A |
|   2 | condizione   | lt   | verifica risultato < 0                     |
|   1 | condizione   | eq   | verifica risultato = 0                     |
|   0 | condizione   | gt   | verifica risultato > 0                     |
Questa suddivisione rende evidente che **una singola istruzione** controlla più sottosistemi contemporaneamente.
####   Operandi dell’ALU
L’ALU riceve sempre due ingressi:
* **X**, che è sempre il contenuto del registro **D**
* **Y**, che dipende da un bit dell’istruzione
Un bit aggiuntivo dell’istruzione (bit 12) seleziona la sorgente di Y:
* se il bit 12 vale 0 → Y = A
* se il bit 12 vale 1 → Y = \*A (contenuto della RAM all’indirizzo A)
In questo modo l’ALU può lavorare sia su valori contenuti nei registri, sia su valori provenienti dalla memoria.
####   Operazione dell’ALU
I bit **u, op1, op0, zx e sw** determinano l’operazione eseguita dall’ALU.
Il risultato dell’operazione viene prodotto in uscita come valore **R**.
L’ALU non decide autonomamente cosa fare con R: si limita a calcolarlo. Le decisioni successive dipendono dai bit di destinazione e di condizione.
####   Destinazione del risultato
I bit **a**, **d** e **\*a** indicano **dove scrivere il risultato R**:
* se **a = 1**, R viene scritto nel registro A
* se **d = 1**, R viene scritto nel registro D
* se **\*a = 1**, R viene scritto in RAM all’indirizzo contenuto in A
I flag di destinazione sono indipendenti: il risultato può essere scritto in più destinazioni contemporaneamente.
Se tutti e tre valgono 0, il risultato viene calcolato ma **non memorizzato**.
####   Condizioni e flag j
I bit **lt**, **eq** e **gt** definiscono una condizione da verificare sul risultato R dell’ALU:
* **lt**: R < 0
* **eq**: R = 0
* **gt**: R > 0
Questi bit possono essere combinati per definire condizioni più complesse.
Il segnale di uscita **j** vale 1 se il risultato R soddisfa la condizione specificata dai bit 0–2, altrimenti vale 0.
Il flag **j** non modifica direttamente la memoria: viene utilizzato dall’unità di controllo per decidere, ad esempio, se effettuare un salto o proseguire con l’istruzione successiva.
####   Ruolo dell’ALU Instruction
La ALU Instruction è il punto di incontro tra:
* calcolo aritmetico e logico
* aggiornamento dei registri e della RAM
* controllo del flusso di esecuzione
Attraverso questa istruzione, il processore esegue operazioni, memorizza risultati e prende decisioni, rendendo possibile l’esecuzione di programmi complessi.
#### Circuito
![[Media/instruction.png]]
###   Control Selector
Il **Control Selector** è un componente di controllo che permette al processore di **scegliere tra due possibili insiemi di segnali di uscita**, in base al valore di un singolo flag di selezione.
Non esegue calcoli né memorizza dati: il suo unico compito è **instradare correttamente i segnali di controllo**.
Questo meccanismo è fondamentale per supportare **diversi tipi di istruzioni** all’interno della CPU.
####   Funzione del selettore
Il Control Selector riceve in ingresso **due gruppi completi di segnali**, indicati con indice 0 e indice 1, e produce in uscita **un solo gruppo**, scelto tramite il flag **s**.
Il comportamento è il seguente:
* se **s = 0**, vengono inoltrati i segnali del gruppo 0
* se **s = 1**, vengono inoltrati i segnali del gruppo 1
####   Segnali coinvolti
Per ciascun gruppo sono presenti i seguenti segnali:
* **R**: risultato (tipicamente dall’ALU o da un’altra sorgente)
* **a**: scrittura nel registro A
* **d**: scrittura nel registro D
* **\*a**: scrittura in RAM all’indirizzo A
* **j**: esito della condizione (usato per il controllo del flusso)
La selezione avviene **su tutti i segnali contemporaneamente**.

| s   | R   | a   | d   | /*a | j   |
| --- | --- | --- | --- | --- | --- |
| 0   | R₀  | a₀  | d₀  | *a₀ | j₀  |
| 1   | R₁  | a₁  | d₁  | *a₁ | j₁  |
####   Perché è necessario
In un processore non tutte le istruzioni funzionano allo stesso modo.
Alcune istruzioni:
* producono un risultato da scrivere in memoria,
* altre aggiornano solo registri,
* altre ancora servono solo a valutare condizioni o a controllare il flusso.
Il Control Selector permette di **unificare il percorso dei segnali**, scegliendo di volta in volta quale insieme di controlli deve essere applicato, senza duplicare l’hardware a valle.
In questo modo:
* la CPU rimane modulare,
* i diversi tipi di istruzione condividono la stessa struttura,
* la logica di controllo risulta più semplice e leggibile.
####   Considerazione finale
Il Control Selector è un componente semplice, ma svolge un ruolo cruciale:
consente al processore di **comportarsi in modi diversi usando sempre gli stessi blocchi interni**, semplicemente cambiando quali segnali vengono effettivamente applicati.
#### Circuito
![[Media/control_selector.png]]
###   Control Unit
La **Control Unit** è il componente che interpreta le istruzioni del programma e genera tutti i segnali di controllo necessari per far funzionare correttamente il processore.
Il suo compito è decidere **che tipo di istruzione è stata ricevuta** e **quali segnali attivare** per eseguirla.
In questo processore esistono **due tipi di istruzioni**:
* **Data instruction**
* **ALU instruction**
La distinzione tra i due tipi è determinata da **un singolo bit** dell’istruzione.
####   Selezione del tipo di istruzione
Il bit più significativo dell’istruzione (**bit 15**) indica il tipo di istruzione:

| Bit 15 | Tipo di istruzione |
| -----: | ------------------ |
|      0 | Data instruction   |
|      1 | ALU instruction    |
La Control Unit usa questo bit come **segnale di selezione** per decidere quale comportamento adottare.
####   Data instruction
Una **data instruction** serve esclusivamente a caricare un valore costante nel registro **A**.
Non coinvolge l’ALU né la RAM.
Il comportamento è il seguente:
* il valore dell’istruzione **I** viene usato direttamente come risultato **R**
* il risultato viene scritto **solo** nel registro A
I segnali di controllo prodotti sono quindi:
* **R = I**
* **a = 1**
* **d = 0**
* **\*a = 0**
* **j = 0**
In questo tipo di istruzione, l’ALU non è utilizzata: l’istruzione stessa rappresenta il dato da memorizzare.
####   ALU instruction
Una **ALU instruction** viene gestita secondo le regole definite nel blocco *ALU Instruction*.
In questo caso:
* l’ALU esegue l’operazione specificata dai bit dell’istruzione
* **R** è il risultato prodotto dall’ALU
* i flag **a**, **d** e **\*a** indicano dove scrivere il risultato
* il flag **j** indica se il risultato soddisfa la condizione specificata
Per le ALU instruction, la Control Unit **non modifica** i segnali: si limita a inoltrare quelli già determinati dalla decodifica dell’istruzione.
####   Ruolo del Control Selector
La Control Unit utilizza il **Control Selector** per scegliere tra:
* i segnali generati per una **data instruction**
* i segnali generati per una **ALU instruction**
Il bit 15 dell’istruzione funge da selettore:
* se vale 0 → vengono usati i segnali della data instruction
* se vale 1 → vengono usati i segnali della ALU instruction
In questo modo entrambe le tipologie di istruzioni condividono lo stesso percorso hardware a valle.
####   Programmi e istruzioni
Un **programma** è semplicemente una sequenza di istruzioni.
Ogni istruzione è un insieme di bit che specificano:
* quale operazione eseguire (ALU o caricamento dati)
* quali operandi usare
* dove memorizzare il risultato
* se e come valutare una condizione
La Control Unit è il componente che rende possibile questa interpretazione, trasformando una parola binaria in un comportamento concreto del processore.
####   Considerazione finale
La Control Unit è il vero “direttore d’orchestra” della CPU:
non calcola, non memorizza, ma **coordina** tutti gli altri componenti.
Grazie a essa, una sequenza di bit diventa un programma eseguibile.
#### Circuito
![[Media/control_unit.png]]
###  Computer
Il **Computer** è il risultato finale della composizione di tutti i componenti costruiti fino a questo punto. Non introduce nuovi concetti logici fondamentali, ma **coordina** elementi già noti per realizzare l’esecuzione automatica di un programma.
Un computer, in questa architettura, è un sistema che:
* legge un’istruzione dalla memoria di programma,
* la interpreta tramite la control unit,
* esegue operazioni su dati e memoria,
* decide quale istruzione eseguire successivamente.
Questo ciclo si ripete indefinitamente, sincronizzato dal clock.
####   Componenti del computer
Il computer è composto dai seguenti blocchi:
* **Control Unit**, che interpreta l’istruzione corrente e genera i segnali di controllo.
* **Storage Memory**, costituita da:
  * registri A e D,
  * RAM.
* **Program Memory (ROM)**, che contiene il programma, cioè la sequenza di istruzioni.
* **Program Counter (PC)**, un contatore che tiene traccia dell’indirizzo della prossima istruzione da eseguire.
* **Clock**, che sincronizza tutte le operazioni.
####   Flusso delle istruzioni
Il funzionamento del computer segue sempre lo stesso schema:
1. Il **Program Counter** contiene l’indirizzo dell’istruzione corrente.
2. La **ROM** fornisce la parola memorizzata a quell’indirizzo.
3. Questa parola diventa l’ingresso **I** della **Control Unit**.
4. La Control Unit:
   * decodifica l’istruzione,
   * attiva l’ALU, la memoria e i registri secondo i flag dell’istruzione.
5. Al termine del ciclo di clock, il **Program Counter** viene aggiornato.
####   Aggiornamento del Program Counter
Il comportamento del PC dipende dal segnale **j**, prodotto dall’unità di condizione durante l’esecuzione dell’istruzione.
* Se **j = 0**
  il Program Counter viene **incrementato di 1**, passando all’istruzione successiva:
  ```
  PC = PC + 1
  ```
* Se **j = 1**
  il Program Counter viene **caricato con il valore del registro A**:
  ```
  PC = A
  ```
Questo meccanismo permette di realizzare:
* esecuzione sequenziale delle istruzioni,
* salti condizionati,
* cicli,
* strutture di controllo tipiche dei linguaggi di programmazione.
####   Ruolo della ROM
La **Program Memory** è una memoria di sola lettura (**ROM**): il suo contenuto non viene modificato durante l’esecuzione del programma.
Essa contiene il codice macchina, ovvero le istruzioni che il computer deve eseguire.
A ogni ciclo, la ROM viene interrogata all’indirizzo indicato dal PC e fornisce l’istruzione corrispondente.
####   Il ciclo di esecuzione
L’insieme delle operazioni descritte costituisce il **ciclo di esecuzione del processore**:
* fetch: lettura dell’istruzione dalla ROM,
* decode: interpretazione dell’istruzione,
* execute: esecuzione dell’operazione e aggiornamento dello stato,
* update: aggiornamento del Program Counter.
Questo ciclo è interamente governato dal clock e rappresenta il cuore del funzionamento di qualsiasi computer.
![[Media/computer.png]]

###   Input and Output
Per essere realmente utile, un computer deve poter **comunicare con il mondo esterno**. Questo avviene tramite dispositivi hardware come schermi, tastiere, pulsanti, sensori, interfacce di rete e così via.
In questa architettura l’interazione con l’esterno viene realizzata tramite il meccanismo di **memory-mapped input/output**.
####   Memory-mapped I/O
Con il termine **memory-mapped I/O** si indica una tecnica in cui i dispositivi di input e output vengono collegati **allo stesso spazio di indirizzamento della RAM**.
Dal punto di vista del processore, non esiste alcuna differenza tra:
* leggere o scrivere una cella di RAM;
* leggere o scrivere un dispositivo esterno.
In entrambi i casi il processore utilizza:
* un **indirizzo**,
* un **dato**,
* i normali segnali di lettura e scrittura.
Questo approccio semplifica enormemente l’architettura: il processore non ha bisogno di istruzioni speciali per l’I/O, ma usa gli stessi meccanismi già visti per la memoria.
####   Dispositivi utilizzati
In questo livello vengono integrati due dispositivi hardware molto semplici:
* una **lampada**, che rappresenta un dispositivo di output;
* un **pulsante**, che rappresenta un dispositivo di input.
Entrambi vengono mappati nello spazio di memoria del processore.
####   Output verso un dispositivo
La **lampada** è un dispositivo di output controllato scrivendo un valore nella sua posizione di memoria.
Il controllo avviene utilizzando i bit meno significativi del valore X:
* **bit 1 = 1** → accende la lampada (on)
* **bit 0 = 1** → spegne la lampada (off)
I segnali verso l’hardware vengono inviati **solo quando**:
* **st = 1** (scrittura abilitata)
* **cl = 1** (fase attiva del clock)
In questo modo il comportamento del dispositivo di output è sincronizzato con il resto del sistema, esattamente come la RAM e i registri.
####   Input da un dispositivo
Il **pulsante** è un dispositivo di input. Il suo stato viene reso disponibile leggendo il valore associato alla sua posizione di memoria.
Lo stato del pulsante è rappresentato da:
* **bit 15 dell’uscita**
Il significato è:
* bit 15 = 1 → pulsante premuto
* bit 15 = 0 → pulsante non premuto
A differenza dell’output, i segnali di input devono essere **leggibili immediatamente**: il valore del pulsante è sempre disponibile sull’uscita, senza attendere il clock o un’operazione di scrittura.
####   Considerazioni architetturali
Grazie al memory-mapped I/O:
* il processore può controllare dispositivi esterni usando le stesse istruzioni usate per la RAM;
* input e output diventano parte integrante dello spazio di memoria;
* non è necessaria alcuna logica speciale dedicata all’I/O.
Questo modello è ampiamente utilizzato anche nei computer reali, specialmente nei sistemi embedded e nei microcontrollori, e rappresenta uno dei modi più semplici ed efficaci per collegare un processore al mondo esterno.
Con l’integrazione di input e output, il computer non è più un sistema chiuso, ma diventa in grado di **percepire** e **agire** sull’ambiente che lo circonda.
![[Media/input_output.png]]
## Altri esempi di utilizzo dell'algebra booleana in contesti reali
###  Utilizzo dello XOR in crittografia
####  Introduzione
L'operazione XOR è centrale in molti sistemi crittografici grazie alla sua capacità di combinare dati in modo reversibile. In crittografia, l'uso dell'XOR permette di fondere il testo in chiaro con una chiave (o keystream) in modo che l'operazione di cifratura e decifratura sia identica, semplificando così i processi di protezione dei dati.

####  Proprietà rilevanti
Le proprietà che rendono l'XOR particolarmente utile in crittografia sono:

- **Invertibilità:** La stessa operazione viene usata per cifrare e decifrare; infatti, applicare l'XOR due volte con la stessa chiave restituisce il dato originale (A XOR B XOR B = A).
- **Commutatività e associatività:** Consentono di combinare più operazioni di XOR senza preoccuparsi dell'ordine, facilitando la progettazione di algoritmi crittografici.

####  Applicazioni nei cifrari a flusso
Nei cifrari a flusso il testo in chiaro viene cifrato combinandolo bit a bit con un keystream generato da un algoritmo pseudocasuale. L'operazione base è:

```
ciphertext = plaintext XOR keystream
```

La decifratura avviene applicando nuovamente l'XOR con lo stesso keystream, recuperando il testo in chiaro. La sicurezza di questi sistemi dipende fortemente dalla qualità e dalla segretezza del keystream. Se il keystream è prevedibile o viene riutilizzato, l'intero sistema diventa vulnerabile a vari attacchi.

####  Il One-Time Pad
Il One-Time Pad è un esempio ideale di cifratura mediante XOR:

- **Chiave casuale e unica:** La chiave è lunga quanto il messaggio, totalmente casuale e usata una sola volta.
- **Sicurezza teorica:** Se i requisiti sono rispettati, il One-Time Pad è matematicamente inoppugnabile.  
    La formula utilizzata è identica a quella dei cifrari a flusso, ma la garanzia della sicurezza risiede nella perfetta casualità e nell'unicità della chiave.

####  Esempi pratici

Consideriamo un semplice esempio di cifratura mediante XOR:

Testo in chiaro (in binario):

```
10101010
```

Chiave (in binario):

```
11001100
```

Cifratura (bit a bit):

```
10101010  
XOR 11001100  
-----------
01100110
```

Per decifrare, si applica l'operazione XOR tra il testo cifrato e la stessa chiave, ottenendo nuovamente il testo in chiaro grazie alla proprietà di auto-inversione.
####  Criticità e limiti
Sebbene il one-time-pad sia la tecnica crittografica per eccellenza, non è realmente applicabile. Questo perché ho bisogno di una chiave lunga quanto il messaggio, rendendola impraticabile sia perché per messaggi molto lunghi dovrei utilizzare una chiave molto lunga, sia perché per ogni singolo messaggio avrei bisogno di una chiave diversa.
I protocolli moderni risolvono questi due problemi mantenendo una crittografia estremamente robusta, seppur non abbiano una crittografia "perfetta" come quella del one time pad, come ad esempio AES (Advanced Encryption Standard), che utilizza chiavi a lunghezza fissa.
###  Display a 7 segmenti
La realizzazione di dispositivi numerici digitali si accompagna alla necessità di **visualizzare variabili e risultati**. Nel caso dei circuiti **sommatori e sottrattori**, si può ricorrere ai **display a 7 segmenti**, realizzati con **LED (Light Emitting Diode)** o **LCD (Liquid Crystal Display)**.  
In entrambi i casi, i segmenti vengono identificati secondo lo schema seguente:

![[Media/bc24221097e172fd59d7fb8c5c30b814_MD5.jpeg]]

I display a 7 segmenti devono essere pilotati da un **decoder**, che effettua la conversione da **codice BCD (Binary Coded Decimal)** a rappresentazione decimale.  
Il codice BCD è un **codice a 4 bit**, in cui le prime dieci combinazioni binarie rappresentano le cifre decimali da 0 a 9, secondo la seguente corrispondenza:

![[Media/2e20921723442222be6a205e83dd625e_MD5.jpeg]]

Nel codice BCD, le combinazioni 1010, 1011, 1100, 1101 e 1111 sono **inutilizzate o ridondanti**.

Se indichiamo con **D** il bit più significativo (MSB – _Most Significant Bit_) e con **A** il meno significativo (LSB – _Least Significant Bit_), il collegamento ai segmenti risulta il seguente:

![[Media/54121a7c798a8787470c6df305956bc9_MD5.jpeg]]

La struttura interna del **decoder BCD → 7 segmenti** può essere ricavata costruendo una **mappa di Karnaugh** per ciascuna delle sette variabili di uscita (_a, b, c, d, e, f, g_).  
Da queste mappe si ottengono espressioni logiche semplificate, come mostrato in figura:

![[Media/c2ba2ff8c8817860fc64c4acf6a2acb6_MD5.jpeg]]

Durante la semplificazione, i cinque numeri inutilizzati del codice BCD possono essere considerati **condizioni di indifferenza** (_don’t care conditions_).

Se invece si desidera mantenere la codifica in **binario puro**, allora anche le combinazioni precedentemente escluse sono ammesse, ma l’uscita dovrà essere interpretata secondo una **codifica esadecimale**, da:

(0)₁₀ = (0000)₂ = (0)ₕ  
a  
(15)₁₀ = (1111)₂ = (F)ₕ
