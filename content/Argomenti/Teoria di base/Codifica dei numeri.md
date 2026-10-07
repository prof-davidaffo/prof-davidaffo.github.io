## 1. Introduzione generale
Viviamo in un'epoca in cui ogni aspetto della nostra quotidianità è permeato dall'uso di dispositivi digitali: smartphone, computer, tablet, sistemi di navigazione, elettrodomestici intelligenti, reti di comunicazione, e così via. Tutti questi strumenti condividono una caratteristica fondamentale: **elaborano, trasmettono e memorizzano informazioni sotto forma digitale**.
Ma cosa significa esattamente "informazione digitale"? E come può un computer, che non ha coscienza, né comprensione semantica, trattare testi, immagini, suoni, video o istruzioni complesse?
La risposta risiede nel processo di **codifica delle informazioni**.
Codificare un'informazione significa **rappresentarla in una forma interpretabile da un sistema**. Nel caso dei calcolatori elettronici, questa rappresentazione deve essere:
* **Numerica**, perché le macchine elaborano solo valori numerici;
* **Binaria**, perché i dispositivi digitali distinguono solo due stati elettrici (tipicamente rappresentati con 0 e 1);
* **Standardizzata**, per garantire compatibilità tra sistemi diversi e comunicazione coerente.
Quindi, ogni tipo di dato, per poter essere utilizzato da un computer, deve essere **tradotto in una sequenza di numeri binari**. Questo vale per qualunque informazione: una parola scritta, un suono registrato, un’immagine visualizzata sullo schermo, un comando da eseguire.
Il concetto chiave è che **tutte le informazioni digitali sono il risultato di una codifica numerica**. Questa codifica deve rispettare regole precise, condivise e riconoscibili, che dipendono dal tipo di dato e dal contesto applicativo.
Per comprendere come questo sia possibile, occorre analizzare in che modo i numeri possono essere rappresentati all’interno di un sistema digitale, partendo dai cosiddetti **sistemi di numerazione**.

---
## 2. Sistemi di numerazione
La rappresentazione numerica delle informazioni costituisce il primo e fondamentale livello della codifica digitale. I numeri, infatti, sono alla base di ogni altra forma di dato elaborabile da una macchina. Prima di affrontare la codifica di testi, immagini o suoni, è necessario comprendere **come funziona la rappresentazione dei numeri all'interno dei sistemi informatici**.
I sistemi di numerazione sono **insiemi di simboli e regole** che permettono di esprimere quantità. Ogni sistema numerico si fonda su una **base** (o radice), che definisce **quanti simboli distinti** vengono utilizzati e come questi simboli crescono di valore in funzione della loro posizione.
Il sistema che utilizziamo quotidianamente è il **sistema decimale**, basato sulla base 10. I computer, invece, usano il **sistema binario**, basato sulla base 2.
Comprendere la logica dei sistemi di numerazione è essenziale per chi studia l’informatica, perché permette di interpretare la struttura interna dei dati digitali e di eseguire operazioni fondamentali per la programmazione, l’architettura dei calcolatori, la comunicazione tra sistemi e la progettazione di componenti digitali.
Nel prossimo paragrafo analizzeremo il **sistema decimale**, per poi confrontarlo con il **sistema binario**, e successivamente esploreremo altri sistemi numerici utilizzati in informatica, come l’**ottale** e l’**esadecimale**.

---
### 2.1 Le basi numeriche e il modo di contare
Un **sistema di numerazione** è un metodo per rappresentare i numeri utilizzando un insieme finito di simboli. Ogni sistema si basa su una **base**, ovvero il numero di simboli (detti anche **cifre**) disponibili.
Nel nostro sistema decimale (base 10), utilizziamo dieci cifre (da 0 a 9). In informatica, però, si utilizzano anche sistemi diversi: il **binario** (base 2), l’**ottale** (base 8) e l’**esadecimale** (base 16).
Tutti questi sistemi sono **posizionali**, cioè il valore di una cifra dipende **sia dal simbolo usato**, sia dalla **posizione che occupa** nel numero. Le posizioni corrispondono a potenze successive della base.
Vediamo come funziona ciascun sistema.

---
#### Sistema decimale (base 10)
È il sistema comunemente usato dagli esseri umani. Le cifre disponibili sono:
`0, 1, 2, 3, 4, 5, 6, 7, 8, 9`
Quando si supera il 9, si “va a capo” e si aggiunge una nuova cifra a sinistra:
* Dopo 9 → **10**
* Dopo 19 → **20**
* Dopo 99 → **100**
Ogni cifra ha un **peso** che dipende dalla posizione: da destra a sinistra, i pesi sono le potenze di 10.
Esempio:
```
473 = (4 × 10²) + (7 × 10¹) + (3 × 10⁰) = 400 + 70 + 3
```
---
#### Sistema binario (base 2)
È il sistema utilizzato dai computer. Usa solo due cifre:
`0, 1`
Dopo 1 si “va a capo” aggiungendo una nuova cifra a sinistra:
* Dopo 0 → **1**
* Dopo 1 → **10** (che vale 2 in decimale)
* Dopo 10 → **11**
* Dopo 11 → **100** (che vale 4 in decimale)
Le posizioni corrispondono a potenze di 2:
Esempio:
```
1011₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = 8 + 0 + 2 + 1 = 11₁₀
```
Contare in binario:
```
0, 1, 10, 11, 100, 101, 110, 111, 1000, ...
```
---
#### Sistema ottale (base 8)
Usa otto cifre:
`0, 1, 2, 3, 4, 5, 6, 7`
Dopo 7 si aggiunge una nuova cifra:
* Dopo 7 → **10** (che vale 8 in decimale)
* Dopo 10 → **11**
* Dopo 17 → **20** (che vale 16 in decimale)
Le posizioni sono potenze di 8:
Esempio:
```
145₈ = (1 × 8²) + (4 × 8¹) + (5 × 8⁰) = 64 + 32 + 5 = 101₁₀
```
Contare in ottale:
```
0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, ..., 17, 20, ...
```
---
#### Sistema esadecimale (base 16)
Utilizza 16 cifre. Oltre alle cifre da 0 a 9, usa le lettere da **A a F** per rappresentare i valori da 10 a 15:
`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`
Dopo F (che vale 15), si aggiunge una nuova cifra:
* Dopo F → **10** (che vale 16 in decimale)
* Dopo 1F → **20**
* Dopo FF → **100**
Le posizioni sono potenze di 16:
Esempio:
```
2F₁₆ = (2 × 16¹) + (15 × 16⁰) = 32 + 15 = 47₁₀
```
Contare in esadecimale:
```
0, 1, 2, ..., 9, A, B, C, D, E, F, 10, 11, ..., 1F, 20, ...
```
---
#### Confronto visivo: primi numeri in più basi
| Decimale | Binario | Ottale | Esadecimale |
| -------- | ------- | ------ | ----------- |
| 0        | 0       | 0      | 0           |
| 1        | 1       | 1      | 1           |
| 2        | 10      | 2      | 2           |
| 3        | 11      | 3      | 3           |
| 4        | 100     | 4      | 4           |
| 5        | 101     | 5      | 5           |
| 6        | 110     | 6      | 6           |
| 7        | 111     | 7      | 7           |
| 8        | 1000    | 10     | 8           |
| 9        | 1001    | 11     | 9           |
| 10       | 1010    | 12     | A           |
| 11       | 1011    | 13     | B           |
| 12       | 1100    | 14     | C           |
| 13       | 1101    | 15     | D           |
| 14       | 1110    | 16     | E           |
| 15       | 1111    | 17     | F           |
| 16       | 10000   | 20     | 10          |

---
Questa panoramica aiuta a comprendere **le regole comuni** dei sistemi posizionali e la **logica del cambio di cifra**. Nei prossimi paragrafi ci occuperemo di come **convertire i numeri** da un sistema all’altro, e di come eseguire **operazioni aritmetiche** in binario.

---
### 2.2 Conversione da una base qualsiasi alla base 10
Convertire un numero da una **base qualsiasi (base ( x ))** alla **base 10** significa riscriverlo come somma di **cifre moltiplicate per potenze della base**.
Ogni sistema posizionale rappresenta un numero come una sequenza di cifre, dove **ogni cifra ha un peso** determinato dalla **posizione** e dalla **base** del sistema.
Per convertire il numero in base 10, si **moltiplica ogni cifra per la potenza della base corrispondente alla sua posizione**, a partire da destra (dove la posizione è zero).
#### Formula generale
Sia un numero $N$ rappresentato in base $b$, con cifre $d_n, d_{n-1}, \dots, d_1, d_0$, allora:
$$
N_{(b)} = d_n \cdot b^n + d_{n-1} \cdot b^{n-1} + \dots + d_1 \cdot b^1 + d_0 \cdot b^0
$$
Il risultato sarà un numero espresso in **base 10**.

---
#### Esempio 1 – da binario a decimale
Convertiamo il numero $1011_2$ in base 10.
$$
1011_2 = (1 \cdot 2^3) + (0 \cdot 2^2) + (1 \cdot 2^1) + (1 \cdot 2^0)
$$
$$
= 8 + 0 + 2 + 1 = 11
$$
Quindi:
$$
1011_2 = 11_{10}
$$
---
#### Esempio 2 – da ottale a decimale
Convertiamo $145_8$ in base 10.
$$
145_8 = (1 \cdot 8^2) + (4 \cdot 8^1) + (5 \cdot 8^0)
$$
$$
= 64 + 32 + 5 = 101
$$
Risultato:
$$
145_8 = 101_{10}
$$
---
#### Esempio 3 – da esadecimale a decimale
Nel sistema esadecimale, le lettere da A a F rappresentano i valori da 10 a 15:
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
Convertiamo $2F_{16}$ in decimale:
$$
2F_{16} = (2 \cdot 16^1) + (15 \cdot 16^0)
$$
$$
= 32 + 15 = 47
$$
Quindi:
$$
2F_{16} = 47_{10}
$$
---
#### Esempio 4 – da base generica (es. base 5) a decimale
Convertiamo $243_5$ in base 10:
$$
243_5 = (2 \cdot 5^2) + (4 \cdot 5^1) + (3 \cdot 5^0)
$$
$$
= 50 + 20 + 3 = 73
$$
Quindi:
$$
243_5 = 73_{10}
$$
---
#### Esempio grafico
![[8ce8891c440a6cc0cf9b8bcc61ff5531_MD5.jpeg]]
#### Schema operativo per la conversione
1. **Scrivi le cifre** del numero da convertire, indicando le **posizioni** (da destra a sinistra, a partire da 0).
2. **Moltiplica ogni cifra** per la **potenza della base** corrispondente alla posizione.
3. **Somma tutti i prodotti** ottenuti.
4. Il risultato è il **valore in base 10**.
#### Esercizi
> [!exercise] Esercizi
> Converti in decimale:
> - $1010_2$
> - $11011_2$
> - $243_5$
> - $231_8$
> - $1C_{16}$
> - $A3F_{16}$

---
### 2.3 Conversione da base 10 a una base qualsiasi
Convertire un numero dalla **base 10** a una **base diversa** (ad esempio binaria, ottale, esadecimale, ecc.) significa esprimere quel numero utilizzando i simboli e le regole del nuovo sistema numerico.
Il metodo più utilizzato per questa conversione è quello della **divisione successiva**.
#### Metodo della divisione successiva
Si applica nel seguente modo:
1. Si divide il numero decimale per la **base di destinazione**.
2. Si annota il **resto** della divisione (che sarà una delle cifre del nuovo numero).
3. Si divide il **quoziente ottenuto** nuovamente per la base.
4. Si ripetono i passaggi finché il quoziente diventa 0.
5. Il numero nella nuova base si ottiene leggendo i **resti al contrario**, cioè **dal basso verso l’alto**.
---
#### Esempio 1 – da decimale a binario
Convertiamo $45_{10}$ in base 2.

| Divisione   | Quoziente | Resto |
| ----------- | --------- | ----- |
| $45 \div 2$ | 22        | 1     |
| $22 \div 2$ | 11        | 0     |
| $11 \div 2$ | 5         | 1     |
| $5 \div 2$  | 2         | 1     |
| $2 \div 2$  | 1         | 0     |
| $1 \div 2$  | 0         | 1     |
Leggendo i resti dal basso verso l’alto: **$45_{10} = 101101_2$**

---
#### Esempio 2 – da decimale a ottale
Convertiamo $125_{10}$ in base 8.

| Divisione    | Quoziente | Resto |
| ------------ | --------- | ----- |
| $125 \div 8$ | 15        | 5     |
| $15 \div 8$  | 1         | 7     |
| $1 \div 8$   | 0         | 1     |
Risultato: **$125_{10} = 175_8$**

---
#### Esempio 3 – da decimale a esadecimale
Convertiamo $254_{10}$ in base 16.

| Divisione     | Quoziente | Resto |
| ------------- | --------- | ----- |
| $254 \div 16$ | 15        | 14    |
| $15 \div 16$  | 0         | 15    |
I resti corrispondono a: $14 = E$, $15 = F$
Risultato: **$254_{10} = FE_{16}$**

---
#### Nota sulle cifre esadecimali
Nel sistema esadecimale i resti da 10 a 15 si rappresentano con le lettere:
* $10 = A$
* $11 = B$
* $12 = C$
* $13 = D$
* $14 = E$
* $15 = F$
---
#### Schema operativo per la conversione
1. **Dividi il numero decimale** per la base desiderata.
2. **Annota il resto**.
3. **Sostituisci i valori** da 10 a 15 con le lettere (solo se la base è 16).
4. **Ripeti** con il quoziente finché ottieni 0.
5. **Scrivi il numero leggendo i resti dal basso verso l’alto**.

#### Esercizi
> [!exercise] Esercizi
> Converti da decimale a:
> - binario: 23, 45, 100
> - ottale: 77, 200
> - esadecimale: 255, 320, 1024
> - base 2 e 16: $125_{10}$ (con passaggi)


---

### 2.4 Conversioni tra basi che sono potenze di 2
Quando si converte tra basi che sono potenze di 2, **non è necessario passare per la base 10**. È sufficiente **gruppare o scomporre** le cifre binarie in blocchi di dimensione fissa:
* **3 bit per cifra ottale**
* **4 bit per cifra esadecimale**
Questo metodo è veloce e sfruttato in molti contesti pratici (linguaggi di programmazione, microprocessori, rappresentazione dei dati in memoria).
---
#### Conversione binario ↔ ottale
Poiché $8 = 2^3$, si divide il numero binario in **gruppi di 3 bit**, partendo da destra.
##### Esempio 1 – da binario a ottale
Convertiamo $1101011_2$ in base 8.
1. Raggruppiamo i bit a gruppi di 3 da destra:
   * $1\ 101\ 011$ → aggiungiamo zeri a sinistra se necessario: $001\ 101\ 011$
2. Ogni gruppo corrisponde a una cifra ottale:
$$
001 = 1,\quad 101 = 5,\quad 011 = 3
$$
Risultato:
$$
1101011_2 = 153_8
$$
##### Esempio 2 – da ottale a binario
Convertiamo $573_8$ in binario.
1. Ogni cifra ottale diventa un gruppo di 3 bit:
$$
5 = 101,\quad 7 = 111,\quad 3 = 011
$$
2. Unendo i gruppi:
$$
573_8 = 101111011_2
$$
---
#### Conversione binario ↔ esadecimale
Poiché $16 = 2^4$, si divide il numero binario in **gruppi di 4 bit**, partendo da destra.
##### Esempio 1 – da binario a esadecimale
Convertiamo $1010111101_2$ in base 16.
1. Raggruppiamo in blocchi di 4 bit da destra:
   * $10\ 1011\ 1101$ → aggiungiamo zeri a sinistra: $0001\ 0101\ 1110\ 1$ → $0001\ 0101\ 1110\ 1101$
2. I gruppi sono: $0001$, $0101$, $1110$, $1101$
3. Convertiamo ogni gruppo:
$$
0001 = 1,\quad 0101 = 5,\quad 1110 = E,\quad 1101 = D
$$
Risultato:
$$
1010111101_2 = 15ED_{16}
$$
##### Esempio 2 – da esadecimale a binario
Convertiamo $3B_{16}$ in binario.
1. Ogni cifra esadecimale corrisponde a un gruppo di 4 bit:
$$
3 = 0011,\quad B = 1011
$$
2. Unendo i gruppi:
$$
3B_{16} = 00111011_2
$$
---
#### Schema operativo
* **Binario → Ottale**: raggruppa i bit in **blocchi di 3**, da destra, e converti ciascun blocco in cifra ottale.
* **Ottale → Binario**: converti ciascuna cifra in **3 bit**.
* **Binario → Esadecimale**: raggruppa i bit in **blocchi di 4**, da destra, e converti ciascun blocco in cifra esadecimale.
* **Esadecimale → Binario**: converti ciascuna cifra in **4 bit**.
---
#### Conversioni da ottale a esadecimale e viceversa
Poiché **8 = 2³** e **16 = 2⁴**, non esiste un numero intero tale che $8^k = 16^m$, quindi **non è possibile una conversione diretta "simmetrica"** tra ottale ed esadecimale.
Tuttavia, possiamo utilizzare il **binario come ponte intermedio**, dato che ogni cifra ottale ed esadecimale può essere facilmente tradotta in un gruppo fisso di bit.

---
#### Conversione esadecimale ↔ ottale (via binario)
Per convertire tra base 16 e base 8, si procede in due passaggi:
1. **Esadecimale → Binario → Ottale**
2. **Ottale → Binario → Esadecimale**
---
##### Esempio 1 – da esadecimale a ottale
Convertiamo $2F_{16}$ in ottale.
**Passaggio 1: esadecimale → binario**
* $2 = 0010$
* $F = 1111$
Unendo:
$$
2F_{16} = 00101111_2
$$
**Passaggio 2: binario → ottale**
Raggruppiamo in gruppi di 3 bit da destra (aggiungiamo zeri a sinistra):
$$
001\ 010\ 111
$$
Convertiamo:
* $001 = 1$
* $010 = 2$
* $111 = 7$
Risultato:
$$
2F_{16} = 127_8
$$
---
##### Esempio 2 – da ottale a esadecimale
Convertiamo $127_8$ in esadecimale.
**Passaggio 1: ottale → binario**
* $1 = 001$
* $2 = 010$
* $7 = 111$
Unendo:
$$
127_8 = 001010111_2
$$
**Passaggio 2: binario → esadecimale**
Raggruppiamo in gruppi di 4 bit da destra (aggiungiamo zeri a sinistra):
$$
0000\ 1010\ 1111
$$
Convertiamo:
* $0000 = 0$
* $1010 = A$
* $1111 = F$
Risultato:
$$
127_8 = 0AF_{16}
$$
Se vogliamo **omettere gli zeri iniziali non significativi**, possiamo scrivere:
$$
127_8 = AF_{16}
$$
---
#### Schema operativo: esadecimale ↔ ottale
* **Esadecimale → Ottale**:
  1. Converti ogni cifra esadecimale in **4 bit**.
  2. Raggruppa i bit in **blocchi di 3**, da destra.
  3. Converti ciascun blocco in cifra ottale.
* **Ottale → Esadecimale**:
  1. Converti ogni cifra ottale in **3 bit**.
  2. Raggruppa i bit in **blocchi di 4**, da destra.
  3. Converti ciascun blocco in cifra esadecimale.
#### Esempi grafici
![[4397e744279230e01529ac2d6eab0b6b_MD5.jpeg]]

#### Esercizi
> [!exercise] Esercizi
> Conversioni tramite gruppi di bit:
> - binario → ottale: $101011$, $1101110$, $1001001$
> - binario → esadecimale: $11010111$, $1001110001$
> - ottale → binario: $157$, $243$
> - esadecimale → binario: $3B$, $1F4$
> - $3F_{16}$ → ottale (passando per il binario)

---
### 2.5 Aritmetica nel sistema binario
Come nel sistema decimale, anche nel sistema binario è possibile effettuare le **quattro operazioni fondamentali**: **somma, sottrazione, moltiplicazione e divisione**.
Le regole sono simili, ma basate su **due soli simboli**: $0$ e $1$.
Vedremo ora come si eseguono le principali operazioni tra numeri binari, partendo dalla somma.

---
#### 2.5.1 Somma binaria
La **somma tra due numeri binari** segue regole molto semplici, basate sulle **combinazioni possibili di 0 e 1**.
Ecco la **tabella fondamentale della somma binaria**:

| $A$ | $B$ | Somma ($A + B$) | Riporto |
| --- | --- | --------------- | ------- |
| 0   | 0   | 0               | 0       |
| 0   | 1   | 1               | 0       |
| 1   | 0   | 1               | 0       |
| 1   | 1   | 0               | 1       |
Se aggiungiamo un terzo bit (il **riporto** precedente), abbiamo altre due combinazioni importanti:

| $A$ | $B$ | Riporto In | Somma | Riporto Out |
| --- | --- | ---------- | ----- | ----------- |
| 1   | 1   | 1          | 1     | 1           |
| 1   | 0   | 1          | 0     | 1           |
| 0   | 1   | 1          | 0     | 1           |

---
##### Esempio – somma binaria completa
Vogliamo sommare:

$1111_2$  che vale 15 in base 10 e $101_2$ che vale 5 in base 10

Scriviamo l’operazione in colonna, allineando i bit a destra e preparando una riga per i **riporti**:
```
Riporti: 1  1  1  1  0
         ↓  ↓  ↓  ↓  ↓
            1  1  1  1 +
               1  0  1 =
         -------------
         1  0  1  0  0
```
Vediamo i passaggi **uno a uno** da destra verso sinistra:
1. **Colonna 0** (bit meno significativo): $1 + 1 = 10$ → scrivo $0$, riporto $1$
2. **Colonna 1**: $1 + 0 + 1 = 10$ → scrivo $0$, riporto $1$
3. **Colonna 2**: $1 + 1 + 1 = 10$ → scrivo $1$, riporto $1$
4. **Colonna 3**: $1 + 0 + 1 = 10$ → scrivo $0$, riporto $1$
5. Riporto finale: $1$
Quindi:
$$
1111_2 + 0101_2 = 10100_2
$$
**Verifica in decimale**:
* $1111_2 = 8 + 4 + 2 + 1 = 15$
* $0101_2 = 0 + 4 + 0 + 1 = 5$
* $15 + 5 = 20$
* $10100_2 = 20_{10}$ ✅

##### Esempio grafico
![[4732eedae83d9dfe62b56f638213a360_MD5.jpeg]]

---
##### Schema operativo per la somma binaria
1. Allinea i due numeri a destra.
2. Somma i bit colonna per colonna, partendo da destra.
3. Applica le regole di somma binaria.
4. Aggiungi eventuale **riporto** alla colonna successiva.
5. Se al termine c’è un riporto finale, aggiungilo a sinistra.

#### Esercizi
> [!exercise] Esercizi
> Somma binaria:
> - $101_2 + 011_2$
> - $1101_2 + 0101_2$
> - $11111_2 + 00101_2$
> - $101101_2 + 110111_2$

---
### 2.5.2 Sottrazione binaria
La sottrazione binaria si basa su regole simili a quelle della sottrazione in base 10. Tuttavia, poiché il sistema binario ha solo due cifre ($0$ e $1$), è necessario gestire i **prestiti** (borrow) in modo molto attento.
#### Regole fondamentali della sottrazione binaria
| $A$ | $B$ | Prestito        | Risultato |
| --- | --- | --------------- | --------- |
| 0   | 0   | 0               | 0         |
| 1   | 0   | 0               | 1         |
| 1   | 1   | 0               | 0         |
| 0   | 1   | 1 (da sinistra) | 1         |
Quando si ha $0 - 1$, bisogna **prendere in prestito un 1 dalla colonna successiva a sinistra**, che viene trasformato in $2$ (cioè $10_2$), e quindi:
$$
10_2 - 1_2 = 1_2
$$
---
#### Esempio – sottrazione binaria completa
Sottraiamo:
$$
A = 1011_2 \quad\text{(11 in decimale)}\
B = 0101_2 \quad\text{(5 in decimale)}
$$
Vogliamo calcolare:
$$
1011_2 - 0101_2
$$
Prepariamo l'operazione in colonna, includendo i prestiti:
```
 Prestiti:      1  0  0  0
                ↓  ↓  ↓  ↓
                1  0  1  1 -
                0  1  0  1 =
               -------------
                0  1  1  0
```
Vediamo i **passaggi dettagliati da destra a sinistra**:
1. **Colonna 0**: $1 - 1 = 0$ → niente prestito.
2. **Colonna 1**: $1 - 0 = 1$ → niente prestito.
3. **Colonna 2**: $0 - 1 = ?$ → impossibile, serve prestito:
   * Prendiamo 1 dalla colonna 3: il $1$ in colonna 3 diventa $0$, e in colonna 2 otteniamo $10_2$.
   * $10 - 1 = 1$
4. **Colonna 3** (dopo il prestito): $0 - 0 = 0$
Risultato:
$$
1011_2 - 0101_2 = 0110_2
$$
**Verifica in decimale**:
* $1011_2 = 11$
* $0101_2 = 5$
* $11 - 5 = 6$
* $0110_2 = 6_{10}$ ✅
#### Esempio grafico
![[ed8730780b777e9b32b96c64d5b2a417_MD5.jpeg]]

---
#### Schema operativo per la sottrazione binaria
1. Allinea i due numeri a destra.
2. Sottrai colonna per colonna da destra verso sinistra.
3. Se $0 - 1$, **prendi in prestito 1** dalla colonna a sinistra:
   * il bit prestato diventa $0$
   * il bit corrente diventa $10_2$ (cioè 2 in base 10)
4. Continua la sottrazione tenendo conto dei prestiti.
5. Elimina eventuali zeri iniziali non significativi nel risultato.

#### Esercizi
> [!exercise] Esercizi
> Sottrazione binaria:
> - $1000_2 - 0011_2$
> - $1101_2 - 0101_2$
> - $10000_2 - 0111_2$
> - $110011_2-101010_2$

---
### 2.5.3 Moltiplicazione binaria
La moltiplicazione binaria segue regole **molto simili alla moltiplicazione decimale**, ma con due importanti semplificazioni:
* Si moltiplica solo per $0$ o per $1$.
* Ogni riga parziale del prodotto è **uguale** al numero moltiplicato oppure è **tutta zero** (a seconda che si stia moltiplicando per $1$ o per $0$).
#### Regole base
| Bit × Bit    | Risultato |
| ------------ | --------- |
| $0 \times 0$ | $0$       |
| $0 \times 1$ | $0$       |
| $1 \times 0$ | $0$       |
| $1 \times 1$ | $1$       |

---
#### Esempio – moltiplicazione binaria completa
Calcoliamo:
$$
A = 101_2 \quad\text{(5 in decimale)}\
B = 11_2 \quad\text{(3 in decimale)}
$$
Vogliamo eseguire:
$$
101_2 \times 11_2
$$
Scriviamo $11_2$ come $1_2$ nella posizione 0 e $1_2$ nella posizione 1. Procediamo come nella moltiplicazione in colonna.
##### Passaggi
```
      101 x      ← moltiplicando (A)
×      11 =    ← moltiplicatore (B)
------------
      101       ← 101 × 1 (bit 0 di B)
    1010- +     ← 101 × 1 (bit 1 di B, shift a sinistra di 1)
------------
     1111
```
Spiegazione:
* Riga 1: $101 \times 1 = 101$
* Riga 2: $101 \times 1 = 101$, **spostato a sinistra** di 1 posizione → $1010$
* Somma parziale: $101 + 1010 = 1111$
Risultato:
$$
101_2 \times 11_2 = 1111_2
$$
**Verifica in decimale**:
* $5 \times 3 = 15$
* $1111_2 = 8 + 4 + 2 + 1 = 15_{10}$ ✅
---
#### Esempio – moltiplicazione binaria con somme di 4, 5, 6 e 7 bit uguali a 1
Moltiplichiamo due numeri binari pensati per generare riporti elevati:
$$
A = 1111_2 \quad\text{(15 in decimale)}\
B = 1111_2 \quad\text{(15 in decimale)}
$$
Svolgiamo:
$$
1111_2 \times 1111_2
$$
---
##### Righe parziali (moltiplicatore da destra verso sinistra):
| Bit di $B$ | Valore | Prodotto (spostato) |
| ---------- | ------ | ------------------- |
| bit 0      | $1$    | $1111$              |
| bit 1      | $1$    | $11110$             |
| bit 2      | $1$    | $111100$            |
| bit 3      | $1$    | $1111000$           |
Allineiamo e sommiamo:
```
         0001111
+        0011110
+        0111100
+        1111000
------------------
        11100001
```
---
##### Somma dettagliata colonna per colonna
Allineiamo i numeri:
```
     0001111   ← riga 1 (bit 0)
+    0011110   ← riga 2 (bit 1)
+    0111100   ← riga 3 (bit 2)
+    1111000   ← riga 4 (bit 3)
--------------------------
```
Ora sommiamo **ogni colonna da destra verso sinistra**:

| Colonna | Somma bit (valore decimale)           | Binario | Riporto generato |
| ------- | ------------------------------------- | ------- | ---------------- |
| col 0   | $1 + 0 + 0 + 0 = 1$                   | 1       | 0                |
| col 1   | $1 + 1 + 0 + 0 = 2$                   | 10      | riporto 1        |
| col 2   | $1 + 1 + 1 + 0 = 3$                   | 11      | riporto 1        |
| col 3   | $1 + 1 + 1 + 1 = 4$                   | 100     | riporto 2        |
| col 4   | $0 + 1 + 1 + 1 = 3 + 2 (riporti) = 5$ | 101     | riporto 2        |
| col 5   | $0 + 0 + 1 + 1 = 2 + 2 = 4$           | 100     | riporto 2        |
| col 6   | $0 + 0 + 0 + 1 = 1 + 2 = 3$           | 11      | riporto 1        |
| col 7   | solo riporti                          | 1       |                  |

---
##### Spiegazione dei riporti alti
* In **colonna 3** ($1+1+1+1$) → somma = $4$ → in binario: $100$ → scrivo $0$, **riporto 2 posizioni**!
* In **colonna 4**: la somma era $3$, ma con i **2 riporti** arriva a $5$ → binario: $101$
* In **colonna 5**: somma $2$, più **2 riporti** = $4$ → binario: $100$
Questo dimostra il caso in cui, in una **singola colonna**, si sommano **più di 3 bit a 1**, generando riporti consecutivi come:
* $1 + 1 + 1 + 1 = 100_2$
* $1 + 1 + 1 + 1 + 1 = 101_2$
* $1 + 1 + 1 + 1 + 1 + 1 = 110_2$
* $1 + 1 + 1 + 1 + 1 + 1 + 1 = 111_2$
---
##### Risultato finale
$$
1111_2 \times 1111_2 = 11100001_2
$$
**Verifica in decimale**:
* $15 \times 15 = 225$
* $11100001_2 = 128 + 64 + 32 + 1 = 225_{10}$ ✅
##### Esempio grafico
![[ed3d165354c9d14c5afa186a9ab77618_MD5.jpeg]]

---
#### Schema operativo per la moltiplicazione binaria
1. Scrivi il **moltiplicando** (numero superiore).
2. Scrivi il **moltiplicatore** (numero inferiore), analizzando i suoi bit da destra a sinistra.
3. Per ogni bit del moltiplicatore:
   * Se è $1$, scrivi il moltiplicando **spostato a sinistra** del numero di posizioni corrispondente alla posizione del bit.
   * Se è $0$, scrivi una riga di **zeri**.
4. Somma tutte le righe parziali.
5. Il risultato è il prodotto binario.

#### Esercizi
> [!exercise] Esercizi
> Moltiplicazione binaria:
> - $101_2 \times 11_2$
> - $110_2 \times 101_2$
> - $1111_2 \times 1011_2$
> - $10011_2 \times 1101_2$

---
### 2.5.4 Divisione binaria
La **divisione tra numeri binari** si effettua seguendo il metodo della **divisione in colonna** (o "a mano"), esattamente come nella divisione decimale: si considera una parte del dividendo, si verifica se è maggiore o uguale al divisore, si esegue la sottrazione e si riporta in basso il bit successivo.
#### Componenti della divisione
* **Dividendo**: il numero da dividere.
* **Divisore**: il numero per cui si divide.
* **Quoziente**: il risultato della divisione.
* **Resto**: ciò che avanza, se il dividendo non è esattamente divisibile.
---
#### Esempio – Divisione binaria completa
Dividiamo:
$$
A = 1101_2 \quad\text{(13 in decimale)}\
B = 11_2 \quad\text{(3 in decimale)}
$$
Vogliamo calcolare:
$$
1101_2 \div 11_2
$$
---
#### Passaggi operativi
Scriviamo il dividendo e analizziamo i gruppi di bit progressivamente.
Dividendo: $1\ 1\ 0\ 1$
Divisore: $11$ (lunghezza 2 bit)
##### Passo 1 – Consideriamo le prime 2 cifre del dividendo: $11$
* $11 \div 11 = 1$ → scriviamo $1$ nel quoziente.
* $11 - 11 = 00$ → il nuovo resto parziale è $0$.
Quoziente: $1$
##### Passo 2 – Abbassiamo il bit successivo (0) → nuovo gruppo: $00$
* $00 \div 11$ → $00 < 11$ → non si può dividere → scriviamo $0$ nel quoziente.
* Il resto rimane $00$.
Quoziente: $10$
##### Passo 3 – Abbassiamo il bit successivo (1) → nuovo gruppo: $001$
* $001 \div 11$ → $001 < 11$ → ancora non divisibile → scriviamo $0$.
* Il resto rimane $001$
Quoziente: $100$
##### Fine
Abbiamo esaurito i bit del dividendo.

---
#### Risultato
* **Quoziente**: $100_2 = 4_{10}$
* **Resto**: $1_2 = 1_{10}$
Verifica:
$$
(11_2 \times 100_2) + 1_2 = 1100_2 + 1_2 = 1101_2
$$
✅ Il risultato è corretto.

#### Esempio grafico
![[3492ec0573251ebe210d8b626210fd68_MD5.jpeg]]

---
#### Schema operativo per la divisione binaria
1. Scegli la prima porzione di bit del dividendo di lunghezza ≥ a quella del divisore.
2. Se la porzione è maggiore o uguale al divisore:
   * scrivi $1$ nel quoziente;
   * esegui la **sottrazione binaria**;
   * porta giù il bit successivo del dividendo.
3. Se la porzione è minore:
   * scrivi $0$ nel quoziente;
   * porta giù il bit successivo;
   * continua con la nuova porzione.
4. Quando hai esaurito i bit del dividendo, il numero rimanente è il **resto**.

#### Esercizi
> [!exercise] Esercizi
> Divisione binaria:
> - $1000_2 \div 10_2$
> - $1100_2 \div 11_2$
> - $10101_2 \div 101_2$
> - $111100_2 \div 100_2$


---
### 2.6 Rappresentazione dei numeri negativi: il complemento a 2
#### Perché il complemento a 2?
Nel funzionamento interno di un computer, le operazioni aritmetiche vengono eseguite attraverso **circuiti elettronici** molto semplici. Questi circuiti sono progettati per realizzare in modo efficiente **operazioni di somma binaria**.
Al contrario, la **sottrazione** richiederebbe circuiti diversi, più complessi e costosi.
Per questo motivo, i computer **non eseguono direttamente la sottrazione**. Invece, trasformano ogni sottrazione in una **somma**:
$$
a - b = a + (-b)
$$
Ma per farlo, il computer deve avere un modo per rappresentare **$-b$** in forma binaria, ed è qui che entra in gioco il **complemento a 2**.

---
#### Cos'è il complemento a 2
Il **complemento a 2** è un metodo per rappresentare i numeri **negativi** nel sistema binario. È oggi lo standard adottato universalmente nei computer.
Con il complemento a 2 è possibile:
* rappresentare sia numeri positivi che negativi in un sistema binario a **lunghezza fissa** (es. 8, 16, 32 bit, ecc.);
* effettuare **sottrazioni come somme**, senza modificare i circuiti della CPU;
* eseguire operazioni **veloci, coerenti e simmetriche** tra numeri con segno.
In questo sistema, il **bit più significativo** (MSB, il primo da sinistra) ha funzione di **bit di segno**:
* $0$ indica un numero positivo
* $1$ indica un numero negativo
---
#### Calcolo del complemento a 2
Per ottenere la rappresentazione binaria **negativa** di un numero positivo $N$ in complemento a 2, si seguono due passaggi:
1. **Complemento a 1**: si invertono tutti i bit del numero (0 → 1, 1 → 0)
2. **Aggiunta di 1**: si somma 1 al risultato ottenuto
#### Formula:
Se $N$ è un numero positivo rappresentato su $n$ bit:
$$
-N = \overline{N} + 1
$$
Dove $\overline{N}$ indica il **complemento a 1**.

---
#### Esempio 1 – rappresentazione di $-5$ in complemento a 2 su 8 bit
1. $+5$ in binario su 8 bit:
   $00000101$
2. Complemento a 1:
   $11111010$
3. Aggiunta di 1:
   $11111010 + 1 = 11111011$
Quindi:
$$
-5_{10} = 11111011_2 \text{ (complemento a 2 su 8 bit)}
$$
---
#### Verifica: somma di $5 + (-5)$
$$
00000101 + 11111011 = 1\ 00000000
$$
Il **bit in overflow** (nono bit) viene scartato → rimane:
$$
00000000 \quad \text{(risultato corretto: 0)}
$$
---
#### Esempio 2 – rappresentazione di $-1$
1. $+1 = 00000001$
2. Complemento a 1: $11111110$
3. Aggiungi 1: $11111111$
Risultato:
$$
-1 = 11111111_2 \text{ (complemento a 2 su 8 bit)}
$$
---
#### Perché funziona: sottrazione come somma
Grazie al complemento a 2, possiamo calcolare una **sottrazione come una somma**.
Esempio:
$$
7 - 3 = 7 + (-3)
$$
In binario su 4 bit:
* $7 = 0111$
* $3 = 0011$
* $-3$ in complemento a 2:
  * $0011$ → complemento a 1: $1100$
  * $+1$ → $1101$
Quindi:
$$
0111 + 1101 = 1\ 0100
$$
Scarto il riporto (overflow) → risultato: $0100 = 4$
✅ Risultato corretto.
#### Esempio – sottrazione con risultato negativo: $5 - 9 = -4$
Lavoriamo su **8 bit**.
##### Passo 1 – Rappresentiamo $5$ in binario
$$
5_{10} = 00000101_2
$$
##### Passo 2 – Rappresentiamo $-9$ in complemento a 2 su 8 bit
1. $+9 = 00001001$
2. Complemento a 1: $11110110$
3. Aggiungiamo 1:
   $11110110 + 1 = 11110111$
Quindi:
$$
-9_{10} = 11110111_2
$$
##### Passo 3 – Eseguiamo la somma: $5 + (-9)$
$$
00000101 + 11110111 = 11111100
$$
Risultato in binario su 8 bit:
$$
11111100_2
$$
Poiché il **bit più significativo è 1**, il numero è **negativo**.
Vediamo quanto vale.

---
#### Interpretazione del risultato: da complemento a 2 a decimale
Per scoprire **quale numero negativo** rappresenta $11111100_2$:
1. Invertiamo tutti i bit (complemento a 1):
   $00000011$
2. Aggiungiamo 1:
   $00000100$
3. Otteniamo $4$, quindi:
$$
11111100_2 = -4_{10}
$$
✅ Il risultato di $5 - 9$ è correttamente $-4$.
---
#### Schema operativo – sottrazione con risultato negativo
1. Scrivi il **minuendo** (il primo numero) in binario.
2. Scrivi il **sottraendo** in **complemento a 2** (cioè rappresenta il numero negativo).
3. Somma i due numeri binari.
4. Interpreta il risultato:
   * Se il **MSB = 0** → il risultato è positivo.
   * Se il **MSB = 1** → è un numero negativo in complemento a 2 → fai la conversione inversa per ottenere il valore decimale.
---
#### Intervallo dei valori rappresentabili
Con $n$ bit, il complemento a 2 permette di rappresentare i numeri nell’intervallo:
$$
[-2^{n-1},\ 2^{n-1} - 1]
$$
Esempio con 8 bit:
* Minimo: $-128 = 10000000_2$
* Massimo: $+127 = 01111111_2$
---
#### Schema riassuntivo – calcolo del complemento a 2
1. Scrivi il numero positivo in binario su $n$ bit.
2. Inverti tutti i bit (complemento a 1).
3. Aggiungi $1$.
4. Il risultato è la rappresentazione binaria del numero **negativo**.

#### Esercizi
> [!exercise] Esercizi
> Complemento a 2 su 8 bit:
> - Codifica:
> 	- $+18$
> 	- $-45$
> - Sottrai:
> 	- $+25 -12$
> 	- $-37 -22$
> 	- $20 - 35$
> 	- $-50 - 12$


---
### 2.7 Rappresentazione dei numeri con virgola fissa
#### Cos'è la virgola fissa
Nel sistema binario, la **virgola fissa** è un modo per rappresentare numeri **non interi** (cioè con parte frazionaria) **stabilendo una posizione fissa della virgola**.
A differenza della virgola mobile (dove la virgola può "spostarsi" e servono bit aggiuntivi per rappresentarla), qui si decide **a priori** dove collocare la virgola rispetto ai bit.
In pratica, si scrive il numero binario **come se fosse intero**, ma si sa che la virgola si trova **in una certa posizione fissa**: ad esempio **dopo 4 bit**, o **dopo 2 bit**, ecc.

---
#### Come si interpreta un numero in virgola fissa
Un numero in virgola fissa è composto da:
* una **parte intera**, a sinistra della virgola;
* una **parte frazionaria**, a destra della virgola.
##### Come si calcola la parte intera
Esattamente come già sappiamo: usando le **potenze positive di 2**, da destra a sinistra, partendo da $2^0$.
##### Come si calcola la parte frazionaria
Si continua semplicemente **andando verso destra dopo la virgola**, usando **le potenze negative di 2**:
$$
\text{Subito dopo la virgola: } 2^{-1},\ 2^{-2},\ 2^{-3},\ \dots
$$
---
#### Esempio 1 – interpretazione con virgola fissa dopo 4 bit
Prendiamo un numero binario su 8 bit:
```
01101011
```
Supponiamo che **la virgola sia fissata dopo il 4° bit da sinistra**:
```
0110.1011
```
##### Calcolo della parte intera: `0110`
| Posizione | Bit | Valore |
| --------- | --- | ------ |
| $2^3$     | 0   | 0      |
| $2^2$     | 1   | 4      |
| $2^1$     | 1   | 2      |
| $2^0$     | 0   | 0      |
Totale parte intera: $4 + 2 = 6$
##### Calcolo della parte frazionaria: `1011`
| Posizione | Bit | Valore |
| --------- | --- | ------ |
| $2^{-1}$  | 1   | 0.5    |
| $2^{-2}$  | 0   | 0      |
| $2^{-3}$  | 1   | 0.125  |
| $2^{-4}$  | 1   | 0.0625 |
Totale parte decimale: $0.5 + 0 + 0.125 + 0.0625 = 0.6875$
##### Risultato finale
$$
01101011_2 \text{ (con virgola fissa tra 4° e 5° bit) } = 6.6875_{10}
$$
---
####  Esempio 2 – virgola dopo 2 bit
Numero binario:
```
10110110
```
Interpretato come:
```
10.110110
```
#####  Parte intera: `10`
| Posizione | Bit | Valore |
| --------- | --- | ------ |
| $2^1$     | 1   | 2      |
| $2^0$     | 0   | 0      |
→ Parte intera: $2$
#####  Parte decimale: `110110`
| Posizione | Bit | Valore  |
| --------- | --- | ------- |
| $2^{-1}$  | 1   | 0.5     |
| $2^{-2}$  | 1   | 0.25    |
| $2^{-3}$  | 0   | 0       |
| $2^{-4}$  | 1   | 0.0625  |
| $2^{-5}$  | 1   | 0.03125 |
| $2^{-6}$  | 0   | 0       |
→ Parte decimale: $0.5 + 0.25 + 0 + 0.0625 + 0.03125 = 0.84375$
#####  Risultato finale
$$
10110110_2 = 2.84375_{10} \quad \text{(con virgola fissa dopo 2 bit)}
$$
---
####  Numeri negativi in virgola fissa
Come per gli interi, anche con i numeri in virgola fissa si usa il **complemento a 2** per rappresentare i numeri negativi.
Basta:
1. Convertire il numero **positivo** (intero + frazione) in binario.
2. Applicare il **complemento a 2** a tutti i bit.
#####  Esempio – rappresentare $-2.25$ su 8 bit con virgola fissa 4+4
1. $+2.25$ in binario = `0010.0100` → $00100100$
2. Complemento a 1: `11011011`
3. +1 → `11011100`
Risultato:
$$
-2.25 = 11011100_2 \text{ (su 8 bit, con virgola fissa 4+4)}
$$
Verifica:
* parte intera: $2^7$ è il bit del segno → negativo
* calcolo: $111000_2 = 4.25$ → quindi $-4.25$ in complemento a 2 = $-2.25$ ✅
#####  Esempio grafico
![[f3ada4defa95aa3bec05dea925dcfe94_MD5.jpeg]]

---
####  Conclusione
Con la virgola fissa:
* la **parte intera** si calcola come sempre: da destra verso sinistra con $2^0,\ 2^1,\ 2^2,\ \dots$
* la **parte decimale** si calcola da sinistra verso destra, partendo dalla virgola, con $2^{-1},\ 2^{-2},\ 2^{-3},\ \dots$
* serve **conoscere la posizione della virgola**, altrimenti il numero non è interpretabile
* si possono rappresentare anche numeri negativi, usando il **complemento a 2**
---
####  Fase 1 – Conversione della parte intera (come già sappiamo)
Per la **parte intera** di un numero, si utilizza il **metodo della divisione per 2**, già noto.
#####  Esempio: parte intera = 6
Dividiamo successivamente per 2:

| Divisione  | Quoziente | Resto |
| ---------- | --------- | ----- |
| $6 \div 2$ | 3         | 0     |
| $3 \div 2$ | 1         | 1     |
| $1 \div 2$ | 0         | 1     |
Scrivendo i resti **dal basso verso l’alto**:
$$
6_{10} = 110_2
$$
---
####  Fase 2 – Conversione della parte frazionaria (con moltiplicazioni per 2)
Per la **parte decimale** (cioè la parte dopo la virgola), si usa un procedimento diverso: **moltiplicazioni successive per 2**, prendendo **ogni volta la parte intera** del risultato.
#####  Procedura
1. Moltiplica la parte decimale per 2
2. Prendi il **numero intero ottenuto** (sarà $0$ o $1$): questo sarà il **prossimo bit**
3. Prendi la **nuova parte decimale** del risultato e **ripeti**
Si continua fino a:
* ottenere parte decimale = 0 (conversione esatta), oppure
* raggiungere il numero di bit desiderato (es. 4 bit dopo la virgola)
---
#####  Esempio – parte frazionaria = $0.6875$
Moltiplichiamo per 2:

| Passaggio         | Valore  | Parte intera | Nuovo resto |
| ----------------- | ------- | ------------ | ----------- |
| $0.6875 \times 2$ | $1.375$ | 1            | 0.375       |
| $0.375 \times 2$  | $0.75$  | 0            | 0.75        |
| $0.75 \times 2$   | $1.5$   | 1            | 0.5         |
| $0.5 \times 2$    | $1.0$   | 1            | 0.0         |
Quindi:
$$
0.6875_{10} = 0.1011_2
$$
---
####  Risultato completo
Combinando parte intera e parte frazionaria:
$$
6.6875_{10} = 110.1011_2
$$
Se lavoriamo, ad esempio, in **virgola fissa 4+4** (4 bit per la parte intera, 4 bit per quella frazionaria), scriviamo:
* Parte intera: `0110`
* Parte frazionaria: `1011`
Quindi:
$$
6.6875_{10} = 01101011_2 \quad \text{(virgola fissa 4+4)}
$$
---
####  Schema operativo completo
1. **Separare** parte intera e parte decimale del numero.
2. Convertire la parte intera con **divisioni per 2**.
3. Convertire la parte decimale con **moltiplicazioni per 2**.
4. Combinare i due risultati in un'unica sequenza binaria.
5. **Inserire la virgola** nella posizione prestabilita (es. dopo 4 bit).
6. Se necessario, **arrotondare o troncare** la parte frazionaria per adattarsi alla lunghezza fissata.

#### Esercizi
> [!exercise] Esercizi
> Virgola fissa 8 bit:
> - Codifica:
> 	- $5.75$
> 	- $-3.5$
> 	- $2.125$
> 	- $-1.75$
> - Decodifica: 
> 	- $0101.1000$
> 	- $1110.0100$


---
###  2.9 Rappresentazione in virgola mobile
####  Cos’è la virgola mobile
Nella **virgola fissa**, la posizione della virgola è stabilita una volta per tutte. Questo limita fortemente la **gamma dei numeri rappresentabili**.
La **virgola mobile** (in inglese *floating point*) supera questa limitazione **spostando la virgola** a seconda del valore da rappresentare.
Funziona come la **notazione scientifica**, ma in **base 2**.
#####  Notazione scientifica in base 10:
$$
12345 = 1.2345 \times 10^4
$$
#####  Notazione scientifica in base 2 (virgola mobile):
$$
110100 = 1.10100 \times 2^5
$$
Il numero è **normalizzato**: la virgola è spostata dopo il primo bit 1.

---
###  Struttura di un numero in virgola mobile
Un numero in virgola mobile è formato da **tre parti** principali:

| Parte                          | Contenuto                                  |
| ------------------------------ | ------------------------------------------ |
| **Segno**                      | 0 = positivo, 1 = negativo                 |
| **Esponente**                  | Specifica di quanto va spostata la virgola |
| **Mantissa** (o *significand*) | La parte significativa (i bit del numero)  |
####  Formato standard IEEE 754
È lo **standard internazionale** usato nei computer per rappresentare numeri in virgola mobile.
#####  Formato a 32 bit (*single precision*):
| Bit       | Numero di bit | Contenuto                                   |
| --------- | ------------- | ------------------------------------------- |
| Segno     | 1             | 0 = +, 1 = −                                |
| Esponente | 8             | con **bias** 127                            |
| Mantissa  | 23            | solo la parte frazionaria, **normalizzata** |

---
###  Come funziona l'esponente (bias)
In IEEE 754, l'esponente **non è rappresentato come numero con segno**: al contrario, si aggiunge un **valore costante** chiamato **bias** (per *offset*).
Per il formato a 32 bit (single precision):
* Il **bias** è 127
* L’esponente reale $E$ è dato da:
  $$
  E = \text{valore codificato} - 127
  $$
Esempio:
* Esponente codificato = $131$ → $E = 131 - 127 = +4$
* Esponente codificato = $122$ → $E = 122 - 127 = -5$
---
####  Conversione da virgola mobile (IEEE 754) a numero decimale

Il valore del numero è calcolato come:
$$
(-1)^S \cdot (1 + \text{mantissa}) \cdot 2^{\text{esponente} - 127}
$$
> ⚠️ **Attenzione**: il bit "1" prima della mantissa **non è scritto** nel numero: si chiama **bit implicito**.
---
####  Esempio – Convertire in decimale il numero IEEE 754:
```
01000000110100000000000000000000
```
#####  Passo 1 – Separare i campi
| Campo     | Valore binario            |
| --------- | ------------------------- |
| Segno     | `0`                       |
| Esponente | `10000001`                |
| Mantissa  | `10100000000000000000000` |
#####  Passo 2 – Interpretare i campi
* **Segno**: $0 \Rightarrow$ positivo
* **Esponente**: `10000001` = $129$
  Esponente reale: $129 - 127 = 2$
* **Mantissa**:
  * Rappresenta i bit **dopo la virgola** del numero normalizzato
  * Quindi: `1.101` (bit implicito "1" + primi 3 bit della mantissa)
Convertiamo la parte frazionaria `.101`:
| Bit | Peso binario | Valore |
| --- | ------------ | ------ |
| 1   | $2^{-1}$     | 0.5    |
| 0   | $2^{-2}$     | 0.0    |
| 1   | $2^{-3}$     | 0.125  |
Totale: $1 + 0.5 + 0 + 0.125 = 1.625$
#####  Passo 3 – Calcolare il valore
$$
(+1) \cdot 1.625 \cdot 2^2 = 1.625 \cdot 4 = 6.5
$$
---
####  Risultato:
$$
01000000110100000000000000000000_2 = 6.5_{10}
$$
---
####  Schema operativo generale
Per convertire da **IEEE 754 a decimale**:
1. **Separare i 32 bit** in: segno (1 bit), esponente (8 bit), mantissa (23 bit)
2. **Calcolare il segno**: $(-1)^S$
3. **Decodificare l’esponente**: $E = \text{valore binario} - 127$
4. **Costruire la mantissa normalizzata**: $1.\text{mantissa bits}$
5. **Applicare la formula**:
   $$
   \text{valore} = (-1)^S \cdot (1 + \text{mantissa}) \cdot 2^E
   $$
---
####  Esempio 2 – Valore negativo
Numero binario IEEE 754:
```
11000000001000000000000000000000
```
* Segno = 1 → negativo
* Esponente = `10000000` = $128$ → $E = 128 - 127 = 1$
* Mantissa = `01000000000000000000000` → $1.01 = 1 + 0.25 = 1.25$
Valore:
$$
-1.25 \cdot 2^1 = -2.5
$$
#####  Esempio grafico
![[57642d48593878693822534669dcc3d2_MD5.jpeg]]
####  Esempio – rappresentare il numero $-6.75$ in virgola mobile (IEEE 754, 32 bit)
1. **Segno**: negativo → bit segno = 1
2. **Convertiamo $6.75$ in binario**:
* Parte intera: $6 = 110$
* Parte frazionaria:
  * $0.75 \times 2 = 1.5$ → 1
  * $0.5 \times 2 = 1.0$ → 1
→ $6.75 = 110.11 = 1.1011 \times 2^2$
3. **Mantissa**: prendo solo la parte dopo la virgola **senza il primo 1**:
* $1.1011$ → mantissa = `10110000000000000000000`
4. **Esponente**:
* Esponente reale = $2$
* Esponente codificato = $2 + 127 = 129 = 10000001$
1. **Costruzione finale**:

| Segno | Esponente | Mantissa                |
| ----- | --------- | ----------------------- |
| 1     | 10000001  | 10110000000000000000000 |
Quindi:
$$
-6.75 = \boxed{1\ 10000001\ 10110000000000000000000}
$$
---
####  Schema operativo – conversione decimale → virgola mobile
1. **Segna il bit di segno**: 0 o 1
2. **Converti il numero in binario**
3. **Normalizza**: porta il numero in forma $1.xxxxx \times 2^e$
4. **Calcola esponente codificato**: $e + \text{bias}$
5. **Scrivi mantissa**: solo i bit dopo il primo 1
6. **Assembla i 32 bit**: 1 segno, 8 esponente, 23 mantissa
---
####  Vantaggi e svantaggi
| Vantaggi                                        | Svantaggi                                    |
| ----------------------------------------------- | -------------------------------------------- |
| Rappresenta numeri molto grandi e molto piccoli | Più complesso da implementare                |
| Alto grado di precisione                        | Può introdurre errori di arrotondamento      |
| Standard universale (IEEE 754)                  | Serve comprendere la codifica esponente-bias |
####  Casi speciali nella virgola mobile (IEEE 754, 32 bit)
Ricordiamo che un numero in **formato IEEE 754 a 32 bit (single precision)** è composto da:

| Campo     | Bit | Descrizione                                              |
| --------- | --- | -------------------------------------------------------- |
| Segno     | 1   | $0$ = positivo, $1$ = negativo                           |
| Esponente | 8   | Esponente in **codifica bias** (bias = 127)              |
| Mantissa  | 23  | La parte frazionaria della rappresentazione normalizzata |
La **rappresentazione normale** (cioè valida per la maggior parte dei numeri) è:
$$
\text{valore} = (-1)^S \cdot (1.\text{mantissa}) \cdot 2^{e - 127}
$$
Tuttavia, ci sono **alcune combinazioni particolari** di esponente e mantissa che **non seguono questa regola**. Vediamole nel dettaglio.

---
####  Caso 1 – Zero (positivo e negativo)
| Segno | Esponente | Mantissa | Valore |
| ----- | --------- | -------- | ------ |
| 0     | 00000000  | 000...0  | $+0$   |
| 1     | 00000000  | 000...0  | $-0$   |
* L’esponente **tutto a zero**
* La mantissa **tutta a zero**
* Il risultato è **zero**
* Il segno può essere **positivo o negativo** (il bit di segno viene mantenuto, anche se +0 e -0 sono trattati come uguali nella maggior parte delle operazioni)
---
####  Caso 2 – Infinito ($+\infty$, $-\infty$)
| Segno | Esponente | Mantissa | Valore    |
| ----- | --------- | -------- | --------- |
| 0     | 11111111  | 000...0  | $+\infty$ |
| 1     | 11111111  | 000...0  | $-\infty$ |
* L’esponente è **tutto a 1** ($255$)
* La mantissa è **tutta a 0**
* Rappresenta un **valore infinito**
* Risultato di divisioni per 0 o overflow, ad esempio:
  * $1 / 0 = +\infty$
  * $-1 / 0 = -\infty$
---
####  Caso 3 – NaN (Not a Number)
| Segno | Esponente | Mantissa  | Valore |
| ----- | --------- | --------- | ------ |
| X     | 11111111  | ≠ 000...0 | NaN    |
* L’esponente è **tutto a 1**
* La mantissa è **diversa da 0**
* Il segno può essere qualsiasi (non importa)
* Rappresenta un valore **indefinito**:
  * $\sqrt{-1}$
  * $0/0$
  * $\infty - \infty$
  * $\infty \times 0$
---
####  Caso 4 – Numeri denormalizzati (subnormal o *denorm*)
| Segno | Esponente | Mantissa  | Valore                                            |
| ----- | --------- | --------- | ------------------------------------------------- |
| X     | 00000000  | ≠ 000...0 | $(-1)^S \cdot (0.\text{mantissa}) \cdot 2^{-126}$ |
* L’esponente è **tutto a 0**
* La mantissa è **diversa da 0**
* **NON** si usa il bit implicito “1.” → la parte significativa **non è normalizzata**
* Serve per rappresentare **numeri molto vicini a 0**, troppo piccoli per essere rappresentati come numeri normalizzati
#####  Esempio:
* Numero denormalizzato più piccolo possibile (con solo l'ultimo bit della mantissa a 1):
$$
\text{valore} = 1 \cdot 2^{-149} \approx 1.4 \times 10^{-45}
$$
Questi numeri permettono la **continuità vicino allo zero**, evitando un salto da $2^{-126}$ a $0$.
---
####  Caso 5 – Overflow e underflow
* **Overflow**: accade quando il risultato di un’operazione supera il valore massimo rappresentabile.
  * Esponente risulta > 254
  * Il risultato è **$\infty$** (positivo o negativo)
* **Underflow**: accade quando il risultato è troppo vicino a zero per essere rappresentato come numero normalizzato.
  * Il valore rientra nei **denormalizzati** oppure si approssima a **0**
---
####  Riepilogo: classificazione dei numeri IEEE 754 (single precision)
| Esponente (8 bit) | Mantissa  | Significato               |
| ----------------- | --------- | ------------------------- |
| 255 (all 1)       | 0         | $\pm\infty$               |
| 255 (all 1)       | ≠ 0       | NaN                       |
| 1 – 254           | qualsiasi | Numero **normalizzato**   |
| 0 (all 0)         | 0         | $\pm 0$                   |
| 0 (all 0)         | ≠ 0       | Numero **denormalizzato** |
####  Schema riassuntivo
![[11b937c96f0d648709c79dfa078d26e3_MD5.jpeg]]
#### Esercizi
> [!exercise] Esercizi
> Codifica in IEEE 754 (32 bit):
> 	- $5.75$
> 	- $-2.5$
> 	- $0.125$
> 	- $-0.5$
> 	- $1.5$
> 
> Decodifica IEEE 754 (32 bit):
> 	- `0 10000001 01011000000000000000000`
> 	- `1 10000000 10100000000000000000000`
> 	- `0 01111110 00000000000000000000000`
> 	- `1 01111111 11000000000000000000000`
> 	- `0 10000010 10001000000000000000000`
> 	- `0 11111111 00000000000000000000000`
> 	- `1 11111111 00000000000000000000000`
> 	- `0 11111111 0000000000000000000000`
> 	- `0 000000000 0000000000000000000001`
> 	- `0 00000000 00000000000000000000000`
> 	-  `0 11111111 01000000000000000000000`

