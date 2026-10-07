Le funzioni in C usate per i socket sono definite nella libreria standard <sys/socket.h>. Queste funzioni consentono di creare, configurare, utilizzare e chiudere i socket.

**socket()**

La funzione `socket()` viene utilizzata per creare un nuovo socket. I suoi argomenti sono:

* `domain`: la famiglia di indirizzi del socket. I valori possibili sono:
    * AF_INET: indirizzi IPv4
    * AF_INET6: indirizzi IPv6
    * AF_UNIX: indirizzi Unix
* `type`: il tipo di socket. I valori possibili sono:
    * SOCK_STREAM: socket TCP
    * SOCK_DGRAM: socket UDP
    * SOCK_RAW: socket RAW
* `protocol`: il protocollo di trasporto da utilizzare. Se impostato a 0, il sistema operativo sceglierà il protocollo appropriato in base al valore di `type`.

**bind()**

La funzione `bind()` viene utilizzata per associare un indirizzo e una porta a un socket. I suoi argomenti sono:

* `socket`: il socket da associare.
* `address`: la struttura che contiene l'indirizzo e la porta da associare.
* `address_len`: la lunghezza della struttura `address`.

**listen()**

La funzione `listen()` viene utilizzata da un server per indicare che è pronto a ricevere connessioni. Il suo argomento è:

* `socket`: il socket del server.
* `backlog`: il numero massimo di connessioni in attesa.

**accept()**

La funzione `accept()` viene utilizzata da un server per accettare una connessione da un client. Il suo argomento è:

* `socket`: il socket del server.
* `address`: la struttura che verrà riempita con l'indirizzo e la porta del client.
* `address_len`: la lunghezza della struttura `address`.

**connect()**

La funzione `connect()` viene utilizzata da un client per stabilire una connessione con un server. I suoi argomenti sono:

* `socket`: il socket del client.
* `address`: la struttura che contiene l'indirizzo e la porta del server.
* `address_len`: la lunghezza della struttura `address`.

**send()**

La funzione `send()` viene utilizzata per inviare dati su un socket. I suoi argomenti sono:

* `socket`: il socket su cui inviare i dati.
* `buffer`: il buffer contenente i dati da inviare.
* `len`: la lunghezza dei dati da inviare.
* `flags`: un flag che indica il tipo di invio.

**recv()**

La funzione `recv()` viene utilizzata per ricevere dati da un socket. I suoi argomenti sono:

* `socket`: il socket da cui ricevere i dati.
* `buffer`: il buffer in cui memorizzare i dati ricevuti.
* `len`: la lunghezza massima dei dati da ricevere.
* `flags`: un flag che indica il tipo di ricezione.

**close()**

La funzione `close()` viene utilizzata per chiudere un socket. L'argomento è:

* `socket`: il socket da chiudere.

**Argomenti delle funzioni**

Gli argomenti delle funzioni per i socket possono essere suddivisi in due categorie:

* **Argomenti obbligatori:** questi argomenti sono necessari per il corretto funzionamento della funzione.
* **Argomenti facoltativi:** questi argomenti possono essere utilizzati per specificare opzioni aggiuntive.

**Argomenti obbligatori**

Gli argomenti obbligatori per le funzioni per i socket sono:

* `socket`: questo argomento è necessario per identificare il socket su cui operare.

**Argomenti facoltativi**

Gli argomenti facoltativi per le funzioni per i socket sono:

* `domain`: questo argomento è facoltativo solo per la funzione `socket()`. Il suo valore predefinito è AF_INET.
* `type`: questo argomento è facoltativo solo per la funzione `socket()`. Il suo valore predefinito è SOCK_STREAM.
* `protocol`: questo argomento è facoltativo solo per la funzione `socket()`. Il suo valore predefinito è 0.
* `address`: questo argomento è facoltativo per la funzione `bind()`. Il suo valore predefinito è NULL, il che significa che il socket non sarà associato a un indirizzo o porta specifici.
* `address_len`: questo argomento è facoltativo per la funzione `bind()`. Il suo valore predefinito è sizeof(struct sockaddr).
* `backlog`: questo argomento è facoltativo per la funzione `