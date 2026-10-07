# Utilizzo per le lezioni
Questo documento funziona come dispensa. Tuttavia per fare lezione si utilizzerà un approccio inverso. Ovvero verranno mostrati agli alunni uno alla volta i codici con gli smell, si faranno dei ragionamenti su questo codice discutendo con la classe, facendo proporre varie idee e soluzioni. Dopodiché allora si mostrerà la definizione dello smell e l'esempio di refactoring.

# Introduzione
## Cosa Sono i Code Smell

I "Code Smell" sono schemi comuni nel codice sorgente che indicano potenziali problemi di design o implementazione. Questi "odori" non sono bug in senso stretto; il codice può funzionare correttamente nonostante la loro presenza. Tuttavia, i code smell sono spesso indicatori di problemi più profondi che possono influenzare negativamente la qualità, la manutenibilità e la scalabilità del software. Identificarli e risolverli è fondamentale per garantire la salute a lungo termine di un progetto software.

## Perché i Code Smell Sono Importanti

1. **Migliorare la Manutenibilità**: La rimozione dei code smell rende il codice più pulito e più facile da mantenere.
2. **Prevenire Bug Futuri**: Molti code smell possono portare a errori complessi in futuro, quindi anticiparli aiuta a prevenire bug.
3. **Migliorare la Comprensione del Codice**: Un codice pulito e ben strutturato è più facile da comprendere per nuovi sviluppatori o per chi rivede il codice dopo un certo tempo.
4. **Ottimizzare le Prestazioni**: Alcuni code smell possono influenzare le prestazioni del software. La loro eliminazione può quindi portare a miglioramenti in questo senso.

## Come Identificare i Code Smell

I code smell possono essere identificati attraverso una varietà di metodi, tra cui:

- **Revisione Manuale del Codice**: Gli sviluppatori esperti possono spesso riconoscere i code smell basandosi sulla loro esperienza.
- **Strumenti di Analisi Statica del Codice**: Esistono strumenti software che possono automaticamente rilevare molti tipi comuni di code smell.
- **Peer Review**: La revisione del codice da parte di altri sviluppatori è un ottimo modo per individuare e discutere potenziali problemi.

## Tipi Comuni di Code Smell

Nella seguente dispensa, esploreremo vari tipi comuni di code smell, fornendo definizioni, esempi e tecniche di refactoring per ciascuno. Questi includeranno problemi come "Codice Morto", "Violazioni del Principio KISS", "Duplicazione di Codice", e molti altri. Ogni sezione sarà accompagnata da esempi pratici, mostrando come questi problemi possono presentarsi nel codice e come possono essere risolti.

# Esempi di code smell e relativi refactoring
### Codice Duplicato

**Definizione:** Il "Codice Duplicato" si riferisce alla situazione in cui blocchi di codice identici o molto simili si trovano in diverse parti del codice. Questo è uno dei code smell più comuni e viola il principio "Don't Repeat Yourself" (DRY). La duplicazione può avvenire a vari livelli – da piccoli blocchi di codice a intere funzioni o classi.

**Problemi Causati dal Codice Duplicato:**

1. **Manutenzione Difficile**: Se devi cambiare la logica in un blocco di codice duplicato, dovrai ricordarti di cambiare tutti i duplicati.
2. **Aumento delle Dimensioni del Codice**: Il codice duplicato ingrandisce inutilmente la base di codice, rendendo più difficile la comprensione e la manutenzione.
3. **Probabilità di Errori**: Più codice duplicato significa più possibilità di introdurre errori durante aggiornamenti o modifiche.

**Come Identificare il Codice Duplicato:**

- Manualmente, durante la revisione del codice.
- Utilizzando strumenti di analisi statica che possono rilevare la duplicazione.

**Esempio di Codice con Codice Duplicato:**

#### Codice con Codice Duplicato

```c
#include <stdio.h>

int main() {
    int temperature[] = {23, 26, 22, 21, 25, 24};
    int umidita[] = {45, 50, 55, 60, 50, 45};

    int lunghezzaTemp = sizeof(temperature) / sizeof(temperature[0]);
    int lunghezzaUmidita = sizeof(umidita) / sizeof(umidita[0]);

    // Calcolo della media delle temperature
    int sommaTemp = 0;
    for (int i = 0; i < lunghezzaTemp; ++i) {
        sommaTemp += temperature[i];
    }
    float mediaTemp = (float)sommaTemp / lunghezzaTemp;
    printf("Media Temperatura: %.2f\n", mediaTemp);

    // Calcolo della media dell'umidità
    int sommaUmidita = 0;
    for (int i = 0; i < lunghezzaUmidita; ++i) {
        sommaUmidita += umidita[i];
    }
    float mediaUmidita = (float)sommaUmidita / lunghezzaUmidita;
    printf("Media Umidità: %.2f\n", mediaUmidita);

    return 0;
}
```

#### Refactoring per Rimuovere il Codice Duplicato

```c
#include <stdio.h>

float calcola_media(int array[], int lunghezza) {
    int somma = 0;
    for (int i = 0; i < lunghezza; ++i) {
        somma += array[i];
    }
    return (float)somma / lunghezza;
}

int main() {
    int temperature[] = {23, 26, 22, 21, 25, 24};
    int umidita[] = {45, 50, 55, 60, 50, 45};

    int lunghezzaTemp = sizeof(temperature) / sizeof(temperature[0]);
    int lunghezzaUmidita = sizeof(umidita) / sizeof(umidita[0]);

    float mediaTemp = calcola_media(temperature, lunghezzaTemp);
    float mediaUmidita = calcola_media(umidita, lunghezzaUmidita);

    printf("Media Temperatura: %.2f\n", mediaTemp);
    printf("Media Umidità: %.2f\n", mediaUmidita);

    return 0;
}
```

In questo esempio, il codice per calcolare la media è stato estratto in una funzione `calcola_media`, riducendo così la duplicazione del codice e migliorando la leggibilità e la manutenibilità del programma.
### Funzione Troppo Lunga

**Definizione:**
Una "Funzione Troppo Lunga" è un code smell che si verifica quando una funzione in un programma diventa eccessivamente lunga e complessa. Le funzioni lunghe sono difficili da leggere, capire e mantenere. Spesso, esse contengono diverse funzionalità mescolate, violando il principio di singola responsabilità.

**Problemi Causati da Funzioni Troppo Lunghe:**
1. **Difficoltà di Comprensione**: Più lunga è la funzione, più è difficile per i programmatori capire cosa fa e come.
2. **Manutenzione Complicata**: Le modifiche diventano più rischiose, poiché una modifica può influenzare parti inaspettate del codice.
3. **Riutilizzo Ridotto**: Le funzioni lunghe spesso fanno troppe cose, rendendo difficile il loro riutilizzo in altri contesti.

**Soluzioni per Funzioni Troppo Lunghe:**
- **Suddivisione in Funzioni più Piccole**: Identificare blocchi di codice all'interno della funzione che possono essere separati in nuove funzioni.
- **Uso di Commenti e Documentazione**: Se la suddivisione non è possibile, documentare bene la funzione può aiutare.
- **Rifattorizzazione**: Ristrutturare il codice per migliorarne la leggibilità senza modificarne il comportamento.

#### Esempio di Funzione Troppo Lunga in C

```c
#include <stdio.h>

void elabora_dati(int dati[], int lunghezza) {
    // Calcolo della media
    int somma = 0;
	    for (int i = 0; i < lunghezza; ++i) {
        somma += dati[i];
    }
    float media = (float)somma / lunghezza;

    // Ricerca del valore massimo
    int massimo = dati[0];
    for (int i = 1; i < lunghezza; ++i) {
        if (dati[i] > massimo) {
            massimo = dati[i];
        }
    }

    // Ricerca del valore minimo
    int minimo = dati[0];
    for (int i = 1; i < lunghezza; ++i) {
        if (dati[i] < minimo) {
            minimo = dati[i];
        }
    }

    printf("Media: %.2f, Massimo: %d, Minimo: %d\n", media, massimo, minimo);
}

int main() {
    int array[] = {10, 20, 30, 40, 50};
    int lunghezza = sizeof(array) / sizeof(array[0]);
    elabora_dati(array, lunghezza);
    return 0;
}
```

#### Refactoring per Suddividere la Funzione

```c
#include <stdio.h>

float calcola_media(int dati[], int lunghezza) {
    int somma = 0;
    for (int i = 0; i < lunghezza; ++i) {
        somma += dati[i];
    }
    return (float)somma / lunghezza;
}

int trova_massimo(int dati[], int lunghezza) {
    int massimo = dati[0];
    for (int i = 1; i < lunghezza; ++i) {
        if (dati[i] > massimo) {
            massimo = dati[i];
        }
    }
    return massimo;
}

int trova_minimo(int dati[], int lunghezza) {
    int minimo = dati[0];
    for (int i = 1; i < lunghezza; ++i) {
        if (dati[i] < minimo) {
            minimo = dati[i];
        }
    }
    return minimo;
}

void elabora_dati(int dati[], int lunghezza) {
    float media = calcola_media(dati, lunghezza);
    int massimo = trova_massimo(dati, lunghezza);
    int minimo = trova_minimo(dati, lunghezza);

    printf("Media: %.2f, Massimo: %d, Minimo: %d\n", media, massimo, minimo);
}

int main() {
    int array[] = {10, 20, 30, 40, 50};
    int lunghezza = sizeof(array) / sizeof(array[0]);
    elabora_dati(array, lunghezza);
    return 0;
}
```

In questo refactoring, la funzione `elabora_dati` è stata suddivisa in tre funzioni separate: `calcola_media`, `trova_massimo` e `trova_minimo`. Ogni funzione ora ha una responsabilità chiara e specifica, rendendo il codice più leggibile e manutenibile.

### Lista di Parametri Troppo Lunga

**Definizione:**
Una "Lista di Parametri Troppo Lunga" è un code smell che si verifica quando una funzione o un metodo ha un numero eccessivo di parametri. Una lunga lista di parametri può rendere la funzione difficile da comprendere e utilizzare. Inoltre, aumenta la complessità e il rischio di errori, poiché è più difficile tenere traccia di tutti gli argomenti.

**Problemi Causati da Liste di Parametri Troppo Lunghe:**
1. **Difficoltà di Comprensione e Uso**: Più parametri ha una funzione, più è difficile ricordare l'ordine e il significato di ciascuno.
2. **Manutenzione Complicata**: Aggiungere, rimuovere o modificare parametri può diventare problematico e richiedere cambiamenti in tutte le chiamate alla funzione.
3. **Accoppiamento Elevato**: La funzione diventa strettamente accoppiata a tutte le aree del codice che la utilizzano.

**Soluzioni per Liste di Parametri Troppo Lunghe:**
- **Introduzione di Oggetti Parametro**: Raggruppare parametri correlati in una struttura o un oggetto.
- **Uso di Parametri Predefiniti**: Se il linguaggio lo consente, utilizzare parametri con valori predefiniti per ridurre il numero di argomenti necessari.
- **Rifattorizzazione in Funzioni più Piccole**: Se possibile, dividere la funzione in più funzioni più piccole e mirate.

#### Esempio di Lista di Parametri Troppo Lunga in C

```c
#include <stdio.h>

void crea_report(int giorno, int mese, int anno, int ore, int minuti, int dati1, int dati2, int dati3, int dati4) {
    // Logica per creare il report
    printf("Report del %d/%d/%d alle %d:%d\n", giorno, mese, anno, ore, minuti);
    // Altre operazioni con i dati...
}

int main() {
    crea_report(7, 1, 2024, 15, 30, 100, 200, 300, 400);
    return 0;
}
```

#### Refactoring per Ridurre i Parametri

```c
#include <stdio.h>

typedef struct {
    int giorno;
    int mese;
    int anno;
    int ore;
    int minuti;
} DataOra;

typedef struct {
    int dati1;
    int dati2;
    int dati3;
    int dati4;
} Dati;

void crea_report(DataOra dataOra, Dati dati) {
    // Logica per creare il report
    printf("Report del %d/%d/%d alle %d:%d\n", dataOra.giorno, dataOra.mese, dataOra.anno, dataOra.ore, dataOra.minuti);
    // Altre operazioni con i dati...
}

int main() {
    DataOra dataOra = {7, 1, 2024, 15, 30};
    Dati dati = {100, 200, 300, 400};

    crea_report(dataOra, dati);
    return 0;
}
```

In questo refactoring, abbiamo introdotto due strutture, `DataOra` e `Dati`, per raggruppare i parametri correlati. Ciò riduce significativamente il numero di parametri richiesti dalla funzione `crea_report`, rendendola più chiara e più facile da usare.

### Feature Envy

**Definizione:**
"Feature Envy" è un code smell che si verifica generalmente in contesti di programmazione orientata agli oggetti (OOP), dove un metodo di una classe accede in modo eccessivo ai dati o alle funzionalità di un'altra classe. Tuttavia, il concetto può essere esteso anche a contesti non-OOP, ad esempio quando una funzione dipende in modo eccessivo da dati o funzioni esterne al suo contesto immediato.

In contesti non-OOP, "Feature Envy" può manifestarsi come una funzione che fa un uso eccessivo di variabili globali o parametri esterni, piuttosto che basarsi sui propri dati o parametri.

**Problemi Causati da Feature Envy:**
1. **Accoppiamento Stretto**: La funzione o il metodo diventa troppo dipendente da un'altra parte del codice.
2. **Difficoltà nella Manutenzione**: Le modifiche in una parte del sistema possono avere effetti a cascata non desiderati su altre parti.
3. **Violazione dell'Incapsulamento**: In OOP, ciò va contro il principio di incapsulamento. In contesti non-OOP, indica una cattiva organizzazione del codice.

**Soluzioni per Feature Envy:**
- **Rifattorizzazione**: Spostare la funzione o il metodo più vicino ai dati o alle funzioni a cui accede.
- **Passaggio di Oggetti anziché Singoli Dati**: Se applicabile, passare strutture o insiemi di dati correlati invece di singoli valori.

#### Esempio di Feature Envy in C (senza OOP)

Supponiamo di avere una funzione che calcola statistiche sui dati, ma fa un uso eccessivo di variabili globali.

```c
#include <stdio.h>

int globaleDati1[5] = {1, 2, 3, 4, 5};
int globaleDati2[5] = {6, 7, 8, 9, 10};

void calcola_statistiche() {
    int somma1 = 0;
    for (int i = 0; i < 5; ++i) {
        somma1 += globaleDati1[i];
    }
    // Altre operazioni con globaleDati1 e globaleDati2...
}

int main() {
    calcola_statistiche();
    return 0;
}
```

#### Refactoring per Ridurre Feature Envy

Invece di fare affidamento su variabili globali, possiamo passare i dati come parametri alla funzione.

```c
#include <stdio.h>

void calcola_statistiche(int dati1[], int dati2[], int lunghezza) {
    int somma1 = 0;
    for (int i = 0; i < lunghezza; ++i) {
        somma1 += dati1[i];
    }
    // Altre operazioni con dati1 e dati2...
}

int main() {
    int localDati1[5] = {1, 2, 3, 4, 5};
    int localDati2[5] = {6, 7, 8, 9, 10};

    calcola_statistiche(localDati1, localDati2, 5);
    return 0;
}
```

In questo refactoring, abbiamo ridotto la dipendenza della funzione `calcola_statistiche` dalle variabili globali, passando i dati necessari come parametri. Questo rende la funzione più flessibile, riutilizzabile e meno accoppiata con il contesto globale.

### Costanti Magiche

**Definizione:**
Le "Costanti Magiche" sono valori numerici o stringhe letterali che appaiono nel codice senza spiegazione, rendendo il codice meno leggibile e più difficile da mantenere. Questi valori "magici" possono confondere chiunque legga il codice, perché non è chiaro cosa rappresentino o perché siano stati scelti.

**Problemi Causati dalle Costanti Magiche:**
1. **Leggibilità Ridotta**: Il significato del valore magico non è immediatamente evidente.
2. **Manutenibilità Compromessa**: Cambiare il valore in diverse parti del codice può essere propenso ad errori.
3. **Riusabilità Ridotta**: Il codice con costanti magiche è meno flessibile e più difficile da riutilizzare in contesti diversi.

**Soluzioni per Costanti Magiche:**
- **Sostituzione con Costanti Nominative**: Sostituire le costanti magiche con costanti o variabili nominative che hanno nomi descrittivi.
- **Uso di File di Configurazione o Definizioni Esternalizzate**: Per valori che potrebbero cambiare frequentemente o che devono essere condivisi tra diversi parti del codice.

#### Esempio di Costanti Magiche in C

```c
#include <stdio.h>

int calcola_sconto(int prezzo) {
    if (prezzo > 100) {
        return prezzo * 0.15; // Sconto del 15% per ordini superiori a 100
    }
    return 0;
}

int main() {
    int prezzo = 120;
    printf("Sconto: %d\n", calcola_sconto(prezzo));
    return 0;
}
```

In questo esempio, il valore `100` e `0.15` sono costanti magiche. Non è immediatamente chiaro perché questi valori siano stati scelti o cosa rappresentino.

#### Refactoring per Rimuovere le Costanti Magiche

```c
#include <stdio.h>

// const int SOGLIA_SCONTO = 100;
//const float PERCENTUALE_SCONTO = 0.15;

#define SOGLIA_SCONTO 100
#define PERCENTUALE_SCONTO 0.15

int calcola_sconto(int prezzo) {
    if (prezzo > SOGLIA_SCONTO) {
        return prezzo * PERCENTUALE_SCONTO;
    }
    return 0;
}

int main() {
    int prezzo = 120;
    printf("Sconto: %d\n", calcola_sconto(prezzo));
    return 0;
}
```

Con questo refactoring, le costanti magiche sono state sostituite con costanti nominative `SOGLIA_SCONTO` e `PERCENTUALE_SCONTO`. Ora è molto più chiaro cosa rappresentano questi valori e il codice è diventato più leggibile e facile da mantenere.

### Espressioni Complesse di Basso Livello

**Definizione:**
Le "Espressioni Complesse di Basso Livello" sono un code smell che si verifica quando il codice contiene operazioni complesse, in particolare aritmetiche, di manipolazione di stringhe, o simili, che rendono il codice difficile da leggere e comprendere. Queste espressioni possono essere lunghe, intricate e spesso includono molteplici operazioni in una singola riga.

**Problemi Causati da Espressioni Complesse di Basso Livello:**
1. **Difficoltà di Comprensione**: Il codice diventa meno leggibile e più difficile da capire a prima vista.
2. **Errori**: La complessità aumenta il rischio di errori, specialmente durante la manutenzione o le modifiche al codice.
3. **Test e Debugging Complicati**: Le espressioni complesse rendono più difficile testare e fare il debug del codice.

**Soluzioni per Espressioni Complesse di Basso Livello:**
- **Suddivisione in Parti più Semplici**: Spezzare le espressioni complesse in sottoespressioni più semplici, possibilmente in diverse righe o funzioni.
- **Uso di Variabili Intermedie**: Assegnare parti dell'espressione a variabili intermedie con nomi significativi.
- **Commenti Esplicativi**: Quando la complessità è inevitabile, i commenti possono aiutare a spiegare l'intento dell'espressione.

#### Esempio di Espressione Complessa in C

```c
#include <stdio.h>
#include <string.h>

int main() {
    char stringa[100] = "Esempio di espressione complessa";
    int lunghezza = strlen(stringa);

    if (lunghezza > 10 && stringa[0] == 'E' && stringa[lunghezza - 1] == 'a') {
        printf("La stringa soddisfa i criteri complessi\n");
    }

    return 0;
}
```

#### Refactoring per Semplificare l'Espressione

```c
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool verifica_criteri(const char *stringa, int lunghezza) {
    bool iniziaConE = stringa[0] == 'E';
    bool finisceConA = stringa[lunghezza - 1] == 'a';
    bool lunghezzaMaggioreDi10 = lunghezza > 10;

    return iniziaConE && finisceConA && lunghezzaMaggioreDi10;
}

int main() {
    char stringa[100] = "Esempio di espressione complessa";
    int lunghezza = strlen(stringa);

    if (verifica_criteri(stringa, lunghezza)) {
        printf("La stringa soddisfa i criteri semplificati\n");
    }

    return 0;
}
```

In questo refactoring, l'espressione complessa è stata suddivisa in una funzione `verifica_criteri` che utilizza variabili intermedie con nomi significativi. Ciò rende il codice più leggibile e facile da capire, mantenendo la stessa logica.
### Code Smell: Commenti "Cosa"

**Definizione:** I commenti "Cosa" sono un code smell che si verifica quando il codice è accompagnato da commenti che spiegano in dettaglio cosa fa una specifica porzione di codice. Sebbene i commenti siano importanti per la documentazione, la necessità di spiegare dettagliatamente "cosa" sta facendo il codice indica spesso che il codice stesso non è sufficientemente chiaro o autoesplicativo.

**Problemi Causati dai Commenti 'Cosa':**

1. **Codice Non Intuitivo**: Se è necessario spiegare cosa fa il codice, probabilmente non è abbastanza chiaro.
2. **Manutenzione Complicata**: I commenti possono diventare obsoleti o fuorvianti se non vengono aggiornati insieme al codice.
3. **Leggibilità Ridotta**: Troppi commenti possono rendere il codice più difficile da leggere, soprattutto se sono lunghi o complicati.

**Soluzioni per Commenti 'Cosa':**

- **Rifattorizzazione per Maggiore Chiarezza**: Riscrivere il codice per renderlo più chiaro e autoesplicativo.
- **Uso di Nomi Descrittivi**: Usare nomi di variabili, funzioni e classi che descrivono chiaramente cosa fanno.
- **Riduzione della Complessità**: Semplificare il codice spezzando le funzioni complesse in parti più piccole e gestibili.

#### Esempio di Commenti "Cosa" in C

Immaginiamo un programma che calcola il punteggio finale di un gioco basato su punti guadagnati, penalità, e un bonus per il raggiungimento di un certo livello.

```c
#include <stdio.h>

int main() {
    int puntiGuadagnati = 85; // Punti ottenuti giocando
    int penalita = 5; // Penalità per errori
    int livello = 4; // Livello raggiunto dal giocatore
    int punteggioFinale;

    // Calcolo del punteggio base sottraendo la penalità
    int punteggioBase = puntiGuadagnati - penalita;

    // Controllo se il giocatore ha raggiunto il livello 3
    // Se sì, aggiungi un bonus di 10 punti
    int bonus = 0;
    if (livello >= 3) {
        bonus = 10; // Bonus per aver raggiunto il livello 3
    }

    // Calcolo del punteggio finale sommando punteggio base e bonus
    punteggioFinale = punteggioBase + bonus;

    printf("Punteggio Finale: %d\n", punteggioFinale);
    return 0;
}
```

Questo codice è pieno di commenti "cosa" che spiegano ogni singola riga, rendendo il codice sovraccarico e meno leggibile.

#### Refactoring per Ridurre i Commenti e Migliorare la Chiarezza

```c
#include <stdio.h>

int calcolaPunteggioBase(int punti, int penalita) {
    return punti - penalita;
}

int calcolaBonus(int livello) {
    const int livelloBonus = 3;
    const int valoreBonus = 10;

    if (livello >= livelloBonus) {
        return valoreBonus;
    }
    return 0;
}

int main() {
    int puntiGuadagnati = 85;
    int penalita = 5;
    int livello = 4;

    int punteggioBase = calcolaPunteggioBase(puntiGuadagnati, penalita);
    int bonus = calcolaBonus(livello);

    int punteggioFinale = punteggioBase + bonus;

    printf("Punteggio Finale: %d\n", punteggioFinale);
    return 0;
}
```

Nel codice rifattorizzato, abbiamo rimosso la necessità di commenti ridondanti suddividendo il codice in funzioni più piccole e descrittive. Ogni funzione ha un nome che chiarisce il suo scopo, rendendo il codice complessivamente più leggibile e comprensibile senza l'eccesso di commenti. Questo esempio dimostra come un codice ben strutturato possa spesso "parlare da sé", riducendo la necessità di commenti esplicativi.

### Nomi Oscuri

**Definizione:**
Il code smell "Nomi Oscuri" si verifica quando i nomi di variabili, funzioni, classi o altri identificatori in un programma non sono descrittivi o chiari riguardo al loro scopo o al ruolo che svolgono nel codice. Questi nomi possono essere troppo brevi, vaghi o non avere un legame diretto con la loro funzione nel programma.

**Problemi Causati da Nomi Oscuri:**
1. **Comprensione Ridotta**: I nomi non descrittivi rendono il codice difficile da comprendere e seguire.
2. **Manutenibilità Compromessa**: Il codice con nomi oscuri è più difficile da modificare o correggere perché non è chiaro come le varie parti si relazionino tra loro.
3. **Difficoltà di Collaborazione**: I nuovi sviluppatori o i membri del team faticano a lavorare sul codice a causa della mancanza di chiarezza.

**Soluzioni per Nomi Oscuri:**
- **Rinominare con Nomi Descrittivi**: Scegliere nomi che spieghino chiaramente lo scopo o il ruolo dell'entità nel codice.
- **Utilizzo di Convenzioni di Denominazione**: Adottare uno standard per la denominazione che sia consistente in tutto il codice.

#### Esempio di Nomi Oscuri in C

```c
#include <stdio.h>

int main() {
    int a = 50; // Quantità di prodotto
    int b = 3;  // Prezzo per unità
    int c;      // Costo totale

    c = a * b;
    printf("Costo Totale: %d\n", c);
    return 0;
}
```

In questo esempio, i nomi delle variabili `a`, `b` e `c` sono oscuri e non descrivono ciò che rappresentano.

#### Refactoring per Migliorare la Chiarezza dei Nomi

```c
#include <stdio.h>

int main() {
    int quantitaProdotto = 50;
    int prezzoPerUnita = 3;
    int costoTotale;

    costoTotale = quantitaProdotto * prezzoPerUnita;
    printf("Costo Totale: %d\n", costoTotale);
    return 0;
}
```

Nel codice rifattorizzato, abbiamo rinominato le variabili in `quantitaProdotto`, `prezzoPerUnita` e `costoTotale`, rendendo immediatamente chiaro il loro scopo nel programma. Questo miglioramento della chiarezza aiuta a rendere il codice più leggibile e comprensibile.

### Nomi Incoerenti

**Definizione:**
Il code smell "Nomi Incoerenti" si verifica quando ci sono discrepanze e mancanza di coerenza nell'uso di nomi e identificatori all'interno del codice. Questa incoerenza può manifestarsi nell'uso non uniforme di maiuscole e minuscole, nella variazione degli stili di denominazione (come camelCase, snake_case, etc.), o nella mancata adesione a convenzioni di denominazione stabiliti.

**Problemi Causati da Nomi Incoerenti:**
1. **Leggibilità Ridotta**: L'incoerenza nella denominazione rende il codice meno intuitivo e più difficile da seguire.
2. **Errori**: Può portare a errori, specialmente in linguaggi sensibili alla distinzione tra maiuscole e minuscole.
3. **Manutenzione Complicata**: Rende più difficile la ricerca e il riconoscimento di specifici identificatori nel codice.

**Soluzioni per Nomi Incoerenti:**
- **Standardizzazione dei Nomi**: Decidere e adottare una convenzione di denominazione coerente in tutto il codice.
- **Revisione e Correzione**: Passare in rassegna il codice esistente per correggere le discrepanze.

#### Esempio di Nomi Incoerenti in C

```c
#include <stdio.h>

int main() {
    int NumeroArticoli = 30;
    int costoPerArticolo = 45;
    int totale_costo;

    totale_costo = NumeroArticoli * costoPerArticolo;
    printf("Costo totale: %d\n", totale_costo);
    return 0;
}
```

Qui, `NumeroArticoli` usa PascalCase, `costoPerArticolo` usa camelCase, e `TotaleCosto` usa snake_case, creando una mancanza di coerenza.

#### Refactoring per Coerenza nei Nomi

```c
#include <stdio.h>

int main() {
    int numeroArticoli = 30;       // Uso coerente di camelCase
    int costoPerArticolo = 45;     // Uso coerente di camelCase
    int totaleCosto;               // Uso coerente di camelCase

    totaleCosto = numeroArticoli * costoPerArticolo;
    printf("Costo totale: %d\n", totaleCosto);
    return 0;
}
```

In questo esempio rifattorizzato, tutti i nomi delle variabili sono stati modificati per seguire lo stile camelCase, creando una coerenza nell'intero frammento di codice. Questo aumenta la leggibilità e riduce la possibilità di confusione o errori.

### Dead Code (Codice Morto)

**Definizione:** Il "Dead Code" o "Codice Morto" è un code smell che si verifica quando ci sono parti di codice in un programma che non vengono mai eseguite o utilizzate. Questo può includere funzioni mai chiamate, codice dopo istruzioni return, variabili mai utilizzate, e così via. Il codice morto rende il programma più grande e più complicato senza alcun motivo.

**Problemi Causati dal Codice Morto:**

1. **Manutenzione Complicata**: Aumenta inutilmente la complessità e la quantità di codice da mantenere.
2. **Confusione**: Può generare confusione tra gli sviluppatori, che potrebbero chiedersi se quel codice sia importante o meno.
3. **Spreco di Risorse**: Occupa spazio e risorse senza fornire alcun beneficio.

**Soluzioni per il Codice Morto:**

- **Identificazione e Rimozione**: Utilizzare strumenti di analisi statica per identificare il codice morto e rimuoverlo.
- **Revisione Regolare del Codice**: Fare revisioni periodiche del codice per cercare e eliminare parti inutilizzate.

#### Esempio di Codice Morto in C
Immaginiamo un programma che calcola statistiche su un array di dati, ma contiene variabili e porzioni di codice che non vengono mai utilizzate effettivamente.

```c
#include <stdio.h>

int calcolaMassimo(int dati[], int lunghezza) {
    int massimo = dati[0];
    for (int i = 1; i < lunghezza; i++) {
        if (dati[i] > massimo) {
            massimo = dati[i];
        }
    }
    return massimo;
}

int main() {
    int dati[] = {10, 20, 30, 40, 50};
    int lunghezzaDati = sizeof(dati) / sizeof(dati[0]);

    int massimo = calcolaMassimo(dati, lunghezzaDati);

    int minimo = 9999;
    int somma = 0;
    int media;

    for (int i = 0; i < lunghezzaDati; i++) {
        somma += dati[i];
    }
    media = somma / lunghezzaDati;

    printf("Massimo: %d\n", massimo);
    return 0;
}
```

In questo esempio, le variabili `minimo`, `somma` e `media`, insieme al codice che le calcola, non vengono mai utilizzate nel programma.

#### Refactoring per Rimuovere il Codice Morto

```c
#include <stdio.h>

int calcolaMassimo(int dati[], int lunghezza) {
    int massimo = dati[0];
    for (int i = 1; i < lunghezza; i++) {
        if (dati[i] > massimo) {
            massimo = dati[i];
        }
    }
    return massimo;
}

int main() {
    int dati[] = {10, 20, 30, 40, 50};
    int lunghezzaDati = sizeof(dati) / sizeof(dati[0]);

    int massimo = calcolaMassimo(dati, lunghezzaDati);

    printf("Massimo: %d\n", massimo);
    return 0;
}
```

Con questo refactoring, abbiamo eliminato le variabili e il codice inutilizzato, rendendo il programma più diretto e facile da comprendere. Questo aiuta a concentrarsi sulle parti del codice che hanno un effettivo impatto sulla funzionalità del programma.

### Generalità Speculativa

**Definizione:**
La "Generalità Speculativa" è un code smell che si verifica quando il codice viene scritto in modo eccessivamente generale o complesso, con l'intento di coprire possibili esigenze o casi d'uso futuri che non sono ancora realtà. Questo approccio va contro il principio "You Ain't Gonna Need It" (YAGNI) dell'Extreme Programming, che raccomanda di implementare funzionalità solo quando sono effettivamente necessarie.

**Problemi Causati dalla Generalità Speculativa:**
1. **Complessità Non Necessaria**: Aggiunge complessità senza un beneficio immediato, rendendo il codice più difficile da comprendere e mantenere.
2. **Spreco di Risorse**: Investimento di tempo e risorse nello sviluppo di funzionalità che potrebbero non essere mai utilizzate.
3. **Difficoltà nella Manutenzione**: La manutenzione di codice non utilizzato o eccessivamente complesso può diventare onerosa.

**Soluzioni per la Generalità Speculativa:**
- **Adottare il Principio YAGNI**: Sviluppare solo funzionalità che sono immediatamente necessarie.
- **Semplificazione del Codice**: Rimuovere o semplificare parti del codice che non servono agli scopi attuali del software.

#### Esempio di Generalità Speculativa in C
Nell'esempio, abbiamo una libreria per gestire un semplice database di utenti, che include funzioni aggiunte in modo speculativo per funzionalità future.

```c
#include <stdio.h>
#include<string.h>
#include <stdlib.h>

typedef struct {
    char* name;
    int age;
    char* futureFeature;
} User;

// Initializes a user
User* createUser(const char* name, int age) {
    User* newUser = (User*)malloc(sizeof(User));
    if (!newUser) return NULL;
    
    newUser->name = (char*)malloc(strlen(name) + 1);
    strcpy(newUser->name, name);
    newUser->age = age;
    newUser->futureFeature = NULL;
    return newUser;
}

// Displays user information
void displayUser(User* user) {
    if (user == NULL) return;
    printf("Name: %s, Age: %d\n", user->name, user->age);
}

void updateUserFeature(User* user, const char* feature) {
    if (user == NULL) return;
    if (user->futureFeature != NULL) free(user->futureFeature);
    user->futureFeature = (char*)malloc(strlen(feature) + 1);
    strcpy(user->futureFeature, feature);
}

int main() {
    User* user = createUser("John Doe", 30);
    displayUser(user);
    
    // Cleanup
    free(user->name);
    free(user->futureFeature);
    free(user);
    return 0;
}

```

#### Refactoring per Eliminare la Generalità Speculativa

```c
#include <stdio.h>
#include<string.h>
#include <stdlib.h>

typedef struct {
    char* name;
    int age;
} User;

// Initializes a user
User* createUser(const char* name, int age) {
    User* newUser = (User*)malloc(sizeof(User));
    if (!newUser) return NULL;
    
    newUser->name = (char*)malloc(strlen(name) + 1);
    strcpy(newUser->name, name);
    newUser->age = age;
    return newUser;
}

// Displays user information
void displayUser(User* user) {
    if (user == NULL) return;
    printf("Name: %s, Age: %d\n", user->name, user->age);
}

int main() {
    User* user = createUser("John Doe", 30);
    displayUser(user);
    
    // Cleanup
    free(user->name);
    free(user);
    return 0;
}

```

- **Rimosso `futureFeature` dalla struct `User`**: Questo campo era stato aggiunto in previsione di requisiti futuri ma non viene utilizzato nella versione corrente del software, portando ad allocazioni di memoria inutili e complessità.
- **Rimossa la funzione `updateUserFeature`**: Questa funzione era speculativa e progettata per gestire una funzionalità non utilizzata. Eliminandola, semplifichiamo il codice e ci concentriamo sulle funzionalità attualmente necessarie.

Questo processo di rifattorizzazione elimina la generalità speculativa rimuovendo codice e funzionalità inutilizzati, rendendo il codice più semplice e più facile da mantenere.
### Code Smell: Troppi If/Else e Switch

**Definizione:** Il code smell "Troppi If/Else e Switch" emerge quando un programma fa un uso eccessivo di istruzioni condizionali complesse come `if`, `else if`, `else`, e `switch`. Questa pratica può rendere il codice difficile da leggere, comprendere e mantenere. Spesso indica una violazione del principio di singola responsabilità e può suggerire la necessità di rifattorizzare il codice in un design più pulito e modulare.

**Problemi Causati da Troppi If/Else e Switch:**

1. **Leggibilità Ridotta**: Sequenze complesse di condizioni possono rendere il codice difficile da seguire.
2. **Manutenibilità Complicata**: Aggiungere nuove condizioni o modificare quelle esistenti diventa complicato e propenso ad errori.
3. **Violazione del Principio di Singola Responsabilità**: Il codice potrebbe assumere troppe responsabilità, rendendolo meno riutilizzabile e più difficile da testare.

**Soluzioni per Troppi If/Else e Switch:**

- **Rifattorizzazione in Funzioni o Classi**: Suddividere il codice in funzioni o classi più piccole e specializzate.
- **Uso di Polimorfismo**: In contesti OOP, utilizzare il polimorfismo per gestire comportamenti diversi basati su tipi diversi.
- **Pattern Strategy o State**: Utilizzare pattern di design come Strategy o State per gestire complesse logiche condizionali.

#### Esempio di Troppi If/Else e Switch in C
Immaginiamo di avere un programma che gestisce diverse operazioni in base al giorno della settimana.

```c
#include <stdio.h>

void gestisciGiorno(int giorno) {
    if (giorno == 1) {
        printf("Lunedì: Pianificazione settimanale\n");
    } else if (giorno == 2) {
        printf("Martedì: Riunioni interne\n");
    } else if (giorno == 3) {
        printf("Mercoledì: Lavoro su progetti\n");
    } else if (giorno == 4) {
        printf("Giovedì: Formazione\n");
    } else if (giorno == 5) {
        printf("Venerdì: Report settimanale\n");
    } else if (giorno == 6) {
        printf("Sabato: Giorno libero\n");
    } else if (giorno == 7) {
        printf("Domenica: Giorno libero\n");
    } else {
        printf("Errore: giorno non valido\n");
    }
}

int main() {
    gestisciGiorno(3);
    return 0;
}
```

Risulta in una serie di if-else if molto lunga, e lo stesso problema lo avremmo comunque con uno switch.
#### Refactoring per Ridurre Troppi If/Else e Switch

Un approccio efficace può essere l'utilizzo di un array di stringhe per rappresentare le attività di ciascun giorno, riducendo così la necessità di molteplici `if`/`else`.

```c
#include <stdio.h>

void gestisciGiorno(int giorno) {
    char *attivita[] = {
        "Errore: giorno non valido",   // indice 0 non utilizzato
        "Lunedì: Pianificazione settimanale", // 1
        "Martedì: Riunioni interne",          // 2
        "Mercoledì: Lavoro su progetti",      // 3
        "Giovedì: Formazione",                // 4
        "Venerdì: Report settimanale",        // 5
        "Sabato: Giorno libero",              // 6
        "Domenica: Giorno libero"             // 7
    };

    if (giorno >= 1 && giorno <= 7) {
        printf("%s\n", attivita[giorno]);
    } else {
        printf("%s\n", attivita[0]);
    }
}

int main() {
    gestisciGiorno(3);
    return 0;
}
```

In questo refactoring, il codice è stato semplificato utilizzando un array per mappare i giorni della settimana alle loro rispettive attività. Questo rende il programma più conciso e facilmente modificabile, eliminando la lunga serie di `if`/`else`.
Ovviamente per linguaggi di programmazione ad alto livello come Python, abbiamo soluzioni più ad alto livello e scalabili come i dizionari:

```python
def gestisci_giorno(giorno):
    attivita = {
        1: "Lunedì: Pianificazione settimanale",
        2: "Martedì: Riunioni interne",
        3: "Mercoledì: Lavoro su progetti",
        4: "Giovedì: Formazione",
        5: "Venerdì: Report settimanale",
        6: "Sabato: Giorno libero",
        7: "Domenica: Giorno libero"
    }

    print(attivita.get(giorno, "Errore: giorno non valido"))

gestisci_giorno(3)

```
### Violazione del Principio KISS

**Definizione:** La violazione del principio KISS ("Keep It Simple, Stupid") si verifica quando il codice diventa innecessariamente complicato o sofisticato, perdendo in semplicità e chiarezza. Questo può succedere quando si introducono soluzioni o ottimizzazioni non necessarie, strutture complesse, o si cerca di anticipare bisogni futuri che potrebbero non materializzarsi mai.

**Problemi Causati dalla Violazione del Principio KISS:**

1. **Comprensione Difficoltosa**: Il codice complesso è più difficile da leggere e capire.
2. **Manutenzione Onerosa**: La complessità superflua rende più difficile la manutenzione e l'aggiornamento del codice.
3. **Incremento del Rischio di Errori**: La complessità aumenta la probabilità di errori e bug.

**Soluzioni per la Violazione del Principio KISS:**

- **Semplificare il Codice**: Rivedere il codice per identificare e rimuovere la complessità non necessaria.
- **Concentrarsi sulle Esigenze Immediate**: Sviluppare funzionalità basandosi sulle necessità attuali piuttosto che su ipotetici bisogni futuri.
- **Evitare l'Ottimizzazione Prematura**: Non ottimizzare o complicare il codice prima che sia chiaro se e come queste modifiche saranno necessarie.

#### Esempio di Violazione del Principio KISS in C
```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int c = 30;
    int risultato;

    risultato = (a > b ? (a > c ? a : c) : (b > c ? b : c));

    printf("Il maggiore è: %d\n", risultato);
    return 0;
}
```

#### Refactoring che rispetta il principio KISS
```c
#include <stdio.h>

int max(int x, int y) {
    return x > y ? x : y;
}

int main() {
    int a = 10;
    int b = 20;
    int c = 30;
    int risultato;

    // Codice semplificato e più leggibile
    risultato = max(a, max(b, c));

    printf("Il maggiore è: %d\n", risultato);
    return 0;
}
```

In questo esempio, il refactoring coinvolge l'introduzione di una funzione `max` per semplificare la logica di confronto, rendendo il codice principale più pulito e facile da seguire.