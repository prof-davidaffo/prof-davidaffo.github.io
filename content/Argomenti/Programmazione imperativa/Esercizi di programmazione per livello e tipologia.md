## Eserciziari per prendere spunto
[Eserciziario IP UniGe](https://drive.google.com/file/d/16Efu09VNfc7SmRnXHz3JG47Gdr88ETjc/view?usp=drive_link)

[Esercizi Giacomin Università Brescia](https://drive.google.com/file/d/1bWiveypb-johUEkuodZ9v8mm7WsdqFQX/view?usp=drive_link)
## Esercizi sui fondamenti
### Livello base
#### Operazioni aritmetiche di base su due numeri
Scrivere un programma che legge due numeri interi e ne stampa la somma, la differenza, il prodotto, il quoziente e il modulo.
#### Swap
Scrivere un programma che scambia tra loro i valori di due variabili intere, lette da input, e stampa i valori prima e dopo lo scambio.
#### Perimetro
Scrivere un programma che calcola perimetro e area di un rettangolo, dopo aver chiesto e letto i dati necessari.
#### Calcolo età
Scrivere un programma che chiede all'utente in che anno è nato e stampa quanti anni ha.
#### Calcolatore di minuti
Scrivere un programma che prende in input il numero di ore (compreso fra 0 e 23) e di minuti (compreso fra 0 e 59) e stampa in output il numero di minuti totali.
#### Area del cerchio
Scrivere un programma che calcola circonferenza e area di un cerchio.
#### Media tra tre numeri
Scrivere un programma che calcola la media tra tre numeri.
#### Valutazione di variabili booleane
Scrivere un programma che, per ciascuna di queste frasi, stampa la frase seguita dal simbolo = e da un’espressione booleana che calcola il suo valore di verità.

> [!hint] Suggerimento
> Per stampare i booleani come true e false invece che come 1 e 0 si deve impostare a true il flag boolalpha di cout. Per fare questo si usa la stessa sintassi della stampa, ovvero si deve “stampare” un comando, come segue: cout << boolalpha

• tre è maggiore di uno
• quattro diviso due è minore di zero
• il carattere “zero" è uguale al valore zero
• dieci mezzi è compreso fra zero escluso e dieci incluso (ossia: dieci mezzi è maggiore di zero E dieci mezzi è minore o uguale a dieci)
• non è vero che tre è maggiore di due e minore di uno
• tre minore di meno cinque implica sette maggiore di zero

### Livello avanzato
#### Stampa in ordine crescente senza confronto
Scrivere un programma che legge due numeri e li stampa in ordine crescente senza confrontarli.

> [!hint] Suggerimento
> Se alla media sottraggo la semidistanza, che valore ottengo?
#### Swap senza variabile ausiliaria
Scrivere un programma che scambia fra loro i valori di due variabili senza usare variabili di appoggio.

> [!hint] Suggerimento
> L’or esclusivo, o XOR (in C++ l’operatore ^), gode di varie proprietà, tra cui la proprietà di simmetria
> - cioè A^B == B^A – e la proprietà associativa – cioè (A^B)^C == A^(B^C). Inoltre, A^A \==0 e A^0\==A per qualsiasi A, B e C.

## Controllo del flusso (solo condizionale senza cicli)
### Livello base
#### Confronto caratteri
Leggere due caratteri e stampare “Uguali” se sono identici, altrimenti “Diversi”.
#### Confronto numeri
Leggere tre numeri interi e stamparli in ordine crescente.
### Livello medio
#### Triangolo
Scrivere un programma che verifica se tre numeri interi dati in input possono essere i lati di un triangolo, cioè se nessuno di essi è maggiore della somma degli altri due o minore del valore assoluto della loro differenza.
#### Scegliere un colore tramite l'iniziale
#### Calcolare il valore assoluto di un numero
Stampare il valore assoluto di un numero intero.
#### Pari o dispari
Verificare se il numero inserito è pari o dispari.
#### Scegliere una cena attraverso un menù
All'utente viene presentato cosa scegliere come primo piatto, secondo e dolce tra 4 scelte disponibili per ogni portata. Alla fine viene stampato l'intero menù scelto.
#### Giocare una mano di morra cinese
Simulare un round di carta-forbice-sasso tra due giocatori e stampane l'esito.
#### Termometro
Scrivere un programma che legge da input un numero intero temp e stampa:

• “Freddo dannato” se temp è compreso fra −20 e 0
• “Freddo” se temp è compreso fra 1 e 15
• “Normale” se temp è compreso fra 16 e 23
• “Caldo” se temp è compreso fra 24 e 30
• “Caldo da morire” se temp è compreso fra 31 e 40
• “Non ci credo, il termometro deve essere rotto” se temp è superiore a 40 o inferiore a −20
#### Verificare su un anno è bisestile o no
Inserito in input un anno, calcolare se è bisestile o no.
Calcolo degli anni bisestili:

Un anno è bisestile se soddisfa le seguenti condizioni:

- È divisibile per 4.
- Se è divisibile per 100, deve essere anche divisibile per 400.
#### Numero del mese
Stampare il nome del mese corrispondente a un numero da 1 a 12.
### Livello avanzato
#### Orologio
Scrivere un programma che scrive in lettere i nomi italiani delle ore, approssimati per difetto a 15 minuti. Il programma deve prendere in input due valori interi, uno tra 1 e 12 (ore) e l’altro tra 0 e 59 (minuti) e se i valori dati in input non rispettano il vincolo stampa un messaggio di errore ed esce ritornando -1 come codice di errore. Se l’input è corretto, scrive “Sono le ore " seguito dal valore delle ore (p.es. se è 11 scrive “undici", ma se è 1 scrive “una") e dal valore dei minuti, approssimato al quarto d’ora (p.es. se è 18 scrive “ e un quarto", se è 39 scrive “ e mezza", se è 55 scrive “ e tre quarti"; se è 0 invece non scrive niente). Infine, se i minuti non sono divisibili esattamente per 15, scrive “ circa".
#### Equazione di secondo grado
Scrivere un programma che prende in input tre numeri reali, a, b e c e stampa le radici dell’equazione di secondo grado ax2 + bx + c. Attenzione alle radici immaginarie.

> [!hint] Suggerimento
> Radice di x: sqrt(x); aggiungere in testa al file: \#include \<cmath\>

#### Azienda spedizioni
Un'azienda di spedizioni vuole sviluppare un sistema per calcolare il costo di spedizione di un pacco in base al suo peso e alla destinazione. Le regole per il calcolo del costo sono le seguenti:

Peso del pacco:
- Leggero: se il peso è inferiore o uguale a 1 kg.
- Medio: se il peso è superiore a 1 kg ma inferiore o uguale a 5 kg.
- Pesante: se il peso è superiore a 5 kg ma inferiore o uguale a 20 kg.
- Molto Pesante: se il peso è superiore a 20 kg.

Destinazione:
- Nazionale: Spedizioni all'interno del paese.
- Internazionale: Spedizioni verso l'estero.
    
Tariffe di spedizione:

|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|Leggero|   |Medio|   |Pesante|   |Molto Pesante|   |
|Nazionale|Internazionale|Nazionale|Internazionale|Nazionale|Internazionale|Nazionale|Internazionale|
|5€|10€|10€|20€|15€|30€|25€|50€|

  

L'algoritmo deve prendere in input il peso del pacco e la destinazione, e restituire il costo di spedizione.
#### Promozioni nel negozio
Chiedi all'utente di inserire il prezzo di base di un prodotto, se il prodotto è in promozione (rispondendo con "sì" o "no"), e la categoria del prodotto (rispondendo con "A", "B" o "C"). Se il prodotto è in promozione, applica uno sconto del 10% per i prodotti di categoria A, del 15% per i prodotti di categoria B e del 20% per i prodotti di categoria C. Successivamente, calcola il prezzo finale aggiungendo una tassa del 22% sul prezzo scontato (se applicabile) o sul prezzo di base.

## Controllo del flusso (condizionale e cicli)
### Livello base
#### Calcolare la media di n numeri letti da input
Calcolare la media di n numeri letti da input, creare due varianti diverse, una col for e una col while o do-while.
Nella variante col for, l'utente inserisce di quanti numeri vuole calcolare la media.
Nella variante con while o do-while, l'utente inserisce numeri finché non inserisce il numero zero.
#### Lettere maiuscole
Leggere lettere maiuscole finché l’utente non inserisce un carattere non maiuscolo e stampare la più piccola.
#### Stampare una successione di numeri con una determinata regola
#### Indovina la radice quadrata di un numero, riprovando finché non riesci
L'utente inserisce un numero n. Poi gli viene chiesto di indovinarne la radice quadrata, finché non riesce. Non utilizzare funzioni per calcolare la radice quadrata.
#### Stampare il carattere fornito n volte
Inserire in input un carattere e un numero intero n, stampare il carattere n volte.
### Livello medio
#### Conteggio unario
Scrivi un programma che chiede dei numeri interi positivi. Il programma stampa tante barre `|` quante il numero inserito su una nuova riga. Ogni volta il programma chiede all'utente se vuole uscire o inserire un altro numero.
#### Massimo K per somma di K
Scrivere un programma che riceva in ingresso un numero positivo N e determini il massimo intero K tale che la somma dei primi K interi sia minore o uguale a N.
#### Stampare i primi 5 anni bisestili a partire dall'anno inserito
Scrivi un algoritmo che chieda all'utente di inserire un numero intero positivo N e, successivamente, stampi i primi 5 anni bisestili strettamente superiori al numero acquisito.
Ad esempio: se inserisco l’anno 2198, l’output sarà: 2204 2208 2212 2216 2220
#### Calcolare il MCM di due numeri
Inseriti due numeri, calcolare il loro MCM.
#### Calcolare MCD di due numeri
Inseriti due numeri, calcolare il loro MCD.
#### Determinare se un numero è primo
Inserito un numero n determinare se è primo oppure no.
#### Convertire numero da binario a decimale
Inserire un numero binario e convertirlo in decimale.
#### Convertire numero da decimale a binario
Scrivere un programma che preso in input un numero in base 10 lo trasformi in binario.
#### Colore preferito
Scrivere un programma che chiede all'utente il suo colore preferito proponendo almeno 5 scelte di colori che iniziano con lettere diverse. Il colore viene scelto dall'utente con l'iniziale del colore, è indifferente se la lettera inserita è minuscola o maiuscola. Se la lettera inserita non corrisponde a nessun colore, il programma ricomincia da capo.
#### Giocare più mani di morra cinese
Scrivere un programma che faccia giocare più mani di morra cinese e che chieda agli utenti se vogliono continuare o no dopo ogni mano. Stampare ogni volta il punteggio dei due giocatori e quando si termina stampare il vincitore.
Posso anche considerare un giocatore solo che gioca contro il computer.
#### Trapezio di x
Scrivere un programma che legge due numeri interi positivi e stampa il trapezio rettangolo fatto di `x` con le basi lunghe quanto i numeri letti, e l'altezza pari alla differenza fra le basi più uno. Esempio con 5 e 9:
```
xxxxx
xxxxxx
xxxxxxx
xxxxxxxx
xxxxxxxxx
```

#### Triangolo di asterischi
Stampare un triangolo di asterischi con base di lunghezza data. Ad esempio se inserisco 3:
```
*
**
***
```
#### Generare una serie di numeri di Fibonacci fino a un certo numero n
Inserire un numero n e scrivere i primi n numeri della sequenza di Fibonacci. 
La sequenza di Fibonacci è una serie di numeri in cui ogni numero è la somma dei due numeri precedenti, a partire da 0 e 1. La sequenza inizia così: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34…  
Il primo numero della sequenza è 0, il secondo è 1. A partire dal terzo numero, ogni numero della sequenza è ottenuto sommando i due numeri precedenti. Ad esempio, il terzo numero è 1 (0 + 1), il quarto numero è 2 (1 + 1), il quinto numero è 3 (1 + 2), e così via.
#### Calcolare il fattoriale di un numero
Dato un numero n calcolare il suo fattoriale. Nel caso si sappiano usare le funzioni, calcolarlo con la ricorsione.
#### Somma, pari e dispari finché non inserisco zero
Scrivi un programma che chieda in input una serie di numeri interi positivi fino a quando l'utente inserisce il numero zero. Il programma deve calcolare e stampare la somma e la media di tutti i numeri inseriti (escludendo lo zero). Inoltre, il programma deve stampare il numero di numeri pari e dispari inseriti.
#### Massimo e minimo finché non inserisco zero
Scrivi un programma che chieda in input una serie di numeri interi positivi fino a quando l'utente inserisce il numero zero. Il programma deve calcolare e stampare il massimo e il minimo.
#### Rombo di asterischi
Scrivere un programma che chiede all'utente un numero intero positivo n e stampa un rombo di asterischi che ha sulla diagonale $2\times n+1$ caratteri. Ad esempio su 8 stampa:
```
        *
       *** 
      *****
     *******
    *********
   ***********
  *************
 ***************
*****************
 ***************
  *************
   ***********
    *********
     *******
      *****
       ***
        *
```
Che sulla diagonale ha 17 caratteri.
#### Sequenza di Collatz
Scrivere un algoritmo che:
1. Richieda all’utente di inserire un numero intero positivo.
2. Calcoli la sequenza di Collatz partendo da tale numero. Le regole sono:
    - Se il numero è pari, dividilo per 2.
    - Se il numero è dispari, moltiplicalo per 3 e aggiungi 1.
3. Continua il calcolo fino a quando il numero non diventa 1.
4. Durante l’esecuzione, il programma deve:
    - Stampare ogni valore della sequenza.
    - Contare il numero totale di passaggi necessari per raggiungere il 1.
    - Individuare e stampare il valore massimo raggiunto nella sequenza.
#### Divisori
Realizzare uno schema di flusso che acquisisca da tastiera un numero intero positivo N e ne determini:
- tutti i divisori (eccetto sé stesso)
- il numero totale di divisori
- la somma di tutti i divisori
- il divisore più grande
- la classificazione di N come perfetto, abbondante o difettivo.
### Livello avanzato
#### Numero palindromo
Inserito un numero n verificare se è palindromo o no.
#### Scomposizione in fattori primi
Scrivere un programma che chiede all'utente un numero intero maggiore di 1 e ne stampa la scomposizione in fattori primi. Ad esempio su 392 stampa 392 = 2^3 x 7^ 2.
#### Numero di Armstrong
Verificare se un numero intero positivo dato in input è un numero di Armstrong. Un numero di Armstrong è uguale alla somma delle potenze n-esime delle cifre che lo compongono.
Ad esempio $153=1^3+5^3+3^3$ è un numero di Armstrong.
#### Numeri romani
Scrivere un programma che legge un numero intero positivo compreso tra 1 e 3000 e lo stampa in notazione romana.
#### Invertitore di numeri senza array
Scrivere un programma che chiede all'utente un numero intero positivo e lo stampa al contrario. Ad esempio 27458 diventa 85472.
##### Varianti
Aggiungere il supporto ai numeri negativi.
### Problemi complessi (per verifiche)
#### Minigioco a vita
L'utente inserisce i punti vita del personaggio (che devono essere strettamente maggiori di zero). A quel punto comincia un prototipo di gioco che dura 5 turni. Ad ogni turno l'utente vede la vita attuale del personaggio e quella massima inserita all'inizio (ad esempio se la vita attuale e' 20 e quella iniziale 50: 20/50) L'utente ogni turno puo' scegliere una mossa: Far combattere il personaggio e perdere 10 punti vita o far riposare il personaggio e guadagnare 20 punti vita. Se la vita del personaggio scende a 0 o sotto, stampa un messaggio "Sei morto" e termina il gioco. Se la vita del personaggio arriva o sale oltre i punti vita iniziali, stampa il messaggio "Completamente ripristinato" e imposta la sua vita attuale uguale a quella massima. Quando finiscono i turni e non sei morto, stampa il messaggio "Sei sopravvissuto".
#### Azienda spedizioni
Scrivere un programma che gestisce le spedizioni di un’azienda. Il programma dovrà:

1. Chiedere all’utente di inserire il numero di pacchi da spedire (N, intero positivo).
    
2. Per ciascun pacco (da 1 a N):
    
    - Richiedere il peso del pacco (in kg, valore positivo). Se il valore inserito non è positivo, richiedere nuovamente l’inserimento.
    - Richiedere la destinazione, che può essere:
        - **N** (o **n**) per spedizione nazionale
        - **I** (o **i**) per spedizione internazionale  
            Se il valore inserito non corrisponde a nessuna delle opzioni, richiedere nuovamente l’inserimento.
3. Determinare la categoria del pacco in base al peso:
    
    - **Leggero:** peso ≤ 1 kg
    - **Medio:** 1 < peso ≤ 5 kg
    - **Pesante:** 5 < peso ≤ 20 kg
    - **Molto Pesante:** peso > 20 kg
4. Calcolare il costo di spedizione per ciascun pacco in base alla seguente tabella:

|Categoria|Nazionale|Internazionale|
|---|---|---|
|Leggero|5€|10€|
|Medio|10€|20€|
|Pesante|15€|30€|
|Molto Pesante|25€|50€|


5. Per ogni pacco, stampare:
    
    - Numero del pacco
    - Peso inserito
    - Destinazione (stampare “Nazionale” o “Internazionale”)
    - Categoria determinata
    - Costo di spedizione
    
    Se il costo per un pacco supera 30€, stampare accanto al costo anche il messaggio: "Pacco costoso".
    
6. Al termine, stampare:
    
    - Il costo totale di tutte le spedizioni.
    - La media del costo per pacco.

Utilizzare cicli e strutture condizionali per gestire l’inserimento e la validazione dei dati, il calcolo delle tariffe e la stampa dei risultati.
#### Somma di numeri primi in serie
Scrivi un programma che esegua le seguenti operazioni:

- L'utente inserisce una serie di numeri finché non inserisce il numero zero.
- Calcola la somma di tutti i numeri primi presenti nella serie inserita

## Strutture dati di base
### Esercizi di riscaldamento
#### creaArrayInt
Crea un array di prova con elementi di tipo int. Scrivere un programma che dichiara un array di N interi e lo popola assegnando ad ogni elemento il valore calcolato come N‑i.
#### creaArrayFloat
Crea un array di float. Scrivere un programma uguale al precedente, ma che lavora su array di float.
#### stampaArrayInt
Stampa un array di interi. Scrivere un programma che, dato un array di interi e la sua lunghezza N, stampi tutti gli elementi.
#### stampaArrayFloat
Stampa un array di float. Scrivere un programma uguale al precedente, ma che lavora su array di float.
#### leggiArrayInt
Leggi un array di int da tastiera. Scrivere un programma che dichiara un array di N interi e lo popola leggendo i valori da input.
### Esercizi di base
#### Trova massimo e conteggio
Scrivere un programma che legge N interi in un array e stampa il valore massimo contenuto, insieme al numero di volte in cui questo appare.
#### Conta numeri pari e dispari
Scrivere un programma che legge N interi in un array e, con un opportuno messaggio, stampa il numero P dei numeri pari e il numero D di quelli dispari presenti.
#### reverse
Scrivere un programma che legge N interi in un array denominato “source” e copia in un array “dest” gli elementi di “source” in ordine inverso. Successivamente, stampare entrambi gli array (lasciando una riga vuota tra le stampe).
#### Crivello di Eratostene
Scrivere un programma che, utilizzando l’algoritmo del Crivello di Eratostene, trova i numeri primi minori di 1000. L’algoritmo prevede di inizializzare un array di booleani a true, marcare i multipli di ogni numero partendo da 2 e stampare i numeri che risultano primi.
#### Array bidimensionale (M×N riempito di 0)
Scrivere un programma che definisce due costanti, M pari a 5 e N pari a 8, dichiara un array bidimensionale di dimensioni M×N e lo riempie interamente di zeri.
#### Prodotto di matrici
Date due matrici compatibili al prodotto di matrici, eseguirne il prodotto riga per colonna.
#### Tavola pitagorica
Scrivere un programma che definisce una costante N pari a 10, dichiara un array bidimensionale per la tavola pitagorica (dimensioni N×N) e lo riempie in modo tale che l’elemento (i, j) contenga il prodotto tra i+1 e j+1. Successivamente, il programma chiede all’utente una coppia di valori compresi tra 1 e 10 e restituisce il loro prodotto, ottenuto consultando la tavola come look‑up table.
#### Esercitazione con test 1 (voti e studenti)
https://drive.google.com/file/d/1LLCe1oQJUtBTbKzwfSXgUL9ObRjPlc28/view?usp=sharing
### Esercizi più avanzati
#### palyndrome
Scrivere un programma che legge un array e calcola un valore booleano che vale true se l’array è palindromo (cioè, se gli elementi letti da sinistra verso destra sono uguali a quelli letti da destra verso sinistra). Il programma deve poi stampare un messaggio che comunichi il risultato.

> [!hint]  Suggerimento
> Utilizzare il programma reverse per confrontare l’array originale con quello invertito.
#### Frequenza dei valori
Scrivere un programma che legge un array di interi e stampa la frequenza di ogni valore contenuto, ovvero il numero di volte che ciascun valore compare.
#### Secondo valore più elevato
Scrivere un programma che legge un array di interi e stampa il secondo valore più elevato presente nell’array.
#### Ordinamento con copia in un array ordinato
Scrivere un programma che legge un array di interi denominato “source” e copia il suo contenuto, ordinato in modo crescente, in un altro array “dest”. Infine, stampare l’array ordinato.
#### Ordinamento in modo crescente (in-place)
Scrivere un programma che legge un array di interi, riordina i suoi elementi in modo crescente senza utilizzare un array ausiliario, e lo stampa.
#### reverseinPlace
Scrivere un programma che legge un array di float e inverte l’ordine dei valori contenuti, senza utilizzare un array ausiliario.

> [!hint]  Suggerimento
> Basta eseguire degli swap fra le celle poste alla stessa distanza dagli estremi dell’array.
#### Rimozione dei duplicati contigui (con array ausiliario)
Scrivere un programma che legge un array di interi positivi e, scorrendolo da inizio a fine, elimina tutte le occorrenze contigue duplicate, lasciando una sola occorrenza per ciascuna sequenza. Gli elementi rimanenti devono essere azzerati; infine, il programma stampa tutti gli elementi non zero.  
(Esempio: da “1 1 1 2 3 3 4” si ottiene “1 2 3 4 0 0 0”.)
#### Rimozione dei duplicati contigui in-place
Scrivere un programma che realizza quanto richiesto nell’esercizio precedente senza utilizzare array ausiliari, ovvero modificando l’array in-place.
#### Tavola pitagorica compatta
Scrivere un programma che usa un array monodimensionale per rappresentare la tavola pitagorica in modo compatto, sfruttando la simmetria (gli elementi sopra la diagonale sono speculari a quelli sotto). Il numero di elementi necessari è N(N+1)/2 e il comportamento del programma deve essere identico a quello dell’esercizio tradizionale sulla tavola pitagorica.
#### Tris
Implementa il gioco del tris.
### Approfondimenti – Esercizi di riscaldamento
#### SequentialSearch
Scrivere un programma che effettua la ricerca di un elemento intero in un array di 15 interi, restituendo la posizione in cui è trovato oppure un messaggio di “non trovato”.
#### BinarySearch
Scrivere un programma che effettua la ricerca binaria di un elemento intero in un array di 15 interi ordinati.

> [!hint]  Suggerimento
> La ricerca binaria funziona solo su array ordinati.
#### SelectionSort
Scrivere un programma che ordina un array utilizzando l’algoritmo Selection Sort, che seleziona iterativamente l’elemento minimo e lo scambia con quello in posizione corrente.
#### Ordine decrescente (20 numeri)
Scrivere un programma che prende in input 20 numeri interi e li stampa in ordine decrescente.
#### readMatrix
Scrivere un programma che permette di riempire una matrice di interi di dimensioni M×N (con M = 3 e N = 4) leggendo i valori da input.
#### printMatrix
Scrivere un programma che stampa su output una matrice di interi di dimensioni M×N (con M = 3 e N = 4).
### Approfondimenti – Esercizi di base

#### Modifica degli esercizi di ricerca con conteggio accessi
Modificare gli esercizi di SequentialSearch e BinarySearch in modo da contare il numero di accessi all’array e stampare tale conteggio al termine dell’esecuzione.
### Approfondimenti – Esercizi più avanzati
#### Rappresentazione binaria in un array
Dato un numero intero positivo minore di 2N, scrivere un programma che memorizza la sua rappresentazione binaria in un array di lunghezza N e stampa il vettore risultante.
#### shiftLeft
Scrivere un programma che esegue lo shift verso sinistra degli elementi di un vettore: ogni elemento viene spostato nella posizione immediatamente precedente, il primo elemento viene eliminato e l’ultimo sostituito da 0.  
(Esempio: [1, 10, 15, 18] diventa [10, 15, 18, 0]).
#### rotateRight
Scrivere un programma che esegue la rotazione verso destra degli elementi di un vettore: ogni elemento viene spostato nella posizione immediatamente successiva, con il primo elemento sostituito dall’ultimo.  
(Esempio: [1, 10, 15, 18] diventa [18, 1, 10, 15]).
#### shiftN/rotateN
Modificare i programmi shiftLeft e rotateRight per ottenere shiftN e rotateN che, dato un numero intero N (positivo o negativo), traslano o ruotano il vettore di |N| posizioni.

> [!hint]  Suggerimento
> Per rotate, se |N| è maggiore della lunghezza dell’array, usare N modulo lunghezza.
#### Gioco del tris
Scrivere un programma che implementa il gioco del tris, utilizzando una matrice 3×3 per rappresentare la griglia e gestendo il turno alternato di due giocatori umani.
#### Gioco “Forza 4”
Scrivere un programma che implementa il gioco “Forza 4”.
#### Tris con computer
Modificare il programma del tris in modo che uno dei giocatori sia il computer, che sceglie casualmente tra le caselle libere.
#### Mastermind
Scrivere un programma che implementa il gioco “Mastermind”, seguendo le regole e le modalità tipiche di questo gioco.
## Funzioni e modularizzazione
#### Distributore automatico
Implementare un distributore automatico di merendine.
#### Gestione magazzino  
Crea un array  che gestisca l'inventario di un magazzino utilizzando un array statico di struct chiamate "oggetto". La struct dovrà contenere campi quali codice identificativo, nome, quantità e prezzo. Il programma dovrà prevedere funzioni separate per inserire un nuovo oggetto, ricercare e stampare le informazioni di un oggetto tramite il codice, visualizzare tutti gli oggetti presenti nell'inventario e cancellare un oggetto, aggiornando di conseguenza l'array. Modularizzare quanto più possibile il codice utilizzando le funzioni.
#### Operazioni statistiche su array di struct
Crea un programma che gestisca i punteggi di un gioco di un gruppo di persone. Per ogni persona deve essere registrato il nome e il punteggio. Implementa le funzioni per:
- Inserire un nuovo nome e punteggio
- Modificare un punteggio esistente
- Cercare e restituire una persona
- Eliminare una persona
- Stampare tutti i dati
- Stampare la somma dei punteggi
- Stampare la media dei punteggi
- Stampare la persona con punteggio maggiore e il suo punteggio
#### Quiz
Scrivi un programma che implementi un quiz a scelta multipla basato su un array di struct. Ogni elemento dell’array rappresenta una domanda e contiene:

- il **testo** della domanda
- un array di 3 possibili risposte
- un indice (0, 1 o 2) della risposta corretta

Il programma deve:

1. Definire la struct `Question` con i campi richiesti.
2. Creare un array di almeno 5 domande (hard‑coded), includendo per ciascuna il testo e le 3 opzioni. Potete utilizzare questo codice per inizializzare:
```cpp
   array<Question, 5> quiz = {{
        {
            "Qual è il colore del cielo in una giornata serena?",
            {"Rosso", "Verde", "Blu"},
            2
        },
        {
            "Quale animale abbaia?",
            {"Gatto", "Cane", "Uccello"},
            1
        },
        {
            "Quale di questi linguaggi è compilato?",
            {"C++", "JavaScript", "Python"},
            0
        },
        {
            "Quale pianeta è il terzo dal Sole?",
            {"Venere", "Terra", "Marte"},
            1
        },
        {
            "Quale stagione segue la primavera?",
            {"Estate", "Inverno", "Autunno"},
            0
        }
    }};
```
3. Per ogni domanda:
    - stampare il testo e le 3 opzioni numerate 1–3
    - leggere la scelta dell’utente (gestire input fuori range)
    - verificare se la scelta corrisponde all’indice corretto
    - aggiornare il punteggio
4. Al termine, stampare il numero di risposte corrette su totale.
#### Teatro
Scrivi un programma che gestisca la prenotazione di posti in un teatro con 5 file e 10 colonne, usando un array bidimensionale di `Seat`. Ogni `Seat` deve contenere un campo `SeatCategory category` (Standard, Premium, VIP) e un campo `std::string name`. Il programma deve fornire le funzioni:

- funzione per verificare se il posto è già prenotato
- funzione per prenotare il posto se non è già prenotato
- funzione per stampare l'elenco di prenotazioni con i nomi e il tipo di posto prenotato, oltre che il totale di posti prenotati
- funzione per cancellare la prenotazione se presente
- funzione per stampare la pianta mostrando per ogni posto `[V]`/`[P]`/`[S]` se libero o `[X]` se occupato

Il `main()` deve inizializzare la sala, poi mostrare un menu ripetuto con opzioni
1) Prenota posto
2) Cancella prenotazione
3) Visualizza piantina
4) visualizza prenotazioni
5) Esci e invocare le funzioni corrispondenti fino a uscita.
## Input/Output da file
#### Pianta posti cinema (simulazione verifica)
##### Obiettivo
Scrivere un programma C++ che legga da file la pianta di una sala cinema, la memorizzi in una matrice di `struct`, calcoli semplici statistiche e cerchi di assegnare un blocco di posti adiacenti richiesto dall’utente, aggiornando il file e scrivendo un report in console. Si raccomanda sempre di formattare e modularizzare il codice seguendo i principi di buona programmazione.
##### Formato file di input
* File `map.txt`:
1. Prima riga: due interi `R C` (righe e colonne della sala).
2. Seguono `R` righe, ognuna con esattamente `C` caratteri tra `'.'`, `'X'`, `'#'` che rappresentano lo stato iniziale dei posti.
```
8 12
....XX...#..
...#.....##.
..X.....##..
.....#......
###.........
....##..X...
......#.....
..X.....#...
```
##### Requisiti funzionali
1. Lettura e validazione
* Leggere `R` e `C`, controllare che rientrino nei limiti massimi.
* Caricare la sala in `hall[R][C]` popolando `state` per ogni posto.
* Validare che ogni riga contenga esattamente `C` caratteri validi (`.`, `X`, `#`); se il file non è valido, produrre un messaggio d’errore su console e terminare con codice di uscita non zero.
1. Statistiche iniziali
* Calcolare e scrivere sulla console:
  * Numero totale di posti, numero di liberi (`.`), occupati (`X`), inutilizzabili (`#`).
  * La riga con il blocco libero contiguo più lungo e la sua lunghezza (se più righe hanno la stessa lunghezza massima, scegliere la con indice più piccolo).
1. Assegnazione richiesta
- Far inserire all'utente la fila desiderata e quanti posti contigui vuole prenotare
* Cercare nella riga desiderata un blocco di posti contigui liberi indicati (`.`) che non contenga `'#'` o `'X'`.
* Se esiste, assegnarlo marcando quei posti come `'X'` e indicare sulla console che l’assegnazione è riuscita, specificando gli indici dei posti assegnati come intervallo.
* Se non esiste, indicare che l’assegnazione è fallita perché non c’è un blocco sufficiente in quella riga.
4. Salvataggio pianta aggiornata
* Scrivere su `map.txt` la matrice aggiornata con lo stesso formato delle `R` righe da `C` caratteri senza altri testi.
##### Output atteso
  * dimensioni sala.
  * Statistiche iniziali.
  * Esito dell’assegnazione (riuscita o fallita) con dettagli.
  * Riepilogo finale dei posti liberi dopo l’eventuale assegnazione.
* `map.txt` con la pianta aggiornata riga per riga.
* Esempio sintetico di output su console:
```
Sala: 8 righe x 12 colonne
Posti totali: 96
Liberi: 66  Occupati: 18  Inutilizzabili: 12
Blocco libero massimo: riga 4, lunghezza 5
Richiesta: riga 5, posti adiacenti 4
Assegnazione riuscita: riga 5, colonne [3-6]
Liberi dopo assegnazione: 62
```
