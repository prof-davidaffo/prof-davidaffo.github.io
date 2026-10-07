## La normalizzazione dei database
### Che cos’è la normalizzazione
La **normalizzazione** è una **tecnica di progettazione dei database relazionali** volta a **organizzare i dati in modo efficiente**, riducendo la **ridondanza** e le **incoerenze** tra dati correlati. Questo processo implica la suddivisione di dati complessi o ripetuti in **tabelle più piccole** e correlate tra loro tramite chiavi, seguendo un insieme di regole note come **forme normali** (o *normal forms*). ([popsql.com][1])
**Obiettivi principali della normalizzazione:**
* eliminare dati duplicati o ridondanti;
* ridurre le anomalie di inserimento, aggiornamento e cancellazione;
* migliorare l’integrità e la coerenza dei dati;
* creare strutture di dati più flessibili e facili da mantenere. ([IBM][2])
---
### Perché è importante normalizzare un database
Un database non normalizzato può presentare vari problemi:
* **Anomalie di inserimento:** non è possibile aggiungere certi dati senza valori null o inconsistenti.
* **Anomalie di aggiornamento:** modificando un dato in una tabella non normalizzata, potresti dover aggiornare lo stesso dato in più posti.
* **Anomalie di cancellazione:** cancellare un dato può rimuovere informazioni correlate che non volevi eliminare. ([Wikipedia][3])
La normalizzazione aiuta a prevenire questi problemi rendendo più **solida e affidabile** la progettazione del database. ([popsql.com][1])
---
### Schema concettuale del processo
La normalizzazione si basa su una serie di **livelli crescenti di rigore** detti *forme normali*:
1. **Prima forma normale (1NF)**
2. **Seconda forma normale (2NF)**
3. **Terza forma normale (3NF)**
4. **Boyce-Codd Normal Form (BCNF)**
Esistono anche **forme normali superiori** (*4NF*, *5NF*, *6NF*), ma nella pratica la maggior parte dei database operativi si considera correttamente progettata quando è almeno in **3NF** o in **BCNF**. ([Wikipedia][3])
---
### Concetti chiave utili
#### Attributi e tabelle
* **Tabella:** insieme di righe e colonne che rappresenta un’entità o una relazione.
* **Attributo:** colonna di una tabella che rappresenta una specifica informazione.
* **Record:** riga di una tabella, cioè un’istanza di dati.
* **Chiave primaria (Primary Key):** attributo o insieme di attributi che identificano un record in modo univoco.
---
#### Ridondanza e dipendenze funzionali
* **Ridondanza:** quando lo stesso dato è memorizzato più volte in luoghi diversi.
* **Dipendenza funzionale:** una relazione tra attributi in una tabella in cui un valore di un attributo (o insieme di attributi) determina un valore di un altro attributo.
La normalizzazione si basa fortemente sull’identificazione e gestione delle **dipendenze funzionali** per progettare correttamente lo schema dei dati. ([Libero.it][4])

---

[1]: https://popsql.com/blog/normalization-in-sql?utm_source=chatgpt.com "Normalization in SQL DBMS: 1NF, 2NF, 3NF, and BCNF ..."
[2]: https://www.ibm.com/it-it/think/topics/database-normalization?utm_source=chatgpt.com "Cos'è la normalizzazione del database?"
[3]: https://en.wikipedia.org/wiki/Database_normalization?utm_source=chatgpt.com "Database normalization"
[4]: https://digilander.libero.it/informatica.davinci/slide/normalizzazione.pdf?utm_source=chatgpt.com "DATABASE NORMALIZZAZIONE"
## Prima Forma Normale (1NF)
### Definizione di Prima Forma Normale
Una relazione (tabella) si trova in **Prima Forma Normale (1NF)** quando **tutti gli attributi contengono valori atomici**, cioè **indivisibili**, e **non esistono gruppi ripetuti o attributi multivalore** all’interno della stessa tabella. Ogni campo deve contenere un solo valore per ogni record e tutte le righe devono essere distinguibili tramite una chiave primaria.
In altre parole, la 1NF impone che:
* ogni colonna contenga valori dello stesso tipo;
* ogni cella contenga un singolo valore;
* non siano presenti elenchi, insiemi o valori multipli nello stesso attributo.
---
### Valori atomici
Un valore è detto **atomico** quando **non può essere ulteriormente scomposto** in parti significative nel contesto del database. Il concetto di atomicità dipende dal dominio applicativo.
Esempio:
* L’attributo `CodiceFiscale` è atomico.
* L’attributo `Indirizzo` **non è atomico** se contiene via, numero civico, CAP e città nello stesso campo.
La 1NF richiede che ogni attributo rappresenti **una sola informazione elementare**.
---
### Gruppi ripetuti e attributi multivalore
Un **gruppo ripetuto** si verifica quando una tabella contiene più colonne per rappresentare lo stesso tipo di informazione (es. Telefono1, Telefono2, Telefono3). Un **attributo multivalore** si ha quando una singola colonna contiene più valori (es. una lista di numeri di telefono separati da virgole).
Entrambe le situazioni violano la Prima Forma Normale, poiché rendono difficile:
* interrogare i dati;
* aggiornare correttamente le informazioni;
* mantenere la coerenza del database.
---
### Esempio di tabella non in 1NF
| Matricola | Nome | Corsi              |
| --------- | ---- | ------------------ |
| 101       | Luca | Basi di Dati, Reti |
| 102       | Anna | Sistemi Operativi  |
La colonna `Corsi` contiene **più valori nello stesso attributo**, quindi la tabella **non è in 1NF**.

---
### Trasformazione in Prima Forma Normale
Per portare la tabella in 1NF è necessario:
* eliminare l’attributo multivalore;
* creare una nuova tabella che rappresenti correttamente la relazione.

**Tabella Studenti**

| Matricola | Nome |
| --------- | ---- |
| 101       | Luca |
| 102       | Anna |
**Tabella Iscrizioni**

| Matricola | Corso             |
| --------- | ----------------- |
| 101       | Basi di Dati      |
| 101       | Reti              |
| 102       | Sistemi Operativi |
Ora ogni campo contiene un solo valore e non ci sono gruppi ripetuti: lo schema rispetta la 1NF.

---
### Ruolo della chiave primaria nella 1NF
In Prima Forma Normale, ogni tabella deve avere una **chiave primaria** che identifichi in modo univoco ogni record. In presenza di tabelle derivate dalla scomposizione, la chiave primaria può essere:
* **semplice**, formata da un solo attributo;
* **composta**, formata da più attributi (es. `Matricola` + `Corso`).
La corretta definizione della chiave primaria è fondamentale per garantire l’univocità dei record e preparare il database alle forme normali successive.
## Seconda Forma Normale (2NF)
### Definizione di Seconda Forma Normale
Una relazione si trova in **Seconda Forma Normale (2NF)** quando:
* è in **Prima Forma Normale (1NF)**;
* **tutti gli attributi non chiave dipendono funzionalmente dall’intera chiave primaria**;
* non esistono **dipendenze funzionali parziali**.
La Seconda Forma Normale è rilevante **solo nel caso di chiavi primarie composte**. Se una tabella ha una chiave primaria semplice, essa è automaticamente in 2NF.
---
### Dipendenza funzionale parziale
Si ha una **dipendenza funzionale parziale** quando un attributo non chiave dipende **solo da una parte della chiave primaria composta** e non dalla chiave nel suo insieme.
Formalmente, data una chiave primaria composta ( (A, B, C) ), una dipendenza parziale esiste se:
* $( A \rightarrow D )$, oppure
* $( B \rightarrow D )$, oppure
* $( C \rightarrow D )$,
dove ( D ) è un attributo non chiave.
La presenza di dipendenze funzionali parziali implica che la relazione **non è in Seconda Forma Normale**.

---
### Esempio applicativo realistico
Si consideri un sistema informativo universitario che registra gli **esami sostenuti dagli studenti**. Per ogni esame sostenuto si memorizzano:
* lo studente che ha sostenuto l’esame;
* l’insegnamento;
* la data dell’esame;
* il voto ottenuto;
* alcune informazioni descrittive.
La seguente tabella rappresenta una possibile struttura iniziale.
#### Tabella EsamiSostenuti
| Matricola | CodEsame | Data       | Voto | NomeStudente | NomeEsame    |
| --------- | -------- | ---------- | ---- | ------------ | ------------ |
| 101       | BD       | 10/06/2024 | 28   | Luca         | Basi di Dati |
| 101       | RET      | 20/06/2024 | 30   | Luca         | Reti         |
| 102       | BD       | 12/06/2024 | 27   | Anna         | Basi di Dati |
**Chiave primaria composta:** (Matricola, CodEsame, Data)
La tabella:
* è in **Prima Forma Normale**, poiché tutti gli attributi contengono valori atomici;
* rappresenta correttamente un contesto applicativo reale;
* non è in Seconda Forma Normale.
---
#### Analisi delle dipendenze funzionali
Dalla semantica del dominio si ricavano le seguenti dipendenze funzionali:
* Matricola → NomeStudente
* CodEsame → NomeEsame
* (Matricola, CodEsame, Data) → Voto
Gli attributi `NomeStudente` e `NomeEsame` dipendono solo da **una parte della chiave primaria**, configurando **dipendenze funzionali parziali**. Di conseguenza, la relazione viola la Seconda Forma Normale.
---
#### Scomposizione in Seconda Forma Normale
Per eliminare le dipendenze parziali, la relazione viene scomposta nelle seguenti tabelle.
##### Tabella Studenti
| Matricola | NomeStudente |
| --------- | ------------ |
| 101       | Luca         |
| 102       | Anna         |
##### Tabella Esami
| CodEsame | NomeEsame    |
| -------- | ------------ |
| BD       | Basi di Dati |
| RET      | Reti         |
##### Tabella Appelli
| Matricola | CodEsame | Data       | Voto |
| --------- | -------- | ---------- | ---- |
| 101       | BD       | 10/06/2024 | 28   |
| 101       | RET      | 20/06/2024 | 30   |
| 102       | BD       | 12/06/2024 | 27   |
Dopo la scomposizione:
* ogni attributo non chiave dipende dall’intera chiave primaria della propria tabella;
* la ridondanza informativa è eliminata;
* lo schema risultante è in **Seconda Forma Normale**.
## Terza Forma Normale (3NF)
### Definizione di Terza Forma Normale
Una relazione si trova in **Terza Forma Normale (3NF)** quando:
* è in **Seconda Forma Normale (2NF)**;
* non esistono **dipendenze funzionali transitive** tra attributi non chiave.
In forma più rigorosa, una relazione è in 3NF se, per ogni dipendenza funzionale $X \rightarrow A$:
* $X$ è una superchiave, oppure
* $A$ è un attributo primo, cioè parte di almeno una chiave candidata.
---
### Dipendenza funzionale transitiva
Si parla di **dipendenza funzionale transitiva** quando, data una chiave primaria $K$:
* $K \rightarrow A$;
* $A \rightarrow B$;
* $A$ e $B$ sono attributi non chiave.
Da queste dipendenze segue $K \rightarrow B$, e l’attributo $B$ dipende transitivamente dalla chiave primaria, violando la Terza Forma Normale.
---
### Esempio applicativo
Si consideri una tabella che memorizza informazioni sugli **studenti iscritti a un corso di laurea**.
#### Tabella IscrizioniStudenti
| Matricola | NomeStudente | CodCorsoLaurea | NomeCorsoLaurea |
| --------- | ------------ | -------------- | --------------- |
| 101       | Luca         | INF            | Informatica     |
| 102       | Anna         | INF            | Informatica     |
| 103       | Marco        | ING            | Ingegneria      |
**Chiave primaria:** Matricola
La tabella:
* è in **1NF**;
* è in **2NF**;
* non è in **3NF**.
---
#### Analisi delle dipendenze funzionali
Dal significato dei dati emergono le seguenti dipendenze funzionali:
* $Matricola \rightarrow NomeStudente$
* $Matricola \rightarrow CodCorsoLaurea$
* $CodCorsoLaurea \rightarrow NomeCorsoLaurea$
Da cui segue la dipendenza transitiva:
* $Matricola \rightarrow NomeCorsoLaurea$
L’attributo `NomeCorsoLaurea` dipende dalla chiave primaria tramite un altro attributo non chiave, configurando una violazione della Terza Forma Normale.
---
#### Scomposizione in Terza Forma Normale
Per eliminare la dipendenza transitiva, la relazione viene scomposta come segue.
##### Tabella Studenti
| Matricola | NomeStudente | CodCorsoLaurea |
| --------- | ------------ | -------------- |
| 101       | Luca         | INF            |
| 102       | Anna         | INF            |
| 103       | Marco        | ING            |
##### Tabella CorsiDiLaurea
| CodCorsoLaurea | NomeCorsoLaurea |
| -------------- | --------------- |
| INF            | Informatica     |
| ING            | Ingegneria      |

---
#### Verifica del rispetto della Terza Forma Normale
Dopo la scomposizione:
* ogni tabella è in **1NF** e **2NF**;
* non esistono dipendenze funzionali tra attributi non chiave;
* ogni attributo non chiave dipende direttamente e solo dalla chiave primaria.
Lo schema risultante rispetta la **Terza Forma Normale (3NF)**.
---
## Forma Normale di Boyce-Codd (BCNF)
### Definizione
Una relazione si trova in **Forma Normale di Boyce-Codd (BCNF)** quando:
* è in **Prima Forma Normale (1FN)**;
* **ogni determinante è una chiave candidata**.
In altre parole, **ogni insieme di attributi dal quale dipendono altri attributi deve poter svolgere la funzione di chiave**.
La BCNF può essere espressa formalmente come segue:

Se in una relazione vale una dipendenza funzionale $A \rightarrow B$, allora l’insieme di attributi $A$ **deve contenere una chiave candidata**.

---
### Relazione tra BCNF, 2FN e 3FN
Da questa definizione discende che:
* una relazione in **BCNF** è automaticamente anche in **2FN** e in **3FN**;
* la BCNF esclude:
  * le dipendenze parziali (violazioni della 2FN);
  * le dipendenze transitive esterne alla chiave (violazioni della 3FN).
Tuttavia:
> una relazione può essere in **3FN** ma **non** in **BCNF**.
---
###  Esempio: allocazione delle sale operatorie
Si consideri una relazione che descrive l’allocazione delle sale operatorie di un ospedale.
Le sale operatorie sono prenotate giorno per giorno, in orari prestabiliti, per effettuare interventi chirurgici su pazienti.
Nel corso di una giornata:
* una sala operatoria è occupata sempre dallo **stesso chirurgo**;
* il chirurgo può effettuare **più interventi in orari diversi**.
Noti **Paziente** e **DataIntervento**, sono noti:
* l’ora dell’intervento;
* il chirurgo;
* la sala operatoria.
---
####  Schema della relazione
**Interventi** $(Paziente, DataIntervento, OraIntervento, Chirurgo, Sala)$
####  Dipendenze funzionali
In base alla descrizione del dominio valgono le seguenti dipendenze:

a. ${Paziente, DataIntervento} \rightarrow OraIntervento, Chirurgo, Sala$
b. ${Chirurgo, DataIntervento, OraIntervento} \rightarrow Paziente, Sala$
c. ${Sala, DataIntervento, OraIntervento} \rightarrow Paziente, Chirurgo$
d. ${Chirurgo, DataIntervento} \rightarrow Sala$

---
####  Chiavi candidate
Dalle dipendenze funzionali risultano tre insiemi di attributi che possono svolgere la funzione di chiave:
* ${Paziente, DataIntervento}$
* ${Chirurgo, DataIntervento, OraIntervento}$
* ${Sala, DataIntervento, OraIntervento}$
Si sceglie come **chiave primaria**:
$$
{Paziente, DataIntervento}
$$
---
####  Istanza della relazione
| Paziente | DataIntervento | OraIntervento | Chirurgo | Sala  |
| -------- | -------------- | ------------- | -------- | ----- |
| Bianchi  | 25/10/2005     | 8.00          | De Bakey | Sala1 |
| Rossi    | 25/10/2005     | 8.00          | Romano   | Sala2 |
| Bianchi  | 26/10/2005     | 9.30          | Veronesi | Sala1 |
| Viola    | 25/10/2005     | 10.30         | De Bakey | Sala1 |
| Verdi    | 25/10/2005     | 11.30         | Romano   | Sala2 |

---
###  Verifica della BCNF
I determinanti nelle dipendenze **a**, **b** e **c** sono insiemi di attributi che possono svolgere la funzione di chiave candidata.
In questi casi la **BCNF non è violata**.
La dipendenza:
$$
{Chirurgo, DataIntervento} \rightarrow Sala
$$
viola invece la BCNF perché:
* il determinante ${Chirurgo, DataIntervento}$ **non è una chiave candidata**;
* esiste quindi un attributo (`Sala`) che dipende da un insieme di attributi **non chiave**.
Ne segue che:
> la relazione **Interventi non è in BCNF**.
---
###  Perché la relazione è comunque in 3FN
La relazione **è in Terza Forma Normale**, perché:
* nella dipendenza ${Chirurgo, DataIntervento} \rightarrow Sala$,
* l’attributo `Sala` **appartiene a una chiave candidata** (${Sala, DataIntervento, OraIntervento}$),
* quindi `Sala` **non è un attributo non-chiave**.
La 3FN **ammette** questa situazione, la BCNF **no**.
---
###  Problema di ridondanza
Pur essendo in 3FN, la relazione presenta ridondanza:
* se si deve cambiare la sala assegnata a un chirurgo in una certa data,
* è necessario aggiornare **più righe**.
Ad esempio, per spostare Romano da Sala2 a Sala3 occorre modificare due tuple.
---
###  Normalizzazione in BCNF
La relazione può essere scomposta nei seguenti schemi.
####  OccupazioneSale
$(Chirurgo, DataIntervento, Sala)$

| Chirurgo | DataIntervento | Sala  |
| -------- | -------------- | ----- |
| De Bakey | 25/10/2005     | Sala1 |
| Romano   | 25/10/2005     | Sala2 |
| Veronesi | 26/10/2005     | Sala1 |

---
####  Interventi
$(Paziente, DataIntervento, OraIntervento, Chirurgo)$

| Paziente | DataIntervento | OraIntervento | Chirurgo |
| -------- | -------------- | ------------- | -------- |
| Bianchi  | 25/10/2005     | 8.00          | De Bakey |
| Rossi    | 25/10/2005     | 8.00          | Romano   |
| Negri    | 26/10/2005     | 9.30          | Veronesi |
| Viola    | 25/10/2005     | 10.30         | De Bakey |
| Verdi    | 25/10/2005     | 11.30         | Romano   |
In questa nuova implementazione, la riassegnazione delle sale operatorie richiede la modifica di **una sola riga**.

---
###  Osservazione conclusiva
La Boyce-Codd Normal Form è una forma di normalizzazione più forte della Terza Forma Normale. Essa richiede che ogni attributo, e non solo quelli non-chiave, dipenda da un insieme di attributi che possa svolgere la funzione di chiave. Tuttavia, la normalizzazione in BCNF può comportare la perdita di dipendenze funzionali, motivo per cui in alcuni casi si preferisce mantenere uno schema in 3FN.
