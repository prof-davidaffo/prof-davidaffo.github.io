## Capitolo 1: Tabelle di verità e circuiti logici
###  Introduzione di base

L'algebra booleana, fondamentale in matematica, informatica, elettronica e in molte altre discipline, si basa sul concetto di valori di verità assoluti: vero (`1`) o falso (`0`). Questa sezione introduttiva esplora le proposizioni semplici e composte, offrendo una base per comprendere come queste possano essere combinate tra loro.

####  Proposizioni Semplici

Una **proposizione semplice** è un'affermazione che può essere chiaramente identificata come vera o falsa. Non contiene altre proposizioni al suo interno e rappresenta l'unità fondamentale dell'algebra booleana. Ad esempio, l'affermazione "Piove" è una proposizione semplice perché può essere soltanto vera o falsa.

####  Proposizioni Composte

Una **proposizione composta** si forma combinando due o più proposizioni semplici tramite **operatori logici**. Queste proposizioni mostrano relazioni più complesse e il loro valore di verità dipende dai valori delle proposizioni semplici che le compongono. Esempi di proposizioni composte includono affermazioni come "Piove e fa freddo" o "Fa caldo o è nuvoloso", dove "e" e "o" sono operatori logici.

####  Tabelle di Verità
Le **tabelle di verità** sono strumenti essenziali nell'algebra booleana per determinare il valore di verità di proposizioni composte in base a tutti i possibili valori delle proposizioni semplici. Per ogni operatore logico, si può costruire una tabella di verità che mostra il risultato della combinazione di valori di verità.

####  Operatori Logici Fondamentali

Per combinare le proposizioni, si usano vari operatori logici. Ecco i più comuni:

1. **AND (Congiunzione) `∧`**: Indica che entrambe le proposizioni devono essere vere affinché l'intera proposizione composta sia vera. Simbolo comunemente usato: ∧. **Esempio**: Se consideriamo due proposizioni, $A$: "Piove" e $B$: "È freddo", l'operatore AND combina le due proposizioni nella forma $A ∧ B$: "Piove ed è freddo". Questa proposizione composta è vera solo se sia $A$ che $B$ sono vere allo stesso tempo.
   Ad esempio se piovesse ma ci fosse caldo, la proposizione composta non sarebbe vera.
   La congiunzione tra due proposizioni è vera solo se entrambe le proposizioni sono vere.

| A | B  | A ∧ B |
|--------------------|---------------------|-------------------|
| 1                  | 1                   | 1                 |
| 1                  | 0                   | 0                 |
| 0                  | 1                   | 0                 |
| 0                  | 0                   | 0                 |

2. **OR (Disgiunzione) `∨`**: Indica che almeno una delle proposizioni deve essere vera affinché l'intera proposizione composta sia vera. Simbolo comunemente usato: ∨. **Esempio**: Utilizzando le stesse proposizioni $A$ e $B$, l'operatore OR le combina nella forma $A ∨ B$: "Piove o è freddo". Questa proposizione composta è vera se almeno una tra $A$ e $B$ è vera. Quindi, anche se non piove ma è freddo, o viceversa, la proposizione composta risulta vera.
   
   La disgiunzione tra due proposizioni è vera se almeno una delle due proposizioni è vera.

| A   | B   | A ∨ B |
| --- | --- | ----- |
| 1   | 1   | 1     |
| 1   | 0   | 1     |
| 0   | 1   | 1     |
| 0   | 0   | 0     |

   
3. **NOT (Negazione) `¬`**: Inverte il valore di verità di una proposizione. Se applicato a una proposizione vera, la rende falsa, e viceversa. Simbolo comunemente usato: ¬. **Esempio**: Prendendo la proposizione $A$: "Piove", l'operatore NOT la inverte nella forma $¬A$: "Non piove". Se la proposizione originale $A$ è vera (cioè, piove), allora $¬A$ è falsa, e viceversa.
   
   La negazione inverte il valore di verità di una proposizione.

| A | ¬A |
|------------------|----------------|
| 1                | 0              |
| 0                | 1              |

   
4. **XOR (Disgiunzione Esclusiva) ⊕:** Valuta l'esclusività tra due proposizioni. Se una proposizione è vera e l'altra è falsa, allora l'XOR restituisce vero; se entrambe sono vere o entrambe sono false, restituisce falso. È l'operatore logico che esprime l'idea di "o l'una o l'altra, ma non entrambe". Simbolo comunemente usato: ⊕. **Esempio**: Per le proposizioni $A$ e $B$, l'operatore XOR le combina nella forma $A ⊕ B$: "Piove o è freddo, ma non entrambi". Questa proposizione composta è vera solo se esattamente una tra $A$ e $B$ è vera. Se sia $A$ che $B$ sono vere (cioè, piove ed è freddo allo stesso tempo) o se entrambe sono false (non piove e non è freddo), allora la proposizione composta risulta falsa.
   La disgiunzione esclusiva tra due proposizioni è vera solo se esattamente una delle due proposizioni è vera.

| A | B | A XOR B |
|--------------------|---------------------|---------------------|
| 1                  | 1                   | 0                   |
| 1                  | 0                   | 1                   |
| 0                  | 1                   | 1                   |
| 0                  | 0                   | 0                   |

La comprensione delle proposizioni semplici e composte, insieme all'uso degli operatori logici, costituisce la base dell'algebra booleana. Questo framework concettuale permette di analizzare e costruire ragionamenti complessi, essenziale non solo in ambito accademico ma anche in molte applicazioni pratiche, dalla programmazione alla progettazione di circuiti elettronici.

####  Rappresentazioni alternative degli operatori logici
 Gli operatori logici di base possono essere rappresentati in vari modi, inclusi i simboli standard usati nell'algebra booleana e nella progettazione dei circuiti. Un modo alternativo, spesso utilizzato in contesti accademici e nei testi, fa uso di notazioni più "verbali" o simboli matematici comuni. Ecco come si possono rappresentare gli operatori logici di base in questo modo alternativo:
 
1. **AND (Congiunzione)**    
    - **Simbolo Standard**: ∧
    - **Modo Alternativo**: $A \cdot B$ o semplicemente $AB$
      
2. **OR (Disgiunzione)**    
    - **Simbolo Standard**: ∨
    - **Modo Alternativo**: $A + B$
    
3. **NOT (Negazione)**    
    - **Simbolo Standard**: ¬$A$
    - **Modo Alternativo**: $\overline{A}$
      
4. **XOR (Disgiunzione Esclusiva)**    
    - **Simbolo Standard**: ⊕
      
Questi simboli alternativi, specialmente per AND e OR, sono comunemente usati nella matematica e nell'ingegneria per rappresentare le operazioni logiche in modo più compatto, specialmente quando si lavora con espressioni algebriche o nella progettazione di circuiti. Da adesso in avanti useremo questa convenzione.
###  Introduzione alle Proposizioni Composte Complesse

####  Definizione
Una proposizione composta complessa è un'affermazione che si forma combinando due o più proposizioni semplici attraverso l'uso di operatori logici. La complessità di una proposizione composta può variare significativamente: può spaziare da una semplice combinazione di due proposizioni a intricate espressioni che includono diverse proposizioni e operatori annidati.
A differenza delle proposizioni semplici, che esprimono affermazioni dirette e non divisibili, le proposizioni composte complesse combinano multiple proposizioni semplici e operatori logici per formare affermazioni che possono esprimere concetti più dettagliati e situazioni più sfumate. Queste strutture consentono di modellare e analizzare situazioni del mondo reale in termini binari di vero e falso, rendendole strumenti potenti nella matematica, nell'informatica, nella filosofia, e in molte altre discipline.
Nella programmazione, per esempio, consentono di implementare controlli logici avanzati. Nell'ambito della progettazione di circuiti elettronici, sono utilizzate per definire il comportamento di circuiti logici complessi. In matematica e logica, facilitano la costruzione di dimostrazioni formali e l'analisi di argomentazioni.

####  Struttura e Interpretazione
La struttura di una proposizione composta complessa è determinata dall'ordine e dalla combinazione degli operatori logici utilizzati. La precedenza degli operatori stabilisce quale parte dell'espressione deve essere valutata per prima.
Quando si tratta di proposizioni composte più complesse, la costruzione delle loro tabelle di verità richiede un approccio sistematico. Queste proposizioni possono includere diverse combinazioni di operatori logici e proposizioni semplici. La chiave per analizzarle efficacemente è comprendere e applicare le regole di precedenza degli operatori.

####  Regole di Precedenza degli Operatori
Le regole di precedenza degli operatori determinano l'ordine in cui vengono valutati gli operatori in una proposizione composta. Ecco l'ordine dalla più alta alla più bassa precedenza:

1. **NOT**: Ha la precedenza più alta perché modifica direttamente il valore di verità della proposizione a cui è applicato.

2. **AND**: Viene valutato dopo il NOT, poiché rappresenta l'intersezione di verità tra proposizioni.

3. **OR**: Ha una precedenza inferiore all'AND, poiché rappresenta l'unione di verità tra proposizioni.

4. **XOR**: Solitamente ha la stessa precedenza dell'OR, ma l'ordine specifico può dipendere dalla convenzione adottata. È importante chiarire questa regola nel contesto in cui si lavora.

5. **Parentesi**: Come in matematica, le parentesi possono essere utilizzate per alterare l'ordine di valutazione standard. Qualsiasi operazione racchiusa tra parentesi ha la precedenza su quelle esterne.

####  Schematizzazione dei Passaggi per la Costruzione di Tabelle di Verità
Per costruire la tabella di verità di una proposizione composta in modo efficiente, devo seguire in ordine i seguenti passaggi:

1. **Identificare tutte le proposizioni semplici** coinvolte e gli operatori. Assegnare a ogni proposizione semplice una lettera (ad es., A, B, C).

2. **Determinare il numero di righe** della tabella. Questo sarà \(2^n\), dove \(n\) è il numero di proposizioni semplici distinte. Ogni riga rappresenta una possibile combinazione di verità per le proposizioni semplici.

3. **Elencare tutte le combinazioni possibili** di valori di verità per le proposizioni semplici nelle prime colonne della tabella. Per fare questo, si seguono i seguenti passaggi:
   1. Nella prima colonna, scrivo vero nella prima metà delle righe e falso nella seconda metà.
   2. Le colonne successive, vanno riempite tenendo conto della colonna precedente, dimezzando nuovamente le righe in cui mettere vero o falso. Ad esempio se nella prima colonna ci sono 4V e 4F, nella seconda ci saranno 2V 2F 2V 2F e nella terza V F V F V F V F.

5. **Scomporre la proposizione composta** nei suoi componenti, seguendo le regole di precedenza degli operatori. Per ciascun sotto-componente che non è una proposizione semplice, aggiungere una colonna nella tabella di verità.

6. **Calcolare il valore di verità** di ogni sotto-componente per ogni combinazione di valori di verità, seguendo le regole di precedenza.

7. **Determinare il valore di verità della proposizione composta**, basandosi sui valori calcolati per i suoi sotto-componenti.

####  Esempio di Applicazione
Per illustrare l'applicazione delle regole di precedenza degli operatori in una proposizione composta complessa, consideriamo l'esempio seguente:

$$A + B  \overline C$$

L'esempio mostra un caso in cui, nonostante l'operatore OR (+) appaia prima dell'AND ( $\cdot$ ) e della negazione ( $\overline C$ ) nella sequenza dell'espressione, la congiunzione AND e la negazione hanno comunque la precedenza sulla disgiunzione OR a causa delle regole di precedenza degli operatori. Seguiamo i passaggi per analizzare questa espressione:

1. **Identificare tutte le proposizioni semplici** coinvolte: $A$, $B$, $C$.
2. **Determinare il numero di righe** della tabella di verità, che sarà $2^n$, dove $n$ è il numero di proposizioni semplici distinte. Per $A$, $B$, e $C$, avremo $2^3 = 8$ righe.
3. **Elencare tutte le combinazioni possibili** di valori di verità per $A$, $B$, e $C$ nelle prime colonne della tabella di verità sfruttando la regola detta in precedenza.
4. **Scomporre l'espressione complessa** secondo le regole di precedenza degli operatori. Anche se l'OR appare per primo, calcoliamo prima $\overline C$, poi $B \overline C$, e infine uniamo il risultato con $A$ usando $+$.
5. **Calcolare il valore di verità** di ogni sotto-componente per ogni combinazione di valori di verità.
6. **Determinare il valore di verità dell'espressione complessa** per ogni combinazione, basandosi sui valori calcolati per i suoi sotto-componenti.

Questo approccio evidenzia l'importanza della precedenza degli operatori, dimostrando che, nonostante la presenza fisica precedente dell'operatore OR nell'espressione, l'AND (e le operazioni di negazione ad esso associate) deve essere valutato per primo. Questo esempio dovrebbe aiutare a capire che le regole di precedenza sono cruciali per determinare l'ordine corretto in cui vengono eseguite le operazioni in espressioni logiche composte complesse.

Ecco la tabella di verità per l'espressione, che illustra come vengono calcolati i valori di verità per ogni combinazione delle proposizioni semplici $A$, $B$, e $C$:

| $A$ | $B$ | $C$ | $\overline C$ | $B \overline C$ | $A + B \overline C$ |
| --- | --- | --- | ------------- | --------------- | ------------------- |
| 0   | 0   | 0   | 1             | 0               | 0                   |
| 0   | 0   | 1   | 0             | 0               | 0                   |
| 0   | 1   | 0   | 1             | 1               | 1                   |
| 0   | 1   | 1   | 0             | 0               | 0                   |
| 1   | 0   | 0   | 1             | 0               | 1                   |
| 1   | 0   | 1   | 0             | 0               | 1                   |
| 1   | 1   | 0   | 1             | 1               | 1                   |
| 1   | 1   | 1   | 0             | 0               | 1                   |

Nella tabella, i valori `1` e `0` rappresentano rispettivamente il vero e il falso. La colonna $\overline C$ mostra il risultato della negazione di $C$. La colonna $B \overline C$ calcola la congiunzione di $B$ e $\overline C$, evidenziando la precedenza dell'operatore AND su OR e della negazione ( $\overline C$) su AND. Infine, la colonna $A + (B \overline C)$ mostra il valore di verità dell'intera espressione, combinando $A$ con il risultato di $B \overline C$ tramite l'operatore OR, che riflette correttamente le regole di precedenza degli operatori nella valutazione dell'espressione.
###  Porte logiche e circuiti logici
Le porte logiche sono i componenti fondamentali dei circuiti elettronici digitali, usati per eseguire operazioni logiche di base su segnali binari. Ogni tipo di porta logica corrisponde a un operatore logico fondamentale e può essere utilizzato per costruire circuiti logici complessi che eseguono funzioni di elaborazione dell'informazione.

######  Tipi di Porte Logiche

1. **AND Gate**: Realizza l'operazione di congiunzione logica. Produce un output alto (`1`) solo se tutti gli input sono alti (`1`).
   ![[Pasted image 20240221162621.png]]

2. **OR Gate**: Realizza l'operazione di disgiunzione logica. Produce un output alto (`1`) se almeno uno degli input è alto (`1`).
   ![[Pasted image 20240221162721.png]]

3. **NOT Gate** (Inverter): Realizza l'operazione di negazione logica. Inverte lo stato dell'input; se l'input è alto (`1`), l'output sarà basso (`0`), e viceversa.
   ![[Pasted image 20240221162730.png]]

4. **NAND Gate**: Una combinazione di una porta AND seguita da una porta NOT. Produce un output basso (`0`) solo se tutti gli input sono alti (`1`).
   ![[Pasted image 20240221162743.png]]

5. **NOR Gate**: Una combinazione di una porta OR seguita da una porta NOT. Produce un output alto (`1`) solo se tutti gli input sono bassi (`0`).
   ![[Pasted image 20240221162756.png]]

6. **XOR Gate**: Realizza l'operazione di disgiunzione esclusiva. Produce un output alto (`1`) solo se gli input sono diversi tra loro.
   ![[Pasted image 20240221162819.png]]

7. **XNOR Gate**: L'inverso della porta XOR. Produce un output alto (`1`) solo se tutti gli input sono uguali.
   ![[Pasted image 20240221162844.png]]

######  Costruzione di Circuiti Logici
I circuiti logici utilizzano combinazioni di queste porte per eseguire funzioni complesse. Per esempio, un circuito sommatore può essere costruito usando porte XOR, AND e OR per sommare due bit e produrre una somma e un eventuale riporto. Questi circuiti formano la base della logica computazionale utilizzata nei computer e in altri dispositivi elettronici digitali.
######  Applicazioni Pratiche
- **Elaborazione dei Dati**: I circuiti logici sono impiegati in tutte le forme di elaborazione dei dati digitali, dai microprocessori ai computer.
- **Memoria**: Le porte logiche sono usate per costruire circuiti di memoria che immagazzinano informazioni binarie.
- **Controllo**: Utilizzate in sistemi di controllo per automazione e robotica, dove le decisioni logiche determinano il comportamento del sistema.
######  Nandgame
Con questo sito possiamo partire da un semplice Relè e costruire tutte le porte logiche e un itero computer!

www.nandgame.com

####  Esempio di espressioni logiche

#####  Esempio 1

![[Media/circuiti.png]]
#####  Esempio 2

![[Media/esercizio_circuiti.png|400x400]]

####  Esercizi su tabelle di verità

> [!exercise] Esercizi
> 1. $A+\overline{AB}+CD$
>2. $A+B\cdot(A+C+\overline D)$
>3. $A+\overline{A+\overline B+C}\cdot BC$
>4. $\overline A \cdot (A+B)+\overline C+BC$
>5. $C+B \cdot \overline{A+B} \cdot \overline{\overline A \cdot \overline C}+B$
>6. $(\overline{A+B\cdot\overline C})\cdot(A+\overline B)$
>7. $(\overline A+B)\cdot(\overline{B+C}+A)$
>8. $A\cdot\overline{B+\overline C}+\overline A\cdot C$
>9. $\overline{A\cdot B}+C\cdot\overline{B+\overline A}$
>10. $(A+\overline B)\cdot(\overline{A+C}+B)+\overline C$
>11. $\overline{A+\overline B}\cdot(B+C)+\overline{C\cdot A}$
>12. $A+\overline{B\cdot(C+\overline A)}\cdot\overline C$
>13. $(\overline A+\overline B)\cdot(C+\overline{A+B})+B$
>14. $\overline{A+\overline B+C}\cdot(B+\overline C)$
>15. $\overline{A\cdot(\overline B+C)}+B\cdot\overline C$
>16. $(A+B)\cdot\overline{A+C}+\overline{B\cdot C}$
>17. $\overline A\cdot(B+\overline C)+\overline{B\cdot C}$
>18. $(A+\overline B+\overline C)\cdot\overline{A+B}+C$
>19. $\overline{(A+B)\cdot C}+A\cdot\overline B$
>20. $(\overline A+B\cdot\overline C)\cdot(\overline{B+C}+C)$

## Capitolo 2: Minimizzazioni
### Minimizzazioni algebriche
#### Introduzione
La **minimizzazione** è un processo che mi permette di **ottimizzare i circuiti logici** in termini di costi, spazio e prestazioni.
Questo processo consiste nel trovare un circuito che abbia una tabella di verità **equivalente** a quello che sto minimizzando che sia però ottimizzato al massimo in termini di dimensioni (in pratica ottenere una espressione logica equivalente semplificata che utilizzi meno porte logiche).

Ad esempio l'espressione $Y =\overline A \cdot(A+B)+\overline C+BC$
può essere semplificata in $Y = B+\overline C$.

Questo perché entrambe le espressioni hanno la stessa tabella di verità:

$Y =\overline A \cdot(A+B)+\overline C+BC$

| A   | B   | C   | ¬A  | A+B | ¬A⋅(A+B) | ¬C  | ¬A⋅(A+B)+¬C | BC  | $Y$ |
| --- | --- | --- | --- | --- | -------- | --- | ----------- | --- | --- |
| 0   | 0   | 0   | 1   | 0   | 0        | 1   | 1           | 0   | 1   |
| 0   | 0   | 1   | 1   | 0   | 0        | 0   | 0           | 0   | 0   |
| 0   | 1   | 0   | 1   | 1   | 1        | 1   | 1           | 0   | 1   |
| 0   | 1   | 1   | 1   | 1   | 1        | 0   | 1           | 1   | 1   |
| 1   | 0   | 0   | 0   | 1   | 0        | 1   | 1           | 0   | 1   |
| 1   | 0   | 1   | 0   | 1   | 0        | 0   | 0           | 0   | 0   |
| 1   | 1   | 0   | 0   | 1   | 0        | 1   | 1           | 0   | 1   |
| 1   | 1   | 1   | 0   | 1   | 0        | 0   | 0           | 1   | 1   |
$Y = B+\overline C$

| B   | C   | ¬C  | B+¬C |
| --- | --- | --- | ---- |
| 0   | 0   | 1   | 1    |
| 0   | 1   | 0   | 0    |
| 1   | 0   | 1   | 1    |
| 1   | 1   | 0   | 1    |
| 0   | 0   | 1   | 1    |
| 0   | 1   | 0   | 0    |
| 1   | 0   | 1   | 1    |
| 1   | 1   | 0   | 1    |
Come notiamo, il secondo circuito, pur essendo equivalente al primo, utilizza un ingresso in meno e molte meno porte logiche.

Ma come ottengo la seconda espressione?

Posso semplificare una qualunque espressione logica grazie ai **teoremi e alle proprietà dell'algebra di Boole**.
#### Teoremi e proprietà dell'algebra di Boole
Questo insieme di proprietà e teoremi di base posso utilizzarlo per minimizzare una qualunque espressione logica.

- **Proprietà Commutativa**  
  - $A + B = B + A$  
  - $A \cdot B = B \cdot A$

- **Proprietà Associativa**  
  - $(A + B) + C = A + (B + C)$  
  - $(A \cdot B) \cdot C = A \cdot (B \cdot C)$

- **Proprietà Distributiva**  
  - $AB+AC=A(B+C)$
  - $(A+B)(A+C) = A+BC$
    
    *Dimostrazione:*
    $AA + AC + AB + BC = AA + A(B + C) + BC$
	$ma \quad AA = A \quad quindi$
	$A + A(B + C) + BC \quad cioè$
	$A \left[ 1 + (B + C) \right] + BC$
	$ma \quad 1 + (B + C) = 1 \quad quindi$
	$(A + B)(A + C) = A + BC$


- **Teorema dell'Annullamento (elemento assorbente)**  
  - $A \cdot 0 = 0$  
  - $A + 1 = 1$

- **Teorema dell'Identità (elemento neutro)** 
  - $A \cdot 1 = A$  
  - $A + 0 = A$

- **Teorema dei Complementi**  
  - $A \cdot \overline{A} = 0$  
  - $A + \overline{A} = 1$

- **Teorema dell'Idempotenza**  
  - $A \cdot A = A$  
  - $A + A = A$

- **Primo Teorema dell'Assorbimento**  
  - $A + AB = A$
  - $A\cdot(A+B)=A$
    
    *Dimostrazione:*
    $A + AB = A(1 + B) = A \cdot 1 = A$
	$mentre$
	$A(A + B) = AA + AB =$
	$= A + AB = A(1 + B) = A \cdot 1 = A$

- **Secondo Teorema dell'Assorbimento**  
  - $A+\overline AB=A+B$
    
    *Dimostrazione:*
    $A + B = A + B(A + \overline{A}) = A + AB + \overline{A}B$
	$= A(1 + B) + \overline{A}B = A + \overline{A}B$


- **Teorema dell'Involuzione (o della doppia negazione)**  
  - $\overline{\overline{A}} = A$

- **Teoremi di De Morgan**  
  - $\overline{A \cdot B} = \overline{A} + \overline{B}$  
  - $\overline{A + B} = \overline{A} \cdot \overline{B}$
#### Esempio
Proviamo ad applicare i teoremi per minimizzare l'espressione che abbiamo visto nell'esempio prima, ovvero dimostrare che $\overline A \cdot(A+B)+\overline C+BC = B+\overline C$, mostrando per ogni passaggio i teoremi e le proprietà utilizzate.

$\overline A \cdot (A+B)+\overline C+BC =$
$= \overline AA+\overline AB+\overline C+BC =$ *svolta moltiplicazione*
$= \overline AB+\overline C+BC=$ *per il teorema dei complementi*
$= \overline AB+\overline C+B=$ *per il secondo teorema dell'assorbimento*
$=B+\overline C$ *per il primo teorema dell'assorbimento*
### Mappe di Karnaugh
Le mappe di Karnaugh (o **Karnaugh maps**, K-map) sono uno strumento grafico per la semplificazione delle espressioni booleane. Ogni mappa è una tabella che rappresenta visivamente tutte le combinazioni possibili dei valori delle variabili di ingresso.  
La disposizione delle celle segue l’ordine del **Gray code**, in modo che celle adiacenti differiscano per una sola variabile, facilitando l’individuazione di gruppi di 1 adiacenti.
Sono particolarmente comode in quanto sono più veloci da utilizzare rispetto alle classiche minimizzazioni algebriche, ma solo se:
- Conosco a priori i valori di verità dell'espressione o li posso facilmente calcolare
- Non ho espressioni troppo complesse (di solito fino a 4 proposizioni)

#### Procedura operativa per l’uso delle mappe di karnaugh
1. **Identificare le variabili**
   Conta quante variabili ha la funzione booleana e assegna un simbolo a ciascuna (es. A, B, C...).
2. **Disegnare la mappa**
   Costruisci una tabella con 2^n celle. Usa intestazioni in **Gray code** per garantire che celle adiacenti differiscano per una sola variabile.
   Attenzione quindi, quando scrivo le intestazioni, che ad esempio da 01 si passa a 11 e non 10, in quanto deve cambiare 1 bit solo e non 2 per permettere alla mappa di funzionare correttamente.
3. **Compilare la mappa**
   Inserisci in ciascuna cella il valore della funzione:
   * 1 se la funzione è vera in quella combinazione
   * 0 se è falsa
   * **X** se la combinazione è “non importa” (**don’t care**), cioè può essere considerata sia 0 sia 1 a seconda della comodità nella minimizzazione.
4. **Individuare i raggruppamenti di 1**
   * Cerca gruppi di 1 adiacenti in potenze di 2 (1, 2, 4, 8...).
   * Puoi includere le celle con X nei gruppi, trattandole come 1 se servono a ottenere gruppi più grandi e una forma più semplice.
   * Ogni gruppo deve essere **il più grande possibile**.
   * I gruppi possono sovrapporsi: uno stesso 1 (o X) può appartenere a più gruppi se questo mi permette di avere gruppi più grandi per gli elementi che sono rimasti esclusi.
   * Puoi raggruppare celle ai bordi opposti della mappa (adiacenza toroidale).
5. **Scrivere i prodotti semplificati**
   Per ciascun gruppo:
   * Individua quali variabili **rimangono costanti** nel gruppo.
   * Se una variabile ha valore 1 costante, si scrive con la lettera normale (es. A).
   * Se una variabile ha valore 0 costante, si scrive negata (es. ¬A).
   * Le variabili che cambiano non si scrivono.
   * Combina le variabili costanti con l’operazione AND (·).
6. **Combinare i prodotti**
   Somma (OR, indicato con +) tutti i prodotti ottenuti dai gruppi per formare l’espressione minimizzata.
#### Mappa di Karnaugh a 2 variabili
Tabella di verità della funzione:

| **A** | **B** | **Y** |
| :---: | :---: | :---: |
|   0   |   0   |   0   |
|   0   |   1   |   1   |
|   1   |   0   |   1   |
|   1   |   1   |   1   |
Mappa di Karnaugh (2×2):

| **A\B** | **0** | **1** |
| :-----: | :---: | :---: |
|  **0**  |   0   |   1   |
|  **1**  |   1   |   1   |
Raggruppamenti:
* Gruppo da 2 (celle A=1, B=0–1) → **A**
* Gruppo da 2 (celle B=1, A=0–1) → **B**
Espressione semplificata:
**Y = A + B**

*Fonte immagini esercizi svolti: https://www.youtube.com/watch?v=qx90H7Kqh9w - Elisabetta Vannucchi*
##### Esercizi svolti
![[Media/mappe_k_2.png]]
#### Mappa di Karnaugh a 3 variabili
Tabella di verità della funzione:

| **A** | **B** | **C** | **Y** |
| :---: | :---: | :---: | :---: |
|   0   |   0   |   0   |   0   |
|   0   |   0   |   1   |   1   |
|   0   |   1   |   0   |   1   |
|   0   |   1   |   1   |   1   |
|   1   |   0   |   0   |   0   |
|   1   |   0   |   1   |   1   |
|   1   |   1   |   0   |   0   |
|   1   |   1   |   1   |   1   |
Mappa (disposizione in Gray code per AB: 00, 01, 11, 10):

| **C\AB** | **00** | **01** | **11** | **10** |
| :------: | :----: | :----: | :----: | :----: |
|   **0**  |    0   |    1   |    0   |    0   |
|   **1**  |    1   |    1   |    1   |    1   |
Raggruppamenti:
* Gruppo orizzontale da 4 (riga C=1) → **C**
* Gruppo verticale da 2 (colonna AB=01) → **ĀB**
Espressione semplificata:
**Y = C + ĀB**
##### Esercizi svolti
![[Media/mappe_k_3.png]]
##### Esercizi da svolgere

|  A  |  B  |  C  | Y₁  | Y₂  | Y₃  | Y₄  | Y₅  | Y₆  | Y₇  | Y₈  | Y₉  | Y₁₀ | Y₁₁ | Y₁₂ | Y₁₃ | Y₁₄ | Y₁₅ |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  0  |  0  |  1  |  X  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |
|  0  |  0  |  1  |  1  |  0  |  1  |  0  |  0  |  1  |  1  |  0  |  X  |  1  |  0  |  1  |  0  |  1  |  0  |
|  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  X  |  0  |  0  |  1  |
|  0  |  1  |  1  |  0  |  0  |  1  |  1  |  1  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  1  |  1  |  0  |
|  1  |  0  |  0  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  0  |  1  |  0  |
|  1  |  0  |  1  |  1  |  1  |  0  |  1  |  0  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |  1  |
|  1  |  1  |  0  |  0  |  1  |  1  |  1  |  0  |  1  |  1  |  0  |  0  |  1  |  1  |  1  |  1  |  0  |  0  |
|  1  |  1  |  1  |  1  |  0  |  0  |  X  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  1  |  1  |

#### Mappa di Karnaugh a 4 variabili
Tabella di verità della funzione:

| **A** | **B** | **C** | **D** | **Y** |
| :---: | :---: | :---: | :---: | :---: |
|   0   |   0   |   0   |   0   |   0   |
|   0   |   0   |   0   |   1   |   1   |
|   0   |   0   |   1   |   0   |   1   |
|   0   |   0   |   1   |   1   |   0   |
|   0   |   1   |   0   |   0   |   0   |
|   0   |   1   |   0   |   1   |   1   |
|   0   |   1   |   1   |   0   |   1   |
|   0   |   1   |   1   |   1   |   1   |
|   1   |   0   |   0   |   0   |   1   |
|   1   |   0   |   0   |   1   |   1   |
|   1   |   0   |   1   |   0   |   0   |
|   1   |   0   |   1   |   1   |   0   |
|   1   |   1   |   0   |   0   |   0   |
|   1   |   1   |   0   |   1   |   1   |
|   1   |   1   |   1   |   0   |   0   |
|   1   |   1   |   1   |   1   |   0   |
Mappa (disposizione in Gray code per AB e CD: 00, 01, 11, 10):

| **CD\AB** | **00** | **01** | **11** | **10** |
| :-------: | :----: | :----: | :----: | :----: |
|   **00**  |    0   |    0   |   0    |   1    |
|   **01**  |    1   |    1   |   1    |   1    |
|   **11**  |    0   |    1   |   0    |   0    |
|   **10**  |    1   |    1   |   0    |   0    |
$Y = \overline C D + A \overline B \ \overline C + \overline A B D + C \overline D \  \overline A$
##### Esercizi svolti
![[Media/mappe_k_4.png]]
![[Media/mappe_k_4p2.png]]
##### Esercizi da svolgere

|  A  |  B  |  C  |  D  | Y₁  | Y₂  | Y₃  | Y₄  | Y₅  | Y₆  | Y₇  | Y₈  | Y₉  | Y₁₀ | Y₁₁ | Y₁₂ | Y₁₃ | Y₁₄ | Y₁₅ |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  0  |  0  |  0  |  1  |  X  |  1  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |  0  |  1  |
|  0  |  0  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |  1  |  X  |  0  |
|  0  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |
|  0  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  1  |  0  |  X  |  0  |  1  |  0  |
|  0  |  1  |  0  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  X  |  0  |  1  |  1  |  0  |  1  |
|  0  |  1  |  0  |  1  |  0  |  1  |  0  |  X  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |
|  0  |  1  |  1  |  0  |  1  |  1  |  1  |  0  |  1  |  0  |  X  |  1  |  0  |  1  |  0  |  1  |  0  |  X  |  1  |
|  0  |  1  |  1  |  1  |  0  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  X  |
|  1  |  0  |  0  |  0  |  1  |  X  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |
|  1  |  0  |  0  |  1  |  0  |  1  |  1  |  0  |  X  |  1  |  0  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |
|  1  |  0  |  1  |  0  |  1  |  0  |  1  |  1  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  0  |
|  1  |  0  |  1  |  1  |  X  |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  0  |  X  |  1  |  0  |  1  |  0  |  1  |
|  1  |  1  |  0  |  0  |  1  |  1  |  0  |  X  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |
|  1  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  X  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |
|  1  |  1  |  1  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |  X  |  1  |  0  |  1  |  1  |
|  1  |  1  |  1  |  1  |  0  |  1  |  X  |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |  1  |  1  |  0  |


> [!warning] Nota
> Alcune forme che ottengo in realtà non sono davvero minimizzate, posso ancora fare dei raccoglimenti per utilizzare meno porte logiche.
#### Come passare velocemente da tabella a mappa
##### Mappa di Karnaugh a 3 variabili
Quando si compila una mappa di Karnaugh, **non si seguono i numeri binari in ordine normale**, ma l’**ordine Gray code**, in cui cambia **una sola variabile per volta**.
Per la mappa a 3 variabili (A, B, C):
* le **colonne** rappresentano **AB** e seguono l’ordine Gray **00, 01, 11, 10**
* le **righe** rappresentano **C = 0** e **C = 1**
  Si riempie **riga per riga**: prima tutte le celle con C=0, poi quelle con C=1.

| **C \ AB** |  **00** |  **01** |  **11** |  **10** |
| :----: | :-: | :-: | :-: | :-: |
|  **0** |  0  |  2  |  6  |  4  |
|  **1** |  1  |  3  |  7  |  5  |
**Cosa si salta e perché:** all’interno della riga, non si passa mai da **01 a 10**, perché significherebbe cambiare sia A che B insieme.
Per questo le colonne sono disposte come **00, 01, 11, 10** invece che in ordine binario (00, 01, 10, 11): serve per mantenere la logica vicina e facilitare i raggruppamenti.
##### Mappa di Karnaugh a 4 variabili
Stesso principio, ma ora ci sono **4 variabili**: A, B, C e D.
* le **colonne** rappresentano **AB** e seguono il Gray code **00, 01, 11, 10**
* le **righe** rappresentano **CD** e seguono anch’esse il Gray code **00, 01, 11, 10**
  Si riempie sempre **riga per riga**, scorrendo prima tutte le celle della riga e poi passando alla successiva.

| **CD \ AB** |  **00** |  **01** |  **11** |  **10** |
| :---------: | :-: | :-: | :-: | :-: |
|   **00**    |  0  |  4  |  12 |  8  |
|   **01**    |  1  |  5  |  13 |  9  |
|   **11**    |  3  |  7  |  15 |  11 |
|   **10**    |  2  |  6  |  14 |  10 |
**Cosa si salta e perché:**
* tra le **colonne**, non si passa da **01 a 10** (cambierebbero sia A che B)
* tra le **righe**, non si passa da **01 a 10** (cambierebbero sia C che D)
L’uso del Gray code in entrambe le direzioni garantisce che **ogni cella adiacente differisca per una sola variabile**, rendendo facile creare i gruppi di 1 (o di 0) per semplificare le espressioni logiche.
