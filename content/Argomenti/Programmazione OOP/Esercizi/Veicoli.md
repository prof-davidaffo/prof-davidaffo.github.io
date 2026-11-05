# Esercizio Java — Sistema di gestione dei veicoli
## Obiettivo
Realizzare un sistema per la gestione di diverse tipologie di veicoli, utilizzando i principi della **programmazione orientata agli oggetti**.
Il progetto deve prevedere una gerarchia di classi astratte e concrete, sfruttando **ereditarietà, incapsulamento, polimorfismo, interfacce ed eccezioni personalizzate**.
Il sistema deve consentire di gestire veicoli terrestri, aerei e marini, ciascuno con caratteristiche e comportamenti specifici.
Ogni classe deve essere realizzata in un file Java separato. Tutti gli attributi devono essere privati e accessibili attraverso gli opportuni metodi.
## 1. Classe astratta `Veicolo`
Rappresenta un generico veicolo, indipendentemente dall'ambiente in cui si muove.
**Attributi:**
- `codice` (`String`): identificativo univoco del veicolo.
- `velocitaMassima` (`double`): velocità massima raggiungibile, espressa in km/h.
- `velocitaAttuale` (`double`): velocità corrente del veicolo, espressa in km/h.
**Costruttore:**
Riceve il codice identificativo e la velocità massima. La velocità iniziale è sempre pari a zero.
**Metodi:**
- `getCodice(): String`: restituisce il codice identificativo.
- `getVelocitaMassima(): double`: restituisce la velocità massima.
- `getVelocitaAttuale(): double`: restituisce la velocità corrente.
- `accelera(double incremento): void`: aumenta la velocità corrente della quantità indicata, rispettando il limite massimo.
- `decelera(double decremento): void`: diminuisce la velocità corrente della quantità indicata, senza scendere sotto zero.
- `ferma(): void`: porta la velocità corrente a zero.
- `getDescrizione(): String`: metodo astratto che restituisce una descrizione del veicolo, comprensiva delle sue caratteristiche principali.
**Vincoli:**
- Il codice deve essere diverso da `null` e non deve essere vuoto dopo `trim()`.
- La velocità massima deve essere maggiore di zero.
- Gli incrementi e i decrementi di velocità devono essere strettamente positivi.
- I valori non validi devono provocare un'`IllegalArgumentException`.
- I tentativi di superare la velocità massima devono provocare un'eccezione personalizzata `VelocitaNonConsentitaException`, descritta successivamente.
## 2. Classe astratta `VeicoloTerrestre`
Estende `Veicolo` e rappresenta qualsiasi veicolo che si muove su terra.
**Attributi aggiuntivi:**
- `numeroRuote` (`int`): numero di ruote del veicolo.
**Metodi:**
- `getNumeroRuote(): int`: restituisce il numero di ruote.
- `getTipoTerreno(): String`: metodo astratto che restituisce il tipo di terreno per cui il veicolo è progettato.
Il numero di ruote deve essere maggiore di zero.
## 3. Classe astratta `VeicoloAereo`
Estende `Veicolo` e rappresenta qualsiasi veicolo in grado di volare.
**Attributi aggiuntivi:**
- `altitudineMassima` (`double`): altitudine massima operativa, espressa in metri.
- `altitudineAttuale` (`double`): altitudine corrente, inizialmente pari a zero.
**Metodi:**
- `getAltitudineMassima(): double`: restituisce l'altitudine massima.
- `getAltitudineAttuale(): double`: restituisce l'altitudine corrente.
- `sali(double metri): void`: aumenta l'altitudine.
- `scendi(double metri): void`: diminuisce l'altitudine.
- `atterra(): void`: riporta l'altitudine a zero e ferma il veicolo.
**Vincoli:**
- L'altitudine massima deve essere maggiore di zero.
- Gli spostamenti verticali devono essere strettamente positivi.
- L'altitudine corrente deve rimanere compresa tra zero e l'altitudine massima.
- Il superamento dell'altitudine massima deve provocare un'eccezione personalizzata `AltitudineNonConsentitaException`.
Per semplicità, il sistema considera indipendenti la velocità orizzontale e il movimento verticale. Non è necessario simulare le leggi fisiche del volo.
## 4. Classe astratta `VeicoloMarino`
Estende `Veicolo` e rappresenta un veicolo che si muove sull'acqua.
**Attributi aggiuntivi:**
- `dislocamento` (`double`): massa d'acqua spostata dal veicolo, espressa in tonnellate.
**Metodi:**
- `getDislocamento(): double`: restituisce il dislocamento.
- `getTipoPropulsione(): String`: metodo astratto che restituisce il sistema di propulsione utilizzato.
Il dislocamento deve essere maggiore di zero.
## 5. Classi concrete
### 5.1 Classe `Auto`
Estende `VeicoloTerrestre`.
**Attributi aggiuntivi:**
- `modello` (`String`): modello dell'automobile.
- `colore` (`String`): colore della carrozzeria.
- `numeroPosti` (`int`): numero massimo di occupanti.
- `luciAccese` (`boolean`): indica se le luci sono accese.
Il numero di ruote viene fissato a quattro dal costruttore.
**Metodi:**
- `getModello(): String`
- `getColore(): String`
- `getNumeroPosti(): int`
- `isLuciAccese(): boolean`
- `setColore(String colore): void`: modifica il colore.
- `accendiLuci(): void`: accende le luci.
- `spegniLuci(): void`: spegne le luci.
- `suonaClacson(): void`: stampa un messaggio che simula il clacson.
- `getTipoTerreno(): String`: restituisce `"Strada"`.
- `getDescrizione(): String`: restituisce una descrizione con modello, colore, posti e velocità corrente.
Il modello e il colore devono essere stringhe valide; il numero di posti deve essere maggiore di zero.
### 5.2 Classe `Moto`
Estende `VeicoloTerrestre`.
**Attributi aggiuntivi:**
- `marca` (`String`): marca della moto.
- `cilindrata` (`int`): cilindrata in cm³.
- `baulettoPresente` (`boolean`): indica la presenza di un bauletto.
Il numero di ruote viene fissato a due dal costruttore.
**Metodi:**
- `getMarca(): String`
- `getCilindrata(): int`
- `hasBauletto(): boolean`
- `installaBauletto(): void`
- `rimuoviBauletto(): void`
- `getTipoTerreno(): String`: restituisce `"Strada"`.
- `getDescrizione(): String`: restituisce le caratteristiche principali della moto.
La cilindrata deve essere maggiore di zero e la marca deve essere valida.
### 5.3 Classe `Drone`
Estende `VeicoloAereo`.
**Attributi aggiuntivi:**
- `marca` (`String`): marca del drone.
- `autonomiaMassima` (`double`): autonomia massima in minuti.
- `batteriaResidua` (`double`): percentuale di batteria disponibile, inizialmente pari a 100.
- `fotocameraAttiva` (`boolean`): indica se la fotocamera è accesa.
**Metodi:**
- `getMarca(): String`
- `getAutonomiaMassima(): double`
- `getBatteriaResidua(): double`
- `isFotocameraAttiva(): boolean`
- `attivaFotocamera(): void`
- `disattivaFotocamera(): void`
- `consumaBatteria(double percentuale): void`: diminuisce la percentuale di batteria disponibile.
- `ricarica(): void`: riporta la batteria al 100%, esclusivamente quando il drone si trova a terra e ha velocità zero.
- `getDescrizione(): String`: restituisce marca, autonomia, altitudine e batteria residua.
**Vincoli:**
- L'autonomia massima deve essere maggiore di zero.
- Il consumo richiesto deve essere strettamente positivo.
- La batteria residua deve essere compresa tra 0 e 100.
- Se il consumo richiesto supera la batteria disponibile, deve essere lanciata una `BatteriaInsufficienteException`.
### 5.4 Classe `Elicottero`
Estende `VeicoloAereo`.
**Attributi aggiuntivi:**
- `modello` (`String`): modello dell'elicottero.
- `numeroPasseggeri` (`int`): capacità massima di passeggeri.
- `modalitaSoccorso` (`boolean`): indica se è attiva la modalità di soccorso.
**Metodi:**
- `getModello(): String`
- `getNumeroPasseggeri(): int`
- `isModalitaSoccorso(): boolean`
- `attivaSoccorso(): void`
- `disattivaSoccorso(): void`
- `getDescrizione(): String`: restituisce le caratteristiche principali dell'elicottero.
Il numero di passeggeri deve essere maggiore di zero e il modello deve essere valido.
### 5.5 Classe `Nave`
Estende `VeicoloMarino`.
**Attributi aggiuntivi:**
- `nome` (`String`): nome della nave.
- `capacitaPasseggeri` (`int`): numero massimo di passeggeri.
- `numeroPasseggeri` (`int`): numero di passeggeri attualmente a bordo.
- `segnaleSOSAttivo` (`boolean`): stato del segnale di emergenza.
**Metodi:**
- `getNome(): String`
- `getCapacitaPasseggeri(): int`
- `getNumeroPasseggeri(): int`
- `imbarcaPasseggeri(int quantita): void`: aumenta il numero dei passeggeri a bordo.
- `sbarcaPasseggeri(int quantita): void`: diminuisce il numero dei passeggeri a bordo.
- `attivaSOS(): void`: attiva il segnale di soccorso.
- `disattivaSOS(): void`: disattiva il segnale.
- `getTipoPropulsione(): String`: restituisce `"Motore"`.
- `getDescrizione(): String`: restituisce nome, dislocamento, passeggeri e velocità.
**Vincoli:**
- La capacità massima deve essere maggiore di zero.
- Il numero iniziale di passeggeri è zero.
- Le quantità da imbarcare e sbarcare devono essere strettamente positive.
- Il numero dei passeggeri deve rimanere compreso tra zero e la capacità massima.
- Se si tenta di superare la capacità massima, deve essere lanciata una `CapacitaSuperataException`.
- Se si tenta di sbarcare più passeggeri di quelli presenti, deve essere lanciata un'`IllegalArgumentException`.
### 5.6 Classe `BarcaAVela`
Estende `VeicoloMarino`.
**Attributi aggiuntivi:**
- `nome` (`String`): nome dell'imbarcazione.
- `superficieVele` (`double`): superficie totale delle vele in m².
- `veleIssate` (`boolean`): indica se le vele sono issate.
**Metodi:**
- `getNome(): String`
- `getSuperficieVele(): double`
- `isVeleIssate(): boolean`
- `issaVele(): void`
- `ammainaVele(): void`
- `getTipoPropulsione(): String`: restituisce `"Vela"`.
- `getDescrizione(): String`: restituisce le caratteristiche dell'imbarcazione.
La superficie delle vele deve essere maggiore di zero e il nome deve essere valido.
## 6. Interfacce
Realizzare le seguenti interfacce, utilizzandole esclusivamente nelle classi per cui i comportamenti risultano appropriati.
### 6.1 Interfaccia `TrasportoPasseggeri`
Definisce le funzionalità comuni ai veicoli destinati al trasporto di persone.
**Metodi:**
```
int getCapacitaPasseggeri();
int getNumeroPasseggeriDisponibili();
```
Implementarla nelle classi:
- `Auto`
- `Elicottero`
- `Nave`
Per semplicità, nelle classi `Auto` ed `Elicottero` si considera che tutti i posti siano disponibili. Nella classe `Nave` il numero dei posti disponibili dipende dai passeggeri già imbarcati.
### 6.2 Interfaccia `SegnalazioneEmergenza`
Definisce le funzionalità di segnalazione di un'emergenza.
**Metodi:**
```
void attivaSOS();
void disattivaSOS();
boolean isSOSAttivo();
```
Implementarla nelle classi:
- `Nave`
- `Elicottero`
Per `Elicottero`, i metodi dell'interfaccia devono attivare e disattivare lo stesso stato utilizzato dalla modalità di soccorso. Non devono esistere due stati di emergenza indipendenti.
## 7. Eccezioni personalizzate
Creare le seguenti classi di eccezione.
Tutte devono estendere `Exception`, quindi essere **checked exception**, e devono possedere un costruttore che riceve un messaggio descrittivo.
|Eccezione|Situazione|
|---|---|
|`VelocitaNonConsentitaException`|Un'accelerazione porterebbe il veicolo oltre la velocità massima.|
|`AltitudineNonConsentitaException`|Un veicolo aereo tenta di superare l'altitudine massima.|
|`BatteriaInsufficienteException`|Un drone tenta di consumare più batteria di quella disponibile.|
|`CapacitaSuperataException`|Si tenta di imbarcare un numero di passeggeri superiore ai posti disponibili.|
I metodi che possono generare queste eccezioni devono dichiararle tramite `throws`.
Nel programma principale, le eccezioni devono essere intercettate con `try-catch` e deve essere visualizzato un messaggio che descriva l'errore.
**Importante:** quando un'operazione provoca un'eccezione, lo stato dell'oggetto deve rimanere invariato. Ad esempio, se un veicolo supera la velocità massima richiesta, la sua velocità corrente deve mantenere il valore precedente.
## 8. Gestione dei veicoli — `GestoreVeicoli`
Creare una classe `GestoreVeicoli` che permetta di amministrare una collezione di veicoli.
**Attributi:**
- `veicoli` (`ArrayList<Veicolo>`): collezione contenente i veicoli registrati.
**Metodi:**
- `aggiungiVeicolo(Veicolo veicolo): void`: aggiunge un veicolo, verificando che sia diverso da `null` e che il suo codice non sia già presente.
- `cercaVeicolo(String codice): Veicolo`: restituisce il veicolo corrispondente al codice oppure `null` se assente.
- `rimuoviVeicolo(String codice): boolean`: elimina il veicolo con il codice indicato e restituisce `true` se è stato trovato.
- `getNumeroVeicoli(): int`: restituisce il numero totale di veicoli presenti.
- `mostraVeicoli(): void`: stampa la descrizione di tutti i veicoli registrati.
- `mostraVeicoliTerrestri(): void`: stampa soltanto i veicoli terrestri.
- `mostraVeicoliAerei(): void`: stampa soltanto i veicoli aerei.
- `mostraVeicoliMarini(): void`: stampa soltanto i veicoli marini.
- `calcolaVelocitaMedia(): double`: restituisce la media delle velocità attuali dei veicoli. Se la collezione è vuota, restituisce zero.
Per impedire codici duplicati, utilizzare una `IllegalArgumentException`.
La classe deve utilizzare il polimorfismo per gestire tutti i veicoli attraverso il tipo comune `Veicolo`.
## 9. Programma principale — `Main`
Realizzare un programma `Main` che dimostri il funzionamento dell'intero sistema.
Il programma deve:
1. Creare almeno un oggetto per ciascuna delle sei classi concrete.
2. Inserire tutti i veicoli in un oggetto `GestoreVeicoli`.
3. Stampare l'elenco completo dei veicoli.
4. Accelerare e decelerare almeno due veicoli, mostrando le velocità prima e dopo le operazioni.
5. Simulare la salita e la discesa di un veicolo aereo.
6. Attivare e disattivare almeno una funzionalità specifica per ciascuna categoria di veicoli.
7. Imbarcare e sbarcare passeggeri da una nave.
8. Cercare un veicolo tramite codice e visualizzarne la descrizione.
9. Mostrare separatamente i veicoli terrestri, aerei e marini.
10. Calcolare e stampare la velocità media di tutti i veicoli.
11. Utilizzare un ciclo su una collezione di `Veicolo` per invocare `getDescrizione()`, dimostrando il polimorfismo.
12. Utilizzare `instanceof` per individuare i veicoli che implementano `TrasportoPasseggeri` e stamparne la capacità.
13. Utilizzare `instanceof` per individuare i veicoli che implementano `SegnalazioneEmergenza` e attivarne il segnale di soccorso.
14. Provocare intenzionalmente almeno un errore per ciascuna delle quattro eccezioni personalizzate, gestendolo tramite `try-catch`.
15. Provocare almeno un'`IllegalArgumentException` e verificarne la corretta gestione.
16. Tentare di aggiungere due veicoli con lo stesso codice identificativo.
Non è necessario realizzare menu interattivi o acquisire dati da tastiera: tutte le operazioni possono essere eseguite direttamente nel `main()`.
## 10. Indicazioni per lo sviluppo
- Utilizzare costruttori appropriati e richiamare `super(...)` dove necessario.
- Evitare la duplicazione del codice, sfruttando i metodi già definiti nelle superclassi.
- Utilizzare `@Override` per tutti i metodi ridefiniti o implementati.
- Applicare correttamente l'incapsulamento.
- Usare nomi significativi per attributi, parametri e metodi.
- Validare i parametri ricevuti dai costruttori e dai metodi pubblici.
- Utilizzare `IllegalArgumentException` per i parametri non validi e le eccezioni personalizzate per le specifiche violazioni delle regole del sistema.
- Assicurarsi che `getDescrizione()` restituisca una stringa, senza effettuare direttamente stampe.
- Gestire i valori numerici `double` rifiutando anche `NaN` e valori infiniti.
- È possibile introdurre metodi privati di supporto per organizzare e riutilizzare le operazioni di validazione.
**Nota:** il comportamento di tutti i metodi deve essere coerente con lo stato dell'oggetto. Gli attributi booleani devono essere inizializzati a `false`, salvo diversa indicazione. Le operazioni che impostano uno stato già raggiunto (per esempio accendere luci già accese) devono lasciare invariato lo stato senza generare errori.
## 11. Estensione facoltativa
Per chi termina in anticipo:
Implementare nella classe `GestoreVeicoli` i seguenti metodi:
- `getVeicoloPiuVeloce(): Veicolo`: restituisce il veicolo con la velocità massima più elevata, oppure `null` se la collezione è vuota.
- `contaVeicoliInMovimento(): int`: restituisce quanti veicoli hanno velocità corrente maggiore di zero.
- `fermaTutti(): void`: arresta tutti i veicoli.
- `cercaPerTipo(Class<?> tipo): ArrayList<Veicolo>`: restituisce tutti i veicoli compatibili con il tipo specificato, utilizzando `isInstance()`.
Aggiungere inoltre una nuova classe concreta `Camion` che estende `VeicoloTerrestre`, con capacità di carico e carico attuale, e un'eccezione personalizzata `CaricoEccessivoException` per impedire il superamento della capacità massima.