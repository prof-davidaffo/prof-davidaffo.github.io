# Struttura
La progressione di esercizi sarà strutturata nel seguente modo:
### Parte 1: Struttura del Progetto e Nomenclatura dei File
1. **Creazione di una Struttura di Directory**: Crea una struttura di directory come quella descritta nella dispensa per un progetto C di tua scelta.
2. **Nomenclatura Consistente**: Rinomina file esistenti secondo le convenzioni suggerite, riflettendo il loro scopo o contenuto.

### Parte 2: Modularità del Codice
3. **Divisione in Moduli**: Partendo da un programma C esistente, suddividi il codice in moduli logici separati, ciascuno con un file header (.h) e un file sorgente (.c).
4. **Implementazione delle Funzioni**: Implementa un set di funzioni dichiarate in un file header, come l'esempio `calcoli.h` e `calcoli.c`.

### Parte 3: Uso dei File Header
5. **Creazione e Uso dei File Header**: Crea un file header che dichiara varie funzioni e utilizzalo in diversi file sorgente.
6. **Header Guards**: Aggiungi header guards a un file header esistente per prevenire inclusioni multiple.

### Parte 4: Makefile e Automazione della Compilazione
7. **Scrittura di un Makefile Semplice**: Scrivi un Makefile che compili un progetto C composto da più file.
8. **Automazione dei Test**: Modifica il Makefile per includere un target che esegue automaticamente i test del codice.

### Parte 5: Preprocessor Directives
9. **Uso di `#define` per le Costanti**: Utilizza `#define` per definire costanti utilizzate in più file.
10. **Inclusione Condizionale**: Scrivi codice che utilizza `#ifdef`, `#ifndef` e `#endif` per includere parti di codice solo se certe condizioni sono soddisfatte.

### Parte 6: Debugging e Gestione degli Errori
11. **Macro di Debugging**: Implementa una macro per il debugging che stampa messaggi solo se una certa macro (`DEBUG`, per esempio) è definita.
12. **Assert e Gestione degli Errori**: Utilizza `assert` per verificare le assunzioni nel tuo codice e gestisci gli errori ritornando codici di errore specifici dalle funzioni.

### Parte 7: Esempi Avanzati e Concetti Complessi
13. **Tipi Opachi**: Implementa una struttura dati usando un tipo opaco, seguendo l'esempio di `FileList`.
14. **Funzionalità Condizionali**: Crea un modulo che compila in modo diverso a seconda delle macro definite, per esempio abilitando funzionalità di logging solo in modalità debug.

# Codice di partenza
Immaginiamo di avere un singolo file sorgente C, `biblioteca.c`, che include tutto: la definizione delle strutture, la dichiarazione delle funzioni per la gestione dei libri e degli utenti, e un semplice `main` per testare queste funzionalità.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Struttura per rappresentare un libro
typedef struct {
    char titolo[50];
    char autore[50];
} Libro;

// Struttura per rappresentare un utente
typedef struct {
    char nome[50];
    char cognome[50];
} Utente;

// Prototipi di funzioni per la gestione dei libri
void aggiungiLibro(Libro *libri, int *numeroLibri, char *titolo, char *autore);
void visualizzaLibri(Libro *libri, int numeroLibri);

// Prototipi di funzioni per la gestione degli utenti
void aggiungiUtente(Utente *utenti, int *numeroUtenti, char *nome, char *cognome);
void visualizzaUtenti(Utente *utenti, int numeroUtenti);

int main() {
    Libro libri[10];
    Utente utenti[10];
    int numeroLibri = 0, numeroUtenti = 0;

    aggiungiLibro(libri, &numeroLibri, "Il Signore degli Anelli", "J.R.R. Tolkien");
    aggiungiUtente(utenti, &numeroUtenti, "Mario", "Rossi");

    visualizzaLibri(libri, numeroLibri);
    visualizzaUtenti(utenti, numeroUtenti);

    return 0;
}

void aggiungiLibro(Libro *libri, int *numeroLibri, char *titolo, char *autore) {
    strcpy(libri[*numeroLibri].titolo, titolo);
    strcpy(libri[*numeroLibri].autore, autore);
    (*numeroLibri)++;
}

void visualizzaLibri(Libro *libri, int numeroLibri) {
    printf("Libri nella biblioteca:\n");
    for(int i = 0; i < numeroLibri; i++) {
        printf("%d: %s di %s\n", i+1, libri[i].titolo, libri[i].autore);
    }
}

void aggiungiUtente(Utente *utenti, int *numeroUtenti, char *nome, char *cognome) {
    strcpy(utenti[*numeroUtenti].nome, nome);
    strcpy(utenti[*numeroUtenti].cognome, cognome);
    (*numeroUtenti)++;
}

void visualizzaUtenti(Utente *utenti, int numeroUtenti) {
    printf("Utenti della biblioteca:\n");
    for(int i = 0; i < numeroUtenti; i++) {
        printf("%d: %s %s\n", i+1, utenti[i].nome, utenti[i].cognome);
    }
}
```

# Parte 1,2 e 3 struttura del progetto

Con questo codice come punto di partenza, possiamo procedere agli esercizi delle Parti 1, 2 e 3. Ecco come suddividere il codice esistente seguendo gli esercizi proposti:

1. **Struttura del Progetto e Nomenclatura dei File**: Suddividi il codice esistente in più file seguendo la struttura proposta negli esercizi della Parte 1. Dovrai creare i file `main.c`, `gestione_libri.c`, `gestione_utenti.c` e i corrispondenti file header `gestione_libri.h` e `gestione_utenti.h`.

2. **Modularità del Codice**: Assicurati che ogni modulo (libri e utenti) abbia il proprio file sorgente e header, come specificato nella Parte 2 degli esercizi.

3. **Uso dei File Header**: Sposta le dichiarazioni delle strutture e i prototipi delle funzioni nei rispettivi file header. Assicurati di includere gli header necessari nei file sorgente dove queste strutture o funzioni vengono utilizzate, seguendo le istruzioni della Parte 3.
Procediamo con lo svolgimento degli esercizi, partendo dalla suddivisione del codice preesistente in una struttura di progetto organizzata e modulare. Seguendo la struttura proposta, creeremo file specifici per gestire libri e utenti, oltre al file `main.c` per il punto di ingresso del programma.

La struttura del progetto sarà suddivisa come segue:

- `src/` - Contiene i file sorgente `.c`
  - `main.c`
  - `gestione_libri.c`
  - `gestione_utenti.c`
- `include/` - Contiene i file header `.h`
  - `gestione_libri.h`
  - `gestione_utenti.h`
- `lib/` - Per eventuali librerie esterne (vuota per questo esercizio)
- `tests/` - Per i test del codice (sarà considerato in seguito)
- `doc/` - Per la documentazione (può essere riempita più avanti)

### File: `gestione_libri.h`

```c
// Verifica se il file header è già stato incluso
#ifndef GESTIONE_LIBRI_H
#define GESTIONE_LIBRI_H

// Struttura per rappresentare un libro
typedef struct {
    char titolo[50];
    char autore[50];
} Libro;

// Prototipi di funzioni per la gestione dei libri
void aggiungiLibro(Libro *libri, int *numeroLibri, char *titolo, char *autore);
void visualizzaLibri(Libro *libri, int numeroLibri);

#endif // GESTIONE_LIBRI_H
```

### File: `gestione_libri.c`

```c
#include "gestione_libri.h"
#include <stdio.h>
#include <string.h>

void aggiungiLibro(Libro *libri, int *numeroLibri, char *titolo, char *autore) {
    strcpy(libri[*numeroLibri].titolo, titolo);
    strcpy(libri[*numeroLibri].autore, autore);
    (*numeroLibri)++;
}

void visualizzaLibri(Libro *libri, int numeroLibri) {
    printf("Libri nella biblioteca:\n");
    for(int i = 0; i < numeroLibri; i++) {
        printf("%d: %s di %s\n", i+1, libri[i].titolo, libri[i].autore);
    }
}
```

### File: `gestione_utenti.h`

```c
#ifndef GESTIONE_UTENTI_H
#define GESTIONE_UTENTI_H

// Struttura per rappresentare un utente
typedef struct {
    char nome[50];
    char cognome[50];
} Utente;

// Prototipi di funzioni per la gestione degli utenti
void aggiungiUtente(Utente *utenti, int *numeroUtenti, char *nome, char *cognome);
void visualizzaUtenti(Utente *utenti, int numeroUtenti);

#endif // GESTIONE_UTENTI_H
```

### File: `gestione_utenti.c`

```c
#include "gestione_utenti.h"
#include <stdio.h>
#include <string.h>

void aggiungiUtente(Utente *utenti, int *numeroUtenti, char *nome, char *cognome) {
    strcpy(utenti[*numeroUtenti].nome, nome);
    strcpy(utenti[*numeroUtenti].cognome, cognome);
    (*numeroUtenti)++;
}

void visualizzaUtenti(Utente *utenti, int numeroUtenti) {
    printf("Utenti della biblioteca:\n");
    for(int i = 0; i < numeroUtenti; i++) {
        printf("%d: %s %s\n", i+1, utenti[i].nome, utenti[i].cognome);
    }
}
```

### File: `main.c`

```c
#include <stdio.h>
#include "gestione_libri.h"
#include "gestione_utenti.h"

int main() {
    Libro libri[10];
    Utente utenti[10];
    int numeroLibri = 0, numeroUtenti = 0;

    aggiungiLibro(libri, &numeroLibri, "Il Signore degli Anelli", "J.R.R. Tolkien");
    aggiungiUtente(utenti, &numeroUtenti, "Mario", "Rossi");

    visualizzaLibri(libri, numeroLibri);
   

 visualizzaUtenti(utenti, numeroUtenti);

    return 0;
}
```

Con questi passaggi, abbiamo suddiviso il codice iniziale in moduli logici e creato una struttura di progetto organizzata. Ogni file ha un ruolo specifico, e i file header servono per dichiarare le strutture e le funzioni che possono essere utilizzate da altri moduli. Questo rende il progetto più facile da gestire, espandere e mantenere.

Perfetto, ora che abbiamo una struttura di progetto ben organizzata e abbiamo suddiviso il codice in moduli logici con i relativi file header, possiamo passare alla Parte 4: **Makefile e Automazione della Compilazione**.

L'obiettivo di questa parte è creare un `Makefile` che automatizzi il processo di compilazione del nostro progetto, rendendolo più efficiente e riducendo la possibilità di errori. Un `Makefile` specifica come costruire il programma, definendo i target (i file da generare), le dipendenze (i file sorgente necessari per generare un target) e le regole (i comandi per generare i target dalle dipendenze).

# Parte 4: Scrittura di un Makefile Semplice

Creeremo un `Makefile` per il nostro sistema di gestione della biblioteca. Il `Makefile` avrà target per compilare il programma, per pulire i file oggetto e l'eseguibile, e per eseguire eventuali test.

#### Contenuto del Makefile

```makefile
# Variabili
CC=gcc
CFLAGS=-Iinclude

# Nome dell'eseguibile
TARGET=gestione_biblioteca

# File sorgente e oggetto
SRCS=$(wildcard src/*.c)
OBJS=$(SRCS:src/%.c=%.o)

# Regola principale: compila il programma
$(TARGET): $(OBJS)
	$(CC) -o $@ $^

# Compilazione dei file oggetto da sorgente
%.o: src/%.c
	$(CC) $(CFLAGS) -c $<

# Pulizia dei file di build
clean:
	rm -f $(OBJS) $(TARGET)

# PHONY specifica che i seguenti non sono nomi di file
.PHONY: clean
```

#### Spiegazione

- `CC` specifica il compilatore da usare, in questo caso `gcc`.
- `CFLAGS` contiene le opzioni del compilatore, `-Iinclude` indica di cercare i file header nella directory `include`.
- `TARGET` è il nome dell'eseguibile da generare.
- `SRCS` trova automaticamente tutti i file sorgente nella directory `src`.
- `OBJS` genera i nomi dei file oggetto corrispondenti ai file sorgente.
- La regola `$(TARGET)` specifica come generare l'eseguibile dai file oggetto. `$@` rappresenta il nome del target, mentre `$^` rappresenta tutte le dipendenze (i file oggetto).
- La regola `%o: src/%.c` specifica come generare un file oggetto da un file sorgente. `$<` rappresenta la prima dipendenza della regola, in questo caso il file sorgente corrispondente.
- `clean` è una regola per rimuovere i file generati dalla compilazione, inclusi i file oggetto e l'eseguibile.
- `.PHONY` indica che `clean` non è un file, ma un nome di una regola.

### Uso del Makefile

Per compilare il progetto, naviga nella directory radice del progetto e digita `make`. Questo genera l'eseguibile `gestione_biblioteca` (o il nome che hai scelto).

Per rimuovere i file oggetto e l'eseguibile, pulendo la directory del progetto, usa `make clean`.

Questo `Makefile` è un esempio semplice ma potente che puoi estendere per includere regole per i test automatici o per gestire più directory sorgente e include.

Se hai bisogno di ulteriori dettagli su come funzionano le regole del `Makefile` o desideri procedere con un'altra parte dell'esercizio, fammi sapere!

Capito, procederò utilizzando i termini originali in inglese dove appropriato. Concentriamoci sull'uso delle preprocessor directives nel nostro progetto di gestione della biblioteca.

# Parte 5: Preprocessor Directives in C

Le preprocessor directives sono potenti strumenti che permettono di influenzare la fase di pre-elaborazione del codice sorgente prima della sua compilazione effettiva. Di seguito esploreremo come utilizzarle efficacemente nel contesto del nostro progetto.

#### 1. Uso di `#define` per Definire Costanti

Iniziamo con l'utilizzo della direttiva `#define` per definire costanti che possono essere usate in tutto il nostro progetto.

Nel file `gestione_libri.h`, possiamo definire una costante per la dimensione massima degli array di libri:

```c
#ifndef GESTIONE_LIBRI_H
#define GESTIONE_LIBRI_H

#define MAX_LIBRI 50

typedef struct {
    char titolo[50];
    char autore[50];
} Libro;

void aggiungiLibro(Libro *libri, int *numeroLibri, char *titolo, char *autore);
void visualizzaLibri(Libro *libri, int numeroLibri);

#endif // GESTIONE_LIBRI_H
```

E analogamente nel file `gestione_utenti.h` per gli utenti:

```c
#ifndef GESTIONE_UTENTI_H
#define GESTIONE_UTENTI_H

#define MAX_UTENTI 50

typedef struct {
    char nome[50];
    char cognome[50];
} Utente;

void aggiungiUtente(Utente *utenti, int *numeroUtenti, char *nome, char *cognome);
void visualizzaUtenti(Utente *utenti, int numeroUtenti);

#endif // GESTIONE_UTENTI_H
```

#### 2. Inclusione Condizionale

La capacità di includere o escludere parti di codice a compilazione può essere molto utile, ad esempio, per abilitare il logging o il debugging solo in determinate build.

Possiamo definire una macro `DEBUG` e usare `#ifdef` per controllare se includere il codice di debug nel nostro file sorgente:

```c
// In uno dei file .c, ad esempio main.c
#include <stdio.h>
#include "gestione_libri.h"
#include "gestione_utenti.h"

#define DEBUG

int main() {
    #ifdef DEBUG
    printf("Modalità debug attiva\n");
    #endif

    // Il resto del codice del main
}
```

#### 3. Uso di Macro

Le macro possono essere utilizzate non solo per definire costanti semplici, ma anche per creare "funzioni" macro, che possono eseguire operazioni semplici direttamente nel codice pre-elaborato.

Per esempio, potremmo definire una macro per controllare se abbiamo raggiunto il limite di libri o utenti:

```c
#define CHECK_MAX_ITEMS(current, max) if ((current) >= (max)) { \
                                       printf("Raggiunto il numero massimo di elementi\n"); \
                                       return; \
                                      }
```

Questa macro potrebbe essere usata nelle funzioni `aggiungiLibro` e `aggiungiUtente` per controllare se c'è spazio per aggiungere nuovi libri o utenti.

### Conclusione

Questi esempi mostrano come utilizzare le preprocessor directives per definire costanti, includere condizionalmente parti di codice e creare macro utili. Le preprocessor directives aggiungono un livello di flessibilità al tuo codice, permettendoti di controllare la compilazione in modi che non sono possibili con il solo codice C standard.