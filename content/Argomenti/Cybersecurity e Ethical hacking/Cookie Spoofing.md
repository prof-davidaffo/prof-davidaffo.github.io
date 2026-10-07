## Autenticazione tramite Cookie: Sicurezza e Meccanismi di Protezione

### Definizione e Funzionamento

I **cookie di autenticazione** sono strumenti utilizzati dai servizi che richiedono l'autenticazione degli utenti. Quando un utente accede a un'applicazione o sito web inserendo le proprie credenziali (nome utente e password), il server verifica tali credenziali. Se risultano valide, viene creata una **sessione** per quell’utente.

Ogni sessione viene identificata da un **ID univoco di sessione**. Questo ID viene inviato al client (tipicamente un browser) attraverso l’header HTTP `Set-Cookie`, che contiene il nome del cookie e il suo valore (cioè l’ID della sessione o un token di autenticazione crittograficamente sicuro). Il cookie viene quindi memorizzato lato client ed è incluso automaticamente nelle richieste successive al server.

### Memorizzazione e Rischi di Sicurezza

Il cookie viene **memorizzato sia lato client che lato server**:

- **Lato client**: il cookie viene salvato nel browser. In questo caso, può essere vulnerabile a:
    
    - **Attacchi Man-in-the-Middle (MitM)**, se la comunicazione non avviene tramite HTTPS.
        
    - **Attacchi Cross-Site Scripting (XSS)**, se un sito è vulnerabile e consente l'iniezione di codice JavaScript.
        
- **Lato server**: spesso è associato a una struttura di dati che tiene traccia dello stato della sessione, oppure è validato tramite meccanismi stateless, come i JSON Web Token (JWT).
    

### Autenticazione Basata su Cookie

Una volta in possesso di un **cookie di autenticazione valido**, un client può essere **autenticato automaticamente** dal server, senza dover ripetere l’inserimento delle credenziali. Questa caratteristica rende il cookie un elemento **critico per la sicurezza** del sistema di autenticazione.

### Obiettivi di Sicurezza

L’obiettivo primario è **impedire che un utente malintenzionato possa indovinare o riprodurre il valore di un cookie valido**, e quindi accedere come un altro utente. Ciò implica che l’**algoritmo di generazione del cookie** debba essere **robusto e non prevedibile**.

### Rischi e Vettori di Attacco

1. **Prevedibilità dell'algoritmo**: Se l’algoritmo di generazione dei cookie è semplice o utilizza una fonte di casualità debole, un attaccante potrebbe riuscire a **predire o riprodurre** un valore valido.
    
2. **Furto del cookie**:
    
    - Tramite XSS: se un sito consente l'iniezione di script, un attaccante può leggere i cookie con `document.cookie`.
        
    - Tramite intercettazione del traffico: se non si usa HTTPS, i cookie possono essere intercettati in chiaro.
        

### Misure di Mitigazione

1. **Algoritmi crittograficamente sicuri**:
    
    - Utilizzare generatori di numeri casuali crittograficamente sicuri (es. `SecureRandom` in Java, `crypto.randomBytes` in Node.js).
        
    - Utilizzare meccanismi di firma o cifratura dei cookie, ad esempio mediante **HMAC** o **JWT firmati**.
        
2. **Impostazioni di sicurezza dei cookie**:
    
    - `Secure`: il cookie viene inviato solo su connessioni HTTPS.
        
    - `HttpOnly`: il cookie non è accessibile tramite JavaScript lato client.
        
    - `SameSite`: riduce il rischio di attacchi CSRF.
        
3. **Scadenza e rotazione dei cookie**:
    
    - Impostare una **durata limitata della sessione** (timeout).
        
    - **Rigenerare il cookie** dopo eventi critici (es. autenticazione, cambio password).
        
    - Utilizzare **token di refresh** per estendere in sicurezza una sessione.
        
4. **Controlli lato server**:
    
    - Validare l’indirizzo IP o l’agente utente associato alla sessione.
        
    - Limitare il numero di sessioni attive per utente.
        


## Esercizio webgoat
Provando a fare il login si ottengono questi cookie di autenticazione:
```
webgoat webgoat -> NjY2ZTQ0NmE3OTZhNDU1MTVhNDQ3NDYxNmY2NzYyNjU3Nw
admin admin -> NjY2ZTQ0NmE3OTZhNDU1MTVhNDQ2ZTY5NmQ2NDYx
```
Decodificando da base64 si ottiene:
```
666e446a796a45515a4474616f67626577
666e446a796a45515a446e696d6461
```
Che convertito in ASCII diventa:
```
fnDjyjEQZDnimda
fnDjyjEQZDtaogbew
```
Come si nota la radice è identica, mentre la seconda parte è il nome utente scritto al contrario. Sfruttando questa vulnerabilità possiamo entrare come l'utente `tom` invertendo il processo:
```
testo: fnDjyjEQZDmot
ascii hex: 666e446a796a45515a446d6f74
token base64: NjY2ZTQ0NmE3OTZhNDU1MTVhNDQ2ZDZmNzQ

```