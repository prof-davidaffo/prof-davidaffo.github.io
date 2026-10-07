## Introduzione al SQL (Structured Query Language)

**SQL** è un linguaggio di programmazione progettato per gestire e manipolare i database relazionali. Viene utilizzato per eseguire varie operazioni sui dati, come l'inserimento, l'aggiornamento, la cancellazione e la ricerca di record nei database. SQL gioca un ruolo cruciale nell'interazione con i database, permettendo agli sviluppatori e agli analisti di dati di estrarre facilmente informazioni significative.

### Concetti Fondamentali di SQL

- **DML (Data Manipulation Language):** Include comandi come `SELECT`, `INSERT`, `UPDATE`, e `DELETE`, usati per manipolare i dati presenti nelle tabelle.
- **DDL (Data Definition Language):** Comprende istruzioni come `CREATE`, `ALTER`, `DROP`, che sono utilizzate per definire e modificare la struttura del database, come la creazione di tabelle.
- **DCL (Data Control Language):** Include comandi come `GRANT` e `REVOKE`, impiegati per definire i diritti e gli accessi degli utenti.

## Comprensione dell'SQL injection

L'SQL injection è una tecnica di attacco informatico che sfrutta le vulnerabilità nel codice di un'applicazione per manipolare le query SQL. Questo permette agli aggressori di eseguire operazioni non autorizzate sul database, come accedere a dati sensibili, modificarli o eliminarli.

### Tipi di SQL injection

- **SQL injection basata su Stringhe:** Si verifica quando l'attaccante inserisce una sequenza di caratteri che termina la stringa SQL originale e aggiunge una nuova query o condizione.
- **SQL injection Numerica:** Avviene quando l'input atteso è un numero, e l'attaccante inserisce una query SQL o condizioni logiche che alterano la query originale.

### SQL injection e la Triade CIA

La triade CIA (Confidenzialità, Integrità, Disponibilità) rappresenta i principi fondamentali della sicurezza informatica. L'SQL injection impatta negativamente su tutti e tre gli aspetti:

- **Confidenzialità:** L'SQL injection può essere utilizzata per accedere a dati riservati senza autorizzazione, violando la confidenzialità.
- **Integrità:** Gli attacchi possono alterare o cancellare dati, compromettendo l'integrità delle informazioni memorizzate nel database.
- **Disponibilità:** Un attacco SQL Injection può anche portare al sovraccarico del sistema o alla corruzione dei dati, influenzando la disponibilità dei servizi
# Struttura di base e select
Questa lezione introduce le basi di SQL (Structured Query Language), il linguaggio standardizzato usato per gestire database relazionali e per eseguire varie operazioni sui dati contenuti. SQL consente di organizzare i dati in righe, colonne e tabelle, e di indicizzarli per rendere più efficiente la ricerca di informazioni pertinenti.

### Esempio di Tavola SQL

L'esempio fornito mostra una tabella chiamata `employees` che contiene dati sugli impiegati di un'azienda. Ogni riga rappresenta un dipendente e include informazioni come numero di identificazione unico (`userid`), nome, cognome, dipartimento, salario e un numero di autenticazione della transazione (`auth_tan`).

### Categorie Principali di Comandi SQL

1. **Data Manipulation Language (DML):** Questi comandi sono utilizzati per manipolare i dati all'interno delle tabelle del database. Esempi includono `SELECT`, `INSERT`, `UPDATE`, e `DELETE`.
2. **Data Definition Language (DDL):** Questi comandi sono usati per definire, modificare o eliminare strutture di dati, come le tabelle. Esempi includono `CREATE`, `ALTER`, e `DROP`.
3. **Data Control Language (DCL):** Questi comandi gestiscono le autorizzazioni e l'accesso ai dati, includendo comandi come `GRANT` e `REVOKE`.

Ognuno di questi tipi di comandi può essere sfruttato dagli attaccanti per compromettere la confidenzialità, l'integrità e/o la disponibilità di un sistema.

Certo, per l'esercizio di recupero del dipartimento del dipendente Bob Franco dalla tabella `employees`, ecco una rappresentazione più dettagliata che include il testo dell'esercizio, la struttura della tabella e la query SQL esemplificativa.

## Esercizio

Si consideri la seguente tabella SQL denominata `employees`, che contiene dati sugli impiegati di un'azienda. L'azienda registra le seguenti informazioni sui propri dipendenti: un numero unico di identificazione del dipendente (`userid`), il cognome (`last_name`), il nome (`first_name`), il dipartimento (`department`), il salario (`salary`) e un numero di autenticazione della transazione (`auth_tan`). Ogni pezzo di informazione è memorizzato in una colonna separata, e ogni riga rappresenta un singolo dipendente dell'azienda.

### Struttura della Tavola `employees`

| userid | first_name | last_name | department  | salary  | auth_tan |
|--------|------------|-----------|-------------|---------|----------|
| 32147  | Paulina    | Travers   | Accounting  | $46.000 | P45JSI   |
| 89762  | Tobi       | Barnett   | Development | $77.000 | TA9LL1   |
| 96134  | Bob        | Franco    | Marketing   | $83.700 | LO9S2V   |
| 34477  | Abraham    | Holman    | Development | $50.000 | UU2ALK   |
| 37648  | John       | Smith     | Marketing   | $64.350 | 3SL99A   |

### Esercizio

**Compito:** Recuperare il dipartimento del dipendente Bob Franco. Si assume di avere pieni privilegi amministrativi per questo compito e di poter accedere a tutti i dati senza autenticazione.

### Query SQL Esemplificativa

Per ottenere il dipartimento di Bob Franco, si utilizza la seguente query SQL:

```sql
SELECT department FROM employees WHERE first_name = 'Bob' AND last_name = 'Franco';
```

### Risultato Atteso

La query dovrebbe restituire il dipartimento di Bob Franco, che, secondo la tabella fornita, è "Marketing".

### Conclusioni

Questo esercizio dimostra come utilizzare una query SQL `SELECT` per filtrare e recuperare informazioni specifiche da una tabella basandosi su criteri definiti, come il nome e il cognome di un dipendente. Gli esercizi come questo sono fondamentali per comprendere le operazioni di base di SQL e per imparare a manipolare e accedere ai dati all'interno di un database relazionale.
# Data Manipulation Language (DML)

Il **Data Manipulation Language (DML)** è una componente fondamentale del SQL che si occupa della manipolazione dei dati all'interno dei database. Attraverso l'utilizzo di comandi DML, è possibile eseguire operazioni come la richiesta, l'aggiunta, la modifica e la cancellazione di record. Gli attacchi di SQL Injection sfruttano proprio questi comandi per compromettere la sicurezza dei sistemi.

#### Comandi DML Principali:

- **SELECT:** Per recuperare dati da una o più tabelle.
- **INSERT:** Per inserire nuovi dati nelle tabelle.
- **UPDATE:** Per aggiornare i dati esistenti.
- **DELETE:** Per eliminare i record dalle tabelle.

Questi comandi sono essenziali sia per la gestione quotidiana dei dati che per lo sviluppo di applicazioni robuste e sicure.

#### Esempio di Utilizzo DML:

Per recuperare il numero di telefono di un dipendente specifico, si utilizzerebbe il comando `SELECT` come segue:

```sql
SELECT phone
FROM employees
WHERE userid = 96134;
```

Questo comando estrae il numero di telefono del dipendente con `userid` 96134.

### Esercizio Pratico: Modifica del Dipartimento

**Obiettivo:** Cambiare il dipartimento di Tobi Barnett in 'Sales'.

**Premessa:** Si assume di avere pieni privilegi amministrativi, il che permette di accedere e modificare tutti i dati senza necessità di autenticazione.

#### Passaggi Consigliati:

1. **Identificare il Record:** Prima di tutto, è necessario individuare il record corrispondente a Tobi Barnett nella tabella `employees`.
2. **Eseguire l'UPDATE:** Utilizzare il comando `UPDATE` per modificare il dipartimento di Tobi Barnett.

#### Query SQL di Esempio:

```sql
UPDATE employees
SET department = 'Sales'
WHERE first_name = 'Tobi' AND last_name = 'Barnett';
```

Questa query modifica il dipartimento di Tobi Barnett in 'Sales', dimostrando come un comando DML `UPDATE` possa essere utilizzato per aggiornare i dati in un database.

### Riflessione sulla Sicurezza

La capacità di manipolare i dati tramite DML sottolinea l'importanza di proteggere le applicazioni web da attacchi di SQL Injection. Tali attacchi possono violare la confidenzialità, l'integrità e la disponibilità dei dati, compromettendo gravemente la sicurezza di un sistema. Implementare misure di sicurezza come la validazione dell'input, l'uso di query parametrizzate e la limitazione dei privilegi di accesso al database sono passi cruciali per mitigare questo rischio.
# DDL (Data Definition Language)

La **Data Definition Language (DDL)** comprende comandi utilizzati per definire la struttura dei dati all'interno di un database. Questi comandi sono fondamentali per la creazione, la modifica e l'eliminazione degli oggetti del database, contribuendo a delineare lo schema del database, che include tabelle, indici, viste, relazioni, trigger e altro ancora.

### Comandi DDL Principali

- **`CREATE`**: Utilizzato per creare nuovi oggetti nel database, come tabelle e viste.
- **`ALTER`**: Modifica la struttura di un oggetto esistente, come aggiungere o rimuovere colonne in una tabella.
- **`DROP`**: Elimina oggetti dal database, rimuovendo definitivamente tabelle, viste o altri oggetti.

### Esempio: Creazione di una Tabella

```sql
CREATE TABLE employees(
    userid varchar(6) not null primary key,
    first_name varchar(20),
    last_name varchar(20),
    department varchar(20),
    salary varchar(10),
    auth_tan varchar(6)
);
```

Questo comando `CREATE TABLE` crea la tabella degli impiegati (`employees`) con varie colonne per memorizzare informazioni quali l'ID utente, il nome, il cognome, il dipartimento, lo stipendio e un numero di autenticazione della transazione.

### Rischi per la Sicurezza con DDL

Un attaccante che riesce a iniettare comandi DDL in un database può compromettere l'integrità e la disponibilità del sistema:
- **Integrità**: Utilizzando comandi `ALTER` e `DROP`, un attaccante può alterare o rimuovere elementi strutturali essenziali del database, influenzando l'integrità dei dati.
- **Disponibilità**: I comandi `DROP` possono essere utilizzati per eliminare tabelle o altri oggetti del database, influenzando negativamente la disponibilità dei dati per gli utenti legittimi.

### Esercizio Pratico: Modifica dello Schema

**Obiettivo**: Aggiungere una colonna "phone" (`varchar(20)`) alla tabella "employees".

Avendo pieni privilegi amministrativi, per aggiungere una nuova colonna alla tabella `employees`, si utilizza il comando `ALTER TABLE` come segue:

```sql
ALTER TABLE employees
ADD COLUMN phone varchar(20);
```

Questo comando aggiunge una colonna `phone` alla tabella `employees`, permettendo di memorizzare numeri di telefono degli impiegati fino a 20 caratteri.
Comprendere e utilizzare correttamente i comandi DDL è essenziale per la gestione efficace della struttura di un database. Tuttavia, è fondamentale garantire che queste operazioni siano protette da accessi non autorizzati per preservare l'integrità e la disponibilità dei dati all'interno del sistema.
# DCL (Data Control Language)

La **Data Control Language (DCL)** comprende comandi utilizzati per implementare la logica di controllo degli accessi in un database. DCL si occupa principalmente della sicurezza e della gestione degli accessi, permettendo agli amministratori di database di specificare i diritti di accesso agli oggetti del database, come tabelle, viste e funzioni.

### Comandi Principali DCL

- **`GRANT`**: Utilizzato per concedere privilegi di accesso a un utente o a un gruppo su specifici oggetti del database.
- **`REVOKE`**: Utilizzato per revocare privilegi di accesso precedentemente concessi a un utente o a un gruppo.

### Rischi per la Sicurezza con DCL

Se un attaccante riesce a iniettare comandi DCL in un database, può compromettere:
- **Confidenzialità**: Utilizzando comandi `GRANT`, potrebbe concedere a sé stesso o ad altri privilegi amministrativi, accedendo così a dati sensibili.
- **Disponibilità**: Utilizzando comandi `REVOKE`, potrebbe revocare i privilegi di accesso all'amministratore del database o ad altri utenti legittimi, influenzando la disponibilità dei dati.

### Esercizio Pratico: Concessione dei Diritti

**Obiettivo**: Concedere i diritti alla tabella `grant_rights` all'utente `unauthorized_user`.

Considerando che si dispone di pieni privilegi amministrativi per l'assegnazione, il comando DCL per concedere diritti sull'oggetto tabella `grant_rights` a `unauthorized_user` sarebbe:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON grant_rights TO unauthorized_user;
```

Questo comando concede all'`unauthorized_user` i privilegi per eseguire operazioni di `SELECT`, `INSERT`, `UPDATE`, e `DELETE` sulla tabella `grant_rights`.
La comprensione e l'uso appropriato dei comandi DCL sono cruciali per mantenere la sicurezza dei dati all'interno di un database, garantendo che solo gli utenti autorizzati abbiano accesso alle informazioni appropriate. Gli amministratori di database devono essere diligentemente consapevoli dei diritti concessi e revocati per prevenire potenziali violazioni della sicurezza e assicurare che l'integrità e la confidenzialità dei dati siano preservate.

# SQL Injection
L'iniezione SQL (SQLi) è una tecnica di hacking tra le più comuni che sfrutta le vulnerabilità nell'interazione tra le applicazioni web e i loro sistemi di gestione del database. Consiste nell'inserimento o "iniezione" di codice SQL maligno attraverso i campi di input forniti agli utenti, come form di ricerca o di login. Se un'applicazione non sanifica correttamente l'input utente o non filtra i caratteri speciali, gli aggressori possono manipolare le query SQL sottostanti per ottenere accesso non autorizzato o danneggiare i dati.

### Esempi di Iniezione SQL

Consideriamo un'applicazione web che consente agli utenti di recuperare informazioni inserendo un nome utente in un campo di un form. L'input dell'utente viene inviato al server e inserito in una query SQL, che viene poi interpretata da un motore SQL.

#### Esempio di Query SQL Base:

```sql
"SELECT * FROM users WHERE name = '" + userName + "'";
```

Se l'input fosse `Smith`, la query diventerebbe:

```sql
"SELECT * FROM users WHERE name = 'Smith'";
```

e restituirebbe tutti i dati relativi all'utente con nome `Smith`.

#### Manipolazione tramite Iniezione SQL:

Se un aggressore inserisce dati contenenti caratteri o stringhe che hanno un significato "speciale" per l'interprete SQL (come `;`, `--`, o `'`), e i dati non vengono correttamente sanificati o validati, l'aggressore può modificare il comportamento previsto della query SQL per eseguire azioni (maligne) sul database.

#### Esempi di Input Maligni:

- `Smith' OR '1' = '1`: Risulta in `SELECT * FROM users WHERE name = 'Smith' OR TRUE;` che restituirà tutte le voci dalla tabella `users`.

- `Smith' OR 1 = 1; --`: Risulta in `SELECT * FROM users WHERE name = 'Smith' OR TRUE;--';` che, come nel primo esempio, restituirà tutte le voci dalla tabella `users`.

- `Smith'; DROP TABLE users; TRUNCATE audit_log; --`: Concatena più comandi SQL per eliminare sia la tabella `users` che cancellare tutte le voci dalla tabella `audit_log`.

### Impatto dell'Iniezione SQL

L'iniezione SQL può compromettere seriamente l'integrità, la confidenzialità e la disponibilità dei dati in un sistema:

- **Confidenzialità**: Accedendo a dati sensibili senza autorizzazione.
- **Integrità**: Modificando o cancellando dati.
- **Disponibilità**: Rendendo i dati o l'intero database inaccessibili.

### Prevenzione dell'Iniezione SQL

Per prevenire l'iniezione SQL, le applicazioni dovrebbero:

- Utilizzare statement SQL parametrizzati o ORM che automaticamente gestiscono la sicurezza dell'input.
- Sanificare e validare tutti gli input utente, in particolare quelli che influenzano le query SQL.
- Adottare il principio del minimo privilegio, limitando i diritti degli utenti sui database solo a quelli strettamente necessari.

L'adozione di queste pratiche migliora notevolmente la sicurezza delle applicazioni web e protegge i dati sensibili da accessi non autorizzati o manipolazioni dannose.

L'iniezione SQL (SQLi) rappresenta una minaccia significativa per la sicurezza dei database collegati alle applicazioni web. Questa tecnica di attacco sfrutta le vulnerabilità nell'input dell'utente che non viene adeguatamente filtrato o sanificato prima di essere eseguito come parte di una query SQL. Le conseguenze di un attacco SQLi riuscito sono vaste e possono avere impatti devastanti sulla sicurezza e l'integrità dei dati. Di seguito, sono dettagliate le possibili conseguenze di un'iniezione SQL:

### Lettura e Modifica di Dati Sensibili

Gli attaccanti possono leggere dati sensibili dal database, come informazioni personali degli utenti, dati finanziari, o credenziali di accesso. Questo viola la confidenzialità dei dati e può portare a furti di identità, frodi finanziarie, o altre forme di abuso di dati.

### Esecuzione di Operazioni Amministrative sul Database

Le iniezioni SQL possono consentire agli attaccanti di eseguire operazioni amministrative sul database, come:

- **Disattivazione dell'auditing o del DBMS**: Compromettendo la capacità di monitorare e registrare le attività sospette.
- **Troncamento di tabelle e log**: Eliminando i dati importanti e le tracce delle attività degli attaccanti.
- **Aggiunta di utenti**: Creando nuovi account con privilegi elevati, gli attaccanti possono garantirsi l'accesso continuo al sistema.

### Recupero del Contenuto di File Presenti nel File System del DBMS

Gli attaccanti possono utilizzare l'iniezione SQL per leggere il contenuto di file specifici presenti nel file system del DBMS, ottenendo così accesso a dati o configurazioni sensibili del sistema.

### Emissione di Comandi al Sistema Operativo

In alcuni casi, l'iniezione SQL può permettere agli attaccanti di eseguire comandi direttamente sul sistema operativo sottostante, compromettendo l'intera macchina ospitante il database.

### Conseguenze dell'Iniezione SQL sugli Obiettivi di Sicurezza

- **Falsificazione dell'Identità**: Gli attaccanti possono impersonare altri utenti, accedendo a dati o eseguendo azioni non autorizzate.
- **Alterazione dei Dati Esistenti**: Possono modificare o cancellare dati, compromettendo l'integrità delle informazioni.
- **Problemi di Ripudio**: Possono alterare bilanci, annullare transazioni o modificare dati critici, creando confusione e problemi legali.
- **Divulgazione Completa dei Dati**: Possono accedere a tutti i dati del sistema, esponendo informazioni riservate o sensibili.
- **Distruggere i Dati o Renderli Altrimenti Non Disponibili**: Possono cancellare dati critici o rendere il sistema inutilizzabile, influenzando la disponibilità.
- **Diventare Amministratori del Server del Database**: Ottenendo il controllo completo sul database e potenzialmente sull'intero sistema.
L'iniezione SQL rappresenta una grave minaccia per la sicurezza delle applicazioni web, ma la gravità di un attacco può variare ampiamente a seconda di diversi fattori. Ecco una panoramica dei principali elementi che influenzano la severità di un'iniezione SQL:

### Abilità e Immaginazione dell'Attaccante

La gravità di un'iniezione SQL è fortemente influenzata dall'abilità tecnica e dall'ingegnosità dell'attaccante. Un aggressore con una profonda conoscenza dei sistemi di gestione dei database (DBMS) e delle tecniche avanzate di iniezione SQL può sfruttare vulnerabilità che altri potrebbero non riuscire a identificare o sfruttare.

### Misure di Difesa Stratificate

La presenza di misure di difesa multilivello può limitare significativamente l'impatto di un attacco SQLi. Queste misure includono:

- **Validazione dell'Input**: Assicurare che tutti gli input ricevuti dall'utente siano validati per tipologia e formato atteso può prevenire l'esecuzione di query SQL malevole.
- **Principio del Minimo Privilegio**: Limitare i diritti di accesso al database solo a ciò che è strettamente necessario per l'esecuzione delle funzioni dell'applicazione riduce il potenziale impatto di un'iniezione SQL riuscita.

### Tecnologia del Database

La tecnologia del database in uso può influenzare la fattibilità e l'efficacia di un attacco SQLi. Alcuni database non supportano il chaining di comandi, il che può limitare le azioni che un attaccante può eseguire attraverso un'unica iniezione. Ad esempio:

- **Microsoft Access**, **MySQL Connector/J e C**, e **Oracle** hanno limitazioni specifiche che possono ridurre la gravità di un attacco SQLi.

### Linguaggi di Programmazione

L'iniezione SQL è più comune in linguaggi di programmazione più vecchi o meno sicuri come PHP, Classic ASP, Cold Fusion, che inizialmente non fornivano supporto per le query parametrizzate. Tuttavia, le versioni più recenti di questi linguaggi hanno introdotto il supporto per le query parametrizzate, mitigando così il rischio di iniezione SQL.

- **Query Parametrizzate**: L'uso di query parametrizzate è una delle difese più efficaci contro l'iniezione SQL, poiché separa chiaramente i dati dalle istruzioni SQL, impedendo l'esecuzione di input malevoli come parte della query.

### Specificità dei Database

Non tutti i database sono uguali. SQL Server, ad esempio, offre funzionalità che possono essere sfruttate dagli attaccanti, come:

- **Shell dei Comandi**: Utilizzando `master.dbo.xp_cmdshell` per eseguire comandi diretti del sistema operativo.
- **Comandi del Registro di Sistema**: Funzioni come `xp_regread` e `xp_regdeletekey` possono essere usate per manipolare il registro di sistema del server.

### Conclusione

La severità di un attacco SQLi può variare notevolmente, ma comprendere i fattori che influenzano questa gravità è essenziale per sviluppare strategie di difesa efficaci. Implementare la validazione dell'input, adottare il principio del minimo privilegio, utilizzare tecnologie di database sicure e sfruttare le funzionalità di sicurezza offerte dai linguaggi di programmazione moderni sono passi critici per proteggere le applicazioni web dalle vulnerabilità di iniezione SQL.

## String SQL Injection
Nella nostra dispensa sull'iniezione SQL, esploreremo ora come eseguire un attacco di tipo String SQL Injection e il potenziale impatto di tale attacco su una query dinamica. Questo esercizio dimostra la vulnerabilità di un'applicazione web che costruisce query SQL dinamicamente, combinando stringhe in modo insicuro.

### Esercizio: Iniezione SQL di Tipo Stringa

Immaginiamo di avere una query SQL costruita dinamicamente nel codice di un'applicazione web, simile all'esempio fornito. Questa pratica di costruire query concatenando stringhe rende l'applicazione vulnerabile agli attacchi di iniezione SQL di tipo stringa.

#### Query Vulnerabile:

```sql
"SELECT * FROM user_data WHERE first_name = 'John' AND last_name = '" + lastName + "'";
```

In questa query, `lastName` è una variabile che contiene l'input dell'utente. Se l'input non viene sanificato o filtrato adeguatamente, un attaccante può iniettare SQL malevolo.

#### Obiettivo dell'Esercizio:

Utilizzare il form sottostante per recuperare tutti gli utenti dalla tabella `user_data`, senza necessità di conoscere un nome utente specifico.

#### Soluzione Vulnerabile:

Per eseguire un attacco e recuperare tutti gli utenti, un attaccante potrebbe inserire un valore per `lastName` che chiuda la query precedente e ne inserisca una nuova o alteri il comportamento della query originale. Un esempio di input malevolo potrebbe essere:

```
' OR '1'='1
```

L'inserimento di questo input modificherebbe la query in:

```sql
SELECT * FROM user_data WHERE first_name = 'John' AND last_name = '' OR '1'='1';
```

Questo causa l'esecuzione di una condizione sempre vera (`'1'='1'`), risultando nella restituzione di tutti i record dalla tabella `user_data`, indipendentemente dal valore dei campi `first_name` o `last_name`.

### Discussione:

Questo esercizio dimostra la pericolosità di costruire query SQL dinamicamente senza adeguati controlli o sanificazioni sull'input dell'utente. L'iniezione di stringhe SQL può portare alla divulgazione di informazioni sensibili, alla modifica non autorizzata dei dati o ad altre conseguenze dannose.

Nella sezione sulla Numeric SQL Injection della nostra dispensa, ci concentriamo su un esercizio pratico che dimostra come un'applicazione web possa essere vulnerabile agli attacchi di iniezione SQL numerica a causa della costruzione dinamica delle query SQL. Questo tipo di vulnerabilità si verifica quando l'input dell'utente, che dovrebbe essere un numero, viene concatenato direttamente in una query SQL senza adeguati controlli o sanificazioni.

## Numeric SQL Injection

Consideriamo una query SQL costruita dinamicamente che utilizza l'input numerico dell'utente:

```sql
"SELECT * FROM user_data WHERE login_count = " + Login_Count + " AND userid = " + User_ID;
```

In questa query, `Login_Count` e `User_ID` sono valori forniti dall'utente. Senza adeguata validazione o sanificazione, un attaccante può inserire valori malevoli per manipolare la query.

#### Obiettivo dell'Esercizio:

Utilizzare i due campi di input forniti per recuperare tutti i dati dalla tabella `user_data`, identificando quale dei due campi è vulnerabile all'iniezione SQL numerica per recuperare con successo tutti i dati.

#### Identificazione della Vulnerabilità:

Per determinare quale campo è suscettibile all'iniezione SQL numerica, consideriamo che l'iniezione avviene quando l'input atteso è un numero. Un attaccante potrebbe inserire un input come `0 OR 1=1` per alterare la logica della query. Questo input forzerebbe la query a restituire tutti i record dalla tabella, ignorando le condizioni originali.

```
Login_Count: [lasciato vuoto o un valore valido]
User_ID: 0 OR 1=1
```

Ciò modificherebbe la query in:

```sql
SELECT * FROM user_data WHERE login_count = [Login_Count] AND userid = 0 OR 1=1;
```

Questa manipolazione sfrutta la priorità degli operatori e la logica delle condizioni nelle query SQL. La condizione `1=1` è universalmente vera, quindi l'uso di `OR 1=1` dopo `userid = 0` rende l'intera condizione `WHERE` vera per ogni riga nella tabella, indipendentemente dai valori di `login_count` e `User_ID`. L'attacco non funzionerebbe invertendo i valori, in quanto l'OR sarebbe in mezzo all'espressione booleana, e quindi verrebbe comunque effettuato alla fine un AND che mi rende falsa l'espressione.

Nella nostra dispensa che esplora come un'iniezione SQL possa compromettere la riservatezza dei dati, ci concentriamo su un esempio pratico che illustra l'uso dell'iniezione SQL di tipo stringa per accedere a dati sensibili. Questo esercizio aiuta a comprendere come le vulnerabilità di sicurezza possano essere sfruttate per violare la confidenzialità dei dati all'interno di un sistema.

# SQL Injection per compromettere la triade CIA

## Confidentiality (C): Compromissione della Riservatezza tramite Iniezione SQL di Tipo Stringa

L'iniezione SQL di tipo stringa si verifica quando un'applicazione costruisce query SQL concatenando direttamente input forniti dall'utente, senza adeguata sanificazione o preparazione. Questo approccio rende l'applicazione vulnerabile, permettendo agli attaccanti di modificare il comportamento delle query SQL inserendo appositamente sequenze di caratteri malevoli.

#### Scenario Pratico: Accesso ai Dati dei Colleghi

**Situazione**: Sei un dipendente di nome John Smith in una grande azienda che dispone di un sistema interno per visualizzare i dati interni dei dipendenti, come il dipartimento di appartenenza e lo stipendio, utilizzando un TAN di autenticazione unico.

**Obiettivo**: Vuoi esplorare il sistema per visualizzare i dati di tutti i tuoi colleghi, non solo i tuoi, per confrontare gli stipendi.

**Vulnerabilità Sfruttata**: La query SQL che gestisce la tua richiesta è vulnerabile all'iniezione SQL:

```sql
"SELECT * FROM employees WHERE last_name = '" + name + "' AND auth_tan = '" + auth_tan + "'";
```

**Approccio di Iniezione**:
Per sfruttare questa vulnerabilità, inserisci un input che termini la query SQL corrente e ne modifichi il comportamento per restituire i dati di tutti i dipendenti. Un esempio di input malevolo potrebbe essere:

**`name`**: `' OR '1'='1`

Questo approccio utilizza l'iniezione di `' OR '1'='1` per creare una condizione sempre vera, ignorando i controlli su `last_name` e `auth_tan`.

#### Risultato Atteso

La query modificata ignora i criteri di autenticazione e seleziona tutti i record dalla tabella `employees`, esponendo i dati sensibili di tutti i dipendenti, inclusi i dettagli sugli stipendi.

Nella nostra dispensa che esplora le vulnerabilità di sicurezza nelle applicazioni web, il focus ora si sposta sulla compromissione dell'integrità dei dati attraverso l'uso di SQL query chaining. Questa tecnica di attacco permette agli aggressori di eseguire più istruzioni SQL in un'unica operazione, potenzialmente alterando o distruggendo dati critici.

### Integrity (I): Compromissione dell'Integrità tramite Query Chaining

**Definizione di Query Chaining**:
Il chaining di query SQL si riferisce alla pratica di aggiungere una o più istruzioni SQL alla fine di una query effettiva, utilizzando il carattere `;` come delimitatore. Questo carattere segnala la fine di una dichiarazione SQL e l'inizio di un'altra, consentendo agli attaccanti di iniettare ulteriori comandi che possono alterare i dati o la struttura del database.

#### Scenario Pratico: Modifica dello Stipendio

Nell'esercizio precedente, hai scoperto che i tuoi colleghi Tobi e Bob guadagnano più di te. Motivato da questo, decidi di modificare il tuo stipendio nel sistema per assicurarti di essere il dipendente con lo stipendio più alto.

**Informazioni Conosciute**:
- Il tuo nome è John Smith.
- Il tuo TAN attuale è 3SL99A.

#### Approccio di Attacco:

Per modificare il tuo stipendio utilizzando il chaining di query, dovresti trovare un punto di iniezione che permetta l'esecuzione di più istruzioni SQL. L'obiettivo sarebbe iniettare una query aggiuntiva per aggiornare il tuo stipendio nella tabella `employees`.

Un esempio ipotetico di attacco, che non dovrebbe essere tentato o eseguito su sistemi reali senza autorizzazione, potrebbe apparire così:

```sql
'; UPDATE employees SET salary = '100000' WHERE last_name = 'Smith' AND auth_tan = '3SL99A'; --
```

Questa iniezione ipotetica si conclude con il termine della query originale (`'`), seguito da un punto e virgola (`;`) per iniziare una nuova istruzione. La nuova istruzione `UPDATE` modifica lo stipendio per l'utente specificato (in questo caso, John Smith con TAN 3SL99A), e infine, un commento SQL (`--`) è usato per ignorare il resto della query originale e prevenire errori di sintassi.
### Availability (A): Compromissione della Disponibilità tramite Iniezione SQL
La sezione della nostra dispensa su SQL Injection si focalizza ora sulla compromissione della disponibilità dei dati, l'ultimo elemento della triade CIA (Confidenzialità, Integrità, Disponibilità). Questa fase dimostra come un attacco di iniezione SQL possa essere utilizzato per rendere i dati inaccessibili, violando così la disponibilità.
Violare la disponibilità significa rendere i dati inaccessibili agli utenti legittimi. Ciò può avvenire attraverso diverse tecniche, tra cui la modifica delle credenziali di accesso, l'eliminazione di account, dati o intere tabelle del database, o la revoca dei diritti di accesso. Un attaccante potrebbe, ad esempio, eliminare la tabella `access_log` per nascondere le tracce delle sue azioni.

#### Esempio Pratico: Eliminazione della Tabella `access_log`

Dopo aver compromesso la confidenzialità e l'integrità dei dati nelle lezioni precedenti, scopri l'esistenza di una tabella `access_log` che registra tutte le tue azioni. Per evitare che le tue manipolazioni vengano scoperte, decidi di eliminare completamente questa tabella.

#### Tecnica di Attacco: Query Chaining

Il "Query Chaining" consente di eseguire più query SQL in sequenza, separate da un punto e virgola (`;`). Questa tecnica può essere sfruttata per appendere una query di eliminazione alla query originale, con l'obiettivo di eliminare la tabella `access_log`.

##### Input Malevolo:

Supponiamo che l'applicazione vulnerabile permetta l'inserimento di input non sanificati in una forma che poi viene utilizzata per costruire dinamicamente una query SQL. Per eliminare la tabella `access_log`, potresti inserire:

```
'; DROP TABLE access_log; --
```

Questo input termina la query SQL originale (usando `';`), esegue il comando `DROP TABLE access_log` per eliminare la tabella e infine utilizza `--` per commentare il resto della query, prevenendo errori di sintassi dovuti a eventuali segmenti rimanenti della query originale.

# Tecniche avanzate
## Introduzione
Gli attacchi SQL Injection possono essere molto sofisticati e vengono eseguiti in diverse forme, tra cui:

1. **SQL Injection Classica:** L'attaccante sfrutta input non sanificati per alterare la struttura della query SQL, potenzialmente esponendo dati sensibili.
2. **Blind SQL Injection (Iniezione SQL Cieca):** Anche senza visualizzare direttamente i risultati di una query, un attaccante può dedurre informazioni sensibili tramite domande di vero/falso inviate al database.
3. **Iniezione SQL Basata su Errori:** Tramite messaggi di errore dettagliati forniti dall'applicazione, gli attaccanti possono ottenere informazioni preziose sul database.
4. **Iniezione SQL di Secondo Ordine:** Questo avviene quando i dati forniti dall'utente vengono memorizzati e poi eseguiti in seguito come una query SQL.

Per mitigare il rischio di attacchi SQL Injection, gli sviluppatori devono adottare pratiche di programmazione sicura, come l'utilizzo di query parametrizzate, la sanificazione dell'input dell'utente e l'implementazione di principi di minimo privilegio per l'accesso al database. La consapevolezza e la comprensione di come funzionano gli attacchi SQL Injection sono fondamentali per la sicurezza delle applicazioni web moderne.

## Caratteri speciali e statement speciali

Questa sezione copre l'uso di caratteri speciali e dichiarazioni nell'ambito delle iniezioni SQL, offrendo strumenti potenti per manipolare e accedere ai dati in modi non previsti dall'applicazione. Ecco un'elaborazione e integrazione basata sulle informazioni fornite:

### Caratteri Speciali nelle SQL Injection

1. **Commenti Inline (`/* */`) e di Linea (`--`, `#`):** Sono utilizzati per terminare prematuramente una query, permettendo all'attaccante di inserire parti di query che possono ignorare i controlli di sicurezza o le parti della query originale dopo l'iniezione.

2. **Concatenazione di Stringhe (`', +, ||`):** Questi operatori consentono di unire stringhe diverse per creare input malevoli. La capacità di concatenare stringhe può essere sfruttata per costruire query SQL dannose in modo dinamico.

3. **Uso di `Char()` per Evitare Quotazioni:** Questa funzione consente di inserire caratteri speciali o riservati in una query senza l'uso diretto di apici, bypassando alcuni tipi di filtraggio input.

4. **Chaining di Query con `;`:** Permette di eseguire più comandi SQL in una sola volta. Questo può essere particolarmente distruttivo se l'attaccante riesce a inserire comandi come `DROP TABLE`, che possono eliminare interi set di dati.

### Dichiarazioni Speciali

1. **`UNION`:** Utilizzato per combinare i risultati di due o più comandi SELECT in un unico set di risultati. L'operatore `UNION` richiede che ogni query SELECT nell'unione abbia lo stesso numero di colonne nei risultati, con tipi di dati compatibili. Questo può essere usato in un attacco SQL Injection per estrarre dati da diverse tabelle in un'unica query.

2. **`UNION ALL`:** A differenza di `UNION`, `UNION ALL` permette di includere valori duplicati nei risultati. Questo può essere utile in scenari di attacco dove l'aggregazione di dati da diverse fonti, anche con ripetizioni, è desiderata.

3. **`JOIN`:** È utilizzato per combinare le righe di due o più tabelle basate su una colonna relazionata tra loro. Attraverso tecniche di iniezione che sfruttano i `JOIN`, gli attaccanti possono ottenere informazioni correlate da diverse tabelle, aumentando l'ampiezza dell'attacco.

Per informazioni più dettagliate sulla join visita: [https://www.w3schools.com/sql/sql_join.asp](https://www.w3schools.com/sql/sql_join.asp)

## Esercizio: Estrazione di Dati tramite SQL Injection

**Obiettivo:** Utilizzare le tecniche di SQL Injection per recuperare dati sensibili da una tabella non direttamente esposta attraverso l'input dell'utente in un'applicazione web simulata.

**Scenario:** Immagina di essere un tester per la sicurezza incaricato di valutare la vulnerabilità di un'applicazione web agli attacchi SQL Injection. Durante il tuo testing, hai identificato un campo di input che accetta il cognome degli utenti come input e lo utilizza per eseguire una query SQL alla tabella `user_data`. La struttura delle tabelle interessate è la seguente:

- Tabella `user_data`:
  ```
  CREATE TABLE user_data (
    userid int not null,
    first_name varchar(20),
    last_name varchar(20),
    cc_number varchar(30),
    cc_type varchar(10),
    cookie varchar(20),
    login_count int
  );
  ```

- Tabella `user_system_data`:
  ```
  CREATE TABLE user_system_data (
    userid int not null primary key,
    user_name varchar(12),
    password varchar(10),
    cookie varchar(30)
  );
  ```

**Compiti:**

1. **Estrazione di Tutti i Dati:** Sfrutta la vulnerabilità SQL Injection per estrarre tutti i dati dalla tabella `user_system_data`. Considera l'uso della clausola `UNION` o l'apposizione di un nuovo comando SQL.

2. **Recupero di una Password Specifica:** Una volta che sei in grado di estrarre dati dalla tabella `user_system_data`, identifica la password dell'utente Dave.

**Suggerimenti:**

- Assicurati che il numero di colonne selezionate con `UNION` corrisponda tra le tabelle.
- Ricorda che alcuni sistemi di gestione del database potrebbero non permettere l'esecuzione di più statement SQL separati da `;`.

**Nota Etica:** Questo esercizio è destinato esclusivamente a scopi educativi e di formazione sulla sicurezza. Non tentare di applicare queste tecniche su applicazioni o database senza esplicita autorizzazione.

Questo testo fornisce una panoramica chiara e un contesto per l'esercizio, incoraggiando l'apprendimento e la consapevolezza delle vulnerabilità di sicurezza senza promuovere azioni non etiche o illegali.

### Utilizzo di `UNION`

Per estrarre dati da un'altra tabella utilizzando `UNION`, l'attaccante deve prima assicurarsi che il numero di colonne selezionate nella query iniettata corrisponda al numero di colonne nella query originale. In questo scenario, l'obiettivo è ottenere informazioni dalla tabella `user_system_data`.

1. **Analizzare la Query Originale:** La query vulnerabile potrebbe assomigliare a qualcosa del tipo: `SELECT * FROM user_data WHERE last_name = '<input dell'utente>';`. L'input dell'utente è il punto di iniezione.

2. **Costruire la Query Iniettata:** Utilizzando `UNION`, l'attaccante può aggiungere una seconda query SELECT che estrae dati dalla tabella `user_system_data`. Per fare ciò, deve assicurarsi di selezionare lo stesso numero di colonne presenti nella tabella `user_data` e di usare valori fittizi o null per mantenere l'allineamento delle colonne, se necessario.

### Appendere un Nuovo Statement SQL

Un'altra tecnica consiste nell'appendere un nuovo comando SQL alla query originale, spesso utilizzando il carattere `;` per separare le due istruzioni. Tuttavia, questo approccio dipende dalla possibilità di eseguire più comandi SQL in una singola istruzione, che potrebbe essere limitata in base alla configurazione del database o dell'interfaccia applicativa.

### Considerazioni sulla Sicurezza

Questi esempi dimostrano la pericolosità delle vulnerabilità SQL Injection e sottolineano l'importanza di adottare misure di sicurezza adeguate, come:

- **Utilizzare Query Parametrizzate:** Previene l'iniezione SQL trattando i dati di input come parametri separati dal codice SQL.
- **Sanificare l'Input:** Rimuovere o neutralizzare caratteri speciali dall'input utente.
- **Limitare i Privilegi:** Assicurarsi che l'account del database usato dall'applicazione abbia solo i privilegi necessari per le sue funzioni.
- **Usare ORM (Object Relational Mapping):** Molti ORM moderni utilizzano query parametrizzate per prevenire le iniezioni SQL.
# Mitigation delle SQL Injection
Le tecniche descritte sono metodologie per prevenire o ridurre il rischio di attacchi di iniezione SQL, un tipo di vulnerabilità di sicurezza che permette a un aggressore di interferire con le query che un'applicazione invia al suo database. Esaminiamo queste tecniche più da vicino.

### Query Statiche

Le query statiche sono esempi di query immutabili. Sono definite in modo esplicito nel codice e non cambiano indipendentemente dai dati forniti dall'utente. Ecco due esempi di query statiche:

1. Query per selezionare tutti i prodotti:
   ```sql
   String query = "SELECT * FROM products";
   ```

2. Query per selezionare un utente specifico basandosi sull'ID di sessione (omesso inizialmente, ora incluso):
   ```sql
   String query = "SELECT * FROM users WHERE user = '" + session.getAttribute("UserID") + "'";
   ```

### Query con Parametri

Le query parametrizzate sono una tecnica di prevenzione dell'iniezione SQL che separa nettamente i dati delle istruzioni SQL dalla logica di esecuzione delle query. In questo modo, i dati forniti dall'utente vengono gestiti in modo sicuro e non possono modificare la struttura logica della query.

**Esempio di Query Parametrizzata:**
```java
String query = "SELECT * FROM utenti WHERE cognome = ?";
PreparedStatement statement = connection.prepareStatement(query);
statement.setString(1, nomeAccount);
ResultSet results = statement.executeQuery();
```
In questo caso, `?` funge da segnaposto per il valore del parametro che viene impostato in modo sicuro attraverso `statement.setString(1, nomeAccount);`. Questo metodo garantisce che il valore passato venga sempre trattato come un dato, mai come parte del codice SQL.

### Procedure Memorizzate

Le procedure memorizzate possono offrire un livello di protezione dall'iniezione SQL, a condizione che non generino SQL dinamico all'interno della procedura stessa. Sono blocchi di codice eseguibili che risiedono nel database e che possono essere invocati dalle applicazioni.

**Considerazione Importante:**
Le procedure memorizzate devono essere progettate con cura per non introdurre vulnerabilità attraverso l'uso di SQL dinamico, il quale potrebbe esporre a rischi simili a quelli delle query formulate direttamente nell'applicazione.

In sintesi, l'uso di query immutabili, parametrizzate e di procedure memorizzate sono tecniche fondamentali per proteggere le applicazioni web dall'iniezione SQL, assicurando che i dati forniti dall'utente siano gestiti in modo sicuro e che non sia possibile per gli aggressori alterare la logica delle query per accedere o manipolare dati sensibili in modo non autorizzato.

## Procedure memorizzate
La distinzione tra procedure memorizzate sicure e quelle vulnerabili a iniezioni SQL è fondamentale nella protezione dei database. Di seguito, analizzeremo due esempi specifici relativi a Microsoft SQL Server che illustrano questa differenza.

### Procedure Memorizzate Sicure

Una procedura memorizzata sicura è progettata in modo tale da evitare la possibilità di iniezione SQL, trattando i dati in ingresso esclusivamente come valori, senza permettere che questi possano influenzare la logica o la struttura della query SQL. Questo approccio impedisce agli attaccanti di inserire o modificare il codice SQL eseguito dal database. Un esempio di procedura memorizzata sicura in Microsoft SQL Server è:

```sql
CREATE PROCEDURE ListCustomers(@Country nvarchar(30))
AS
BEGIN
    SELECT city, COUNT(*)
    FROM customers
    WHERE country LIKE @Country
    GROUP BY city
END
```

Per eseguire questa procedura memorizzata, si utilizza il seguente comando, dove `'USA'` è il parametro che viene passato alla procedura:

```sql
EXEC ListCustomers 'USA'
```

In questo esempio, il parametro `@Country` viene utilizzato direttamente nella query in modo sicuro, senza consentire l'interpretazione di eventuali input dannosi come parte del codice SQL.

### Procedure Memorizzate Vulnerabili a Iniezioni

Al contrario, una procedura memorizzata che genera SQL dinamico e incorpora direttamente i parametri forniti dagli utenti senza una corretta sanificazione o senza utilizzare approcci come le query parametrizzate, può essere vulnerabile alle iniezioni SQL. Questo tipo di procedura può eseguire accidentalmente codice SQL malevolo inserito tramite i parametri. Un esempio di procedura memorizzata vulnerabile a iniezioni SQL in Microsoft SQL Server è:

```sql
CREATE PROCEDURE getUser(@lastName nvarchar(25))
AS
BEGIN
    DECLARE @sql nvarchar(255)
    SET @sql = 'SELECT * FROM users WHERE lastname = ''' + @lastName + ''''
    EXEC sp_executesql @sql
END
```

In questo esempio, il parametro `@lastName` viene concatenato direttamente alla stringa SQL. Se un attaccante fornisce un valore per `@lastName` che include codice SQL malevolo, potrebbe eseguire operazioni non autorizzate sul database, come l'eliminazione di tabelle o l'estrazione di dati sensibili.
## Validazione e Sicurezza del Nome Utente con Query Parametrizzate in Java

L'utilizzo delle query parametrizzate rappresenta una tecnica essenziale per migliorare la sicurezza delle applicazioni che interagiscono con i database, specialmente per prevenire gli attacchi di iniezione SQL. Questo metodo consente di separare il codice SQL dalla gestione dei dati forniti dall'utente, riducendo i rischi di sicurezza associati.

### Validazione del Nome Utente

Per assicurarsi che il nome utente sia valido e per prevenire l'iniezione SQL, si può impiegare il seguente frammento di codice Java:

```java
public static boolean isUsernameValid(String username) {
    Regex r = new Regex("^[A-Za-z0-9]{16}$");
    return r.isMatch(username);
}

// La connessione java.sql.Connection conn viene impostata altrove per brevità.
PreparedStatement ps = null;
ResultSet rs = null;
try {
    String pUsername = request.getParameter("UserName");
    if (isUsernameValid(pUsername)) {
        ps = conn.prepareStatement("SELECT * FROM user_table WHERE username = ?");
        ps.setString(1, pUsername);
        rs = ps.executeQuery();
        if (rs.next()) {
            // Esegue il lavoro per rendere attivo il record dell'utente in qualche modo
        }
    } else {
        // Gestisce l'input non valido
    }
} catch (Exception e) {
    // Gestisce tutte le eccezioni
}
```

### Uso Corretto delle Query Parametrizzate per l'Inserimento dei Dati

L'adozione di pratiche corrette nell'utilizzo delle query parametrizzate è fondamentale per prevenire vulnerabilità come l'iniezione SQL. È importante impostare i parametri con i metodi `ps.set...()` ed evitare la costruzione di stringhe SQL dinamiche basate sull'input dell'utente. Di seguito sono presentati esempi di uso non corretto e uso corretto per l'inserimento dei dati:

- **Uso non corretto**: (Questo approccio va evitato poiché può esporre a vulnerabilità di sicurezza)
    ```java
    String insertStatement = String.format("INSERT INTO USERS (id, name, email) VALUES (%s, %s, %s)", "1", "webgoat", "webgoat@owasp.org");
    PreparedStatement statement = conn.prepareStatement(insertStatement);
    statement.executeUpdate();
    ```

- **Uso corretto**: (Questo è l'approccio consigliato per mantenere l'integrità e la sicurezza dei dati)
    ```java
    PreparedStatement statement = conn.prepareStatement("INSERT INTO USERS (id, name, email) VALUES (?, ?, ?)");
    statement.setString(1, "1");
    statement.setString(2, "webgoat");
    statement.setString(3, "webgoat@owasp.org");
    statement.executeUpdate();
    ```

Seguendo le migliori pratiche per la validazione dell'input e l'uso appropriato dei PreparedStatement, gli sviluppatori possono efficacemente mitigare i rischi di iniezione SQL e migliorare la sicurezza delle loro applicazioni.
## Esempio di Query Parametrizzata in Java

Questo esempio illustra l'uso delle query parametrizzate in Java per migliorare la sicurezza e l'efficienza nella gestione dei dati di un database. Le query parametrizzate sono fondamentali per prevenire attacchi di iniezione SQL, garantendo che i dati forniti dagli utenti siano trattati in modo sicuro.

### Descrizione del Codice

Il seguente frammento di codice dimostra come caricare dati relativi a un account utilizzando una query parametrizzata:

```java
public static String loadAccount() {
  // Il parser ritorna solo dati stringa validi
  String accountID = getParser().getStringParameter(ACCT_ID, "");
  String data = null;
  String query = "SELECT first_name, last_name, acct_id, balance FROM user_data WHERE acct_id = ?";
  try (Connection connection = dataSource.getConnection();
       PreparedStatement statement = connection.prepareStatement(query)) {
     statement.setString(1, accountID);
     ResultSet results = statement.executeQuery();
     if (results != null && results.first()) {
       results.last(); // Dovrebbe essere restituito solo un record per questa query
       if (results.getRow() <= 2) {
         data = processAccount(results);
       } else {
         // Gestione dell'errore - Problema di integrità del database
       }
     } else {
       // Gestione dell'errore - nessun record trovato
     }
  } catch (SQLException sqle) {
    // Log e gestione dell'SQL Exception
  }
  return data;
}
```

### Spiegazione del Processo

1. **Validazione dell'Input:** Prima di tutto, il codice assicura che l'ID dell'account fornito sia un dato valido tramite un metodo di parsing. Questo passaggio è cruciale per evitare iniezioni SQL.

2. **Preparazione della Query:** La query SQL è definita con un placeholder (`?`) per l'ID dell'account. Questo metodo impedisce l'esecuzione di codice SQL malevolo.

3. **Impostazione dei Parametri:** Il valore dell'ID dell'account è impostato come parametro della query tramite `statement.setString(1, accountID)`. Questo approccio mantiene separati il codice SQL e i dati forniti dall'utente.

4. **Esecuzione della Query e Gestione dei Risultati:** La query viene eseguita e, se trovato, il record dell'account viene processato. Il codice gestisce anche le situazioni in cui non vengono trovati record o si verifica un problema di integrità del database.

5. **Gestione delle Eccezioni:** Infine, le eccezioni SQL sono catturate e gestite adeguatamente, permettendo al programma di reagire in modo appropriato agli errori di connessione o esecuzione della query.

L'uso delle query parametrizzate, come mostrato in questo esempio, è essenziale per costruire applicazioni sicure che interagiscono con database, riducendo il rischio di vulnerabilità legate all'iniezione SQL e garantendo l'integrità dei dati.

## Esercizio 1
Per completare il codice in modo sicuro ed efficiente, prevenendo vulnerabilità come le iniezioni SQL, utilizzeremo l'approccio delle query parametrizzate. Questo metodo consente di inserire i valori delle variabili in modo sicuro, senza il rischio che input dannosi possano essere interpretati come parte del codice SQL. Di seguito, il codice completato con l'utilizzo di `PreparedStatement`, una classe che facilita l'uso di query parametrizzate in Java.

```java
// Assumiamo che DBURL, DBUSER, e DBPW siano definiti altrove nel codice.
Connection conn = DriverManager.getConnection(DBURL, DBUSER, DBPW);

// Preparazione della query SQL con parametri.
String sql = "SELECT status FROM users WHERE name=? AND mail=?";
PreparedStatement statement = conn.prepareStatement(sql);

// Assumiamo che 'userName' e 'userMail' siano le variabili che contengono
// i valori per il nome e l'indirizzo mail dell'utente.
// Si deve prestare attenzione a sanificare questi input se provengono dall'esterno.
statement.setString(1, userName);
statement.setString(2, userMail);

// Esecuzione della query.
ResultSet resultSet = statement.executeQuery();

// Processamento dei risultati.
if (resultSet.next()) {
    String status = resultSet.getString("status");
    // Qui si può gestire lo stato dell'utente come necessario.
} else {
    // Gestione del caso in cui non vengono trovati record corrispondenti.
}

// Si ricorda di chiudere le risorse una volta che non sono più necessarie
// per evitare leak di memoria. Questo può essere fatto automaticamente
// usando il try-with-resources o manualmente nel blocco finally.
```

### Spiegazioni Importanti:

- **Creazione della Connessione:** Utilizziamo `DriverManager.getConnection` con i parametri appropriati (`DBURL`, `DBUSER`, `DBPW`) per stabilire una connessione al database.

- **Preparazione della Query:** Definiamo una stringa SQL con dei placeholder (`?`) per i parametri che vogliamo inserire in modo sicuro. Successivamente, creiamo un `PreparedStatement` a partire da questa stringa.

- **Impostazione dei Parametri:** Con `statement.setString(index, value)`, impostiamo i valori di `userName` e `userMail` nei posti corretti all'interno della query. Questo passaggio previene le iniezioni SQL poiché i valori sono trattati esclusivamente come dati, senza essere interpretati come parte del comando SQL.

- **Esecuzione e Gestione dei Risultati:** Eseguiamo la query con `statement.executeQuery()` e processiamo i risultati ottenuti. È importante gestire anche il caso in cui non si ottengano risultati.

- **Gestione delle Risorse:** È buona pratica assicurarsi che tutte le risorse utilizzate (come oggetti `Connection`, `PreparedStatement` e `ResultSet`) siano chiuse dopo il loro uso per evitare perdite di risorse. Nel codice sopra, questo aspetto va gestito adeguatamente nel contesto dell'applicazione.

Questo approccio garantisce che l'applicazione sia protetta da attacchi di iniezione SQL, mantenendo al contempo una struttura di codice chiara e manutenibile.
## Query Parametrizzate in .NET

Nell'esempio fornito, viene dimostrato come utilizzare le query parametrizzate in un contesto .NET per accedere ai dati in modo sicuro, prevenendo attacchi di iniezione SQL. Questo approccio è essenziale per proteggere le applicazioni .NET che interagiscono con database SQL. 

### Descrizione del Codice

Il codice verifica prima la validità del nome utente utilizzando una espressione regolare. Successivamente, prepara e esegue una query SQL parametrizzata per selezionare i dati dall'utente specificato. Qui di seguito è riportato il codice corretto e leggermente modificato per migliorarne la leggibilità e la correttezza sintattica:

```csharp
public static bool IsUsernameValid(string username) {
    Regex r = new Regex("^[A-Za-z0-9]{1,16}$"); // Modifica per consentire nomi utente fino a 16 caratteri
    return r.IsMatch(username); // Corretto in IsMatch
}

// SqlConnection conn è impostata e aperta altrove per brevità.
try {
    string selectString = "SELECT * FROM user_table WHERE username = @userID";
    SqlCommand cmd = new SqlCommand(selectString, conn);
    string uid = "someUsername"; // Assumiamo che uid sia il nome utente da verificare
    if (IsUsernameValid(uid)) {
        cmd.Parameters.Add("@userID", SqlDbType.VarChar, 16).Value = uid;
        using (SqlDataReader myReader = cmd.ExecuteReader()) {
            if (myReader.HasRows) {
                // Rendi il record dell'utente attivo in qualche modo.
            }
            myReader.Close();
        }
    } else {
        // Gestisci input non valido
    }
}
catch (Exception e) {
    // Gestisci tutte le eccezioni...
}
```

### Punti Chiave

- **Validazione dell'input**: Prima di eseguire la query, il nome utente viene validato utilizzando un'espressione regolare. Questo aiuta a prevenire attacchi di iniezione basati su input non validi.

- **Uso di query parametrizzate**: La query SQL utilizza un parametro (`@userID`) al posto di concatenare direttamente il nome utente nella stringa di query. Questo parametro viene poi valorizzato con il nome utente validato, prevenendo così efficacemente l'iniezione SQL.

- **Gestione delle risorse**: L'uso della parola chiave `using` assicura che l'oggetto `SqlDataReader` venga chiuso e rilasciato correttamente, anche in caso di eccezioni.

- **Gestione delle eccezioni**: Tutte le potenziali eccezioni generate durante l'esecuzione della query o la connessione al database sono catturate e possono essere gestite in modo appropriato.

Questo esempio illustra come scrivere codice sicuro e robusto per operazioni di database in un'applicazione .NET, utilizzando pratiche consigliate come la validazione dell'input e le query parametrizzate.

## Necessità della Validazione degli Input

Anche se le tue query sono protette contro le iniezioni SQL grazie all'uso di query parametrizzate, la validazione degli input rimane una pratica essenziale nella sicurezza informatica. La validazione degli input serve non solo a prevenire iniezioni SQL, ma anche a proteggere l'applicazione da una varietà di altre vulnerabilità e attacchi. Di seguito, alcuni motivi per cui è importante continuare a validare gli input:

### Prevenzione di Altri Tipi di Attacchi

- **Stored XSS (Cross-Site Scripting):** Senza una valida sanificazione e validazione degli input, un attaccante potrebbe inserire script dannosi nel database, che poi vengono eseguiti nel browser dell'utente quando i dati vengono visualizzati. La validazione degli input aiuta a prevenire l'inserimento di questi script.

- **Fuga di Informazioni:** Input non validati potrebbero essere usati per esfiltrare dati sensibili dall'applicazione o dal sistema sottostante. Ad esempio, un input malevolo potrebbe essere progettato per rivelare informazioni sulla struttura del database o sui dati degli utenti.

### Mantenimento dell'Integrità Logica e dei Dati

- **Errori Logici e Validazione delle Regole di Business:** La validazione degli input è fondamentale per assicurarsi che i dati inseriti nell'applicazione rispettino le regole di business e la logica applicativa. Ad esempio, un campo che dovrebbe accettare solo valori numerici potrebbe causare errori logici o di calcolo se vengono inseriti testi o caratteri speciali.

- **Iniezione SQL:** Sebbene le query parametrizzate siano una difesa efficace contro l'iniezione SQL, la validazione degli input fornisce un ulteriore livello di sicurezza. Inoltre, in alcune situazioni particolari o con configurazioni specifiche del database, potrebbero esistere ancora vettori per iniezioni SQL che la validazione degli input può contribuire a mitigare.

### Considerazione del Database Come Entità Fiduciaria

Spesso il database viene considerato una parte fiduciaria del sistema. Ciò significa che i dati al suo interno si presume siano accurati, validi e sicuri. La validazione degli input contribuisce a mantenere questa fiducia, assicurando che solo dati validi e previsti siano inseriti nel database. Questo approccio protegge non solo l'applicazione ma anche l'integrità dei dati e la fiducia degli utenti.

## Validazione degli Input: Un Primo Passo Necessario ma Non Sufficiente

La validazione degli input è un passo critico per garantire che solo dati corretti e attesi siano accettati dall'applicazione. Questo può includere la verifica che un numero telefonico contenga solo cifre, che un indirizzo email segua il formato standard, o che una stringa di testo non contenga caratteri speciali potenzialmente pericolosi. Tuttavia, anche la più robusta validazione degli input può essere aggirata o può fallire in scenari non previsti. 

Ad esempio, un filtro che permette solo lettere e numeri per evitare iniezioni SQL potrebbe essere considerato sicuro. Tuttavia, se la logica di validazione non tiene conto di tutti i contesti possibili o di tecniche di attacco innovative, potrebbero esserci delle lacune. Un attaccante potrebbe scoprire un modo per sfruttare un input apparentemente innocuo che passa la validazione ma che, a causa di particolari condizioni o vulnerabilità del sistema sottostante, porta a un'iniezione SQL o ad altri attacchi.

### L'Importanza delle Query Parametrizzate

Le query parametrizzate risolvono il problema alla radice trattando i dati di input separatamente dal codice SQL. Con le query parametrizzate, l'input dell'utente viene sempre trattato come dati, mai come parte del codice SQL, indipendentemente dalla sua forma. Questo elimina la possibilità che l'input venga interpretato in modo errato come istruzione SQL dal database, prevenendo così le iniezioni SQL.

### Debolezze dell'Approccio di Solo Filtraggio

Affidarsi esclusivamente alla validazione o al filtraggio degli input per prevenire le iniezioni SQL presenta diverse debolezze:

- **Complessità del Filtraggio:** Determinare un set completo di regole di validazione che copra tutti i possibili vettori di attacco può essere estremamente complesso e soggetto a errori.
  
- **Variabilità degli Ambienti di Esecuzione:** Differenze nell'interpretazione dei comandi SQL tra diversi sistemi di gestione del database possono rendere alcuni filtri inefficaci in specifici contesti.
  
- **Evoluzione delle Tecniche di Attacco:** Gli attaccanti sviluppano continuamente nuove tecniche per aggirare i filtri esistenti. Senza un aggiornamento costante, i filtri possono diventare obsoleti.

Nell'esercizio mostrato, è presente un filtro che non permette all'utente di inserire degli spazi. Tuttavia questo filtro è facilmente bypassabile utilizzando dei commenti al posto degli spazi:
```
a'/**/union/**/select/**/user_system_data.*,'1','1',1/**/from/**/user_system_data;--
```
Nell'esercizio successivo, si nota che il form rimuove le parole chiave select e from. Tuttavia, si può ingannare l'algoritmo scrivendo la parola select dentro select, in modo tale che una volta che quello interno viene eliminato dal filtro, rimane quello esterno:
```
/**/ <-- HSQLDB comment instead of white space  
selselectect <-- instead of 'select'  
frfromom <-- instead of 'from'
```
## Protezione dalle Iniezioni SQL e Uso delle Query Parametrizzate nella Clausola ORDER BY

Le iniezioni SQL rappresentano una minaccia significativa per la sicurezza delle applicazioni web, permettendo agli aggressori di manipolare le query SQL per accedere o alterare i dati in modi non autorizzati. Una domanda comune riguarda l'efficacia delle query parametrizzate nel prevenire queste iniezioni, specialmente in contesti come l'uso dinamico della clausola `ORDER BY`.

### Il Problema con la Clausola ORDER BY

Consideriamo il seguente esempio di codice SQL, dove il nome della colonna di ordinamento (`sortColumnName`) viene inserito direttamente nella query:

```sql
"SELECT * FROM users ORDER BY " + sortColumnName + ";"
```

A prima vista, potrebbe sembrare che l'uso di query parametrizzate possa prevenire efficacemente le iniezioni SQL in casi come questo. Tuttavia, la specifica grammaticale SQL mostra che una `orderExpression` nella clausola `ORDER BY` può essere molto più di un semplice nome di colonna; può essere un'espressione complessa, inclusa una funzione. Ciò significa che, attraverso un'espressione ingegnosa, un attaccante potrebbe inserire logica condizionale o altre funzioni SQL che potrebbero essere sfruttate per scopi malevoli.

### Esempio di Iniezione nella Clausola ORDER BY

```sql
SELECT * FROM users ORDER BY (CASE WHEN (TRUE) THEN lastname ELSE firstname END);
```

In questo esempio, l'iniezione tramite la clausola `ORDER BY` sfrutta la capacità di SQL di eseguire espressioni condizionali. Anche se il nome della colonna viene parametrizzato, un attaccante potrebbe tentare di inserire espressioni o funzioni complesse che non sono intese per l'uso previsto della query.

### Misure di Mitigazione

Per mitigare i rischi associati alle iniezioni tramite la clausola `ORDER BY`, si consiglia di adottare un approccio basato su una lista di controllo (whitelist) per i nomi delle colonne consentite per l'ordinamento. Ecco alcune linee guida:

- **Implementare una Lista di Controllo:** Prima di costruire la query SQL, verificare che il nome della colonna fornito per l'ordinamento corrisponda a uno dei valori consentiti definiti in una lista di controllo. Questo limita l'ordinamento alle colonne predefinite come 'firstname' o 'lastname', riducendo il rischio di manipolazioni non autorizzate della query.

- **Evitare l'Inserimento Diretto:** Non inserire mai direttamente input dell'utente nella query SQL senza una validazione adeguata. Anche quando si utilizzano query parametrizzate, è essenziale assicurarsi che ogni parte dinamica della query sia rigorosamente controllata.

- **Validazione e Sanificazione dell'Input:** Oltre all'uso di una lista di controllo, è utile implementare una robusta logica di validazione e sanificazione per qualsiasi input che influenzi la logica SQL, compresi i nomi delle colonne e i valori di ordinamento.
## Principio del Minimo Privilegio nelle Connessioni al Database

Il principio del minimo privilegio è una pratica di sicurezza essenziale nella gestione degli accessi alle risorse informatiche, inclusi i database. Questo principio implica che un account, un programma o un processo operativo dovrebbe avere esclusivamente le autorizzazioni necessarie per svolgere i suoi compiti, niente di più. Nel contesto di un'applicazione che si connette a un database, l'implementazione di questo principio può significativamente ridurre il rischio di danni accidentali o malevoli, limitando le potenziali azioni che possono essere eseguite.

### Connessione con Set Minimo di Privilegi

#### Distinzione di Fiducia e Credenziali Differenziate

- **Credenziali Differenziate:** L'applicazione dovrebbe stabilire connessioni al database utilizzando credenziali diverse a seconda del livello di fiducia e delle esigenze specifiche di accesso. Questo approccio implica la creazione di account di database separati per differenti contesti operativi, ad esempio, per lettura, scrittura o esecuzione di procedure memorizzate.

#### Limitazione dei Diritti di Eliminazione

- **Diritti Limitati:** È raro che un'applicazione necessiti di diritti di eliminazione su una tabella o su un database intero. Limitare i permessi ai soli necessari riduce il rischio di perdita di dati accidentale o di attacchi che mirano a danneggiare o compromettere l'integrità del database.

### Gestione degli Accessi allo Schema

- **Accesso Limitato allo Schema:** Gli account di database dovrebbero avere accesso limitato agli schemi di cui necessitano. Questo limita l'esposizione e il rischio in caso di compromissione delle credenziali.

### Account di Database per Accesso in Lettura e Scrittura

- **Definizione di Account Specifici:** Creare account di database dedicati per l'accesso in lettura e per l'accesso in lettura/scrittura. Questa distinzione garantisce che le operazioni di modifica dei dati siano consentite solo attraverso le credenziali appropriate.

### Pool di Connessione Basati sull'Accesso

- **Pool di Connessione Differenziati:** Utilizzare pool di connessione multipli basati sul tipo di accesso richiesto. Questo consente all'applicazione di stabilire connessioni con il livello di privilegio adeguato in base all'operazione da eseguire, ad esempio:

  - **Accesso in Sola Lettura:** per le query di autenticazione o per la lettura di dati, dove non sono necessarie modifiche al database.
  
  - **Accesso in Lettura/Scrittura:** per le query che necessitano di modificare i dati, come gli aggiornamenti o le inserzioni.
  
  - **Accesso per l'Esecuzione di Procedure Memorizzate:** quando si richiama una procedura memorizzata, utilizzare credenziali che limitano l'account al solo diritto di esecuzione per quella specifica procedura.