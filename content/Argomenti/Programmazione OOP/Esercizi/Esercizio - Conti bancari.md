# Esercizio Java — Conti bancari

Una banca gestisce conti correnti ordinari e conti con fido. Un conto ordinario permette di prelevare soltanto il denaro presente; un conto con fido permette anche di andare in negativo, entro un limite concordato.

Realizza le tre classi seguenti e un `Main` per provarle. Tutti gli importi sono espressi in centesimi interi; usa valori piccoli, senza affrontare l'overflow. Non servono menu o input da tastiera.

## `ContoCorrente`

Un conto ha un codice e un saldo, entrambi privati. Il costruttore riceve un codice non nullo e non vuoto dopo `trim()` e un saldo iniziale non negativo. Il codice non può essere modificato.

Implementa i getter e questi metodi:

```java
public int getDisponibilita()
public void deposita(int importo)
public void preleva(int importo)
```

La disponibilità di un conto ordinario coincide con il saldo. Depositi e prelievi devono avere importo positivo; un prelievo non può superare la disponibilità.

Usa `IllegalArgumentException` per dati non validi e `IllegalStateException` per disponibilità insufficiente. Un'operazione rifiutata non deve modificare il saldo.

## `ContoConFido extends ContoCorrente`

Aggiungi un campo privato e non modificabile `fido`, ricevuto dal costruttore e strettamente positivo. Usa `super` per inizializzare i dati ereditati.

Ridefinisci `getDisponibilita()` con `@Override`: per questo conto restituisce **saldo + fido**. Per esempio, con saldo −2000 e fido 5000 è ancora possibile prelevare 3000 centesimi.

Il metodo `preleva()` deve rimanere nella superclasse e chiamare `getDisponibilita()` per controllare l'operazione. Non duplicare il saldo o il codice del prelievo nella sottoclasse.

## `Banca`

Conserva i conti in un campo privato `ArrayList<ContoCorrente>` e implementa:

```java
public void aggiungiConto(ContoCorrente conto)
public ContoCorrente cercaConto(String codice)
public void trasferisci(String codiceOrigine,
                        String codiceDestinazione, int importo)
```

- Rifiuta conti nulli e codici duplicati con `IllegalArgumentException`. Confronta i codici con `equals()`.
- La ricerca attraversa la lista e restituisce il conto corrispondente; se manca, lancia `NoSuchElementException` di `java.util`. I codici ricevuti devono essere non nulli, ripuliti con `trim()` e non vuoti; il confronto distingue maiuscole e minuscole.
- Un trasferimento richiede un importo positivo e due conti diversi presenti nella banca. Controlla queste condizioni prima di spostare denaro, poi chiedi al conto di origine di prelevare e a quello di destinazione di depositare. Se il prelievo fallisce, nessun saldo deve cambiare.

### Overloading del metodo `aggiungiConto()`

La banca deve permettere di registrare nuovi conti anche senza dover creare esplicitamente un oggetto prima della chiamata.

Realizza quindi due versioni aggiuntive del metodo `aggiungiConto()`:

```java
public void aggiungiConto(String codice, int saldoIniziale)
public void aggiungiConto(String codice, int saldoIniziale, int fido)
```

- La versione con **due parametri** crea e registra un conto corrente ordinario.
    
- La versione con **tre parametri** crea e registra un conto corrente con fido.
    
- Entrambe devono riutilizzare il metodo `aggiungiConto(ContoCorrente conto)` per effettuare la registrazione, evitando di duplicare i controlli sui codici.
    

Le tre versioni devono rispettare le stesse regole di validazione stabilite in precedenza.

La banca deve trattare nello stesso modo i due tipi di conto: non usare `instanceof` o controlli sul tipo per stabilire se un prelievo è consentito.

## Eccezione personalizzata — `InsufficientFundsException`

Realizza una classe `InsufficientFundsException` che estenda `IllegalStateException`, per rappresentare un tentativo di prelievo con disponibilità insufficiente.

La classe deve avere:

- Un costruttore che riceva due parametri interi: l'importo richiesto e la disponibilità effettiva del conto.
    
- Un messaggio di errore che riporti entrambi i valori, ad esempio: `"Disponibilità insufficiente: richiesti 6000 centesimi, disponibili 4000 centesimi."`
    

Modifica il metodo `preleva()` della classe `ContoCorrente` affinché lanci questa eccezione quando l'importo richiesto supera la disponibilità.

L'eccezione deve funzionare correttamente anche per i conti con fido, sfruttando il metodo `getDisponibilita()` ridefinito nella sottoclasse.

Nel `Main`, intercetta esplicitamente `InsufficientFundsException` con un blocco `try-catch` durante almeno uno dei tentativi di prelievo o trasferimento con disponibilità insufficiente, mostrando il messaggio dell'eccezione.

## Prova nel `Main`

Registra un conto ordinario `A` con saldo 10000 e un conto con fido `B` con saldo 2000 e fido 5000. Esegui queste prove in ordine:

| Operazione | Risultato atteso |
|---|---|
| Trasferisci 6000 da `B` ad `A` | Saldi: `A = 16000`, `B = -4000`. Disponibilità di `B = 1000`. |
| Tenta di trasferire altri 1500 da `B` ad `A` | Disponibilità insufficiente; saldi invariati. |
| Trasferisci 3000 da `A` a `B` | Saldi: `A = 13000`, `B = -1000`. Disponibilità di `B = 4000`. |
| Tenta di prelevare 14000 da `A` | Operazione rifiutata; saldo ancora 13000. |
| Tenta un trasferimento verso il conto inesistente `C` | Errore; entrambi i saldi invariati. |

Prova inoltre un codice duplicato, un importo zero e un trasferimento da `A` ad `A`: devono essere rifiutati. Gestisci ogni prova di errore con `try-catch` nel `Main`, mostrando il messaggio e permettendo alle prove successive di proseguire.q
