---
titolo: PHP e SQLite in una webapp semplice
materia: Informatica
progetto: pizzeria-php-sqlite
tags:
  - php
  - sqlite
  - sql
  - webapp
  - database
---

# PHP e SQLite in una webapp semplice

## 0. Prima di iniziare

Questa dispensa accompagna una piccola webapp per una pizzeria.

Partiamo da competenze già viste:

- HTML per strutturare una pagina;
- CSS per darle aspetto;
- form HTML per raccogliere dati;
- JavaScript per rendere una pagina dinamica nel browser e modificare il DOM.

Qui aggiungiamo un passaggio nuovo: la pagina non viene costruita solo nel browser.
Una parte del lavoro avviene sul server, con PHP, e i dati vengono salvati in un database SQLite.

Nel nostro caso il "server" può essere anche il computer o Codespace su cui avviamo PHP.
Non è per forza un server pubblico su Internet.

Il flusso generale è:

```text
Browser -> PHP -> SQLite -> PHP -> Browser
```

Lo schema mostra il percorso di una richiesta: il browser non parla direttamente con il database, passa da PHP.

In pratica:

1. il browser chiede una pagina;
2. PHP esegue codice sul server;
3. PHP legge o modifica SQLite;
4. PHP produce HTML;
5. il browser riceve e mostra l'HTML finale.

La differenza rispetto a JavaScript è importante: JS modifica la pagina già arrivata nel browser; PHP prepara la pagina prima di inviarla.
Se il browser aggiorna la pagina, PHP può rileggerla da capo e produrre HTML diverso in base ai dati salvati.

---

## 1. Che cosa costruisce il progetto

La webapp permette di:

- vedere il menu delle pizze;
- cercare una pizza o un ingrediente;
- inserire un ordine;
- vedere gli ordini;
- creare, modificare ed eliminare pizze dall'area amministratore.

Lo scopo è vedere il collegamento essenziale tra pagina, PHP, SQL e database.

Tre parole da distinguere:

| Termine | Nel progetto |
|---|---|
| database | il file `database/pizzeria.db`, dove restano salvati i dati |
| SQLite | il programma/libreria che gestisce quel file |
| SQL | il linguaggio delle query: `SELECT`, `INSERT`, `UPDATE`, `DELETE` |

---

## 2. Struttura del progetto

```text
pizzeria-php-sqlite/
├── app/
│   ├── database.php
│   └── functions.php
├── database/
│   ├── init-database.php
│   └── pizzeria.db
├── docs/
├── public/
│   ├── form-handler.php
│   ├── index.php
│   └── style.css
├── README.md
└── ISTRUZIONI-STUDENTI.md
```

Questo schema mostra dove sono divisi i file del progetto.

| Percorso | Ruolo |
|---|---|
| `public/index.php` | legge i dati e mostra la pagina |
| `public/form-handler.php` | riceve i form `POST`, modifica il database e fa redirect |
| `public/style.css` | stile grafico |
| `app/database.php` | apre il collegamento a SQLite |
| `app/functions.php` | contiene funzioni PHP e query SQL |
| `database/init-database.php` | crea tabelle e dati iniziali |
| `database/pizzeria.db` | file del database |

La cartella pubblica è `public/`: quando il server PHP è avviato, il browser deve passare da lì e non aprire direttamente `app/` o `database/`.

---

## 3. Avviare il progetto

Dal terminale:

```bash
php database/init-database.php
php -S 0.0.0.0:8000 -t public
```

Il primo comando si lancia una volta per preparare i dati; il secondo resta attivo mentre lavoriamo con la webapp.
Il server PHP usa `public/` come cartella visibile.

In Codespaces si apre l'anteprima della porta `8000`.

Finché il secondo comando resta in esecuzione, il browser può chiedere pagine PHP.
Per fermarlo si usa `Ctrl+C` nel terminale.

---

## 4. Pagina statica e pagina dinamica

Una pagina statica contiene già tutto l'HTML:

```html
<article>
    <h2>Margherita</h2>
    <p>Pomodoro, mozzarella, basilico</p>
    <p>6.50 euro</p>
</article>
```

Questo codice mostra una sola pizza scritta a mano nella pagina.

Qui invece le pizze stanno nel database. PHP le legge e genera una card per ciascuna:

```php
<?php foreach ($pizzas as $pizza): ?>
    <article>
        <h2><?= h($pizza['nome']) ?></h2>
        <p><?= h($pizza['ingredienti']) ?></p>
        <p><?= (float) $pizza['prezzo'] ?> euro</p>
    </article>
<?php endforeach; ?>
```

Questo codice ripete lo stesso blocco HTML per tutte le pizze presenti nell'array `$pizzas`.

PHP non sostituisce HTML: lo produce.
La struttura HTML è la stessa; cambiano solo i valori, che arrivano dal database.
La funzione `h()` è definita in `app/functions.php`: serve per stampare testo in HTML senza rischiare che venga interpretato come codice.
Questo è un esempio di anteprima: `foreach`, array e funzioni vengono spiegati nelle sezioni successive.

---

## 5. Sintassi PHP minima

Dentro un file `.php` possiamo alternare codice PHP e HTML.

```php
<?php
$nome = 'Mario';
?>

<h1>Ciao <?= $nome ?></h1>
```

Il codice assegna il testo `Mario` alla variabile `$nome` e poi lo stampa dentro il titolo.

Da ricordare:

| Sintassi | Uso |
|---|---|
| `<?php ... ?>` | esegue codice PHP |
| `<?= ... ?>` | stampa un valore nell'HTML |
| `$nome` | variabile PHP |
| `.` | concatena stringhe |
| `??` | usa un valore di riserva se il primo manca |
| `->` | chiama un metodo su un oggetto |
| `(int)` | converte un valore in numero intero |
| `(float)` | converte un valore in numero con decimali |

Non serve imparare tutta la sintassi PHP prima di leggere il progetto.
L'obiettivo è riconoscere questi segni quando compaiono nei file.

Esempio:

```php
$nome = $nome ?? 'Cliente';
```

Se `$nome` contiene già un valore, PHP usa quello; altrimenti usa `Cliente`.

---

## 6. Funzioni PHP

Una funzione è un blocco di codice con un nome.
Serve per riusare un'operazione senza riscriverla ogni volta.

Esempio semplice:

```php
function saluta(string $nome): string
{
    return 'Ciao ' . $nome;
}
```

Questa funzione:

- si chiama `saluta`;
- riceve un parametro `$nome`;
- restituisce una stringa.

Per usare una funzione, la chiamiamo con il suo nome:

```php
$messaggio = saluta('Mario');
```

Dopo questa riga, `$messaggio` contiene:

```text
Ciao Mario
```

Nel progetto vedremo funzioni come:

```php
h($pizza['nome'])
money((float) $pizza['prezzo'])
redirectTo('cliente')
createOrder($pdo, $customerName, $pizzaId, $quantity)
```

In PHP possiamo anche scrivere il tipo dei parametri e del valore restituito:

| Sintassi | Significato |
|---|---|
| `string $nome` | il parametro `$nome` deve essere testo |
| `int $quantity` | il parametro `$quantity` deve essere un numero intero |
| `float $price` | il parametro `$price` deve essere un numero con decimali |
| `: string` | la funzione restituisce testo |
| `: array` | la funzione restituisce un array, cioè una lista/struttura di dati |
| `: void` | la funzione non restituisce un valore |

`return` indica il valore restituito dalla funzione.
Se una funzione ha `: void`, di solito modifica qualcosa o fa un redirect, ma non restituisce un valore da usare.

---

## 7. Il punto di ingresso: `public/index.php`

`public/index.php` costruisce la pagina visibile nel browser.

Fa tre cose:

1. carica i file necessari;
2. legge i dati necessari dal database;
3. stampa l'HTML.

All'inizio:

```php
require __DIR__ . '/../app/database.php';
require __DIR__ . '/../app/functions.php';

$pdo = getDatabase();
```

Questo blocco prepara `index.php`: carica le funzioni e apre il collegamento al database.

I form che modificano dati non vengono gestiti qui.
Vengono inviati a `public/form-handler.php`.

`require` importa codice da altri file.
`getDatabase()` restituisce il collegamento a SQLite.

`__DIR__` indica la cartella del file corrente: serve per costruire percorsi affidabili anche se il progetto viene spostato.

`$pdo` è la variabile che useremo per parlare con il database.
Quando una funzione riceve `PDO $pdo`, significa: "questa funzione ha bisogno del collegamento al database".
PDO viene spiegato meglio nella sezione "Aprire SQLite con PDO".

---

## 8. Form HTML

Un form raccoglie dati dalla pagina e li invia a PHP.

I nomi dei campi non sono predefiniti da PHP: li scegliamo noi con l'attributo `name`.
Poi il nostro codice PHP decide come usarli.

Esempio di form per cercare una pizza:

```html
<form class="search-form" method="get">
    <input type="hidden" name="tab" value="cliente">
    <input type="search" name="q" placeholder="Cerca pizza o ingrediente">
    <button type="submit">Cerca</button>
</form>
```

Questo form contiene:

- un campo nascosto `tab`, che invia anche il valore `cliente`;
- un campo di ricerca `q`;
- un pulsante che invia il form.

`type="hidden"` indica un campo non visibile nella pagina, ma comunque inviato con il form.

`tab` è un nome scelto da noi.
Dopo la ricerca, il nostro codice PHP legge `tab=cliente` e mostra ancora la sezione cliente.

La parte più importante per PHP è l'attributo `name`.
Per esempio:

```html
<input type="search" name="q">
```

PHP userà il nome `q` per leggere il valore scritto dall'utente.

Esempio di form per creare un ordine:

```html
<form method="post" action="/form-handler.php">
    <input type="hidden" name="operation" value="create_order">
    <input type="text" name="nome_cliente" required>
    <select name="pizza_id" required>...</select>
    <input type="number" name="quantita" min="1" value="1" required>
    <button type="submit">Invia ordine</button>
</form>
```

Questo form invia i dati a `/form-handler.php`.
I dati inviati sono: operazione richiesta, nome cliente, pizza scelta e quantità.

`required` chiede al browser di non inviare il form se quel campo è vuoto.
`select` crea un menu a tendina.

Anche `operation` è un nome scelto da noi.
Nel nostro codice PHP lo usiamo per distinguere le operazioni.
Senza un campo di questo tipo, più form arriverebbero alla stessa pagina ma PHP non saprebbe distinguere un ordine da una modifica o da una eliminazione.

---

## 9. GET e POST

Un form può inviare i dati in due modi: `GET` oppure `POST`.

Con `GET`, i dati finiscono in chiaro nell'URL.

Esempio:

```text
/index.php?tab=cliente&q=margherita
```

Qui il browser sta inviando due valori:

| Nome | Valore |
|---|---|
| `tab` | `cliente` |
| `q` | `margherita` |

PHP li legge nell'array `$_GET`:

```php
$search = trim($_GET['q'] ?? '');
```

`$_GET` e `$_POST` sono array speciali creati da PHP.
Contengono i dati arrivati dalla richiesta del browser.

Con `POST`, invece, i dati non vengono messi nell'URL.
Il browser li manda nel corpo della richiesta HTTP.

Esempio: quando inviamo il form ordine, l'URL resta simile a:

```text
/form-handler.php
```

ma nel corpo della richiesta viaggiano valori come:

```text
operation=create_order
nome_cliente=Mario
pizza_id=1
quantita=2
```

PHP li legge nell'array `$_POST`.

In sintesi:

| Metodo | Dove si vedono i dati | Uso nel progetto |
|---|---|---|
| `GET` | nell'URL | ricerca e navigazione |
| `POST` | nel corpo della richiesta | dati da salvare, modificare o eliminare |

L'attributo HTML `action` del tag `<form>` serve a indicare a quale indirizzo inviare il form.

Esempio:

```html
<form method="post" action="/form-handler.php">
```

Nel nostro progetto i form `POST` usano proprio questo indirizzo.
Quindi il browser invia i dati a `/form-handler.php`, che corrisponde al file `public/form-handler.php`.

---

## 10. Gestire un form POST in `form-handler.php`

Il codice che gestisce i form si trova in `public/form-handler.php`.
Questo file non costruisce la pagina HTML: riceve i dati, aggiorna il database e poi rimanda il browser a `index.php`.

Il percorso è:

```text
form in index.php
  -> invio con POST
  -> richiesta a /form-handler.php
  -> file public/form-handler.php
  -> lettura di $_POST
  -> modifica del database
  -> redirect a /index.php
```

Quando arriva una richiesta `POST`, `form-handler.php` controlla l'operazione:

```php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirectTo('cliente');
}

$operation = $_POST['operation'] ?? '';

if ($operation === 'create_order') {
    $customerName = trim($_POST['nome_cliente'] ?? '');
    $pizzaId = (int) ($_POST['pizza_id'] ?? 0);
    $quantity = (int) ($_POST['quantita'] ?? 0);

    if ($customerName === '' || $pizzaId <= 0 || $quantity <= 0) {
        redirectTo('cliente', 'Controlla i dati dell ordine.', 'error');
    }

    createOrder($pdo, $customerName, $pizzaId, $quantity);
    redirectTo('cliente', 'Ordine inserito.');
}
```

`$_SERVER['REQUEST_METHOD']` indica con quale metodo è arrivata la richiesta.
Qui lo usiamo per accettare solo richieste `POST`: se qualcuno apre `/form-handler.php` direttamente dal browser, viene rimandato alla pagina cliente.

`redirectTo()` è una funzione definita in `app/functions.php`.
Serve a rimandare il browser a `index.php`.

Esempi:

| Chiamata | Dove manda il browser |
|---|---|
| `redirectTo('cliente')` | `/index.php?tab=cliente` |
| `redirectTo('admin')` | `/index.php?tab=admin` |
| `redirectTo('cliente', 'Ordine inserito.')` | `/index.php?tab=cliente&message=Ordine...` |

Questo blocco gestisce solo il caso `create_order`: legge il form, controlla i dati e salva l'ordine.

Passaggi essenziali:

- leggere i valori da `$_POST`;
- pulire o convertire i dati (`trim`, `(int)`, `(float)`);
- controllare che siano validi;
- chiamare una funzione che lavora sul database;
- fare redirect per tornare alla pagina aggiornata.

I dati dei form arrivano come testo.
Per questo `pizza_id` e `quantita` vengono convertiti in numeri con `(int)`.
`trim()` elimina spazi all'inizio e alla fine di un testo.
`(float)` fa una conversione simile, ma verso un numero con decimali.

---

## 11. Aprire SQLite con PDO

PHP parla con SQLite usando PDO.
PDO è l'interfaccia di PHP per lavorare con database diversi usando metodi simili.
Qui la usiamo solo con SQLite.

In `app/database.php`:

```php
function getDatabase(): PDO
{
    $databasePath = __DIR__ . '/../database/pizzeria.db';

    $pdo = new PDO('sqlite:' . $databasePath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $pdo->exec('PRAGMA foreign_keys = ON');

    return $pdo;
}
```

Questa funzione crea e restituisce l'oggetto `$pdo`, cioè il collegamento al database.

Da sapere:

| Riga | Idea |
|---|---|
| `new PDO('sqlite:' . $databasePath)` | apre il file SQLite |
| `ERRMODE_EXCEPTION` | trasforma errori SQL in eccezioni PHP |
| `FETCH_ASSOC` | restituisce righe come array associativi |
| `PRAGMA foreign_keys = ON` | attiva i vincoli tra tabelle |

---

## 12. Tabelle del database

Il database contiene due tabelle.

```sql
CREATE TABLE pizze (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    ingredienti TEXT NOT NULL,
    prezzo REAL NOT NULL
);
```

Questa query crea la tabella che contiene il menu delle pizze.

Da leggere così:

| Sintassi SQL | Significato |
|---|---|
| `INTEGER` | numero intero |
| `TEXT` | testo |
| `REAL` | numero con decimali |
| `PRIMARY KEY` | identificatore principale della riga |
| `AUTOINCREMENT` | SQLite assegna automaticamente il prossimo numero |
| `NOT NULL` | il campo non può restare vuoto |

```sql
CREATE TABLE ordini (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_cliente TEXT NOT NULL,
    pizza_id INTEGER NOT NULL,
    quantita INTEGER NOT NULL,
    data_ordine TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pizza_id) REFERENCES pizze(id)
);
```

Questa query crea la tabella degli ordini e collega ogni ordine a una pizza.

`CURRENT_TIMESTAMP` inserisce automaticamente data e ora.
`FOREIGN KEY` crea un collegamento tra due tabelle.

Relazione principale:

```text
ordini.pizza_id -> pizze.id
```

Questa relazione dice che il valore `pizza_id` di un ordine deve corrispondere all'`id` di una pizza.

Ogni ordine punta a una pizza esistente.
Per questo nella tabella `ordini` non salviamo di nuovo il nome della pizza: salviamo solo il suo `id`.

---

## 13. Query principali

### Leggere le pizze

```php
function readAllPizzas(PDO $pdo): array
{
    $statement = $pdo->query('
        SELECT id, nome, ingredienti, prezzo
        FROM pizze
        ORDER BY nome ASC
    ');

    return $statement->fetchAll();
}
```

Questa funzione legge tutte le pizze dal database e le restituisce ordinate per nome.

`query` va bene quando non inseriamo nella SQL dati scritti dall'utente.
`fetchAll()` trasforma il risultato della query in un array di righe PHP.
`ORDER BY nome ASC` ordina i risultati per nome dalla A alla Z.

### Cercare una pizza

```php
function readPizzas(PDO $pdo, string $search = ''): array
{
    if ($search === '') {
        $statement = $pdo->query('
            SELECT id, nome, ingredienti, prezzo
            FROM pizze
            ORDER BY nome ASC
        ');

        return $statement->fetchAll();
    }

    $statement = $pdo->prepare('
        SELECT id, nome, ingredienti, prezzo
        FROM pizze
        WHERE nome LIKE ? OR ingredienti LIKE ?
        ORDER BY nome ASC
    ');

    $like = '%' . $search . '%';
    $statement->execute([$like, $like]);

    return $statement->fetchAll();
}
```

Questa funzione restituisce tutte le pizze se la ricerca è vuota; altrimenti filtra per nome o ingredienti.

Qui usiamo `prepare` ed `execute` perché `$search` arriva dall'utente.
Il simbolo `%` nella ricerca SQL significa "qualsiasi testo prima o dopo": cercare `mozzarella` trova anche `Pomodoro, mozzarella, basilico`.
`OR` significa "oppure": la pizza viene trovata se il testo compare nel nome oppure negli ingredienti.

### Inserire un ordine

```php
function createOrder(PDO $pdo, string $customerName, int $pizzaId, int $quantity): void
{
    $statement = $pdo->prepare('
        INSERT INTO ordini (nome_cliente, pizza_id, quantita)
        VALUES (?, ?, ?)
    ');
    $statement->execute([$customerName, $pizzaId, $quantity]);
}
```

Questa funzione inserisce una nuova riga nella tabella `ordini`.

I `?` sono segnaposto: PDO ci mette dentro i valori in modo sicuro.
L'ordine dei valori in `execute([...])` deve corrispondere all'ordine dei `?` nella query.

### Leggere gli ordini con JOIN

```php
function readOrders(PDO $pdo): array
{
    $statement = $pdo->query('
        SELECT
            ordini.id,
            ordini.nome_cliente,
            pizze.nome AS pizza,
            ordini.quantita,
            ROUND(pizze.prezzo * ordini.quantita, 2) AS totale,
            ordini.data_ordine
        FROM ordini
        JOIN pizze ON ordini.pizza_id = pizze.id
        ORDER BY ordini.id DESC
    ');

    return $statement->fetchAll();
}
```

Questa funzione legge gli ordini già arricchiti con nome della pizza e totale.

La `JOIN` unisce ordine e pizza per mostrare il nome della pizza e calcolare il totale.
Senza `JOIN` avremmo solo `pizza_id`, cioè un numero poco utile da mostrare nella tabella degli ordini.
`AS pizza` e `AS totale` danno un nome più comodo ai valori calcolati dalla query.
`ROUND(..., 2)` arrotonda il totale a due decimali.
`DESC` ordina dal valore più grande al più piccolo: qui mostra prima gli ordini più recenti.

---

## 14. Array associativi e `foreach`

Con `PDO::FETCH_ASSOC`, una riga letta dal database è simile a questa:

```php
[
    'id' => 1,
    'nome' => 'Margherita',
    'ingredienti' => 'Pomodoro, mozzarella, basilico',
    'prezzo' => 6.50,
]
```

Questo è il formato con cui PHP rappresenta una riga della tabella `pizze`.
La freccia `=>` collega una chiave al suo valore: per esempio la chiave `nome` contiene `Margherita`.

Per stampare una lista:

```php
<?php foreach ($pizzas as $pizza): ?>
    <article class="pizza-card">
        <h3><?= h($pizza['nome']) ?></h3>
        <p><?= h($pizza['ingredienti']) ?></p>
        <p class="price"><?= money((float) $pizza['prezzo']) ?></p>
    </article>
<?php endforeach; ?>
```

Questo ciclo trasforma ogni riga dell'array `$pizzas` in un blocco HTML visibile nella pagina.

La parte PHP controlla la ripetizione; la parte HTML definisce il markup di ogni elemento.
Questa è la stessa idea che in JavaScript useremmo creando elementi nel DOM a partire da un array; qui però il ciclo avviene prima, sul server.

---

## 15. Funzioni di supporto

In `app/functions.php` ci sono alcune funzioni che rendono `index.php` più leggibile.

```php
function h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
```

Questa funzione prepara un testo per essere stampato in HTML senza interpretarlo come codice.

`h()` va usata quando stampiamo testo che arriva dal database o dall'utente.
Evita che testo inserito dall'esterno venga interpretato come HTML.
Dentro usa `htmlspecialchars`, una funzione già pronta di PHP.
`ENT_QUOTES` e `UTF-8` sono impostazioni tecniche della funzione: non serve memorizzarle ora.

Regola pratica: se un valore può essere stato scritto da un utente, stamparlo con `h()`.

```php
function money(float $value): string
{
    return 'EUR ' . number_format($value, 2, ',', '.');
}
```

Questa funzione trasforma un numero in una stringa prezzo leggibile.

`money()` formatta un numero come prezzo.
Dentro usa `number_format`, una funzione già pronta di PHP per formattare numeri.

```php
function redirectTo(string $tab, string $message = '', string $type = 'ok'): void
{
    $url = '/index.php?tab=' . urlencode($tab);

    if ($message !== '') {
        $url .= '&message=' . urlencode($message) . '&type=' . urlencode($type);
    }

    header('Location: ' . $url);
    exit;
}
```

Questa funzione costruisce un URL verso `index.php`, manda il browser a quell'URL e ferma lo script.

Il primo parametro indica quale tab mostrare: `cliente` oppure `admin`.
Il messaggio, se presente, viene aggiunto all'URL e poi mostrato da `index.php`.
`urlencode()` rende un testo adatto a stare dentro un URL.
`header('Location: ...')` dice al browser di andare a un altro indirizzo.
`exit` ferma subito l'esecuzione del file PHP.

`redirectTo()` rimanda il browser a una pagina pulita dopo un form.
Questo evita che il form venga reinviato se l'utente aggiorna la pagina.

---

## 16. Creare, modificare, eliminare

Le operazioni di amministrazione usano sempre lo stesso schema:

1. il form invia `operation`;
2. `form-handler.php` legge e valida i dati;
3. una funzione esegue la query;
4. `form-handler.php` fa redirect.

### INSERT

```sql
INSERT INTO pizze (nome, ingredienti, prezzo)
VALUES (?, ?, ?)
```

Questa query aggiunge una nuova pizza alla tabella `pizze`.

### UPDATE

```sql
UPDATE pizze
SET nome = ?, ingredienti = ?, prezzo = ?
WHERE id = ?
```

Questa query cambia i dati di una pizza già presente.
Il `WHERE id = ?` è fondamentale: indica quale riga modificare.

### DELETE

```sql
DELETE FROM ordini WHERE pizza_id = ?
DELETE FROM pizze WHERE id = ?
```

Queste query eliminano prima gli ordini collegati e poi la pizza.
Anche nelle eliminazioni il `WHERE` è fondamentale: senza `WHERE` si eliminerebbero molte più righe del previsto.

Nel progetto questa operazione è dentro una transazione:

```php
$pdo->beginTransaction();

try {
    // query di eliminazione
    $pdo->commit();
} catch (Throwable $error) {
    $pdo->rollBack();
    throw $error;
}
```

Questo blocco raggruppa più query in una sola operazione: o riescono tutte, o vengono annullate.
`try` contiene il codice da provare.
`catch` contiene cosa fare se si verifica un errore.
`commit()` conferma la transazione; `rollBack()` la annulla.

---

## 17. Perché non incollare valori dentro SQL

Da evitare:

```php
$sql = "SELECT * FROM pizze WHERE nome LIKE '%$search%'";
```

Questo esempio costruisce una query incollando direttamente un valore scritto dall'utente.

Il valore di `$search` arriva dall'utente: inserirlo direttamente nella SQL può produrre errori o vulnerabilità.

Meglio:

```php
$statement = $pdo->prepare('
    SELECT id, nome, ingredienti, prezzo
    FROM pizze
    WHERE nome LIKE ?
');

$statement->execute(['%' . $search . '%']);
```

Questo esempio separa la query dai valori inseriti dall'utente.

Regola pratica: se nella query entra un dato dell'utente, usare `prepare` + `execute`.

---

## 18. Mappa completa

```text
Browser
  |
  | GET /index.php?tab=cliente
  v
public/index.php
  |
  | require
  v
app/database.php ---- apre ----> database/pizzeria.db
  |
  | funzioni
  v
app/functions.php ---- query SQL ----> tabelle pizze, ordini
  |
  | HTML generato
  v
Browser
```

La mappa riassume quali file partecipano quando il browser chiede la pagina.

Quando parte un form `POST`, il percorso è diverso:

```text
Browser
  |
  | POST /form-handler.php
  v
public/form-handler.php
  |
  | require
  v
app/database.php ---- apre ----> database/pizzeria.db
  |
  | funzioni
  v
app/functions.php ---- INSERT/UPDATE/DELETE ----> tabelle pizze, ordini
  |
  | redirect a /index.php
  v
Browser
```

---

## 19. Cose da ricordare

- PHP viene eseguito sul server.
- Il browser riceve HTML, CSS ed eventuale JavaScript, non il codice PHP.
- `index.php` mostra la pagina.
- `form-handler.php` gestisce i form `POST`.
- SQLite salva i dati in un file.
- `GET` è adatto a ricerca e navigazione.
- `POST` è adatto a operazioni che modificano dati.
- `prepare` + `execute` protegge le query con dati dell'utente.
- `fetchAll()` legge più righe.
- `fetch()` legge una sola riga.
- `foreach` stampa liste generate dai dati.
- `h()` va usata quando stampiamo testo esterno nell'HTML.
- Dopo un form conviene fare redirect.

---

## 20. Mini-verifiche

1. Quale file mostra la pagina principale?
2. Quale file gestisce i form `POST`?
3. Quale funzione apre il database?
4. Dove vengono definite le query principali?
5. Quale tabella contiene le pizze?
6. Quale tabella contiene gli ordini?
7. Perché `pizza_id` è importante?
8. Quando usiamo `GET`?
9. Quando usiamo `POST`?
10. Perché usiamo `prepare`?
11. A cosa serve `h()`?

---

## 21. Esercizi guidati

### Esercizio 1: seguire un ordine

Parti dal form "Nuovo ordine" e segui il percorso del dato:

1. campo HTML;
2. lettura in `$_POST`;
3. validazione;
4. chiamata a `createOrder`;
5. query `INSERT`;
6. nuova riga nella tabella `ordini`;
7. visualizzazione negli ultimi ordini.

### Esercizio 2: cambiare testo nella pagina

Nel file `public/index.php`, cambia il titolo:

```html
<h1>Pizzeria Bella Napoli</h1>
```

Questo è il titolo principale mostrato nella pagina.

Verifica che il browser mostri il nuovo testo.

### Esercizio 3: aggiungere una pizza iniziale

Nel file `database/init-database.php`, aggiungi una nuova riga:

```php
$insertPizza->execute(['Bufala', 'Pomodoro, mozzarella di bufala, basilico', 9.50]);
```

Questa riga aggiunge una pizza iniziale quando viene ricreato il database.

Poi ricrea il database:

```bash
php database/init-database.php
```

Questo comando ricostruisce il database usando anche la nuova pizza.

### Esercizio 4: aggiungere il telefono cliente

Estendi gli ordini con un nuovo campo `telefono_cliente`.

Passaggi:

1. aggiungi la colonna nella tabella `ordini`;
2. aggiungi il campo nel form;
3. leggi il valore da `$_POST`;
4. aggiorna `createOrder`;
5. mostra il telefono nella tabella ordini.

### Esercizio 5: mostrare pizze economiche

Crea una funzione che mostri solo le pizze con prezzo minore o uguale a 8 euro.

Query di partenza:

```sql
SELECT id, nome, ingredienti, prezzo
FROM pizze
WHERE prezzo <= 8
ORDER BY prezzo ASC
```

Questa query legge solo le pizze economiche e le ordina dalla meno cara alla più cara.

### Esercizio 6: crea il progetto biblioteca in `starter/`

Ora crea un nuovo progetto dentro la cartella `starter/`.

Non è già pronto: devi creare tu file e cartelle.

Il progetto deve gestire i prestiti di una biblioteca scolastica.
Serve per usare gli stessi concetti della pizzeria in un contesto diverso:

- pagina PHP;
- form HTML;
- database SQLite;
- funzioni PHP;
- query SQL;
- file `form-handler.php` per gestire i form `POST`.

Apri:

```text
starter/README.md
```

Segui la consegna e crea la struttura richiesta.

Compito:

1. crea la struttura di cartelle indicata;
2. crea il database `biblioteca.db`;
3. crea la pagina `index.php`;
4. crea il form "Nuovo prestito";
5. crea `form-handler.php`;
6. crea le funzioni in `app/functions.php`;
7. verifica che un prestito venga salvato e mostrato nella tabella.