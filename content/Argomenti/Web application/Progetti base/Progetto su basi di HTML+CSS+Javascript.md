
> [!warning] Attenzione
> Questa esercitazione vale come simulazione di verifica.

# Esercitazione: Task Board Interattiva

## Obiettivo
Realizzare una piccola web app chiamata **Task Board Interattiva**, che permetta di gestire una lista di attività giornaliere direttamente nel browser.

Il progetto deve essere costruito **basandosi soprattutto sul capitolo 11 (JavaScript)** e sul **capitolo 13 (DOM)**, usando come prerequisiti i capitoli:

- 4: Fondamenti di HTML
- 5: Fondamenti di CSS
- 7: Selettori CSS
- 8: Proprietà CSS

Non devono essere usati argomenti dei capitoli non ancora svolti.

## Scenario
L’utente deve poter inserire attività da svolgere, visualizzarle in una lista e interagire con esse. L’applicazione deve quindi unire:

- struttura HTML semplificata ma corretta;
- stile CSS ordinato e leggibile;
- logica JavaScript;
- manipolazione dinamica del DOM;
- gestione di eventi utente.

## Prodotto richiesto
Creare una pagina web che funzioni come una piccola bacheca personale delle attività.

### Funzionalità minime obbligatorie
La pagina deve permettere di:

1. inserire una nuova attività tramite un campo di input e un pulsante;
2. aggiungere l’attività alla pagina senza ricaricare il browser;
3. mostrare ogni attività come elemento della lista o come card;
4. contrassegnare un’attività come completata;
5. eliminare un’attività;
6. mostrare un contatore con:
   - numero totale di attività;
   - numero di attività completate;
   - numero di attività ancora da fare;
7. impedire l’inserimento di attività vuote;
8. mostrare un messaggio di errore o avviso direttamente nella pagina;
9. usare il DOM per creare, modificare e rimuovere elementi HTML.

## Vincoli tecnici
Il progetto deve rispettare questi vincoli:

- usare almeno un file `index.html`;
- usare almeno un file `style.css`;
- usare almeno un file `script.js`;
- collegare lo script con il tag `<script src="..."></script>`;
- usare i selettori per selezionare elementi del DOM;
- usare `addEventListener()` per gestire almeno i click;
- usare variabili, condizioni e cicli del capitolo 11;
- usare `classList.add()`, `classList.remove()` oppure `classList.toggle()`;
- creare almeno alcuni elementi dinamicamente con `document.createElement()`;
- non usare librerie esterne;
- non usare React, Bootstrap, jQuery, AJAX, Firebase o `localStorage`.

## Struttura minima suggerita

```text
progetto-task-board/
├── index.html
├── style.css
└── script.js
```

## Interfaccia minima suggerita
La pagina può contenere:

- un titolo principale;
- una breve descrizione del progetto;
- un’area con input e pulsante "Aggiungi";
- una sezione per i messaggi di errore;
- una sezione con i contatori;
- una lista delle attività.

## Comportamento atteso

### Aggiunta attività
Quando l’utente scrive un testo e preme il pulsante:

- se il testo è valido, viene creata una nuova attività nel DOM;
- se il testo è vuoto o contiene solo spazi, compare un messaggio di errore.

### Completamento attività
Ogni attività deve avere un controllo, per esempio:

- un pulsante `Completa`, oppure
- una checkbox.

Quando l’utente la segna come completata:

- l’aspetto grafico deve cambiare;
- i contatori devono aggiornarsi.

### Eliminazione attività
Ogni attività deve avere un pulsante `Elimina`.

Quando l’utente lo preme:

- l’attività viene rimossa dal DOM;
- i contatori vengono aggiornati.

## Competenze che l’esercitazione verifica
Questa esercitazione mette insieme le competenze principali dei capitoli richiesti:

- **Capitolo 4**: struttura di una pagina HTML, elementi base, form semplice;
- **Capitolo 5**: regole CSS, colori, spaziature, bordi, font;
- **Capitolo 7**: selettori per classi, id, discendenti e stati;
- **Capitolo 8**: proprietà visive per differenziare elementi e stati;
- **Capitolo 11**: variabili, stringhe, numeri, booleani, `if`, funzioni, gestione dei dati;
- **Capitolo 13**: selezione elementi, eventi, modifica classi, creazione e rimozione nodi.

## Indicazioni di progettazione
Per mantenere il progetto coerente con i capitoli studiati:

- tenere il codice JavaScript semplice e leggibile;
- separare bene struttura, stile e comportamento;
- usare nomi chiari per variabili e funzioni;
- evitare duplicazione di codice;
- creare almeno una funzione dedicata ad aggiornare i contatori;
- creare almeno una funzione dedicata alla creazione di una nuova attività.

## Consegna
Consegnare:

- i file `index.html`, `style.css` e `script.js`;
- una cartella del progetto ordinata;
- codice commentato solo dove necessario.

## Estensioni facoltative
Se il lavoro base è completo, si può aggiungere **solo come extra**:

- un filtro `Tutte / Completate / Da fare`;
- un pulsante `Rimuovi completate`;
- un ordinamento semplice delle attività;
- una data o priorità scritta dentro ogni task;
- supporto al tasto `Invio` per aggiungere una task.

## Criteri di valutazione

### 1. Correttezza tecnica

- la pagina funziona senza errori evidenti;
- le attività vengono aggiunte, completate ed eliminate correttamente;
- i contatori sono sempre aggiornati.

### 2. Uso dei contenuti del corso

- HTML corretto e ben organizzato;
- CSS leggibile e coerente;
- JavaScript con uso corretto di variabili, condizioni e funzioni;
- DOM manipolato in modo appropriato.

### 3. Qualità del codice

- file ordinati;
- indentazione corretta;
- nomi chiari;
- logica divisa in funzioni sensate.

### 4. Esperienza utente

- interfaccia comprensibile;
- messaggi chiari;
- distinzione visiva tra task completate e non completate.