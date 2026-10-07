## Introduzione a SQL
### Nota operativa
Per svolgere i vari esercizi, useremo [DB Fiddle](https://www.db-fiddle.com/). Ti baserà premere il tasto `Text do DDL` incollare la tabella e darle un nome. A quel punto potrai liberamente eseguire le query sulle tabelle fornite.
### Cos’è SQL
SQL (Structured Query Language) è un linguaggio progettato per consentire l’interrogazione, la manipolazione e la trasformazione dei dati contenuti in un database relazionale. È pensato per essere accessibile sia a utenti tecnici sia a utenti non tecnici, mantenendo al tempo stesso un’elevata espressività.
Grazie alla sua struttura dichiarativa e alla sua diffusione, SQL è oggi alla base di numerosi sistemi informativi utilizzati da siti web, applicazioni mobili e software gestionali.
SQL consente, ad esempio, di:
* selezionare specifici dati da una tabella
* filtrare e ordinare i risultati
* aggregare informazioni per ottenere statistiche
* modificare i dati esistenti o definirne di nuovi
### Database SQL più diffusi
Esistono numerosi sistemi di gestione di database relazionali (RDBMS) che utilizzano SQL come linguaggio principale. Tra i più diffusi si trovano:
* SQLite
* MySQL
* PostgreSQL
* Oracle Database
* Microsoft SQL Server
Tutti questi sistemi implementano lo standard SQL comune, pur introducendo estensioni o funzionalità specifiche legate alle prestazioni, alla sicurezza o alla gestione dei dati. In questa dispensa si farà riferimento principalmente allo SQL standard, valido nella maggior parte dei contesti.
### Database relazionali
Un database relazionale è una collezione di tabelle tra loro collegate. Ogni tabella rappresenta un insieme di dati omogenei organizzati in forma bidimensionale, in modo analogo a un foglio di calcolo.
Una tabella è caratterizzata da:
* colonne (attributi o campi), che descrivono le proprietà dei dati
* righe (record o tuple), che rappresentano le singole istanze dei dati
Ogni colonna ha un nome e un tipo di dato, mentre ogni riga contiene i valori corrispondenti a quelle colonne.
### Esempio di tabella
Si consideri un database utilizzato da un ente che gestisce informazioni sui mezzi di trasporto immatricolati. Una possibile tabella potrebbe essere la seguente:

Tabella: Mezzi

| Id  | Modello        | Ruote | Porte | Categoria  |
| --- | -------------- | ----- | ----- | ---------- |
| 1   | Toyota Yaris   | 4     | 4     | Utilitaria |
| 2   | Ducati Monster | 2     | 0     | Moto       |
| 3   | BMW X5         | 4     | 5     | SUV        |
| 4   | Ferrari SF90   | 4     | 2     | Sportiva   |
| 5   | Iveco Daily    | 4     | 2     | Furgone    |

In questo esempio:
* ogni riga rappresenta un mezzo specifico
* ogni colonna descrive una caratteristica del mezzo
* il campo `Id` identifica univocamente ciascun record
All’interno dello stesso database potrebbero esistere altre tabelle correlate, come quelle relative ai proprietari, alle assicurazioni o alle revisioni periodiche.
### Obiettivo dell’uso di SQL
Lo scopo principale dell’apprendimento di SQL è acquisire la capacità di estrarre informazioni utili dai dati. Ad esempio:
* individuare i mezzi con meno di quattro ruote
* contare quanti modelli appartengono a una determinata categoria
* analizzare la distribuzione dei veicoli per tipologia
# DQL: Data Query Language
Il Data Query Language mi permette di interrogare il database, ovvero di richiedere i dati che voglio leggere.
## Interrogazioni SELECT
### Concetto di query SELECT
Per recuperare dati da un database relazionale si utilizza l’istruzione `SELECT`. Una query `SELECT` è un’istruzione dichiarativa che specifica:
* quali dati si vogliono ottenere
* da quale tabella provengono
* opzionalmente, come devono essere trasformati o presentati
Il risultato di una query `SELECT` è sempre una struttura bidimensionale composta da righe e colonne, analoga a una tabella.
### Tabelle, righe e colonne
In SQL, una tabella può essere interpretata come un insieme di entità omogenee.
Ogni riga rappresenta una singola istanza dell’entità, mentre ogni colonna rappresenta una proprietà condivisa da tutte le istanze.
Ad esempio:
* una tabella `Animali` può contenere una riga per ogni animale
* colonne come `specie`, `colore`, `peso` descrivono caratteristiche comuni
Questo modello consente di interrogare in modo uniforme grandi quantità di dati.
### Selezione di colonne specifiche
La forma più semplice di interrogazione consiste nel selezionare alcune colonne di una tabella, mantenendo tutte le righe.
Sintassi generale:
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella;
```
Questa query restituisce tutte le righe della tabella, ma solo le colonne indicate.
### Selezione di tutte le colonne
Quando si desidera ottenere tutte le colonne di una tabella, è possibile utilizzare il carattere jolly `*`.
Sintassi:
```sql
SELECT *
FROM nome_tabella;
```
Questa forma è particolarmente utile per esplorare il contenuto di una tabella quando non si conosce ancora la sua struttura o quando si vuole una visione completa dei dati disponibili.
### Esempio pratico
Si consideri una tabella contenente informazioni su film prodotti da **Pixar**.
Tabella: Film

| id | titolo          | regista        | anno | durata_minuti |
| -- | --------------- | -------------- | ---- | ------------- |
| 1  | Toy Story       | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life    | John Lasseter  | 1998 | 95            |
| 3  | Monsters, Inc.  | Pete Docter    | 2001 | 92            |
| 4  | Finding Nemo    | Andrew Stanton | 2003 | 107           |
| 5  | The Incredibles | Brad Bird      | 2004 | 116           |
### Esempi di interrogazioni
* Ottenere solo i titoli dei film:
```sql
SELECT titolo
FROM Film;
```
* Ottenere i nomi dei registi:
```sql
SELECT regista
FROM Film;
```
* Ottenere titolo e regista di ogni film:
```sql
SELECT titolo, regista
FROM Film;
```
* Ottenere titolo e anno di uscita:
```sql
SELECT titolo, anno
FROM Film;
```
* Ottenere tutte le informazioni disponibili:
```sql
SELECT *
FROM Film;
```

## Query con condizioni (clausola WHERE)
### Necessità del filtraggio dei dati
Quando una tabella contiene un numero elevato di record, recuperare tutte le righe risulta inefficiente e spesso inutile. SQL mette a disposizione la clausola `WHERE`, che consente di **filtrare le righe restituite** in base a condizioni logiche applicate ai valori delle colonne.
La clausola `WHERE` viene valutata riga per riga: solo i record che soddisfano la condizione specificata vengono inclusi nel risultato finale.
### Sintassi generale della clausola WHERE
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella
WHERE condizione
    AND/OR altra_condizione
    AND/OR ...;
```
È possibile combinare più condizioni tramite gli operatori logici `AND` e `OR`, costruendo espressioni anche complesse.
Esempio concettuale:
```sql
num_ruote >= 4 AND porte <= 2
```
### Operatori di confronto per dati numerici
La tabella seguente riassume i principali operatori utilizzabili nella clausola `WHERE` per il confronto di valori numerici.

| Operatore           | Significato                                  | Esempio SQL                      |
| ------------------- | -------------------------------------------- | -------------------------------- |
| =, !=, <, <=, >, >= | Operatori di confronto standard              | `anno != 2000`                   |
| BETWEEN … AND …     | Valore compreso in un intervallo (inclusivo) | `anno BETWEEN 2000 AND 2010`     |
| NOT BETWEEN … AND … | Valore escluso da un intervallo              | `anno NOT BETWEEN 2000 AND 2010` |
| IN (…)              | Valore presente in un insieme                | `id IN (1, 3, 5)`                |
| NOT IN (…)          | Valore assente da un insieme                 | `id NOT IN (2, 4, 6)`            |
L’uso delle condizioni non solo rende i risultati più chiari, ma migliora anche le prestazioni delle query, riducendo la quantità di dati elaborati.
### Convenzioni di scrittura
SQL non impone l’uso delle lettere maiuscole per le parole chiave (`SELECT`, `FROM`, `WHERE`), ma l’utilizzo del maiuscolo è una **convenzione diffusa** che migliora la leggibilità e distingue chiaramente le istruzioni SQL dai nomi di tabelle e colonne.
### Esempio pratico
Si consideri una tabella contenente informazioni su film prodotti da **Pixar**.
Tabella: Film

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3  | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lasseter  | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
### Esempi di interrogazioni con condizioni
* Film con `id` uguale a 6:
```sql
SELECT *
FROM Film
WHERE id = 6;
```
* Film usciti tra il 2000 e il 2010 (estremi inclusi):
```sql
SELECT titolo, anno
FROM Film
WHERE anno BETWEEN 2000 AND 2010;
```
* Film non usciti tra il 2000 e il 2010:
```sql
SELECT titolo, anno
FROM Film
WHERE anno NOT BETWEEN 2000 AND 2010;
```
* Primi cinque film prodotti (in base all’identificatore) e relativo anno di uscita:
```sql
SELECT titolo, anno
FROM Film
WHERE id <= 5;
```
## Query con condizioni su dati testuali
### Confronto di stringhe nella clausola WHERE
Quando le colonne contengono dati testuali, SQL fornisce operatori specifici per effettuare confronti tra stringhe, inclusi confronti esatti e ricerche basate su pattern. Questi operatori vengono utilizzati all’interno della clausola `WHERE` e permettono di selezionare solo le righe che soddisfano determinate condizioni testuali.
### Operatori principali per dati testuali
La seguente tabella riassume gli operatori più comuni utilizzati per il confronto di stringhe.

| Operatore  | Condizione                                             | Esempio SQL                               |
| ---------- | ------------------------------------------------------ | ----------------------------------------- |
| =          | Confronto esatto sensibile al maiuscolo/minuscolo      | `titolo = 'Toy Story'`                    |
| != o <>    | Confronto di disuguaglianza sensibile al caso          | `regista != 'John Lasseter'`              |
| LIKE       | Confronto testuale con possibilità di pattern matching | `titolo LIKE 'Toy%'`                      |
| NOT LIKE   | Esclusione di stringhe che corrispondono a un pattern  | `titolo NOT LIKE 'Toy%'`                  |
| %          | Sostituisce una sequenza di zero o più caratteri       | `titolo LIKE '%Story%'`                   |
| _          | Sostituisce un singolo carattere                       | `titolo LIKE 'WALL-_’`                    |
| IN (…)     | Stringa presente in un insieme di valori               | `regista IN ('Brad Bird', 'Pete Docter')` |
| NOT IN (…) | Stringa assente da un insieme di valori                | `regista NOT IN ('John Lasseter')`        |
### Uso delle virgolette
In SQL, tutte le stringhe devono essere racchiuse tra virgolette singole (`'...'`) o doppie (`"..."`, a seconda del DBMS). Questo permette al parser SQL di distinguere i valori testuali dalle parole chiave del linguaggio.
Esempio:
```sql
WHERE titolo = 'Up'
```
### Pattern matching con LIKE
L’operatore `LIKE` consente di effettuare confronti flessibili basati su pattern:
* `%` rappresenta una sequenza arbitraria di caratteri
* `_` rappresenta un singolo carattere
Esempi concettuali:
* `'Toy%'` → tutte le stringhe che iniziano con “Toy”
* `'%Story%'` → tutte le stringhe che contengono “Story”
* `'AN_'` → stringhe di tre caratteri che iniziano con “AN”
### Nota sulle prestazioni
Sebbene questi operatori siano efficienti per la maggior parte degli utilizzi comuni, le ricerche testuali complesse su grandi quantità di dati sono generalmente demandate a motori di ricerca dedicati (come Apache Lucene o Sphinx), progettati specificamente per il full-text search.
### Esempio pratico
Si consideri una tabella contenente informazioni su film prodotti da **Pixar**.
Tabella: Film

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3  | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lasseter  | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
| 87 | WALL-G              | Brenda Chapman | 2042 | 97            |
### Esempi di interrogazioni con dati testuali
* Film appartenenti alla serie *Toy Story*:
```sql
SELECT titolo
FROM Film
WHERE titolo LIKE 'Toy Story%';
```
* Film diretti da John Lasseter:
```sql
SELECT titolo
FROM Film
WHERE regista = 'John Lasseter';
```
* Film (con relativo regista) non diretti da John Lasseter:
```sql
SELECT titolo, regista
FROM Film
WHERE regista != 'John Lasseter';
```
* Film il cui titolo inizia con `WALL-`:
```sql
SELECT titolo
FROM Film
WHERE titolo LIKE 'WALL-%';
```
## Filtraggio e ordinamento dei risultati
### Eliminazione dei duplicati con DISTINCT
Anche se i dati memorizzati in una tabella sono univoci a livello di record, i risultati di una query possono contenere valori ripetuti in una o più colonne. Per eliminare i duplicati dal risultato, SQL mette a disposizione la parola chiave `DISTINCT`.
Sintassi:
```sql
SELECT DISTINCT colonna1, colonna2, ...
FROM nome_tabella
WHERE condizione;
```
`DISTINCT` rimuove le righe duplicate considerando **l’intera combinazione delle colonne selezionate**. In contesti più avanzati, la gestione dei duplicati basata su colonne specifiche viene effettuata tramite il raggruppamento dei dati.
### Ordinamento dei risultati con ORDER BY
I dati all’interno di una tabella non sono necessariamente memorizzati in un ordine significativo. Per rendere i risultati più leggibili e analizzabili, SQL consente di ordinarli tramite la clausola `ORDER BY`.
Sintassi:
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella
WHERE condizione
ORDER BY colonna ASC | DESC;
```
* `ASC` indica l’ordinamento crescente (valore predefinito)
* `DESC` indica l’ordinamento decrescente
L’ordinamento avviene in modo alfanumerico in base ai valori della colonna specificata.
### Limitazione del numero di righe con LIMIT e OFFSET
Per ottenere solo una parte dei risultati, ad esempio nelle applicazioni che mostrano i dati a pagine, si utilizzano le clausole `LIMIT` e `OFFSET`.
Sintassi:
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella
WHERE condizione
ORDER BY colonna ASC | DESC
LIMIT numero_righe OFFSET posizione_iniziale;
```
* `LIMIT` specifica quante righe restituire
* `OFFSET` indica da quale riga iniziare il conteggio
Queste clausole sono particolarmente utili per migliorare l’efficienza delle query su tabelle di grandi dimensioni.
### Esempio pratico
Si consideri una tabella contenente informazioni su film prodotti da **Pixar**, con righe non ordinate.
Tabella: Film

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 2  | Toy Story           | John Lasseter  | 1995 | 81            |
| 3  | Up                  | Pete Docter    | 2009 | 101           |
| 4  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 5  | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 6  | Cars                | John Lasseter  | 2006 | 117           |
| 7  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 8  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 9  | Brave               | Brenda Chapman | 2012 | 102           |
| 10 | Monsters University | Dan Scanlon    | 2013 | 110           |
| 11 | Ratatouille         | Brad Bird      | 2007 | 115           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 14 | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
### Esempi di interrogazioni
* Elenco dei registi in ordine alfabetico, senza duplicati:
```sql
SELECT DISTINCT regista
FROM Film
ORDER BY regista ASC;
```
* Ultimi quattro film usciti, dal più recente al meno recente:
```sql
SELECT titolo, anno
FROM Film
ORDER BY anno DESC
LIMIT 4;
```
* Primi cinque film in ordine alfabetico:
```sql
SELECT titolo
FROM Film
ORDER BY titolo ASC
LIMIT 5;
```
* Cinque film successivi in ordine alfabetico:
```sql
SELECT titolo
FROM Film
ORDER BY titolo ASC
LIMIT 5 OFFSET 5;
```
## Ripasso: query SELECT semplici
### Struttura generale di una query SELECT
Le interrogazioni `SELECT` consentono di recuperare dati da una tabella combinando più clausole. La struttura completa di una query di base è la seguente:
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella
WHERE condizione
ORDER BY colonna ASC | DESC
LIMIT numero_righe OFFSET posizione_iniziale;
```
Ogni clausola svolge un ruolo specifico:
* `SELECT` definisce le colonne da visualizzare
* `FROM` indica la tabella di origine
* `WHERE` filtra le righe
* `ORDER BY` ordina i risultati
* `LIMIT` e `OFFSET` limitano il numero di righe restituite
### Contesto dei dati
Si consideri una tabella che contiene informazioni su alcune delle città più popolose del Nord America, includendo popolazione e coordinate geografiche.
Tabella: Città

| città               | paese       | popolazione | latitudine | longitudine |
| ------------------- | ----------- | ----------- | ---------- | ----------- |
| Guadalajara         | Messico     | 1500800     | 20.659699  | -103.349609 |
| Toronto             | Canada      | 2795060     | 43.653226  | -79.383184  |
| Houston             | Stati Uniti | 2195914     | 29.760427  | -95.369803  |
| New York            | Stati Uniti | 8405837     | 40.712784  | -74.005941  |
| Philadelphia        | Stati Uniti | 1553165     | 39.952584  | -75.165222  |
| Havana              | Cuba        | 2106146     | 23.054070  | -82.345189  |
| Mexico City         | Messico     | 8555500     | 19.432608  | -99.133208  |
| Phoenix             | Stati Uniti | 1513367     | 33.448377  | -112.074037 |
| Los Angeles         | Stati Uniti | 3884307     | 34.052234  | -118.243685 |
| Ecatepec de Morelos | Messico     | 1742000     | 19.601841  | -99.050674  |
| Montreal            | Canada      | 1717767     | 45.501689  | -73.567256  |
| Chicago             | Stati Uniti | 2718782     | 41.878114  | -87.629798  |
Le latitudini positive indicano l’emisfero nord, mentre le longitudini negative indicano posizioni a ovest del meridiano di Greenwich.
### Esempi di interrogazioni
* Città canadesi con la relativa popolazione:
```sql
SELECT città, popolazione
FROM Città
WHERE paese = 'Canada';
```
* Città degli Stati Uniti ordinate per latitudine da nord a sud:
```sql
SELECT città, latitudine
FROM Città
WHERE paese = 'Stati Uniti'
ORDER BY latitudine DESC;
```
* Città situate a ovest di **Chicago**, ordinate da ovest a est:
```sql
SELECT città, longitudine
FROM Città
WHERE longitudine < -87.629798
ORDER BY longitudine ASC;
```
* Due città più popolose del Messico:
```sql
SELECT città, popolazione
FROM Città
WHERE paese = 'Messico'
ORDER BY popolazione DESC
LIMIT 2;
```
* Terza e quarta città più popolose degli Stati Uniti:
```sql
SELECT città, popolazione
FROM Città
WHERE paese = 'Stati Uniti'
ORDER BY popolazione DESC
LIMIT 2 OFFSET 2;
```

## Esercizi
[[Esercizi SQL su select]]
## Query su più tabelle con JOIN
### Normalizzazione dei database
Nei database reali, le informazioni relative a una stessa entità vengono spesso suddivise in più tabelle attraverso un processo chiamato **normalizzazione**.
La normalizzazione riduce la duplicazione dei dati e consente alle informazioni di crescere in modo indipendente. Ad esempio, i dati economici di un film possono essere separati dai suoi dati descrittivi.
Questa organizzazione comporta query più articolate, poiché i dati devono essere ricombinati a partire da tabelle diverse.
Approfondimenti sulla normalizzazione qui: [[Normalizzazione dei database]]
### Chiavi primarie e relazioni
Per collegare correttamente più tabelle è necessario che esse condividano una **chiave comune**:
* una chiave primaria identifica in modo univoco ogni record di una tabella
* una chiave esterna fa riferimento alla chiave primaria di un’altra tabella
Nel caso più comune, la chiave è un valore numerico univoco, spesso auto-incrementante.
### JOIN tra tabelle
SQL consente di combinare i dati di più tabelle utilizzando la clausola `JOIN`. Il tipo di join introdotto qui è l’`INNER JOIN`.
### INNER JOIN
L’`INNER JOIN` restituisce solo le righe per cui esiste una corrispondenza tra le tabelle coinvolte, secondo la condizione specificata nella clausola `ON`.
Sintassi generale:
```sql
SELECT colonna1, altra_tabella.colonna2, ...
FROM tabella1
INNER JOIN tabella2
    ON tabella1.chiave = tabella2.chiave
WHERE condizione
ORDER BY colonna ASC | DESC
LIMIT numero_righe OFFSET posizione;
```
Dopo l’unione delle tabelle, le altre clausole (`WHERE`, `ORDER BY`, `LIMIT`) vengono applicate al risultato combinato.
In molte query si può trovare semplicemente `JOIN` al posto di `INNER JOIN`: le due forme sono equivalenti.
### Esempio pratico
Si consideri un database contenente informazioni sui film prodotti da **Pixar**, suddivise in due tabelle.
Tabella: movies

| id  | titolo              | regista        | anno | durata_minuti |
| --- | ------------------- | -------------- | ---- | ------------- |
| 1   | Toy Story           | John Lasseter  | 1995 | 81            |
| 2   | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3   | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4   | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5   | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6   | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7   | Cars                | John Lasseter  | 2006 | 117           |
| 8   | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9   | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10  | Up                  | Pete Docter    | 2009 | 101           |
| 11  | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12  | Cars 2              | John Lasseter  | 2011 | 120           |
| 13  | Brave               | Brenda Chapman | 2012 | 102           |
| 14  | Monsters University | Dan Scanlon    | 2013 | 110           |
Tabella: boxoffice

| movie_id | rating | vendite_nazionali | vendite_internazionali |
| -------- | ------ | ------------------ | ---------------------- |
| 5        | 8.2    | 380843261          | 555900000              |
| 14       | 7.4    | 268492764          | 475066843              |
| 8        | 8.0    | 206445654          | 417277164              |
| 12       | 6.4    | 191452396          | 368400000              |
| 3        | 7.9    | 245852179          | 239163000              |
| 6        | 8.0    | 261441092          | 370001000              |
| 9        | 8.5    | 223808164          | 297503696              |
| 11       | 8.4    | 415004880          | 648167031              |
| 1        | 8.3    | 191796233          | 170162503              |
| 7        | 7.2    | 244082982          | 217900167              |
| 10       | 8.3    | 293004164          | 438338580              |
| 4        | 8.1    | 289916256          | 272900000              |
| 2        | 7.2    | 162798565          | 200600000              |
| 13       | 7.2    | 237283207          | 301700000              |
La colonna `movie_id` della tabella `boxoffice` corrisponde alla colonna `id` della tabella `movies`.
### Esempi di interrogazioni con INNER JOIN
* Vendite nazionali e internazionali per ciascun film:
```sql
SELECT m.titolo, b.vendite_nazionali, b.vendite_internazionali
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id;
```
* Film che hanno incassato di più a livello internazionale rispetto al mercato domestico:
```sql
SELECT m.titolo, b.vendite_nazionali, b.vendite_internazionali
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id
WHERE b.vendite_internazionali > b.vendite_nazionali;
```
* Elenco dei film ordinati per valutazione, dalla più alta alla più bassa:
```sql
SELECT DISTINCT building_name, ruolo FROM  buildings
LEFT JOIN employees ON building_name=edificio;
```

**Nota:** posso usare AS per abbreviare i nomi delle tabelle come mostrato nelle query precedenti.
## NATURAL JOIN
Il NATURAL JOIN unisce due tabelle usando automaticamente tutte le colonne con lo stesso nome e tipo, senza dover specificare la condizione di join.
### Tabelle di partenza
Tabella studenti
```sql
id_studente | nome
------------+--------
1           | Luca
2           | Marta
3           | Giulia
```

Tabella iscrizioni
```sql
id_studente | corso
------------+---------
1           | Matematica
2           | Informatica
4           | Fisica
```
### Query con NATURAL JOIN
```sql
SELECT *
FROM studenti
NATURAL JOIN iscrizioni;
```
### Risultato
```sql
id_studente | nome  | corso
------------+-------+-------------
1           | Luca  | Matematica
2           | Marta | Informatica
```
### Cosa succede
Il DBMS individua automaticamente la colonna in comune id_studente e fa il join su quella.La riga con id_studente = 3 viene esclusa perché non ha corrispondenza in iscrizioni.Quella con id_studente = 4 viene esclusa perché non esiste in studenti.
**Nota bene:** basta rinominare una colonna o aggiungerne una omonima per rompere la query in modo silenzioso. Un INNER JOIN esplicito è quasi sempre più sicuro e leggibile.
## JOIN esterni (OUTER JOIN)
### Limiti dell’INNER JOIN
L’`INNER JOIN` restituisce solo le righe per cui esiste una corrispondenza in entrambe le tabelle coinvolte. In presenza di dati **asimmetrici** (ad esempio record presenti in una tabella ma assenti nell’altra), questo tipo di join può escludere informazioni rilevanti.
Per includere anche i record senza corrispondenza si utilizzano i **JOIN esterni (OUTER JOIN)**.
### Tipologie di OUTER JOIN
SQL mette a disposizione tre varianti principali:
* **LEFT JOIN**
  Mantiene tutte le righe della tabella a sinistra, includendo i dati della tabella a destra solo se esiste una corrispondenza.
* **RIGHT JOIN**
  Mantiene tutte le righe della tabella a destra, includendo i dati della tabella a sinistra solo se esiste una corrispondenza.
* **FULL JOIN**
  Mantiene tutte le righe di entrambe le tabelle, indipendentemente dall’esistenza di una corrispondenza.
### Sintassi generale
```sql
SELECT colonna1, colonna2, ...
FROM tabella_a
LEFT | RIGHT | FULL JOIN tabella_b
    ON tabella_a.chiave = tabella_b.chiave
WHERE condizione
ORDER BY colonna ASC | DESC
LIMIT numero_righe OFFSET posizione;
```
Come per l’`INNER JOIN`, la clausola `ON` definisce la relazione tra le tabelle.
### Gestione dei valori NULL
Quando una riga non ha una corrispondenza nella tabella unita, le colonne mancanti assumono valore `NULL`.
Nelle query con OUTER JOIN è quindi frequente dover gestire esplicitamente questi valori tramite condizioni o funzioni dedicate.
### Nota sulla sintassi
Le forme `LEFT OUTER JOIN`, `RIGHT OUTER JOIN` e `FULL OUTER JOIN` sono equivalenti a `LEFT JOIN`, `RIGHT JOIN` e `FULL JOIN`. Il termine `OUTER` è mantenuto principalmente per compatibilità con versioni storiche dello standard SQL.
### Esempio pratico
Si considerino due tabelle:
* una tabella `buildings`, che contiene informazioni sugli edifici di uno studio
* una tabella `employees`, che contiene informazioni sui dipendenti assegnati agli edifici
Tabella: buildings

| building_name | capacity |
| ------------- | -------- |
| 1e            | 24       |
| 1w            | 32       |
| 2e            | 16       |
| 2w            | 20       |
Tabella: employees

| ruolo    | nome     | edificio | anni_servizio |
| -------- | -------- | -------- | ------------- |
| Engineer | Becky A. | 1e       | 4             |
| Engineer | Dan B.   | 1e       | 2             |
| Artist   | Tylar S. | 2w       | 2             |
| Manager  | Scott K. | 1e       | 9             |
Alcuni edifici non hanno ancora dipendenti assegnati.
### Esempi di interrogazioni con LEFT JOIN
* Edifici che hanno almeno un dipendente:
```sql
SELECT DISTINCT building_name
FROM buildings
JOIN employees
    ON building_name = edificio;
```

* Tutti gli edifici e i ruoli distinti dei dipendenti assegnati, includendo gli edifici senza dipendenti:
```sql
SELECT b.building_name, e.ruolo
FROM buildings AS b
LEFT JOIN employees AS e
    ON b.building_name = e.edificio
GROUP BY b.building_name, e.ruolo;
```
## Valori NULL nei database SQL
### Significato dei valori NULL
In SQL, il valore `NULL` rappresenta l’assenza di un dato. Non indica né zero né una stringa vuota, ma semplicemente che l’informazione non è disponibile o non è stata ancora inserita.
Ridurre la presenza di valori `NULL` è generalmente consigliabile, poiché:
* richiedono un trattamento speciale nelle query
* alcune funzioni restituiscono risultati differenti in presenza di `NULL`
* complicano l’analisi dei dati
In alternativa, è possibile utilizzare valori predefiniti coerenti con il tipo di dato (ad esempio `0` per valori numerici o stringhe vuote per testi). Tuttavia, quando l’uso di un valore predefinito potrebbe alterare analisi successive (come il calcolo delle medie), l’impiego di `NULL` risulta più appropriato.
### NULL e JOIN esterni
I valori `NULL` sono frequenti nei risultati delle query che utilizzano OUTER JOIN. Quando una riga non trova una corrispondenza nella tabella collegata, le colonne mancanti assumono valore `NULL`.
Questo comportamento rende necessario verificare esplicitamente la presenza o l’assenza di valori nelle condizioni.
### Confronto con NULL
I valori `NULL` non possono essere confrontati tramite gli operatori standard (`=`, `!=`). SQL mette a disposizione operatori dedicati:
* `IS NULL` per verificare l’assenza di un valore
* `IS NOT NULL` per verificare la presenza di un valore
### Sintassi per il controllo dei valori NULL
```sql
SELECT colonna1, colonna2, ...
FROM nome_tabella
WHERE colonna IS NULL
   OR colonna IS NOT NULL;
```
### Esempio pratico
Si considerino le stesse tabelle relative a edifici e dipendenti.

Tabella: buildings

| edificio | capacity |
| -------- | -------- |
| 1e       | 24       |
| 1w       | 32       |
| 2e       | 16       |
| 2w       | 20       |
Tabella: employees

| ruolo    | nome       | edificio | anni_servizio |
| -------- | ---------- | -------- | ------------- |
| Engineer | Becky A.   | 1e       | 4             |
| Engineer | Dan B.     | 1e       | 2             |
| Engineer | Sharon F.  | 1e       | 6             |
| Engineer | Dan M.     | 1e       | 4             |
| Engineer | Malcom S.  | 1e       | 1             |
| Artist   | Tylar S.   | 2w       | 2             |
| Artist   | Sherman D. | 2w       | 8             |
| Artist   | Jakob J.   | 2w       | 6             |
| Artist   | Lillia A.  | 2w       | 7             |
| Artist   | Brandon J. | 2w       | 7             |
Alcuni dipendenti non sono ancora assegnati a un edificio, e il campo `edificio` assume valore `NULL`.
### Esempi di interrogazioni sui valori NULL
* Dipendenti non assegnati ad alcun edificio:
```sql
SELECT nome, ruolo
FROM employees
WHERE edificio IS NULL;
```
* Edifici che non ospitano alcun dipendente:
```sql
SELECT b.edificio
FROM buildings AS b
LEFT JOIN employees AS e
    ON b.edificio = e.edificio
WHERE e.edificio IS NULL;
```

## Esercizi su Join e valori null
[[Esercizi SQL su Join e valori NULL]]
## Query con espressioni
### Uso delle espressioni nelle query SQL
Oltre a selezionare valori grezzi dalle colonne, SQL consente di utilizzare **espressioni** per applicare trasformazioni e calcoli direttamente all’interno delle query. Un’espressione può combinare operatori aritmetici e funzioni (matematiche, su stringhe, su date) e viene valutata al momento dell’esecuzione della query.
### Alias per le espressioni
Quando si inseriscono espressioni nella clausola `SELECT`, è buona pratica assegnare un alias descrittivo tramite `AS`, così da rendere l’output più chiaro.
Sintassi:
```sql
SELECT espressione AS nome_descrittivo
FROM nome_tabella;
```
### Alias per tabelle e colonne
Nelle query più complesse (soprattutto con `JOIN`) si usano spesso alias anche per le tabelle, per ridurre la verbosità e migliorare la leggibilità.
Esempio:
```sql
SELECT m.titolo
FROM movies AS m;
```
### Tabelle di riferimento
Tabella: movies

| id  | titolo              | regista        | anno | durata_minuti |
| --- | ------------------- | -------------- | ---- | ------------- |
| 1   | Toy Story           | John Lasseter  | 1995 | 81            |
| 2   | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3   | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4   | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5   | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6   | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7   | Cars                | John Lasseter  | 2006 | 117           |
| 8   | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9   | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10  | Up                  | Pete Docter    | 2009 | 101           |
| 11  | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12  | Cars 2              | John Lasseter  | 2011 | 120           |
| 13  | Brave               | Brenda Chapman | 2012 | 102           |
| 14  | Monsters University | Dan Scanlon    | 2013 | 110           |
Tabella: boxoffice

| movie_id | rating | domestic_sales | international_sales |
| -------- | ------ | -------------- | ------------------- |
| 5        | 8.2    | 380843261      | 555900000           |
| 14       | 7.4    | 268492764      | 475066843           |
| 8        | 8.0    | 206445654      | 417277164           |
| 12       | 6.4    | 191452396      | 368400000           |
| 3        | 7.9    | 245852179      | 239163000           |
| 6        | 8.0    | 261441092      | 370001000           |
| 9        | 8.5    | 223808164      | 297503696           |
| 11       | 8.4    | 415004880      | 648167031           |
| 1        | 8.3    | 191796233      | 170162503           |
| 7        | 7.2    | 244082982      | 217900167           |
| 10       | 8.3    | 293004164      | 438338580           |
| 4        | 8.1    | 289916256      | 272900000           |
| 2        | 7.2    | 162798565      | 200600000           |
| 13       | 7.2    | 237283207      | 301700000           |
### Esempi di interrogazioni con espressioni
* Incasso totale (domestico + internazionale) espresso in milioni di dollari:
```sql
SELECT m.titolo,
       (b.domestic_sales + b.international_sales) / 1000000.0 AS incasso_milioni
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id;
```
* Valutazione espressa in percentuale (rating su scala 0–10):
```sql
SELECT m.titolo,
       b.rating * 10 AS valutazione_percentuale
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id;
```
* Film usciti in anni pari:
```sql
SELECT titolo, anno
FROM movies
WHERE anno % 2 = 0;
```

## Esercizi
[[Esercizi SQL su espressioni]]
## Query con funzioni di aggregazione (Pt. 1)
### Funzioni di aggregazione
Oltre alle espressioni semplici, SQL mette a disposizione le **funzioni di aggregazione**, che permettono di riassumere informazioni relative a un insieme di righe.
Queste funzioni operano su più record e restituiscono un singolo valore oppure un valore per ciascun gruppo definito.
Sintassi generale senza raggruppamento:
```sql
SELECT FUNZIONE_AGG(colonna_o_espressione) AS descrizione
FROM nome_tabella
WHERE condizione;
```
In assenza della clausola `GROUP BY`, la funzione di aggregazione viene applicata all’intero insieme di righe selezionate.
### Funzioni di aggregazione più comuni
| Funzione       | Descrizione                                      |
| -------------- | ------------------------------------------------ |
| COUNT(*)       | Conta il numero totale di righe                  |
| COUNT(colonna) | Conta il numero di valori non NULL nella colonna |
| MIN(colonna)   | Restituisce il valore minimo                     |
| MAX(colonna)   | Restituisce il valore massimo                    |
| AVG(colonna)   | Calcola la media dei valori                      |
| SUM(colonna)   | Calcola la somma dei valori                      |
Le funzioni di aggregazione ignorano automaticamente i valori `NULL`, ad eccezione di `COUNT(*)`.
### Aggregazioni con GROUP BY
È possibile applicare le funzioni di aggregazione a **sottogruppi di righe** utilizzando la clausola `GROUP BY`.
In questo caso, SQL suddivide le righe in gruppi che condividono lo stesso valore in una o più colonne.
Sintassi generale:
```sql
SELECT colonna_di_gruppo,
       FUNZIONE_AGG(colonna) AS descrizione
FROM nome_tabella
WHERE condizione
GROUP BY colonna_di_gruppo;
```
Ogni gruppo produce una riga nel risultato finale.
### Tabella di riferimento
Tabella: employees

| ruolo    | nome       | edificio | anni_servizio |
| -------- | ---------- | -------- | ------------- |
| Engineer | Becky A.   | 1e       | 4             |
| Engineer | Dan B.     | 1e       | 2             |
| Engineer | Sharon F.  | 1e       | 6             |
| Engineer | Dan M.     | 1e       | 4             |
| Engineer | Malcom S.  | 1e       | 1             |
| Artist   | Tylar S.   | 2w       | 2             |
| Artist   | Sherman D. | 2w       | 8             |
| Artist   | Jakob J.   | 2w       | 6             |
| Artist   | Lillia A.  | 2w       | 7             |
| Artist   | Brandon J. | 2w       | 7             |
| Manager  | Scott K.   | 1e       | 9             |
| Manager  | Shirlee M. | 1e       | 3             |
| Manager  | Daria O.   | 2w       | 6             |
### Esempi di interrogazioni con funzioni di aggregazione
* Numero massimo di anni di servizio di un dipendente:
```sql
SELECT MAX(anni_servizio) AS massimo_anni_servizio
FROM employees;
```
* Media degli anni di servizio per ciascun ruolo:
```sql
SELECT ruolo,
       AVG(anni_servizio) AS media_anni_servizio
FROM employees
GROUP BY ruolo;
```
* Totale degli anni di servizio accumulati in ciascun edificio:
```sql
SELECT edificio,
       SUM(anni_servizio) AS totale_anni_servizio
FROM employees
GROUP BY edificio;
```
## Query con funzioni di aggregazione (Pt. 2)
### Limiti della clausola WHERE con GROUP BY
Nelle query che utilizzano `GROUP BY`, la clausola `WHERE` viene applicata **prima** del raggruppamento e serve a filtrare le singole righe.
Quando invece è necessario filtrare **i risultati aggregati**, SQL mette a disposizione la clausola `HAVING`.
### Clausola HAVING
La clausola `HAVING` consente di applicare condizioni ai gruppi generati da `GROUP BY`.
Sintassi generale:
```sql
SELECT colonna_di_gruppo,
       FUNZIONE_AGG(colonna) AS alias_risultato
FROM nome_tabella
WHERE condizione_sulle_righe
GROUP BY colonna_di_gruppo
HAVING condizione_sui_gruppi;
```
Le condizioni in `HAVING` utilizzano la stessa sintassi di `WHERE`, ma vengono valutate **dopo** l’aggregazione.
Se una query non utilizza `GROUP BY`, la clausola `WHERE` è sufficiente e `HAVING` non è necessario.
### Tabella di riferimento
Tabella: employees

| ruolo    | nome       | edificio | anni_servizio |
| -------- | ---------- | -------- | ------------- |
| Engineer | Becky A.   | 1e       | 4             |
| Engineer | Dan B.     | 1e       | 2             |
| Engineer | Sharon F.  | 1e       | 6             |
| Engineer | Dan M.     | 1e       | 4             |
| Engineer | Malcom S.  | 1e       | 1             |
| Artist   | Tylar S.   | 2w       | 2             |
| Artist   | Sherman D. | 2w       | 8             |
| Artist   | Jakob J.   | 2w       | 6             |
| Artist   | Lillia A.  | 2w       | 7             |
| Artist   | Brandon J. | 2w       | 7             |
| Manager  | Scott K.   | 1e       | 9             |
| Manager  | Shirlee M. | 1e       | 3             |
| Manager  | Daria O.   | 2w       | 6             |
### Esempi di interrogazioni
* Numero di Artist presenti nello studio:
```sql
SELECT COUNT(*) AS numero_artist
FROM employees
WHERE ruolo = 'Artist';
```
* Numero di dipendenti per ciascun ruolo:
```sql
SELECT ruolo,
       COUNT(*) AS numero_dipendenti
FROM employees
GROUP BY ruolo;
```
* Totale degli anni di servizio accumulati dagli Engineer:
```sql
SELECT SUM(anni_servizio) AS totale_anni_engineer
FROM employees
WHERE ruolo = 'Engineer';
```

- Seleziona solo i ruoli per i quali il numero totale di dipendenti è superiore a 3.
```sql
SELECT ruolo,
       COUNT(*) AS numero_dipendenti
FROM employees
GROUP BY ruolo
HAVING COUNT(*) > 3;
```
- Restituisce gli edifici in cui la somma degli anni di servizio dei dipendenti supera 20.
```sql
SELECT edificio,
       SUM(anni_servizio) AS totale_anni_servizio
FROM employees
GROUP BY edificio
HAVING SUM(anni_servizio) > 20;
```
- Mostra solo i ruoli per i quali la media degli anni di servizio è almeno pari a 5.
```sql
SELECT ruolo,
       AVG(anni_servizio) AS media_anni_servizio
FROM employees
GROUP BY ruolo
HAVING AVG(anni_servizio) >= 5;
```
- Individua i ruoli presenti in più di un edificio.
```sql
SELECT ruolo,
       COUNT(DISTINCT edificio) AS numero_edifici
FROM employees
GROUP BY ruolo
HAVING COUNT(DISTINCT edificio) > 1;
```

## Esercizi
[[Esercizi SQL su funzioni di aggregazione]]
## Ordine di esecuzione di una query SQL
### Struttura completa di una query SELECT
```sql
SELECT DISTINCT colonna, FUNZIONE_AGG(colonna_o_espressione), ...
FROM tabella
JOIN altra_tabella
    ON tabella.colonna = altra_tabella.colonna
WHERE condizione
GROUP BY colonna
HAVING condizione
ORDER BY colonna ASC | DESC
LIMIT numero OFFSET posizione;
```
L’ordine di scrittura delle clausole **non corrisponde** all’ordine con cui SQL le esegue internamente.
### Ordine reale di esecuzione
### 1. FROM e JOIN
Vengono selezionate le tabelle coinvolte e applicati i JOIN.
Il risultato è un insieme di righe che combina tutte le colonne delle tabelle collegate.
### 2. WHERE
Le condizioni `WHERE` filtrano le **singole righe** prima del raggruppamento.
In questa fase sono accessibili solo le colonne originali delle tabelle.
### 3. GROUP BY
Le righe rimanenti vengono raggruppate in base ai valori delle colonne indicate.
Dopo questa fase esiste una riga per ogni gruppo.
### 4. HAVING
Le condizioni `HAVING` filtrano i **gruppi**, utilizzando funzioni di aggregazione.
### 5. SELECT
Vengono calcolate le espressioni e assegnati gli alias alle colonne.
### 6. DISTINCT
Vengono eliminate le righe duplicate in base alle colonne selezionate.
### 7. ORDER BY
Le righe vengono ordinate.
In questa fase è possibile usare gli alias definiti nel `SELECT`.
### 8. LIMIT / OFFSET
Viene restituito solo il sottoinsieme finale di righe richiesto.
### Tabelle di riferimento
Tabella: movies

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3  | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lasseter  | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
Tabella: boxoffice

| movie_id | rating | domestic_sales | international_sales |
| -------- | ------ | -------------- | ------------------- |
| 5        | 8.2    | 380843261      | 555900000           |
| 14       | 7.4    | 268492764      | 475066843           |
| 8        | 8.0    | 206445654      | 417277164           |
| 12       | 6.4    | 191452396      | 368400000           |
| 3        | 7.9    | 245852179      | 239163000           |
| 6        | 8.0    | 261441092      | 370001000           |
| 9        | 8.5    | 223808164      | 297503696           |
| 11       | 8.4    | 415004880      | 648167031           |
| 1        | 8.3    | 191796233      | 170162503           |
| 7        | 7.2    | 244082982      | 217900167           |
| 10       | 8.3    | 293004164      | 438338580           |
| 4        | 8.1    | 289916256      | 272900000           |
| 2        | 7.2    | 162798565      | 200600000           |
| 13       | 7.2    | 237283207      | 301700000           |
### Esempi di interrogazioni
```sql
SELECT regista,
       COUNT(*) AS numero_film
FROM movies
GROUP BY regista;
```
Conta il numero di film diretti da ciascun regista.
```sql
SELECT m.regista,
       SUM(b.domestic_sales + b.international_sales) AS incasso_totale
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id
GROUP BY m.regista;
```
Calcola il totale degli incassi (domestici + internazionali) attribuibili a ciascun regista.
## Subquery (sottoquery)
### Tabelle necessarie
#### Tabella movies

| id  | titolo                   | regista           | year | durata_minuti |
| --- | ------------------------ | ----------------- | ---- | ------------- |
| 1   | Inception                | Christopher Nolan | 2010 | 148           |
| 2   | Interstellar             | Christopher Nolan | 2014 | 169           |
| 3   | Pulp Fiction             | Quentin Tarantino | 1994 | 154           |
| 4   | The Grand Budapest Hotel | Wes Anderson      | 2014 | 100           |
| 5   | Parasite                 | Bong Joon-ho      | 2019 | 132           |
| 6   | The Dark Knight          | Christopher Nolan | 2008 | 152           |

#### Tabella boxoffice

|movie_id|domestic_sales|international_sales|rating|
|---|---|---|---|
|1|292000000|535000000|8.8|
|2|188000000|489000000|8.6|
|3|107000000|106000000|8.9|
|4|59000000|115000000|8.1|
|5|53000000|205000000|8.5|
|6|535000000|469000000|9.0|

#### Tabella sales_associates

| id  | nome    | department  | salary | revenue_generated |
| --- | ------- | ----------- | ------ | ----------------- |
| 1   | Alice   | Electronics | 30000  | 10000             |
| 2   | Bob     | Electronics | 32000  | 35000             |
| 3   | Charlie | Home        | 28000  | 20000             |
| 4   | Diana   | Home        | 35000  | 15000             |
| 5   | Eve     | Sports      | 29000  | 37000             |

#### Tabella employees

| id  | nome  | department | salary | revenue_generated |
| --- | ----- | ---------- | ------ | ----------------- |
| 1   | Marco | IT         | 40000  | 200000            |
| 2   | Luca  | IT         | 38000  | 150000            |
| 3   | Anna  | HR         | 35000  | 90000             |
| 4   | Sara  | HR         | 36000  | 120000            |
| 5   | Paolo | Finance    | 42000  | 300000            |
### Concetto di subquery
Una **subquery** è una query SQL annidata all’interno di un’altra query.
Viene utilizzata quando una singola interrogazione non è sufficiente a rispondere a una domanda e sarebbe altrimenti necessario un pre-processing o post-processing dei dati.
Una subquery è sempre racchiusa tra parentesi e può comparire:
* nella clausola `WHERE`
* nella clausola `HAVING`
* nella clausola `FROM`
* nella clausola `SELECT`
### Subquery semplice
Una subquery semplice restituisce un valore (o un insieme di valori) che viene poi utilizzato dalla query esterna.
Esempio concettuale: selezionare gli elementi che superano una media calcolata dinamicamente.
```sql
SELECT *
FROM sales_associates
WHERE salary >
    (SELECT AVG(salary)
     FROM sales_associates);
```
La subquery interna calcola la media del fatturato, mentre la query esterna confronta ogni riga con quel valore.
### Ordine logico di esecuzione
La subquery viene eseguita **nel contesto della clausola in cui si trova**.
Se la subquery è nella `WHERE`, viene valutata durante la fase di filtraggio delle righe; se è nella `FROM`, viene trattata come una tabella temporanea.
### Subquery nella clausola WHERE
Una subquery nella `WHERE` consente di applicare condizioni basate su dati calcolati dinamicamente.
Esempio con il database dei film: selezionare i film con una valutazione superiore alla media.
```sql
SELECT titolo
FROM movies AS m
INNER JOIN boxoffice AS b
    ON m.id = b.movie_id
WHERE b.rating >
    (SELECT AVG(rating)
     FROM boxoffice);
```
La subquery calcola la valutazione media, mentre la query esterna filtra i film che la superano.
### Subquery correlate
Una **subquery correlata** dipende dalla riga corrente della query esterna.
In questo caso, la subquery viene eseguita **una volta per ogni riga** della query principale.
Esempio concettuale: trovare gli elementi che performano peggio della media del proprio gruppo.
```sql
SELECT *
FROM employees
WHERE salary >
    (SELECT AVG(revenue_generated)
     FROM employees AS dept_employees
     WHERE dept_employees.department = employees.department);
```
La subquery utilizza una colonna della query esterna (`employees.department`), rendendola dipendente dalla riga corrente.
### Caratteristiche delle subquery correlate
* sono più espressive rispetto alle subquery semplici
* possono essere meno efficienti
* richiedono alias chiari per migliorare la leggibilità
* sono spesso sostituibili da `JOIN` + `GROUP BY` in DBMS avanzati
### Subquery nella clausola FROM
Una subquery nella `FROM` viene trattata come una tabella temporanea.
Esempio: calcolare prima un valore aggregato e poi interrogarlo.
```sql
SELECT regista, incasso_totale
FROM (
    SELECT m.regista,
           SUM(b.domestic_sales + b.international_sales) AS incasso_totale
    FROM movies AS m
    INNER JOIN boxoffice AS b
        ON m.id = b.movie_id
    GROUP BY m.regista
) AS incassi_registi
WHERE incasso_totale > 1000000000;
```
### Test di esistenza con IN e NOT IN
Le subquery possono produrre un elenco dinamico di valori da utilizzare con `IN` o `NOT IN`.
Sintassi generale:
```sql
SELECT *
FROM tabella
WHERE colonna IN (
    SELECT altra_colonna
    FROM altra_tabella
);
```
Esempio: selezionare i film che hanno dati di box office disponibili.
```sql
SELECT titolo
FROM movies
WHERE id IN (
    SELECT movie_id
    FROM boxoffice
);
```
### Considerazioni sull’uso delle subquery
* migliorano l’espressività delle query
* riducono la necessità di elaborazioni esterne
* possono peggiorare le prestazioni se mal progettate
* richiedono attenzione nella lettura e manutenzione del codice
L’uso di alias significativi e una struttura chiara è essenziale per mantenere le subquery comprensibili e corrette.
## Operatori di insieme: UNION, INTERSECT, EXCEPT
### Concetto di operatori di insieme
Gli **operatori di insieme** permettono di combinare i risultati di più query `SELECT` senza utilizzare `JOIN`.
Essi operano sui **risultati delle query**, non sulle tabelle direttamente, e richiedono che le query coinvolte siano **compatibili**.
Due query sono compatibili se:
* restituiscono lo **stesso numero di colonne**
* le colonne sono nello **stesso ordine**
* le colonne hanno **tipi di dato compatibili**
### Sintassi generale
```sql
SELECT colonna1, colonna2
FROM tabella1
UNION | UNION ALL | INTERSECT | EXCEPT
SELECT colonna1, colonna2
FROM tabella2
ORDER BY colonna1 DESC
LIMIT n;
```
L’operatore di insieme viene applicato **prima** di `ORDER BY` e `LIMIT`.
### UNION
L’operatore `UNION` combina i risultati di due query e **rimuove automaticamente le righe duplicate**.
Esempio concettuale:
```sql
SELECT director
FROM movies
WHERE year < 2005
UNION
SELECT director
FROM movies
WHERE year >= 2010;
```
Il risultato contiene l’elenco dei registi coinvolti, senza duplicati.
### UNION ALL
`UNION ALL` funziona come `UNION`, ma **non elimina i duplicati**.
È più veloce di `UNION` perché non richiede il controllo delle ripetizioni.
```sql
SELECT director
FROM movies
WHERE year < 2005
UNION ALL
SELECT director
FROM movies
WHERE year >= 2010;
```
Se un regista compare in entrambe le query, apparirà due volte nel risultato.
### INTERSECT
L’operatore `INTERSECT` restituisce **solo le righe comuni** a entrambi i result set.
```sql
SELECT director
FROM movies
WHERE year < 2005
INTERSECT
SELECT director
FROM movies
WHERE year > 2000;
```
Il risultato include solo i registi presenti **in entrambe** le selezioni.
Anche `INTERSECT` elimina automaticamente i duplicati.
### EXCEPT
L’operatore `EXCEPT` restituisce le righe presenti **nel primo result set ma non nel secondo**.
È **sensibile all’ordine** delle query.
```sql
SELECT director
FROM movies
WHERE year < 2005
EXCEPT
SELECT director
FROM movies
WHERE year < 2000;
```
Il risultato contiene i registi dei film precedenti al 2005 **escludendo** quelli già presenti prima del 2000.
Come `UNION` e `INTERSECT`, anche `EXCEPT` elimina i duplicati.
### Versioni ALL
Alcuni DBMS supportano:
* `INTERSECT ALL`
* `EXCEPT ALL`
Queste varianti **mantengono i duplicati**, ma non sono parte dello standard SQL supportato universalmente.
### Quando usare gli operatori di insieme
Gli operatori di insieme sono utili quando:
* i dati provengono da **tabelle non direttamente collegabili**
* si vogliono combinare risultati logici diversi
* si desidera evitare query multiple lato applicazione
In molti casi, tuttavia, `JOIN` e `GROUP BY` risultano più leggibili ed efficienti.
## Esercizi
[[Esercizi SQL su subquery e operatori di insieme]]
# DML: Data Manipulation Language
Queste query servono per modificare i **dati** in database già esistenti, aggiungendo dati, rimuovendoli o modificandoli. Non modificano la struttura del database.
## Inserimento di nuove righe (INSERT)
### Schema di un database
In SQL, lo **schema** descrive la struttura delle tabelle di un database:
* nomi delle colonne
* tipi di dato ammessi
* eventuali vincoli (chiavi primarie, valori di default, `NULL`, ecc.)
Questa struttura fissa garantisce coerenza ed efficienza anche in presenza di grandi quantità di dati.
Ad esempio, in una tabella `movies`, la colonna `year` accetta solo valori interi, mentre `title` accetta stringhe di testo.
### Inserimento di dati con INSERT
Per aggiungere nuove righe a una tabella si utilizza l’istruzione `INSERT INTO`.
È possibile inserire una o più righe specificando i valori per **tutte** le colonne oppure solo per **alcune colonne**, se le restanti hanno valori di default o sono auto-generate.
### Inserimento con tutte le colonne
```sql
INSERT INTO nome_tabella
VALUES (valore1, valore2, ...),
       (valore1, valore2, ...);
```
L’ordine dei valori deve corrispondere esattamente all’ordine delle colonne nello schema della tabella.
### Inserimento specificando le colonne
```sql
INSERT INTO nome_tabella
(colonna1, colonna2, ...)
VALUES (valore1, valore2, ...),
       (valore1, valore2, ...);
```
Questa forma è più sicura e flessibile, perché:
* non dipende dall’ordine fisico delle colonne
* rimane valida anche se in futuro vengono aggiunte nuove colonne con valori di default
### Uso di espressioni negli INSERT
È possibile utilizzare espressioni matematiche o su stringhe direttamente nei valori inseriti.
Esempio:
```sql
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);
```
### Tabelle di riferimento
Tabella: movies

| id | titolo       | regista       | anno | durata_minuti |
| -- | ------------ | ------------- | ---- | ------------- |
| 1  | Toy Story    | John Lasseter | 1995 | 81            |
| 2  | A Bug's Life | John Lasseter | 1998 | 95            |
| 3  | Toy Story 2  | John Lasseter | 1999 | 93            |
La colonna `id` è auto-incrementante.
Tabella: boxoffice

| movie_id | rating | domestic_sales | international_sales |
| -------- | ------ | -------------- | ------------------- |
| 3        | 7.9    | 245852179      | 239163000           |
| 1        | 8.3    | 191796233      | 170162503           |
| 2        | 7.2    | 162798565      | 200600000           |
### Esempi di INSERT relativi agli esercizi
* Inserimento del film *Toy Story 4* nella tabella `movies`:
```sql
INSERT INTO movies
(titolo, regista, anno, durata_minuti)
VALUES ('Toy Story 4', 'Josh Cooley', 2019, 100);
```
* Inserimento dei dati di incasso e valutazione nella tabella `boxoffice`:
```sql
INSERT INTO boxoffice
(movie_id, rating, domestic_sales, international_sales)
VALUES (15, 8.7, 340000000, 270000000);
```
In questo esempio, `movie_id` fa riferimento all’identificatore assegnato automaticamente al nuovo film inserito nella tabella `movies`.
## Aggiornamento di righe esistenti (UPDATE)
### Modifica dei dati con UPDATE
Per correggere o modificare dati già presenti in una tabella si utilizza l’istruzione `UPDATE`.
Un’operazione di aggiornamento richiede di specificare:
* la tabella da modificare
* le colonne da aggiornare e i nuovi valori da assegnare
* le righe coinvolte, tramite una condizione `WHERE`
I valori assegnati devono essere compatibili con i tipi di dato definiti nello schema della tabella.
### Sintassi generale
```sql
UPDATE nome_tabella
SET colonna = valore_o_espressione,
    altra_colonna = altro_valore_o_espressione,
    ...
WHERE condizione;
```
La clausola `SET` può includere più coppie `colonna = valore`. L’aggiornamento viene applicato a tutte le righe che soddisfano la condizione indicata in `WHERE`.
### Precauzioni
Gli errori con `UPDATE` sono frequenti, specialmente quando:
* la condizione `WHERE` è sbagliata e coinvolge righe non desiderate
* la clausola `WHERE` viene omessa, aggiornando involontariamente tutte le righe della tabella
Una pratica consigliata è:
1. scrivere prima la condizione come query `SELECT` per verificare quali righe verrebbero coinvolte
2. solo dopo trasformare la query in un `UPDATE`
### Tabella di riferimento
Tabella: movies

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | El Directore   | 1998 | 95            |
| 3  | Toy Story 2         | John Lasseter  | 1899 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lasseter  | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 8         | El Directore   | 2010 | 103           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
### Esempi di UPDATE relativi agli esercizi
* Correzione del regista di *A Bug's Life*:
```sql
UPDATE movies
SET director = 'John Lasseter'
WHERE id = 2;
```
* Correzione dell’anno di uscita di *Toy Story 2*:
```sql
UPDATE movies
SET year = 1999
WHERE id = 3;
```
* Correzione del titolo e del regista di *Toy Story 8*:
```sql
UPDATE movies
SET title = 'Toy Story 3',
    director = 'Lee Unkrich'
WHERE id = 11;
```
## Eliminazione di righe (DELETE)
### Rimozione dei dati con DELETE
Per eliminare dati esistenti da una tabella si utilizza l’istruzione `DELETE`.
A differenza di `UPDATE`, che modifica i valori, `DELETE` rimuove **interamente le righe** che soddisfano una determinata condizione.
### Sintassi generale
```sql
DELETE FROM nome_tabella
WHERE condizione;
```
La clausola `WHERE` è fondamentale per stabilire **quali righe** devono essere eliminate.
Se la clausola `WHERE` viene omessa, **tutte le righe della tabella vengono cancellate**.
### Precauzioni
L’uso improprio di `DELETE` può causare la perdita irreversibile dei dati.
Una buona pratica consiste nel:
1. scrivere prima la condizione come query `SELECT`
2. verificare che le righe restituite siano effettivamente quelle da eliminare
3. trasformare la query in un `DELETE`
### Tabella di riferimento
Tabella: movies

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lasseter  | 1998 | 95            |
| 3  | Toy Story 2         | John Lasseter  | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lasseter  | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lasseter  | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
### Esempi di DELETE relativi agli esercizi
* Eliminazione di tutti i film usciti prima del 2005:
```sql
DELETE FROM movies
WHERE year < 2005;
```
* Eliminazione di tutti i film diretti da Andrew Stanton:
```sql
DELETE FROM movies
WHERE director = 'Andrew Stanton';
```
In entrambi i casi, le righe che soddisfano la condizione vengono rimosse definitivamente dalla tabella.
# DDL: Data Definition Language
Queste query permettono di modificare la struttura del database, quindi di aggiungere o rimuovere tabelle e di modificarne le colonne.
## Creazione di tabelle (CREATE TABLE)
### Definizione di una nuova tabella
Quando è necessario memorizzare nuove entità o relazioni, SQL permette di creare una nuova tabella tramite l’istruzione `CREATE TABLE`.
La struttura della tabella è definita dallo **schema**, che specifica:
* il nome delle colonne
* il tipo di dato ammesso per ciascuna colonna
* eventuali vincoli
* eventuali valori di default
### Sintassi generale
```sql
CREATE TABLE IF NOT EXISTS nome_tabella (
    colonna TipoDato Vincolo DEFAULT valore_default,
    altra_colonna TipoDato Vincolo DEFAULT valore_default,
    ...
);
```
La clausola `IF NOT EXISTS` evita errori nel caso in cui la tabella sia già presente nel database.
### Tipi di dato più comuni
| Tipo di dato        | Descrizione                                       |
| ------------------- | ------------------------------------------------- |
| INTEGER             | Numeri interi                                     |
| BOOLEAN             | Valori booleani (spesso rappresentati come 0 o 1) |
| FLOAT, DOUBLE, REAL | Numeri decimali                                   |
| CHAR(n)             | Stringhe a lunghezza fissa                        |
| VARCHAR(n)          | Stringhe a lunghezza variabile                    |
| TEXT                | Stringhe di lunghezza arbitraria                  |
| DATE, DATETIME      | Date e orari                                      |
| BLOB                | Dati binari                                       |
La disponibilità esatta dei tipi può variare leggermente a seconda del DBMS utilizzato.
### Vincoli di tabella più comuni
| Vincolo       | Significato                                 |
| ------------- | ------------------------------------------- |
| PRIMARY KEY   | Identifica univocamente ogni riga           |
| AUTOINCREMENT | Incremento automatico per colonne numeriche |
| UNIQUE        | Impedisce valori duplicati                  |
| NOT NULL      | Impedisce valori NULL                       |
| CHECK         | Impone una condizione sui valori            |
| FOREIGN KEY   | Impone coerenza con un’altra tabella        |
### Esempio di schema
```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    director TEXT,
    year INTEGER,
    length_minutes INTEGER
);
```

Creazione di una nuova tabella chiamata `Database`, senza vincoli:
```sql
CREATE TABLE Database (
    name TEXT,
    version FLOAT,
    download_count INTEGER
);
```

## Modifica delle tabelle (ALTER TABLE)
### Aggiornamento dello schema di una tabella
Nel tempo, la struttura dei dati può cambiare. SQL consente di modificare lo **schema** di una tabella esistente tramite l’istruzione `ALTER TABLE`, che permette di:
* aggiungere nuove colonne
* rimuovere colonne (non supportato da tutti i DBMS)
* rinominare una tabella
Il supporto alle varie operazioni dipende dal database utilizzato.
### Aggiunta di nuove colonne
Per aggiungere una colonna a una tabella esistente si utilizza la clausola `ADD`.
È necessario specificare:
* il nome della colonna
* il tipo di dato
* eventuali vincoli
* un valore di default (se richiesto)
Sintassi:
```sql
ALTER TABLE nome_tabella
ADD nome_colonna TipoDato DEFAULT valore_default;
```
Il valore di default viene applicato sia alle nuove righe sia alle righe già presenti nella tabella.
### Rimozione di colonne
Alcuni DBMS consentono di eliminare colonne tramite `DROP`, ma altri (come SQLite) non supportano questa operazione direttamente.
Sintassi:
```sql
ALTER TABLE nome_tabella
DROP nome_colonna;
```
Quando non supportato, è necessario creare una nuova tabella e migrare i dati.
### Rinomina di una tabella
È possibile rinominare una tabella usando `RENAME TO`.
Sintassi:
```sql
ALTER TABLE nome_tabella
RENAME TO nuovo_nome;
```
### Tabella di riferimento
Tabella: movies

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lassetter | 1998 | 95            |
| 3  | Toy Story 2         | John Lassetter | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lassetter | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lassetter | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
### Esempi di ALTER TABLE relativi agli esercizi
* Aggiunta della colonna `Aspect_ratio` di tipo `FLOAT`:
```sql
ALTER TABLE movies
ADD Aspect_ratio FLOAT;
```
* Aggiunta della colonna `Language` di tipo `TEXT`, con valore di default `English`:
```sql
ALTER TABLE movies
ADD Language TEXT DEFAULT 'English';
```
## Eliminazione di tabelle (DROP TABLE)
### Rimozione completa di una tabella
Quando è necessario eliminare **interamente** una tabella da un database, inclusi:
* tutti i dati contenuti
* lo schema della tabella
* eventuali metadati associati
si utilizza l’istruzione `DROP TABLE`.
A differenza di `DELETE`, che rimuove solo le righe, `DROP TABLE` elimina la tabella stessa dal database.
### Sintassi generale
```sql
DROP TABLE IF EXISTS nome_tabella;
```
La clausola `IF EXISTS` evita che il database generi un errore nel caso in cui la tabella non sia presente.
### Dipendenze tra tabelle
Se una tabella è referenziata da un’altra (ad esempio tramite un `FOREIGN KEY`), l’operazione di `DROP TABLE` può:
* fallire
* richiedere la rimozione preventiva delle tabelle dipendenti
* richiedere l’eliminazione o la modifica dei vincoli
Il comportamento dipende dal DBMS utilizzato e dalla configurazione dei vincoli.

### CASCADE e RESTRICT
Quando una tabella è collegata ad altre tabelle o ad altri oggetti del database, il comando `DROP TABLE` può richiedere regole aggiuntive per gestire le dipendenze.

Molti DBMS supportano due modalità principali:

* `CASCADE`, che consente di eliminare anche gli oggetti dipendenti dalla tabella
* `RESTRICT`, che impedisce l’eliminazione se esistono dipendenze ancora attive

Esempi:

```sql
DROP TABLE movies CASCADE;
DROP TABLE movies RESTRICT;
```

Il supporto e il comportamento esatto di queste opzioni possono variare a seconda del DBMS utilizzato.

### Clausola ON DELETE nelle chiavi esterne
Questo comportamento lo posso anche definire di default sulle tabelle che hanno chiavi esterne, direttamente su `CREATE TABLE` o utilizzando `ALTER TABLE`.

Questo comportamento viene definito tramite la clausola `ON DELETE`.

Sintassi generale:

```sql
FOREIGN KEY (colonna_figlia)
REFERENCES tabella_padre(colonna_padre)
ON DELETE azione;
```

| Azione      | Comportamento                                           |
| ----------- | ------------------------------------------------------- |
| RESTRICT    | impedisce la cancellazione se esistono righe dipendenti |
| CASCADE     | elimina automaticamente anche le righe collegate        |
| SET NULL    | imposta a `NULL` il valore della chiave esterna         |
| SET DEFAULT | imposta il valore di default definito nella colonna     |
| NO ACTION   | comportamento simile a `RESTRICT` in molti DBMS         |
```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT
);

CREATE TABLE boxoffice (
    movie_id INTEGER,
    domestic_sales INTEGER,
    FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE
);
```

Con questa definizione, se un film viene eliminato dalla tabella `movies`, anche le righe corrispondenti nella tabella `boxoffice` vengono eliminate automaticamente.
### Differenza tra DROP, DELETE e TRUNCATE
È importante distinguere `DROP TABLE` da altri comandi che rimuovono dati.

* `DELETE` elimina una o più righe, ma lascia intatta la struttura della tabella
* `TRUNCATE` svuota la tabella mantenendo lo schema
* `DROP TABLE` elimina completamente sia i dati sia la struttura della tabella
### Tabelle di riferimento
Tabella: movies

| id | titolo              | regista        | anno | durata_minuti |
| -- | ------------------- | -------------- | ---- | ------------- |
| 1  | Toy Story           | John Lasseter  | 1995 | 81            |
| 2  | A Bug's Life        | John Lassetter | 1998 | 95            |
| 3  | Toy Story 2         | John Lassetter | 1999 | 93            |
| 4  | Monsters, Inc.      | Pete Docter    | 2001 | 92            |
| 5  | Finding Nemo        | Andrew Stanton | 2003 | 107           |
| 6  | The Incredibles     | Brad Bird      | 2004 | 116           |
| 7  | Cars                | John Lassetter | 2006 | 117           |
| 8  | Ratatouille         | Brad Bird      | 2007 | 115           |
| 9  | WALL-E              | Andrew Stanton | 2008 | 104           |
| 10 | Up                  | Pete Docter    | 2009 | 101           |
| 11 | Toy Story 3         | Lee Unkrich    | 2010 | 103           |
| 12 | Cars 2              | John Lassetter | 2011 | 120           |
| 13 | Brave               | Brenda Chapman | 2012 | 102           |
| 14 | Monsters University | Dan Scanlon    | 2013 | 110           |
Tabella: boxoffice

| movie_id | rating | domestic_sales | international_sales |
| -------- | ------ | -------------- | ------------------- |
| 5        | 8.2    | 380843261      | 555900000           |
| 14       | 7.4    | 268492764      | 475066843           |
| 8        | 8      | 206445654      | 417277164           |
| 12       | 6.4    | 191452396      | 368400000           |
| 3        | 7.9    | 245852179      | 239163000           |
| 6        | 8      | 261441092      | 370001000           |
| 9        | 8.5    | 223808164      | 297503696           |
| 11       | 8.4    | 415004880      | 648167031           |
| 1        | 8.3    | 191796233      | 170162503           |
| 7        | 7.2    | 244082982      | 217900167           |
| 10       | 8.3    | 293004164      | 438338580           |
| 4        | 8.1    | 289916256      | 272900000           |
| 2        | 7.2    | 162798565      | 200600000           |
| 13       | 7.2    | 237283207      | 301700000           |
### Esempi di DROP TABLE relativi agli esercizi
* Eliminazione della tabella `movies`:
```sql
DROP TABLE IF EXISTS movies;
```
* Eliminazione della tabella `boxoffice`:
```sql
DROP TABLE IF EXISTS boxoffice;
```
Dopo l’esecuzione di questi comandi, le tabelle e tutti i dati in esse contenuti vengono rimossi definitivamente dal database.
### Esercizi su DDL e DML
[[Esercizi SQL su DDL e DML]]