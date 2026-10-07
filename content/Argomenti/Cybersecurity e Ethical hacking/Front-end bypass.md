## Concetto

Nel contesto delle applicazioni web, gli utenti possono avere un notevole grado di controllo sul front-end, che include la possibilità di modificare il codice HTML e, in alcuni casi, anche gli script. Questo livello di accessibilità permette agli utenti di alterare le richieste inviate al server. È fondamentale che le applicazioni che richiedono un formato di input specifico implementino un meccanismo di validazione anche sul lato server, oltre a quella sul lato client, per prevenire manipolazioni indesiderate.

### Obiettivi didattici

1. **Conoscenza di base di HTML**: Gli utenti dovrebbero comprendere i fondamenti dell'HTML, come è strutturato un documento HTML e quali sono i principali tag e attributi utilizzati. Questa conoscenza è essenziale per poter modificare efficacemente il codice del front-end di un'applicazione web.

2. **Capacità di manipolare una richiesta prima dell'invio**: Gli utenti dovrebbero essere in grado di intercettare e modificare le richieste inviate dal loro browser al server. Questo può essere realizzato utilizzando strumenti come proxy web, che permettono di osservare e alterare il traffico HTTP/HTTPS tra il client e il server.

3. **Possibilità di eludere le restrizioni dei campi e la validazione lato client**: Gli utenti dovrebbero essere capaci di modificare i limiti imposti sui campi di input e di bypassare le validazioni effettuate sul lato client. Questo include la rimozione o la modifica di validazioni JavaScript che impediscono l'invio di dati non conformi alle aspettative del server. Questa pratica sottolinea l'importanza della validazione sul lato server per garantire la sicurezza e l'integrità dei dati.

### Esempio pratico

Immaginiamo un form di registrazione su un sito web che include un campo per l'età, il quale accetta solo valori numerici da 18 a 65. La validazione lato client impedisce l'inserimento di valori al di fuori di questo intervallo attraverso uno script JavaScript. Un utente con conoscenze di HTML e strumenti di intercettazione delle richieste potrebbe modificare il valore inviato al server, inserendo un'età non consentita, come 17 o 66. Se il server non valida nuovamente questi dati, l'utente riuscirebbe a registrarsi con un'età non conforme alle regole del sito.

In conclusione, mentre la manipolazione del front-end può offrire agli utenti la flessibilità di personalizzare l'esperienza utente e testare la sicurezza delle applicazioni, è essenziale che gli sviluppatori implementino robuste misure di sicurezza sul lato server per prevenire abusi e garantire la validità dei dati inviati.

## Restrizioni dei Campi

Nel contesto delle applicazioni web moderne, il controllo del codice HTML del front-end da parte del cliente è completo o quasi. Gli utenti possono modificare valori o restrizioni per adattarli alle loro preferenze personali, manipolando così il comportamento previsto del sito web.

### Compito

L'obiettivo è inviare una richiesta che bypassi le restrizioni di quattro specifici tipi di campo in un form HTML. I campi in questione sono:

1. **Campo select con due possibili valori**
2. **Pulsante radio con due possibili valori**
   - Opzione 1
   - Opzione 2
3. **Checkbox: valore attivato o disattivato**
4. **Campo di input limitato a massimo 5 caratteri**
5. **Campo di input di sola lettura**

### Esempio di manipolazione dei campi

Per illustrare come un utente possa bypassare le restrizioni imposte su questi campi, consideriamo un esempio pratico utilizzando strumenti come le DevTools di un browser o un proxy HTTP per modificare le richieste inviate al server:

1. **Campo select e pulsante radio**: Anche se l'interfaccia utente presenta solo due opzioni, l'utente può inserire un valore diverso modificando il valore dell'elemento nel DOM o intercettando la richiesta e cambiando il valore del parametro prima che venga inviato al server.

2. **Checkbox**: Di norma, questo controllo invia un valore solo se è selezionato (ad esempio, "on"). L'utente può forzare l'invio di un valore differente o modificare il comportamento di invio per testare la reazione del server a valori inattesi.

3. **Input limitato a massimo 5 caratteri**: È possibile modificare l'attributo `maxlength` nel campo di input utilizzando gli strumenti di sviluppo del browser, o rimuovere completamente questa restrizione, permettendo l'inserimento di una stringa più lunga.

4. **Campo di input di sola lettura**: L'attributo `readonly` può essere rimosso dal campo di input attraverso la modifica del DOM. Questo permetterebbe di inserire o modificare il valore nel campo che dovrebbe essere non modificabile.

Queste tecniche evidenziano la necessità per gli sviluppatori di applicazioni web di non affidarsi unicamente alla validazione lato client per garantire la sicurezza e l'integrità dei dati. È essenziale implementare controlli di validazione robusti anche sul lato server per verificare che i dati ricevuti siano conformi alle aspettative e alle regole di business dell'applicazione, evitando così potenziali abusi o manipolazioni dei dati inviati dagli utenti.

## Validazione

In molti contesti applicativi, esistono meccanismi per prevenire l'invio al server di valori di campo modificati, come la validazione prima dell'invio. I browser più popolari, come Chrome, non permettono di modificare gli script durante l'esecuzione, pertanto è necessario trovare altre vie per aggirare queste validazioni.

### Compito

L'obiettivo è inviare una richiesta che non corrisponda alle espressioni regolari specificate per ciascun campo. Qui di seguito sono descritti i campi e le relative espressioni regolari che determinano i valori validi:

1. **Campo 1: esattamente tre caratteri minuscoli** (`^[a-z]{3}$`)
   - Valore valido: `abc`
2. **Campo 2: esattamente tre cifre** (`^[0-9]{3}$`)
   - Valore valido: `123`
3. **Campo 3: solo lettere, numeri e spazi** (`^[a-zA-Z0-9 ]*$`)
   - Valore valido: `abc 123 ABC`
4. **Campo 4: enumerazione di numeri** (`^(one|two|three|four|five|six|seven|eight|nine)$`)
   - Valore valido: `seven`
5. **Campo 5: codice postale semplice** (`^\d{5}$`)
   - Valore valido: `01101`
6. **Campo 6: codice postale con trattino opzionale e quattro cifre** (`^\d{5}(-\d{4})?$`)
   - Valore valido: `90210-1111`
7. **Campo 7: numero di telefono USA con o senza trattini** (`^[2-9]\d{2}-?\d{3}-?\d{4}$`)
   - Valore valido: `301-604-4882`

### Esempi di manipolazione

Per inviare richieste che non soddisfano le espressioni regolari sopra menzionate, potresti considerare i seguenti valori di esempio:

1. **Campo 1**: Inviare `ab` o `abcd` (troppo corto o troppo lungo)
2. **Campo 2**: Inviare `12a` (non solo cifre)
3. **Campo 3**: Inviare `abc@123` (presenza di caratteri non permessi)
4. **Campo 4**: Inviare `ten` (valore non incluso nell'enumerazione)
5. **Campo 5**: Inviare `011010` (più di 5 cifre)
6. **Campo 6**: Inviare `90210-111` (ultima parte non rispetta le 4 cifre richieste)
7. **Campo 7**: Inviare `101-604-4882` (inizia con una cifra non permessa)

Questi esempi dimostrano l'importanza della validazione lato server per garantire che i dati inviati rispettino le regole e i formati attesi. Affidarsi esclusivamente alla validazione lato client può esporre l'applicazione a rischi di sicurezza, manipolazione dei dati e comportamenti non previsti. Implementare controlli di validazione robusti e coerenti su entrambi i lati, client e server, è fondamentale per mantenere l'integrità e la sicurezza delle applicazioni web.