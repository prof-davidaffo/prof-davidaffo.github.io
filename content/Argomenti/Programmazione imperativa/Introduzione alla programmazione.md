## Siti e appunti consigliati e utilizzati
Per programmare senza dover installare nulla sul proprio computer, è possibile utilizzare **GitHub Codespaces**. Per farlo è necessario creare un account su GitHub. Dopo la registrazione, si può aprire un nuovo progetto (anche vuoto) e si avvierà una versione online di **Visual Studio Code**, uno degli ambienti di sviluppo più completi e gratuiti disponibili, che può essere scaricato e installato anche sul PC in versione desktop.  Include un terminale in ambiente linux che potete utilizzare per interagire con i file e compilare manualmente.
[https://github.com/codespaces](https://github.com/codespaces)

Per visualizzare in modo grafico cosa accade durante l’esecuzione di un programma, si può utilizzare **Python Tutor**. Nonostante il nome, questo strumento supporta anche C++, Java, JavaScript e altri linguaggi oltre a Python.  
[https://pythontutor.com/](https://pythontutor.com/)

Durante il corso ci capiterà di incontrare schemi ricorrenti noti come i [[Ruoli delle variabili]] e i [[Pattern delle scansioni]]. Potete fare riferimento ai due appunti dedicati per individuarli e approfondirli quando compaiono negli esempi o negli esercizi.
## Capitolo 0: Comandi da terminale di Linux
Per lavorare in modo efficiente in ambienti di programmazione, è utile conoscere i comandi di base per utilizzare il terminale per interagire con l'ambiente Linux (lo stesso che trovate su Replit o Github codespaces con la shell).
Di seguito una tabella con i comandi principali:

![[Comandi di base linux]]

## Capitolo 1: Introduzione alla Programmazione

###  Il Mondo Digitale e il Ruolo dei Programmi

Ogni dispositivo elettronico che utilizziamo, dai computer agli smartphone, dai forni a microonde ai sistemi di navigazione, funziona grazie a **programmi informatici**. Un programma è un insieme di istruzioni che indica a un dispositivo cosa fare e come farlo.

Quando apriamo un'app di messaggistica, un software elabora il nostro messaggio e lo invia al destinatario. Quando giochiamo a un videogioco, un programma controlla la grafica, il punteggio e le interazioni tra i personaggi. Ogni azione che compiamo in un dispositivo digitale è gestita da uno o più programmi.

###  Che cos'è un Programma?

Un **programma** è un insieme di istruzioni che un computer esegue per svolgere un determinato compito. Esso è il risultato della traduzione di un algoritmo in un linguaggio di programmazione.

####  Differenza tra Algoritmo e Programma

- Un **algoritmo** è una sequenza di passi logici per risolvere un problema.
- Un **programma** è l'implementazione di un algoritmo in un linguaggio comprensibile dal computer.

####  Esempi di Programmi nella Vita Quotidiana

I programmi informatici sono ovunque:

- **App di messaggistica**: WhatsApp, Telegram.
- **Giochi**: Minecraft, FIFA.
- **Software di gestione**: Word, Excel.
- **Sistemi operativi**: Windows, Linux, macOS.

Ogni programma è costruito seguendo una logica precisa, basata su algoritmi.

###  Che cos'è un Algoritmo?

Un **algoritmo** è una sequenza di passi ben definiti e ordinati che permette di risolvere un problema o eseguire un compito. Possiamo pensarlo come una **ricetta di cucina**: ogni passaggio deve essere seguito nell'ordine corretto per ottenere il risultato desiderato.

####  Esempio: Algoritmo di una Ricetta di Cucina

Immaginiamo di voler preparare una **torta al cioccolato**. Per farlo, seguiamo un procedimento preciso:

1. **Ingredienti necessari** (input):
    
    - 200g di farina
    - 100g di zucchero
    - 50g di cacao in polvere
    - 2 uova
    - 100ml di latte
    - 1 bustina di lievito
2. **Procedimento** (sequenza di istruzioni):
    
    - Prendere una ciotola grande.
    - Versare la farina, lo zucchero e il cacao nella ciotola.
    - Aggiungere le uova e mescolare.
    - Versare il latte lentamente e continuare a mescolare.
    - Aggiungere il lievito e amalgamare il tutto.
    - Versare il composto in una teglia da forno.
    - Cuocere in forno preriscaldato a 180°C per 30 minuti.
3. **Risultato** (output): una torta soffice e gustosa pronta da mangiare!
    

Questa ricetta segue lo schema di un algoritmo:

- Ha un **input** (gli ingredienti).
- Segue una **sequenza logica** di operazioni (la preparazione).
- Ha un **output** ben definito (la torta pronta).
- Se si segue ogni passaggio correttamente, il risultato sarà sempre lo stesso.

###  Il Processo: Dal Problema al Programma

Per sviluppare un algoritmo efficace che diventi un programma funzionante, è necessario seguire un processo ben definito.

####  1. Problema

Identificare il problema da risolvere è il primo passo. È necessario capire esattamente cosa si vuole ottenere.

**Esempio:** Vogliamo creare un programma che calcoli la media di tre numeri inseriti dall'utente.

####  2. Analisi

In questa fase si analizzano i dati in ingresso e il risultato atteso. Bisogna stabilire quali informazioni sono necessarie per risolvere il problema.

**Esempio:**

- **Input**: Tre numeri.
- **Elaborazione**: Sommare i numeri e dividere il risultato per tre.
- **Output**: La media dei tre numeri.

####  3. Sviluppo dell'Algoritmo

A questo punto si scrive l'algoritmo che descrive passo dopo passo come risolvere il problema.

**Esempio in pseudocodice:**

```
Inizio
   Leggi numero1, numero2, numero3
   Somma ← numero1 + numero2 + numero3
   Media ← Somma / 3
   Scrivi Media
Fine
```

####  4. Simulazione

Prima di scrivere il codice, si può testare l'algoritmo manualmente per verificare che funzioni correttamente.

**Esempio:** Se inseriamo i numeri `5, 10, 15`, l'algoritmo esegue:

- `Somma = 5 + 10 + 15 = 30`
- `Media = 30 / 3 = 10` L'output sarà `10`, quindi l'algoritmo funziona.

####  5. Codifica

Ora si traduce l'algoritmo in un linguaggio di programmazione, ad esempio in Python:

```python
numero1 = float(input("Inserisci il primo numero: "))
numero2 = float(input("Inserisci il secondo numero: "))
numero3 = float(input("Inserisci il terzo numero: "))

somma = numero1 + numero2 + numero3
media = somma / 3

print("La media è:", media)
```

####  6. Programma Funzionante

Il risultato finale è un programma eseguibile che accetta tre numeri in input, calcola la media e la stampa.
L'obiettivo di un programmatore non è soltanto quello di risolvere un problema con una serie di istruzioni, ma quello di farlo nel modo più **efficiente** possibile.

#### Le fasi non sono contenitori separati
Cosa succede se trovo un errore durante la fase di simulazione? Devo probabilmente tornare alla fase di analisi. Quindi capiterà varie volte durante lo sviluppo del programma, di tornare indietro a fasi già svolte.
Con linguaggi moderni sempre più facili da utilizzare, arriveremo ad un punto in cui faremo direttamente la codifica e successivamente la simulazione, in quanto i linguaggi di programmazione offrono strumenti di debugging molto potenti, e mi permettono di correggere molto più velocemente gli errori.

---

### Come elabora le informazioni il computer
Un computer è composto da **hardware** e **software**:  
- **Hardware**: la parte fisica del computer (CPU, RAM, disco rigido, ecc.).  
- **Software**: insieme delle istruzioni che permettono all'hardware di svolgere determinate funzioni.

#### Funzionamento di Base del Calcolatore  
1. **Input**: ricezione di dati dall'esterno (tastiera, mouse, file).  
2. **Elaborazione**: La **CPU** (Central Processing Unit) esegue le istruzioni di un programma utilizzando il ciclo **fetch-decode-execute**:  
	- **Fetch**: recupera l'istruzione dalla memoria RAM.  
	- **Decode**: interpreta l'istruzione.  
	- **Execute**: esegue l'operazione richiesta.  
3. **Output**: invio dei risultati verso un dispositivo (monitor, file).  

---

### Linguaggi di Programmazione 
Il computer comprende solo 0 e 1. Pertanto ho bisogno di interpreti che trasformino il mio linguaggio in una serie di 0 e 1, ovvero i linguaggi di programmazione.
Un linguaggio di programmazione è un linguaggio formale che permette di **scrivere programmi**. Si dividono principalmente in:  
- **Linguaggi a basso livello di astrazione**:  
   - Vicini al linguaggio macchina (es. Assembly).  
   - Molto efficienti ma difficili da leggere e scrivere.  
- **Linguaggi ad alto livello di astrazione**:  
   - Più vicini al linguaggio naturale umano.
   - Tendenzialmente meno efficienti(meno controllo sulle risorse).
   - Esempi: C, C++, Python, Java.

> [!note] Percorso C
> I concetti della dispensa — variabili numeriche, condizioni, cicli, array, `struct`, funzioni e puntatori — valgono anche in C. Ogni esempio che usa librerie o costrutti diversi presenta qui sotto una versione C equivalente. Gli snippet dichiarati **Sintassi comune C/C++** sono già validi in entrambi i linguaggi e perciò non sono duplicati. Per compilare gli esempi C usa `gcc`, salva i file con estensione `.c` e abilita gli avvisi: `gcc file.c -std=c17 -Wall -Wextra -Wpedantic -o programma`.

> [!tip] Come leggere gli esempi bilingui
> I blocchi `cpp` mostrano l'idioma C++ e i blocchi `c` quello C. Quando il codice è segnato **Sintassi comune C/C++**, lo stesso snippet compila in entrambi. `std::string`, stream, `vector`, `list`, riferimenti e `new`/`delete` non esistono in C: accanto a essi vengono presentati rispettivamente buffer di `char`, `<stdio.h>`, array dinamici/lista manuale, puntatori e `malloc`/`free`.

#### Paradigmi di Programmazione  
Un **paradigma** definisce uno stile di programmazione. I principali paradigmi sono:  
1. **Programmazione Imperativa**: descrive *come* eseguire un'operazione (sequenza di istruzioni).  È il paradigma di programmazione utilizzato in questa dispensa.
2. **Programmazione Dichiarativa**: descrive *cosa* deve essere fatto (es. SQL).  
3. **Programmazione Funzionale**: basata sulle funzioni matematiche.  
4. **Programmazione Orientata agli Oggetti**: organizza il codice attorno a "oggetti" che combinano dati e funzioni (è una tipologia specifica di programmazione imperativa)

---

### Compilazione e Interpretazione  
Per trasformare un programma scritto in linguaggio ad alto livello in linguaggio macchina, si usano **compilatori** o **interpreti**.

#### Compilatore  
La **compilazione** in C e C++ è il processo che trasforma il codice sorgente scritto dall'utente in un programma eseguibile. Si compone di quattro fasi principali. I comandi seguenti mostrano C++; in C si sostituisce `g++` con `gcc` e `.cpp` con `.c`.

##### 1. Preprocessing

- Viene eseguito dal **preprocessore** (ad es., `g++ -E file.cpp`).
- Elabora direttive come `#include`, `#define`, e macro.
- Rimuove i commenti e include file di intestazione (`.h`).

##### 2. Compilazione

- Il codice sorgente preprocessato viene tradotto in **assembly**, un linguaggio di basso livello leggibile dalla macchina.
- Questa fase rileva errori di sintassi e di semantica.
- Comando: `g++ -S file.cpp`.

##### 3. Assemblaggio

- Il codice assembly viene tradotto in **codice oggetto** (file binario `.o`).
- Questa fase è gestita dall'assembler.
- Comando: `g++ -c file.s`.

##### 4. Linking

- Il linker collega il codice oggetto con eventuali **librerie** esterne o interne.
- Produce il file **eseguibile** finale.
- Comando: `g++ file.o`.

##### Comando Completo

Per automatizzare tutte le fasi:

```bash
g++ file.cpp
```
Questo comando genera un file eseguibile chiamato `a.out`. Se volessi invece dare un nome all'eseguibile, posso usare l'argomento `-o`:
```bash
g++ file.cpp -o programma
```

In breve, **preprocessing** → **compilazione** → **assemblaggio** → **linking** portano al programma finale eseguibile.

##### Esecuzione
Posso infine eseguire l'eseguibile che ho creato:
```bash
./programma
```
Oppure posso usare la concatenazione `&&` per compilare ed eseguire il programma:
```bash
g++ file.cpp -o programma && ./programma
```

> [!warning] Nota
> Su linux, `.` significa la cartella corrente, per cui la notazione `./` significa che il file si trova dentro la cartella in cui mi trovo.
> Il processo compilazione di progetti più complessi che includono molteplici files, solitamente in C e C++ si automatizza con un `makefile`, che sarà un argomento avanzato.

#### Errori sintattici e semantici

Quando il compilatore trova un errore, mostra in genere il **file**, la **riga**, la **colonna** e una descrizione del problema. Come punto di partenza consideriamo questo programma C++ corretto, che calcola la somma di due numeri:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 7;
    int b = 5;
    int somma = a + b;

    cout << "La somma è: " << somma << '\n';
    return 0;
}
```

La versione C equivalente è:

```c
#include <stdio.h>

int main(void) {
    int a = 7;
    int b = 5;
    int somma = a + b;

    printf("La somma è: %d\n", somma);
    return 0;
}
```

Salvato come `somma.cpp`, il programma si può compilare ed eseguire con:

```bash
g++ somma.cpp -Wall -Wextra -o somma && ./somma
```

Per la versione C, salvata come `somma.c`, il comando equivalente è:

```bash
gcc somma.c -std=c17 -Wall -Wextra -Wpedantic -o somma && ./somma
```

L'output è:

```text
La somma è: 12
```

##### Errore sintattico

La **sintassi** è l'insieme delle regole che stabiliscono come devono essere scritte le istruzioni. Un errore sintattico si verifica quando il codice non rispetta la grammatica del linguaggio, per esempio se manca il punto e virgola:

```cpp
int b = 5
int somma = a + b;
```

Una forma tipica e abbreviata del messaggio di `g++` è:

```text
somma.cpp:6:5: error: expected ',' or ';' before 'int'
    6 |     int somma = a + b;
      |     ^~~
```

- `somma.cpp:6:5` indica file, riga e colonna in cui il compilatore si è accorto del problema;
- `error` indica che la compilazione non può proseguire;
- `expected ',' or ';' before 'int'` significa che, prima della nuova dichiarazione `int`, il compilatore si aspettava un separatore valido.

Il messaggio segnala la riga 6, ma la causa è alla fine della riga precedente: il compilatore può accorgersi di un errore solo quando incontra qualcosa che non riesce più a interpretare. Per correggerlo bisogna quindi aggiungere `;` dopo `int b = 5`.

##### Errore semantico

La **semantica** riguarda il significato del programma, cioè ciò che il programma effettivamente fa. Un errore semantico si verifica quando le istruzioni sono scritte correttamente, ma non realizzano l'operazione richiesta. Per esempio, sostituiamo per errore l'addizione con una sottrazione:

```cpp
int somma = a - b;
```

Questa istruzione rispetta tutte le regole del C++: le variabili sono dichiarate, i tipi sono compatibili e l'operatore `-` può essere applicato a due interi. Di conseguenza il compilatore **non mostra alcun errore** e crea normalmente l'eseguibile. Quando però eseguiamo il programma, otteniamo:

```text
La somma è: 2
```

Il risultato atteso era `12`, ma il programma calcola `7 - 5`. Il compilatore non può sapere che volevamo eseguire una somma: controlla che il codice rispetti le regole del linguaggio, non che risolva il problema desiderato. Per trovare questo tipo di errore bisogna quindi verificare l'output con dati di prova e confrontarlo con il risultato atteso.

In questa dispensa useremo quindi **errore semantico** ed **errore logico** come sinonimi per indicare un programma formalmente valido che produce un risultato diverso da quello richiesto.

I messaggi degli errori sintattici possono cambiare leggermente in base alla versione del compilatore. Inoltre, un primo errore può provocare altri messaggi a cascata: conviene correggere gli errori partendo sempre dal primo e poi ricompilare.

#### Interprete  
- Traduce ed esegue il programma **mentre lo esegue, istruzione per istruzione**.  
- Esempi di linguaggi interpretati: Python, Java.  
- Non genera un file eseguibile ma esegue direttamente il codice sorgente.
#### Compilato vs interpretato
Esempio:
- **C++ (compilato)**:  
   1. Scrivo il codice.  
   2. Compilo il programma con `g++` (es. `g++ hello.cpp -o hello`).  
   3. Eseguo il file eseguibile con `./hello`.  
- **C (compilato)**:
   1. Scrivo il codice in `hello.c`.
   2. Compilo con `gcc hello.c -std=c17 -Wall -Wextra -o hello`.
   3. Eseguo il file con `./hello`.
- **Python (interpretato)**:  
   1. Scrivo il codice.  
   2. Il codice viene eseguito direttamente dall'interprete Python: `python hello.py`.

---

### Il nostro primo programma
Vediamo il classico esempio **"Hello, World!"** sia in un linguaggio compilato (C++) che interpretato (Python).

#### Esempio in C++
```cpp
#include <iostream>
using namespace std;

int main() {
    cout<<"Hello, World!"<<endl;
    return 0;
}
```
1. Scriviamo il codice.  
2. Compiliamo il programma con `g++` (es. `g++ hello.cpp -o hello`).  
3. Eseguiamo il file eseguibile con `./hello`. 
4. Se tutto è andato a buon fine, vedremo a schermo la scritta
```
Hello, World!
```

Al momento, possiamo prendere per buone alcune delle cose scritte nel codice, che vedremo nel dettaglio andando più avanti nel corso:

1. **`#include <iostream>`**:
    
    - Include il file di intestazione `iostream`, che contiene le definizioni di funzioni e oggetti per la gestione dello stream di input e output, come `std::cout` e `std::cin`.
2. **`using namespace std;`**:
    
    - Permette di evitare di scrivere `std::` prima di ogni elemento dello standard namespace. Ad esempio, invece di scrivere `std::cout`, puoi usare semplicemente `cout`.
3. **`int main()`**:
    
    - Punto di ingresso del programma. La funzione `main()` è dove il programma inizia l'esecuzione.
    - Restituisce un valore di tipo `int`. Tradizionalmente, restituire `0` indica che il programma è terminato correttamente.
    - In C++, tutte le funzioni (tra cui il main, che è anch'esso una funzione) e le strutture di controllo di flusso, devono racchiudere il codice all'interno di parentesi graffe.
1. **`cout << "Hello, World!" << endl;`**:
    
    - `cout` è l'output stream standard che scrive dati sulla console.
    - L'operatore `<<` è utilizzato per inviare i dati allo stream.
    - `"Hello, World!"` è una stringa letterale che verrà stampata.
    - `endl` è un manipolatore che aggiunge un carattere di nuova linea (`\n`) e svuota il buffer dello stream.
5. **`return 0;`**:
    
    - Restituisce il valore `0` al sistema operativo per indicare che il programma è terminato senza errori.

L'uso di `using namespace std;` può essere comodo per programmi semplici, ma in programmi più complessi è preferibile usare il prefisso `std::` per evitare conflitti di nomi.

Esempio senza `using namespace std;`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Durante il nostro corso, dovremmo utilizzare sempre il namespace std.

#### Lo stesso programma in C

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

In C l'input/output da console è fornito da `<stdio.h>`: `printf` sostituisce `cout` e il carattere `\n` va normalmente inserito nella stringa per andare a capo. In C non esistono né `iostream`, né `std`, né `using namespace`.

---
### Esercizi

> [!exercise] Esercizio
> Crea un file sorgente che stampi una qualunque stringa di testo. Compilalo ed eseguilo.
> Prova ad arrivare al file compilato seguendo invece passo a passo tutte le fasi della compilazione, che file produci? Hai provato ad aprirli per vedere cosa si trova all'interno?
> Infine prova a sperimentare cambiando alcune cose all'interno del file sorgente e vedi cosa succede. Se scrivi del codice sbagliato cosa succede? Il compilatore ti aiuta a capire cosa hai sbagliato?

---
## Capitolo 2: Fondamenti della programmazione imperativa

### Cos’è la programmazione imperativa?

La **programmazione imperativa** si basa su un modello in cui le istruzioni vengono eseguite sequenzialmente per modificare lo stato del programma. È come dare ordini sequenziali al computer per eseguire azioni precise.

Le caratteristiche principali sono:

- **Sequenzialità**: le istruzioni vengono eseguite nell'ordine in cui sono scritte.
- **Modifica dello stato**: i valori delle variabili cambiano nel corso del programma.
- **Controllo del flusso**: utilizzo di condizioni e cicli per deviare il percorso.

Esempio semplice in **C++**:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;        // Dichiarazione di una variabile
    a = a + 3;        // Modifica dello stato
    cout << a << endl; // Stampa: 8
    return 0;
}
```

Lo stesso programma in **C**:

```c
#include <stdio.h>

int main(void) {
    int a = 5;
    a = a + 3;
    printf("%d\n", a);
    return 0;
}
```

--- 
### Commenti
Come abbiamo già visto nell'esempio prima, nel codice posso inserire dei "commenti". I commenti sono cose che io posso scrivere nel codice senza che queste vengano considerate dal compilatore. Posso quindi usarli per annotare cose, descrivere il funzionamento di parti di codice (senza esagerare), o per disabilitare temporaneamente parti di codice che non voglio che siano eseguite per debugging (il **debugging** è quella fase in cui testo il programma per cercare errori all'interno del codice e correggerli).
Per fare un commento in una linea aggiungiamo `//` prima del commento, per farlo multilinea dobbiamo racchiudere il commento tra `/*` e `*/` come si vede nel prossimo esempio:
```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;        // Questo è un commento
    a = a + 3;
    // Anche questo è un commento
    cout << a << endl; 
    // cout << "Ciao!" << endl; <- questa linea di codice non viene eseguita
    /* questo è
	un commento su più
	linee */// cout << "Ciao!" << endl; <- questa linea di codice non vie
    return 0;
}
```

---

### Variabili e tipi di dati in C e C++
Immagina di avere un **cassetto** in cui puoi mettere un oggetto. Quel cassetto ha un’etichetta con un nome, che mi deve dare idea di quale oggetto ci possa trovare dentro.
Puoi aprire il cassetto, mettere un oggetto dentro, cambiarlo ecc...

Le **variabili** sono  appunto contenitori per memorizzare dati. Ogni variabile ha un **tipo di dato** che definisce il tipo di valore che può contenere e un nome che le identifica univocamente. Questo consente di organizzare e manipolare i dati all'interno di un programma in modo efficiente.
#### Tipi di dati principali in C++

| Tipo     | Descrizione                          | Esempio di assegnazione |
| -------- | ------------------------------------ | ----------------------- |
| `int`    | Numeri interi                        | `int a = 5;`            |
| `float`  | Numeri decimali (precisione singola) | `float b = 3.14;`       |
| `double` | Numeri decimali (alta precisione)    | `double c = 2.718;`     |
| `char`   | Carattere singolo                    | `char d = 'A';`         |
| `string` | Sequenza di caratteri                | `string s = "Ciao";`    |
| `bool`   | Valori booleani (vero/falso)         | `bool e = true;`        |

> [!warning] Differenze in C
> In C `string` non è un tipo: una stringa è un array di `char` terminato da `\0`. Per usare `bool`, `true` e `false` in C17 occorre includere `<stdbool.h>`. I tipi numerici, `char`, `const` e gli operatori di assegnazione/incremento presentati qui hanno invece la stessa sintassi in C e C++.
#### Dichiarazione e assegnazione

> [!note] Sintassi comune C/C++
> Le dichiarazioni numeriche e gli esempi seguenti con `int`, `double`, `char` e `const` sono validi sia in C sia in C++. Gli esempi che usano `string` sono invece specifici del C++ e sono accompagnati dalla variante C.
Una variabile deve essere dichiarata specificando il tipo e il nome. L'assegnazione consiste nell'attribuire un valore alla variabile:

```cpp
int numero;
numero = 10; // Assegnazione
```

Oppure dichiarazione e assegnazione possono essere combinate:

```cpp
int numero = 10;
```

Assegnazioni possono essere effettuate anche da altre variabili o espressioni:

```cpp
int a = 5;
int b = a; // Assegnazione da un'altra variabile
int c = a + b; // Assegnazione da un'espressione
```

Posso anche creare delle costanti, per valori che non voglio che siano cambiati dopo l'inizializzazione:
```cpp
const double PI = 3.14159;
```
####   Operazioni di base sulle variabili

#####   1. Assegnazione di un valore

Metti un oggetto dentro il cassetto.

```cpp
string cassetto = "maglietta";  // Il cassetto ora contiene una maglietta
```

In C una stringa deve occupare un array di caratteri; per modificarla si usa una funzione di `<string.h>`:

```c
#include <string.h>

char cassetto[20] = "maglietta";
strcpy(cassetto, "pantaloni");
```

Questo succede perché in C le stringhe non sono oggetti autonomi come `std::string` in C++: sono array di `char`. Il nome dell'array identifica la zona di memoria che contiene i caratteri, e molte funzioni come `strcpy` ricevono l'indirizzo del primo carattere e da lì scrivono i caratteri successivi.

🔹 **Esempio pratico:** Apri il cassetto e metti dentro una **maglietta**.

Se poi vuoi cambiarlo:

```cpp
cassetto = "pantaloni";  // Ora il cassetto contiene pantaloni
```

🔹 **Hai tolto la maglietta e messo dei pantaloni al suo posto.**

---

#####   2. Incremento (o decremento) di una variabile

Se il cassetto contiene qualcosa che può essere **aumentato o diminuito** (ad esempio, un numero di monete), possiamo modificarlo.

```cpp
int monete = 5;
monete = monete + 1;  // Ora il cassetto contiene 6 monete
monete = monete - 1;  // Ora il cassetto contiene 5 monete di nuovo
```

🔹 **Hai messo una moneta in più nel cassetto, poi ne hai tolta una.**

C++ fornisce operatori che combinano assegnazione e operazioni (notate che non sono limitato ad addizioni e sottrazioni):

```cpp
int a = 10;
a += 5; // Equivale a: a = a + 5 (a diventa 15)
a -= 3; // Equivale a: a = a - 3 (a diventa 12)
a *= 2; // Equivale a: a = a * 2 (a diventa 24)
a /= 4; // Equivale a: a = a / 4 (a diventa 6)
a %= 2; // Equivale a: a = a % 2 (a diventa 0)
a++; // Equivale a: a = a + 1 (a diventa 1)
a--; // Equivale a: a = a - 1 (a diventa 0)
```

---

#####   3. Modifica del valore di una variabile

Se vuoi cambiare cosa c'è dentro un cassetto, basta sostituire l’oggetto.

```cpp
string cassetto = "maglietta";
cassetto = "giacca";  // Ora il cassetto contiene una giacca
```

🔹 **Hai tolto la maglietta e ci hai messo una giacca.**

---
#####   4. Assegnazione del valore di una variabile a un’altra

Prendi il contenuto di un cassetto e lo copi in un altro.

```cpp
string cassetto1 = "calzini";
string cassetto2 = cassetto1;  // Ora il secondo cassetto contiene anch'esso "calzini"
```

🔹 **Hai aperto un secondo cassetto e ci hai messo dentro gli stessi calzini che erano nel primo (entrambi ora contengono gli stessi calzini, magia).**

Se ora cambi il contenuto di `cassetto1`,  quello di `cassetto2` non cambia:

```cpp
cassetto1 = "cintura";  
// cassetto2 contiene ancora "calzini", perché abbiamo cambiato solo il primo cassetto.
```

---

#####   5. Scambio di valore tra due variabili
Hai due bicchieri, uno contente dell'acqua e uno contenente la coca cola. Come fai a scambiare il contenuto dei due bicchieri senza mischiarli?

```cpp
string bicchiere1 = "acqua";
string bicchiere2 = "cola";
string bicchiere3 = bicchiere1;  // Usiamo un bicchiere aggiuntivo per versarci l'acqua
bicchiere1 = bicchiere2;    // Versiamo la cola dal bicchiere 1 al bicchiere 2
bicchiere2 = bicchiere3;         // Versiamo l'acqua dal bicchiere 3 al bicchiere 2
```

In C non si assegnano direttamente gli array di caratteri. Una versione sicura usa `strcpy` con array abbastanza grandi:

```c
#include <string.h>

char bicchiere1[10] = "acqua";
char bicchiere2[10] = "cola";
char bicchiere3[10];

strcpy(bicchiere3, bicchiere1);
strcpy(bicchiere1, bicchiere2);
strcpy(bicchiere2, bicchiere3);
```

🔹 **Hai preso l'acqua, e l'hai versata in un terzo bicchiere. Ora puoi versare la cola nel primo bicchiere, e a questo punto prendere l'acqua del terzo bicchiere e metterla nel secondo**
(In realtà, se ci pensi, non è esattamente quello che accade quando lavori con le variabili, cosa succede in realtà nel programma?)

Se hai solo dei numeri, puoi provare a scambiarli senza usare una terza variabile!

```cpp
int a = 5, b = 10;
a = a + b;  // a = 15
b = a - b;  // b = 5
a = a - b;  // a = 10
```

#### Esempio completo in C++

Un esempio di utilizzo delle variabili e dei tipi di dato principali:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int a = 8, b = 3;
    int somma = a + b;
    int prodotto = a * b;
    
    a += 2; // Incremento combinato

    string nome = "Mario";
    string saluto = "Ciao, " + nome;

    cout << "Somma: " << somma << endl;
    cout << "Prodotto: " << prodotto << endl;
    cout << "Nuovo valore di a: " << a << endl;
    cout << saluto << endl;

    return 0;
}
```
Da questo esempio notiamo come posso anche "sommare" le stringhe. In verità questa operazione si chiama concatenazione, e unisce due stringhe in una stringa unica.

In C questa concatenazione non si può scrivere con `+`: servono array di caratteri e funzioni di `<string.h>`, come `strcat`, avendo cura che l'array di destinazione abbia spazio sufficiente.

Versione completa in C:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    int a = 8, b = 3;
    int somma = a + b;
    int prodotto = a * b;
    char nome[] = "Mario";
    char saluto[30] = "Ciao, ";

    a += 2;
    strcat(saluto, nome);
    printf("Somma: %d\nProdotto: %d\nNuovo valore di a: %d\n%s\n",
           somma, prodotto, a, saluto);
    return 0;
}
```

---

### Input e Output da console

Per **interagire con l’utente**, utilizziamo **`cin`** per l'input e **`cout`** per l'output.

```cpp
#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Inserisci un numero: ";
    cin >> numero;
    cout << "Hai inserito: " << numero << endl;

    return 0;
}
```

Come vediamo nell'esempio, `cin` e `cout` utilizzano rispettivamente `>>` e `<<` come separatori. Posso concatenare con i separatori di output più stringhe e valori insieme. Posso anche concatenare più input: in tal caso il programma aspetterà più valori da inserire, separati da spazi o dalla pressione del tasto invio.

#### Input e output da console in C

```c
#include <stdio.h>

int main(void) {
    int numero;

    printf("Inserisci un numero: ");
    if (scanf("%d", &numero) != 1) {
        printf("Input non valido.\n");
        return 1;
    }
    printf("Hai inserito: %d\n", numero);
    return 0;
}
```

In `scanf`, il simbolo `&` passa l'indirizzo della variabile in cui memorizzare il dato. I formati più comuni sono `%d` per `int`, `%f` per `float`, `%lf` per `double` e `%c` per `char`. Per leggere una riga di testo con spazi è preferibile `fgets`, come mostrato nel capitolo sulle stringhe.

---

#### Caratteri speciali nelle stringhe

Quando utilizzi **`cout`** per stampare a schermo, puoi includere caratteri speciali usando il carattere di escape `\` per rappresentare simboli o comportamenti particolari. Ecco un elenco dei più comuni:

| Carattere speciale | Significato             | Esempio                            | Output              |
| ------------------ | ----------------------- | ---------------------------------- | ------------------- |
| `\n`               | Nuova riga              | `cout << "Ciao\nMondo";`           | Ciao<br>Mondo       |
| `\t`               | Tabulazione orizzontale | `cout << "Ciao\tMondo";`           | Ciao     Mondo      |
| `\\`               | Barra rovesciata (`\`)  | `cout << "C:\\Documenti";`         | C:\Documenti        |
| `\'`               | Apice singolo           | `cout << "L\'utente";`             | L'utente            |
| `\"`               | Apice doppio            | `cout << "\"C++\" è fantastico!";` | "C++" è fantastico! |


---

**Esempi pratici**:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Esempio di nuova riga:\n";
    cout << "Ciao\nMondo" << endl;

    cout << "\nEsempio di tabulazione:\n";
    cout << "Ciao\tMondo" << endl;

    cout << "\nEsempio di barra rovesciata:\n";
    cout << "Percorso: C:\\Documenti\\File" << endl;

    cout << "\nEsempio di apici:\n";
    cout << "L'utente ha detto: \"C++ è fantastico!\"" << endl;

    cout << "\nEsempio di ritorno a capo:\n";

    return 0;
}
```

**Output**:

```
Esempio di nuova riga:
Ciao
Mondo

Esempio di tabulazione:
Ciao    Mondo

Esempio di barra rovesciata:
Percorso: C:\Documenti\File

Esempio di apici:
L'utente ha detto: "C++ è fantastico!"

Esempio di ritorno a capo:
ABC45
```

---

### Operazioni aritmetiche

Le **operazioni aritmetiche** in C++ seguono i simboli standard:

| Operazione      | Simbolo | Esempio | Risultato |
| --------------- | ------- | ------- | --------- |
| Addizione       | `+`     | `5 + 3` | `8`       |
| Sottrazione     | `-`     | `5 - 3` | `2`       |
| Moltiplicazione | `*`     | `5 * 3` | `15`      |
| Divisione       | `/`     | `6 / 3` | `2`       |
| Modulo          | `%`     | `5 % 3` | `2`       |


```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    cout << "Addizione: " << a + b << endl;
    cout << "Sottrazione: " << a - b << endl;
    cout << "Moltiplicazione: " << a * b << endl;
    cout << "Divisione: " << a / b << endl;
    cout << "Modulo: " << a % b << endl;

    return 0;
}
```

In questo esempio notiamo come posso anche inserire direttamente delle espressioni nell'output di `cout`.

Versione C:

```c
#include <stdio.h>

int main(void) {
    int a = 10, b = 3;

    printf("Addizione: %d\n", a + b);
    printf("Sottrazione: %d\n", a - b);
    printf("Moltiplicazione: %d\n", a * b);
    printf("Divisione: %d\n", a / b);
    printf("Modulo: %d\n", a % b);
    return 0;
}
```

---

### Esempio completo: somma di due numeri

Ecco un esempio che utilizza **input**, **operazioni aritmetiche** e **output**.

```cpp
#include <iostream>
using namespace std;

int main() {
    int num1, num2, somma;

    // Input
    cout << "Inserisci il primo numero: ";
    cin >> num1;
    cout << "Inserisci il secondo numero: ";
    cin >> num2;

    // Operazione
    somma = num1 + num2;

    // Output
    cout << "La somma è: " << somma << endl;

    return 0;
}
```

Versione C:

```c
#include <stdio.h>

int main(void) {
    int num1, num2;

    printf("Inserisci il primo numero: ");
    if (scanf("%d", &num1) != 1) return 1;
    printf("Inserisci il secondo numero: ");
    if (scanf("%d", &num2) != 1) return 1;

    printf("La somma è: %d\n", num1 + num2);
    return 0;
}
```

---

### Esercizi

> [!exercise] Esercizi
> 1. Scrivi un programma che riceva in input 3 numeri e ne calcoli la somma e la media.
> 2. Calcola l'area di un triangolo dati base e altezza.
> 3. Scrivi un programma che converte una temperatura da Celsius a Fahrenheit

## Capitolo 3: Strutture di Controllo del Flusso

### Introduzione  
In un programma imperativo, le **strutture di controllo del flusso** sono fondamentali per prendere decisioni e ripetere blocchi di codice:  
1. **Strutture condizionali**: consentono di eseguire porzioni di codice solo se una condizione è soddisfatta.
2. **Strutture iterative (cicli)**: permettono di ripetere un blocco di istruzioni più volte finché una determinata condizione è soddisfatta (è l'unico modo "legale" che abbiamo per tornare indietro nel codice).

---

### Strutture Condizionali  

> [!note] Sintassi comune C/C++
> Le forme di `if`, `else if`, `else`, `switch`, l'operatore ternario e le parentesi graffe sono identiche in C e C++. Negli esempi completi sotto cambiano soprattutto input/output (`scanf`/`printf` in C) e, per i booleani, l'header `<stdbool.h>`.

#### L'istruzione `if`  
La struttura `if` consente di eseguire un blocco di codice solo se una condizione è **vera**.  

**Sintassi**:  
```cpp
if (condizione) {
    // Blocco di codice eseguito se la condizione è vera
}
```

**Esempio**:  Questo programma stampa `Il numero è positivo.` solo se l'utente inserisce un numero maggiore di zero.
```cpp
#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Inserisci un numero: ";
    cin >> numero;

    if (numero > 0) { // Condizione
        cout << "Il numero è positivo." << endl; // blocco di codice eseguito solo se la condizione è soddisfatta
    }
    return 0;
}
```

Versione C dello stesso controllo:

```c
#include <stdio.h>

int main(void) {
    int numero;
    printf("Inserisci un numero: ");
    if (scanf("%d", &numero) != 1) return 1;

    if (numero > 0) {
        printf("Il numero è positivo.\n");
    }
    return 0;
}
```

---

#### L'istruzione `if-else`  
L'istruzione `if-else` aggiunge un **percorso alternativo** se la condizione è falsa.
```cpp
if (condizione) {
    // Codice eseguito se la condizione è vera
} else {
    // Codice eseguito se la condizione è falsa
}
```

> [!warning] Nota
> Quando utilizziamo delle espressioni logiche (le useremo soprattutto all'interno delle condizioni), dobbiamo ricordarci che "diverso da" si indica con `!=` e "uguale a" si indica con `==`. Il singolo `=` serve esclusivamente per fare le assegnazioni, quindi ha un significato diverso da quello matematico, che per noi è il doppio uguale.

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Inserisci un numero: ";
    cin >> numero;

    if (numero % 2 == 0) { 
        cout << "Il numero è pari." << endl;
    } else {
        cout << "Il numero è dispari." << endl;
    }
    return 0;
}
```


> [!exercise] Esercizio
> Cosa ti aspetti che succeda se togli il blocco `else` e metti `cout << "Il numero è dispari." << endl;` fuori dal blocco `if`?


---

#### L'istruzione `if-else if`  
Quando si devono valutare **più condizioni**, si utilizza l'istruzione `if-else if`.  

**Sintassi**:  
```cpp
if (condizione1) {
    // Codice eseguito se condizione1 è vera
} else if (condizione2) {
    // Codice eseguito se condizione2 è vera
}
else if (condizione3) {
    // Codice eseguito se condizione3 è vera
}
//...
else {
    // Codice eseguito se nessuna condizione è vera
}
```
Posso inserire tutte le condizioni che voglio, attenzione tuttavia che se ne inserisco troppe, probabilmente devo usare una struttura più avanzata (non le useremo in questo corso), come ad esempio una struttura dati dizionario.

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Inserisci un numero: ";
    cin >> numero;

    if (numero > 0) {
        cout << "Il numero è positivo." << endl;
    } else if (numero < 0) {
        cout << "Il numero è negativo." << endl;
    } else {
        cout << "Il numero è zero." << endl;
    }
    return 0;
}
```

---

#### L'istruzione `switch`  
L'istruzione `switch` è una istruzione equivalente a `if-else if`utile quando si devono confrontare i valori di una variabile con più **casi specifici**.  

**Sintassi**:  
```cpp
switch (espressione) {
    case valore1:
        // Codice da eseguire se espressione == valore1
        break;
    case valore2:
        // Codice da eseguire se espressione == valore2
        break;
    default:
        // Codice eseguito se nessun caso corrisponde
}
```

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

int main() {
    int giorno;
    cout << "Inserisci un numero (1-7) per il giorno della settimana: ";
    cin >> giorno;

    switch (giorno) {
		case 1:
        	cout << "Lunedì" << endl;
        	break;
        case 2:
        	cout << "Martedì" << endl;
        	break;
        case 3:
        	cout << "Mercoledì" << endl;
        	break;
        case 4:
        	cout << "Giovedì" << endl;
        	break;
        case 5:
        	cout << "Venerdì" << endl;
        	break;
        case 6:
        	cout << "Sabato" << endl;
        	break;
        case 7:
        	cout << "Domenica" << endl;
        	break;
        default:
        	cout << "Numero non valido!" << endl;
    }
    return 0;
}
```

Il `break` (che posso anche usare per interrompere manualmente un ciclo) è necessario ad ogni istruzione in questo caso, poiché lo switch esegue l'istruzione corrispondente al valore, ma poi esegue anche tutte quelle sottostanti. In rari casi posso omettere il `break` se questo comportamento è voluto.

La versione C dello `switch` ha la stessa struttura; cambia soltanto l'I/O:

```c
#include <stdio.h>

int main(void) {
    int giorno;
    printf("Inserisci un numero (1-7): ");
    if (scanf("%d", &giorno) != 1) return 1;

    switch (giorno) {
        case 1: printf("Lunedì\n"); break;
        case 2: printf("Martedì\n"); break;
        case 3: printf("Mercoledì\n"); break;
        case 4: printf("Giovedì\n"); break;
        case 5: printf("Venerdì\n"); break;
        case 6: printf("Sabato\n"); break;
        case 7: printf("Domenica\n"); break;
        default: printf("Numero non valido!\n");
    }
    return 0;
}
```

> [!exercise] Esercizio
> Nel codice precedente, prova a rimuovere i break e guarda cosa succede.

#### Operatore ternario
L’operatore ternario è una forma compatta dell’istruzione condizionale `if-else`, che permette di scegliere tra due espressioni in base al risultato di una condizione logica.
La sintassi è:
```cpp
condizione ? espressione_se_vera : espressione_se_falsa;
```
Quando la **condizione** è vera, viene valutata e restituita l’**espressione_se_vera**; se invece è falsa, viene valutata e restituita l’**espressione_se_falsa**.
##### Esempio di utilizzo
```cpp
int x = -7;
int absValue = (x >= 0) ? x : -x;
```
In questo esempio, se `x` è maggiore o uguale a zero, `absValue` assume il valore di `x`; altrimenti, ne assume l’opposto.
##### Equivalente con if-else
```cpp
int x = -7;
int absValue;
if (x >= 0) {
    absValue = x;
} else {
    absValue = -x;
}
```
##### Vantaggi e utilizzi
* **Sintesi:** consente di scrivere in una sola riga ciò che normalmente richiede un blocco `if-else`.
* **Flessibilità:** può essere inserito direttamente in espressioni o assegnazioni.
L’operatore ternario è ideale per condizioni semplici e chiare; se le condizioni o le espressioni diventano complesse, è preferibile usare un `if-else` tradizionale per mantenere leggibilità e chiarezza del codice.
##### Considerazioni

- **Leggibilità:** per condizioni troppo complesse o annidate, l'uso dell'operatore ternario può ridurre la chiarezza del codice. In questi casi, è preferibile utilizzare le strutture condizionali tradizionali.
- **Precedenza:** l'operatore ternario ha una precedenza relativamente bassa, quindi a volte può essere necessario usare le parentesi per assicurare l'ordine di valutazione desiderato.

L'operatore ternario è quindi un utile strumento per semplificare il codice, purché venga utilizzato in contesti in cui la condizione e le espressioni coinvolte rimangano facilmente comprensibili.

---

###  Espressioni logiche e algebra di Boole

Dopo aver visto esempi semplici con condizioni singole, possiamo combinare insieme più condizioni semplici per ottenerne di più complesse attraverso gli **operatori logici** e l’**algebra di Boole**.

---

#### Tabelle di verità dell’algebra di Boole

L’**algebra di Boole** è alla base delle espressioni logiche:

- **0** rappresenta **false (falso)**
- **1** rappresenta **vero (true)**

| A   | B   | A AND B | A OR B | NOT A |
| --- | --- | ------- | ------ | ----- |
| 0   | 0   | 0       | 0      | 1     |
| 0   | 1   | 0       | 1      | 1     |
| 1   | 0   | 0       | 1      | 0     |
| 1   | 1   | 1       | 1      | 0     |
I connettivi logici di base funzionano esattamente come il linguaggio naturale che utilizziamo per parlare:
- **AND**: tradotto in italiano come "e", assume valore vero solo se entrambe le espressioni sono vere, ad esempio l'espressione "Ho una maglietta gialle e (and) ho i pantaloni neri" è vera soltanto se vesto sia una maglietta gialla che i pantaloni neri. Se avessi la maglietta gialla e i pantaloni verdi sarebbe falsa.
- **OR**: tradotto in italiano come "o", assume valore vero solo se almeno una o tutte le espressioni della frase sono vere, ad esempio l'espressione "Ho una maglietta gialle o (or) ho i pantaloni neri" è vera sia che vesta una maglietta gialla e i pantaloni neri sia che vesta la maglietta gialla e i pantaloni verdi. Sarebbe falsa solo se avessi ad esempio la maglia rossa e i pantaloni verdi.
- **NOT**: inverte il valore di verità dell'espressione, tradotto in italiano come "non", ad esempio `fuori non(not) piove` è vera se il valore piove è falso, mentre assume valore falso se il valore di piove è vero.

Cosi come gli operatori nelle espressioni matematiche, anche i connettivi logici hanno precedenze diverse. Gli ordini di precedenza sono not->and->or. Pertanto se avessi una espressione `A or B and not C`, verrà valutato prima `not C`, poi `B and not C` e infine il risultato messo in `or` con `A`.
Posso usare le parentesi come nelle espressioni matematiche per cambiare le precedenze, ricorda tuttavia che posso usare solo parentesi tonde anche una dentro l'altra (graffe e quadre servono per altre cose).

---

#### Esempi pratici in C++

> [!note] In C
> Le strutture `if`, `else`, `switch`, `for`, `while` e `do ... while` usano la stessa sintassi. Per la massima portabilità in C usa gli operatori simbolici `&&`, `||` e `!`; le forme testuali `and`, `or` e `not` degli esempi sono proprie del C++ (in C richiederebbero `<iso646.h>`).

1. **Condizione con AND (`&&` o `and`)**:

```cpp
#include <iostream>
using namespace std;

int main() {
    int eta;
    cout << "Inserisci la tua età: ";
    cin >> eta;

    if (eta >= 18 and eta <= 65) {
        cout << "Sei in età lavorativa." << endl;
    } else {
        cout << "Non sei in età lavorativa." << endl;
    }
    return 0;
}
```

2. **Condizione con OR (`||` o `or`)**:

```cpp
#include <iostream>
using namespace std;

int main() {
    char lettera;
    cout << "Inserisci una lettera: ";
    cin >> lettera;

    if (lettera == 'a' or lettera == 'e' or lettera == 'i' or lettera == 'o' or lettera == 'u') {
        cout << "Hai inserito una vocale!" << endl;
    } else {
        cout << "Non è una vocale." << endl;
    }
    return 0;
}
```

3. **Uso del NOT (`!` o `not`)**:

```cpp
#include <iostream>
using namespace std;

int main() {
    bool piove = true; // posso salvare valori (anche risultati di espressioni) booleani in variabili di tipo bool

    if (!piove) {
        cout << "Esco senza ombrello." << endl;
    } else {
        cout << "Porto l’ombrello." << endl;
    }
    return 0;
}
```

In C usa i simboli e includi `<stdbool.h>`:

```c
#include <stdbool.h>
#include <stdio.h>

int main(void) {
    bool piove = true;

    if (!piove) {
        printf("Esco senza ombrello.\n");
    } else {
        printf("Porto l'ombrello.\n");
    }
    return 0;
}
```

---

#### Combinare più condizioni

Puoi combinare più espressioni logiche per creare condizioni ancora più complesse

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout<<"Inserisci a e b"<<endl;
    cin>>a>>b;

    if (a > 0 and b > 0 or a == b) {
        cout << "Le condizioni sono soddisfatte." << endl;
    } else {
        cout << "Le condizioni NON sono soddisfatte." << endl;
    }
    return 0;
}
```


> [!exercise] Esercizio
> Come faccio in questo codice a soddisfare la condizione inserendo in input due numeri negativi?


---
#### Boolean playground
Sperimenta liberamente con questo codice per capire come funzionano le espressioni booleane (e rispetta i miei capelli):
```cpp
#include <iostream>
#include <cstdlib>
using namespace std;

void clear()
{
	#ifdef _WIN32
	    std::system("cls");
	#else
	    // Assume POSIX
	    std::system ("clear");
	#endif
}
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	// nota: in booleano, true (vero) equivale a 1 e false (falso) equivale a 0
	// == sta per uguale, != sta per diverso. Attenzione a non confondersi con = che significa assegnazione
	cout<<"L'espressione 1==3 vale: "<< (1==3) <<endl;
	cout<<"L'espressione 1==1 vale: "<< (1==1) <<endl;	
	cout<<"L'espressione 1!=3 vale: "<< (1!=3) <<endl;
	cout<<"L'espressione 1!=1 vale: "<< (1!=1) <<endl;
	cout<<"L'espressione 1<3 vale: "<< (1<3) <<endl;
	cout<<endl;
	
	//i capelli del prof
	bool capelli_scuri = true; //not capelli_scuri sta per capelli biondi
	bool capelli_corti = true; // not capelli_corti sta per capelli lunghi
	
	//and (in italiano: e): e' vero solo quando tutti i valori dell'espressione sono veri
	cout<<"Il prof ha i capelli corti e scuri: "<<(capelli_corti and capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli corti e biondi: "<<(capelli_corti and not capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli lunghi e scuri: "<<(not capelli_corti and capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli lunghi e biondi: "<<(not capelli_corti and not capelli_scuri)<<endl;
	cout<<endl;
	
	//or (in italiano: o): e' falso solo quando tutti i valori dell'espressione sono falsi
	cout<<"Il prof ha i capelli corti o scuri: "<<(capelli_corti or capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli corti o biondi: "<<(capelli_corti or not capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli lunghi o scuri: "<<(not capelli_corti or capelli_scuri)<<endl;
	cout<<"Il prof ha i capelli lunghi o biondi: "<<(not capelli_corti or not capelli_scuri)<<endl;	
	cout<<endl;
	
	//posso utilizzare le parentesi come in un'espressione matematica, ad esempio:
	cout<<"Non e' vero che il prof ha i capelli lunghi e biondi: "<<not(not capelli_corti or not capelli_scuri)<<endl;
	cout<<endl;
	//le espressioni booleane sono utili per fare condizioni piu' complesse
	//proviamo con un quiz
	
	cout<<"Premi invio per continuare..."<<endl;
	cin.get(); // usiamo questo tipo di cin per mettere in pausa il programma finche l'utente non preme invio
	clear();
	
	int primaRisposta; //vanno dichiarate fuori dal ciclo se le uso come condizioni
	int secondaRisposta;
	bool primaVolta=true;
	do{
		if (not primaVolta){
			cout<<"Risposta errata, riprova!"<<endl;
		}
		primaVolta=false;
		cout<<"Di che lunghezza sono i capelli del prof?"<<endl;
		cout<<"1) Corti"<<endl;
		cout<<"2) Lunghi"<<endl;
		cin>>primaRisposta;
		cout<<"Di che colore sono i capelli del prof?"<<endl;
		cout<<"1) Biondi"<<endl;
		cout<<"2) Scuri"<<endl;
		cin>>secondaRisposta;
		clear();	
	} while (not (primaRisposta==1 and secondaRisposta==2));
	//se non e' vero che primaRisposta equivale a 1 e secondaRisposta equivale a 2 ripeti il ciclo
	
	cout<<"Risposta esatta!"<<endl;

	return 0;
}
```

> [!warning] Nota
> Nel codice è presente un ciclo, non li abbiamo ancora visti ma sono il prossimo argomento che leggerai. È anche presente una funzione (altro argomento che faremo) che richiama una funzione di sistema.

#### Esercizio su espressioni booleane
Questo esercizio permette di sperimentare con l'algebra booleana e anche di capire alcuni fondamenti di programmazione:

> [!exercise] Esercizio
> Scrivere un programma che, per ciascuna di queste frasi, stampa la frase seguita dal simbolo = e da un’espressione booleana che calcola il suo valore di verità.
> 
> > [!hint] Suggerimento
> > Per stampare i booleani come true e false invece che come 1 e 0 si deve impostare a true il flag boolalpha di cout. Per fare questo si usa la stessa sintassi della stampa, ovvero si deve “stampare” un comando, come segue: std::cout << std::boolalpha
> 
> • tre è maggiore di uno
> • quattro diviso due è minore di zero
> • il carattere “zero" è uguale al valore zero
> • dieci mezzi è compreso fra zero escluso e dieci incluso (ossia: dieci mezzi è maggiore di zero E dieci mezzi è minore o uguale a dieci)
> • non è vero che tre è maggiore di due e minore di uno
> • tre minore di meno cinque implica sette maggiore di zero

#### Esercizi su strutture condizionali

> [!exercise] Esercizi
> 1. **Positivo, Negativo o Zero**  
   Scrivi un programma che chiede all'utente di inserire un numero e stampa se è positivo, negativo o zero.  
   **Obiettivo**: Usare `if-else if` con più condizioni.
   >
>2. **Controllo dell’età**  
   Scrivi un programma che chiede all'utente di inserire la sua età. Se è minore di 18, stampa "Minorenne". Se è tra 18 e 65, stampa "Adulto". Altrimenti, stampa "Anziano".  
   **Obiettivo**: Utilizzare `if-else if` e l'operatore logico `&&`.
   >
>3. **Calcolatrice con `switch`**  
   Scrivi un programma che implementa una semplice calcolatrice. Chiedi all'utente di inserire due numeri e un’operazione (`+`, `-`, `*`, `/`) e calcola il risultato utilizzando `switch`.  
   **Obiettivo**: Praticare l'uso di `switch` con un caso `default` per gestire operazioni non valide.
   >
>4. **Verifica multipla con operatori logici**  
   Scrivi un programma che chiede all’utente di inserire due numeri interi `a` e `b`.  
   Stampa:  
   >- "Entrambi positivi" se entrambi i numeri sono maggiori di zero.  
   >- "Almeno un positivo" se almeno uno è maggiore di zero.  
   >- "Entrambi negativi o zero" altrimenti.  
   **Obiettivo**: Combinare operatori logici `&&` e `||`.
   >
>5. **Quiz sul giorno della settimana**  
   Scrivi un programma che chiede all'utente di inserire un numero tra 1 e 7 e stampa il giorno corrispondente (1 = Lunedì, 2 = Martedì, …, 7 = Domenica).  
   **Estensione**: Se il numero non è compreso tra 1 e 7, stampa "Errore: numero non valido".  
   **Obiettivo**: Usare `switch` con casi numerici e un caso `default`.

### Cicli e Iterazioni  
Nella programmazione, **i cicli** (o **strutture iterative**) sono costrutti fondamentali che consentono di ripetere automaticamente un blocco di istruzioni più volte, senza dover riscrivere il codice. Questo permette di creare programmi più compatti, flessibili e leggibili.
#### I cicli come alternativa al `goto`
In passato, la ripetizione di istruzioni era affidata all'uso di **salti incondizionati** (`goto`). Tuttavia, questa tecnica è oggi **fortemente sconsigliata** poiché compromette la chiarezza del codice e rende difficile seguirne il flusso logico. L'uso eccessivo di `goto` genera quello che viene definito *spaghetti code*: codice intricato e difficile da manutenere.
Per evitare questi problemi, i linguaggi moderni mettono a disposizione **strutture iterative controllate**, che consentono di gestire le ripetizioni in modo chiaro e strutturato. I principali tipi di cicli sono:
* **Cicli determinati**, quando il numero di iterazioni è noto a priori.
* **Cicli indeterminati**, quando il numero di iterazioni dipende da condizioni che possono variare durante l'esecuzione.
---
#### Cicli Determinati
Un ciclo è detto **determinato** quando **il numero di ripetizioni è noto prima dell'inizio dell’esecuzione del ciclo**. In questi casi si usa tipicamente il **ciclo `for`**, che consente di specificare esplicitamente tutte le informazioni necessarie al controllo del ciclo: inizializzazione, condizione, e aggiornamento.
##### Sintassi del ciclo `for`

> [!note] Sintassi comune C/C++
> I cicli `for`, `while`, `do ... while`, e le istruzioni `break` e `continue` hanno la stessa sintassi in C e C++. I tre blocchi di sola sintassi che seguono sono quindi già utilizzabili in C.
```cpp
for (inizializzazione; condizione; aggiornamento) {
    // Blocco di codice da ripetere
}
```
* **Inizializzazione**: viene eseguita una sola volta all’inizio del ciclo.
* **Condizione**: viene valutata all’inizio di ogni iterazione; se è falsa, il ciclo termina.
* **Aggiornamento**: viene eseguito alla fine di ogni iterazione.
##### Esempio: stampare i numeri da 0 a 5
```cpp
#include <iostream>
using namespace std;
int main() {
    for (int i = 0; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

Versione C:

```c
#include <stdio.h>

int main(void) {
    for (int i = 0; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```
##### Quando usare un ciclo determinato
Il ciclo `for` è adatto quando:
* si conosce il numero esatto di iterazioni,
* il numero di ripetizioni può essere determinato tramite una variabile o un'espressione calcolabile prima dell'inizio del ciclo,
* si lavora con strutture indicizzate (come array o stringhe).
##### Personalizzazione del ciclo `for`
La sintassi del ciclo `for` consente **grande flessibilità**: anche se spesso si usa la forma standard con incremento (`i++`) e un limite superiore (`i <= n`), **non è obbligatorio** seguire questo schema.
Vediamo alcuni esempi per chiarire:
###### 1. Conteggio decrescente
È possibile usare un **decremento** anziché un incremento:
```cpp
for (int i = 10; i >= 1; i--) {
    cout << i << " ";
}
```
> 🔎 In questo caso la condizione (`i >= 1`) è un **limite minimo**, e l’aggiornamento è un **decremento** (`i--`).
---
###### 2. Incrementi personalizzati
Si può aumentare il valore della variabile di controllo con passi diversi da 1:
```cpp
for (int i = 0; i <= 100; i += 10) {
    cout << i << " ";
}
```
> 🔎 In questo esempio l’incremento è di 10 ad ogni iterazione (`i += 10`).
---
###### 3. Condizione basata su espressioni più complesse
La condizione non deve necessariamente essere un confronto contro un valore fisso: può anche dipendere da espressioni o funzioni.
```cpp
for (int i = 1; i * i <= 100; i++) {
    cout << "Quadrato: " << i * i << endl;
}
```
> 🔎 Il ciclo continua finché il **quadrato** di `i` è minore o uguale a 100.
---
###### Per concludere
Le tre sezioni del ciclo `for` (inizializzazione; condizione; aggiornamento) **non sono rigide**, ma possono essere adattate liberamente alle esigenze del problema. È importante imparare a riconoscere quando conviene usare schemi diversi da quelli più comuni.
> 💡 **Nota**: in casi estremi, è anche possibile **omettere** una o più parti del `for`, ma solo se strettamente necessario. Ad esempio:
```cpp
for ( ;; ) {
    cout << "ciao" << endl;
}
```
Stampa ciao all'infinito.
##### Esercizi di base sul ciclo `for`
> [!exercise] Esercizi
> 
> 1. **Stampa di numeri interi**  
>     Scrivi un programma che stampa i numeri da 1 a 10, uno per riga. 
>     
> 2. **Numeri pari da 2 a 20**  
>     Scrivi un programma che stampa tutti i numeri pari compresi tra 2 e 20. 
>     
> 3. **Somma dei primi `n` numeri**  
>     Chiedi all’utente un numero intero positivo `n` e calcola la somma dei numeri da 1 a `n`. 
>     
> 4. **Tabellina**  
>     Chiedi all’utente un numero intero e stampane la tabellina da 1 a 10.
>     
> 5. **Fattoriale**  
>     Chiedi all’utente un numero intero positivo `n` e calcola `n!` (fattoriale). 
> 6. **Conteggio decrescente**  
>     Scrivi un programma che stampa i numeri da 10 a 1 in ordine decrescente. 
>     
> 7. **Quadrati**  
>     Scrivi un programma che stampa il quadrato dei numeri da 1 a 10.  
>     
>     
> 8. **Multipli di 3**  
>     Stampa tutti i numeri tra 1 e 50 che sono multipli di 3.  
>     
> 9. **Conta numeri positivi**  
>     Chiedi all’utente di inserire 5 numeri interi e stampa quanti sono positivi. 
>     
> 10. **Scaletta di asterischi**  
>     Stampa 5 righe dove ogni riga contiene un numero crescente di asterischi (da 1 a 5).  
>     **Output previsto**:  
>     `*`  
>     `**`  
>     `***`  
>     `****`  
>     `*****`  
>     

#### Cicli Indeterminati
Un ciclo è detto **indeterminato** quando **non si conosce a priori quante volte sarà ripetuto**. In questi casi, il numero di iterazioni dipende da condizioni valutate **durante l’esecuzione** del programma, ad esempio in base a un input dell’utente o a un evento esterno.
I cicli indeterminati si implementano con le strutture `while` e `do-while`.
#### Il ciclo `while` (ciclo pre-condizionale)
Il ciclo `while` **valuta la condizione prima** di ogni iterazione. Se la condizione è falsa sin dall’inizio, **il ciclo non viene eseguito nemmeno una volta**.
#### Sintassi
```cpp
while (condizione) {
    // Blocco di codice da ripetere
}
```
##### Esempio: chiedere il numero 5 finché non viene inserito
```cpp
#include <iostream>
using namespace std;
int main() {
    int numero = 3;
    while (numero != 5) {
        cout << "Inserisci il numero 5: ";
        cin >> numero;
    }
    cout << "Finalmente!" << endl;
    return 0;
}
```

Versione C del ciclo `while`:

```c
#include <stdio.h>

int main(void) {
    int numero = 3;
    while (numero != 5) {
        printf("Inserisci il numero 5: ");
        if (scanf("%d", &numero) != 1) return 1;
    }
    printf("Finalmente!\n");
    return 0;
}
```
> [!warning] Nota
> In questo esempio ho inizializzato la variabile numero a 3 per essere sicuro di entrare nel ciclo (poiché alla prima iterazione `3 != 5` è vero). Se non inizializzo la variabile, alcuni linguaggi di programmazione la inizializzano automaticamente a 0, altri a 1, altri con numeri completamente casuali a seconda dell'indirizzo di memoria. Prova con diversi linguaggi di programmazione e prova a stampare una variabile non inizializzata per vedere cosa succede!
#### Il ciclo `do-while` (ciclo post-condizionale)
Il ciclo `do-while` esegue il blocco **almeno una volta**, poiché la condizione viene valutata **dopo** l’esecuzione del blocco.
#### Sintassi
```cpp
do {
    // Blocco di codice da ripetere
} while (condizione);
```
#### Esempio: inserire un numero fino a che non è uguale a 5
```cpp
#include <iostream>
using namespace std;
int main() {
    int numero;
    do {
        cout << "Inserisci il numero 5: ";
        cin >> numero;
    } while (numero != 5);
    cout << "Finalmente!" << endl;
    return 0;
}
```

Versione C del ciclo `do ... while`:

```c
#include <stdio.h>

int main(void) {
    int numero;
    do {
        printf("Inserisci il numero 5: ");
        if (scanf("%d", &numero) != 1) return 1;
    } while (numero != 5);
    printf("Finalmente!\n");
    return 0;
}
```
> [!warning] Nota
> Come puoi notare, l'esempio è simile a prima, ma questa volta non necessito di inizializzare la variabile. Perché?
##### Quando usare `while` e `do-while`
* Usa `while` quando **la condizione deve essere verificata prima** dell’esecuzione (può anche non entrare mai nel ciclo).
* Usa `do-while` quando **il codice deve essere eseguito almeno una volta** prima del controllo (es. richiesta di input, accesso a un menu).
---
#### Per riassumere

| Struttura  | Controllo della condizione | Esecuzione minima | Adatto a...                          |
| ---------- | -------------------------- | ----------------- | ------------------------------------ |
| `for`      | Prima                      | 0                 | Iterazioni note (cicli determinati)  |
| `while`    | Prima                      | 0                 | Condizioni dinamiche (indeterminati) |
| `do-while` | Dopo                       | 1                 | Input utente, almeno un’esecuzione   |
##### Quale uso?
Il ciclo `for` serve quando conosco a priori quante interazioni farò (che può dipendere da un numero assoluto, da una variabile, dal risultato di una espressione o di una formula ecc...).
I cicli `do-while` e `while` servono quando non conosco a priori il numero di interazioni (e dunque la condizione dipende dalle azioni dell'utente), in particolare:
- `while` nei casi in cui non devo fare neanche una interazione se la condizione non è rispettata, poiché viene controllata prima del blocco di codice.
- `do-while` nei casi in cui devo fare almeno una interazione prima del controllo della condizione, poiché questa viene controllata dopo il blocco di codice. Questo è particolarmente utile quando la condizione viene aggiornata direttamente all'interno del blocco di codice prima di essere inizializzata, ad esempio se devo controllare una password inserita dall'utente.

#### `break` e `continue` nei cicli

All'interno di un ciclo, posso utilizzare i comandi `break` e `continue` per controllare il flusso di esecuzione in modo più preciso.

**Il comando `break`**  
`break` interrompe immediatamente l'esecuzione del ciclo, uscendo completamente da esso indipendentemente dalla condizione. È utile quando voglio fermare un ciclo manualmente per qualche motivo.

**Esempio**: Chiedere all'utente se vuole continuare o uscire dal ciclo.

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 100; i++) { // Ciclo che può teoricamente contare fino a 100
        cout << i << endl;
        
        char scelta;
        cout << "Vuoi continuare? (s/n): ";
        cin >> scelta;
        
        if (scelta == 'n' || scelta == 'N') {
            cout << "Hai scelto di uscire dal ciclo." << endl;
            break; // Esce dal ciclo
        }
    }
    return 0;
}

```

> [!exercise] Esercizio
> Riesci a usare la variabile `scelta` dopo che sei uscito dal ciclo? Come mai? Approfondisci sugli "scopes" delle variabili per avere una risposta.

**Il comando `continue`**  
`continue` interrompe l'iterazione corrente e salta direttamente alla successiva. È utile quando voglio ignorare il resto del blocco di codice per una determinata condizione, ma continuare il ciclo.

**Esempio**: Stampare solo numeri dispari.

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue; // Salta il resto del codice in questa iterazione
        }
        cout << i << " ";
    }
    return 0;
}
```

---

#### Esercizi sui cicli

> [!exercise] Esercizi
> 1. **Somma dei numeri positivi**  
   Scrivi un programma che chiede all’utente di inserire numeri interi uno alla volta. Il programma termina quando l'utente inserisce un numero negativo e stampa la somma di tutti i numeri positivi inseriti. 
>2. **Tabelline** 
>    Scrivi un programma che chiede all’utente di inserire un numero intero e stampa la sua tabellina (moltiplicazione da 1 a 10).
>3. **Indovina il numero**  
   Scrivi un programma che genera un numero casuale tra 1 e 100. L'utente deve indovinarlo inserendo numeri finché non trova quello corretto. Dopo ogni tentativo, il programma deve dire se il numero inserito è più alto o più basso di quello da indovinare. 
   Per generare un numero casuale, prova a cercare sulla documentazione di C++ come si fa.
>4. **Numero primo**  
   Scrivi un programma che chiede all'utente di inserire un numero intero e verifica se è un numero primo. 
>5. **Fibonacci**  
   Scrivi un programma che calcola e stampa i primi `n` numeri della sequenza di Fibonacci. `n` è dato in input dall’utente. 

---

## Capitolo 4: Strutture Dati di Base  

### Introduzione  
Le **strutture dati** sono entità usate per organizzare **insiemi di dati** nella memoria in modo strutturato. Nel paradigma imperativo in **C e C++**, le strutture dati di base includono:  
1. **Array**  
2. **Stringhe**  
3. **Struct**  

In questo capitolo analizzeremo ciascuna di queste strutture, mostrando esempi pratici di implementazione.
### Array in C e C++

Gli **array** sono una struttura dati fondamentale che permette di memorizzare una collezione di valori dello stesso tipo, organizzati in modo contiguo in memoria. Gli array sono utili quando è necessario lavorare con più dati correlati.

---

#### Dichiarazione e inizializzazione

Un array in C e C++ si dichiara specificando il tipo di dati, il nome e la dimensione. La dimensione deve essere un valore intero positivo.

**Sintassi**:

> [!note] Sintassi comune C/C++
> Le dichiarazioni di array, l'indicizzazione con `[]`, `sizeof`, le matrici e i cicli indicizzati di questa sezione sono validi in entrambi i linguaggi. Le versioni complete differiscono soltanto nelle funzioni di input/output.

```cpp
tipo nome_array[dimensione];
```

**Esempi**:

```cpp
int numeri[5]; // Array di 5 interi, non inizializzato
int voti[3] = {8, 9, 10}; // Array di 3 interi inizializzati
float decimali[4] = {1.2, 3.4, 5.6, 7.8}; // Array di 4 float inizializzati
char lettere[3] = {'A', 'B', 'C'}; // Array di 3 caratteri (somiglia a qualcosa?)
```

Se non si specificano tutti i valori, gli elementi rimanenti sono impostati a **0**:

```cpp
int numeri[5] = {1, 2}; // Array: {1, 2, 0, 0, 0}
```

---

#### Come un array è rappresentato in memoria

Un array non è una scatola che contiene tante variabili separate sparse nella memoria: è un unico blocco contiguo. Se dichiaro:

```cpp
int numeri[5] = {10, 20, 30, 40, 50};
```

il programma riserva spazio per 5 interi consecutivi:

```text
indirizzo:  1000   1004   1008   1012   1016
valore:      10     20     30     40     50
indice:       0      1      2      3      4
```

Gli indirizzi dell'esempio sono inventati, ma l'idea è reale: se un `int` occupa 4 byte, l'elemento successivo si trova 4 byte dopo il precedente.

In molte espressioni il nome dell'array viene automaticamente interpretato come l'indirizzo del suo primo elemento. Quindi:

```cpp
numeri
```

si comporta come:

```cpp
&numeri[0]
```

cioè come un puntatore al primo elemento dell'array. Per questo motivo l'espressione:

```cpp
numeri[i]
```

può essere pensata come:

```cpp
*(numeri + i)
```

Il significato è: parti dall'indirizzo del primo elemento, spostati di `i` elementi, poi leggi il valore che trovi lì. Lo spostamento tiene conto automaticamente della dimensione del tipo: con un array di `int`, `numeri + 1` avanza di un intero, non di un singolo byte.

> [!warning] Attenzione
> Dire che "l'array è un puntatore" è una semplificazione utile ma non perfetta. L'array vero e proprio è il blocco di memoria contiguo; il suo nome, in molti contesti, viene convertito in un puntatore al primo elemento. Per esempio `sizeof(numeri)` restituisce la dimensione dell'intero array, mentre `sizeof(p)` su un puntatore restituisce solo la dimensione del puntatore.

Questa rappresentazione spiega due conseguenze importanti:

- l'accesso per indice è molto veloce, perché il computer calcola direttamente l'indirizzo dell'elemento richiesto;
- se accedo fuori dai limiti, per esempio `numeri[10]`, il programma prova comunque a leggere una zona di memoria vicina ma non appartenente all'array.

---

#### Accesso agli elementi

Gli elementi di un array sono indicizzati a partire da **0**. È possibile accedervi utilizzando il nome dell'array e un **indice** tra parentesi quadre.

**Esempio**:

```cpp
#include <iostream>
using namespace std;

int main() {
    int numeri[5] = {10, 20, 30, 40, 50};

    cout << "Il primo elemento è: " << numeri[0] << endl; // 10
    cout << "Il terzo elemento è: " << numeri[2] << endl; // 30

    // Modifica di un elemento
    numeri[1] = 25;
    cout << "Il secondo elemento modificato è: " << numeri[1] << endl; // 25

    return 0;
}
```

Versione C:

```c
#include <stdio.h>

int main(void) {
    int numeri[5] = {10, 20, 30, 40, 50};

    printf("Il primo elemento è: %d\n", numeri[0]);
    printf("Il terzo elemento è: %d\n", numeri[2]);
    numeri[1] = 25;
    printf("Il secondo elemento modificato è: %d\n", numeri[1]);
    return 0;
}
```


> [!warning] Nota
> Accedere a un indice fuori dai limiti dell'array può causare comportamenti imprevedibili, perché il compilatore non esegue controlli automatici sui limiti.


---

#### Array e cicli

Gli array sono spesso utilizzati con i cicli per elaborare tutti gli elementi in modo efficiente. Spesso si usa un ciclo for per scorrere tutti gli elementi di un array, mettendo come condizione di uscita la lunghezza dell'array. Questa operazione si chiama **scorrimento**.

**Esempio: Somma di tutti gli elementi di un array**:

```cpp
#include <iostream>
using namespace std;

int main() {
    enum { d = 5 };
    int numeri[d] = {10, 20, 30, 40, 50};
    int somma = 0;

    for (int i = 0; i < d; i++) {
        somma += numeri[i];
    }

    cout << "La somma degli elementi è: " << somma << endl; // 150

    return 0;
}
```

Versione C (l'algoritmo è identico):

```c
#include <stdio.h>

int main(void) {
    enum { d = 5 };
    int numeri[d] = {10, 20, 30, 40, 50};
    int somma = 0;

    for (int i = 0; i < d; i++) {
        somma += numeri[i];
    }
    printf("La somma degli elementi è: %d\n", somma);
    return 0;
}
```


> [!exercise] Esercizio
> Dato un array di numeri interi, ordinalo in ordine crescente. Hai appena creato un algoritmo di ordinamento, ne esistono vari standard, ognuno con le sue caratteristiche. L'algoritmo che hai inventato esiste già? Come si chiama? Prova a descrivere quali algoritmi di ordinamento esistono e come funzionano, poi prova ad implementarli tutti in un unico programma.

#### Range based for (for-each, solo C++)
Il ciclo for **range-based** mi permette di scrivere velocemente un ciclo for per iterare la collezione senza preoccuparmi dei contatori.
In questo esempio viene illustrata la differenza tra il ciclo **for tradizionale** e il **range-based for** (chiamato anche **for-each**) in C++. Utilizzeremo un array normale per mostrare come iterare sugli elementi. Il ciclo for tradizionale usa un contatore (di tipo int) per accedere agli elementi, mentre il range-based for semplifica l’iterazione eliminando la gestione manuale dell’indice.


```cpp
#include <iostream>
using namespace std;

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    // Ciclo for tradizionale
    cout << "Traditional for loop: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // Ciclo range-based for (foreach)
    cout << "Range-based for loop: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
```

Nel primo caso viene utilizzato un indice (di tipo int) per accedere agli elementi dell'array, permettendo un controllo dettagliato dell'iterazione. Nel secondo caso, il ciclo range-based for itera direttamente sugli elementi, semplificando il codice e riducendo il rischio di errori nella gestione dell'indice.
Nelle versioni più recenti di C++, posso utilizzare il tipo di dato `auto` per inferire automaticamente il tipo di dato dell'elemento che itero dal tipo di dato della collezione.

> [!note] In C
> Il ciclo range-based e `auto` non esistono. Per scorrere un array si usa il primo ciclo `for`, con indice e dimensione espliciti; è anche il metodo più chiaro da usare negli esempi di questa dispensa.

---

#### Array multidimensionali

Gli array possono avere più dimensioni, come una tabella o una matrice.

**Sintassi**:

```cpp
tipo nome_array[righe][colonne];
```

**Esempio: Matrice 2x3**:
Ecco come scorrere una matrice e stamparne il contenuto in modo ordinato. La struttura con i due for annidati è il classico metodo di scorrimento di una matrice:

```cpp
#include <iostream>
using namespace std;

int main() {
    int matrice[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrice[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
```

#### Algoritmi di ordinamento e complessità asintotica (Big O)

Un **algoritmo di ordinamento** prende una sequenza di valori e li dispone secondo un criterio, ad esempio dal più piccolo al più grande.

Esempio:

```text
Input:  64 34 25 12 22 11 90
Output: 11 12 22 25 34 64 90
```

Per confrontare algoritmi diversi non basta chiedersi "funziona?". Bisogna anche chiedersi:

- quanto tempo impiega quando l'array diventa grande;
- quanta memoria aggiuntiva usa;
- se modifica direttamente l'array originale;
- se è semplice da capire e implementare.

##### Big O

La notazione **Big O** descrive come cresce il numero di operazioni quando cresce la dimensione dell'input, indicata di solito con `n`.

Se un array contiene `n` elementi:

- **O(1)** significa tempo costante: il lavoro non dipende da `n`.
- **O(n)** significa tempo lineare: se raddoppiano gli elementi, circa raddoppia anche il lavoro.
- **O(n²)** significa tempo quadratico: tipico di due cicli annidati sull'array.
- **O(log n)** significa tempo logaritmico: a ogni passo il problema viene ridotto molto, come nella ricerca binaria.
- **O(n log n)** è tipico degli algoritmi di ordinamento efficienti.

> [!note] Idea importante
> Big O non misura i secondi esatti di esecuzione. Serve a capire come si comporta un algoritmo quando l'input cresce molto.

##### Confronto rapido

| Algoritmo | Idea principale | Caso medio | Memoria extra | Difficoltà |
|---|---|---:|---:|---|
| Bubble Sort | scambia elementi adiacenti fuori ordine | O(n²) | O(1) | bassa |
| Selection Sort | cerca ogni volta il minimo rimanente | O(n²) | O(1) | bassa |
| Insertion Sort | inserisce ogni elemento nella parte già ordinata | O(n²) | O(1) | bassa |
| Merge Sort | divide, ordina e fonde | O(n log n) | O(n) | media |
| Quick Sort | sceglie un pivot e partiziona | O(n log n) | O(log n) circa | media |
| Heap Sort | usa una struttura chiamata heap | O(n log n) | O(1) | alta |

I primi tre algoritmi sono i più adatti per imparare, perché usano solo array, cicli e scambi. Gli ultimi tre sono più efficienti su grandi quantità di dati, ma introducono idee più avanzate.

##### Bubble Sort

Bubble Sort confronta coppie di elementi vicini. Se sono nell'ordine sbagliato, li scambia.
Ripetendo questi confronti, i valori più grandi finiscono verso la fine dell'array.

Il nome "bubble" deriva proprio da questa idea: a ogni passaggio un valore grande "risale" verso il fondo dell'array, come una bolla. Dopo il primo giro l'ultimo elemento è sicuramente quello corretto, dopo il secondo giro sono corretti gli ultimi due, e così via.

```cpp
#include <iostream>
using namespace std;

int main() {
    int numeri[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(numeri) / sizeof(numeri[0]);

    bool ordinato = false;

    // Continua a fare passaggi sull'array finche' in un giro non avviene
    // nessuno scambio. Se non ci sono scambi, l'array e' gia' ordinato.
    while (!ordinato) {
        ordinato = true;

        // Confronta ogni elemento con quello subito dopo.
        for (int i = 0; i < n - 1; i++) {
            if (numeri[i] > numeri[i + 1]) {
                // I due elementi sono nell'ordine sbagliato: li scambiamo.
                int appoggio = numeri[i];
                numeri[i] = numeri[i + 1];
                numeri[i + 1] = appoggio;

                // Segna che questo giro ha modificato l'array.
                ordinato = false;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso migliore: **O(n)**, se l'array è già ordinato e si usa la variabile `ordinato`;
- caso medio e peggiore: **O(n²)**.

Bubble Sort è utile per imparare il concetto di confronto e scambio, ma raramente viene scelto in programmi reali: quando gli elementi sono molti, ripetere confronti tra vicini diventa rapidamente costoso.

##### Selection Sort

Selection Sort divide mentalmente l'array in due parti:

- a sinistra, la parte già ordinata;
- a destra, la parte ancora da ordinare.

A ogni passaggio cerca il minimo nella parte non ordinata e lo mette nella prima posizione libera.

La differenza rispetto a Bubble Sort è che Selection Sort non sposta gradualmente un valore con tanti piccoli scambi. Prima cerca il minimo, poi lo scambia una sola volta con l'elemento nella posizione da riempire.

```cpp
#include <iostream>
using namespace std;

int main() {
    int numeri[] = {29, 10, 14, 37, 13};
    int n = sizeof(numeri) / sizeof(numeri[0]);

    // "posizione" indica la prima cella non ancora ordinata.
    for (int posizione = 0; posizione < n - 1; posizione++) {
        int indiceMinimo = posizione;

        // Cerca il valore piu' piccolo nella parte non ancora ordinata.
        for (int i = posizione + 1; i < n; i++) {
            if (numeri[i] < numeri[indiceMinimo]) {
                indiceMinimo = i;
            }
        }

        // Porta il minimo nella posizione corretta.
        // Se il minimo e' gia' li', lo scambio non cambia nulla.
        if (indiceMinimo != posizione) {
            int appoggio = numeri[posizione];
            numeri[posizione] = numeri[indiceMinimo];
            numeri[indiceMinimo] = appoggio;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso migliore, medio e peggiore: **O(n²)**.

Selection Sort fa sempre molti confronti, anche se l'array è quasi ordinato. In compenso fa pochi scambi: al massimo uno per ogni posizione.

##### Insertion Sort

Insertion Sort funziona in modo simile a quando ordiniamo delle carte in mano: prendiamo una carta alla volta e la inseriamo nel punto corretto tra quelle già ordinate.

L'array viene diviso così:

```text
[parte ordinata] [elemento da inserire] [parte non ancora controllata]
```

All'inizio consideriamo ordinata la parte formata dal solo primo elemento. Poi prendiamo il secondo elemento, lo inseriamo nel punto giusto tra quelli precedenti, e continuiamo così fino alla fine.

```cpp
#include <iostream>
using namespace std;

int main() {
    int numeri[] = {12, 11, 13, 5, 6};
    int n = sizeof(numeri) / sizeof(numeri[0]);

    for (int i = 1; i < n; i++) {
        // Questo e' l'elemento che vogliamo inserire nella parte ordinata.
        int valoreDaInserire = numeri[i];
        int posizione = i - 1;

        // Sposta a destra gli elementi piu' grandi del valore da inserire.
        // In questo modo si libera una cella nella posizione corretta.
        while (posizione >= 0 && numeri[posizione] > valoreDaInserire) {
            numeri[posizione + 1] = numeri[posizione];
            posizione--;
        }

        // Inserisce il valore nella cella rimasta libera.
        numeri[posizione + 1] = valoreDaInserire;
    }

    for (int i = 0; i < n; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso migliore: **O(n)**, se l'array è già ordinato;
- caso medio e peggiore: **O(n²)**.

Insertion Sort è spesso il migliore tra gli algoritmi semplici quando l'array è piccolo o quasi ordinato.

##### Merge Sort

Merge Sort usa la tecnica **divide et impera**:

1. divide l'array in due metà;
2. ordina ciascuna metà;
3. fonde le due metà ordinate.

La parte più importante è la **fusione**: se ho due sequenze già ordinate, posso unirle in una sequenza ordinata confrontando di volta in volta il primo elemento disponibile di ciascuna sequenza.

```text
Sinistra:  3  27  38  43
Destra:    9  10  82
Risultato: 3   9  10  27  38  43  82
```

Merge Sort è naturalmente ricorsivo: per ordinare un array grande, ordina due array più piccoli. La ricorsione si ferma quando la porzione da ordinare contiene zero o un elemento, perché una sequenza con un solo elemento è già ordinata.

```cpp
#include <iostream>
using namespace std;

#define DIMENSIONE 7

void fondi(int numeri[], int temporaneo[], int sinistra, int centro, int destra) {
    int i = sinistra;      // indice nella meta' sinistra
    int j = centro + 1;    // indice nella meta' destra
    int k = sinistra;      // indice nell'array temporaneo

    // Prende ogni volta il piu' piccolo tra i due primi elementi disponibili.
    while (i <= centro && j <= destra) {
        if (numeri[i] <= numeri[j]) {
            temporaneo[k] = numeri[i];
            i++;
        } else {
            temporaneo[k] = numeri[j];
            j++;
        }
        k++;
    }

    // Copia eventuali elementi rimasti nella parte sinistra.
    while (i <= centro) {
        temporaneo[k] = numeri[i];
        i++;
        k++;
    }

    // Copia eventuali elementi rimasti nella parte destra.
    while (j <= destra) {
        temporaneo[k] = numeri[j];
        j++;
        k++;
    }

    // Riporta nell'array originale la porzione appena fusa.
    for (int posizione = sinistra; posizione <= destra; posizione++) {
        numeri[posizione] = temporaneo[posizione];
    }
}

void mergeSort(int numeri[], int temporaneo[], int sinistra, int destra) {
    if (sinistra >= destra) {
        return; // caso base: zero o un elemento sono gia' ordinati
    }

    int centro = sinistra + (destra - sinistra) / 2;

    mergeSort(numeri, temporaneo, sinistra, centro);
    mergeSort(numeri, temporaneo, centro + 1, destra);
    fondi(numeri, temporaneo, sinistra, centro, destra);
}

int main() {
    int numeri[DIMENSIONE] = {38, 27, 43, 3, 9, 82, 10};
    int temporaneo[DIMENSIONE];

    mergeSort(numeri, temporaneo, 0, DIMENSIONE - 1);

    for (int i = 0; i < DIMENSIONE; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso migliore, medio e peggiore: **O(n log n)**;
- memoria extra: **O(n)**, perché serve un array temporaneo per fondere le parti.

Merge Sort è molto regolare: ha buone prestazioni anche nel caso peggiore, ma usa più memoria rispetto agli algoritmi che lavorano direttamente sull'array originale.

##### Quick Sort

Quick Sort sceglie un elemento chiamato **pivot** e riordina l'array in modo che:

- gli elementi minori del pivot vadano a sinistra;
- gli elementi maggiori del pivot vadano a destra;
- il pivot finisca nella sua posizione definitiva.

Dopo questa operazione, l'algoritmo ripete lo stesso ragionamento sulla parte sinistra e sulla parte destra.

```text
Array:  10 7 8 9 1 5
Pivot:  5

Dopo la partizione:
1 5 8 9 10 7
  ^
  il pivot e' nella posizione corretta
```

L'operazione centrale si chiama **partizione**. In questa versione scegliamo come pivot l'ultimo elemento della porzione considerata. Scorriamo la porzione e teniamo un indice che indica dove mettere il prossimo elemento minore o uguale al pivot.

```cpp
#include <iostream>
using namespace std;

int partiziona(int numeri[], int inizio, int fine) {
    int pivot = numeri[fine];
    int posizionePiccoli = inizio - 1;

    // Sposta nella parte sinistra tutti gli elementi minori o uguali al pivot.
    for (int i = inizio; i < fine; i++) {
        if (numeri[i] <= pivot) {
            posizionePiccoli++;

            int appoggio = numeri[posizionePiccoli];
            numeri[posizionePiccoli] = numeri[i];
            numeri[i] = appoggio;
        }
    }

    // Mette il pivot subito dopo gli elementi piccoli.
    int posizionePivot = posizionePiccoli + 1;
    int appoggio = numeri[posizionePivot];
    numeri[posizionePivot] = numeri[fine];
    numeri[fine] = appoggio;

    return posizionePivot;
}

void quickSort(int numeri[], int inizio, int fine) {
    if (inizio >= fine) {
        return; // caso base: la porzione contiene zero o un elemento
    }

    int posizionePivot = partiziona(numeri, inizio, fine);

    quickSort(numeri, inizio, posizionePivot - 1);
    quickSort(numeri, posizionePivot + 1, fine);
}

int main() {
    int numeri[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(numeri) / sizeof(numeri[0]);

    quickSort(numeri, 0, n - 1);

    for (int i = 0; i < n; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso medio: **O(n log n)**;
- caso peggiore: **O(n²)**, ad esempio se la scelta del pivot divide male l'array;
- memoria extra: circa **O(log n)** nel caso medio della versione ricorsiva.

Quick Sort è spesso molto veloce nella pratica, ma richiede attenzione nella scelta del pivot.

##### Heap Sort

Heap Sort usa una struttura chiamata **heap**, cioè un array organizzato come se fosse un albero.
Nel **max heap**, ogni padre è maggiore o uguale ai suoi figli. Per questo motivo, il massimo si trova sempre all'inizio dell'array.

L'idea è:

1. trasformare l'array in un max heap;
2. scambiare il massimo, cioè l'elemento in posizione `0`, con l'ultimo elemento dell'heap;
3. ridurre la dimensione dell'heap;
4. ripristinare la proprietà del max heap;
5. ripetere finché l'array è ordinato.

Per rappresentare un albero dentro un array si usano queste relazioni:

- il figlio sinistro dell'indice `i` si trova in `2 * i + 1`;
- il figlio destro dell'indice `i` si trova in `2 * i + 2`.

La funzione più importante è `sistemaHeap`: prende un elemento e lo fa "scendere" finché la proprietà del max heap torna vera.

```cpp
#include <iostream>
using namespace std;

void sistemaHeap(int numeri[], int dimensioneHeap, int radice) {
    int maggiore = radice;
    int figlioSinistro = 2 * radice + 1;
    int figlioDestro = 2 * radice + 2;

    // Controlla se il figlio sinistro e' piu' grande della radice.
    if (figlioSinistro < dimensioneHeap && numeri[figlioSinistro] > numeri[maggiore]) {
        maggiore = figlioSinistro;
    }

    // Controlla se il figlio destro e' piu' grande del valore maggiore trovato.
    if (figlioDestro < dimensioneHeap && numeri[figlioDestro] > numeri[maggiore]) {
        maggiore = figlioDestro;
    }

    // Se la radice non e' il valore maggiore, la scambiamo con il figlio maggiore.
    if (maggiore != radice) {
        int appoggio = numeri[radice];
        numeri[radice] = numeri[maggiore];
        numeri[maggiore] = appoggio;

        // Dopo lo scambio, il sottoalbero modificato potrebbe non essere piu' un heap.
        sistemaHeap(numeri, dimensioneHeap, maggiore);
    }
}

void heapSort(int numeri[], int n) {
    // Costruisce il max heap partendo dagli ultimi nodi che hanno figli.
    for (int i = n / 2 - 1; i >= 0; i--) {
        sistemaHeap(numeri, n, i);
    }

    // Estrae il massimo una volta per ogni posizione finale dell'array.
    for (int fine = n - 1; fine > 0; fine--) {
        int appoggio = numeri[0];
        numeri[0] = numeri[fine];
        numeri[fine] = appoggio;

        // Ora l'ultimo elemento e' ordinato: lo escludiamo dall'heap.
        sistemaHeap(numeri, fine, 0);
    }
}

int main() {
    int numeri[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(numeri) / sizeof(numeri[0]);

    heapSort(numeri, n);

    for (int i = 0; i < n; i++) {
        cout << numeri[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Complessità:

- caso migliore, medio e peggiore: **O(n log n)**;
- memoria extra: **O(1)**.

Heap Sort è efficiente e non richiede memoria aggiuntiva significativa, ma è meno immediato da capire rispetto a Bubble, Selection e Insertion Sort.

##### Considerazioni finali

Per imparare gli ordinamenti conviene partire da questa progressione:

1. **Selection Sort**, perché l'idea è molto diretta: cerca il minimo e mettilo al posto giusto.
2. **Bubble Sort**, perché mostra bene il concetto di scambio tra elementi vicini.
3. **Insertion Sort**, perché introduce l'idea di mantenere una parte già ordinata.
4. **Merge Sort** e **Quick Sort**, quando si è più sicuri con funzioni, ricorsione e divisione del problema.
5. **Heap Sort**, quando si studiano strutture dati più avanzate.

Nella pratica quotidiana, in C++ non si riscrive quasi mai un algoritmo di ordinamento da zero: si usa `sort()` della libreria standard. Studiare questi algoritmi serve però a capire come ragiona un programma e perché due soluzioni corrette possono avere prestazioni molto diverse.


---
### Esercizi sugli Array

> [!exercise] Esercizi
> 1. **Inserimento e stampa**  
>     Scrivi un programma che chiede all’utente di inserire 5 numeri interi in un array e li stampa in ordine inverso.
>     
> 2. **Somma e media**  
>     Scrivi un programma che calcola la somma e la media degli elementi di un array.
>     
> 3. **Trova il massimo e il minimo**  
>     Scrivi un programma che trova l'elemento massimo e minimo in un array di numeri interi.
>     
> 4. **Somma delle righe di una matrice**  
>     Scrivi un programma che legge una matrice 3x3 e calcola la somma di ciascuna riga.
>     
> 5. **Prodotto scalare**  
>     Scrivi un programma che calcola il prodotto scalare di due vettori di dimensione n, dove n è fornito dall'utente.
### Stringhe

Una **stringa** è una sequenza di caratteri, cioè un testo. In C le stringhe non sono un tipo di dato autonomo: sono **array di `char`** terminati dal carattere speciale `\0`, chiamato anche **terminatore nullo**.

In C++ esiste anche la classe `string`, più comoda e sicura, ma per capire davvero come vengono memorizzati i testi conviene partire dal C.

---

#### Stringhe in C: array di caratteri

Una stringa C occupa una cella dell'array per ogni carattere più una cella finale per `\0`.

```text
"Ciao"

Indice:    0    1    2    3    4
Valore:   'C'  'i'  'a'  'o' '\0'
```

Per questo motivo, se voglio salvare la parola `"Ciao"`, che ha 4 lettere, mi serve un array lungo almeno 5.

Il ragionamento è lo stesso visto per gli array numerici: il nome della stringa è il nome di un array, e quando lo passo a una funzione come `printf`, `strlen` o `strcpy`, viene passato l'indirizzo del primo carattere. La funzione poi avanza in memoria carattere per carattere finché trova `\0`.

**Esempio**:

```c
#include <stdio.h>

int main(void) {
    char saluto[5] = {'C', 'i', 'a', 'o', '\0'};
    printf("%s\n", saluto);

    return 0;
}
```

Lo stesso array può essere inizializzato in modo più compatto con una stringa letterale:

```c
#include <stdio.h>

int main(void) {
    char saluto[] = "Ciao"; // Il compilatore aggiunge automaticamente '\0'
    printf("%s\n", saluto);

    return 0;
}
```

> [!warning] Nota
> Senza il carattere `\0`, le funzioni che lavorano sulle stringhe non sanno dove fermarsi. Il programma potrebbe continuare a leggere memoria oltre la fine dell'array, producendo risultati imprevedibili.

---

#### Dichiarare stringhe modificabili e non modificabili in C

Queste due dichiarazioni sembrano simili, ma non sono equivalenti:

```text
char nome1[] = "Mario";
char *nome2 = "Mario";
```

`nome1` è un array modificabile: i caratteri sono copiati dentro l'array.

```text
nome1[0] = 'D'; // ok: nome1 diventa "Dario"
```

`nome2` è invece una variabile puntatore: contiene l'indirizzo del primo carattere di una stringa letterale. Le stringhe letterali non vanno modificate.

```text
nome2[0] = 'D'; // errore logico: comportamento non definito
```

Quindi `nome1` è il blocco di memoria che contiene i caratteri, mentre `nome2` è una variabile che contiene un indirizzo. Quando vuoi modificare una stringa in C, usa un array di `char` abbastanza grande.

---

#### Leggere e stampare stringhe in C

Per stampare una stringa si usa `%s` con `printf`.

```c
#include <stdio.h>

int main(void) {
    char nome[] = "Luca";
    printf("Nome: %s\n", nome);

    return 0;
}
```

Per leggere una singola parola si può usare `scanf` con `%s`, ma bisogna indicare una larghezza massima per evitare di scrivere oltre la dimensione dell'array.

```c
#include <stdio.h>

int main(void) {
    char nome[20];

    printf("Inserisci il nome: ");
    scanf("%19s", nome); // legge al massimo 19 caratteri + '\0'

    printf("Ciao, %s\n", nome);
    return 0;
}
```

`scanf("%s", ...)` si ferma al primo spazio. Per leggere una frase intera è meglio usare `fgets`.

```c
#include <stdio.h>

int main(void) {
    char frase[100];

    printf("Inserisci una frase: ");
    if (fgets(frase, sizeof frase, stdin) != NULL) {
        printf("Hai scritto: %s", frase);
    }

    return 0;
}
```

`fgets` legge al massimo `sizeof frase - 1` caratteri e aggiunge sempre `\0` se la lettura riesce. Se c'è spazio, conserva anche il carattere di invio `\n`.

Per togliere il `\n` finale si può cercarlo e sostituirlo con `\0`:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char frase[100];

    printf("Inserisci una frase: ");
    if (fgets(frase, sizeof frase, stdin) != NULL) {
        size_t lunghezza = strlen(frase);

        if (lunghezza > 0 && frase[lunghezza - 1] == '\n') {
            frase[lunghezza - 1] = '\0';
        }

        printf("Frase senza a capo finale: %s\n", frase);
    }

    return 0;
}
```

---

#### Funzioni principali di `<string.h>`

Le operazioni più comuni sulle stringhe C sono nella libreria `<string.h>`.

| Funzione                  | Cosa fa                                   | Nota importante                              |
| ------------------------- | ----------------------------------------- | -------------------------------------------- |
| `strlen(s)`               | calcola la lunghezza della stringa        | non conta `\0`                               |
| `strcpy(dest, src)`       | copia `src` dentro `dest`                 | `dest` deve essere abbastanza grande         |
| `strncpy(dest, src, n)`   | copia al massimo `n` caratteri            | può non aggiungere `\0` se lo spazio finisce |
| `strcat(dest, src)`       | concatena `src` alla fine di `dest`       | `dest` deve avere spazio libero              |
| `strncat(dest, src, n)`   | concatena al massimo `n` caratteri        | più controllabile di `strcat`                |
| `strcmp(a, b)`            | confronta due stringhe                    | restituisce `0` se sono uguali               |
| `strncmp(a, b, n)`        | confronta al massimo `n` caratteri        | utile per prefissi                           |
| `strchr(s, c)`            | cerca un carattere                        | restituisce un puntatore o `NULL`            |
| `strrchr(s, c)`           | cerca l'ultima occorrenza di un carattere | restituisce un puntatore o `NULL`            |
| `strstr(s, cerca)`        | cerca una sottostringa                    | restituisce un puntatore o `NULL`            |
| `strtok(s, delimitatori)` | spezza una stringa in parti               | modifica la stringa originale                |

##### Lunghezza con `strlen`

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char saluto[] = "Ciao";

    printf("Lunghezza: %zu\n", strlen(saluto));
    return 0;
}
```

`strlen` conta i caratteri prima di `\0`. In `"Ciao"` restituisce `4`, non `5`.

##### Copia con `strcpy`

In C non puoi assegnare direttamente una stringa a un array dopo averlo dichiarato:

```text
char nome[20];
nome = "Mario"; // errore: gli array non si assegnano cosi'
```

Devi copiare i caratteri:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char nome[20];

    strcpy(nome, "Mario");

    printf("%s\n", nome);
    return 0;
}
```

`strcpy` non controlla la dimensione dell'array di destinazione. Se la destinazione è troppo piccola, il programma scrive fuori dall'array.

##### Copia controllata con `strncpy`

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char nome[10];

    strncpy(nome, "Alessandro", sizeof nome - 1);
    nome[sizeof nome - 1] = '\0';

    printf("%s\n", nome);
    return 0;
}
```

Qui copiamo al massimo `sizeof nome - 1` caratteri e lasciamo una cella per `\0`. L'assegnazione finale del terminatore è importante perché `strncpy` non garantisce sempre di aggiungerlo.

##### Concatenazione con `strcat`

Concatenare significa mettere una stringa dopo un'altra.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char messaggio[30] = "Ciao";

    strcat(messaggio, ", mondo!");

    printf("%s\n", messaggio);
    return 0;
}
```

`messaggio` deve avere spazio per contenere sia il testo iniziale, sia quello aggiunto, sia `\0`.

Con `strncat` possiamo indicare quanti caratteri aggiungere al massimo.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char messaggio[20] = "Ciao";

    strncat(messaggio, ", mondo enorme", sizeof messaggio - strlen(messaggio) - 1);

    printf("%s\n", messaggio);
    return 0;
}
```

##### Confronto con `strcmp`

In C le stringhe non si confrontano con `==`.

```text
char a[] = "ciao";
char b[] = "ciao";

if (a == b) { /* sbagliato */ }
```

`a == b` confronta gli indirizzi degli array, non il loro contenuto. Per confrontare il testo si usa `strcmp`.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char password[20];

    printf("Password: ");
    scanf("%19s", password);

    if (strcmp(password, "segreta") == 0) {
        printf("Accesso consentito\n");
    } else {
        printf("Accesso negato\n");
    }

    return 0;
}
```

`strcmp(a, b)` restituisce:

- `0` se le stringhe sono uguali;
- un valore minore di `0` se `a` viene prima di `b` in ordine lessicografico;
- un valore maggiore di `0` se `a` viene dopo `b`.

Con `strncmp` posso confrontare solo i primi caratteri. È utile, ad esempio, per controllare se una stringa inizia con un certo prefisso.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char comando[] = "stampa nome";

    if (strncmp(comando, "stampa", 6) == 0) {
        printf("Comando di stampa riconosciuto\n");
    }

    return 0;
}
```

##### Ricerca di un carattere con `strchr`

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char email[] = "mario@example.com";
    char *chiocciola = strchr(email, '@');

    if (chiocciola != NULL) {
        printf("Trovata @ in posizione %td\n", chiocciola - email);
    } else {
        printf("Indirizzo non valido\n");
    }

    return 0;
}
```

`strchr` restituisce un puntatore al primo carattere trovato. Sottraendo l'indirizzo iniziale della stringa otteniamo l'indice.

Con `strrchr` si cerca invece l'ultima occorrenza.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char percorso[] = "cartella/sottocartella/file.txt";
    char *ultimoSlash = strrchr(percorso, '/');

    if (ultimoSlash != NULL) {
        printf("Nome file: %s\n", ultimoSlash + 1);
    }

    return 0;
}
```

##### Ricerca di una sottostringa con `strstr`

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char testo[] = "Benvenuto al mondo della programmazione";
    char *posizione = strstr(testo, "mondo");

    if (posizione != NULL) {
        printf("Trovato in posizione %td\n", posizione - testo);
    } else {
        printf("Non trovato\n");
    }
	
	// posizione è a tutti gli effetti un array di char
	printf("%s", posizione); // mondo della programmazione
	
    return 0;
}
```

##### Dividere una stringa con `strtok`

`strtok` divide una stringa in parti, dette **token**, usando uno o più delimitatori. È utile per separare parole o campi, ma modifica la stringa originale inserendo dei `\0` al posto dei delimitatori.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char riga[] = "Mario;Rossi;18";
    char *token = strtok(riga, ";");

    while (token != NULL) {
        printf("%s\n", token);
        token = strtok(NULL, ";");
    }

    return 0;
}
```

La prima chiamata riceve la stringa da dividere. Le chiamate successive ricevono `NULL`, perché `strtok` continua dalla posizione in cui si era fermata.

---

#### Scorrere e modificare una stringa C manualmente

Poiché una stringa C è un array, possiamo attraversarla con un ciclo finché non incontriamo `\0`.

```c
#include <stdio.h>

int main(void) {
    char parola[] = "programmare";
    int contatore = 0;

    for (int i = 0; parola[i] != '\0'; i++) {
        if (parola[i] == 'm') {
            contatore++;
        }
    }

    printf("La lettera m appare %d volte\n", contatore);
    return 0;
}
```

Esempio di conversione manuale da minuscolo a maiuscolo:

```c
#include <stdio.h>
#include <ctype.h>

int main(void) {
    char parola[] = "Ciao";

    for (int i = 0; parola[i] != '\0'; i++) {
        parola[i] = toupper(parola[i]);
    }

    printf("%s\n", parola);
    return 0;
}
```

---

#### Sottostringhe, cancellazione e sostituzione in C

In C non esistono metodi come `substr`, `erase` o `replace`. Bisogna costruire manualmente il risultato oppure spostare i caratteri nell'array.

Esempio: copiare una sottostringa.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char testo[] = "Ciao, mondo!";
    char parte[10];
    char cerca[] = "mondo";

    char *posizione = strstr(testo, cerca);

    if (posizione != NULL) {
        size_t lunghezza = strlen(cerca);

        strncpy(parte, posizione, lunghezza);
        parte[lunghezza] = '\0';

        printf("%s\n", parte);
    }

    return 0;
}
```

Esempio: cancellare una parte spostando a sinistra i caratteri successivi.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char testo[30] = "Ciao, mondo!";
    char cerca[] = ", mondo";

    char *posizione = strstr(testo, cerca);

    if (posizione != NULL) {
        size_t quanti = strlen(cerca);

        memmove(posizione, posizione + quanti, strlen(posizione + quanti) + 1);

        printf("%s\n", testo);
    }

    return 0;
}
```

Esempio: sostituire una parola costruendo una nuova stringa.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char testo[] = "Ciao, universo!";
    char risultato[40];
    char cerca[] = "universo";
    char sostituisci[] = "mondo";

    char *posizione = strstr(testo, cerca);

    if (posizione != NULL) {
        size_t primaParte = posizione - testo;

        strncpy(risultato, testo, primaParte);
        risultato[primaParte] = '\0';

        strcat(risultato, sostituisci);
        strcat(risultato, posizione + strlen(cerca));

        printf("%s\n", risultato);
    }

    return 0;
}
```

Questo esempio funziona perché `risultato` è abbastanza grande. Quando si lavora in C, la dimensione degli array è sempre una responsabilità del programmatore.

---

#### Classe `string` in C++ come astrazione più comoda

La classe **`string`** della libreria standard rende il lavoro con le stringhe molto più semplice e intuitivo rispetto agli array di caratteri. Non è necessario preoccuparsi del terminatore `\0`, e offre numerosi metodi per manipolare le stringhe.

Per utilizzare la classe `string`, devi includere la libreria `<string>`.

**Esempio base**:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string saluto = "Ciao, mondo!";
    cout << "Stringa: " << saluto << endl;
    cout << "Lunghezza: " << saluto.length() << endl;

    return 0;
}
```

---

#### Leggere una stringa con spazi in C++

In C++, per leggere da input una **stringa che contiene spazi** (come ad esempio `"ciao come stai"`), non si può usare il classico `std::cin >> variabile`, perché questo metodo **si ferma al primo spazio**.

Se utilizzo:

```text
string frase;
cin >> frase;
```

Se l'utente inserisce:

```
ciao come stai
```

La variabile `frase` conterrà solo `"ciao"`.
Il comportamento di `cin >> variabile` è progettato per leggere **una parola alla volta**, cioè si ferma su spazi, tabulazioni o invii. È utile per leggere input divisi da spazi (come numeri o parole singole), ma non va bene per intere frasi.
##### Soluzione: usare `getline`

Per leggere **l'intera riga**, inclusi gli spazi, si usa:

```text
string frase;
getline(cin, frase);
```

Questo legge **tutti i caratteri** fino al carattere di _a capo_ (`\n`), cioè quando l'utente preme Invio.

---

#### Operazioni di base con la classe `string`

1. **Concatenazione di stringhe**  
    Puoi concatenare due stringhe utilizzando l'operatore `+` o `+=`. L'operatore `+` restituisce una nuova stringa concatenata, mentre `+=` modifica la stringa a sinistra aggiungendo quella a destra.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Ciao";
    string s2 = ", mondo!";
    string risultato = s1 + s2; // Restituisce una nuova stringa
    cout << risultato << endl; // Output: Ciao, mondo!

    return 0;
}
```

---
> [!warning] Nota
> Nei prossimi esempi vedrai metodi come `.length()`, `.substr()` e `.find()`. Si chiamano metodi perché appartengono alla classe `string`. Per ora puoi leggerli come funzioni applicate alla variabile scritta prima del punto.


1. **Accesso ai caratteri**  
    Puoi accedere ai singoli caratteri di una stringa usando l'operatore `[]` o il metodo `at()`. Entrambi richiedono come argomento l'indice del carattere (a partire da 0).

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string saluto = "Ciao";

    cout << saluto[1] << endl;  // Output: i (accesso diretto tramite indice)
    cout << saluto.at(2) << endl; // Output: a (metodo membro che controlla i limiti)

    // Nota: `at()` lancia un'eccezione se l'indice è fuori dai limiti.
    return 0;
}
```


> [!warning] Nota
> Con `string`, `at()` controlla i limiti e segnala un errore se l'indice non esiste. L'operatore `[]` è più simile agli array: è comodo, ma non va usato con indici fuori dalla stringa.

---

3. **Lunghezza della stringa**  
    Usa il metodo `length()` o `size()` (sono equivalenti) per ottenere la lunghezza della stringa. Non richiedono argomenti.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string saluto = "Hello, World!";
    cout << "Lunghezza: " << saluto.length() << endl; // Output: 13
    cout << "Lunghezza (size): " << saluto.size() << endl; // Output: 13

    return 0;
}
```

---

4. **Sottostringhe**  
    Il metodo `substr()` restituisce una parte della stringa. Richiede due argomenti:

- **Posizione iniziale** (indice da cui iniziare la sottostringa).
- **Lunghezza** (numero di caratteri da includere nella sottostringa).

Se ometti il secondo argomento, restituisce tutti i caratteri fino alla fine della stringa.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string saluto = "Ciao, mondo!";

    string parte1 = saluto.substr(0, 4); // Da indice 0, prendi 4 caratteri
    cout << parte1 << endl; // Output: Ciao

    string parte2 = saluto.substr(6); // Da indice 6 fino alla fine
    cout << parte2 << endl; // Output: mondo!

    return 0;
}
```

---

5. **Ricerca**  
    Usa il metodo `find()` per trovare la posizione di una sottostringa.  
    Richiede come argomento:

- **Sottostringa da cercare**.  
    Facoltativamente, puoi specificare un secondo argomento:
- **Posizione iniziale** da cui avviare la ricerca.

Restituisce l'indice della prima occorrenza o `string::npos` se non trova la sottostringa.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string testo = "Benvenuto al mondo della programmazione!";

    size_t posizione = testo.find("mondo"); // Cerca "mondo"
    if (posizione != string::npos) {
        cout << "Trovato 'mondo' in posizione: " << posizione << endl;
    } else {
        cout << "'mondo' non trovato." << endl;
    }

    return 0;
}
```

---

6. **Sostituzione**  
    Il metodo `replace()` sostituisce una parte della stringa.  
    Richiede tre argomenti:

- **Indice iniziale** (da dove iniziare la sostituzione).
- **Lunghezza** (numero di caratteri da sostituire).
- **Nuova stringa** (stringa con cui sostituire).

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string testo = "Ciao, universo!";

    testo.replace(6, 8, "mondo"); // Sostituisci 8 caratteri a partire dall'indice 6 con "mondo"
    cout << testo << endl; // Output: Ciao, mondo!

    return 0;
}
```

---

7. **Cancellare**  
    Il metodo `erase()` rimuove una parte della stringa.  
    Può essere usato in due modi:

- Con un solo argomento: rimuove tutti i caratteri dall'indice specificato in poi.
- Con due argomenti: specifica l'indice iniziale e il numero di caratteri da rimuovere.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string saluto = "Ciao, mondo!";

    saluto.erase(5); // Rimuovi tutto da indice 5 in poi
    cout << saluto << endl; // Output: Ciao,

    saluto = "Ciao, mondo!";
    saluto.erase(5, 6); // Rimuovi 6 caratteri a partire dall'indice 5
    cout << saluto << endl; // Output: Ciao!

    return 0;
}
```


> [!exercise] Esercizio
> Impara ad usare la documentazione. Cerca online la documentazione C++ sulle stringhe, guarda quali funzioni trovi, quali sono le loro signature (combinazione di nome e argomenti). Le hai trovate tutte? Hai trovato altre funzioni utili che vuoi aggiungere? (Continuo a chiamarle funzioni, ma ricorda che in realtà questi sono metodi).

> [!note] Collegamento tra C e C++
> La classe `string` nasconde molti dettagli visti nella parte C: gestisce automaticamente la memoria necessaria, conosce la propria lunghezza e offre metodi pronti per copia, concatenazione, ricerca, sottostringhe, sostituzione e cancellazione. Le stringhe C restano però importanti perché compaiono spesso nelle librerie di sistema, negli array di caratteri e nell'interoperabilità tra C e C++.


---

#### Esercizi sulle Stringhe

> [!exercise] Esercizi
> 1. **Lunghezza della stringa**  
Scrivi un programma che chiede all’utente di inserire una stringa e stampa la sua lunghezza.
>2. **Invertire una stringa**  
Scrivi un programma che legge una stringa e la stampa al contrario.
>3. **Contare i caratteri**  
   Scrivi un programma che conta quante volte un determinato carattere appare in una stringa fornita dall’utente.
  >  4. **Sostituzione di parole**  
Scrivi un programma che sostituisce tutte le occorrenze di una parola con un'altra in una stringa fornita dall'utente.
  

> [!warning] Nota
> Giocare con le stringhe con input e output da console è utile per imparare come funzionano, ma le cose si fanno sicuramente più interessanti una volta che impariamo ad utilizzare l'input e output da file nel capitolo dedicato.


---

### Struct

Le **struct** permettono di raggruppare dati di tipi diversi sotto un unico nome. Sono particolarmente utili per rappresentare oggetti complessi, permettendoti di creare a tutti gli effetti un nuovo tipo di dato tuo che rappresenta quell'oggetto complesso. È ciò di più vicino che esiste alle classi, che imparerai ad utilizzare quando programmerai a oggetti.

#### Dichiarazione e Uso di una Struct  
**Sintassi**:  
```cpp
struct nome_struttura {
    tipo_dato campo1;
    tipo_dato campo2;
};
```

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

struct Persona {
    string nome;
    int eta;
    float altezza;
};

int main() {
    Persona p1; // Dichiarazione di una variabile di tipo Persona

    // Assegnazione dei valori
    p1.nome = "Mario Rossi";
    p1.eta = 20;
    p1.altezza = 28.5;

    // Stampa dei valori
    cout << "Nome: " << p1.nome << endl;
    cout << "Età: " << p1.eta << endl;
    cout << "Altezza: " << p1.altezza << endl;

    return 0;
}
```

**Output**:  
```
Nome: Mario Rossi  
Età: 20  
Altezza: 28.5
```

> [!note] In C
> La sintassi della definizione è la stessa, ma il nome del tipo è `struct Persona`: si dichiara quindi `struct Persona p1;`. Per poter scrivere soltanto `Persona p1;` occorre prima creare un alias con `typedef struct Persona Persona;`. I campi testuali vanno dichiarati come array, ad esempio `char nome[50];`, non come `string`.

Versione C completa:

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    char nome[50];
    int eta;
    float altezza;
} Persona;

int main(void) {
    Persona p1;
    strcpy(p1.nome, "Mario Rossi");
    p1.eta = 20;
    p1.altezza = 1.85f;

    printf("Nome: %s\nEtà: %d\nAltezza: %.2f\n",
           p1.nome, p1.eta, p1.altezza);
    return 0;
}
```



> [!warning] Nota
> Essendo a tutti gli effetti un nuovo tipo di dato, puoi utilizzarli come tali. Quindi puoi ad esempio creare un array di studenti per creare una classe di scuola. Non sei limitato solo a questo, dentro gli array ci puoi mettere altri array, per cui puoi mettere le tue classi scolastiche all'interno di un altro array per creare una scuola. Tutti gli strumenti che hai visto finora possono essere combinati insieme con infinite potenzialità. Cosa vuoi creare di nuovo?


> [!exercise] Libera la fantasia
> Crea un oggetto molto complesso ed elaboralo utilizzando la fantasia e gli strumenti che hai visto finora.

### Esercizi

> [!exercise] Esercizi
>  1. **Gestione di una rubrica**
> Crea un programma che gestisce una rubrica telefonica utilizzando un array di `struct`. Ogni contatto deve contenere:
> 
> - Nome (stringa)
> - Numero di telefono (stringa)
> - Email (stringa)
> 
> Il programma deve permettere di:
> 
> 1. Aggiungere un nuovo contatto.
> 2. Cercare un contatto per nome e visualizzarne i dettagli.
> 3. Stampare tutti i contatti.
> 
> **Esempio di output**:
> 
> ```
> 1. Aggiungi contatto
> 2. Cerca contatto
> 3. Mostra tutti i contatti
> 4. Esci
> Scegli un'opzione: 1
> 
> Inserisci nome: Mario Rossi
> Inserisci numero di telefono: 123456789
> Inserisci email: mario.rossi@email.com
> 
> Scegli un'opzione: 3
> Contatti:
> 1. Mario Rossi - 123456789 - mario.rossi@email.com
> ```
> 
> ---
> 
>  2. **Analisi di una tabella di studenti**
> 
> Scrivi un programma che gestisce i dati di una classe. Per ogni studente memorizza:
> 
> - Nome (stringa)
> - Cognome (stringa)
> - Voti di 5 materie (array di interi)
> 
> Il programma deve:
> 
> 1. Leggere i dati di almeno 5 studenti.
> 2. Calcolare la media dei voti per ciascuno studente.
> 3. Stampare i dettagli dello studente con la media più alta.
> 
> **Esempio di output**:
> 
> ```
> Inserisci i dati dello studente 1:
> Nome: Luca
> Cognome: Bianchi
> Voti: 8 9 7 10 9
> 
> Inserisci i dati dello studente 2:
> Nome: Maria
> Cognome: Rossi
> Voti: 6 7 8 6 7
> 
> Studente con la media più alta:
> Luca Bianchi - Media: 8.6
> ```
> 
> ---
> 
>  3. **Gestione di un inventario**
> 
> Crea un programma per gestire l'inventario di un negozio. Ogni prodotto è rappresentato da una `struct` contenente:
> 
> - Nome prodotto (stringa)
> - Quantità (intero)
> - Prezzo unitario (double)
> 
> Il programma deve:
> 
> 1. Aggiungere prodotti all'inventario.
> 2. Cercare un prodotto per nome e mostrarne i dettagli.
> 3. Calcolare il valore totale dell'inventario.
> 
> **Esempio di output**:
> 
> ```
> 1. Aggiungi prodotto
> 2. Cerca prodotto
> 3. Calcola valore totale inventario
> 4. Esci
> 
> Scegli un'opzione: 1
> Nome prodotto: Laptop
> Quantità: 5
> Prezzo unitario: 899.99
> 
> Scegli un'opzione: 3
> Valore totale dell'inventario: 4499.95
> ```
> 
> ---
> 
>  4. **Analisi di testo**
> 
> Scrivi un programma che analizza un paragrafo di testo fornito dall'utente. Il programma deve:
> 
> 1. Contare il numero di parole nel testo.
> 2. Contare quante volte ogni parola appare (usa un array di `struct` dove ogni struct contiene una parola e il relativo conteggio).
> 3. Stampare l'elenco delle parole con il loro conteggio.
> 
> **Esempio di output**:
> 
> ```
> Inserisci un testo:
> Benvenuti al corso di programmazione. Programmazione è divertente.
> 
> Analisi:
> Numero totale di parole: 7
> Parole e frequenze:
> - Benvenuti: 1
> - al: 1
> - corso: 1
> - di: 1
> - programmazione: 2
> - è: 1
> - divertente: 1
> ```
> 
> ---
> 
>  5. **Gioco del tris**
> 
> Implementa il gioco del tris (tic-tac-toe) utilizzando:
> 
> - Una matrice 3x3 per rappresentare il tabellone.
> - Stringhe per i nomi dei due giocatori.
> - Logica per determinare se un giocatore ha vinto o se c'è un pareggio.
> 
> **Requisiti**:
> 
> - Il programma deve permettere ai giocatori di inserire i propri nomi.
> - Alternativamente, i giocatori inseriscono la loro mossa.
> - Dopo ogni mossa, il programma verifica se c'è un vincitore o un pareggio.
> 
> **Esempio di output**:
> 
> ```
> Inserisci il nome del Giocatore 1: Alice
> Inserisci il nome del Giocatore 2: Bob
> 
> Tabellone attuale:
>  1 | 2 | 3
> -----------
>  4 | 5 | 6
> -----------
>  7 | 8 | 9
> 
> Alice, inserisci la tua mossa (1-9): 1
> 
> Tabellone attuale:
>  X | 2 | 3
> -----------
>  4 | 5 | 6
> -----------
>  7 | 8 | 9
> 
> Bob, inserisci la tua mossa (1-9): 5
> ...
> ```
> 


> [!warning] Nota
> Con questi esercizi ti sarai sicuramente reso conto di una cosa... Il tuo codice sta diventando davvero lungo e difficile da leggere, inoltre in varie occasioni, potresti esserti accorto di aver copiato e incollato del codice (uno dei peccati mortali della programmazione, e spiegheremo perché). Il prossimo capitolo fa al caso tuo, perché imparerai ad usare le funzioni e a risolvere tutti questi problemi in modo più efficace!


---

## Capitolo 5: Funzioni e Modularizzazione

### Introduzione

Le **funzioni** sono uno strumento che permettono di **suddividere** un programma complesso in parti più piccole, gestibili e riutilizzabili (persino al di fuori del programma), migliorando la leggibilità, la manutenzione e il riutilizzo del codice.

In **C e C++**, una funzione è un blocco di codice che esegue **un** compito specifico (una funzione che svolge più di un compito è un cosiddetto "code smell", puoi approfondire sulla dispensa sui code smells quando sarà il momento). Una funzione può ricevere dati in ingresso (**parametri**) e restituire un dato in uscita (**valore di ritorno**).

valori in ingresso -> elaborazione dei dati -> valore in uscita

Alcuni linguaggi di programmazione ad alto livello di astrazione possono anche ritornare più valori.

---

### Dichiarazione e Definizione di una Funzione

#### Sintassi

Una funzione in C e C++ è definita nel seguente modo:

```cpp
tipo_di_ritorno nome_funzione(parametro1, parametro2, ...) {
    // Corpo della funzione: blocco di istruzioni
    return valore; // opzionale, solo se tipo_di_ritorno non è void
}
```

- **tipo_di_ritorno**: specifica il tipo di dato che la funzione restituisce (es. `int`, `float`...). Può anche restituire un tipo particolare detto `void`; in questo caso non sono obbligato a mettere return (a meno che non voglia uscire dalla funzione in un punto diverso dalla fine in alcuni casi) e la funzione non restituirà nessun valore.
- **nome_funzione**: è il nome con cui la funzione viene chiamata.
- **parametri**: valori di ingresso (facoltativi) che la funzione utilizza.


> [!warning] Nota
> Una funzione può ricevere in ingresso o restituire anche dei puntatori di memoria (più approfondimenti nel capitolo dedicato). Questo mi permette di utilizzare anche oggetti più complessi come gli array (in modo implicito grazie al livello di astrazione di C++).

> [!note] In C
> La sintassi di base delle funzioni e dei prototipi è la stessa. Il C non ha però riferimenti (`&` nei parametri C++): per modificare una variabile del chiamante o lavorare con un array si passa un puntatore, per esempio `void incrementa(int *n) { (*n)++; }` e si chiama con `incrementa(&numero);`.

#### Esempio di Funzione con parametri

Calcolare il massimo di due numeri:

```cpp
#include <iostream>
using namespace std;

// Dichiarazione della funzione
int max(int a, int b) {
    if(a>b) 
    	return a;
    return b;
}

int main() {
    int x,y;
    cout << "Inserisci i due numeri " << endl;
    cin>>x>>y;
    int risultato = max(x, y); // Chiamata alla funzione
    cout << "Il numero più grande è: " << risultato << endl;
    return 0;
}
```

> [!warning] Nota
> Come mai in questo esempio non ho usato `else`?

Versione C:

```c
#include <stdio.h>

int massimo(int a, int b) {
    if (a > b) return a;
    return b;
}

int main(void) {
    int x, y;
    printf("Inserisci i due numeri: ");
    if (scanf("%d%d", &x, &y) != 2) return 1;
    printf("Il numero più grande è: %d\n", massimo(x, y));
    return 0;
}
```

Posso anche passare un array (devo ricordarmi di passare anche le dimensioni):

```cpp
#include <iostream>
using namespace std;

// Funzione per stampare gli elementi di un array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    // Dichiarazione dell'array
    int numbers[] = {5, 10, 15, 20, 25};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    // Chiamata alla funzione per stampare l'array
    printArray(numbers, size);

    return 0;
}

```

> [!warning] Nota
> In questo programma ho usato un metodo particolare per calcolare la dimensione dell'array (ci sono casi in cui mi può essere utile) in questa linea `int size = sizeof(numbers) / sizeof(numbers[0]);`.
> La funzione di sistema `sizeof` mi restituisce la memoria occupata da un oggetto in memoria in byte. In questo caso io prendo la dimensione intera dell'array e la divido per la dimensione di ogni singolo elemento (prendo il primo). La dimensione di un numero intero in memoria è di 4 byte e l'intero array occupa 20 byte. Pertanto 20/4=5, ovvero la dimensione dell'array. 


---
#### Funzione senza Valore di Ritorno (void)

Una funzione che non restituisce alcun valore utilizza il tipo `void`. Potrebbe essere una funzione che fa semplicemente output o una funzione che manipola dati passati come riferimento (vedi dopo).

```cpp
#include <iostream>
using namespace std;

void saluta() {
    cout << "Ciao, benvenuto nel programma!" << endl;
}

int main() {
    saluta(); // Chiamata alla funzione
    return 0;
}
```

---

#### Passaggio di Parametri

I parametri possono essere passati in due modi principali:

1. **Passaggio per Valore**

- Il valore della variabile viene copiato nella funzione.
- Le modifiche alla variabile **non influenzano** l'originale.

```cpp
#include <iostream>
using namespace std;

void incrementa(int n) {
	n++;
}

int main() {
	int numero = 5;
	incrementa(numero);
	incrementa(numero);
	incrementa(numero);
	cout << numero << endl;
	return 0;
}
```

2. **Passaggio per Riferimento**

- La funzione riceve un **riferimento** alla variabile originale.
- Le modifiche effettuate influenzano il valore originale.

```cpp
#include <iostream>
using namespace std;

void incrementa(int &n) {
	n++;
}

int main() {
	int numero = 5;
	incrementa(numero);
	incrementa(numero);
	incrementa(numero);
	cout << numero << endl;
	return 0;
}
```

In C il passaggio per riferimento si ottiene soltanto con un puntatore:

```c
#include <stdio.h>

void incrementa(int *n) {
    (*n)++;
}

int main(void) {
    int numero = 5;
    incrementa(&numero);
    incrementa(&numero);
    incrementa(&numero);
    printf("%d\n", numero);
    return 0;
}
```


> [!warning] Nota
> Prova ad eseguire entrambi i programmi. Cosa succede? Per quale motivo?

#### Passaggio di array
Quando passo un array a una funzione, non viene copiato tutto il blocco di memoria. Il parametro riceve l'indirizzo del primo elemento dell'array, quindi dentro la funzione `arr` si comporta come un puntatore. Per questo motivo le modifiche agli elementi hanno effetto sull'array originale.

In pratica queste due intestazioni sono equivalenti:

```cpp
void modifyArray(int arr[], int size)
void modifyArray(int *arr, int size)
```

La funzione però non conosce più automaticamente la dimensione dell'array: riceve solo l'indirizzo iniziale. Per questo motivo bisogna passare anche `size`.

Puoi verificarlo con questa versione modificata del precedente programma:
```cpp
#include <iostream>
using namespace std;

// Funzione per stampare gli elementi di un array
void printArray(const int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void modifyArray(int arr[], int size){
    arr[0] = 0;
}

int main() {
    // Dichiarazione dell'array
    int numbers[] = {5, 10, 15, 20, 25};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    modifyArray(numbers, size); // Questa chiamata ha effetto sull'array

    // Chiamata alla funzione per stampare l'array
    printArray(numbers, size);

    return 0;
}
```

---

### Funzioni Ricorsive

Una funzione è **ricorsiva** se chiama sé stessa al proprio interno. La ricorsione è utile per risolvere problemi che possono essere suddivisi in sottoproblemi più semplici.

#### Esempio: Calcolo del Fattoriale

Il **fattoriale** di un numero `n` (indicato come `n!`) è definito come:

- `n! = n * (n-1) * (n-2) * ... * 1`
- Caso base: `0! = 1`

**Implementazione**:

```cpp
#include <iostream>
using namespace std;

int fattoriale(int n) {
    if (n == 0) { // Caso base
        return 1;
    } else {
        return n * fattoriale(n - 1); // Passo ricorsivo
    }
}

int main() {
    int numero;
    cout << "Inserisci un numero: ";
    cin >> numero;
    cout << "Il fattoriale di " << numero << " è: " << fattoriale(numero) << endl;
    return 0;
}
```

1. **Caso Base**: Se `n` è uguale a `0` o `1`, il programma restituisce direttamente `1` perché il fattoriale di `0` e `1` è definito come `1`.
    
2. **Chiamata Ricorsiva**: Per un valore di `n` maggiore di `1`, la funzione richiama sé stessa passando come argomento `n - 1`. Questo crea una serie di chiamate che si accumulano sulla stack finché non viene raggiunto il caso base.
    
3. **Risoluzione**: Una volta raggiunto il caso base, la funzione risolve le chiamate impilate, moltiplicando i risultati intermedi per calcolare il fattoriale.
    

##### Esempio di Esecuzione per `n = 5`:

- `fattoriale(5)` chiama `5 * fattoriale(4)`
- `fattoriale(4)` chiama `4 * fattoriale(3)`
- `fattoriale(3)` chiama `3 * fattoriale(2)`
- `fattoriale(2)` chiama `2 * fattoriale(1)`
- `fattoriale(1)` restituisce `1` (caso base)

Ora si calcolano i risultati tornando indietro lungo la stack:

- `fattoriale(2)` restituisce `2 * 1 = 2`
- `fattoriale(3)` restituisce `3 * 2 = 6`
- `fattoriale(4)` restituisce `4 * 6 = 24`
- `fattoriale(5)` restituisce `5 * 24 = 120`

Il risultato finale è `120`.

> [!warning] Nota
> Come viene detto nel passaggio 2, la funzione ricorsiva accumula la serie di chiamate sullo stack; pertanto una funzione ricorsiva consuma molta più memoria di una funzione iterativa!

---

### Gli scopes
Le **funzioni** possono essere considerate come piccoli programmi autonomi all'interno di un programma più grande.
#### Scope nelle funzioni

Lo **scope** si riferisce alla visibilità e al ciclo di vita delle variabili, e mi permettono di mantenere il giusto grado di isolamento tra le varie funzioni del programma. Possiamo distinguere tra:

1. **Scope locale**:
    
    - Le variabili definite all'interno di una funzione sono locali alla funzione e non possono essere accedute al di fuori di essa.
    - Queste variabili vengono create quando la funzione viene chiamata e distrutte quando la funzione termina.
    - **Esempio**:
        
        ```cpp
        void exampleFunction() {
            int localVar = 10; // Variabile locale
            cout << localVar << endl;
        }
        ```
        
2. **Scope globale**:
    
    - Le variabili definite al di fuori di tutte le funzioni hanno scope globale e possono essere accedute da qualsiasi funzione nel programma.
    - Devono essere usate con cautela, perché possono introdurre dipendenze indesiderate.
    - **Esempio**:
        
        ```cpp
        int globalVar = 20; // Variabile globale
        
        void printGlobal() {
            cout << globalVar << endl;
        }
        ```
        
3. **Scope di parametri**:
    
    - I parametri di una funzione sono locali alla funzione stessa. Quando vengono passati dei valori, questi parametri sono una copia dei dati (se non si usa il riferimento).
    - **Esempio**:
        
        ```cpp
        void printNumber(int number) { // "number" è locale alla funzione
            cout << number << endl;
        }
        ```
        
4. **Shadowing**:
    
    - Una variabile locale con lo stesso nome di una variabile globale "nasconde" quest'ultima all'interno della funzione.
    - **Esempio**:
        
        ```cpp
        int x = 5; // Variabile globale
        
        void exampleFunction() {
            int x = 10; // Variabile locale "x" nasconde quella globale
            cout << x << endl; // Stampa 10
        }
        ```
        

> [!warning] Nota
> Il main è a tutti gli effetti una funzione e si comporta come tale, creando il proprio scope e avendo i suoi parametri in ingresso e valori di ritorno. L'unica cosa "speciale" del main è quella di essere il punto di ingresso del programma.
### Modularizzazione

La **modularizzazione** è una tecnica che suddivide un programma in **funzioni** o **moduli** più piccoli, ciascuno con un compito specifico. Questo approccio ha diversi vantaggi:

1. **Leggibilità**: il codice è più chiaro e organizzato.
2. **Riusabilità**: le funzioni possono essere riutilizzate in diverse parti del programma.
3. **Manutenibilità**: è più facile modificare o correggere piccole porzioni di codice.

Aggiungo qui un estratto della mia dispensa sul refactoring (scrivere il codice in modo migliore) per mostrare quanto siano utili le funzioni. Per riassumere possiamo darci questa semplice regola d'oro: **se mi metto a fare copia e incolla di una parte del codice, dovrei creare una funzione.**

#### Estratto da "Code smells e refactoring"
![[Fattorizzazione del codice e makefile/Code smells e refactoring#Codice Duplicato]]

---

### Diversi metodi di modularizzazione
In C++, esistono **tre principali modalità** per modularizzare il codice tramite l'uso delle funzioni:
1. Definire tutto in un unico file con il codice delle funzioni prima del `main`
2. Definire tutto in unico file con i prototipi delle funzioni prima del `main` e il codice dopo il `main`
3. Definire separatamente i prototipi in un file header `h` e l'implementazione in un file `cpp` e importarle nel main
#### 1. Tutto in un file (definizioni prima del `main`)

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Player {
    string name;
    int score;
};

Player createPlayer(string name, int score) {
    Player p;
    p.name = name;
    p.score = score;
    return p;
}

void printPlayer(const Player& p) {
    cout << "Player: " << p.name << ", Score: " << p.score << endl;
}

void updateScore(Player& p, int delta) {
    p.score += delta;
}

int main() {
    Player player = createPlayer("Alice", 10);
    printPlayer(player);
    updateScore(player, 5);
    printPlayer(player);
    return 0;
}
```
Se ho un codice molto piccolo, posso definire le funzioni con la loro implementazione direttamente sopra il `main`.
In questo caso l’**ordine delle funzioni importa**. Il compilatore deve incontrare una funzione **prima** che venga usata (ad esempio se la riutilizzo in una delle altre funzioni).
Se chiami una funzione prima che sia definita, il compilatore darà errore.
#### 2. Con prototipi prima del `main` e definizioni dopo

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Player {
    string name;
    int score;
};

// Prototypes
Player createPlayer(string name, int score);
void printPlayer(const Player& p);
void updateScore(Player& p, int delta);

int main() {
    Player player = createPlayer("Alice", 10);
    printPlayer(player);
    updateScore(player, 5);
    printPlayer(player);
    return 0;
}

// Definitions
Player createPlayer(string name, int score) {
    Player p;
    p.name = name;
    p.score = score;
    return p;
}

void printPlayer(const Player& p) {
    cout << "Player: " << p.name << ", Score: " << p.score << endl;
}

void updateScore(Player& p, int delta) {
    p.score += delta;
}
```

Anche questo metodo va bene per progetti piccoli o medi.
In questo caso l’ordine **non importa più**, perché dichiari anticipatamente le firme delle funzioni. Il compilatore sa che quella funzione esiste e potrà trovarla dopo.

#### 3. Separazione in header e file `.cpp`

> [!note] Equivalente C
> La modularizzazione con header esiste anche in C: si usano gli stessi include guard, ma i file di implementazione hanno estensione `.c`, non `.cpp`; non ci sono `std::string` né riferimenti. Per il progetto qui sotto una versione C può usare `char name[50]` nella struct e `void updateScore(Player *p, int delta)`. Si compila con `gcc main.c player.c -std=c17 -Wall -Wextra -o main`.

**player.h**:

```cpp
#ifndef PLAYER_H
#define PLAYER_H

#include <string>
using namespace std;

struct Player {
    string name;
    int score;
};

Player createPlayer(string name, int score);
void printPlayer(const Player& p);
void updateScore(Player& p, int delta);

#endif
```

**player.cpp**:

```cpp
#include <iostream>
#include "player.h"
using namespace std;

Player createPlayer(string name, int score) {
    Player p;
    p.name = name;
    p.score = score;
    return p;
}

void printPlayer(const Player& p) {
    cout << "Player: " << p.name << ", Score: " << p.score << endl;
}

void updateScore(Player& p, int delta) {
    p.score += delta;
}
```

**main.cpp**:

```cpp
#include "player.h"

int main() {
    Player player = createPlayer("Alice", 10);
    printPlayer(player);
    updateScore(player, 5);
    printPlayer(player);
    return 0;
}
```
Dividere il codice in tre file è la prassi consigliata nei progetti di media o grande dimensione, perché migliora la leggibilità, la manutenibilità e la riusabilità. Ecco cosa succede in dettaglio:
##### 1. Il file `.h` (header)

Contiene:
- Le **dichiarazioni** delle funzioni.
- Le **definizioni delle struct/class**.
- Include solo ciò che serve per rendere visibile l’interfaccia (senza logica interna).

**Scopo**:
- Funziona come un _contratto_ tra chi scrive il codice e chi lo usa.
- Viene **incluso** (tramite `#include`) nei file `.cpp` che ne hanno bisogno.

Il `#ifndef`/`#define`/`#endif` serve a evitare **inclusioni multiple**, che genererebbero errori di compilazione.
##### 2. Il file `.cpp` associato all'header

Contiene:

- L’**implementazione delle funzioni** dichiarate nel file `.h`.
- Include il file header corrispondente.

**Scopo**:
- Separare la logica dall’interfaccia.
- Evita duplicazioni inutili di codice.

##### 3. Il file `main.cpp`

Contiene:
- La funzione `main()` e la logica del programma.
- Include solo gli header necessari (non i `.cpp`!).

**Scopo**:
- Usare le funzioni definite altrove come "mattoni" per costruire l'applicazione.
##### Come avviene la compilazione

I file `.cpp` vengono **compilati separatamente** e poi **collegati** (linkati) in un unico eseguibile.

```sh
g++ main.cpp player.cpp -o main
```

Qui il compilatore:

- Legge `main.cpp` e vede le funzioni dichiarate in `player.h`.
- Trova la loro implementazione in `player.cpp`.
- Compila entrambi e li collega per formare l’eseguibile `main`.

### Esercizi

> [!exercise] Esercizi
> Prova a modificare gli esercizi che hai svolto nel capitolo 4 eliminando i copia incolla trasformandoli in funzioni.
> 
> [[#Capitolo 4 Strutture Dati di Base#Esercizi]]

## Capitolo 6: Input/Output da file

### Introduzione  
La **gestione dei file** in C++ è possibile grazie alla libreria `<fstream>`, che fornisce classi specifiche per interagire con file di testo o binari:  
1. **`ifstream`**: per leggere dati da un file.  
2. **`ofstream`**: per scrivere dati su un file.  
3. **`fstream`**: per operazioni sia di lettura che di scrittura.

> [!note] Gestione dei file in C
> In C si include `<stdio.h>` e si usa un puntatore `FILE *`: `fopen("esempio.txt", "r")` per leggere, `fopen("esempio.txt", "w")` per scrivere e `fclose(file)` per chiudere. Per il testo si usano normalmente `fprintf`, `fscanf` e `fgets`.

---

### Scrittura su un File  
Per scrivere su un file utilizziamo la classe `ofstream`.  

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file_output("esempio.txt"); // Apre il file in modalità scrittura

    if (file_output.is_open()) {
        file_output << "Ciao, questo è un esempio di scrittura su file.\n";
        file_output << "Questa è la seconda riga." << endl;
        file_output.close(); // Chiude il file
        cout << "Scrittura completata!" << endl;
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}
```

Versione C:

```c
#include <stdio.h>

int main(void) {
    FILE *file_output = fopen("esempio.txt", "w");
    if (file_output == NULL) {
        perror("Errore nell'apertura del file");
        return 1;
    }

    fprintf(file_output, "Ciao, questo è un esempio di scrittura su file.\n");
    fprintf(file_output, "Questa è la seconda riga.\n");
    fclose(file_output);
    printf("Scrittura completata!\n");
    return 0;
}
```

---

### Lettura da un File  
Per leggere dati da un file utilizziamo la classe `ifstream`.

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream file_input("esempio.txt"); // Apre il file in modalità lettura
    string riga;

    if (file_input.is_open()) {
        while (getline(file_input, riga)) { // Legge il file riga per riga
            cout << riga << endl;
        }
        file_input.close(); // Chiude il file
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}
```

Versione C con `fgets`:

```c
#include <stdio.h>

int main(void) {
    char riga[256];
    FILE *file_input = fopen("esempio.txt", "r");
    if (file_input == NULL) {
        perror("Errore nell'apertura del file");
        return 1;
    }

    while (fgets(riga, sizeof riga, file_input) != NULL) {
        fputs(riga, stdout);
    }
    fclose(file_input);
    return 0;
}
```

Posso anche dare un delimitatore diverso dalla riga a `getline`. Ad esempio, se i dati fossero separati da `;` posso usare `getline(file_input, stringa, ';')`.

---

### Operazioni di Lettura e Scrittura con `fstream`  
La classe `fstream` permette sia la **lettura** che la **scrittura** su un file.

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file("esempio.txt", ios::in | ios::out | ios::app); // Lettura, scrittura, append

    if (file.is_open()) {
        file << "Nuova riga aggiunta con fstream.\n";
        file.seekg(0); // Riporta il cursore all'inizio del file
        string riga;

        cout << "Contenuto del file:" << endl;
        while (getline(file, riga)) {
            cout << riga << endl;
        }

        file.close();
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}
```

### Tipologie di lettura
Nell'esempio di lettura da file abbiamo letto il file riga per riga, ma posso anche essere più granulare, leggendo parola per parola o carattere per carattere.
#### Lettura parola per parola con >>
```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inputFile("esempio.txt");
    string parola;

    if (inputFile.is_open()) {
        while (inputFile >> parola) {
            cout << parola << endl; // Stampa ogni parola
        }
        inputFile.close();
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}

```

Questo metodo mi permette anche di estrarre dei dati dal file e salvarlo in variabili (con svariati casi d'uso, tra cui il salvataggio dei dati permanente anche dopo la chiusura del processo)
#### Lettura di dati strutturati da un file

Supponiamo di avere un file `studenti.txt` con il seguente contenuto:

```
Mario Rossi 18
Luisa Verdi 20
Giovanni Bianchi 22
```

Ogni riga rappresenta uno studente, con nome, cognome e età. Vogliamo leggere questi dati e stamparli a video.

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inputFile("studenti.txt");
    string nome, cognome;
    int eta;

    if (inputFile.is_open()) {
        while (inputFile >> nome >> cognome >> eta) {
            // Stampa i dati letti
            cout << "Nome: " << nome << ", Cognome: " << cognome << ", Età: " << eta << endl;
        }
        inputFile.close();
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}
```

**Output**:

```
Nome: Mario, Cognome: Rossi, Età: 18
Nome: Luisa, Cognome: Verdi, Età: 20
Nome: Giovanni, Cognome: Bianchi, Età: 22
```

1. **Struttura del file**:
    
    - Il file `studenti.txt` contiene dati organizzati in modo che ogni riga abbia tre valori separati da spazi: `nome`, `cognome`, e `età`.
2. **Lettura con `>>`**:
    
    - L'operatore `>>` legge i dati dal file e li salva nelle variabili corrispondenti.
    - Dopo aver letto una riga completa (nome, cognome, età), il ciclo `while` passa alla riga successiva.
3. **Casi d'uso**:
    
    - Questo metodo è utile per caricare dati strutturati (es. database semplici, configurazioni).
    - I dati rimangono disponibili anche dopo la chiusura del programma, poiché salvati nel file.


#### Lettura carattere per carattere con get
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream inputFile("esempio.txt");
    char carattere;

    if (inputFile.is_open()) {
        while (inputFile.get(carattere)) {
            cout << carattere << endl; // Stampa ogni carattere
        }
        inputFile.close();
    } else {
        cout << "Errore nell'apertura del file." << endl;
    }

    return 0;
}

```
---
### Funzionalità di fstream
Abbiamo visto solo le funzionalità principali di fstream, ma qui ne hai un elenco completo per sperimentare con le varie funzioni.
#### Apertura e Chiusura dei File

1. **`open()`**
    
    - Apre un file con un percorso specifico e una modalità (opzionale).
    - Sintassi: `fileStream.open("path", modalità);`
    - Esempio:
        
        ```cpp
        ifstream inputFile;
        inputFile.open("dati.txt");
        ```
        
2. **`close()`**
    
    - Chiude il file aperto.
    - Sintassi: `fileStream.close();`
    - Esempio:
        
        ```cpp
        inputFile.close();
        ```
        
3. **`is_open()`**
    
    - Restituisce `true` se il file è aperto correttamente, `false` altrimenti.
    - Sintassi: `fileStream.is_open();`
    - Esempio:
        
        ```cpp
        if (!inputFile.is_open()) {
            cout << "Errore nell'apertura del file." << endl;
        }
        ```
        

##### Modalità di Apertura (Flags)

Le modalità di apertura possono essere combinate con l'operatore `|` per definire il comportamento del file:

| **Modalità**  | **Descrizione**                                                                     |
| ------------- | ----------------------------------------------------------------------------------- |
| `ios::in`     | Apertura in modalità lettura (default per `ifstream`).                              |
| `ios::out`    | Apertura in modalità scrittura (default per `ofstream`).                            |
| `ios::app`    | Apre il file in modalità append (scrive alla fine senza sovrascrivere).             |
| `ios::trunc`  | Cancella il contenuto del file se esiste (default per `ofstream`).                  |
| `ios::binary` | Apre il file in modalità binaria.                                                   |
| `ios::ate`    | Apre il file e posiziona il puntatore alla fine, ma consente di leggere o scrivere. |

**Esempio di combinazione**:

```cpp
fstream outputFile("dati.txt", ios::out | ios::app); // Scrive in append
```

---

#### Operazioni di Lettura

1. **`operatore >>`**
    
    - Legge una parola dal file e la salva in una variabile.
    - Esempio:
        
        ```cpp
        string parola;
        inputFile >> parola;
        ```
        
2. **`getline()`**
    
    - Legge una riga intera dal file.
    - Sintassi: `getline(fileStream, stringa);`
    - Esempio:
        
        ```cpp
        string linea;
        getline(inputFile, linea);
        ```
        
3. **`get()`**
    
    - Legge un carattere dal file.
    - Sintassi: `fileStream.get(carattere);`
    - Esempio:
        
        ```cpp
        char c;
        inputFile.get(c);
        ```
        
4. **`eof()`**
    
    - Restituisce `true` se è stata raggiunta la fine del file.
    - Sintassi: `fileStream.eof();`
    - Esempio:
        
        ```cpp
        // leggi parole finché non finisci il file
        while (!inputFile.eof()) {
            inputFile >> parola;
        }
        ```
        

---

#### Operazioni di Scrittura

1. **`operatore <<`**
    - Scrive dati nel file.
    - Esempio:
        
        ```cpp
        outputFile << "Testo di esempio." << endl;
        ```
        

---

#### Gestione dello Stato dello Stream

1. **`fail()`**
    
    - Restituisce `true` se si è verificato un errore nel file.
    - Sintassi: `fileStream.fail();`
    - Esempio:
        
        ```cpp
        if (inputFile.fail()) {
            cout << "Errore nella lettura del file." << endl;
        }
        ```
        
2. **`clear()`**
    
    - Resetta lo stato dello stream (utile dopo un errore).
    - Sintassi: `fileStream.clear();`
    - Esempio:
        
        ```cpp
        inputFile.clear();
        ```
        

---

#### Gestione dei Puntatori nel File

1. **`tellg()`**
    
    - Restituisce la posizione corrente del puntatore di lettura (in byte).
    - Sintassi: `fileStream.tellg();`
    - Esempio:
        
        ```cpp
        cout << "Posizione corrente: " << inputFile.tellg() << endl;
        ```
        
2. **`tellp()`**
    
    - Restituisce la posizione corrente del puntatore di scrittura (in byte).
    - Sintassi: `fileStream.tellp();`
    - Esempio:
        
        ```cpp
        cout << "Posizione corrente: " << outputFile.tellp() << endl;
        ```
        
3. **`seekg()`**
    
    - Sposta il puntatore di lettura a una posizione specifica.
    - Sintassi: `fileStream.seekg(posizione);`
    - Esempio:
        
        ```cpp
        inputFile.seekg(0, ios::beg); // Torna all'inizio del file
        ```
        
4. **`seekp()`**
    
    - Sposta il puntatore di scrittura a una posizione specifica.
    - Sintassi: `fileStream.seekp(posizione);`
    - Esempio:
        
        ```cpp
        outputFile.seekp(0, ios::end); // Posiziona alla fine del file
        ```
        

---

#### Tabella Riassuntiva

| **Metodo/Funzione** | **Descrizione**                                 |
| ------------------- | ----------------------------------------------- |
| `open()`            | Apre un file con un percorso specifico.         |
| `close()`           | Chiude il file.                                 |
| `is_open()`         | Verifica se il file è aperto.                   |
| `operator>>`        | Legge dati dal file.                            |
| `getline()`         | Legge una riga intera dal file.                 |
| `get()`             | Legge un carattere dal file.                    |
| `operator<<`        | Scrive dati nel file.                           |
| `eof()`             | Controlla se è stato raggiunto il fine file.    |
| `fail()`            | Verifica se un'operazione sul file è fallita.   |
| `clear()`           | Resetta lo stato dello stream.                  |
| `tellg()`           | Restituisce la posizione corrente di lettura.   |
| `tellp()`           | Restituisce la posizione corrente di scrittura. |
| `seekg()`           | Sposta il puntatore di lettura.                 |
| `seekp()`           | Sposta il puntatore di scrittura.               |
### Esercizi

> [!exercise] Esercizi
>
> 1. **Calcolo della media da un file**
>    Scrivi un programma che legge un file chiamato `numeri.txt` contenente una lista di numeri interi e calcola la loro media.
>    **Requisiti**:
>
> * Leggere i numeri da un file.
> * Calcolare e stampare la media.
>   **Esempio di file `numeri.txt`**:
>
> ```
> 10 20 30 40 50
> ```
>
> **Output atteso**:
>
> ```
> La media è: 30
> ```
>
> 2. **Conteggio delle parole**
>    Scrivi un programma che legge un file chiamato `testo.txt` e conta il numero totale di parole nel file.
>    **Requisiti**:
>
> * Utilizza l'operatore `>>` per leggere parola per parola.
> * Stampa il numero totale di parole.
>   **Esempio di file `testo.txt`**:
>
> ```
> Benvenuto al corso di programmazione in C++.
> ```
>
> **Output atteso**:
>
> ```
> Numero totale di parole: 6
> ```
>
> 3. **Analisi di frequenza delle parole**
>    Scrivi un programma che legge un file chiamato `testo.txt` e stampa il numero di volte che ogni parola appare.
>    **Requisiti**:
>
> * Utilizza un array di struct per memorizzare ogni parola e il suo conteggio.
> * Gestisce il caso in cui la stessa parola appaia più volte.
>   **Esempio di file `testo.txt`**:
>
> ```
> C++ è potente. C++ è divertente.
> ```
>
> **Output atteso**:
>
> ```
> C++: 2
> è: 2
> potente: 1
> divertente: 1
> ```
>
> 4. **Gestione di un elenco di studenti**
>    Scrivi un programma che legge un file `studenti.txt` contenente i dati di più studenti (nome, cognome, età) e permette di:
> 5. Visualizzare tutti gli studenti.
> 6. Aggiungere un nuovo studente.
> 7. Salvare i dati aggiornati nel file.
>    **Requisiti**:
>
> * Utilizza una `struct` per rappresentare ogni studente.
> * Carica i dati dal file all'avvio e li salva al termine.
>   **Esempio di file `studenti.txt`**:
>
> ```
> Mario Rossi 18
> Luisa Verdi 20
> Giovanni Bianchi 22
> ```
>
> **Esempio di interazione**:
>
> ```
> 1. Visualizza studenti
> 2. Aggiungi studente
> 3. Esci
> Scegli un'opzione: 1
> Mario Rossi, Età: 18
> Luisa Verdi, Età: 20
> Giovanni Bianchi, Età: 22
> Scegli un'opzione: 2
> Inserisci nome: Anna
> Inserisci cognome: Neri
> Inserisci età: 19
> ```
>
> 4. **Ricerca di un prodotto in un inventario**
>    Scrivi un programma che legge un file `inventario.txt` contenente informazioni sui prodotti di un negozio (nome, quantità, prezzo unitario) e permette di:
> 5. Cercare un prodotto per nome e visualizzarne i dettagli.
> 6. Calcolare il valore totale dell'inventario.
>    **Requisiti**:
>
> * Utilizza una `struct` per rappresentare i prodotti.
> * Gestisce sia la ricerca che il calcolo del valore totale.
>   **Esempio di file `inventario.txt`**:
>
> ```
> Laptop 5 899.99
> Smartphone 10 499.99
> Tablet 7 299.99
> ```
>
> **Esempio di interazione**:
>
> ```
> 1. Cerca prodotto
> 2. Calcola valore totale
> 3. Esci
> Scegli un'opzione: 1
> Inserisci il nome del prodotto: Smartphone
> Dettagli: Smartphone, Quantità: 10, Prezzo unitario: 499.99
> Scegli un'opzione: 2
> Valore totale dell'inventario: 14999.60
> ```
>
> 4. **Trasforma in maiuscolo**
>    Scrivi un programma che legge un file `originale.txt` e crea un nuovo file `modificato.txt` con tutte le lettere convertite in maiuscolo.
>    **Requisiti**:
>
> * Utilizza la funzione `toupper()` per convertire i caratteri.
> * Copia il contenuto riga per riga.
>   **Esempio di file `originale.txt`**:
>
> ```
> C++ è fantastico.
> Adoro programmare in C++.
> ```
>
> **File `modificato.txt`**:
>
> ```
> C++ È FANTASTICO.
> ADORO PROGRAMMARE IN C++.
> ```
>
> 7. **Crittografia di un file**
>    Scrivi un programma che legge un file `testo.txt`, applica una semplice crittografia sostituendo ogni carattere con il successivo nella tabella ASCII, e salva il risultato in un file `crittografato.txt`.
>    **Requisiti**:
>
> * Gestisce la lettura e scrittura carattere per carattere.
> * Permette di crittografare e decrittografare il file.
>   **Esempio di file `testo.txt`**:
>
> ```
> Ciao, mondo!
> ```
>
> **File `crittografato.txt`**:
>
> ```
> Djbp-!nppep"
> ```


## Capitolo 7: Gestione della Memoria dinamica e puntatori
### Introduzione
A differenza di altri linguaggi ad alto livello, C++ permette il **controllo esplicito** della memoria, in quanto il programmatore può allocare e deallocare manualmente la memoria utilizzando strumenti dedicati come `new` e `delete`.

In C il controllo è analogo, ma l'allocazione dinamica usa le funzioni `malloc`, `calloc`, `realloc` e `free` della libreria `<stdlib.h>`.

### Layout della memoria nei programmi C++
![[a10665c6635137898e9ade4075f8f7e8_MD5.jpeg]]
La memoria di un programma C++ o C è organizzata in diversi segmenti, come raffigurato nell'immagine:

1. **Segmento di testo**:
    
    - Contiene le istruzioni eseguibili.
    - È spesso in sola lettura e condivisibile tra processi.
    
    ```cpp
    int main() {
        return 0; // Questa istruzione risiede nel segmento di testo.
    }
    ```
    
2. **Segmento dati inizializzati**:
    
    - Contiene variabili globali e statiche inizializzate.
    - Diviso in aree di sola lettura e lettura-scrittura.
    
    ```cpp
    int global_var = 10; // Memorizzata nel segmento dati inizializzati (area lettura-scrittura).
    const char message[] = "Hello"; // Memorizzata nell'area di sola lettura.
    ```
    
3. **Segmento dati non inizializzati (BSS)**:
    
    - Contiene variabili globali e statiche non inizializzate o inizializzate a zero.
    
    ```cpp
    static int uninit_static; // Memorizzata nel segmento BSS e inizializzata automaticamente a 0.
    int uninit_global;        // Memorizzata nel segmento BSS.
    ```
    
4. **Heap**:
    
    - Utilizzato per allocazione dinamica della memoria.
    - Cresce verso indirizzi di memoria superiori.
    
    ```cpp
    int main() {
        int* ptr = new int[10]; // Allocazione dinamica nello heap.
        delete[] ptr; // Libera la memoria allocata.
        return 0;
    }
    ```
    
5. **Stack**:
    
    - Utilizzato per variabili locali e dati relativi alle chiamate di funzione.
    - Cresce verso indirizzi di memoria inferiori.
    
    ```cpp
    int main() {
        int local_var = 5; // Memorizzata nello stack.
        return 0;
    }
    ```
    

---

### Stack vs Heap
Andiamo a vedere meglio nel dettaglio come si comportano stack e heap.
#### Lo Stack
Lo **stack** è una parte della memoria progettata per gestire le chiamate di funzione e le variabili locali. Ogni volta che una funzione viene chiamata, il programma crea un "frame" nello stack che contiene tutte le informazioni necessarie per quella funzione: i parametri passati, le variabili locali e l'indirizzo di ritorno. Questo processo è automatico e trasparente per il programmatore.

Immagina lo stack come una pila di fogli: ogni nuovo foglio rappresenta una funzione chiamata, e quando la funzione termina, il foglio in cima viene rimosso. Questa organizzazione è chiamata **Last In, First Out (LIFO)**.

Lo stack è estremamente veloce, ma ha un limite fisso di dimensioni. Un eccesso di utilizzo dello stack, come in ricorsioni profonde o allocazioni locali di grandi dimensioni, può causare uno **stack overflow**, con conseguente crash del programma.

```cpp
void esempio() {
    int variabile_local = 42; // Allocata nello stack.
}
```

#### Heap
L' **heap**, al contrario, è una regione della memoria dedicata all'allocazione dinamica. In C++, l'allocazione nello heap viene gestita attraverso gli operatori `new` e `delete`, che sostituiscono le funzioni `malloc` e `free` di C.

Immagina lo heap come un vasto magazzino: puoi prendere spazio per conservare dati, ma devi ricordarti di restituirlo. Questo sistema offre una grande flessibilità, ma può portare a **memory leak** se dimentichi di liberare la memoria allocata.

```cpp
int main() {
    int* heap_variable = new int; // Allocata nello heap.
    *heap_variable = 42;
    delete heap_variable; // Liberazione della memoria.
    return 0;
}
```

In questo caso, la variabile `heap_variable` è allocata nello heap e rimane disponibile fino a quando non viene esplicitamente liberata con `delete`.

#### Allocazione dinamica in C

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *heap_variable = malloc(sizeof *heap_variable);
    if (heap_variable == NULL) {
        return 1;
    }

    *heap_variable = 42;
    printf("Valore allocato: %d\n", *heap_variable);
    free(heap_variable);
    return 0;
}
```

Ogni `malloc` riuscita deve avere una corrispondente chiamata a `free`. In C non si converte il valore restituito da `malloc` con un cast.
### Puntatori  
Negli esempi abbiamo visto dei tipi di dato con l'asterisco. Questi si chiamano **puntatori**. Un **puntatore** è una variabile che memorizza l'**indirizzo di memoria** di un'altra variabile. I puntatori mi servono per creare strutture dati più complesse e dinamiche memorizzandole nell'**heap**.

#### Dichiarazione e Uso dei Puntatori  

```cpp
tipo_dato *nome_puntatore;
```

- L'operatore `*` indica che la variabile è un **puntatore**.  
- L'operatore `&` restituisce l'**indirizzo di memoria** di una variabile.  

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

int main() {
    int variabile = 10;       // Variabile normale
    int *puntatore = &variabile; // Puntatore alla variabile

    cout << "Valore della variabile: " << variabile << endl;
    cout << "Indirizzo della variabile: " << puntatore << endl;
    cout << "Valore puntato dal puntatore: " << *puntatore << endl;

    return 0;
}
```

**Output**:  
```
Valore della variabile: 10  
Indirizzo della variabile: 0x7ffeea8b1c4c  
Valore puntato dal puntatore: 10
```


> [!warning] Nota
> Come vedi nell'esempio, il puntatore senza asterisco mi restituisce l'indirizzo di memoria a cui sta puntando, mentre con l'asterisco mi restituisce il valore contenuto.


---

### Navigazione manuale nella memoria

Con i puntatori posso navigare manualmente all'interno della memoria:

```cpp
#include <iostream>
using namespace std;

int main() {
    int array[3] = {10, 20, 30};
    int *p = array; // Puntatore al primo elemento

    cout << "Indirizzo del primo elemento: " << p << ", Valore: " << *p << endl; // 10
    p++;
    cout << "Indirizzo dopo incremento: " << p << ", Valore: " << *p << endl; // 20

    p++;
    cout << "Indirizzo dopo ulteriore incremento: " << p << ", Valore: " << *p << endl; // 30

    return 0;
}

```

L'output sarà una cosa simile a questa:

```
Indirizzo del primo elemento: 0x7ffee0f6c800, Valore: 10
Indirizzo dopo incremento: 0x7ffee0f6c804, Valore: 20
Indirizzo dopo ulteriore incremento: 0x7ffee0f6c808, Valore: 30
```


> [!warning] Nota
> Come notiamo chiaramente dall'output, l'incremento del valore di memoria corrisponde alla dimensione del tipo di dato. Quindi incrementando un puntatore a un intero, incremento il valore in memoria di 4 byte passando all'intero successivo.


---

### Passaggio di Puntatori alle Funzioni  
I puntatori permettono di **modificare direttamente** le variabili originali all'interno di una funzione.  Questo equivale a passare la variabile per riferimento con `&`.

**Esempio**:  
```cpp
#include <iostream>
using namespace std;

void incrementa(int *p) {
    (*p)++;
}

int main() {
    int numero = 5;
    cout << "Prima della funzione: " << numero << endl;

    incrementa(&numero); // Passaggio dell'indirizzo

    cout << "Dopo la funzione: " << numero << endl;
    return 0;
}
```

**Output**:  
```
Prima della funzione: 5  
Dopo la funzione: 6
```

---
### Allocazione Dinamica della Memoria  
L'allocazione dinamica permette di riservare memoria nello **heap** durante l'esecuzione del programma utilizzando gli operatori `new` e `delete`.  

#### Operatore `new`  
Alloca dinamicamente memoria e restituisce un puntatore all'area allocata.  

```cpp
#include <iostream>
using namespace std;

int main() {
    int *p = new int; // Allocazione dinamica di un intero
    *p = 42;

    cout << "Valore allocato: " << *p << endl;

    delete p; // Deallocazione della memoria
    return 0;
}
```

#### Allocazione di un Array Dinamico  
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Inserisci la dimensione dell'array: ";
    cin >> n;

    int *array = new int[n]; // Allocazione dinamica di un array

    for (int i = 0; i < n; i++) {
        array[i] = i * 2; // Inizializzazione
    }

    cout << "Valori nell'array: ";
    for (int i = 0; i < n; i++) {
        cout << array[i] << " ";
    }
    cout << endl;

    delete[] array; // Deallocazione della memoria
    return 0;
}
```


> [!warning] Nota
> Linguaggi di programmazione come Java, hanno un sistema chiamato Garbage Collector che libera automaticamente la memoria dinamica quando non serve, per cui gli oggetti creati dinamicamente liberano in modo automatico la memoria. C++ non ha questo sistema, quindi devo sempre ricordarmi di liberare la memoria con `delete` a meno che non utilizzo classi predefinite che sono già implementate per liberare la memoria.

## Capitolo 8: Strutture dati dinamiche di base
Ora che sappiamo come funziona la gestione della memoria, possiamo provare a costruire due nuove strutture dati che servono come base a strutture più complesse, i **vector** e le **liste**. Dopo aver creato la nostra versione personale, vediamo come utilizzare direttamente le librerie di C++ che le implementano.
### Vector
Ora che sappiamo come funziona la gestione della memoria e gli array dinamici, possiamo capire come funziona la classe vector in C++, e utilizzarla senza dover implementarne il codice.

> [!warning] Solo C++
> `std::vector` e `std::list` sono contenitori della libreria standard C++ e non sono disponibili in C. In C gli array dinamici si realizzano con `malloc`/`realloc`/`free`, mentre le liste si implementano esplicitamente con `struct` che contengono puntatori al nodo successivo.
#### Introduzione

In C++, il `vector` è una struttura dati della Standard Template Library (STL) che rappresenta un array dinamico. È progettato per offrire una gestione flessibile della memoria e funzionalità avanzate come la possibilità di ridimensionamento automatico, iterazione e accesso sicuro.

Un `vector` utilizza un'area di memoria allocata dinamicamente (sullo heap) per memorizzare i suoi elementi. Quando la dimensione (`size`) del vector supera la sua capacità (`capacity`), il vector rialloca un blocco di memoria più grande, copia gli elementi esistenti e dealloca la memoria precedente.

1. **Capacità e Dimensione**:
    - La **dimensione** (`size`) è il numero di elementi attualmente memorizzati nel vector.
    - La **capacità** (`capacity`) è lo spazio totale riservato in memoria. La riallocazione avviene quando la dimensione supera la capacità.
    
1. **Riallocazione**:
    - Durante la riallocazione, il vector alloca un nuovo blocco di memoria con una capacità maggiore (solitamente raddoppiata) e copia i dati esistenti nel nuovo blocco.

---

#### Metodi Principali di `std::vector`

1. **Inserimento di elementi**:
    - `push_back(value)`: Aggiunge un elemento alla fine del vector.
    - `emplace_back(args...)`: Costruisce un elemento direttamente nella posizione finale.
      
2. **Rimozione di elementi**:
    - `pop_back()`: Rimuove l'ultimo elemento.
    - `erase(iterator)`: Rimuove un elemento specificato o un intervallo di elementi.
    - `clear()`: Rimuove tutti gli elementi.
      
3. **Accesso agli elementi**:
    - `operator[]`: Accesso diretto tramite indice.
    - `at(index)`: Accesso con controllo dei limiti (lancia un'eccezione se l'indice è fuori dal range).
      
4. **Dimensione e Capacità**:
    - `size()`: Restituisce il numero di elementi attualmente contenuti.
    - `capacity()`: Restituisce la capacità allocata.
    - `resize(new_size)`: Modifica la dimensione del vector.
    - `reserve(new_capacity)`: Riserva memoria per almeno `new_capacity` elementi.
      
5. **Iterazione**:
    - Iteratori (`begin()`, `end()`, `rbegin()`, `rend()`): Permettono di scorrere gli elementi del vector.

---

#### Esempio di Utilizzo di `std::vector`

Ecco un esempio che illustra le funzionalità principali di un `std::vector`:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec; // Dichiarazione di un vector di interi

    // Aggiunta di elementi
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);

    // Visualizza gli elementi
    cout << "Elementi nel vector:" << endl;
    for (int i = 0; i < vec.size(); ++i) {
        cout << "Index " << i << ": " << vec[i] << endl;
    }

    // Modifica di un elemento
    vec[1] = 50;
    cout << "Dopo modifica: " << vec[1] << endl;

    // Rimozione dell'ultimo elemento
    vec.pop_back();
    cout << "Dopo pop_back, dimensione: " << vec.size() << endl;

    // Informazioni sulla capacità
    cout << "Capacità attuale: " << vec.capacity() << endl;

    return 0;
}
```

#### Equivalente C: array dinamico con capacità esplicita

In C il programmatore conserva puntatore, dimensione e capacità. Questa è la versione equivalente delle operazioni essenziali dell'esempio precedente:

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *dati;
    size_t dimensione;
    size_t capacita;
} Vettore;

int aggiungi(Vettore *v, int valore) {
    if (v->dimensione == v->capacita) {
        size_t nuova_capacita = v->capacita == 0 ? 4 : v->capacita * 2;
        int *nuovi_dati = realloc(v->dati, nuova_capacita * sizeof *nuovi_dati);
        if (nuovi_dati == NULL) return 0;
        v->dati = nuovi_dati;
        v->capacita = nuova_capacita;
    }
    v->dati[v->dimensione++] = valore;
    return 1;
}

int main(void) {
    Vettore v = {NULL, 0, 0};
    aggiungi(&v, 10); aggiungi(&v, 20); aggiungi(&v, 30);
    v.dati[1] = 50;
    v.dimensione--; /* equivalente di pop_back, se non vuoto */
    printf("Dimensione: %zu, capacità: %zu\n", v.dimensione, v.capacita);
    free(v.dati);
    return 0;
}
```

---

#### Esempio di Riallocazione

Questo esempio mostra come la capacità del vector cambia quando vengono aggiunti nuovi elementi:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec;

    cout << "Capacità iniziale: " << vec.capacity() << endl;

    for (int i = 0; i < 10; ++i) {
        vec.push_back(i);
        cout << "Aggiunto " << i << ", Capacità: " << vec.capacity() << ", Dimensione: " << vec.size() << endl;
    }

    return 0;
}
```

---

#### Conclusione

Il `std::vector` è uno strumento potente per la gestione dinamica della memoria in C++. La sua facilità d'uso e le funzionalità avanzate lo rendono una delle scelte principali per lavorare con array dinamici in C++ moderno.

---
#### Esercizi
> [!exercise] Esercizi
>
> 1. **Simulazione di sensori ambientali:**
>    Realizzare un programma che gestisca i dati raccolti da una serie di sensori di temperatura in una giornata. Ogni sensore registra un certo numero di letture (una ogni minuto, ad esempio). È utile usare un `std::vector` perché:
>
>    * il numero di letture cresce progressivamente ma in modo compatto, quindi serve un contenitore contiguo in memoria;
>
>    * si accede spesso alle letture per indice (per calcolare medie, massimi, minimi o differenze tra letture contigue);
>
>    * l’inserimento avviene solo in coda, non in mezzo come avverrebbe con una lista.
>
>    1. **Definire una struct `Sensor`** contenente almeno i campi:
>
>       ```cpp
>       struct Sensor {
>           string id;
>           vector<double> readings;
>       };
>       ```
>
>       Ogni sensore è identificato da un codice (`id`) e da un vettore di letture di temperatura.
>    2. **Creare un tipo vettore di sensori** denominato `SensorArray`:
>
>       ```cpp
>       typedef std::vector<Sensor> SensorArray;
>       ```
>    3. **Scrivere la funzione:**
>
>       ```cpp
>       void addSensor(SensorArray& A, string id);
>       ```
>
>       che aggiunge un nuovo sensore al sistema.
>    4. **Scrivere la funzione:**
>
>       ```cpp
>       void addReading(SensorArray& A, string id, double value);
>       ```
>
>       che aggiunge una lettura al sensore con identificativo `id`.
>    5. **Scrivere la funzione:**
>
>       ```cpp
>       void printSensor(const SensorArray& A, string id);
>       ```
>
>       che stampa tutte le letture del sensore richiesto.
>    6. **Scrivere la funzione:**
>
>       ```cpp
>       double averageReading(const SensorArray& A, string id);
>       ```
>
>       che calcola la temperatura media registrata da un sensore.
>    7. **Scrivere la funzione:**
>
>       ```cpp
>       double maxVariation(const SensorArray& A, string id);
>       ```
>
>       che restituisce la massima variazione tra due letture consecutive di un sensore (cioè il massimo valore assoluto di `readings[i+1] - readings[i]`).
>    8. **Scrivere la funzione:**
>
>       ```cpp
>       void exportAll(const SensorArray& A);
>       ```
>
>       che salva su file di testo i dati di tutti i sensori in un formato leggibile (uno per riga).
>    9. **Rendere il programma interattivo:**
>       Implementare un menù che permetta di:
>
>       * aggiungere sensori
>       * inserire letture
>       * visualizzare i dati di un sensore
>       * calcolare media e massima variazione
>       * esportare tutti i dati su file
>         L’uso di `std::vector` è ideale perché consente accesso diretto per indice, calcoli rapidi su dati contigui e gestione efficiente della memoria per grandi quantità di letture.

### Liste

Ora che abbiamo approfondito i vector, possiamo passare a un'altra struttura dati dinamica fondamentale: le **liste**. Le liste forniscono una flessibilità maggiore rispetto ai vector in alcuni scenari, come l'inserimento e la rimozione di elementi in posizioni arbitrarie, grazie al loro design basato sui nodi concatenati.

In C++, possiamo implementare le liste manualmente o utilizzare la classe `list` della Standard Template Library (STL), che rappresenta una lista doppiamente concatenata.

---

#### Introduzione alle Liste

Una lista è composta da nodi collegati tra loro e un puntatore al primo nodo chiamato testa. Ogni nodo contiene:

1. Un valore (o dato).
2. Un puntatore al nodo successivo (e, nel caso delle liste doppiamente concatenate, anche al nodo precedente).
![[69f41416a81ad9a60c624f37da4dd77d_MD5.jpeg]]
In C++ il singolo nodo viene rappresentato da questa struct:
```cpp
struct cell {
    int valore;
    cell* next;
};valore
```

Grazie a questa struttura, le liste mi permettono di allocare un singolo nodo e aggiungerlo, senza dover riall:

- Inserire o rimuovere elementi frequentemente.
- Evitare la riallocazione e il ridimensionamento automatico come nei vector, essendo un'operazione particolarmente pesante.

In C il nodo si dichiara riferendosi esplicitamente a `struct cell`; questa è anche una prima implementazione completa di inserimento e liberazione:

```c
#include <stdio.h>
#include <stdlib.h>

struct cell {
    int valore;
    struct cell *next;
};

int inserisci_testa(struct cell **testa, int valore) {
    struct cell *nuovo = malloc(sizeof *nuovo);
    if (nuovo == NULL) return 0;
    nuovo->valore = valore;
    nuovo->next = *testa;
    *testa = nuovo;
    return 1;
}

void stampa_e_libera(struct cell *testa) {
    while (testa != NULL) {
        struct cell *successivo = testa->next;
        printf("%d ", testa->valore);
        free(testa);
        testa = successivo;
    }
    printf("\n");
}

int main(void) {
    struct cell *testa = NULL;
    if (!inserisci_testa(&testa, 20) || !inserisci_testa(&testa, 10)) {
        stampa_e_libera(testa);
        return 1;
    }
    stampa_e_libera(testa);
    return 0;
}
```

---

#### Metodi Principali di `std::list`

1. **Inserimento di elementi**:
    
    - `push_back(value)`: Aggiunge un elemento alla fine della lista.
    - `push_front(value)`: Aggiunge un elemento all'inizio della lista.
    - `insert(iterator, value)`: Inserisce un elemento in una posizione specifica.
2. **Rimozione di elementi**:
    
    - `pop_back()`: Rimuove l'ultimo elemento.
    - `pop_front()`: Rimuove il primo elemento.
    - `erase(iterator)`: Rimuove un elemento in una posizione specifica.
    - `remove(value)`: Rimuove tutte le occorrenze di un valore.
3. **Accesso e Iterazione**:
    
    - `begin()`, `end()`: Restituiscono un iteratore agli estremi della lista.
    - `rbegin()`, `rend()`: Iteratori inversi per scorrere la lista al contrario.
4. **Manipolazione della lista**:
    
    - `size()`: Restituisce il numero di elementi.
    - `empty()`: Verifica se la lista è vuota.
    - `clear()`: Rimuove tutti gli elementi.
    - `sort()`: Ordina la lista.
    - `reverse()`: Inverte l'ordine degli elementi.

---

#### Esempio di Utilizzo di `list`

Ecco un esempio che mostra come utilizzare alcune funzionalità principali di `list`:

```cpp
#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> lista; // Dichiarazione di una lista di interi

    // Inserimento di elementi
    lista.push_back(10);
    lista.push_front(5);
    lista.push_back(20);

    // Stampa degli elementi
    cout << "Elementi nella lista: ";
    for (int valore : lista) {
        cout << valore << " ";
    }
    cout << endl;

    // Rimozione di un elemento
    lista.remove(10);

    // Stampa dopo rimozione
    cout << "Dopo rimozione: ";
    for (int valore : lista) {
        cout << valore << " ";
    }
    cout << endl;

    // Ordinamento e inversione
    lista.push_back(15);
    lista.sort();
    lista.reverse();

    // Stampa dopo ordinamento
    cout << "Dopo ordinamento e inversione: ";
    for (int valore : lista) {
        cout << valore << " ";
    }
    cout << endl;

    return 0;
}
```

**Output**:

```
Elementi nella lista: 5 10 20 
Dopo rimozione: 5 20 
Dopo ordinamento e inversione: 20 15 5 
```


> [!warning] Nota
> In questo esempio hai visto il costrutto `for (int valore : lista)`. Questo costrutto si chiama "for each" ("per ogni"), ed è un costrutto ad alto livello di astrazione che mi permette di scorrere direttamente gli elementi all'interno di una struttura dati come una lista, senza utilizzare esplicitamente i contatori. Ad ogni iterazione, `valore` conterrà direttamente il valore all'indice attuale. In italiano si tradurrebbe in `per ogni "valore" in "lista"`

---

#### Implementazione Manuale di una Lista  Semplice
Per comprendere meglio il funzionamento delle liste, possiamo implementarne una manualmente. In questo caso implementiamo una lista semplice, ovvero una lista in cui collego un elemento al prossimo (e non anche al precedente come accade nelle liste implementate in `list`).
In questo esempio mancano volutamente alcune funzioni, che dovrai implementare da solo per comprendere il funzionamento delle liste.

```cpp
#include <iostream>
using namespace std;

// Struttura di una cella della lista
struct cell {
    int value;   // Valore memorizzato
    cell* next;  // Puntatore alla cella successiva
};

// Funzione per creare una nuova cella
cell* createCell(int value) {
    cell* newCell = new cell; // Allocazione dinamica
    newCell->value = value;
    newCell->next = nullptr;
    return newCell;
}

// Funzione per aggiungere una cella all'inizio
void addFront(cell*& head, int value) {
    cell* newCell = createCell(value); // Crea una nuova cella
    newCell->next = head;              // Collegala alla testa attuale
    head = newCell;                    // Aggiorna la testa
}

// TODO Funzione per aggiungere una cella alla fine

// TODO Funzione per stampare la lista


// TODO Funzione per rimuovere una cella con un valore specifico

// Funzione per liberare tutta la memoria della lista
void deleteList(cell*& head) {
    while (head != nullptr) {
        cell* temp = head;
        head = head->next;
        delete temp;
    }
}

int main() {
	// TODO
    return 0;
}


```

> [!exercise] Esercizi
>
> 1. **Implementazione di una lista:**
>    Dopo aver studiato il funzionamento della classe `std::list` e le sue principali operazioni, implementarne una versione semplificata utilizzando nodi collegati dinamicamente. La lista così creata deve permettere almeno l’inserimento in testa e in coda, la cancellazione e la stampa. Più funzionalità si aggiungono, meglio è.
> 2. **Rubrica telefonica con lista:**
>    Implementare una libreria per la gestione di una rubrica telefonica utilizzando `struct` e `std::list`. Oltre alla definizione delle funzioni e dei tipi richiesti, scrivere un programma per testare le funzioni man mano che vengono realizzate.
>
>    *Suggerimento:* mantenere un unico `main` che si arricchisce via via, commentando i test già svolti invece di cancellarli, per poterli riutilizzare in caso di modifiche.
>
>    1. **Definire una struct `Contact_Str`** contenente almeno i campi `Name`, `Surname`, `PhoneNumber` (di un tipo appropriato).
>    2. **Creare un tipo lista di contatti** denominato `PhoneBook`, usando:
>
>       ```cpp
>       typedef std::list<Contact_Str> PhoneBook;
>       ```
>    3. **Scrivere la funzione:**
>
>       ```cpp
>       void add(PhoneBook& B, string surname, string name, int phoneNumber);
>       ```
>
>       per aggiungere un contatto `C` in coda alla rubrica `B` (usare `push_back`).
>    4. **Scrivere la funzione:**
>
>       ```cpp
>       void print(const PhoneBook& B);
>       ```
>
>       per stampare tutti i contatti presenti nella rubrica `B`.
>    5. **Scrivere la funzione:**
>
>       ```cpp
>       void sortSurnames(PhoneBook& B);
>       ```
>
>       che ordina la lista alfabeticamente per cognome, usando `B.sort()` con un comparatore personalizzato.
>    6. **Scrivere la funzione:**
>
>       ```cpp
>       PhoneBook::iterator findContact(PhoneBook& B, string surname);
>       ```
>
>       che restituisce un iteratore al contatto con cognome uguale a `surname`, oppure `B.end()` se non esiste.
>    7. **Scrivere la funzione:**
>
>       ```cpp
>       bool add_ord(PhoneBook& B, string surname, string name, int phoneNumber);
>       ```
>
>       che inserisce il nuovo contatto nella posizione corretta rispetto all’ordine alfabetico, mantenendo la lista ordinata.
>    8. **Scrivere la funzione:**
>
>       ```cpp
>       bool removeContact(PhoneBook& B, string surname);
>       ```
>
>       che rimuove il contatto corrispondente al cognome dato, se presente.
>    9. **Rendere il programma interattivo:**
>       Creare un menù che permetta di:
>
>       * aggiungere contatti (in fondo o ordinati)
>       * visualizzare la rubrica
>       * ordinare per cognome
>       * cercare o eliminare un contatto
>         Usare uno `switch` o un ciclo `while(true)` con menu numerato per gestire le scelte dell’utente.

---

### Vector o lista?
La scelta tra **`vector`** e **`list`** dipende dalle esigenze specifiche del programma e dal comportamento desiderato in termini di **accesso ai dati**, **inserimenti/rimozioni** e **performance**. Ecco una guida per capire quando utilizzare uno o l'altro.

---

#### Quando usare un `vector`

**Vantaggi principali dei vector**:

- **Accesso rapido agli elementi**: Grazie alla struttura contigua in memoria, è possibile accedere direttamente a qualsiasi elemento in tempo costante O(1).
- **Efficienza per iterazioni e operazioni sequenziali**: Poiché i dati sono memorizzati in modo contiguo, i vector beneficiano della **località spaziale**, migliorando le prestazioni della cache.

**Quando scegliere un vector**:

1. **Accesso casuale frequente**:
    
    - Se hai bisogno di accedere frequentemente a elementi specifici usando un indice.
    - Esempio: Un array di posizioni di un gioco in cui spesso accedi a elementi specifici.
2. **Inserimenti e rimozioni principalmente alla fine**:
    
    - Operazioni come `push_back` e `pop_back` sono molto efficienti.
3. **Dataset relativamente stabile**:
    
    - Se il dataset ha pochi inserimenti o rimozioni frequenti (soprattutto non nel mezzo), un vector è più efficiente.
4. **Uso intensivo della memoria**:
    
    - I vector hanno un overhead di memoria molto basso rispetto alle liste, poiché non hanno bisogno di puntatori aggiuntivi per collegare i nodi.

---

#### Quando usare una `list`

**Vantaggi principali delle liste**:

- **Inserimento e rimozione rapidi ovunque**: Grazie alla loro struttura basata su nodi, le liste permettono di aggiungere o rimuovere elementi in qualsiasi posizione in tempo costante se hai un iteratore valido.
- **Riorganizzazione semplice**: Operazioni come ordinamento, unione o spostamento di elementi tra liste sono molto efficienti.

**Quando scegliere una lista**:

1. **Inserimenti e rimozioni frequenti in posizioni arbitrarie**:
    
    - Se devi aggiungere o rimuovere elementi in posizioni arbitrarie frequentemente.
2. **Uso intensivo di iterazioni complesse**:
    
    - Se devi inserire o rimuovere elementi durante un'iterazione su una lista, le liste sono più sicure da usare rispetto ai vector (gli iteratori di una lista rimangono validi dopo inserimenti o rimozioni, salvo nei punti interessati).
3. **Ordine e spostamenti importanti**:
    
    - Se devi spesso riordinare o unire liste, ad esempio con `list::sort()` o `list::merge()`.
4. **Memoria non contigua**:
    
    - Se la memoria del sistema è frammentata e non puoi permetterti di allocare grandi blocchi contigui come quelli necessari ai vector.

---

#### Tabella riassuntiva

| **Caratteristica**            | **`std::vector`**                   | **`std::list`**                          |
| ----------------------------- | ----------------------------------- | ---------------------------------------- |
| **Accesso casuale**           | Veloce                              | Lento                                    |
| **Inserimento/rimozione**     | Alla fine                           | Ovunque                                  |
| **Iterazione sequenziale**    | Molto veloce                        | Lenta (a causa della località spaziale)  |
| **Uso di memoria**            | Efficiente (contiguo)               | Maggiore overhead (puntatori aggiuntivi) |
| **Riallocazione**             | Necessaria se supera la capacità    | Non necessaria                           |
| **Ordinamento**               | Inefficiente (richiede copia)       | Efficiente (modifica diretta)            |
| **Cache locality**            | Buona                               | Scarsa                                   |
| **Stabilità degli iteratori** | Invalidati da inserimenti/rimozioni | Stabili (salvo nodo interessato)         |

#### Regola generale

- **Usa un `std::vector`** per la maggior parte delle applicazioni, in particolare se le operazioni principali riguardano **accesso casuale** o **inserimenti/rimozioni alla fine**.
- **Usa una `std::list`** solo se devi fare molte operazioni di **inserimento/rimozione in posizioni arbitrarie** o hai bisogno di manipolare gli elementi in un ordine specifico frequentemente.

### Conclusione
Queste erano le due strutture di base più comuni, che ti permettono di capire come funzionano strutture più complesse come gli alberi o i grafi. Queste strutture più complesse dati non sono oggetto di questo corso.
## Conclusione
Questa dispensa ha offerto un percorso per apprendere e approfondire i concetti fondamentali della programmazione in C++. Grazie a queste basi potrai affrontare argomenti più complessi anche con altri linguaggi di programmazione, come la programmazione orientata agli oggetti, gli algoritmi e strutture dati più avanzate come alberi e grafi, programmazione multithread, librerie e framework per progetti complessi e specifici.
