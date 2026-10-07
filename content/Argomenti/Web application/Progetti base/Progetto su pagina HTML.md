## Fase 1: HTML
Progetto: realizza una pagina web personale “Chi sono”
Contesto  
Devi creare la tua prima vera pagina web in HTML, come se dovessi presentarti online. La pagina dovrà contenere informazioni su di te, i tuoi interessi e alcuni contenuti organizzati in modo chiaro usando i principali elementi HTML studiati.
L’obiettivo non è solo “scrivere tag”, ma costruire una pagina sensata, ordinata e corretta dal punto di vista della struttura.
Consegna  
Realizza un file chiamato `index.html` che rappresenti una semplice pagina personale.
La pagina dovrà avere una struttura completa e rispettare le regole sintattiche di HTML viste nella dispensa.
Cosa deve contenere il progetto
1. Struttura base del documento  
    Il file deve contenere:
- la dichiarazione `<!DOCTYPE html>`  
- il tag `<html>` con attributo `lang="it"`  
- la sezione `<head>`  
- la sezione `<body>`  
Nel `<head>` devono essere presenti:
- il tag `<meta charset="UTF-8">`  
- un meta tag con il tuo nome come autore  
- un meta tag con una breve descrizione della pagina  
- un titolo significativo nel tag `<title>`  
2. Titolo e introduzione  
    Nel `<body>` inserisci:
- un titolo principale con `<h1>`  
- un sottotitolo con `<h2>`  
- un paragrafo di presentazione in cui parli brevemente di te  
Nel testo devi usare almeno:
- un elemento `<em>`  
- un elemento `<strong>`  
3. Immagine e collegamento  
    La pagina deve contenere:
- un’immagine usando il tag `<img>` con attributi `src` e `alt`  
- un collegamento usando il tag `<a>` verso un sito a tua scelta  
Il testo del collegamento deve avere senso, quindi non usare formule generiche come “clicca qui”.
4. Lista dei tuoi interessi  
    Inserisci una lista non ordinata `<ul>` con almeno 3 tuoi interessi.
Uno degli elementi della lista dovrà contenere una sotto-lista ordinata `<ol>`, ad esempio per spiegare meglio quell’interesse.
Esempio:
- Sport
    1. Pallavolo
    2. Calcio
5. Pulsante  
    Inserisci un pulsante `<button>`.  
    Può essere normale oppure disabilitato usando l’attributo `disabled`.
6. Uso di un contenitore  
    Raggruppa almeno una parte importante della pagina dentro un elemento `<div>`.
7. Commenti  
    Inserisci nel codice:
- almeno un commento su una riga  
- almeno un commento su più righe  
8. Correttezza del codice  
    Il codice deve rispettare queste regole:
- tutti i tag devono essere chiusi correttamente  
- gli elementi devono essere annidati nel modo giusto  
- non devono esserci elementi visibili fuori dal `<body>`  
- non devono essere inventati nuovi tag  
Vincoli
- Non usare CSS  
- Non usare JavaScript  
- Usa solo HTML  
- Il codice deve essere ordinato e ben indentato  
- I nomi dei tag devono essere scritti in minuscolo  
Prodotto finale richiesto  
Devi consegnare:
- il file `index.html`  
- una breve spiegazione scritta in cui descrivi quali tag hai usato e a cosa servono  
Domande finali di riflessione  
Dopo aver completato il progetto, rispondi brevemente a queste domande:
1. Perché HTML è un linguaggio di markup e non un linguaggio di programmazione?
2. A cosa serve la sezione `<head>`?
3. Qual è la differenza tra un elemento block e uno inline?
4. Perché l’attributo `alt` è importante nelle immagini?
5. Perché bisogna chiudere correttamente i tag?
## Fase 2: CSS
Progetto – Fase 2: aggiungere stile alla pagina personale con CSS
Contesto  
Hai già realizzato una pagina web personale in HTML. Ora devi trasformarla in una pagina più curata dal punto di vista grafico, utilizzando un file CSS esterno.
Lo scopo di questa seconda fase non è solo “cambiare colori”, ma imparare a selezionare correttamente gli elementi HTML usando diversi tipi di selettori CSS.
Consegna  
Partendo dal file `index.html` già realizzato nel progetto precedente, crea un secondo file chiamato `style.css` e collegalo correttamente alla pagina HTML.
All’interno del foglio di stile dovrai applicare regole CSS usando vari tipi di selettori studiati:
- type selector
- class selector
- id selector
- grouping selector
- compound selector
- descendant selector
- pseudo-class
- almeno un selettore strutturale come `:first-child`, `:last-of-type` oppure `:nth-of-type(...)`
Obiettivo del progetto  
Migliorare l’aspetto della pagina personale e dimostrare di saper usare in modo corretto e consapevole i selettori CSS.
Cosa devi fare
1. Collegare il file CSS  
    Nel file HTML aggiungi nel `<head>` il collegamento al file `style.css`.
---
2. Applicare stili generali con type selector  
    Usa almeno 3 type selector per stilizzare elementi della pagina.
Ad esempio:
- il `body`
- i titoli `h1` e `h2`
- i paragrafi `p`
- le immagini `img`
- i pulsanti `button`
Gli stili possono riguardare per esempio:
- colore del testo
- colore di sfondo
- font
- margini
- allineamento
- larghezza dell’immagine
- bordi
---
3. Aggiungere classi all’HTML e usare class selector  
    Modifica l’HTML assegnando alcune classi significative a determinati elementi.
Per esempio:
- una classe per un paragrafo introduttivo
- una classe per una sezione importante
- una classe per un elenco di interessi
- una classe per evidenziare un testo
Poi usa i class selector nel CSS per applicare stili specifici.
Attenzione: i nomi delle classi devono essere chiari e sensati.

---
4. Usare almeno un id selector  
    Sfrutta un `id` già presente oppure aggiungine uno a un elemento importante della pagina, ad esempio il titolo principale.
Usa poi un id selector nel CSS per assegnargli uno stile specifico.
Nota didattica: puoi ricordare agli studenti che l’id selector esiste e funziona, ma che in generale per lo styling è spesso preferibile usare le classi.

---
5. Usare un grouping selector  
    Scrivi almeno una regola che applichi lo stesso stile a più selettori diversi.
Esempio di richiesta:
- applicare lo stesso font o lo stesso colore a `h1`, `h2` e `p`  
    oppure
- applicare lo stesso margine a più tipi di elementi
---
6. Usare almeno un compound selector  
    Scrivi almeno una regola con compound selector.
Esempi possibili:
- selezionare solo un paragrafo che possiede una certa classe
- selezionare un’immagine che possiede due classi
- selezionare un elemento con una classe specifica solo se è di un certo tipo
Questo serve a dimostrare che sai rendere un selettore più preciso.
---
7. Usare almeno un descendant selector  
    Scrivi almeno una regola che selezioni elementi in base alla loro posizione nella struttura HTML.
Per esempio:
- tutti i link contenuti in una certa sezione
- tutti i paragrafi dentro un `div`
- gli elementi di lista dentro una certa area della pagina
Lo scopo è distinguere tra “qualunque elemento di quel tipo” e “solo quelli contenuti in una certa parte della pagina”.
---
8. Usare almeno una pseudo-class  
    Applica uno stile che cambi in base allo stato di un elemento.
Puoi usare per esempio:
- `a:hover`
- `button:hover`
- `a:visited`
- `button:disabled`
L’effetto deve essere semplice e leggibile.
---
9. Usare almeno una pseudo-class strutturale  
    Applica uno stile a elementi in base alla loro posizione.
Per esempio:
- il primo elemento della lista
- l’ultimo elemento della lista
- gli elementi pari della lista
- il secondo elemento della lista
Puoi usare selettori come:
- `li:first-child`
- `li:last-of-type`
- `li:nth-of-type(even)`
- `li:nth-of-type(2)`
---
10. Migliorare la leggibilità della pagina  
    Nel complesso, il risultato finale deve rendere la pagina:
- più ordinata
- più leggibile
- più gradevole visivamente
Non serve fare un lavoro complesso o “artistico”: conta soprattutto la correttezza nell’uso dei selettori.
Vincoli
- Usa un file CSS esterno chiamato `style.css`
- Non usare ancora JavaScript
- Non usare framework o librerie esterne
- Non usare `!important`
- Il codice deve essere ben ordinato e indentato
- I selettori devono essere scelti in modo coerente con il loro significato
- Evita di usare gli id come soluzione principale per tutto lo styling
Prodotto finale richiesto  
Devi consegnare:
- `index.html`
- `style.css`
Inoltre devi aggiungere una breve spiegazione finale in cui indichi:
- quali tipi di selettori hai usato
- su quali elementi li hai applicati
- perché hai scelto quei selettori
Competenze da dimostrare  
Con questo progetto devi dimostrare di saper:
- collegare HTML e CSS
- selezionare correttamente gli elementi
- distinguere i vari tipi di selettori
- applicare stili coerenti
- leggere la struttura della pagina per scegliere il selettore giusto
Richieste minime obbligatorie nel CSS  
Il file `style.css` deve contenere almeno:
- 3 regole con type selector
- 3 regole con class selector
- 1 regola con id selector
- 1 grouping selector
- 1 compound selector
- 1 descendant selector
- 1 pseudo-class
- 1 pseudo-class strutturale
Domande finali di riflessione  
Dopo aver completato il lavoro, rispondi alle seguenti domande:
1. Che differenza c’è tra type selector, class selector e id selector?
2. Perché una classe è in genere più riutilizzabile di un id?
3. Che differenza c’è tra `p.highlighted` e `p .highlighted`?
4. A cosa serve una pseudo-class come `:hover`?
5. Perché è utile usare selettori strutturali come `:nth-of-type(...)` invece di aggiungere classi manualmente a ogni elemento?