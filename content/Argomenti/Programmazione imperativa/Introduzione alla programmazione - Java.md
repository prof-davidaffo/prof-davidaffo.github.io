## Siti e appunti consigliati e utilizzati
Per programmare senza dover installare nulla sul proprio computer, è possibile utilizzare **GitHub Codespaces**. Per farlo è necessario creare un account su GitHub. Dopo la registrazione, si può aprire un nuovo progetto (anche vuoto) e si avvierà una versione online di **Visual Studio Code**, uno degli ambienti di sviluppo più completi e gratuiti disponibili, che può essere scaricato e installato anche sul PC in versione desktop.  Include un terminale in ambiente linux che potete utilizzare per interagire con i file e compilare manualmente.
[https://github.com/codespaces](https://github.com/codespaces)

Per visualizzare in modo grafico cosa accade durante l’esecuzione di un programma, si può utilizzare **Python Tutor**. Nonostante il nome, questo strumento supporta anche Java, Java, JavaScript e altri linguaggi oltre a Python.  
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

Ora si traduce l'algoritmo in un linguaggio di programmazione, in questo caso Java:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Inserisci il primo numero: ");
        double numero1 = input.nextDouble();
        System.out.print("Inserisci il secondo numero: ");
        double numero2 = input.nextDouble();
        System.out.print("Inserisci il terzo numero: ");
        double numero3 = input.nextDouble();

        double somma = numero1 + numero2 + numero3;
        double media = somma / 3;

        System.out.println("La media è: " + media);
        input.close();
    }
}
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

#### Paradigmi di Programmazione  
Un **paradigma** definisce uno stile di programmazione. I principali paradigmi sono:  
1. **Programmazione Imperativa**: descrive *come* eseguire un'operazione (sequenza di istruzioni).  È il paradigma di programmazione utilizzato in questa dispensa.
2. **Programmazione Dichiarativa**: descrive *cosa* deve essere fatto (es. SQL).  
3. **Programmazione Funzionale**: basata sulle funzioni matematiche.  
4. **Programmazione Orientata agli Oggetti**: organizza il codice attorno a "oggetti" che combinano dati e funzioni (è una tipologia specifica di programmazione imperativa)

---

### Compilazione e Interpretazione
Per trasformare un programma scritto in un linguaggio ad alto livello in istruzioni eseguibili dal computer si usano **compilatori** e **interpreti**. Java utilizza entrambi i meccanismi.

#### Compilatore
Il compilatore Java, chiamato `javac`, controlla il codice sorgente e lo traduce in **bytecode**. Il bytecode non è ancora il linguaggio macchina di uno specifico processore: è un formato intermedio destinato alla **JVM** (*Java Virtual Machine*).

Il processo principale è quindi:

1. Scrittura del sorgente in un file con estensione `.java`.
2. Compilazione con `javac`.
3. Produzione di uno o più file `.class` contenenti bytecode.
4. Caricamento ed esecuzione del bytecode da parte della JVM.

> [!note] Portabilità
> Lo stesso file `.class` può essere eseguito su sistemi operativi e processori diversi, purché sia disponibile una JVM compatibile. Da qui deriva l'espressione *write once, run anywhere*.

##### Comando Completo
Se la classe pubblica si chiama `Main`, il file deve chiamarsi `Main.java`. Per compilarlo:

```bash
javac Main.java
```

Se la compilazione riesce viene creato `Main.class`.

##### Esecuzione
Per chiedere alla JVM di eseguire il metodo `main` della classe `Main`:

```bash
java Main
```

Non si scrive né l'estensione `.class` né `./`. Posso anche concatenare compilazione ed esecuzione:

```bash
javac Main.java && java Main
```

> [!warning] Maiuscole e minuscole
> Java distingue le maiuscole dalle minuscole: `Main`, `main` e `MAIN` sono nomi diversi. Anche il nome del file deve rispettare esattamente quello della classe pubblica.

#### Errori sintattici e semantici

Quando il compilatore trova un errore, mostra in genere il **file**, la **riga**, una descrizione del problema e il punto del codice in cui lo ha rilevato. Come punto di partenza consideriamo questo programma Java corretto, che calcola la somma di due numeri:

```java
public class Somma {
    public static void main(String[] args) {
        int a = 7;
        int b = 5;
        int somma = a + b;

        System.out.println("La somma è: " + somma);
    }
}
```

Salvato come `Somma.java`, il programma si può compilare ed eseguire con:

```bash
javac Somma.java && java Somma
```

L'output è:

```text
La somma è: 12
```

##### Errore sintattico

La **sintassi** è l'insieme delle regole che stabiliscono come devono essere scritte le istruzioni. Un errore sintattico si verifica quando il codice non rispetta la grammatica del linguaggio, per esempio se manca il punto e virgola:

```java
int b = 5 // manca ;
int somma = a + b;
```

Una forma tipica del messaggio di `javac` è:

```text
Somma.java:4: error: ';' expected
        int b = 5
                 ^
1 error
```

- `Somma.java:4` indica il file e la riga in cui il compilatore ha rilevato il problema;
- `error` indica che la compilazione non può proseguire;
- `';' expected` significa che il compilatore si aspettava un punto e virgola;
- il simbolo `^` indica il punto del codice vicino all'errore.

Per correggerlo bisogna aggiungere `;` dopo `int b = 5`.

##### Errore semantico

La **semantica** riguarda il significato del programma, cioè ciò che il programma effettivamente fa. Un errore semantico si verifica quando le istruzioni sono scritte correttamente, ma non realizzano l'operazione richiesta. Per esempio, sostituiamo per errore l'addizione con una sottrazione:

```java
int somma = a - b;
```

Questa istruzione rispetta tutte le regole di Java: le variabili sono dichiarate, i tipi sono compatibili e l'operatore `-` può essere applicato a due interi. Di conseguenza il compilatore **non mostra alcun errore** e crea normalmente il file `Somma.class`. Quando però eseguiamo il programma, otteniamo:

```text
La somma è: 2
```

Il risultato atteso era `12`, ma il programma calcola `7 - 5`. Il compilatore non può sapere che volevamo eseguire una somma: controlla che il codice rispetti le regole del linguaggio, non che risolva il problema desiderato. Per trovare questo tipo di errore bisogna quindi verificare l'output con dati di prova e confrontarlo con il risultato atteso.

In questa dispensa useremo quindi **errore semantico** ed **errore logico** come sinonimi per indicare un programma formalmente valido che produce un risultato diverso da quello richiesto.

I messaggi degli errori sintattici possono cambiare leggermente in base alla versione del compilatore. Inoltre, un primo errore può provocare altri messaggi a cascata: conviene correggere gli errori partendo sempre dal primo e poi ricompilare.

#### Interprete e JVM
La JVM carica e verifica il bytecode, quindi lo esegue. Le JVM moderne possono anche usare la compilazione **JIT** (*Just-In-Time*): le parti eseguite più spesso vengono tradotte in codice macchina durante l'esecuzione per migliorarne le prestazioni.

#### Compilato vs interpretato

- **Java**: il sorgente viene compilato in bytecode, poi il bytecode viene eseguito dalla JVM e può essere compilato JIT.
- **C/C++**: normalmente il sorgente viene compilato direttamente in codice macchina per una specifica piattaforma.
- **Python**: normalmente il programma viene affidato all'interprete, che gestisce l'esecuzione senza richiedere all'utente una compilazione esplicita.

---

### Il nostro primo programma
Vediamo il classico esempio **"Hello, World!"** in Java.

#### Esempio in Java
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
1. Salviamo il codice in `Main.java`.
2. Compiliamo con `javac Main.java`.
3. Eseguiamo con `java Main`.
4. Se tutto è andato a buon fine, vedremo a schermo la scritta
```
Hello, World!
```

Al momento, possiamo prendere per buone alcune delle cose scritte nel codice, che vedremo nel dettaglio andando più avanti nel corso:

1. **`public class Main`**:
   - Dichiara una classe chiamata `Main`.
   - `public` indica che la classe è accessibile anche dall'esterno del file.
   - Il codice Java è organizzato all'interno di classi.
2. **`public static void main(String[] args)`**:
   - È il punto di ingresso del programma.
   - `public` permette alla JVM di richiamarlo.
   - `static` permette di eseguirlo senza creare prima un oggetto `Main`.
   - `void` indica che il metodo non restituisce un valore.
   - `String[] args` contiene gli eventuali argomenti passati da terminale.
3. **`System.out.println(...)`**:
   - `System.out` rappresenta l'uscita standard, normalmente il terminale.
   - `println` stampa il valore tra parentesi e poi va a capo.
   - `"Hello, World!"` è una stringa letterale.
4. **Parentesi graffe e punto e virgola**:
   - Le parentesi graffe delimitano la classe e il metodo.
   - Il punto e virgola conclude l'istruzione di stampa.

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

Esempio semplice in **Java**:

```java
public class Main {

public static void main(String[] args) {
    int a = 5;        // Dichiarazione di una variabile
    a = a + 3;        // Modifica dello stato
    System.out.println(a); // Stampa: 8
}
}
```

--- 
### Commenti
Come abbiamo già visto nell'esempio prima, nel codice posso inserire dei "commenti". I commenti sono cose che io posso scrivere nel codice senza che queste vengano considerate dal compilatore. Posso quindi usarli per annotare cose, descrivere il funzionamento di parti di codice (senza esagerare), o per disabilitare temporaneamente parti di codice che non voglio che siano eseguite per debugging (il **debugging** è quella fase in cui testo il programma per cercare errori all'interno del codice e correggerli).
Per fare un commento in una linea aggiungiamo `//` prima del commento, per farlo multilinea dobbiamo racchiudere il commento tra `/*` e `*/` come si vede nel prossimo esempio:
```java
public class Main {

public static void main(String[] args) {
    int a = 5;        // Questo è un commento
    a = a + 3;
    // Anche questo è un commento
    System.out.println(a);
    // System.out.println("Ciao!"); <- questa linea di codice non viene eseguita
    /* questo è
	un commento su più
	linee */
}
}
```

---

### Variabili e tipi di dati in Java
Immagina di avere un **cassetto** in cui puoi mettere un oggetto. Quel cassetto ha un’etichetta con un nome, che mi deve dare idea di quale oggetto ci possa trovare dentro.
Puoi aprire il cassetto, mettere un oggetto dentro, cambiarlo ecc...

Le **variabili** sono  appunto contenitori per memorizzare dati. Ogni variabile ha un **tipo di dato** che definisce il tipo di valore che può contenere e un nome che le identifica univocamente. Questo consente di organizzare e manipolare i dati all'interno di un programma in modo efficiente.
#### Tipi di dati principali in Java

| Tipo     | Descrizione                          | Esempio di assegnazione |
| -------- | ------------------------------------ | ----------------------- |
| `int`    | Numeri interi                        | `int a = 5;`            |
| `float`  | Numeri decimali (precisione singola) | `float b = 3.14f;`      |
| `double` | Numeri decimali (alta precisione)    | `double c = 2.718;`     |
| `char`   | Carattere singolo                    | `char d = 'A';`         |
| `String` | Sequenza di caratteri                | `String s = "Ciao";`    |
| `boolean`| Valori booleani (vero/falso)         | `boolean e = true;`     |

> [!note] Tipi primitivi e tipi riferimento
> `int`, `float`, `double`, `char` e `boolean` sono tipi primitivi. `String` è invece una classe: una variabile di tipo `String` contiene un riferimento a un oggetto. Approfondiremo questa differenza nel capitolo sulla memoria.
#### Dichiarazione e assegnazione
Una variabile deve essere dichiarata specificando il tipo e il nome. L'assegnazione consiste nell'attribuire un valore alla variabile:

```java
int numero;
numero = 10; // Assegnazione
```

Oppure dichiarazione e assegnazione possono essere combinate:

```java
int numero = 10;
```

Assegnazioni possono essere effettuate anche da altre variabili o espressioni:

```java
int a = 5;
int b = a; // Assegnazione da un'altra variabile
int c = a + b; // Assegnazione da un'espressione
```

Posso anche creare delle costanti, per valori che non voglio che siano cambiati dopo l'inizializzazione:
```java
final double PI = 3.14159;
```
####   Operazioni di base sulle variabili

#####   1. Assegnazione di un valore

Metti un oggetto dentro il cassetto.

```java
String cassetto = "maglietta";  // Il cassetto ora contiene una maglietta
```

🔹 **Esempio pratico:** Apri il cassetto e metti dentro una **maglietta**.

Se poi vuoi cambiarlo:

```java
cassetto = "pantaloni";  // Ora il cassetto contiene pantaloni
```

🔹 **Hai tolto la maglietta e messo dei pantaloni al suo posto.**

---

#####   2. Incremento (o decremento) di una variabile

Se il cassetto contiene qualcosa che può essere **aumentato o diminuito** (ad esempio, un numero di monete), possiamo modificarlo.

```java
int monete = 5;
monete = monete + 1;  // Ora il cassetto contiene 6 monete
monete = monete - 1;  // Ora il cassetto contiene 5 monete di nuovo
```

🔹 **Hai messo una moneta in più nel cassetto, poi ne hai tolta una.**

Java fornisce operatori che combinano assegnazione e operazioni (notate che non sono limitato ad addizioni e sottrazioni):

```java
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

```java
String cassetto = "maglietta";
cassetto = "giacca";  // Ora il cassetto contiene una giacca
```

🔹 **Hai tolto la maglietta e ci hai messo una giacca.**

---
#####   4. Assegnazione del valore di una variabile a un’altra

Prendi il contenuto di un cassetto e lo copi in un altro.

```java
String cassetto1 = "calzini";
String cassetto2 = cassetto1;  // Ora il secondo cassetto contiene anch'esso "calzini"
```

🔹 **Hai aperto un secondo cassetto e ci hai messo dentro gli stessi calzini che erano nel primo (entrambi ora contengono gli stessi calzini, magia).**

Se ora cambi il contenuto di `cassetto1`,  quello di `cassetto2` non cambia:

```java
cassetto1 = "cintura";  
// cassetto2 contiene ancora "calzini", perché abbiamo cambiato solo il primo cassetto.
```

---

#####   5. Scambio di valore tra due variabili
Hai due bicchieri, uno contente dell'acqua e uno contenente la coca cola. Come fai a scambiare il contenuto dei due bicchieri senza mischiarli?

```java
String bicchiere1 = "acqua";
String bicchiere2 = "cola";
String bicchiere3 = bicchiere1;  // Usiamo un bicchiere aggiuntivo per versarci l'acqua
bicchiere1 = bicchiere2;    // Versiamo la cola dal bicchiere 1 al bicchiere 2
bicchiere2 = bicchiere3;         // Versiamo l'acqua dal bicchiere 3 al bicchiere 2
```

🔹 **Hai preso l'acqua, e l'hai versata in un terzo bicchiere. Ora puoi versare la cola nel primo bicchiere, e a questo punto prendere l'acqua del terzo bicchiere e metterla nel secondo**
(In realtà, se ci pensi, non è esattamente quello che accade quando lavori con le variabili, cosa succede in realtà nel programma?)

Se hai solo dei numeri, puoi provare a scambiarli senza usare una terza variabile!

```java
int a = 5, b = 10;
a = a + b;  // a = 15
b = a - b;  // b = 5
a = a - b;  // a = 10
```

#### Esempio completo in Java

Un esempio di utilizzo delle variabili e dei tipi di dato principali:

```java
public class Main {

public static void main(String[] args) {
    int a = 8, b = 3;
    int somma = a + b;
    int prodotto = a * b;
    
    a += 2; // Incremento combinato

    String nome = "Mario";
    String saluto = "Ciao, " + nome;

    System.out.println("Somma: " + somma);
    System.out.println("Prodotto: " + prodotto);
    System.out.println("Nuovo valore di a: " + a);
    System.out.println(saluto);
}
}
```
Da questo esempio notiamo come posso anche "sommare" le stringhe. In verità questa operazione si chiama concatenazione, e unisce due stringhe in una stringa unica.

---

### Input e Output da console

Per **interagire con l’utente**, utilizziamo `System.out.print`/`println` per l'output e, negli esempi iniziali, un oggetto `Scanner` per l'input.

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero;
    System.out.print("Inserisci un numero: ");
    numero = input.nextInt();
    System.out.println("Hai inserito: " + numero);
    input.close();
}
}
```

`new Scanner(System.in)` crea un lettore collegato alla tastiera. Il metodo `nextInt()` legge un intero; esistono anche `nextDouble()`, `nextBoolean()`, `next()` per una parola e `nextLine()` per un'intera riga. Nell'output, l'operatore `+` concatena stringhe e valori.

> [!warning] `nextInt()` e `nextLine()`
> I metodi numerici non consumano il carattere di fine riga. Se subito dopo un `nextInt()` uso `nextLine()`, può essere necessario chiamare una prima volta `nextLine()` per consumare l'Invio rimasto nel buffer.

 #### Caratteri speciali nelle stringhe

Quando utilizzi `System.out.print` o `System.out.println`, puoi includere caratteri speciali usando il carattere di escape `\` per rappresentare simboli o comportamenti particolari. Ecco un elenco dei più comuni:

| Carattere speciale | Significato             | Esempio                            | Output              |
| ------------------ | ----------------------- | ---------------------------------- | ------------------- |
| `\n`               | Nuova riga              | `System.out.print("Ciao\nMondo");` | Ciao<br>Mondo       |
| `\t`               | Tabulazione orizzontale | `System.out.print("Ciao\tMondo");` | Ciao     Mondo      |
| `\\`               | Barra rovesciata (`\`)  | `System.out.print("C:\\Documenti");` | C:\Documenti     |
| `\'`               | Apice singolo           | `System.out.print("L'utente");`     | L'utente            |
| `\"`               | Apice doppio            | `System.out.print("\"Java\"");`  | "Java"              |


---

**Esempi pratici**:

```java
public class Main {

public static void main(String[] args) {
    System.out.print("Esempio di nuova riga:\n");
    System.out.println("Ciao\nMondo");
    System.out.print("\nEsempio di tabulazione:\n");
    System.out.println("Ciao\tMondo");
    System.out.print("\nEsempio di barra rovesciata:\n");
    System.out.println("Percorso: C:\\Documenti\\File");
    System.out.print("\nEsempio di apici:\n");
    System.out.println("L'utente ha detto: \"Java è fantastico!\"");
    System.out.print("\nEsempio di ritorno a capo:\n");
    System.out.println("12345\rABC"); // Ritorna a inizio riga e sovrascrive
}
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
L'utente ha detto: "Java è fantastico!"

Esempio di ritorno a capo:
ABC45
```

---

### Operazioni aritmetiche

Le **operazioni aritmetiche** in Java seguono i simboli standard:

| Operazione      | Simbolo | Esempio | Risultato |
| --------------- | ------- | ------- | --------- |
| Addizione       | `+`     | `5 + 3` | `8`       |
| Sottrazione     | `-`     | `5 - 3` | `2`       |
| Moltiplicazione | `*`     | `5 * 3` | `15`      |
| Divisione       | `/`     | `6 / 3` | `2`       |
| Modulo          | `%`     | `5 % 3` | `2`       |


```java
public class Main {

public static void main(String[] args) {
    int a = 10, b = 3;

    System.out.println("Addizione: " + (a + b));
    System.out.println("Sottrazione: " + (a - b));
    System.out.println("Moltiplicazione: " + (a * b));
    System.out.println("Divisione: " + (a / b));
    System.out.println("Modulo: " + (a % b));
}
}
```

In questo esempio notiamo come posso anche inserire direttamente delle espressioni nell'output. Le parentesi sono importanti: senza di esse `"Addizione: " + a + b` concatenerebbe i valori da sinistra a destra e produrrebbe `Addizione: 103`.

---

### Esempio completo: somma di due numeri

Ecco un esempio che utilizza **input**, **operazioni aritmetiche** e **output**.

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int num1, num2, somma;

    // Input
    System.out.print("Inserisci il primo numero: ");
    num1 = input.nextInt();
    System.out.print("Inserisci il secondo numero: ");
    num2 = input.nextInt();
    // Operazione
    somma = num1 + num2;

    // Output
    System.out.println("La somma è: " + somma);
    input.close();
}
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

Le condizioni Java devono produrre un valore `boolean`. Le forme principali sono `if`, `else if`, `else`, `switch` e l'operatore ternario.

#### L'istruzione `if`  
La struttura `if` consente di eseguire un blocco di codice solo se una condizione è **vera**.  

**Sintassi**:  
```java
if (condizione) {
    // Blocco di codice eseguito se la condizione è vera
}
```

**Esempio**:  Questo programma stampa `Il numero è positivo.` solo se l'utente inserisce un numero maggiore di zero.
```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero;
    System.out.print("Inserisci un numero: ");
    numero = input.nextInt();
    if (numero > 0) { // Condizione
        System.out.println("Il numero è positivo."); // blocco di codice eseguito solo se la condizione è soddisfatta
    }
}
}
```

---

#### L'istruzione `if-else`  
L'istruzione `if-else` aggiunge un **percorso alternativo** se la condizione è falsa.
```java
if (condizione) {
    // Codice eseguito se la condizione è vera
} else {
    // Codice eseguito se la condizione è falsa
}
```

> [!warning] Nota
> Quando utilizziamo delle espressioni logiche (le useremo soprattutto all'interno delle condizioni), dobbiamo ricordarci che "diverso da" si indica con `!=` e "uguale a" si indica con `==`. Il singolo `=` serve esclusivamente per fare le assegnazioni, quindi ha un significato diverso da quello matematico, che per noi è il doppio uguale.

**Esempio**:  
```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero;
    System.out.print("Inserisci un numero: ");
    numero = input.nextInt();
    if (numero % 2 == 0) { 
        System.out.println("Il numero è pari.");
    } else {
        System.out.println("Il numero è dispari.");
    }
}
}
```


> [!exercise] Esercizio
> Cosa ti aspetti che succeda se togli il blocco `else` e metti `System.out.println("Il numero è dispari.");` fuori dal blocco `if`?


---

#### L'istruzione `if-else if`  
Quando si devono valutare **più condizioni**, si utilizza l'istruzione `if-else if`.  

**Sintassi**:  
```java
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
```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero;
    System.out.print("Inserisci un numero: ");
    numero = input.nextInt();
    if (numero > 0) {
        System.out.println("Il numero è positivo.");
    } else if (numero < 0) {
        System.out.println("Il numero è negativo.");
    } else {
        System.out.println("Il numero è zero.");
    }
}
}
```

---

#### L'istruzione `switch`  
L'istruzione `switch` è simile a una catena `if-else if` ed è utile quando si confronta il valore di un'espressione con più **casi specifici**.  

**Sintassi**:  
```java
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
```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int giorno;
    System.out.print("Inserisci un numero (1-7) per il giorno della settimana: ");
    giorno = input.nextInt();
    switch (giorno) {
		case 1:
        	System.out.println("Lunedì");
        	break;
        case 2:
        	System.out.println("Martedì");
        	break;
        case 3:
        	System.out.println("Mercoledì");
        	break;
        case 4:
        	System.out.println("Giovedì");
        	break;
        case 5:
        	System.out.println("Venerdì");
        	break;
        case 6:
        	System.out.println("Sabato");
        	break;
        case 7:
        	System.out.println("Domenica");
        	break;
        default:
        	System.out.println("Numero non valido!");
    }
}
}
```

Il `break` (che posso anche usare per interrompere manualmente un ciclo) è necessario ad ogni istruzione in questo caso, poiché lo switch esegue l'istruzione corrispondente al valore, ma poi esegue anche tutte quelle sottostanti. In rari casi posso omettere il `break` se questo comportamento è voluto.

> [!exercise] Esercizio
> Nel codice precedente, prova a rimuovere i break e guarda cosa succede.

#### Operatore ternario
L’operatore ternario è una forma compatta dell’istruzione condizionale `if-else`, che permette di scegliere tra due espressioni in base al risultato di una condizione logica.
La sintassi è:
```java
condizione ? espressione_se_vera : espressione_se_falsa;
```
Quando la **condizione** è vera, viene valutata e restituita l’**espressione_se_vera**; se invece è falsa, viene valutata e restituita l’**espressione_se_falsa**.
##### Esempio di utilizzo
```java
int x = -7;
int absValue = (x >= 0) ? x : -x;
```
In questo esempio, se `x` è maggiore o uguale a zero, `absValue` assume il valore di `x`; altrimenti, ne assume l’opposto.
##### Equivalente con if-else
```java
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

- **0** viene usato nella tabella per rappresentare **false (falso)**
- **1** viene usato nella tabella per rappresentare **true (vero)**

| A   | B   | A AND B | A OR B | NOT A |
| --- | --- | ------- | ------ | ----- |
| 0   | 0   | 0       | 0      | 1     |
| 0   | 1   | 0       | 1      | 1     |
| 1   | 0   | 0       | 1      | 0     |
| 1   | 1   | 1       | 1      | 0     |
I connettivi logici di base funzionano come nel linguaggio naturale:
- **AND (`&&`)**: è vero solo se entrambe le espressioni sono vere.
- **OR (`||`)**: è vero se almeno una delle espressioni è vera.
- **NOT (`!`)**: inverte il valore di verità dell'espressione.

Come gli operatori matematici, anche quelli logici hanno precedenze diverse: `!`, poi `&&`, poi `||`. Nell'espressione `A || B && !C` viene valutato prima `!C`, poi `B && !C` e infine il risultato viene messo in OR con `A`.
Posso usare le parentesi come nelle espressioni matematiche per cambiare le precedenze, ricorda tuttavia che posso usare solo parentesi tonde anche una dentro l'altra (graffe e quadre servono per altre cose).

---

#### Esempi pratici in Java

1. **Condizione con AND (`&&`)**:

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int eta;
    System.out.print("Inserisci la tua età: ");
    eta = input.nextInt();
    if (eta >= 18 && eta <= 65) {
        System.out.println("Sei in età lavorativa.");
    } else {
        System.out.println("Non sei in età lavorativa.");
    }
}
}
```

2. **Condizione con OR (`||`)**:

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    char lettera;
    System.out.print("Inserisci una lettera: ");
    lettera = input.next().charAt(0);
    if (lettera == 'a' || lettera == 'e' || lettera == 'i' || lettera == 'o' || lettera == 'u') {
        System.out.println("Hai inserito una vocale!");
    } else {
        System.out.println("Non è una vocale.");
    }
}
}
```

3. **Uso del NOT (`!`)**:

```java
public class Main {

public static void main(String[] args) {
    boolean piove = true; // posso salvare valori (anche risultati di espressioni) booleani in variabili di tipo boolean

    if (!piove) {
        System.out.println("Esco senza ombrello.");
    } else {
        System.out.println("Porto l’ombrello.");
    }
}
}
```

---

#### Combinare più condizioni

Puoi combinare più espressioni logiche per creare condizioni ancora più complesse

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int a, b;
    System.out.println("Inserisci a e b");
    a = input.nextInt();
    b = input.nextInt();
    if ((a > 0 && b > 0) || a == b) {
        System.out.println("Le condizioni sono soddisfatte.");
    } else {
        System.out.println("Le condizioni NON sono soddisfatte.");
    }
}
}
```


> [!exercise] Esercizio
> Come faccio in questo codice a soddisfare la condizione inserendo in input due numeri negativi?


---
#### Boolean playground

Sperimenta liberamente con questo codice per capire come funzionano le espressioni booleane (e rispetta i miei capelli):

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // == significa uguale, != significa diverso.
        // Attenzione: = esegue invece un'assegnazione.
        System.out.println("L'espressione 1 == 3 vale: " + (1 == 3));
        System.out.println("L'espressione 1 == 1 vale: " + (1 == 1));
        System.out.println("L'espressione 1 != 3 vale: " + (1 != 3));
        System.out.println("L'espressione 1 != 1 vale: " + (1 != 1));
        System.out.println("L'espressione 1 < 3 vale: " + (1 < 3));
        System.out.println();

        boolean capelliScuri = true;
        boolean capelliCorti = true;

        System.out.println(
            "Il prof ha i capelli corti e scuri: "
            + (capelliCorti && capelliScuri)
        );
        System.out.println(
            "Il prof ha i capelli corti e biondi: "
            + (capelliCorti && !capelliScuri)
        );
        System.out.println(
            "Il prof ha i capelli lunghi o scuri: "
            + (!capelliCorti || capelliScuri)
        );

        int primaRisposta;
        int secondaRisposta;
        boolean primaVolta = true;

        do {
            if (!primaVolta) {
                System.out.println("Risposta errata, riprova!");
            }
            primaVolta = false;

            System.out.println("Di che lunghezza sono i capelli del prof?");
            System.out.println("1) Corti");
            System.out.println("2) Lunghi");
            primaRisposta = input.nextInt();

            System.out.println("Di che colore sono i capelli del prof?");
            System.out.println("1) Biondi");
            System.out.println("2) Scuri");
            secondaRisposta = input.nextInt();
        } while (!(primaRisposta == 1 && secondaRisposta == 2));

        System.out.println("Risposta esatta!");
        input.close();
    }
}
```

> [!warning] Nota
> Nel codice è presente un ciclo `do-while`, che sarà il prossimo argomento, e vengono combinate più espressioni booleane con le parentesi.

#### Esercizio su espressioni booleane
Questo esercizio permette di sperimentare con l'algebra booleana e anche di capire alcuni fondamenti di programmazione:

> [!exercise] Esercizio
> Scrivere un programma che, per ciascuna di queste frasi, stampa la frase seguita dal simbolo = e da un’espressione booleana che calcola il suo valore di verità.
> 
> > [!hint] Suggerimento
> > In Java `System.out.println` stampa direttamente i valori `boolean` come `true` o `false`.
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

```java
for (inizializzazione; condizione; aggiornamento) {
    // Blocco di codice da ripetere
}
```
* **Inizializzazione**: viene eseguita una sola volta all’inizio del ciclo.
* **Condizione**: viene valutata all’inizio di ogni iterazione; se è falsa, il ciclo termina.
* **Aggiornamento**: viene eseguito alla fine di ogni iterazione.
##### Esempio: stampare i numeri da 0 a 5
```java
public class Main {
public static void main(String[] args) {
    for (int i = 0; i <= 5; i++) {
        System.out.print(i + " ");
    }
    System.out.println();
}
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
```java
for (int i = 10; i >= 1; i--) {
    System.out.print(i + " ");
}
```
> 🔎 In questo caso la condizione (`i >= 1`) è un **limite minimo**, e l’aggiornamento è un **decremento** (`i--`).
---
###### 2. Incrementi personalizzati
Si può aumentare il valore della variabile di controllo con passi diversi da 1:
```java
for (int i = 0; i <= 100; i += 10) {
    System.out.print(i + " ");
}
```
> 🔎 In questo esempio l’incremento è di 10 ad ogni iterazione (`i += 10`).
---
###### 3. Condizione basata su espressioni più complesse
La condizione non deve necessariamente essere un confronto contro un valore fisso: può anche dipendere da espressioni o funzioni.
```java
for (int i = 1; i * i <= 100; i++) {
    System.out.println("Quadrato: " + i * i);
}
```
> 🔎 Il ciclo continua finché il **quadrato** di `i` è minore o uguale a 100.
---
###### Per concludere
Le tre sezioni del ciclo `for` (inizializzazione; condizione; aggiornamento) **non sono rigide**, ma possono essere adattate liberamente alle esigenze del problema. È importante imparare a riconoscere quando conviene usare schemi diversi da quelli più comuni.
> 💡 **Nota**: in casi estremi, è anche possibile **omettere** una o più parti del `for`, ma solo se strettamente necessario. Ad esempio:
```java
for ( ;; ) {
    System.out.println("ciao");
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
```java
while (condizione) {
    // Blocco di codice da ripetere
}
```
##### Esempio: chiedere il numero 5 finché non viene inserito
```java
import java.util.Scanner;

public class Main {
public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero = 3;
    while (numero != 5) {
        System.out.print("Inserisci il numero 5: ");
        numero = input.nextInt();
    }
    System.out.println("Finalmente!");
    input.close();
}
}
```

> [!warning] Nota
> In questo esempio ho inizializzato `numero` a `3` per essere sicuro di entrare nel ciclo. In Java una variabile locale deve essere inizializzata prima di poter essere letta: altrimenti il compilatore segnala un errore.
#### Il ciclo `do-while` (ciclo post-condizionale)
Il ciclo `do-while` esegue il blocco **almeno una volta**, poiché la condizione viene valutata **dopo** l’esecuzione del blocco.
#### Sintassi
```java
do {
    // Blocco di codice da ripetere
} while (condizione);
```
#### Esempio: inserire un numero fino a che non è uguale a 5
```java
import java.util.Scanner;

public class Main {
public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    int numero;
    do {
        System.out.print("Inserisci il numero 5: ");
        numero = input.nextInt();
    } while (numero != 5);
    System.out.println("Finalmente!");
    input.close();
}
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
Il ciclo `for` serve quando conosco a priori quante iterazioni farò; il numero può dipendere da una costante, una variabile o un'espressione.
I cicli `do-while` e `while` servono quando non conosco a priori il numero di iterazioni, in particolare:
- `while` quando il blocco potrebbe non dover essere eseguito neanche una volta;
- `do-while` quando serve almeno un'esecuzione prima del controllo, per esempio in un menu o nella richiesta di una password.
#### `break` e `continue` nei cicli

All'interno di un ciclo, posso utilizzare i comandi `break` e `continue` per controllare il flusso di esecuzione in modo più preciso.

**Il comando `break`**  
`break` interrompe immediatamente l'esecuzione del ciclo, uscendo completamente da esso indipendentemente dalla condizione. È utile quando voglio fermare un ciclo manualmente per qualche motivo.

**Esempio**: Chiedere all'utente se vuole continuare o uscire dal ciclo.

```java
import java.util.Scanner;

public class Main {

public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
    for (int i = 1; i <= 100; i++) { // Ciclo che può teoricamente contare fino a 100
        System.out.println(i);
        char scelta;
        System.out.print("Vuoi continuare? (s/n): ");
        scelta = input.next().charAt(0);
        if (scelta == 'n' || scelta == 'N') {
            System.out.println("Hai scelto di uscire dal ciclo.");
            break; // Esce dal ciclo
        }
    }
    input.close();
}

}
```

> [!exercise] Esercizio
> Riesci a usare la variabile `scelta` dopo che sei uscito dal ciclo? Come mai? Approfondisci sugli "scopes" delle variabili per avere una risposta.

**Il comando `continue`**  
`continue` interrompe l'iterazione corrente e salta direttamente alla successiva. È utile quando voglio ignorare il resto del blocco di codice per una determinata condizione, ma continuare il ciclo.

**Esempio**: Stampare solo numeri dispari.

```java
public class Main {

public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue; // Salta il resto del codice in questa iterazione
        }
        System.out.print(i + " ");
    }
}
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
   Per generare un numero casuale, prova a cercare sulla documentazione di Java come si fa.
>4. **Numero primo**  
   Scrivi un programma che chiede all'utente di inserire un numero intero e verifica se è un numero primo. 
>5. **Fibonacci**  
   Scrivi un programma che calcola e stampa i primi `n` numeri della sequenza di Fibonacci. `n` è dato in input dall’utente. 

---

## Capitolo 4: Strutture Dati di Base  

### Introduzione  
Le **strutture dati** sono entità usate per organizzare **insiemi di dati** nella memoria in modo strutturato. Nel paradigma imperativo in **Java**, le strutture dati di base includono:  
1. **Array**  
2. **Stringhe**  
3. **Classi usate come strutture dati**  

In questo capitolo analizzeremo ciascuna di queste strutture, mostrando esempi pratici di implementazione.
### Array in Java

Gli **array** permettono di memorizzare una sequenza di valori dello stesso tipo. Hanno una lunghezza stabilita al momento della creazione e gli elementi sono identificati da indici che partono da `0`.

---

#### Dichiarazione e inizializzazione

La sintassi consigliata mette le parentesi quadre accanto al tipo:

```java
tipo[] nomeArray;
```

Per creare un array di una certa dimensione uso `new`:

```java
int[] numeri = new int[5];
```

Posso anche specificare subito i valori; in questo caso Java ricava la lunghezza:

```java
int[] voti = {8, 9, 10};
double[] decimali = {1.2, 3.4, 5.6, 7.8};
char[] lettere = {'A', 'B', 'C'};
```

Gli elementi creati con `new` ricevono un valore iniziale predefinito:

| Tipo degli elementi | Valore iniziale |
| --- | --- |
| tipi numerici | `0` o `0.0` |
| `boolean` | `false` |
| `char` | carattere con codice zero (`'\0'`) |
| oggetti e array | `null` |

> [!warning] Lunghezza fissa
> Dopo la creazione non posso cambiare `array.length`. Posso creare un nuovo array più grande e copiare gli elementi oppure usare una struttura dinamica come `ArrayList`.

---

#### Come un array è rappresentato in memoria

Consideriamo:

```java
int[] numeri = {10, 20, 30, 40, 50};
```

La variabile `numeri` contiene un **riferimento** a un oggetto array. L'oggetto conserva la lunghezza e le celle indicizzate:

```text
numeri ──► int[5]
           ┌────┬────┬────┬────┬────┐
indice     │  0 │  1 │  2 │  3 │  4 │
valore     │ 10 │ 20 │ 30 │ 40 │ 50 │
           └────┴────┴────┴────┴────┘
```

Java non permette di ottenere o modificare direttamente l'indirizzo delle celle e non offre aritmetica dei puntatori. L'accesso avviene sempre tramite un indice controllato dalla JVM.

Questa rappresentazione spiega alcune conseguenze:

- l'accesso per indice è molto veloce;
- due variabili possono riferirsi allo stesso array;
- l'assegnazione non copia automaticamente gli elementi;
- un indice non valido genera `ArrayIndexOutOfBoundsException`.

```java
int[] primo = {1, 2, 3};
int[] secondo = primo; // stesso array
secondo[0] = 99;
System.out.println(primo[0]); // 99
```

Per una copia indipendente posso usare:

```java
int[] copia = primo.clone();
```

---

#### Accesso agli elementi

Gli indici validi vanno da `0` a `array.length - 1`:

```java
public class Main {
    public static void main(String[] args) {
        int[] numeri = {10, 20, 30, 40, 50};

        System.out.println("Il primo elemento è: " + numeri[0]);
        System.out.println("Il terzo elemento è: " + numeri[2]);

        numeri[1] = 25;
        System.out.println("Il secondo elemento modificato è: " + numeri[1]);
    }
}
```

> [!warning] Limiti
> Con un array lungo `5`, l'indice `5` non è valido: l'ultima cella ha indice `4`. Un accesso fuori dai limiti compila, ma durante l'esecuzione genera un'eccezione.

---

#### Array e cicli

Gli array vengono spesso elaborati con un ciclo. La condizione usa il campo `length`, senza parentesi:

```java
public class Main {
    public static void main(String[] args) {
        int[] numeri = {10, 20, 30, 40, 50};
        int somma = 0;

        for (int i = 0; i < numeri.length; i++) {
            somma += numeri[i];
        }

        System.out.println("La somma degli elementi è: " + somma);
    }
}
```

Usare `numeri.length` invece di ripetere una costante mantiene il ciclo corretto anche se cambia l'array.

> [!exercise] Esercizio
> Dato un array di numeri interi, ordinalo in ordine crescente. Hai appena creato un algoritmo di ordinamento: confrontalo poi con quelli presentati nella sezione successiva.

#### Ciclo for-each

Il **for-each** scorre direttamente i valori, senza esporre l'indice:

```java
public class Main {
    public static void main(String[] args) {
        int[] numeri = {1, 2, 3, 4, 5};

        System.out.print("For tradizionale: ");
        for (int i = 0; i < numeri.length; i++) {
            System.out.print(numeri[i] + " ");
        }
        System.out.println();

        System.out.print("For-each: ");
        for (int numero : numeri) {
            System.out.print(numero + " ");
        }
        System.out.println();
    }
}
```

Il for tradizionale è adatto quando servono indice, direzione o modifica di celle specifiche. Il for-each è più leggibile quando devo soltanto usare ogni valore.

> [!warning] Modificare nel for-each
> Assegnare un nuovo valore alla variabile del ciclo non modifica la cella dell'array, perché la variabile riceve una copia del valore. Per modificare gli elementi uso un ciclo indicizzato.

---

#### Array multidimensionali

Un array multidimensionale è un array i cui elementi sono a loro volta array:

```java
tipo[][] nomeMatrice = new tipo[righe][colonne];
```

**Esempio: matrice 2 × 3**

```java
public class Main {
    public static void main(String[] args) {
        int[][] matrice = {
            {1, 2, 3},
            {4, 5, 6}
        };

        for (int riga = 0; riga < matrice.length; riga++) {
            for (int colonna = 0; colonna < matrice[riga].length; colonna++) {
                System.out.print(matrice[riga][colonna] + " ");
            }
            System.out.println();
        }
    }
}
```

Poiché ogni riga è un array indipendente, Java permette anche array irregolari:

```java
int[][] triangolo = {
    {1},
    {2, 3},
    {4, 5, 6}
};
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

```java
public class Main {

public static void main(String[] args) {
    int[] numeri = {64, 34, 25, 12, 22, 11, 90};
    int n = numeri.length;

    boolean ordinato = false;

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
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

```java
public class Main {

public static void main(String[] args) {
    int[] numeri = {29, 10, 14, 37, 13};
    int n = numeri.length;

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
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

```java
public class Main {

public static void main(String[] args) {
    int[] numeri = {12, 11, 13, 5, 6};
    int n = numeri.length;

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
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

```java
public class Main {

static final int DIMENSIONE = 7;

static void fondi(int[] numeri, int[] temporaneo, int sinistra, int centro, int destra) {
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

static void mergeSort(int[] numeri, int[] temporaneo, int sinistra, int destra) {
    if (sinistra >= destra) {
        return; // caso base: zero o un elemento sono gia' ordinati
    }

    int centro = sinistra + (destra - sinistra) / 2;

    mergeSort(numeri, temporaneo, sinistra, centro);
    mergeSort(numeri, temporaneo, centro + 1, destra);
    fondi(numeri, temporaneo, sinistra, centro, destra);
}

public static void main(String[] args) {
    int[] numeri = {38, 27, 43, 3, 9, 82, 10};
    int[] temporaneo = new int[DIMENSIONE];

    mergeSort(numeri, temporaneo, 0, DIMENSIONE - 1);

    for (int i = 0; i < DIMENSIONE; i++) {
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

```java
public class Main {

static int partiziona(int[] numeri, int inizio, int fine) {
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

static void quickSort(int[] numeri, int inizio, int fine) {
    if (inizio >= fine) {
        return; // caso base: la porzione contiene zero o un elemento
    }

    int posizionePivot = partiziona(numeri, inizio, fine);

    quickSort(numeri, inizio, posizionePivot - 1);
    quickSort(numeri, posizionePivot + 1, fine);
}

public static void main(String[] args) {
    int[] numeri = {10, 7, 8, 9, 1, 5};
    int n = numeri.length;

    quickSort(numeri, 0, n - 1);

    for (int i = 0; i < n; i++) {
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

```java
public class Main {

static void sistemaHeap(int[] numeri, int dimensioneHeap, int radice) {
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

static void heapSort(int[] numeri, int n) {
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

public static void main(String[] args) {
    int[] numeri = {12, 11, 13, 5, 6, 7};
    int n = numeri.length;

    heapSort(numeri, n);

    for (int i = 0; i < n; i++) {
        System.out.print(numeri[i] + " ");
    }
    System.out.println();
}
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

Nella pratica quotidiana, in Java non si riscrive quasi mai un algoritmo di ordinamento da zero: si usa `sort()` della libreria standard. Studiare questi algoritmi serve però a capire come ragiona un programma e perché due soluzioni corrette possono avere prestazioni molto diverse.


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

Una **stringa** è una sequenza di caratteri, cioè un testo. In Java le stringhe sono oggetti della classe `String`.

```java
String saluto = "Ciao, mondo!";
```

Le stringhe letterali si scrivono tra doppi apici, mentre un singolo carattere di tipo `char` si scrive tra apici singoli:

```java
String parola = "Java";
char iniziale = 'J';
```

> [!note] `String` è immutabile
> Dopo la creazione, il contenuto di un oggetto `String` non viene modificato. Metodi come `replace` o `substring` restituiscono una nuova stringa; sta a noi assegnare il risultato a una variabile.

#### Dichiarare e inizializzare una stringa

```java
String vuota = "";
String nome = "Ada";
String copia = nome;
String messaggio = "Ciao, " + nome;
```

La variabile `copia` riceve lo stesso riferimento di `nome`. Questo non crea problemi perché gli oggetti `String` sono immutabili.

#### Leggere e stampare stringhe

Per leggere una parola posso usare `next()`. Per leggere una riga completa, compresi gli spazi, uso `nextLine()`:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Inserisci nome e cognome: ");
        String nomeCompleto = input.nextLine();

        System.out.println("Hai inserito: " + nomeCompleto);
        input.close();
    }
}
```

> [!warning] Letture miste
> Dopo `nextInt()`, `nextDouble()` o `next()`, nel buffer può rimanere il carattere Invio. Prima di leggere una riga con `nextLine()` può essere necessario consumarlo con una chiamata aggiuntiva a `nextLine()`.

#### Operazioni di base con la classe `String`

##### Lunghezza con `length`

```java
String saluto = "Hello, World!";
System.out.println(saluto.length()); // 13
```

Gli indici validi vanno da `0` a `length() - 1`.

##### Concatenazione

```java
String s1 = "Ciao";
String s2 = ", mondo!";
String risultato = s1 + s2;
System.out.println(risultato);
```

Quando almeno uno degli operandi è una stringa, `+` esegue una concatenazione:

```java
int eta = 16;
System.out.println("Età: " + eta);
```

##### Accesso a un carattere con `charAt`

```java
String saluto = "Ciao";
char secondo = saluto.charAt(1); // 'i'
```

Se l'indice non è valido, Java genera una `StringIndexOutOfBoundsException`.

##### Confronto con `equals`

Per confrontare il contenuto di due stringhe uso `equals`, non `==`:

```java
String risposta = "sì";

if (risposta.equals("sì")) {
    System.out.println("Risposta affermativa");
}
```

`==` confronta i riferimenti, cioè verifica se le due variabili indicano esattamente lo stesso oggetto. `equals` confronta invece i caratteri. Per ignorare maiuscole e minuscole posso usare `equalsIgnoreCase`.

```java
if (risposta.equalsIgnoreCase("SÌ")) {
    System.out.println("Le due stringhe hanno lo stesso contenuto");
}
```

##### Ordinamento lessicografico con `compareTo`

```java
int confronto = "Anna".compareTo("Luca");
```

- restituisce un valore negativo se la prima stringa viene prima;
- restituisce `0` se sono uguali;
- restituisce un valore positivo se la prima viene dopo.

##### Sottostringhe con `substring`

```java
String testo = "Ciao, mondo!";
String parte1 = testo.substring(0, 4); // "Ciao"
String parte2 = testo.substring(6);    // "mondo!"
```

L'indice iniziale è incluso, quello finale è escluso.

##### Ricerca con `indexOf` e `contains`

```java
String testo = "Benvenuto nel mondo della programmazione";
int posizione = testo.indexOf("mondo");

if (posizione != -1) {
    System.out.println("Trovato in posizione " + posizione);
}

if (testo.contains("Java")) {
    System.out.println("La parola è presente");
}
```

`indexOf` restituisce `-1` quando non trova il testo cercato.

##### Sostituzione con `replace`

```java
String testo = "Ciao, universo!";
testo = testo.replace("universo", "mondo");
System.out.println(testo); // Ciao, mondo!
```

L'assegnazione è necessaria perché `String` è immutabile.

##### Maiuscole, minuscole e spazi esterni

```java
String testo = "  Java  ";
System.out.println(testo.toUpperCase()); // "  JAVA  "
System.out.println(testo.toLowerCase()); // "  java  "
System.out.println(testo.trim());        // "Java"
```

##### Dividere e unire stringhe

```java
String riga = "rosso,verde,blu";
String[] colori = riga.split(",");

for (String colore : colori) {
    System.out.println(colore);
}

String unita = String.join(" - ", colori);
System.out.println(unita);
```

Il parametro di `split` è un'espressione regolare: alcuni caratteri, come `.`, `|` e `+`, devono essere preceduti da `\\` quando li si vuole interpretare letteralmente.

#### Scorrere una stringa

```java
String parola = "ciao";

for (int i = 0; i < parola.length(); i++) {
    char carattere = parola.charAt(i);
    System.out.println("Indice " + i + ": " + carattere);
}
```

Posso costruire una nuova stringa trasformando un carattere alla volta:

```java
String testo = "Ciao Mondo";
String risultato = "";

for (int i = 0; i < testo.length(); i++) {
    char c = testo.charAt(i);
    if (c == 'o') {
        risultato += '0';
    } else {
        risultato += c;
    }
}
```

Questa soluzione è chiara ma crea molti oggetti temporanei. Per modifiche ripetute è preferibile `StringBuilder`.

#### StringBuilder per stringhe modificabili

`StringBuilder` rappresenta una sequenza di caratteri modificabile. È utile quando aggiungo, elimino o sostituisco caratteri molte volte.

```java
StringBuilder testo = new StringBuilder("Ciao");
testo.append(", mondo!");
testo.insert(4, " a tutti");
testo.replace(0, 4, "Salve");
testo.delete(5, 13);
testo.reverse();

String risultato = testo.toString();
```

Metodi principali:

| Metodo | Descrizione |
| --- | --- |
| `append(x)` | aggiunge in fondo |
| `insert(i, x)` | inserisce dalla posizione `i` |
| `replace(inizio, fine, x)` | sostituisce un intervallo |
| `delete(inizio, fine)` | elimina un intervallo |
| `setCharAt(i, c)` | modifica un carattere |
| `reverse()` | inverte i caratteri |
| `toString()` | produce una `String` |

#### Esercizi sulle Stringhe

> [!exercise] Esercizi
> 1. Leggi una parola e stampa un carattere per riga.
> 2. Conta quante vocali contiene una frase.
> 3. Verifica se una parola è palindroma ignorando maiuscole e minuscole.
> 4. Conta quante volte compare una parola in una frase.
> 5. Sostituisci tutti gli spazi con un trattino.
> 6. Dividi una riga CSV usando `split` e stampa un campo per riga.
> 7. Verifica che una password contenga almeno una maiuscola, una minuscola, una cifra e otto caratteri.
> 8. Cifra un testo con il cifrario di Cesare.
> 9. Usa `StringBuilder` per invertire una frase.
> 10. Trova la parola più lunga di una frase.

### Classi come strutture dati

Negli esempi precedenti abbiamo usato variabili singole e array. Quando voglio raggruppare dati di tipi diversi che descrivono la stessa entità, in Java definisco una **classe**.

#### Dichiarazione e uso di una classe

```java
class Persona {
    String nome;
    int eta;
    double altezza;
}
```

La classe definisce un nuovo tipo. Per creare un oggetto uso `new`:

```java
public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona();

        p1.nome = "Mario Rossi";
        p1.eta = 20;
        p1.altezza = 1.75;

        System.out.println("Nome: " + p1.nome);
        System.out.println("Età: " + p1.eta);
        System.out.println("Altezza: " + p1.altezza);
    }
}
```

Il punto `.` permette di accedere ai campi dell'oggetto.

#### Costruttori

Un **costruttore** inizializza l'oggetto nel momento in cui viene creato. Ha lo stesso nome della classe e non dichiara un tipo di ritorno:

```java
class Persona {
    String nome;
    int eta;

    Persona(String nome, int eta) {
        this.nome = nome;
        this.eta = eta;
    }
}

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("Mario Rossi", 20);
        System.out.println(p1.nome + " ha " + p1.eta + " anni");
    }
}
```

`this.nome` indica il campo dell'oggetto corrente, mentre `nome` indica il parametro ricevuto dal costruttore.

#### Array di oggetti

```java
Persona[] persone = new Persona[3];
persone[0] = new Persona("Ada", 18);
persone[1] = new Persona("Alan", 19);
persone[2] = new Persona("Grace", 20);
```

La creazione dell'array non crea automaticamente le tre persone: inizialmente ogni cella contiene `null` e ogni oggetto deve essere costruito separatamente.

### Esercizi

> [!exercise] Rubrica telefonica
> Crea una classe `Contatto` con nome, cognome e numero di telefono. Memorizza più contatti in un array e realizza inserimento, ricerca per cognome, modifica, cancellazione e stampa.

> [!exercise] Registro studenti
> Crea una classe `Studente` con nome, cognome e array di voti. Calcola la media di ogni studente, trova lo studente con la media più alta e stampa quelli insufficienti.

> [!exercise] Inventario
> Crea una classe `Prodotto` con codice, nome, prezzo e quantità. Gestisci carico, vendita, ricerca e calcolo del valore totale del magazzino.

> [!exercise] Biblioteca
> Crea una classe `Libro` con titolo, autore, anno e disponibilità. Permetti il prestito, la restituzione e la ricerca per autore.

## Capitolo 5: Metodi e Modularizzazione

### Introduzione

Finora abbiamo scritto quasi tutto nel metodo `main`. Quando un programma cresce, questo approccio rende il codice difficile da leggere, verificare e riutilizzare. La **modularizzazione** divide il problema in parti più piccole, ciascuna con una responsabilità precisa.

In Java le funzioni dichiarate dentro una classe si chiamano **metodi**. Nei primi esempi useremo metodi `static`, che possono essere richiamati direttamente dal `main` senza creare oggetti.

### Dichiarazione e definizione di un metodo

#### Sintassi

```java
static tipoDiRitorno nomeMetodo(tipo parametro1, tipo parametro2) {
    // Corpo del metodo
    return valore;
}
```

Gli elementi principali sono:

- `static`: il metodo appartiene alla classe;
- **tipo di ritorno**: il tipo del risultato prodotto;
- **nome**: identifica il metodo;
- **parametri**: dati ricevuti dall'esterno;
- **corpo**: istruzioni eseguite;
- `return`: termina il metodo e restituisce un valore.

Se il metodo non restituisce nulla, il tipo di ritorno è `void` e non è necessario scrivere `return`.

#### Esempio di metodo con parametri

```java
import java.util.Scanner;

public class Main {
    static int massimo(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Inserisci due numeri: ");
        int x = input.nextInt();
        int y = input.nextInt();

        int risultato = massimo(x, y);
        System.out.println("Il numero più grande è: " + risultato);
        input.close();
    }
}
```

Quando viene eseguita la chiamata `massimo(x, y)`, i valori di `x` e `y` vengono assegnati ai parametri `a` e `b`. Il valore restituito viene poi salvato in `risultato`.

#### Metodo senza valore di ritorno (`void`)

```java
public class Main {
    static void saluta() {
        System.out.println("Ciao, benvenuto nel programma!");
    }

    public static void main(String[] args) {
        saluta();
    }
}
```

### Passaggio di parametri

Java passa sempre gli argomenti **per valore**. Ciò che viene copiato dipende però dal tipo della variabile.

#### Tipi primitivi

Con un tipo primitivo viene copiato il valore. Modificare il parametro non modifica la variabile del chiamante:

```java
public class Main {
    static void incrementa(int n) {
        n++;
    }

    public static void main(String[] args) {
        int numero = 5;
        incrementa(numero);
        System.out.println(numero); // 5
    }
}
```

Per ottenere il nuovo valore posso restituirlo e assegnarlo:

```java
static int incrementato(int n) {
    return n + 1;
}

// ...
numero = incrementato(numero);
```

#### Oggetti e riferimenti

Con un oggetto viene copiata la **referenza**, cioè il valore che permette di raggiungere lo stesso oggetto. Il metodo può quindi modificarne i campi:

```java
class Contatore {
    int valore;
}

public class Main {
    static void incrementa(Contatore contatore) {
        contatore.valore++;
    }

    public static void main(String[] args) {
        Contatore c = new Contatore();
        c.valore = 5;
        incrementa(c);
        System.out.println(c.valore); // 6
    }
}
```

> [!warning] Non è passaggio per riferimento
> Anche in questo caso Java copia un valore: il riferimento. Il parametro e la variabile del chiamante indicano temporaneamente lo stesso oggetto, ma assegnare al parametro un nuovo oggetto non cambia la variabile del chiamante.

#### Passaggio di array

Gli array sono oggetti, perciò un metodo può modificarne gli elementi:

```java
public class Main {
    static void modificaArray(int[] array) {
        if (array.length > 0) {
            array[0] = 0;
        }
    }

    static void stampaArray(int[] array) {
        for (int valore : array) {
            System.out.print(valore + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] numeri = {5, 10, 15, 20, 25};
        modificaArray(numeri);
        stampaArray(numeri); // 0 10 15 20 25
    }
}
```

Non serve passare separatamente la dimensione: ogni array possiede il campo `length`.

### Overloading dei metodi

Java permette di dichiarare più metodi con lo stesso nome se hanno parametri diversi per numero o tipo:

```java
static int somma(int a, int b) {
    return a + b;
}

static double somma(double a, double b) {
    return a + b;
}

static int somma(int a, int b, int c) {
    return a + b + c;
}
```

Il compilatore sceglie la versione adatta in base agli argomenti. Non è possibile distinguere due metodi soltanto dal tipo restituito.

### Metodi ricorsivi

Un metodo è **ricorsivo** quando richiama se stesso. Ogni algoritmo ricorsivo deve avere:

1. un **caso base**, che termina le chiamate;
2. un **passo ricorsivo**, che avvicina il problema al caso base.

#### Esempio: calcolo del fattoriale

```java
import java.util.Scanner;

public class Main {
    static long fattoriale(int n) {
        if (n == 0) {
            return 1;
        }
        return n * fattoriale(n - 1);
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Inserisci un numero non negativo: ");
        int numero = input.nextInt();

        if (numero < 0) {
            System.out.println("Il fattoriale non è definito per numeri negativi");
        } else {
            System.out.println("Il fattoriale è: " + fattoriale(numero));
        }
        input.close();
    }
}
```

##### Esempio di esecuzione per `n = 5`

```text
fattoriale(5)
5 * fattoriale(4)
5 * 4 * fattoriale(3)
5 * 4 * 3 * fattoriale(2)
5 * 4 * 3 * 2 * fattoriale(1)
5 * 4 * 3 * 2 * 1 * fattoriale(0)
5 * 4 * 3 * 2 * 1 * 1 = 120
```

Ogni chiamata occupa spazio nello stack. Una ricorsione senza caso base, o troppo profonda, può causare `StackOverflowError`.

### Gli scope

Lo **scope** è la zona del programma in cui un nome è visibile.

#### Scope nei metodi

```java
public class Main {
    static int globale = 10; // Campo statico: visibile nei metodi della classe

    static void esempio(int parametro) {
        int locale = 20; // Visibile solo dentro esempio

        if (parametro > 0) {
            int nelBlocco = 30; // Visibile solo dentro questo if
            System.out.println(nelBlocco);
        }

        System.out.println(locale);
        System.out.println(globale);
    }
}
```

- un parametro è visibile nel metodo;
- una variabile locale è visibile dal punto della dichiarazione alla fine del blocco;
- un campo della classe è accessibile dai metodi compatibili con il suo modificatore;
- due blocchi diversi possono contenere variabili con lo stesso nome;
- è preferibile limitare lo scope e usare nomi chiari.

### Modularizzazione

Modularizzare significa dividere il programma in componenti piccoli e coerenti. Porta diversi vantaggi:

- il codice è più facile da leggere;
- ogni parte può essere provata separatamente;
- le funzionalità possono essere riutilizzate;
- gli errori sono più facili da isolare;
- più persone possono lavorare su classi diverse.

#### Estratto da "Code smells e refactoring"

Un metodo molto lungo, troppe variabili con responsabilità diverse o codice duplicato sono segnali che suggeriscono un **refactoring**. Il refactoring modifica la struttura interna del codice senza cambiarne il comportamento osservabile.

### Diversi metodi di modularizzazione

#### 1. Tutto in una classe

Per programmi piccoli posso raccogliere più metodi `static` in una sola classe:

```java
public class Main {
    static int quadrato(int n) {
        return n * n;
    }

    static void stampaQuadrato(int n) {
        System.out.println(quadrato(n));
    }

    public static void main(String[] args) {
        stampaQuadrato(5);
    }
}
```

In Java l'ordine di dichiarazione dei metodi nella classe non impedisce di richiamarli: non servono prototipi.

#### 2. Separazione in più classi

Quando le responsabilità crescono, posso creare una classe dedicata. File `Calcoli.java`:

```java
public class Calcoli {
    public static int massimo(int a, int b) {
        return a > b ? a : b;
    }

    public static int minimo(int a, int b) {
        return a < b ? a : b;
    }
}
```

File `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        int risultato = Calcoli.massimo(8, 3);
        System.out.println(risultato);
    }
}
```

Compilazione ed esecuzione:

```bash
javac Main.java Calcoli.java
java Main
```

#### 3. Package

I **package** organizzano le classi in spazi dei nomi e cartelle. La dichiarazione deve comparire all'inizio del file:

```java
package scuola.utilita;

public class Calcoli {
    public static int quadrato(int n) {
        return n * n;
    }
}
```

Da un altro package posso importare la classe:

```java
import scuola.utilita.Calcoli;
```

La struttura delle cartelle deve riflettere il package: `scuola/utilita/Calcoli.java`.

#### Visibilità

I modificatori principali sono:

| Modificatore | Accesso |
| --- | --- |
| `public` | da qualunque classe |
| `private` | soltanto dalla classe che dichiara il membro |
| `protected` | stesso package e sottoclassi |
| nessun modificatore | stesso package |

Nei primi programmi useremo soprattutto `public` per i metodi destinati all'esterno e `private` per i dettagli interni.

### Esercizi

> [!exercise] Esercizi
> 1. Scrivi i metodi `minimo`, `massimo` e `media` per tre numeri.
> 2. Crea un metodo che restituisce `true` se un numero è primo.
> 3. Crea un metodo che conta le vocali di una stringa.
> 4. Crea metodi separati per leggere, ordinare e stampare un array.
> 5. Calcola in modo ricorsivo la somma dei numeri da `1` a `n`.
> 6. Implementa ricorsivamente la successione di Fibonacci e confrontala con una versione iterativa.
> 7. Sposta una raccolta di metodi matematici in una classe `Calcoli` separata.
> 8. Progetta una classe `GestoreStudenti` che separi la logica dal metodo `main`.

## Capitolo 6: Input/Output da file

### Introduzione

Finora abbiamo letto dalla tastiera e scritto sul terminale. I file permettono invece di conservare i dati anche dopo la fine del programma.

Java offre diversi livelli di astrazione. In questa dispensa useremo soprattutto le classi del package `java.nio.file`, che rendono semplici le operazioni più comuni, e `Scanner` per interpretare dati strutturati.

```java
import java.nio.file.Files;
import java.nio.file.Path;
```

- `Path` rappresenta il percorso di un file o di una cartella;
- `Files` contiene metodi `static` per leggere, scrivere, copiare e controllare file;
- molte operazioni possono generare `IOException`, che deve essere gestita o dichiarata.

### Scrittura su un file

Per scrivere una piccola quantità di testo posso usare `Files.writeString`:

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        Path percorso = Path.of("esempio.txt");
        String contenuto = "Prima riga\nSeconda riga\n";

        try {
            Files.writeString(percorso, contenuto);
            System.out.println("Scrittura completata!");
        } catch (IOException e) {
            System.out.println("Errore di scrittura: " + e.getMessage());
        }
    }
}
```

Se il file non esiste viene creato; se esiste, il contenuto viene normalmente sostituito.

#### Scrittura in append

Per aggiungere testo alla fine senza cancellare ciò che esiste:

```java
import static java.nio.file.StandardOpenOption.APPEND;
import static java.nio.file.StandardOpenOption.CREATE;

Files.writeString(
    Path.of("esempio.txt"),
    "Nuova riga\n",
    CREATE,
    APPEND
);
```

`CREATE` crea il file se manca, mentre `APPEND` scrive in fondo.

### Lettura da un file

Per leggere tutto il contenuto come un'unica stringa:

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        Path percorso = Path.of("esempio.txt");

        try {
            String contenuto = Files.readString(percorso);
            System.out.print(contenuto);
        } catch (IOException e) {
            System.out.println("Errore di lettura: " + e.getMessage());
        }
    }
}
```

Per ottenere tutte le righe in una lista:

```java
import java.util.List;

List<String> righe = Files.readAllLines(Path.of("esempio.txt"));
for (String riga : righe) {
    System.out.println(riga);
}
```

Questi metodi sono comodi per file piccoli. Per file molto grandi è preferibile elaborare una riga alla volta.

### Lettura riga per riga con `BufferedReader`

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        Path percorso = Path.of("esempio.txt");

        try (BufferedReader lettore = Files.newBufferedReader(percorso)) {
            String riga;
            while ((riga = lettore.readLine()) != null) {
                System.out.println(riga);
            }
        } catch (IOException e) {
            System.out.println("Errore: " + e.getMessage());
        }
    }
}
```

`readLine()` restituisce una riga senza il carattere di fine riga; quando il file termina restituisce `null`.

### Scrittura progressiva con `BufferedWriter`

```java
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        try (BufferedWriter scrittore = Files.newBufferedWriter(Path.of("dati.txt"))) {
            scrittore.write("Mario 18");
            scrittore.newLine();
            scrittore.write("Anna 19");
            scrittore.newLine();
        } catch (IOException e) {
            System.out.println("Errore: " + e.getMessage());
        }
    }
}
```

### Il costrutto try-with-resources

L'espressione:

```java
try (BufferedReader lettore = Files.newBufferedReader(percorso)) {
    // uso della risorsa
}
```

chiude automaticamente la risorsa alla fine del blocco, anche se si verifica un errore. È il modo preferito per lavorare con stream, lettori, scrittori e `Scanner` collegati a un file.

### Tipologie di lettura

#### Lettura parola per parola

`Scanner` può leggere token separati da spazi, tabulazioni e righe:

```java
import java.io.IOException;
import java.nio.file.Path;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner file = new Scanner(Path.of("esempio.txt"))) {
            while (file.hasNext()) {
                String parola = file.next();
                System.out.println(parola);
            }
        } catch (IOException e) {
            System.out.println("Errore: " + e.getMessage());
        }
    }
}
```

Prima di chiamare un metodo `next...` è buona pratica controllare con `hasNext...` che il dato esista e abbia il tipo previsto.

#### Lettura di dati strutturati

Immaginiamo un file `studenti.txt`:

```text
Mario Rossi 18
Anna Verdi 19
Luca Bianchi 17
```

```java
import java.io.IOException;
import java.nio.file.Path;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner file = new Scanner(Path.of("studenti.txt"))) {
            while (file.hasNext()) {
                String nome = file.next();
                String cognome = file.next();
                int eta = file.nextInt();

                System.out.println(
                    "Nome: " + nome + ", cognome: " + cognome + ", età: " + eta
                );
            }
        } catch (IOException e) {
            System.out.println("Errore: " + e.getMessage());
        }
    }
}
```

Questa strategia funziona se ogni campo non contiene spazi e il formato è regolare. Per formati più complessi conviene leggere una riga e dividerla esplicitamente.

#### Lettura di file CSV

Dato il file:

```text
Mario,Rossi,18
Anna,Verdi,19
```

posso elaborare ogni riga:

```java
try (BufferedReader lettore = Files.newBufferedReader(Path.of("studenti.csv"))) {
    String riga;
    while ((riga = lettore.readLine()) != null) {
        String[] campi = riga.split(",");
        String nome = campi[0];
        String cognome = campi[1];
        int eta = Integer.parseInt(campi[2]);
        System.out.println(nome + " " + cognome + ": " + eta);
    }
}
```

> [!warning] CSV reali
> `split(",")` è sufficiente soltanto per file semplici. Un CSV reale può contenere virgole, doppi apici e righe interne ai campi: in un progetto reale si usa una libreria dedicata.

#### Lettura carattere per carattere

```java
try (BufferedReader lettore = Files.newBufferedReader(Path.of("esempio.txt"))) {
    int codice;
    while ((codice = lettore.read()) != -1) {
        char carattere = (char) codice;
        System.out.print(carattere);
    }
}
```

`read()` restituisce un `int` per poter rappresentare sia tutti i caratteri sia il valore speciale `-1`, che segnala la fine del file.

### Percorsi e controllo dei file

```java
Path percorso = Path.of("dati", "studenti.txt");

System.out.println(percorso.toAbsolutePath());
System.out.println(Files.exists(percorso));
System.out.println(Files.isRegularFile(percorso));
System.out.println(Files.size(percorso));
```

- un percorso **relativo** parte dalla cartella di lavoro del programma;
- un percorso **assoluto** parte dalla radice del filesystem;
- `Path.of("cartella", "file.txt")` costruisce il percorso con i separatori corretti per il sistema operativo.

### Eccezioni di input/output

Un'eccezione segnala una situazione anomala. Molti metodi sui file possono generare `IOException`, per esempio quando:

- il file non esiste;
- non abbiamo i permessi necessari;
- il percorso indica una cartella invece di un file;
- il disco non è disponibile;
- la lettura o scrittura viene interrotta.

Posso gestirla con `try-catch`:

```java
try {
    String testo = Files.readString(Path.of("dati.txt"));
    System.out.println(testo);
} catch (IOException e) {
    System.out.println("Impossibile leggere il file: " + e.getMessage());
}
```

Oppure posso dichiarare che il metodo la propaga:

```java
static String carica(Path percorso) throws IOException {
    return Files.readString(percorso);
}
```

Gestire un errore significa decidere cosa deve fare il programma; non basta nasconderlo con un blocco `catch` vuoto.

### Tabella riassuntiva

| Operazione | Soluzione principale |
| --- | --- |
| Leggere tutto il testo | `Files.readString(path)` |
| Leggere tutte le righe | `Files.readAllLines(path)` |
| Scrivere tutto il testo | `Files.writeString(path, testo)` |
| Leggere progressivamente | `Files.newBufferedReader(path)` |
| Scrivere progressivamente | `Files.newBufferedWriter(path)` |
| Leggere token tipizzati | `new Scanner(path)` |
| Verificare l'esistenza | `Files.exists(path)` |
| Ottenere la dimensione | `Files.size(path)` |

### Esercizi

> [!exercise] Esercizi
> 1. Scrivi tre righe in `messaggio.txt`, poi rileggile e stampale.
> 2. Leggi `numeri.txt` e calcola somma, media, minimo e massimo.
> 3. Conta righe, parole e caratteri di un file di testo.
> 4. Copia un file di testo aggiungendo il numero davanti a ogni riga.
> 5. Leggi un registro studenti, calcola le medie e salva un report.
> 6. Crea un diario che aggiunge nuove annotazioni in append.
> 7. Leggi un semplice CSV di prodotti e calcola il valore totale del magazzino.
> 8. Cerca una parola in un file e stampa i numeri delle righe in cui compare.
> 9. Sostituisci una parola in tutto il file e salva il risultato in un nuovo file.
> 10. Realizza una rubrica persistente: all'avvio carica i contatti, alla chiusura li riscrive.

## Capitolo 7: Gestione della memoria dinamica e riferimenti

### Introduzione

Java gestisce automaticamente gran parte della memoria. Il programmatore crea array e oggetti con `new`, ma non li libera manualmente: la JVM usa un **garbage collector** per recuperare la memoria degli oggetti che non sono più raggiungibili.

Questo non significa che la memoria sia infinita o che non serva comprenderne il funzionamento. Sapere dove vivono variabili e oggetti aiuta a capire assegnazioni, parametri, `null`, errori e prestazioni.

### Layout semplificato della memoria nei programmi Java

Possiamo usare un modello semplificato:

| Area | Contenuto principale |
| --- | --- |
| **Stack** | chiamate ai metodi, parametri e variabili locali |
| **Heap** | oggetti e array creati durante l'esecuzione |
| **Metaspace** | informazioni sulle classi caricate dalla JVM |

La JVM nasconde molti dettagli e può ottimizzare la collocazione effettiva dei dati. Il modello stack/heap rimane però utile per ragionare sul comportamento del programma.

### Stack e heap

#### Lo stack

Ogni chiamata di metodo crea un **frame** nello stack. Il frame contiene le informazioni necessarie a quella chiamata, come parametri e variabili locali.

```java
static int quadrato(int numero) {
    int risultato = numero * numero;
    return risultato;
}
```

Quando `quadrato` termina, il suo frame viene rimosso. Chiamate ricorsive troppo profonde possono esaurire lo spazio disponibile e causare `StackOverflowError`.

#### Lo heap

Gli oggetti e gli array vengono normalmente creati nello heap:

```java
Persona persona = new Persona();
int[] numeri = new int[100];
```

Le variabili locali `persona` e `numeri` contengono **riferimenti** che permettono di raggiungere gli oggetti. Gli oggetti rimangono utilizzabili finché sono raggiungibili attraverso almeno un riferimento attivo.

### Tipi primitivi e riferimenti

Con i tipi primitivi, l'assegnazione copia direttamente il valore:

```java
int a = 10;
int b = a;
b = 20;

System.out.println(a); // 10
System.out.println(b); // 20
```

Con gli oggetti, l'assegnazione copia il riferimento:

```java
class Scatola {
    int valore;
}

Scatola prima = new Scatola();
prima.valore = 10;

Scatola seconda = prima;
seconda.valore = 20;

System.out.println(prima.valore); // 20
```

`prima` e `seconda` raggiungono lo stesso oggetto. Non sono state create due scatole.

### Il valore `null`

Una variabile riferimento può contenere `null`, cioè non indicare alcun oggetto:

```java
String testo = null;
```

Provare a usare un membro attraverso `null` causa una `NullPointerException`:

```java
System.out.println(testo.length()); // errore durante l'esecuzione
```

Posso controllare esplicitamente:

```java
if (testo != null) {
    System.out.println(testo.length());
}
```

> [!warning] Inizializzazione
> I campi riferimento e le celle di un array di oggetti vengono inizializzati automaticamente a `null`. Le variabili locali, invece, devono ricevere un valore prima dell'uso.

### Passaggio degli oggetti ai metodi

Java passa sempre per valore. Per un riferimento viene copiata la referenza all'oggetto:

```java
class Punto {
    int x;
    int y;
}

static void sposta(Punto p, int dx, int dy) {
    p.x += dx;
    p.y += dy;
}
```

Il metodo può modificare l'oggetto condiviso. Non può però sostituire la variabile del chiamante:

```java
static void sostituisci(Punto p) {
    p = new Punto(); // cambia solo la copia locale del riferimento
}
```

### Garbage collector

Un oggetto diventa candidabile alla raccolta quando non esiste più alcun percorso dal programma attivo per raggiungerlo:

```java
Scatola scatola = new Scatola();
scatola = null; // l'oggetto precedente può diventare irraggiungibile
```

Il garbage collector decide autonomamente **quando** recuperare la memoria. Non posso fare affidamento su un momento preciso e non devo usare il garbage collector per chiudere file, connessioni o altre risorse esterne.

Per le risorse uso `try-with-resources`:

```java
try (Scanner file = new Scanner(Path.of("dati.txt"))) {
    // uso il file
} // chiusura deterministica
```

### Perdite di memoria logiche

Anche con il garbage collector è possibile occupare memoria inutilmente. Accade quando il programma conserva riferimenti a oggetti che non userà più, per esempio aggiungendo continuamente elementi a una collezione senza rimuoverli.

```java
static final ArrayList<byte[]> cache = new ArrayList<>();

// Se continua per sempre, tutti gli array rimangono raggiungibili.
cache.add(new byte[1_000_000]);
```

Il garbage collector non può liberare un oggetto ancora raggiungibile: dal suo punto di vista potrebbe servire.

### Allocazione dinamica di un array

La dimensione di un array può essere decisa durante l'esecuzione:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Inserisci la dimensione dell'array: ");
        int n = input.nextInt();

        if (n < 0) {
            System.out.println("Dimensione non valida");
            input.close();
            return;
        }

        int[] array = new int[n];
        for (int i = 0; i < array.length; i++) {
            array[i] = i * 2;
        }

        for (int valore : array) {
            System.out.print(valore + " ");
        }
        System.out.println();
        input.close();
    }
}
```

Una volta creato, un array mantiene la stessa lunghezza. Se serve una struttura ridimensionabile si usa una collezione come `ArrayList`.

### Copie superficiali e profonde

Copiare un riferimento produce una **copia superficiale** del collegamento, non dell'oggetto:

```java
int[] originale = {1, 2, 3};
int[] alias = originale;
alias[0] = 99;
System.out.println(originale[0]); // 99
```

Per creare un nuovo array con gli stessi valori:

```java
int[] copia = originale.clone();
// oppure
int[] copia2 = java.util.Arrays.copyOf(originale, originale.length);
```

Se l'array contiene oggetti, anche `clone` e `copyOf` copiano soltanto i riferimenti contenuti. Una vera copia profonda richiede di creare anche nuovi oggetti interni.

### Esercizi

> [!exercise] Esercizi
> 1. Disegna stack, heap e riferimenti per un programma con due oggetti e tre variabili.
> 2. Prevedi l'output di esempi con alias tra array, poi verificalo.
> 3. Implementa una copia indipendente di un array di interi.
> 4. Implementa la copia profonda di un array di oggetti `Persona`.
> 5. Scrivi un metodo che riceve un oggetto, ne modifica un campo e spiega perché il chiamante osserva la modifica.
> 6. Individua i punti in cui un piccolo programma può generare `NullPointerException` e aggiungi controlli appropriati.

## Capitolo 8: Strutture dati dinamiche di base

Gli array sono semplici ed efficienti, ma hanno dimensione fissa. Il **Java Collections Framework** offre strutture dati ridimensionabili con interfacce e classi già pronte.

In questo capitolo confrontiamo soprattutto:

- `ArrayList`, basata su un array ridimensionabile;
- `LinkedList`, basata su nodi collegati.

Entrambe implementano l'interfaccia `List`, quindi condividono molte operazioni.

### ArrayList

#### Introduzione

`ArrayList<E>` conserva gli elementi in un array interno. Quando lo spazio termina, crea automaticamente un array più capiente e vi trasferisce gli elementi.

`E` è il tipo degli elementi. Le collezioni usano oggetti, perciò per i primitivi si usano le corrispondenti classi wrapper:

| Primitivo | Wrapper |
| --- | --- |
| `int` | `Integer` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

Java converte spesso automaticamente tra primitivo e wrapper mediante **autoboxing** e **unboxing**.

```java
import java.util.ArrayList;

ArrayList<Integer> numeri = new ArrayList<>();
numeri.add(10); // int convertito in Integer
```

#### Metodi principali di `ArrayList`

| Metodo | Descrizione |
| --- | --- |
| `add(valore)` | aggiunge in fondo |
| `add(indice, valore)` | inserisce in una posizione |
| `get(indice)` | restituisce un elemento |
| `set(indice, valore)` | sostituisce un elemento |
| `remove(indice)` | rimuove per posizione |
| `remove(oggetto)` | rimuove la prima occorrenza |
| `size()` | restituisce il numero di elementi |
| `isEmpty()` | verifica se è vuota |
| `contains(x)` | verifica se contiene un valore |
| `clear()` | elimina tutti gli elementi |

Attenzione alla differenza tra `length`, `length()` e `size()`:

- `array.length` per gli array;
- `stringa.length()` per le stringhe;
- `lista.size()` per le collezioni.

#### Esempio di utilizzo di `ArrayList`

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numeri = new ArrayList<>();

        numeri.add(10);
        numeri.add(20);
        numeri.add(30);

        for (int i = 0; i < numeri.size(); i++) {
            System.out.println("Indice " + i + ": " + numeri.get(i));
        }

        numeri.set(1, 50);
        numeri.remove(numeri.size() - 1);

        System.out.println("Dimensione: " + numeri.size());
        System.out.println("Contenuto: " + numeri);
    }
}
```

#### Rimozione di interi

Con `ArrayList<Integer>`, `remove(1)` elimina l'elemento all'indice `1`, non il valore `1`. Per rimuovere un valore intero:

```java
numeri.remove(Integer.valueOf(1));
```

#### Scorrimento

```java
for (int numero : numeri) {
    System.out.println(numero);
}
```

Oppure, se durante la scansione devo rimuovere in sicurezza:

```java
import java.util.Iterator;

Iterator<Integer> iteratore = numeri.iterator();
while (iteratore.hasNext()) {
    int numero = iteratore.next();
    if (numero < 0) {
        iteratore.remove();
    }
}
```

Modificare strutturalmente una lista dentro un `for-each` può generare `ConcurrentModificationException`.

#### Ordinamento

```java
import java.util.Collections;

Collections.sort(numeri);
Collections.reverse(numeri);
```

Per gli oggetti posso fornire un comparatore:

```java
studenti.sort((a, b) -> a.cognome.compareTo(b.cognome));
```

#### Capacità e dimensione

La **dimensione** è il numero di elementi visibili. La **capacità** è lo spazio disponibile nell'array interno. `ArrayList` gestisce la capacità automaticamente; la sua API non espone un metodo per leggerla.

Posso indicare una capacità iniziale quando conosco una stima:

```java
ArrayList<String> nomi = new ArrayList<>(1000);
```

Questo non crea mille elementi: evita soltanto alcune riallocazioni future.

#### Esercizi su ArrayList

> [!exercise] Esercizi
> 1. Leggi numeri finché l'utente inserisce `0`, poi stampa media, minimo e massimo.
> 2. Rimuovi da una lista tutti i numeri negativi usando un `Iterator`.
> 3. Gestisci una lista di studenti e ordinala per cognome e poi per media.
> 4. Elimina i duplicati mantenendo l'ordine della prima comparsa.
> 5. Simula letture di sensori, ciascuno con una propria `ArrayList<Double>`.

### LinkedList

#### Introduzione alle liste collegate

Una lista collegata è formata da **nodi**. Ogni nodo conserva un valore e uno o più riferimenti ad altri nodi. `LinkedList` usa una lista doppiamente collegata: ogni nodo conosce il precedente e il successivo.

Questa organizzazione rende economiche alcune aggiunte e rimozioni agli estremi, ma non permette un accesso rapido per indice: per raggiungere l'elemento `i` bisogna attraversare i nodi.

```java
import java.util.LinkedList;

LinkedList<Integer> lista = new LinkedList<>();
```

#### Metodi principali di `LinkedList`

Oltre ai metodi dell'interfaccia `List`, troviamo:

| Metodo | Descrizione |
| --- | --- |
| `addFirst(x)` | aggiunge all'inizio |
| `addLast(x)` | aggiunge alla fine |
| `getFirst()` | legge il primo elemento |
| `getLast()` | legge l'ultimo elemento |
| `removeFirst()` | rimuove il primo elemento |
| `removeLast()` | rimuove l'ultimo elemento |

#### Esempio di utilizzo di `LinkedList`

```java
import java.util.Collections;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> lista = new LinkedList<>();

        lista.addLast(10);
        lista.addFirst(5);
        lista.addLast(20);

        System.out.println("Elementi nella lista: " + lista);

        lista.remove(Integer.valueOf(10));
        System.out.println("Dopo rimozione: " + lista);

        lista.add(15);
        Collections.sort(lista);
        Collections.reverse(lista);
        System.out.println("Ordinata e invertita: " + lista);
    }
}
```

#### Implementazione manuale di una lista semplice

Per comprendere il collegamento tra i nodi possiamo costruire una versione minima:

```java
class Nodo {
    int valore;
    Nodo successivo;

    Nodo(int valore, Nodo successivo) {
        this.valore = valore;
        this.successivo = successivo;
    }
}

class ListaSemplice {
    private Nodo testa;

    void aggiungiInTesta(int valore) {
        testa = new Nodo(valore, testa);
    }

    void aggiungiInCoda(int valore) {
        Nodo nuovo = new Nodo(valore, null);
        if (testa == null) {
            testa = nuovo;
            return;
        }

        Nodo corrente = testa;
        while (corrente.successivo != null) {
            corrente = corrente.successivo;
        }
        corrente.successivo = nuovo;
    }

    void stampa() {
        Nodo corrente = testa;
        while (corrente != null) {
            System.out.print(corrente.valore + " ");
            corrente = corrente.successivo;
        }
        System.out.println();
    }
}
```

Non serve liberare manualmente i nodi rimossi. Quando non sono più raggiungibili, il garbage collector può recuperarne la memoria.

#### Esercizi sulle liste

> [!exercise] Esercizi
> 1. Completa `ListaSemplice` con ricerca, rimozione e metodo `size`.
> 2. Aggiungi l'inserimento in una posizione specifica.
> 3. Inverti manualmente i collegamenti della lista.
> 4. Crea una rubrica con `LinkedList<Contatto>`.
> 5. Usa `LinkedList` come coda di persone in attesa.

### ArrayList o LinkedList?

La scelta dipende soprattutto dal modo in cui accedo e modifico i dati.

#### Quando usare un `ArrayList`

Vantaggi principali:

- accesso rapido per indice con `get(i)`;
- ottima efficienza nello scorrimento;
- basso costo di memoria rispetto a una lista di nodi;
- aggiunte in fondo normalmente efficienti;
- scelta generale più comune per una sequenza.

Svantaggi:

- inserire o rimuovere all'inizio o nel mezzo richiede lo spostamento degli elementi successivi;
- occasionalmente deve riallocare l'array interno.

#### Quando usare una `LinkedList`

Vantaggi principali:

- inserimento e rimozione efficienti agli estremi;
- può essere usata attraverso le interfacce `Deque` e `Queue`;
- un iteratore può inserire o rimuovere senza spostare gli altri elementi.

Svantaggi:

- `get(i)` è lento perché deve attraversare la lista;
- ogni nodo richiede riferimenti aggiuntivi;
- la disposizione non contigua tende a sfruttare peggio la cache.

#### Tabella riassuntiva

| Caratteristica | `ArrayList` | `LinkedList` |
| --- | --- | --- |
| Accesso per indice | rapido, `O(1)` | lineare, `O(n)` |
| Aggiunta in fondo | ammortizzata `O(1)` | `O(1)` |
| Aggiunta in testa | `O(n)` | `O(1)` |
| Rimozione nel mezzo | ricerca più spostamenti | ricerca, poi collegamenti |
| Memoria per elemento | minore | maggiore |
| Scansione sequenziale | generalmente molto efficiente | generalmente meno efficiente |

Le complessità descrivono la crescita del costo e non garantiscono che una struttura sia sempre più veloce in assoluto.

#### Regola generale

- Usa `ArrayList` come scelta predefinita quando ti serve una lista.
- Usa `LinkedList` quando lavori spesso agli estremi o quando la struttura a nodi è parte del problema didattico.
- Se vuoi una coda o una pila, programma contro le interfacce `Queue` o `Deque`; spesso `ArrayDeque` è più efficiente di `LinkedList`.
- Misura le prestazioni quando la scelta è davvero importante.

### Conclusione

Le collezioni evitano di reimplementare strutture dati comuni e offrono un'API coerente. Scegliere la struttura corretta significa osservare quali operazioni sono più frequenti, quanta memoria è disponibile e quale rappresentazione rende il programma più chiaro.

## Conclusione
Questa dispensa ha offerto un percorso per apprendere e approfondire i concetti fondamentali della programmazione in Java. Grazie a queste basi potrai affrontare argomenti più complessi anche con altri linguaggi di programmazione, come la programmazione orientata agli oggetti, gli algoritmi e strutture dati più avanzate come alberi e grafi, programmazione multithread, librerie e framework per progetti complessi e specifici.
