# Analizzatore intelligente di configurazioni di rete
***
## cosa dovete realizzare
Dovete creare una **webapp (pagina web con HTML, CSS e JavaScript, senza server)** che analizzi configurazioni di rete e risponda a queste domande:
- La configurazione è corretta?  
- Se non lo è, qual è l’errore?  
- Perché è un errore?  
- Come si può correggere?  
- Due dispositivi possono comunicare tra loro?  
***
## concetti fondamentali (da conoscere)
- **Indirizzo IP (Internet Protocol)**: identificatore numerico di un dispositivo in rete (es: 192.168.1.10)  
- **Subnet (sottorete)**: gruppo di dispositivi nella stessa rete logica  
- **CIDR (Classless Inter-Domain Routing)**: numero che indica la dimensione della rete (es: /24)  
- **Netmask (maschera di rete)**: alternativa al CIDR (es: 255.255.255.0)  
- **Gateway (porta di accesso)**: dispositivo che permette di uscire dalla propria rete  
- **Network address (indirizzo di rete)**: identifica la rete, NON un dispositivo  
- **Broadcast address (indirizzo broadcast)**: usato per inviare dati a tutti i dispositivi della rete  
***
## cosa deve fare la webapp
***
## 1) Analisi di un dispositivo
L’utente inserisce:
- indirizzo IP (Internet Protocol)  
- subnet in formato CIDR (es: 24) oppure netmask (es: 255.255.255.0)  
- gateway (porta di accesso)  
La webapp deve calcolare e mostrare:
- indirizzo di rete (network address)  
- indirizzo broadcast  
- primo e ultimo indirizzo utilizzabile  
- numero di dispositivi possibili  
- errori e avvisi  
- spiegazione tecnica  
- suggerimenti per correggere  
***
### esempio corretto
Input:
```
IP: 192.168.1.10
CIDR: 24
Gateway: 192.168.1.1
```
Output:
```
Indirizzo di rete: 192.168.1.0
Broadcast: 192.168.1.255
Intervallo host: 192.168.1.1 - 192.168.1.254
✔ Configurazione corretta
```
***
### esempio con errore
Input:
```
IP: 192.168.1.0
CIDR: 24
Gateway: 192.168.1.1
```
Output:
```
❌ Errore: l'indirizzo IP coincide con l'indirizzo di rete
Spiegazione:
L’indirizzo di rete identifica la rete e non può essere assegnato a un dispositivo.
Suggerimento:
Usa un indirizzo tra 192.168.1.1 e 192.168.1.254
```
***
## 2) Confronto tra due dispositivi
L’utente inserisce due configurazioni:
- Dispositivo A  
- Dispositivo B  
La webapp deve dire:
- Sono nella stessa sottorete?  
- Possono comunicare direttamente?  
- Serve il gateway?  
- La comunicazione è possibile?  
***
### esempio 1 — stessa rete
```
Dispositivo A: 192.168.1.10 /24
Dispositivo B: 192.168.1.50 /24
```
Output:
```
✔ Comunicazione diretta possibile
Motivo:
I due dispositivi sono nella stessa sottorete
```
***
### esempio 2 — reti diverse
```
Dispositivo A: 192.168.1.10 /24
Dispositivo B: 192.168.2.10 /24
```
Output:
```
⚠ Comunicazione non diretta
Motivo:
I dispositivi sono in reti diverse
Suggerimento:
Serve un gateway per comunicare
```
***
### esempio 3 — errore
```
Dispositivo A: 192.168.1.10 /24, gateway 192.168.2.1
Dispositivo B: 192.168.1.20 /24
```
Output:
```
❌ Errore: gateway non valido
Spiegazione:
Il gateway deve appartenere alla stessa rete del dispositivo
Conclusione:
La comunicazione non è possibile
```
***
## struttura del codice (obbligatoria)
Il codice deve essere organizzato in modo chiaro:
- dati (configurazione dispositivi)  
- funzioni di calcolo  
- funzioni di controllo (validatori)  
- interfaccia utente  
NON è accettato:
- tutto il codice in un’unica funzione  
- codice duplicato  
- if annidati lunghi  
***
## programmazione funzionale (obbligatoria)
Dovete usare:
- Looping functions quando possibile al posto dei for
- Oggetti Javascript
- funzioni passate come parametri
***
### esempio richiesto
```js
const validators = [
  validateIP,
  validateGateway,
  validateSubnet
];
const results = validators
  .map(v => v(config))
  .filter(r => r !== null);
```
***
## struttura degli errori (obbligatoria)
Ogni errore deve essere strutturato così:
```js
{
  code: "GATEWAY_OUT_OF_SUBNET",
  severity: "error",
  category: "logical",
  message: "...",
  explanation: "...",
  suggestion: "..."
}
```
***
## errori da gestire
### errori di formato
- indirizzo IP non valido  
- subnet non valida  
***
### errori logici
- IP uguale all’indirizzo di rete  
- IP uguale al broadcast  
- gateway fuori dalla rete  
- gateway uguale al dispositivo  
***
### errori di comunicazione
- dispositivi in reti diverse  
- assenza di gateway  
***
## ruolo delle due classi
### TPSIT
- scrive il codice  
- costruisce la webapp  
- organizza la logica  
***
### Sistemi e Reti
- definisce le regole  
- stabilisce cosa è corretto o sbagliato  
- scrive le spiegazioni  
- crea i casi di test
***
## consegna finale
- struttura HTML, CSS, JS funzionante  
- documentazione tecnica  
- dimostrazione