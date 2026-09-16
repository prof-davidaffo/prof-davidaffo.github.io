# FOCUS 1 — Il Settore Tecnologico Elettrico e l'Impianto Residenziale

## 1. Tre discipline, un unico ecosistema

Quando si parla di "settore elettrico" si intende in realtà un insieme di tre discipline strettamente connesse: **elettrotecnica**, **elettronica** e **automazione**. Nella pratica professionale si intrecciano continuamente, ma ognuna ha un oggetto di studio preciso. Capire dove finisce l'una e dove comincia l'altra è il primo passo per orientarsi nel settore.

### Elettrotecnica

Il punto di partenza storico è l'**elettrologia**: la branca della fisica che studia i fenomeni nei quali intervengono le cariche elettriche. Già nell'antichità (circa 600 a.C.) erano note alcune proprietà elettriche dell'ambra strofinata, ma si trattava di curiosità senza applicazione pratica. L'elettricità rimase un fenomeno affascinante e in larga parte incompreso per molti secoli, finché nel **1799** Alessandro Volta (1745–1827) costruì la prima pila elettrica: per la prima volta era possibile produrre e controllare una corrente elettrica in modo continuativo e ripetibile. Quella data segna convenzionalmente la nascita dell'**elettrotecnica**, la disciplina che non studia la fisica dell'elettricità in sé, ma le sue applicazioni su larga scala: produzione di energia nelle centrali, trasporto attraverso le reti, conversione in movimento nei motori. In sintesi, l'elettrotecnica lavora con grandi quantità di energia e con le macchine che la gestiscono.

Un modo semplice per distinguere elettrotecnica ed elettronica è pensare a **cosa si vuole ottenere dall'elettricità**.

Nell’elettrotecnica l’obiettivo è **trasferire e convertire energia** (accendere un motore, alimentare una casa, trasportare potenza su una rete).

Nell’elettronica, invece, l’obiettivo è **trasferire e trattare informazione** (misurare, comunicare, elaborare segnali).

Questa distinzione è fondamentale: stessa grandezza fisica (corrente elettrica), ma due utilizzi completamente diversi.

### Elettronica

L'**elettronica** nasce da un'esigenza diversa e complementare: trattare segnali elettrici molto deboli — spesso proporzionali a grandezze fisiche come temperatura, pressione o luminosità rilevate da sensori — che non possono essere usati direttamente perché troppo piccoli. L'oggetto dell'elettronica è quindi il segnale a bassa potenza: acquisirlo, amplificarlo, elaborarlo, trasmetterlo.

La storia dell'elettronica è una storia di miniaturizzazione progressiva. Nel **1904** Fleming inventò la valvola termoionica, primo dispositivo capace di amplificare un segnale, ma ingombrante e fragile. Nel **1948** arrivò il transistor a semiconduttore: stesso principio, dimensioni nettamente ridotte. Intorno al **1958** transistor e altri componenti iniziarono a essere integrati insieme in un unico chip di silicio, dando vita ai **circuiti integrati** e alla microelettronica. Il passo successivo, nel **1971**, fu il primo **microprocessore** commercializzato da Intel: una CPU completa su un singolo chip. Da quel momento l'elettronica digitale ha trasformato ogni aspetto della vita quotidiana e industriale.

![[Media/img_3.jpeg]]

### Automazione

L'**automazione** studia le tecniche per far funzionare macchine e processi in modo autonomo, riducendo o eliminando l'intervento diretto dell'uomo. Nata con la prima rivoluzione industriale per migliorare la produttività e ridurre errori e difetti, ha assunto nel tempo anche una dimensione etica: sottrarre l'uomo ai lavori più pericolosi, faticosi e ripetitivi.

L'automazione moderna è per sua natura **interdisciplinare**: per controllare un processo produttivo servono la potenza tipica dell'elettrotecnica, la capacità di elaborare segnali dell'elettronica e gli algoritmi di controllo dell'informatica. Il dispositivo che mette tutto insieme è tipicamente il **PLC** (Programmable Logic Controller), affiancato da microcontrollori e calcolatori dedicati.

Si può quindi leggere l’automazione come il punto di incontro tra le tre discipline:

- l’elettrotecnica fornisce l’energia necessaria al funzionamento
- l’elettronica acquisisce e tratta i segnali provenienti dai sensori
- l’informatica prende decisioni attraverso algoritmi di controllo

Un sistema automatico reale è sempre il risultato della collaborazione di queste tre componenti.

---

## 2. I comparti del settore elettrico

L'industria elettrica è uno dei settori portanti dell'economia italiana, con più della metà della produzione destinata all'esportazione. Si articola in tre macro-comparti che corrispondono alle tre discipline appena descritte: il comparto **elettrotecnico**, quello **elettronico** e quello dell'**automazione**. Molte aziende operano contemporaneamente in più di uno di questi ambiti, il che rende difficile tracciare confini netti, ma la distinzione concettuale rimane utile.

---

### 2.1 Comparto Elettrotecnico

Il comparto elettrotecnico copre l'intera catena dell'energia: dalla produzione alla distribuzione, fino agli apparecchi che la consumano. Seguirla dall'inizio alla fine è il modo più diretto per capire di cosa si occupa questo comparto.

#### Produzione di energia nelle centrali elettriche

Nelle centrali elettriche, qualunque sia la fonte utilizzata, il principio di funzionamento è sempre lo stesso: trasformare l'energia di una fonte primaria in energia elettrica attraverso una catena di conversioni.

![[Media/Power_Generation_Engineering_2.jpg]]

Il primo passaggio riguarda la **turbina**. Una fonte di energia esterna — l'acqua in caduta nelle centrali idroelettriche, il vento in quelle eoliche, il vapore prodotto nelle centrali termoelettriche — viene convogliata sulle pale di una turbina, mettendola in rotazione. L'energia della fonte si trasforma così in **energia meccanica rotatoria**.

![[Media/Power_Generation_Engineering_3.jpg]]

![[Media/Power_Generation_Engineering_5.jpg]]

Il secondo passaggio è la conversione di questa energia meccanica in elettricità, compito affidato all'**alternatore**, una macchina collegata direttamente all'albero della turbina.

L’alternatore è composto da due parti principali:

- lo **statore**, la parte fissa, che contiene gli avvolgimenti di rame;
- il **rotore**, la parte mobile, che genera un campo magnetico.

Quando la turbina fa ruotare l’albero, il rotore genera un **campo magnetico rotante**. Le bobine dello statore sono ferme, ma vengono attraversate da questo campo magnetico che cambia continuamente nel tempo.

![[Media/Power_Generation_Engineering_8.jpg]]
È qui che entra in gioco l’induzione elettromagnetica, descritta dalla legge di Faraday: una tensione elettrica si genera quando varia nel tempo il flusso magnetico che attraversa una bobina.

![[Media/alternatore.jpeg]]

Non è quindi il semplice movimento a generare la tensione, ma la **variazione del campo magnetico**. Nel caso dell’alternatore, questa variazione è causata dalla rotazione del rotore.

Questo è uno dei punti più importanti da capire.

Se il campo magnetico fosse **fermo rispetto alla bobina**, anche con il rotore in movimento non si genererebbe alcuna tensione.

Serve sempre una **variazione del flusso magnetico nel tempo**. Nel caso dell’alternatore questa variazione è ottenuta nel modo più pratico possibile: facendo ruotare un campo magnetico davanti a conduttori fermi.

Qui è importante non confondersi con l'immagine della pila. In una pila o in un generatore in corrente continua si pensa a due morsetti, positivo e negativo, tra cui le cariche vengono separate. Nell’alternatore, invece, la tensione **non** nasce perché un polo elettrico "tira" le cariche e l'altro le "spinge": nasce perché il **campo magnetico variabile induce una forza elettrica nel filo**.

Si può immaginare la bobina come una superficie attraversata da linee di campo magnetico. Durante la rotazione del rotore:

- il flusso magnetico aumenta
- poi diminuisce
- poi si inverte

Questa variazione ciclica genera una tensione che cambia nel tempo, dando origine alla **corrente alternata**.

A questo punto può sorgere una domanda:

> **Se per generare tensione basta far ruotare un campo magnetico davanti alle bobine, perché per produrre grandi quantità di energia elettrica serve fornire molta energia meccanica alla turbina?**

Finché ai morsetti dell'alternatore non è collegato alcun utilizzatore, viene generata una tensione ma circola pochissima corrente. Il rotore può quindi essere mantenuto in movimento con uno sforzo relativamente ridotto, necessario soprattutto a compensare gli attriti e le altre perdite della macchina.

Quando invece l'alternatore alimenta un carico, negli avvolgimenti dello statore comincia a circolare corrente. Questa corrente genera a sua volta un **campo magnetico** che, per la **legge di Lenz**, si oppone alla variazione del flusso magnetico che l'ha prodotta. Si genera quindi una **coppia resistente** che tende a frenare il rotore.

Più potenza elettrica viene richiesta all'alternatore, maggiore è la corrente che deve fornire e maggiore diventa questa opposizione alla rotazione. Per mantenere il rotore alla stessa velocità, la turbina deve quindi esercitare una coppia maggiore e fornire più potenza meccanica.

La relazione fondamentale è:


$$P_{meccanica}=\tau\cdot\omega$$

dove ($\tau$) è la coppia applicata all'albero e ($\omega$) la velocità angolare.

Idealmente, la potenza elettrica prodotta corrisponde alla potenza meccanica fornita:

$$P_{elettrica}\approx P_{meccanica}$$

Nella realtà la potenza meccanica richiesta è leggermente maggiore, perché una parte dell'energia viene persa sotto forma di calore, attrito e altre dissipazioni.

Questo spiega un fatto fondamentale: **l'alternatore non crea energia**. Il campo magnetico permette di trasformare energia meccanica in energia elettrica; quando si richiede più energia elettrica, la sorgente primaria deve fornire più energia alla turbina.

Gli avvolgimenti dello statore non sono costituiti da poche bobine isolate, ma da molte bobine distribuite lungo la circonferenza e inserite nelle cave dello statore. Ogni bobina occupa due zone dello statore, spesso opposte, in modo da intercettare efficacemente il campo magnetico.

Dire che i due lati della bobina sono in posizioni opposte non significa che "si annullano". Significa che i due tratti attivi del filo si trovano in due zone diverse del campo magnetico rotante. Su entrambi i lati il campo variabile induce una tensione; poiché i due lati sono collegati tra loro nello stesso avvolgimento, e orientati in modo opportuno, queste tensioni **si sommano** ai capi della bobina invece di annullarsi.

In altre parole: i poli del rotore sono **poli magnetici**, non morsetti elettrici della bobina. Il loro compito è creare un campo magnetico che cambia rispetto al filo fermo dello statore; è questo cambiamento che mette in moto le cariche nel conduttore.

Le bobine appartenenti alla stessa fase sono collegate tra loro in serie, formando un unico avvolgimento continuo. Dal punto di vista elettrico, quindi, ciascuna fase si comporta come una singola bobina equivalente.

![[Media/Three_Phase_Power_Geometry_page_3_1.jpg]]

Le bobine sono organizzate in tre gruppi distinti:

- fase A
- fase B
- fase C

Questi gruppi sono disposti nello statore in modo intercalato e sfasato di 120° nello spazio. Poiché il campo magnetico rotante li attraversa in istanti diversi, le tensioni generate risultano sfasate di 120° anche nel tempo.

Il risultato è la **corrente alternata trifase**: tre tensioni distinte, sfasate tra loro di 120°.

La scelta di usare tre fasi non è casuale.

Un sistema trifase permette di:

- trasportare più potenza a parità di materiale conduttore
- ottenere campi magnetici rotanti naturali (fondamentali nei motori elettrici)
- ridurre le perdite e migliorare l’efficienza complessiva del sistema

Per questo motivo la trifase è lo standard nella produzione e distribuzione dell’energia elettrica.

Ogni fase ha due estremi. In totale, quindi, si hanno sei terminali: due per ciascuna fase. Questi terminali possono essere collegati tra loro secondo diverse configurazioni.
![[Media/Power_Generation_Engineering_9.jpg]]

Nella produzione e distribuzione dell’energia elettrica è molto comune il collegamento a **stella**. In questa configurazione, un estremo di ciascuna fase viene collegato agli altri due in un unico punto comune chiamato **neutro**.

![[Media/Three_Phase_Power_Geometry_page_9_1.jpg]]

Questo punto non è un centro fisico dell’alternatore, ma un nodo elettrico in cui tre conduttori sono collegati tra loro.

L’altro estremo di ciascuna fase rimane separato e costituisce le tre uscite della rete:

- fase A
- fase B
- fase C

Le tre fasi non si mescolano tra loro: restano tre segnali distinti, ciascuno con il proprio andamento nel tempo, ma riferiti a un punto comune, il neutro.

Il neutro ha il ruolo di riferimento e di conduttore di ritorno. In un sistema trifase perfettamente bilanciato, le correnti delle tre fasi si compensano e nel neutro non scorre corrente. Nella pratica, invece, i carichi non sono mai perfettamente uguali, e quindi nel neutro circola la corrente dovuta allo squilibrio tra le fasi.

È importante non interpretare il neutro come un "filo sempre senza corrente".

Il neutro è un conduttore reale: semplicemente, in condizioni ideali di equilibrio tra le tre fasi, le correnti si compensano e quindi la corrente risultante è nulla.

Appena il sistema si sbilancia, il neutro torna a essere percorso da corrente.

L’energia elettrica prodotta viene poi inviata a un trasformatore che ne aumenta la tensione per il trasporto su lunghe distanze. La rete di trasmissione è quindi costituita da tre fasi separate.

Quando l’energia arriva alle abitazioni, la rete resta trifase, ma normalmente ogni casa utilizza una sola fase più il neutro. Le abitazioni vengono distribuite tra le tre fasi in modo da bilanciare il carico complessivo della rete.
In questo modo, anche se ogni utenza domestica utilizza una sola fase, l’intero sistema elettrico continua a funzionare come un sistema trifase bilanciato.


Dal punto di vista dell'utente finale, questa organizzazione si traduce in due tipi di fornitura. La **fornitura monofase** (tipica delle abitazioni civili, 230 V) usa tre conduttori: la **fase (L)**, che porta la tensione; il **neutro (N)**, collegato a terra in prossimità del trasformatore; il **conduttore di protezione (PE)**, che collega le masse metalliche dell'impianto alla terra dell'edificio. La **fornitura trifase** (per utenze industriali o servizi condominiali) usa invece tre fasi (L₁, L₂, L₃) più il neutro e mette a disposizione **400 V** tra due fasi qualsiasi e **230 V** tra una fase e il neutro.

La **terra dell'edificio**, o **impianto di terra**, non è un conduttore usato per alimentare normalmente gli apparecchi. È un sistema di sicurezza formato da elementi metallici infissi nel terreno, detti **dispersori**, e da conduttori che collegano a questi dispersori le parti metalliche accessibili dell'impianto. Il suo scopo è offrire alla corrente di guasto un percorso verso il terreno, in modo che una carcassa metallica non resti pericolosamente in tensione e che i dispositivi di protezione possano intervenire.

![[Media/Three_Phase_Power_Geometry_page_13_1.jpg]]

In pratica, quando si collega un elettrodomestico alla presa di casa, si sta utilizzando **una sola fase del sistema trifase generale**.

La complessità della produzione e distribuzione dell’energia resta quindi nascosta all’utente finale, che vede semplicemente una tensione "costante" di 230 V, ma che in realtà è parte di un sistema molto più articolato.

La tensione tra fase e neutro si chiama **tensione di fase**; quella tra due fasi si chiama **tensione concatenata**. In un sistema trifase simmetrico vale la relazione:

$$\boxed{V_{conc} = \sqrt{3} \cdot V_{fase}} \quad \Rightarrow \quad 400 \text{ V} \approx \sqrt{3} \cdot 230 \text{ V}$$

![[Media/Three_Phase_Power_Geometry_page_11_1.jpg]]


![[Media/Power_Generation_Engineering_10.jpg]]

#### Produzione di energia da fonti rinnovabili: impianti fotovoltaici
Accanto alle grandi centrali, il comparto comprende impianti di piccola e media dimensione per la produzione da fonti rinnovabili. Il più diffuso in ambito civile è l'**impianto fotovoltaico**, che si basa sull'**effetto fotovoltaico**: alcuni materiali semiconduttori, quando esposti alla luce solare, liberano elettroni che scorrono attraverso il materiale generando corrente. Non ci sono parti in movimento: è la luce a spingere direttamente gli elettroni.


A differenza delle centrali tradizionali, qui non c’è alcuna conversione in energia meccanica: l’energia della luce viene trasformata direttamente in energia elettrica.

![[Media/The_Flow_of_Light_page_2_1.jpg]]

Questo rende gli impianti fotovoltaici più semplici dal punto di vista meccanico, ma introduce complessità nella gestione elettronica e nell’integrazione con la rete.

L'elemento base è la **cella fotovoltaica**. Una cella è una piccola superficie di materiale semiconduttore che, quando viene illuminata, genera una tensione molto bassa. Da sola produce poca energia: non basta per alimentare un'abitazione o un apparecchio significativo.

![[Media/The_Flow_of_Light_page_3_1.jpg]]

Per questo motivo le celle non si usano quasi mai isolate. Molte celle vengono collegate e racchiuse in una struttura rigida e protetta: quello che nel linguaggio comune chiamiamo **pannello solare**. In modo più preciso si parla di **modulo fotovoltaico**.

![[Media/The_Flow_of_Light_page_4_1.jpg]]

Un impianto reale è quindi costruito per livelli successivi:

```
Celle  →  Pannello/modulo  →  Gruppo di pannelli  →  Impianto fotovoltaico
```

Il principio è lo stesso già visto nei circuiti elettrici: collegando più elementi si ottengono valori più adatti all'uso pratico. Se più pannelli vengono collegati in **serie**, le loro tensioni si sommano: ad esempio, pannelli che producono ciascuno una certa tensione possono formare insieme una tensione complessiva più alta. Se più gruppi vengono collegati in **parallelo**, invece, la tensione resta la stessa ma aumenta la corrente disponibile. In questo modo si passa dalla piccola energia prodotta da una singola cella alla potenza utile di un impianto.

![[Media/The_Flow_of_Light_page_5_1.jpg]]

La corrente prodotta dai pannelli è **continua** (DC): i morsetti positivo e negativo restano sempre gli stessi e la corrente scorre sempre nello stesso verso. La rete domestica, invece, funziona in **corrente alternata** (AC): fase e neutro sono alimentati da una tensione sinusoidale che cambia continuamente valore e verso, 50 volte al secondo in Europa.

![[Media/The_Flow_of_Light_page_6_1.jpg]]

Per collegare i pannelli alla casa e alla rete serve quindi un **inverter**. Il suo compito è trasformare la corrente continua dei pannelli in corrente alternata utilizzabile dagli apparecchi domestici.

![[Media/The_Flow_of_Light_page_7_1.jpg]]

A livello di principio, l'inverter lavora in tre passaggi:

1. riceve l'energia in corrente continua dai pannelli;
2. tramite interruttori elettronici di potenza, commuta molto rapidamente la corrente, trasformandola in una forma alternata;
3. regola questa forma d'onda in modo che abbia tensione, frequenza e sincronismo compatibili con la rete elettrica.

![[Media/The_Flow_of_Light_page_8_1.jpg]]

L'idea di base è quindi questa: l'inverter non "crea" energia nuova, ma **modifica il modo in cui l'energia elettrica si presenta**. Dai pannelli arriva energia in DC; all'uscita dell'inverter esce energia in AC, adatta agli utilizzatori domestici e alla rete.

Per questo l'inverter non è un semplice adattatore: è un'apparecchiatura di **elettronica di potenza**, perché deve convertire e controllare energia elettrica con tensioni e correnti significative. Il fotovoltaico appartiene quindi all'elettrotecnica per la produzione di energia, ma richiede anche elettronica per la conversione e il controllo.

Completano l'impianto i **quadri di protezione** e i contatori. Un quadro di protezione è un piccolo quadro elettrico che contiene dispositivi di sezionamento e sicurezza: serve a interrompere il circuito in caso di manutenzione o di guasto, e a proteggere le linee da sovratensioni, sovracorrenti o dispersioni.

Nel fotovoltaico ci sono normalmente più punti da proteggere, perché l'energia attraversa parti diverse dell'impianto:

- il **quadro DC** si trova tra pannelli e inverter, quindi lavora sul lato in corrente continua;
- il **quadro AC** si trova dopo l'inverter, quindi lavora sul lato in corrente alternata;
- il **quadro generale** collega l'impianto fotovoltaico all'impianto elettrico dell'edificio e alla rete.

In questo modo ogni tratto del percorso viene protetto con dispositivi adatti al tipo di corrente che lo attraversa. Non si protegge allo stesso modo il lato DC dei pannelli e il lato AC collegato alla rete domestica.

![[Media/The_Flow_of_Light_page_9_1.jpg]]

Negli impianti **grid-connected** — collegati in parallelo alla rete del distributore — due contatori svolgono ruoli distinti: il **contatore di scambio** (bidirezionale) misura quanta energia viene immessa in rete e quanta ne viene prelevata; il **contatore di produzione** registra tutta l'energia generata dall'impianto.

![[Media/The_Flow_of_Light_page_10_1.jpg]]

Il funzionamento pratico è semplice: quando la produzione dei pannelli supera il consumo della casa, l'eccedenza viene immessa in rete; quando invece i pannelli non producono abbastanza, ad esempio di sera o con poca luce, l'abitazione preleva energia dalla rete. I moderni impianti possono includere anche un **sistema di accumulo** (batterie sul lato DC) per stoccare l'energia prodotta in eccesso, aumentare l'autoconsumo e ridurre la dipendenza dalla rete.

![[Media/The_Flow_of_Light_page_11_1.jpg]]

Lo schema complessivo riassume il percorso dell'energia: luce solare, pannelli, inverter, protezioni, utenze domestiche e rete elettrica.

![[Media/The_Flow_of_Light_page_12_1.jpg]]

#### Dalla distribuzione all'utilizzo dell'energia

Una volta prodotta, l'energia elettrica deve essere **trasportata, distribuita, protetta, comandata e infine utilizzata**. Questa parte del comparto elettrotecnico non riguarda quindi un solo prodotto, ma una catena di oggetti collegati tra loro. Per non perdere il filo, conviene leggerli sempre in base alla posizione che occupano nel percorso dell'energia.

##### Componenti per distribuire, comandare, proteggere e utilizzare

I componenti elettrotecnici si possono leggere a partire dalla funzione che svolgono nell'impianto.

|Componente|Funzione principale|Esempio d'uso|
|---|---|---|
|Conduttori|Trasportano energia elettrica|Linee di alimentazione, montanti, circuiti luce e prese|
|Quadri elettrici|Raccolgono e coordinano protezioni, comandi e linee|Centralino domestico, quadro di distribuzione industriale|
|Interruttori|Aprono o chiudono un circuito|Sezionamento generale o comando di una linea|
|Contattori|Comandano carichi di potenza con un circuito di comando|Motori, linee industriali, carichi automatici|
|Relè|Separano comando e circuito controllato|Automazioni, comandi a distanza, logiche semplici|
|Salvamotori|Proteggono i motori da sovraccarichi e anomalie|Avviamento e protezione di motori elettrici|
|Apparecchi utilizzatori|Trasformano l'energia elettrica in un effetto utile|Lampade, elettrodomestici, motori|

La tabella non va interpretata come un elenco di oggetti separati. In un impianto reale questi elementi lavorano insieme: i conduttori portano energia, il quadro la suddivide e la protegge, gli apparecchi di comando decidono quando alimentare un carico e gli utilizzatori trasformano l'energia in luce, movimento, calore o lavoro meccanico. Lo stesso percorso si ritrova in scala ridotta nell'impianto residenziale, che è il caso più vicino all'esperienza quotidiana.

#### Caso studio: l'impianto elettrico residenziale

Un'abitazione non è solo un insieme di prese e interruttori: è un piccolo sistema di distribuzione dell'energia. Riceve potenza dalla rete pubblica, la porta al centralino, la divide in circuiti, la protegge dai guasti e la rende disponibile agli utilizzatori finali.

Studiare l'impianto residenziale permette di vedere in forma concreta molti concetti fisici che saranno ripresi nel Focus 2 — carica, tensione, corrente, resistenza, potenza ed effetto Joule — perché ogni scelta impiantistica dipende da questi fenomeni.

##### 1. Dalla rete all'abitazione

L'energia elettrica viene prodotta nelle centrali ad altissima tensione e trasportata su lunghe distanze prima di essere trasformata in una forma adatta agli impianti civili. Trasmettere a tensione elevata riduce drasticamente le perdite per effetto Joule nei cavi: a parità di potenza trasportata, una tensione più alta implica una corrente più bassa, e le perdite dipendono da $R \cdot I^2$.

Il percorso dalla centrale all'utente può essere schematizzato in quattro livelli:

1. **Centrale elettrica** → produce energia in **alta tensione (AT)**, decine o centinaia di kV.
2. **Rete di trasmissione nazionale** → trasporta l'energia su grandi distanze.
3. **Cabine di trasformazione** → abbassano la tensione da AT a **media tensione (MT)**, poi da MT a **bassa tensione (BT)** (230/400 V) tramite trasformatori da palo vicini all'utenza.
4. **Impianto dell'utente** → distribuisce l'energia all'interno dell'edificio.

![[Media/Photon_to_Code_page_7_1.jpg]]

###### Classificazione degli impianti per livello di tensione

|Categoria|Tensione nominale|Descrizione|
|---|---|---|
|0|V_n ≤ 50 V|Bassissima tensione|
|1|50 V < V_n ≤ 1.000 V|Bassa tensione (civile/industriale leggero)|
|2|1.000 V < V_n ≤ 30.000 V|Media tensione|
|3|V_n > 30.000 V|Alta tensione|

---

##### 2. La corrente alternata distribuita in rete

L'energia viene distribuita in **corrente alternata sinusoidale**: un segnale che oscilla ritmicamente tra valori positivi e negativi. Capire i suoi parametri è necessario per interpretare le specifiche di qualsiasi componente dell'impianto.

Dire che la corrente è **alternata** significa che il moto delle cariche cambia verso periodicamente. Gli elettroni nel conduttore non viaggiano una volta per tutte dalla centrale fino all'elettrodomestico: oscillano avanti e indietro attorno alla loro posizione. Quello che si trasferisce lungo il circuito è l'**energia elettrica**.

Gli utilizzatori sfruttano entrambe le semionde della corrente. Una resistenza, per esempio, si riscalda sia quando la corrente scorre in un verso sia quando scorre nel verso opposto, perché l'effetto Joule dipende dall'intensità della corrente e non dal suo verso. Altri apparecchi, come alimentatori e dispositivi elettronici, trasformano poi internamente la corrente alternata in corrente continua.

![[Media/Photon_to_Code_page_6_1.jpg]]

Il **periodo T** è il tempo per completare un'oscillazione completa; la **frequenza f** è il numero di oscillazioni al secondo ($f = 1/T$). Il **valore massimo V_M** è l'ampiezza di picco. Il **valore efficace V** è il parametro più utile in pratica: è il valore di tensione continua che, applicata allo stesso resistore per lo stesso tempo, svilupperebbe la stessa quantità di calore. Lo stesso ragionamento vale per la corrente: anche in AC si usano normalmente i **valori efficaci** di tensione e corrente.

$$\boxed{V = \frac{V_M}{\sqrt{2}}} \approx 0{,}707 \cdot V_M$$

In Europa la frequenza è **50 Hz** (T = 20 ms). La tensione efficace di rete è **230 V**, quindi il valore di picco è $V_M = 230 \cdot \sqrt{2} \approx 325 \text{ V}$: valore molto più elevato di quello indicato sui componenti, ma che dura solo un istante.

---

##### 3. Fornitura monofase, trifase e conduttori principali

La distinzione tra **fornitura monofase** e **fornitura trifase** è già stata introdotta in precedenza, nel punto in cui si segue il passaggio dall'alternatore alla distribuzione verso le utenze. Nel contesto dell'impianto residenziale basta ricordare che l'abitazione ordinaria riceve normalmente una **fase + neutro + PE (_Protective Earth_)** a **230 V**, mentre utenze più impegnative possono richiedere una fornitura **trifase**.

La **fase** è il conduttore attivo: rispetto al neutro presenta la tensione alternata di rete. Il **neutro** è il conduttore di ritorno del circuito. Il **PE** (_Protective Earth_) non serve invece al funzionamento ordinario degli apparecchi: è un conduttore di sicurezza, collegato alle masse metalliche, che deve offrire un percorso controllato alla corrente in caso di guasto.

---

##### 4. Dal contatore ai circuiti interni

L'impianto residenziale è dimensionato in funzione della **potenza impegnata** e dei carichi previsti. Per capirlo non conviene partire dai singoli componenti isolati, ma dal percorso dell'energia dentro l'abitazione: ingresso dalla rete, protezione nel centralino, distribuzione nei locali, comando degli utilizzatori.

Il primo elemento è il **contatore**, che segna il confine tra la rete del distributore e l'impianto privato. Misura l'energia consumata in **kWh** e comunica i dati al gestore attraverso la stessa linea elettrica di distribuzione, con la tecnica delle "onde convogliate", senza bisogno di una rete dati separata.

Il contatore è anche associato alla **potenza contrattuale** disponibile. In una fornitura domestica ordinaria, se la potenza assorbita supera per troppo tempo quella impegnata, può interrompere l'alimentazione. Questa funzione non va però confusa con la protezione dell'impianto: il contatore limita la fornitura, mentre la protezione dei cavi e delle persone è affidata ai dispositivi del centralino.

Dal contatore parte il **montante**, cioè il cavo multipolare che alimenta il centralino dell'abitazione. Come tutti i conduttori, è formato da rame rivestito da materiale isolante ed è caratterizzato da due grandezze fondamentali: la **sezione** del cavo, espressa in mm², e la **portata I_Z**, cioè la corrente massima che può scorrere in modo permanente senza provocare surriscaldamento per effetto Joule.

|Sezione [mm²]|Portata [A]|
|---|---|
|1,5|15,5|
|2,5|21|
|4|28|
|6|36|
|10|50|

La scelta della sezione non dipende solo dalla corrente, ma anche dalla lunghezza del collegamento: più un cavo è lungo, maggiore è la sua resistenza e quindi maggiore è la caduta di tensione lungo il percorso. Per questo il montante deve essere dimensionato tenendo conto della distanza tra contatore e centralino.

|Lunghezza massima [m]|Sezione [mm²]|
|---|---|
|17|6|
|29|10|
|45|16|

I cavi non vengono murati direttamente: scorrono dentro **tubi guidacavo corrugati**, posati nelle pareti prima dell'infilaggio dei conduttori. La forma a onde rende il tubo flessibile nelle curve e resistente dal punto di vista meccanico, permettendo anche eventuali sostituzioni o aggiunte successive.

Il montante arriva al **centralino**, o **QUA** (_Quadro di Unità Abitativa_), che è il vero nodo dell'impianto domestico. Il centralino è un esempio concreto di **quadro elettrico di bassa tensione (BT)**: un contenitore, metallico o isolante, nel quale vengono montati e collegati in modo ordinato i dispositivi di protezione, sezionamento e distribuzione. In bassa tensione si lavora fino a **1.000 V in corrente alternata** e **1.500 V in corrente continua**; l'impianto domestico, con i suoi 230 V, rientra quindi in questa categoria.

La funzione del quadro non è solo "contenere interruttori". Da qui l'energia viene distribuita ai circuiti interni e, soprattutto, viene protetta. Nel centralino devono essere presenti un **interruttore generale**, dimensionato in base alla potenza contrattuale, e più **interruttori magnetotermici**, ognuno associato a un circuito.

La suddivisione in circuiti è una scelta tecnica essenziale. Una linea luci, una linea prese e una linea per un carico impegnativo non assorbono la stessa corrente e non usano cavi della stessa sezione; quindi non possono essere protette nello stesso modo. Separare le linee permette anche di isolare un guasto o un sovraccarico senza togliere alimentazione a tutta l'abitazione.

In un quadro, quindi, i dispositivi non vengono scelti a caso: devono essere coordinati con le linee che proteggono. La corrente nominale degli interruttori deve essere compatibile con la sezione dei cavi, le protezioni devono intervenire nel punto giusto dell'impianto e i circuiti devono essere separati in modo da evitare che un problema locale fermi tutta la casa.

![[Media/Architettura_Elettrica_page_5_1.jpg]]

![[Media/The_Modern_Electrical_Blueprint_page_5_1.jpg]]

![[Media/img_26.jpeg]]

L'interruttore magnetotermico è dimensionato sulla **corrente nominale I_n**: il valore massimo di corrente che può scorrere indefinitamente senza aprire i contatti. Se la corrente supera I_n per abbastanza tempo, l'interruttore scatta, proteggendo il cavo dal surriscaldamento per effetto Joule.

Un magnetotermico non è quindi solo un interruttore comandato a mano. Dentro contiene:

- una coppia di **contatti elettrici**, che normalmente sono chiusi e lasciano passare la corrente;
- una **leva di comando**, usata per aprire o richiudere manualmente il circuito;
- un meccanismo di **sgancio automatico**, che separa i contatti quando rileva una corrente pericolosa;
- due organi di controllo: uno **termico** e uno **magnetico**.

![[Media/Architettura_Elettrica_page_6_1.jpg]]

La parte **termica** è legata al calore prodotto dalla corrente. In genere è realizzata con una **lamina bimetallica**, cioè una lamina formata da due metalli diversi saldati insieme. Quando la corrente è troppo alta per un certo tempo, la lamina si scalda, si deforma e aziona il meccanismo di sgancio. Questo intervento non è immediato: serve per i **sovraccarichi**, per esempio quando su una linea prese sono collegati troppi apparecchi e il cavo rischia di scaldarsi lentamente.

La parte **magnetica** è invece una piccola **bobina** attraversata dalla corrente del circuito. Se la corrente aumenta bruscamente, il campo magnetico generato dalla bobina diventa molto intenso e attira rapidamente un elemento mobile, provocando lo sgancio quasi istantaneo. Questo intervento serve per i **cortocircuiti**, nei quali la corrente cresce in modo violento e deve essere interrotta subito.

Il nome **magnetotermico** indica quindi l'unione di questi due meccanismi: **termico** per correnti troppo alte ma prolungate, **magnetico** per correnti enormi e improvvise. In entrambi i casi l'obiettivo è proteggere soprattutto i conduttori, non l'apparecchio collegato alla presa.

![[Media/Architettura_Elettrica_page_8_1.jpg]]

![[Media/img_27.jpeg]]

|Circuito|Sezione cavo [mm²]|I_n interruttore [A]|
|---|---|---|
|Luci|1,5|10|
|Prese|2,5|16|
|Piano cottura a induzione|4|25|

Oltre agli interruttori magnetotermici, la norma prescrive almeno due **interruttori differenziali** per la protezione delle persone dall'**elettrocuzione**, cioè dal passaggio di corrente attraverso il corpo umano. Il rischio può nascere da un **contatto diretto**, quando si tocca una parte normalmente in tensione, oppure da un **contatto indiretto**, quando si tocca una massa metallica che è diventata in tensione a causa di un guasto dell'isolamento.

L'interruttore differenziale, detto anche **salvavita** quando è ad alta sensibilità, non controlla quanta corrente assorbe il circuito come fa il magnetotermico. Controlla invece se la corrente che entra dalla fase è uguale a quella che ritorna dal neutro. In condizioni normali le due correnti sono uguali; se una parte della corrente si disperde verso terra, per esempio attraverso una carcassa guasta o attraverso il corpo di una persona, la corrente di ritorno diventa minore. Il differenziale rileva questa differenza e apre il circuito in pochi millisecondi.

![[Media/The_Modern_Electrical_Blueprint_page_6_1.jpg]]

Negli impianti civili italiani è tipico il sistema **TT**, una sigla che indica come sono collegati a terra il distributore e l'utente. La prima **T** significa che il neutro del distributore è collegato a terra; la seconda **T** significa che anche l'impianto dell'utente ha un proprio impianto di terra, separato da quello del distributore.

Il conduttore **PE** (_Protective Earth_, cioè conduttore di protezione) è il filo di terra dell'impianto. È il conduttore giallo-verde che collega le parti metalliche accessibili, per esempio la carcassa di un elettrodomestico, all'impianto di terra. Normalmente non porta corrente: serve solo in caso di guasto.

Se un conduttore di fase tocca la carcassa di un elettrodomestico, il PE offre alla corrente di guasto un percorso verso terra; il differenziale rileva che una parte della corrente non sta tornando dal neutro e interviene. I differenziali ad alta sensibilità intervengono per correnti di dispersione fino a **30 mA**, valore scelto come compromesso tra protezione delle persone e continuità di servizio.

Magnetotermico e differenziale rispondono quindi a problemi diversi: il **magnetotermico** protegge soprattutto i cavi da sovraccarichi e cortocircuiti, mentre il **differenziale** protegge soprattutto le persone dalle dispersioni verso terra. Il salvavita non è però infallibile: non interviene per dispersioni inferiori alla sua soglia, né in caso di contatto simultaneo con fase e neutro, perché in quel caso la corrente che entra e quella che ritorna possono risultare ancora uguali.


Dopo il centralino inizia la distribuzione interna verso gli **apparecchi utilizzatori**, cioè i dispositivi che trasformano l'energia elettrica in un effetto utile: una lampada produce luce, un forno produce calore, un elettrodomestico o un motore elettrico producono movimento o lavoro meccanico. I cavi passano nei tubi corrugati e raggiungono le **scatole di derivazione**, che sono punti di smistamento nascosti nelle pareti: da una linea principale partono più diramazioni verso prese, luci e comandi. Da qui i conduttori arrivano alle **scatole portafrutti**, cioè le scatole incassate che ospitano i moduli visibili sulla parete. I **frutti** sono proprio questi moduli: prese, interruttori, deviatori, pulsanti e simili.

![[Media/Architettura_Elettrica_page_9_1.jpg]]

![[Media/img_30.jpeg]]

![[Media/img_29.jpeg]]

Le **prese** servono ad alimentare utilizzatori mobili, come caricabatterie o elettrodomestici. Gli **apparecchi di comando**, invece, servono soprattutto ad accendere e spegnere utilizzatori fissi, come le lampade. Non proteggono l'impianto: modificano solo il percorso della fase verso il carico. La protezione resta affidata agli interruttori nel centralino.

![[Media/img_28.jpeg]]

![[Media/Architettura_Elettrica_page_10_1.jpg]]

Il caso più semplice è l'**interruttore unipolare**, usato per comandare una luce da un solo punto. Ha due morsetti e agisce solo sulla **fase**:

1. la fase arriva dal circuito luci ed entra nel primo morsetto dell'interruttore;
2. dal secondo morsetto parte il filo che va alla lampada;
3. il neutro non passa dall'interruttore: arriva direttamente alla lampada;
4. il PE, se necessario, collega a terra le parti metalliche dell'apparecchio.

Quando l'interruttore è chiuso, la fase può raggiungere la lampada e il circuito è completo: fase → interruttore → lampada → neutro. Quando l'interruttore è aperto, la fase si interrompe prima della lampada e la lampada resta spenta.

![[Media/Architettura_Elettrica_page_11_1.jpg]]

Il **deviatore** si usa quando la stessa luce deve essere comandata da due punti, per esempio all'inizio e alla fine di un corridoio. Non ha due morsetti come un interruttore, ma **tre**:

- un morsetto **comune**;
- due morsetti di uscita alternativi, spesso chiamati **navette** o **corrispondenti**.

Il collegamento tipico funziona così:

1. la fase entra nel morsetto comune del primo deviatore;
2. le due uscite del primo deviatore sono collegate ai due morsetti corrispondenti del secondo deviatore con due fili intermedi;
3. il morsetto comune del secondo deviatore va alla lampada;
4. il neutro arriva direttamente alla lampada.

Il deviatore non si limita ad aprire o chiudere: sceglie quale dei due fili intermedi collegare al proprio comune. Se i due deviatori sono "allineati" sullo stesso filo intermedio, la fase arriva alla lampada e la luce è accesa. Se sono posizionati su fili diversi, il percorso si interrompe e la luce è spenta. Azionando uno qualunque dei due deviatori, si cambia sempre lo stato della lampada.

![[Media/deviatore.png]]
L'**invertitore** si usa quando i punti di comando diventano tre o più. I due deviatori restano sempre alle estremità del circuito; l'invertitore si inserisce in mezzo, sui due fili intermedi che collegano i deviatori. Ha quindi **quattro morsetti**: due in ingresso e due in uscita.

Il suo compito è scambiare i due percorsi:

1. in una posizione collega i fili in modo diretto: alto con alto, basso con basso;
2. nell'altra posizione li incrocia: alto con basso, basso con alto.

Per questo si chiama invertitore: non porta direttamente la fase alla lampada e non lavora da solo, ma **inverte** il collegamento tra i due deviatori. Quando viene azionato, modifica l'allineamento dei percorsi intermedi e quindi cambia lo stato della luce. Per aggiungere altri punti di comando, si inseriscono altri invertitori in serie tra i due deviatori.

![[Media/invertitore.png]]

Fin qui il comando della lampada avviene con interruttori, deviatori e invertitori: sono apparecchi che restano nella posizione in cui vengono lasciati. Esiste però anche un'altra soluzione, usata spesso quando i punti di comando sono molti: **pulsanti monostabili + relè passo-passo**.

Il **pulsante monostabile** è il classico pulsante da parete che chiude il contatto solo mentre viene premuto e poi torna da solo nella posizione iniziale. Da solo non rimane acceso o spento: dà solo un comando momentaneo. Per questo si usa per campanelli, suonerie e ronzatori.

Per comandare una lampada con un pulsante serve un **relè passo-passo**. Il pulsante, infatti, non deve alimentare direttamente la lampada: deve alimentare solo per un istante la **bobina del relè**. Quando la bobina riceve corrente, si comporta come un piccolo elettromagnete e fa scattare un contatto interno. Quel contatto, non il pulsante, apre o chiude il circuito della lampada.

La cosa da ricordare è che nel relè ci sono sempre due parti:

1. il **circuito di comando**, dove sono collegati i pulsanti e la bobina del relè;
2. il **circuito comandato**, dove il contatto del relè alimenta o disalimenta la lampada.

Nel circuito di comando si possono collegare **più pulsanti in parallelo**. Questo significa che ogni pulsante, anche se si trova in un punto diverso della stanza o del corridoio, può chiudere per un istante lo stesso circuito della bobina. Non importa quale pulsante viene premuto: tutti danno lo stesso impulso al relè.

Qui è importante distinguere due casi. In un **relè normale**, quando la bobina non è più alimentata, il contatto torna nella posizione di riposo. Quindi un relè normale non è adatto, da solo, a mantenere una lampada accesa dopo che il pulsante è stato rilasciato.

Nel **relè passo-passo**, invece, l'impulso alla bobina fa avanzare un piccolo meccanismo interno. Il contatto cambia posizione e poi rimane in quella posizione anche quando la bobina non è più alimentata. Per questo il relè passo-passo può "ricordare" se la lampada deve restare accesa o spenta.

Il funzionamento si può leggere così:

1. si preme il pulsante;
2. il pulsante chiude per un attimo il circuito di comando;
3. per quell'istante la bobina del relè viene alimentata;
4. il relè passo-passo scatta e cambia la posizione del suo contatto;
5. si lascia il pulsante e la bobina non è più alimentata;
6. il contatto del relè resta però nella nuova posizione.

In pratica:

1. al primo impulso il contatto del relè si chiude e la lampada resta accesa;
2. al secondo impulso il contatto del relè si apre e la lampada resta spenta;
3. agli impulsi successivi continua ad alternare acceso e spento.

Si chiama "passo-passo" proprio perché avanza di uno stato a ogni pressione del pulsante. Questa soluzione è comoda quando la stessa luce deve essere comandata da molti punti: invece di usare due deviatori e uno o più invertitori collegati tra loro, si mettono semplicemente più pulsanti in parallelo sul circuito di comando. Il cablaggio diventa più semplice, perché i pulsanti devono solo inviare un impulso alla bobina; il percorso della corrente della lampada viene invece gestito dal contatto del relè.

Per rappresentare questi collegamenti si usano gli **schemi funzionali**. Non mostrano dove si trovano fisicamente scatole e tubi, ma come sono collegati elettricamente fase, neutro, comandi e lampade. Servono quindi a seguire il percorso della corrente e a capire che cosa cambia quando un interruttore, un deviatore o un invertitore viene azionato.

Potete provare in modo interattivo i vari tipi di interruttori qui:

[Interruttori interattivi](https://prof-davidaffo.github.io/pages/esercizi-elettrotecnica-elettronica-automazione.html#comandi)

---

### 2.2 Comparto Elettronico

Nel comparto elettrotecnico l'attenzione era rivolta soprattutto all'energia: produrla, distribuirla, proteggerla e usarla. Nel comparto elettronico cambia il punto di vista. L'elettricità non serve prima di tutto a trasferire potenza, ma a rappresentare **informazioni**: una temperatura misurata da un sensore, un comando premuto da un utente, un dato salvato in memoria, un segnale video trasmesso da una telecamera.

Il punto chiave è questo: un segnale elettrico non interessa solo perché "porta corrente", ma perché il suo valore significa qualcosa. Una tensione può indicare che una porta è chiusa, che una stanza è calda, che un motore gira troppo lentamente, che una telecamera sta inviando un'immagine. L'elettronica serve a rendere questi segnali leggibili, affidabili e utilizzabili.

Per capire il comparto elettronico conviene seguire la costruzione di un dispositivo reale. Prima c'è qualcosa da misurare o comandare; poi servono componenti che trasformano e adattano i segnali; poi serve un dispositivo programmabile che li interpreti; infine tutto deve essere montato su una scheda e integrato in un prodotto o in un impianto.

Il percorso logico è quindi:

```
Grandezza fisica  →  segnale elettrico  →  componenti  →  elaborazione  →  scheda  →  prodotto
```

Un esempio semplice è la scheda di controllo di una lavatrice. I sensori rilevano livello dell'acqua, temperatura, chiusura dello sportello e velocità del motore. I componenti elettronici adattano questi segnali, il programma li interpreta e il sistema decide quando caricare acqua, riscaldarla, avviare il cestello o bloccare il ciclo. Dentro un apparecchio che sembra soprattutto meccanico ed elettrico c'è quindi un sistema elettronico che misura, decide e comanda.

#### Dal mondo fisico al segnale

Molti segnali elettronici nascono da una misura. Un sensore trasforma una grandezza fisica in una grandezza elettrica: una temperatura può diventare una tensione, una pressione può diventare una variazione di resistenza, la luce può diventare una corrente molto piccola. Questi segnali sono spesso deboli, disturbati o non direttamente adatti all'elaborazione digitale.

Per questo, prima di arrivare al "cervello" del sistema, il segnale deve spesso essere condizionato: amplificato, filtrato, confrontato con una soglia o convertito in forma digitale. È qui che si capisce la differenza rispetto all'elettrotecnica: non si sta cercando di trasferire molta energia, ma di non perdere il significato del segnale.

#### Componenti elettronici: attivi e passivi

Per condizionare, proteggere e manipolare un segnale servono componenti elettronici. Alcuni svolgono funzioni semplici ma indispensabili: limitano correnti, filtrano disturbi, accumulano energia per brevi istanti. Altri permettono di commutare, amplificare o realizzare funzioni logiche.

Da qui nasce la distinzione tra **componenti passivi** e **componenti attivi**. I componenti passivi — per esempio resistenze e condensatori — non creano né amplificano un segnale: possono solo dissipare, limitare o immagazzinare energia. I componenti attivi — transistor, amplificatori operazionali, circuiti integrati — possono invece controllare il passaggio della corrente, amplificare un segnale o commutare tra due stati.

Questa distinzione serve a capire cosa succede prima dell'elaborazione vera e propria: il segnale proveniente da un sensore viene limitato, filtrato, amplificato o convertito finché può essere usato da un circuito digitale. A quel punto non basta più parlare dei singoli componenti: bisogna capire quale dispositivo interpreta quei segnali e decide le uscite.

#### Microprocessori e microcontrollori: qual è la differenza?

Quando il segnale è pronto per essere usato, il sistema deve confrontarlo con una soglia, trasformarlo in un numero, memorizzarlo o generare una risposta. Al centro di questo lavoro c'è spesso un dispositivo programmabile, ma non tutti i dispositivi programmabili sono uguali.

Un computer generico può essere pensato come l'insieme di tre blocchi: una **CPU**, che esegue le istruzioni; una **memoria**, che conserva programma e dati; alcune interfacce di **I/O**, che permettono al sistema di comunicare con tastiere, schermi, sensori, motori o reti di comunicazione. Questi blocchi scambiano segnali attraverso i **bus**, cioè percorsi elettrici condivisi organizzati per funzione. La differenza tra microprocessore e microcontrollore dipende da quanti di questi blocchi sono integrati nello stesso chip.

Un **microprocessore** contiene essenzialmente la CPU: è potente e flessibile, ma per funzionare ha bisogno di memorie, interfacce e molti altri circuiti esterni. È la scelta tipica dei sistemi general-purpose, cioè dispositivi che devono eseguire molti programmi diversi, come PC e smartphone.

Un **microcontrollore**, invece, integra nello stesso chip CPU, memorie e interfacce di I/O. Richiede pochi componenti esterni, consuma poca energia e costa poco. Non nasce per fare tutto, ma per fare bene una funzione precisa e ripeterla in modo affidabile: leggere un sensore, prendere una decisione, pilotare un attuatore.

Per questo un forno a microonde, una lavatrice, un termostato o una centralina elettronica usano microcontrollori. Non devono comportarsi come computer completi: devono eseguire sempre lo stesso programma, reagendo agli ingressi e comandando le uscite.

| |Microprocessore (CPU)|Microcontrollore|
|---|---|---|
|Cosa include|Solo l'unità di calcolo|CPU + memorie + I/O, tutto in un chip|
|Componenti esterni necessari|Molti|Pochissimi|
|Applicazione tipica|Computer general-purpose|Sistemi embedded, automazione|

#### PCB — Circuiti stampati

A questo punto ci sono sensori, componenti e dispositivi di elaborazione, ma non esiste ancora un prodotto reale. Perché un circuito funzioni in modo stabile, i collegamenti devono essere precisi, ripetibili e robusti. Nei prototipi si possono usare fili volanti o breadboard, ma un'apparecchiatura destinata all'uso reale ha bisogno di una struttura stabile. Questa struttura è il **PCB** (Printed Circuit Board), cioè il circuito stampato.

Un PCB è una basetta di materiale isolante — tipicamente fibra di vetro — su cui sono realizzate piste di rame. Le piste sostituiscono i fili: collegano elettricamente i terminali dei componenti seguendo lo schema progettato. In questo modo il circuito diventa compatto, ordinato e producibile in serie. La progettazione avviene con software **ECAD** dedicati, che permettono di passare dallo schema elettrico alla disposizione fisica dei componenti sulla scheda.

![[Media/img_37.jpeg]]

A seconda della complessità, il PCB può essere **monofaccia**, con piste su un solo lato; **a doppia faccia**, con piste su entrambi i lati; oppure **multistrato**, con più livelli di rame sovrapposti e isolati tra loro. Nei dispositivi più compatti, come smartphone e schede di controllo industriali, il multistrato è indispensabile perché permette di concentrare molti collegamenti in pochissimo spazio.

#### Elettronica di consumo

Una scheda elettronica, da sola, non è quasi mai un prodotto finito. Diventa un prodotto quando viene integrata con alimentazione, contenitore, connettori, pulsanti, display, software e protezioni meccaniche. Solo a quel punto l'insieme può essere usato da una persona o installato in un impianto.

È il mondo dell'**elettronica di consumo**: smartphone, computer, televisori, videocitofoni, ma anche frigoriferi, lavatrici e lavastoviglie moderne, ormai sempre più ricche di sensori, schede di controllo e software.

Tradizionalmente si distinguevano gli **elettrodomestici bianchi** — frigoriferi, lavatrici, lavastoviglie — dagli **elettrodomestici bruni**, come TV, computer e telefoni. La distinzione oggi è meno netta, perché quasi ogni apparecchio domestico contiene elettronica di controllo, display, connessioni di rete o funzioni automatiche. Rimane però utile per capire come il percorso dei segnali entri sia nei dispositivi informatici sia negli oggetti di uso quotidiano.

In questi prodotti si ritrovano tutti i livelli precedenti: sensori, componenti attivi e passivi, microcontrollori o microprocessori, PCB, alimentazione e software.

#### Elettronica di potenza

Fin qui il percorso ha riguardato soprattutto segnali deboli: misure, dati, comandi, informazioni. Esiste però una parte del comparto elettronico in cui i segnali non servono solo a rappresentare informazioni, ma a comandare il trasferimento di energia. È l'**elettronica di potenza**, il punto di confine più evidente con l'elettrotecnica.

Qui il segnale non rappresenta soltanto informazione; serve anche a controllare energia elettrica con tensioni e correnti significative. L'idea di base è usare dispositivi elettronici come interruttori molto rapidi e precisi, capaci di modificare forma, valore o frequenza della tensione e della corrente.

È il principio che permette a un alimentatore di trasformare la tensione di rete in una tensione continua più bassa, a un inverter fotovoltaico di convertire la corrente continua dei pannelli in corrente alternata, o a un azionamento industriale di regolare la velocità di un motore.

|Componente|Funzione|
|---|---|
|Diodi / Raddrizzatori|Conversione da AC a DC|
|IGBT (Insulated Gate Bipolar Transistor)|Conversione da DC ad AC (es. inverter fotovoltaici)|
|SCR, TRIAC, DIAC|Controllo di potenza in AC (es. dimmer, regolatori di velocità)|

Per questo l'elettronica di potenza è presente in molti sistemi già incontrati nel percorso dell'energia: inverter per fotovoltaico, caricabatteria, gruppi di continuità, convertitori di frequenza per motori industriali. È elettronica perché usa componenti e tecniche di controllo elettroniche; è vicina all'elettrotecnica perché il suo oggetto resta la gestione dell'energia.

#### Impianti di sicurezza

Un'altra applicazione del comparto elettronico, più vicina agli edifici e agli impianti civili, è quella degli **impianti di sicurezza**. Qui torna il percorso informazione → elaborazione → risposta: sensori e dispositivi di ingresso raccolgono dati, una centrale li interpreta, gli attuatori o i sistemi di comunicazione producono una risposta.

Nei **sistemi di controllo accessi**, l'informazione può essere un badge letto da un sensore, un'impronta digitale, un volto o una targa. Il sistema decide se autorizzare il passaggio e comanda serrature, varchi o registrazioni.

Negli **impianti antintrusione**, invece, la centrale riceve segnali da sensori perimetrali e volumetrici: contatti magnetici su porte e finestre, barriere a infrarossi, rilevatori di movimento. Se la combinazione dei segnali corrisponde a un'intrusione, vengono attivati sirene, avvisi remoti o altre procedure.

Negli impianti di **videosorveglianza**, infine, telecamere e registratori gestiscono immagini e flussi video. I sistemi tradizionali sono indicati come **TVCC** (televisione a circuito chiuso); quelli più recenti usano spesso reti IP, archiviazione digitale e analisi automatica delle immagini.

![[Media/img_12.jpeg]]

---

### 2.3 Comparto dell'Automazione

Il terzo macro-comparto riguarda il **controllo automatico** dei processi: come si fa sì che macchine e impianti lavorino in modo autonomo, senza richiedere la presenza continua di un operatore.

#### Sistemi embedded a microcontrollore

Il protagonista dell'automazione moderna è spesso un **sistema embedded** (letteralmente "sistema incorporato"): un insieme di hardware e software progettato per svolgere una funzione specifica all'interno di un'apparecchiatura più grande — un'auto, un elettrodomestico, una macchina industriale. A differenza di un computer general-purpose, un sistema embedded fa bene una cosa precisa e la fa sempre. I microcontrollori, grazie a compattezza, basso consumo e costo contenuto, sono il cuore della stragrande maggioranza di questi sistemi.

#### Il PLC — Programmable Logic Controller

Il **PLC** (_Programmable Logic Controller_, controllore logico programmabile) è il dispositivo più usato per comandare macchine e impianti industriali. Non è alternativo al microcontrollore nel senso stretto del termine: anche un PLC contiene un'unità di elaborazione elettronica, basata su un microprocessore o su un microcontrollore. La differenza è che il PLC non è solo il chip, ma un sistema industriale completo, con alimentazione, memoria, moduli di ingresso/uscita, protezioni e strumenti di programmazione pensati per l'automazione.

Serve quando il sistema deve leggere molti segnali di ingresso, prendere decisioni secondo una logica stabilita e comandare molte uscite in modo affidabile.

Un esempio semplice è un nastro trasportatore: un sensore rileva la presenza di un pezzo, un pulsante avvia il ciclo, un finecorsa segnala la posizione raggiunta, un motore muove il nastro e una lampada indica lo stato della macchina. Il PLC sta in mezzo a questi elementi: riceve i segnali dai sensori e dai pulsanti, esegue il programma e comanda motori, valvole, relè, spie o altri attuatori.

La logica generale è:

```
sensori e pulsanti  →  ingressi PLC  →  programma  →  uscite PLC  →  attuatori
```

Dal punto di vista hardware, un PLC comprende di solito un alimentatore, una CPU basata su un microprocessore o un microcontrollore, una memoria per il programma e una o più schede di I/O. Le schede di **input** ricevono segnali dal campo, per esempio pulsanti, sensori o finecorsa. Le schede di **output** inviano comandi verso il campo, per esempio a contattori, elettrovalvole, motori, lampade o sirene.

![[Media/img_36.jpeg]]

Il PLC lavora in modo ciclico. Prima legge lo stato degli ingressi, poi esegue il programma, infine aggiorna le uscite. Subito dopo ricomincia da capo. Questo ciclo viene ripetuto continuamente finché il sistema è in funzione.

```
lettura ingressi  →  esecuzione programma  →  aggiornamento uscite  →  nuovo ciclo
```

Il tempo necessario per completare un giro è detto **tempo di ciclo**. È importante perché il PLC non reagisce in modo istantaneo: reagisce al ciclo successivo. Se il ciclo è troppo lento, anche la macchina risponde in ritardo.

Il programma del PLC si scrive con linguaggi specifici. Il più noto è il **linguaggio ladder** (_ladder diagram_, diagramma a scala), nato per somigliare agli schemi elettrici a relè. I contatti in **serie** rappresentano una condizione AND, i contatti in **parallelo** una condizione OR, un contatto normalmente chiuso una negazione NOT. In questo modo una logica che prima veniva realizzata cablando relè e contattori può essere descritta via software.

Il PLC è quindi diverso da una semplice scheda a microcontrollore: entrambi eseguono un programma su un'unità elettronica di calcolo, ma il PLC è costruito per l'ambiente industriale, usa moduli di I/O robusti e si programma con strumenti pensati per tecnici di automazione. Le fasi tipiche di lavoro sono: configurazione hardware, sviluppo del programma, simulazione, prova sul PLC e messa in servizio sull'impianto.

#### Robotica industriale

Quando l'automazione riguarda il movimento fisico — saldatura, assemblaggio, movimentazione di materiali — entrano in scena i **robot industriali**: bracci meccanici controllati da software, diffusissimi nel settore automobilistico e manifatturiero. Accanto ai robot tradizionali si diffondono i **cobot** (robot collaborativi), dotati di sensori di sicurezza avanzati che permettono di lavorare fianco a fianco con l'uomo nello stesso spazio fisico.

La programmazione avviene con software proprietari. ABB, uno dei principali produttori, usa **RobotStudio** con il linguaggio **RAPID**, che fornisce istruzioni specifiche per il movimento (`MoveL`, `MoveJ`, `MoveC`) e lo spostamento. Prima dell'avvio in produzione reale, ogni programma viene validato in modalità **passo/passo**, che permette di verificare il comportamento di ogni singola istruzione nell'ordine in cui è stata scritta.

#### Domotica e Building Automation

L'automazione non riguarda solo le fabbriche. Anche un edificio può essere controllato come un sistema: luci, riscaldamento, raffrescamento, tapparelle, sicurezza e consumi energetici possono essere coordinati da una logica comune. Nel caso dell'abitazione si parla di **domotica**; negli edifici più grandi, come alberghi, ospedali, uffici e centri commerciali, si parla di **Building Automation**.

La normativa tecnica usa il termine **HBES** (Home and Building Electronic Systems). La differenza principale è la scala: nella **Home Automation** il sistema serve una singola abitazione; nella **Building Automation** serve edifici complessi e viene spesso supervisionato da un _building manager_.

In entrambi i casi il principio fondamentale è lo stesso: il **comando è separato dall'attuatore**. In un impianto tradizionale, il pulsante che comanda una luce è collegato direttamente al circuito della lampada. In un impianto domotico, invece, il pulsante invia un messaggio su un **bus** comune, realizzato con doppino di rame, fibra ottica o collegamenti wireless; l'attuatore riceve il messaggio e accende o spegne il carico.

![[Media/img_15.jpeg]]

Questa separazione rende l'impianto più flessibile. Se un pulsante non chiude fisicamente il circuito della lampada, ma invia un comando digitale, la sua funzione può essere modificata via software: può comandare una luce, uno scenario, una tapparella o una combinazione di azioni. Lo stesso principio si estende alla climatizzazione, agli allarmi e agli scenari automatici come "esco di casa" o "notte".

Il protocollo standard europeo condiviso dai principali costruttori è **KNX**, nato dal consorzio EIB: i componenti di produttori diversi sono interoperabili senza interfacce aggiuntive. Il software di configurazione ufficiale è **ETS** (EIB Tools Software).

---

## 3. Sbocchi lavorativi nel settore

Gli sbocchi professionali corrispondono direttamente ai tre comparti appena descritti.

Chi approfondisce l'**elettrotecnica** può diventare **tecnico installatore/manutentore di impianti elettrici** (realizzazione di impianti civili e industriali, installazione di fotovoltaico, manutenzione e verifica normativa) oppure **tecnico progettista di impianti elettrici** (progettazione, calcolo e dimensionamento di impianti completi, inclusi quelli da fonti rinnovabili).

Chi si specializza nell'**elettronica** trova sbocchi come **tecnico di produzione** (gestione delle linee di montaggio di schede e apparecchiature), **tecnico in centri di vendita e assistenza** (supporto tecnico e commerciale nell'elettronica di consumo) oppure **tecnico di manutenzione** (assistenza di macchine e apparecchiature presso i clienti).

Chi sceglie l'**automazione** può diventare **progettista di sistemi automatici e robot** (sviluppo di automazioni con PLC, microcontrollori e robot industriali) o **tecnico domotico** (configurazione e installazione di apparecchiature domotiche).

---

# FOCUS 2 — Fondamenti di Elettricità ed Energia Elettrica

Il Focus 1 ha mostrato cosa fa il settore elettrico e come è organizzato. Per capire _perché_ funziona in quel modo — perché i cavi hanno una portata, perché esistono i trasformatori, perché un impianto ha bisogno di protezioni — bisogna scendere al livello dei fenomeni fisici di base. Questo Focus costruisce quelle basi partendo dall'atomo, con un percorso in cui ogni concetto apre la strada al successivo.

![[Media/Photon_to_Code_page_4_1.jpg]]

## 1. L'equilibrio elettrico della materia

Il punto di partenza è l'atomo. In condizioni normali, ogni atomo è elettricamente **neutro**: il numero di protoni (cariche positive) bilancia esattamente il numero di elettroni (cariche negative). Questo equilibrio può essere rotto da una forza esterna che strappa elettroni da un corpo e li trasferisce a un altro.

Il classico esempio è lo strofinio: fregando una bacchetta di vetro su un panno di lana, gli elettroni passano dal vetro alla lana. Il vetro, avendo perso elettroni, diventa **carico positivamente**; il panno, avendoli acquisiti, diventa **carico negativamente**. Un corpo che ha perso il proprio equilibrio elettrico si chiama corpo **elettrizzato** o **carico**.

Avvicinando due corpi carichi si osserva sempre la stessa regola: **cariche uguali si respingono, cariche opposte si attraggono**. È questa forza, che agisce tra le cariche, il motore di tutti i fenomeni elettrici che seguono.

---

## 2. La carica elettrica (Q)

Per lavorare con questi fenomeni in modo quantitativo serve una grandezza che misuri "quanta elettrizzazione" ha un corpo. Questa grandezza è la **carica elettrica**, simbolo **Q**, misurata in **coulomb (C)**.

La carica di un singolo elettrone vale −1,602 · 10⁻¹⁹ C; quella di un protone vale +1,602 · 10⁻¹⁹ C. Il coulomb è quindi un'unità enorme: per fare 1 C servono circa 6,24 · 10¹⁸ elettroni. Anche i circuiti più semplici coinvolgono quantità di cariche astronomiche.

> **Esempio risolto — Numero di elettroni**
> 
> La sezione di un conduttore è stata percorsa da una carica totale di 1.800 C. Quanti elettroni sono transitati?
> 
> $$N = \frac{Q}{e} = \frac{1.800}{1{,}602 \cdot 10^{-19}} \approx 1{,}1 \cdot 10^{22} \text{ elettroni}$$

---

## 3. Il generatore elettrico e la tensione (V)

Ora che sappiamo misurare la carica Q, possiamo chiederci: cosa serve per separarla? Le cariche opposte si attraggono, e tenerle separate richiede compiere un **lavoro** contro questa forza. Il lavoro (L), misurato in joule [J], è il prodotto della forza applicata per lo spostamento compiuto:

$$L = F \cdot s \quad \text{[J]}$$

Nella pratica industriale servono i **generatori elettrici**: dispositivi che compiono questo lavoro in modo continuativo, accumulando cariche positive al **morsetto positivo (+)** e cariche negative al **morsetto negativo (−)**. Il lavoro così compiuto rimane disponibile nelle cariche stesse come energia potenziale: quando i due poli vengono collegati a un utilizzatore esterno, questa energia si trasforma in calore, luce o movimento.

La grandezza che quantifica questa "riserva di energia" è la **tensione elettrica** (o differenza di potenziale): il lavoro compiuto per separare le cariche, diviso per la quantità di carica separata.

$$\boxed{V = \frac{L}{Q}} \quad \Rightarrow \quad L = V \cdot Q$$

![[Media/Three_Phase_Power_Geometry_page_2_1.jpg]]

L'unità di misura è il **volt (V)**: un generatore a 1 V compie 1 J di lavoro per spostare 1 C di carica. La grandezza interna che descrive la capacità del generatore di mantenere le cariche separate è la **forza elettromotrice (f.e.m.)**, simbolo **E**, che coincide con la tensione ai morsetti a circuito aperto.

**Tensioni tipiche di generatori comuni:**

|Generatore|Tensione tipica|
|---|---|
|Pila a stilo|1,5 V|
|Batteria dell'auto|12 V|
|Rete monofase (civile)|230 V|
|Rete trifase (industriale)|400 V|

### Generatori in serie e in antiserie

Quando una singola sorgente non fornisce la tensione necessaria, si collegano più generatori in **serie**: il polo positivo del primo al polo negativo del secondo, e così via. Le f.e.m. si sommano algebricamente:

$$E_{tot} = E_1 + E_2 + E_3 + \ldots$$

Se un generatore viene inserito con i poli invertiti rispetto agli altri (in **antiserie**), il suo contributo è negativo.

> **Esempio risolto — Generatori in serie con antiserie**
> 
> 5 generatori da 2 V ciascuno, di cui uno inserito in antiserie:
> 
> $$E_{tot} = (+2) + (+2) + (+2) + (+2) + (-2) = \mathbf{6 \text{ V}}$$

> **Esempio risolto — Lavoro del generatore**
> 
> Una carica Q = 0,5 mC è soggetta a una tensione di 10 V. Qual è il lavoro sviluppato?
> 
> $$L = Q \cdot V = 0{,}5 \cdot 10^{-3} \cdot 10 = \mathbf{5 \text{ mJ}}$$

---

## 4. La corrente elettrica (I)

Fin qui abbiamo parlato di cariche ferme, accumulate ai poli di un generatore. La situazione cambia quando si collega un utilizzatore esterno tra i due poli: le cariche trovano un percorso e si mettono in moto, liberando la loro energia nel passaggio attraverso il conduttore. Questo **flusso ordinato e continuo di cariche** è la **corrente elettrica**.

L'**intensità di corrente** (simbolo **I**) misura quante cariche attraversano una sezione del conduttore nell'unità di tempo:

$$\boxed{I = \frac{Q_T}{t}} \quad \text{[A]}$$

L'unità di misura è l'**ampere (A)**: scorre 1 A quando transita 1 C di carica ogni secondo. Per il principio di conservazione della carica, la corrente è la stessa in tutti i punti dello stesso ramo di circuito — gli elettroni sono materia e non possono sparire lungo il percorso.

Vale la pena chiarire il **verso convenzionale della corrente**: fisicamente, nei conduttori metallici, sono gli elettroni (cariche negative) a muoversi, dal polo negativo verso quello positivo. Per ragioni storiche, però, si è scelto di definire il verso della corrente come quello delle cariche positive, ovvero dal polo positivo verso quello negativo all'esterno del generatore. Nei calcoli non cambia nulla, ma è importante non confondersi quando si leggono gli schemi.

> **Esempio risolto — Intensità di corrente**
> 
> Attraverso la sezione di un conduttore scorre in un'ora una carica di 1.800 C.
> 
> $$I = \frac{Q_T}{t} = \frac{1.800}{3.600} = \mathbf{0{,}5 \text{ A}}$$

> **Esempio risolto — Durata di una pila**
> 
> Una pila da 1,5 V con capacità 1.200 mAh alimenta una lampadina che assorbe 1 A. La capacità in mAh esprime la carica totale disponibile (prodotto di corrente × tempo). Il tempo di funzionamento è:
> 
> $$t = \frac{Q_T}{I} = \frac{1.200 \text{ mAh}}{1 \text{ A}} = \mathbf{1{,}2 \text{ h}} \quad \text{(1 ora e 12 minuti)}$$

---

## 5. La resistenza elettrica (R)

Un conduttore ideale lascerebbe scorrere le cariche senza alcun ostacolo. Nella realtà i conduttori non sono ideali: gli elettroni in movimento urtano continuamente contro gli ioni del reticolo cristallino del materiale, perdendo energia a ogni urto. Questo effetto di "frenata" è la **resistenza elettrica**, simbolo **R**, misurata in **ohm (Ω)**.

La resistenza può essere una caratteristica indesiderata del conduttore (un cavo che scalda) oppure un elemento introdotto intenzionalmente per svolgere una funzione: in quel caso si chiama **resistore**.

### Prima legge di Ohm

Per un dato conduttore, la corrente che lo attraversa è **proporzionale alla tensione applicata**: se la tensione raddoppia, la corrente raddoppia. Il coefficiente di proporzionalità è la resistenza stessa, e questa relazione è la **prima legge di Ohm**:

$$\boxed{R = \frac{V}{I}} \quad \Leftrightarrow \quad V = R \cdot I \quad \Leftrightarrow \quad I = \frac{V}{R}$$

![[Media/The_Modern_Electrical_Blueprint_page_3_1.jpg]]
Un resistore ha 1 Ω quando, sottoposto a 1 V, viene attraversato da 1 A.

> **Esempio risolto**
> 
> Un conduttore percorso da 10 A presenta ai capi una tensione di 2 V.
> 
> $$R = \frac{V}{I} = \frac{2}{10} = \mathbf{0{,}2 \ \Omega}$$

> **Esempio risolto**
> 
> Una resistenza di 100 Ω è sottoposta a 10 V.
> 
> $$I = \frac{V}{R} = \frac{10}{100} = \mathbf{0{,}1 \text{ A}}$$

### Seconda legge di Ohm

La prima legge di Ohm dice _quanto_ vale la resistenza, ma non spiega _da cosa_ dipende. La **seconda legge di Ohm** risponde: la resistenza di un conduttore dipende dal materiale di cui è fatto e dalla sua geometria.

$$\boxed{R = \rho \cdot \frac{l}{S}}$$

dove **ρ** (rho) è la **resistività** del materiale [Ω·mm²/m], **l** è la lunghezza [m] e **S** è la sezione trasversale [mm²]. Un filo lungo e sottile oppone più resistenza di uno corto e spesso — esattamente come un tubo lungo e stretto oppone più resistenza al flusso dell'acqua.

![[Media/The_Modern_Electrical_Blueprint_page_4_1.jpg]]

> **Esempio risolto — Calcolo della sezione**
> 
> Una matassa di rame (ρ = 0,0173 Ω·mm²/m), lunga 100 m, ha una resistenza di 0,692 Ω.
> 
> $$S = \frac{\rho \cdot l}{R} = \frac{0{,}0173 \cdot 100}{0{,}692} = \mathbf{2{,}5 \text{ mm}^2}$$

### Caduta di tensione e differenza di potenziale

Una resistenza percorsa da corrente causa una **caduta di tensione** ai suoi capi: le cariche entrano da un estremo ad alto potenziale e escono dall'altro a potenziale più basso, avendo ceduto energia lungo il percorso.

$$V_{AB} = R \cdot I$$

La **differenza di potenziale** tra i punti A e B vale $\Delta V = V_A - V_B$; il segno dipende dalla direzione in cui si misura: $V_{BA} = -V_{AB}$.

In un circuito chiuso con un solo generatore e una sola resistenza, tutta l'energia del generatore viene ceduta alla resistenza: $E = V_{AB}$, da cui $I = E/R$.

> **Esempio risolto — Cadute di tensione in serie**
> 
> I = 0,5 mA; R₁ = 12 kΩ; R₂ = 100 kΩ. Calcolare V_BA e V_DC.
> 
> La corrente entra in R₁ dal morsetto B, che è quindi a potenziale maggiore di A: $$V_{BA} = R_1 \cdot I = 12 \cdot 10^3 \cdot 0{,}5 \cdot 10^{-3} = \mathbf{6 \text{ V}}$$
> 
> Per V_DC la corrente entra dal morsetto C, quindi il segno si inverte: $$V_{DC} = -(R_2 \cdot I) = -(100 \cdot 10^3 \cdot 0{,}5 \cdot 10^{-3}) = \mathbf{-50 \text{ V}}$$

---

## 6. Potenza ed energia elettrica

Tensione, corrente e resistenza descrivono come si comporta un circuito. Nella pratica, però, la domanda più immediata riguarda spesso qualcosa di diverso: quanta energia viene consumata o prodotta nell'unità di tempo? Questa grandezza è la **potenza elettrica**:

$$\boxed{P = V \cdot I} \quad \text{[W]}$$

Un watt equivale a trasferire un joule al secondo. Per un generatore la potenza è _generata_; per un utilizzatore è _consumata_. Per un resistore specificamente, combinando la legge di Ohm con la formula della potenza si ottengono tre espressioni equivalenti:

$$P = V \cdot I = R \cdot I^2 = \frac{V^2}{R}$$

> **Esempio risolto — Corrente da potenza e tensione**
> 
> Una lampadina da 60 W alimentata a 230 V:
> 
> $$I = \frac{P}{V} = \frac{60}{230} \approx \mathbf{0{,}26 \text{ A}}$$

> **Esempio risolto — Tensione massima su un resistore**
> 
> Una resistenza di 100 Ω sopporta al massimo 0,25 W:
> 
> $$V_{max} = \sqrt{P \cdot R} = \sqrt{0{,}25 \cdot 100} = \mathbf{5 \text{ V}}$$

Tutta la potenza dissipata in una resistenza si trasforma in **calore**: è l'**effetto Joule**, individuato dal fisico inglese James Joule (1818–1889). È lo stesso principio che riscalda la resistenza di una stufa elettrica, ma è anche la causa del surriscaldamento indesiderato dei cavi percorsi da correnti eccessive. Questo riscaldamento è il motivo per cui ogni cavo ha una portata massima — concetto già collegato all'impianto residenziale nel Focus 1.

---

## 7. Circuiti resistivi

Con le grandezze appena definite si possono analizzare reti elettriche complete. I **circuiti resistivi** — reti di sole resistenze collegate a un generatore — sono il caso più semplice, ma sufficiente per capire i principi che governano qualsiasi rete.

![[Media/Photon_to_Code_page_5_1.jpg]]

### Resistenze in serie

Nel collegamento in **serie** le resistenze si trovano sullo stesso ramo e sono percorse dalla **stessa corrente**: le cariche non hanno percorsi alternativi. Le tensioni ai capi di ogni resistenza si sommano:

$$V_{tot} = V_1 + V_2 + V_3 = I \cdot (R_1 + R_2 + R_3)$$

Dal punto di vista del generatore, l'intero gruppo si comporta come un'unica resistenza equivalente:

$$\boxed{R_{eq} = R_1 + R_2 + R_3 + \ldots}$$

Questa proprietà ha un'applicazione pratica diretta: il **partitore di tensione**, che permette di prelevare una tensione intermedia ai capi di una delle resistenze.

> **Esempio risolto — Partitore di tensione**
> 
> Da un generatore di 12 V si vuole ottenere 4 V, prelevando al massimo 1 mA.
> 
> La resistenza totale deve essere: $R_{tot} = 12 \text{ V} / 1 \text{ mA} = 12 \text{ k}\Omega$
> 
> Per avere 4 V su R₂ e 8 V su R₁, si usano R₁ = 8 kΩ e R₂ = 4 kΩ.

### Resistenze in parallelo

Nel collegamento in **parallelo** le resistenze hanno i terminali in comune e sono soggette alla **stessa tensione**: le cariche si dividono tra i vari rami, ognuno percorso da una corrente diversa. La corrente totale è la somma delle correnti parziali, e la resistenza equivalente si calcola come:

$$\boxed{\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots}$$

Per **due sole resistenze in parallelo** la formula si semplifica:

$$R_{eq} = \frac{R_1 \cdot R_2}{R_1 + R_2}$$

Aggiungere resistenze in parallelo _riduce_ la resistenza equivalente, perché si moltiplicano le strade disponibili alle cariche. È per questo che collegare più elettrodomestici alla stessa presa aumenta la corrente totale assorbita dalla rete.

> **Esempio risolto**
> 
> Due resistenze da 100 Ω in parallelo:
> 
> $$R_{eq} = \frac{100 \cdot 100}{100 + 100} = \mathbf{50 \ \Omega}$$

---

# FOCUS 3 — Elementi di Logica Combinatoria


> [!warning] Nota bene
> Il contenuto di questa dispensa è molto sintetico, fatto per dare una semplice idea sulla logica combinatoria. Per una dispensa più approfondita, si rimanda alla [[Dispensa sull'algebra di Boole e circuiti logici]].


Il Focus 1 ha mostrato il settore elettrico anche attraverso l'impianto residenziale, mentre il Focus 2 ha fornito le basi fisiche dell'energia: come si genera, come si distribuisce, come si usa in un impianto. Esiste però un altro livello di funzionamento dei sistemi elettrici moderni — PLC, microcontrollori, dispositivi digitali in genere — che riguarda non l'energia ma la **logica**: come un sistema decide cosa fare in base agli ingressi che riceve. Questo Focus costruisce le basi di quel ragionamento.

## 1. Segnali analogici e digitali

Il punto di partenza è capire come si rappresenta l'informazione in un sistema elettronico.

Un **segnale analogico** può assumere qualsiasi valore all'interno di un intervallo continuo: la temperatura, la voce, la tensione di rete. Il problema è che i segnali analogici sono sensibili al rumore elettrico — qualsiasi interferenza si sovrappone al segnale utile in modo difficilmente eliminabile.

Un **segnale digitale** ha invece un numero finito di valori possibili. Il caso più importante è quello **binario**: solo due stati, convenzionalmente 0 e 1. Un circuito digitale non si chiede "quanto vale esattamente questo segnale?" ma soltanto "è sopra o sotto una certa soglia?". Questa semplificazione rende i circuiti digitali molto più resistenti al rumore, molto più facili da progettare e capaci di memorizzare e trasmettere qualsiasi tipo di informazione come sequenza di bit.

### Logica cablata vs. logica programmabile

Una funzione digitale può essere realizzata in due modi fondamentalmente diversi. Nella **logica cablata** la funzione è fisicamente costruita collegando componenti tra loro — relè e contattori in un quadro, oppure circuiti integrati su un PCB. Il sistema può svolgere solo la funzione per cui è stato costruito: modificarla richiede di intervenire sul cablaggio.

Nella **logica programmabile** la stessa funzione è descritta da un programma software memorizzato in un processore. Cambiare la funzione significa modificare il programma, senza toccare l'hardware.

| |Logica cablata|Logica programmabile|
|---|---|---|
|Come funziona|Componenti fisicamente connessi|Programma su un processore|
|Flessibilità|Nulla: per cambiare serve ricablare|Alta: si modifica il software|
|Esempi|Pulsanti, relè, contattori|PLC, microcontrollori|

---

## 2. Reti combinatorie

Il blocco di base della logica cablata è la **rete combinatoria**: un circuito digitale in cui le uscite dipendono _esclusivamente_ dagli ingressi nell'istante corrente, senza alcuna memoria di stati precedenti. Dati certi ingressi, l'uscita è sempre la stessa — il circuito non "ricorda" cosa è successo prima.

Il comportamento di una rete combinatoria è descritto completamente dalla sua **tabella della verità**: una tabella che elenca tutte le possibili combinazioni degli ingressi e il valore dell'uscita per ciascuna. Con **n** ingressi binari le combinazioni possibili sono **2ⁿ**. Per costruirla in modo sistematico senza duplicazioni si numerano le righe dal basso: la colonna più a destra alterna 0 e 1, la seconda da destra alterna coppie 00 e 11, la terza alterna gruppi di quattro 0000 e 1111, e così via.

**Esempio** — Tabella della verità per una funzione con 2 ingressi:

|A|B|Y|
|---|---|---|
|0|0|?|
|0|1|?|
|1|0|?|
|1|1|?|

Con 2 ingressi si ottengono 2² = 4 righe. Il valore di Y per ciascuna riga dipende dalla funzione che si vuole realizzare.

---

## 3. Algebra di Boole

Per lavorare con le reti combinatorie in modo sistematico serve uno strumento matematico. L'**algebra di Boole** — dal nome del matematico George Boole (1815–1864) — è un sistema algebrico progettato per variabili che possono assumere solo due valori, 0 e 1.

Le operazioni fondamentali sono la **somma logica** (simbolo +, operazione OR) e il **prodotto logico** (simbolo ·, operazione AND). Le regole di base sono:

|Somma logica (OR)|Prodotto logico (AND)|
|---|---|
|A + 0 = A|A · 0 = 0|
|A + 1 = 1|A · 1 = A|
|A + A = A|A · A = A|
|A + Ā = 1|A · Ā = 0|

La barra sopra una variabile (Ā) indica la **negazione**: il valore complementare. L'algebra di Boole gode delle proprietà commutativa e associativa, della distributiva rispetto alla somma e di una proprietà che non ha equivalente nell'algebra ordinaria — la **distributiva rispetto al prodotto**:

$$A + (B \cdot C) = (A + B) \cdot (A + C)$$

### Teoremi di De Morgan

I **teoremi di De Morgan** (August De Morgan, 1806–1871) permettono di trasformare espressioni logiche in forme equivalenti e sono fondamentali per semplificare i circuiti:

$$\overline{A + B} = \bar{A} \cdot \bar{B}$$ $$\overline{A \cdot B} = \bar{A} + \bar{B}$$

In parole: la negazione di un'OR diventa un'AND di negazioni, e viceversa. La conseguenza pratica è rilevante: le porte **NAND** e **NOR** sono porte "universali" — con sole porte NAND (o sole NOR) è possibile realizzare qualsiasi funzione logica.

---

## 4. Le porte logiche fondamentali

Le porte logiche sono i componenti elementari dei circuiti digitali. Ognuna implementa una delle operazioni booleane di base.

La porta **NOT** (inverter) inverte il valore di una variabile: 0 → 1, 1 → 0. Y = Ā

|A|Y|
|---|---|
|0|1|
|1|0|

La porta **OR** restituisce 1 se **almeno uno** degli ingressi è 1; restituisce 0 solo se tutti gli ingressi sono 0. Y = A + B

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

La porta **AND** restituisce 1 solo se **tutti** gli ingressi sono 1; restituisce 0 se almeno uno è 0. Y = A · B

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

Le porte **NOR** e **NAND** sono rispettivamente OR e AND con l'uscita negata. Il NOR restituisce 1 solo se tutti gli ingressi sono 0; il NAND restituisce 0 solo se tutti gli ingressi sono 1. Sono queste due porte ad essere universali, come dimostrano i teoremi di De Morgan.

|A|B|NOR|NAND|
|---|---|---|---|
|0|0|1|1|
|0|1|0|1|
|1|0|0|1|
|1|1|0|0|

La porta **EXOR** (OR esclusivo) restituisce 1 se gli ingressi sono **diversi** tra loro: "uno o l'altro, ma non entrambi". Y = A ⊕ B

|A|B|Y|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

![[Media/Photon_to_Code_page_10_1.jpg]]

---

## 5. Forme canoniche: dalla tabella della verità al circuito

Conoscere le porte è necessario, ma il problema pratico è sempre lo stesso: dato un problema reale, come si arriva al circuito che lo risolve? Il metodo è sistematico e segue sempre la stessa direzione.

Si parte dalla **tabella della verità**: si definiscono ingressi e uscite, si elencano tutte le combinazioni e si stabilisce il valore dell'uscita per ognuna. Da questa tabella si ricava l'espressione algebrica con uno dei due **metodi canonici**.

La **prima forma canonica** (somma di mintermini, SOM) si usa quando le righe con Y = 1 sono poche. Per ogni riga con uscita 1 si scrive un **mintermine**: un AND di tutte le variabili, in forma diretta se il loro valore nella riga è 1, in forma negata se è 0. La funzione finale è l'OR di tutti i mintermini.

**Esempio:** per la riga A=0, B=1, C=0 con Y=1, il mintermine è $\bar{A} \cdot B \cdot \bar{C}$.

La **seconda forma canonica** (prodotto di maxtermini, POM) è duale: si usa quando le righe con Y = 0 sono poche. Per ogni riga con uscita 0 si scrive un **maxtermine**: un OR di tutte le variabili, in forma diretta se il valore è 0, in forma negata se è 1. La funzione finale è l'AND di tutti i maxtermini.

Una volta ottenuta l'espressione, la si semplifica con le proprietà dell'algebra di Boole per ridurre il numero di porte necessarie, poi si realizza il circuito. Il percorso completo è sempre: **problema → tabella della verità → forma canonica → semplificazione → circuito**.


![[Media/Photon_to_Code_page_9_1.jpg]]

### Logica combinatoria a contatti

La stessa logica si può rappresentare con uno **schema a contatti**: la tecnica grafica usata per gli schemi funzionali degli impianti elettrici vista nel Focus 1. I contatti in **serie** corrispondono all'AND, quelli in **parallelo** all'OR, un contatto normalmente chiuso al NOT. Il linguaggio ladder del PLC (Focus 1) è direttamente questa logica a contatti trasferita nel software: la connessione tra le tre aree di studio non è casuale ma strutturale.

---

## 6. Circuiti integrati

Le porte logiche non si costruiscono una ad una: vengono prodotte industrialmente come **circuiti integrati** — chip di silicio che ne contengono molte all'interno. Introdotti poco prima del 1960 dalla Texas Instruments, sono oggi la famiglia di componenti elettronici più numerosa al mondo.

Fisicamente, un circuito integrato è un contenitore plastico o ceramico (il _package_) con terminali metallici esterni chiamati **pin**. All'interno, una piastrina di silicio ospita i componenti realizzati con processi di fotolitografia di estrema precisione.

![[Media/The_Modern_Electrical_Blueprint_page_8_1.jpg]]

Riguardo alla tecnologia, si distinguono gli integrati **bipolari (TTL)** e gli integrati **unipolari CMOS**: i CMOS consumano meno e tollerano meglio il rumore, motivo per cui sono diventati lo standard dominante. Riguardo alla complessità, la classificazione va da **SSI** (meno di 12 porte) a **MSI** (fino a 100), **LSI** (fino a 1.000) e **VLSI** (oltre 1.000 porte). Gli integrati SSI — come il **74HC08** (quattro porte AND a due ingressi) o il **74HC32** (quattro porte OR) — sono i mattoni elementari su cui si impara a costruire circuiti logici.

---

# FOCUS 4A — Microcontrollori e Arduino

Il Focus 1 ha mostrato che i microcontrollori sono al cuore dell'automazione moderna. Il Focus 3 ha introdotto la logica digitale con cui questi dispositivi ragionano. Il passo successivo è osservare da vicino una scheda reale: quali elementi contiene, come comunica con il computer, quali risorse mette a disposizione e perché può controllare sensori e attuatori. Lo strumento scelto è **Arduino**, perché rende visibile e sperimentabile il funzionamento di un microcontrollore senza richiedere hardware specialistico.

## 1. Cos'è Arduino

**Arduino** è una serie di schede elettroniche open-source sviluppate all'Interaction Design Institute di Ivrea. Il suo successo si basa su tre caratteristiche: l'hardware è **aperto** (gli schemi sono pubblici e chiunque può costruirne una copia), il software è **gratuito** (l'IDE si scarica senza costi) e la comunità è **enorme** (tutorial, librerie ed esempi sono disponibili ovunque online). Insieme, questi elementi permettono di arrivare a un primo progetto funzionante in tempi molto brevi, anche partendo da zero.

---

## 2. La scheda Arduino UNO

La scheda più diffusa è la **Arduino UNO**, basata sul microcontrollore **ATmega328**. Oltre al microcontrollore, la scheda include un'interfaccia USB per la comunicazione col PC, un oscillatore al quarzo da 16 MHz, una presa per l'alimentazione esterna (7÷12 V) e un tasto di reset.

![[Media/img_42.jpeg]]

|Risorsa|Valore|
|---|---|
|Memoria Flash (programma, non volatile)|32 kB|
|Memoria EEPROM (parametri fissi, non volatile)|1 kB|
|Memoria SRAM (dati di lavoro, volatile)|2 kB|
|Pin digitali I/O|14 (di cui 6 con PWM)|
|Ingressi analogici|6|
|Tensione pin digitali|5 V|
|Corrente max per pin|40 mA|
|Clock|16 MHz|
|Alimentazione esterna|7÷12 V|

![[Media/The_Modern_Electrical_Blueprint_page_9_1.jpg]]

Le tre memorie hanno ruoli distinti. La **Flash** conserva il programma anche a scheda spenta (non volatile) ed è pre-programmata con un _bootloader_ che permette il caricamento del programma via USB senza hardware aggiuntivo. La **EEPROM** conserva parametri fissi come tarature e configurazioni. La **SRAM** è la memoria di lavoro durante l'esecuzione — volatile, si svuota allo spegnimento — ed è la risorsa più limitata: soli 2 kB, da usare con attenzione.

L'alimentazione durante lo sviluppo viene normalmente dalla porta USB del PC. L'alimentazione esterna (tramite jack da 7÷12 V) serve quando la scheda è usata nell'applicazione finale, scollegata dal computer.

L'IDE si scarica da http://www.arduino.cc e riunisce in un unico programma editor, compilatore, loader e Monitor Seriale per il debug.

![[Media/img_43.jpeg]]

Con questi elementi si può leggere Arduino come un piccolo sistema embedded completo: una CPU, alcune memorie, pin di ingresso e uscita, alimentazione e collegamento al PC. La parte successiva usa questa base per costruire i primi sketch e collegare il programma al comportamento elettrico dei pin.

---

# FOCUS 4B — Programmazione Embedded con Arduino

Dopo aver identificato la scheda e le sue risorse, si può passare al modo in cui il microcontrollore viene istruito. Programmare Arduino significa scrivere una sequenza di istruzioni che legge ingressi, prende decisioni e aggiorna uscite in modo continuo, secondo lo stesso principio generale del ciclo di controllo visto per il PLC.

Per le prime prove è utile anche un simulatore online. **Tinkercad Circuits** permette di costruire un circuito virtuale trascinando **Arduino, breadboard, LED, resistenze, pulsanti e altri componenti**, collegandoli con i fili come in laboratorio. È quindi adatto per verificare rapidamente cablaggi e logica del programma prima di passare alla scheda reale.

---

## 1. Prima del codice: montare il circuito

In un esercizio con Arduino il programma funziona solo se il circuito è montato correttamente. Per questo, prima di scrivere lo sketch, bisogna sempre chiarire tre cose:

1. quali componenti servono;
2. a quali pin di Arduino sono collegati;
3. quale percorso fa la corrente.

Una volta scelti i componenti, bisogna montarli su un supporto che permetta di collegarli tra loro e ad Arduino. Nei circuiti definitivi questo supporto può essere un circuito stampato; negli esercizi e nei prototipi si usa quasi sempre la **breadboard**, perché permette di costruire circuiti di prova senza saldare.

La breadboard non è una semplice piastra con fori separati. Sotto la plastica ci sono contatti metallici già collegati tra loro. Per usarla correttamente bisogna quindi ragionare non sul singolo foro, ma sul **nodo elettrico** che quel foro rappresenta.

Un nodo è un insieme di punti collegati direttamente da metallo: tutti quei punti hanno la stessa tensione. Se due terminali di componenti sono inseriti nello stesso gruppo di fori collegati internamente, per il circuito è come se fossero uniti da un filo. Se invece sono inseriti in gruppi diversi, non sono collegati finché non si aggiunge un ponticello o un componente tra quei gruppi.

Nella zona centrale, i fori sono collegati in gruppi da cinque sulla stessa colonna numerata. Una breadboard tipica ha due metà separate dal canale centrale: sopra il canale ci sono cinque fori collegati tra loro, e sotto il canale altri cinque fori collegati tra loro. I due gruppi con lo stesso numero **non** sono collegati attraverso il canale centrale.

![[Media/breadboard.png]]

Nell'immagine, i tratti rossi indicano gruppi di fori collegati elettricamente tra loro. Il riquadro blu indica invece il canale centrale, cioè una zona di separazione: i cinque fori sopra il canale non sono collegati ai cinque fori sotto, anche se hanno lo stesso numero.

Il canale centrale serve proprio a separare elettricamente le due metà. Per questo i circuiti integrati e i pulsanti a quattro piedini si inseriscono spesso **a cavallo del canale centrale**: in questo modo i terminali che devono restare separati non finiscono nello stesso nodo. Se un pulsante fosse inserito tutto sulla stessa metà, alcuni suoi piedini potrebbero risultare già collegati dalla breadboard e il circuito non funzionerebbe come previsto.

Le due linee laterali, spesso segnate con **+** e **−**, sono invece usate come linee di alimentazione. Di solito il **+** si collega ai 5 V di Arduino e il **−** si collega a **GND**.

**GND** significa _ground_ ed è il riferimento a **0 V** del circuito. Nei circuiti elettronici viene chiamato spesso anche **massa**, ma in questa parte useremo soprattutto la sigla GND perché è quella scritta sulla scheda Arduino. Collegare un punto a GND significa collegarlo al riferimento 0 V, cioè al punto verso cui la corrente ritorna dopo aver attraversato i componenti.

Le linee laterali funzionano come distributori: permettono di portare 5 V e GND in molti punti del circuito senza dover tornare ogni volta ai pin di Arduino. In alcune breadboard lunghe le linee laterali possono essere interrotte a metà: in quel caso, se serve continuità lungo tutta la linea, bisogna unirne le due parti con un ponticello.

Quando si monta un circuito, il percorso della corrente va letto così: dal pin o dal 5 V, attraverso i componenti, fino a GND. La breadboard non "decide" il percorso: offre solo gruppi di fori già collegati. Sono i ponticelli e i terminali dei componenti a stabilire quali nodi vengono uniti.

Schema pratico da ricordare:

|Parte della breadboard|Come si usa|
|---|---|
|Linee laterali `+` e `−`|Distribuiscono 5 V e GND lungo la breadboard|
|Fori centrali|Collegano tra loro i terminali dei componenti nello stesso gruppo da cinque fori|
|Canale centrale|Separa elettricamente le due metà della breadboard|
|Ponticelli|Portano un segnale da un pin Arduino a un gruppo di fori della breadboard|

Errori comuni da evitare:

- inserire i due terminali di un LED o di una resistenza nello stesso gruppo di fori collegati: il componente viene cortocircuitato o non ha effetto;
- collegare direttamente la linea `+` alla linea `−`: si crea un cortocircuito tra 5 V e GND;
- mettere un pulsante sulla stessa metà della breadboard invece che a cavallo del canale centrale;
- dimenticare che le linee laterali di alcune breadboard non sono continue da un'estremità all'altra.

Per evitare errori, conviene usare colori costanti: **rosso** per 5 V, **nero** per GND, altri colori per i segnali. Prima di alimentare il circuito si controlla che 5 V e GND non siano collegati direttamente tra loro.

**Esercitazione guidata — Accendere un LED sulla breadboard**

Questa prova serve a vedere concretamente come la breadboard collega i fori tra loro. Non serve ancora scrivere un programma: Arduino viene usato solo come alimentatore a 5 V.

Componenti:

|Componente|Quantità|Note|
|---|---:|---|
|Arduino UNO|1|Alimentato via USB|
|Breadboard|1|Per montare il circuito|
|LED|1|Qualsiasi colore|
|Resistenza 220 Ω o 330 Ω|1|In serie al LED|
|Ponticelli|alcuni|Rosso per 5 V, nero per GND|

Collegamenti:

1. collegare il pin **5V** di Arduino alla linea `+` della breadboard;
2. collegare un pin **GND** di Arduino alla linea `−` della breadboard;
3. inserire il LED nella zona centrale, con i due terminali in **due gruppi di fori diversi**;
4. collegare il **catodo** del LED, terminale corto, alla linea `−`;
5. collegare l'**anodo** del LED, terminale lungo, a una resistenza da 220 Ω o 330 Ω;
6. collegare l'altra estremità della resistenza alla linea `+`.

Se il circuito è montato correttamente, il LED si accende. Il percorso della corrente è:

```text
5 V Arduino -> linea + -> resistenza -> LED -> linea - -> GND Arduino
```

Per capire meglio la breadboard, provare poi queste modifiche:

- spostare un terminale della resistenza in un altro foro dello **stesso gruppo da cinque**: il LED resta acceso, perché quei fori sono già collegati;
- spostare un terminale in un gruppo diverso senza aggiungere ponticelli: il LED si spegne, perché il circuito si apre;
- mettere per errore i due terminali del LED nello stesso gruppo di fori: il LED non lavora correttamente, perché i suoi terminali finiscono sullo stesso nodo.

Alcuni componenti hanno un verso. Il **LED** è polarizzato: il terminale lungo è l'**anodo** e va verso il positivo o verso il pin di uscita; il terminale corto è il **catodo** e va verso GND. Il LED deve sempre avere una **resistenza in serie** per limitare la corrente, tipicamente da **220 Ω** o **330 Ω**. Senza resistenza il LED o il pin di Arduino possono danneggiarsi.

Il **pulsante** a quattro terminali contiene due coppie di piedini già collegate internamente. Quando viene premuto, collega tra loro le due coppie. Per usarlo correttamente sulla breadboard va inserito **a cavallo del canale centrale**, così i due lati del pulsante restano separati finché non viene premuto.

Regola di lavoro per ogni esercizio:

1. inserire i componenti sulla breadboard;
2. collegare GND di Arduino alla linea `−`;
3. collegare eventuale 5 V alla linea `+`, solo se serve;
4. collegare i pin di segnale;
5. controllare il percorso della corrente;
6. caricare il programma.

---

## 2. Struttura di un programma Arduino

Un programma Arduino si chiama **sketch** ed è costruito su due blocchi obbligatori:

```c
void setup() {
  // Eseguito UNA SOLA VOLTA all'accensione o al reset
  // Qui si configurano pin, comunicazioni, variabili iniziali
}

void loop() {
  // Eseguito IN MODO CONTINUO e ciclico finché c'è alimentazione
  // Qui vive il cuore del programma
}
```

`setup()` è la fase di preparazione: si dice al microcontrollore come sono collegati i componenti e quali risorse usare. `loop()` è il cuore operativo e viene ripetuto all'infinito — come il ciclo del PLC descritto nel Focus 1, con la stessa logica di lettura ingressi → elaborazione → aggiornamento uscite.

Regole sintattiche di base: ogni istruzione termina con `;`; i blocchi sono racchiusi tra `{ }`; i commenti su riga singola iniziano con `//`, quelli multiriga tra `/* */`; `void` davanti a una funzione indica che non restituisce alcun valore.

![[Media/Photon_to_Code_page_13_1.jpg]]

---

## 3. Gestione dei pin digitali

Arduino UNO ha 14 pin digitali (numerati 0–13), ognuno configurabile come ingresso o uscita nel `setup()` con `pinMode`:

```c
// Configurazione (nel setup)
pinMode(13, OUTPUT);        // pin 13 = uscita (es. LED)
pinMode(10, INPUT_PULLUP);  // pin 10 = ingresso con pull-up interno

// Controllo delle uscite (nel loop)
digitalWrite(13, HIGH); // porta il pin 13 a 5 V
digitalWrite(13, LOW);  // porta il pin 13 a 0 V

// Lettura degli ingressi
int stato = digitalRead(10);  // legge HIGH o LOW dal pin 10
```

Per gli ingressi collegati a un pulsante che, quando viene premuto, collega il pin a **GND**, è necessaria una resistenza di **pull-up** per mantenere il pin a livello alto quando il pulsante è aperto — senza di essa il pin fluttua in uno stato indeterminato. Arduino dispone di resistenze di pull-up interne (20÷50 kΩ), attivabili direttamente con la modalità `INPUT_PULLUP`.

**Mini progetto — Pulsante che accende un LED**

Questo è il primo esempio davvero utile per collegare subito **ingresso**, **uscita** e **logica**. Il pulsante è collegato tra pin 10 e **GND**; il LED è sul pin 13. Con `INPUT_PULLUP`, il pin legge `HIGH` a pulsante rilasciato e `LOW` a pulsante premuto.

Componenti:

|Componente|Quantità|Note|
|---|---:|---|
|Arduino UNO|1|Alimentato via USB|
|Breadboard|1|Per montare LED, resistenza e pulsante|
|LED|1|Qualsiasi colore|
|Resistenza 220 Ω o 330 Ω|1|In serie al LED|
|Pulsante|1|Inserito a cavallo del canale centrale|
|Ponticelli|alcuni|Per GND, pin 10 e pin 13|

Collegamenti:

1. collegare **GND** di Arduino alla linea `−` della breadboard;
2. inserire il LED sulla breadboard, con i due terminali su righe diverse;
3. collegare il **catodo** del LED, terminale corto, alla linea `−`;
4. collegare l'**anodo** del LED, terminale lungo, a una resistenza da 220 Ω o 330 Ω;
5. collegare l'altra estremità della resistenza al **pin 13** di Arduino;
6. inserire il pulsante a cavallo del canale centrale della breadboard;
7. collegare un lato del pulsante al **pin 10**;
8. collegare il lato opposto del pulsante alla linea `−`.

In questo montaggio non serve collegare il pulsante ai 5 V: la resistenza di pull-up interna tiene il pin 10 a livello alto quando il pulsante è aperto. Quando il pulsante viene premuto, il pin 10 viene collegato a GND e Arduino legge `LOW`.

```c
const int LED_PIN = 13;
const int BTN_PIN = 10;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BTN_PIN) == LOW) {  // pulsante premuto
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
}
```

Spiegazione del codice:

- `const int LED_PIN = 13;` crea un nome per il pin del LED. Da questo momento nel programma si può scrivere `LED_PIN` invece di ricordare il numero 13;
- `const int BTN_PIN = 10;` fa la stessa cosa per il pulsante collegato al pin 10;
- in `setup()`, `pinMode(LED_PIN, OUTPUT);` imposta il pin del LED come **uscita**, perché Arduino deve comandarlo;
- sempre in `setup()`, `pinMode(BTN_PIN, INPUT_PULLUP);` imposta il pin del pulsante come **ingresso** e attiva la resistenza di pull-up interna;
- `loop()` viene ripetuto continuamente. Arduino legge il pulsante molte volte al secondo;
- `digitalRead(BTN_PIN)` legge il valore presente sul pin 10;
- con `INPUT_PULLUP` la logica è invertita: pulsante rilasciato significa `HIGH`, pulsante premuto significa `LOW`;
- se il pulsante è premuto, `digitalWrite(LED_PIN, HIGH);` porta il pin 13 a 5 V e accende il LED;
- altrimenti `digitalWrite(LED_PIN, LOW);` porta il pin 13 a 0 V e spegne il LED.

Il punto importante è che il programma non "vede" il pulsante direttamente: legge solo se il pin 10 si trova a livello alto (`HIGH`) o basso (`LOW`). Il cablaggio sulla breadboard decide quale valore elettrico arriva al pin.

Le temporizzazioni si gestiscono con due funzioni:

```c
delay(1000);             // pausa di 1000 ms (1 secondo)
delayMicroseconds(500);  // pausa di 500 μs
```

**Esempio applicativo — Semaforo:**

Il semaforo usa tre LED come uscite digitali. Ogni LED deve avere la propria resistenza in serie: non si usa una sola resistenza comune, perché i LED si accendono in momenti diversi e devono essere limitati separatamente.

Componenti:

|Componente|Quantità|Note|
|---|---:|---|
|Arduino UNO|1|Alimentato via USB|
|Breadboard|1|Per distribuire i collegamenti|
|LED rosso, giallo, verde|3|Uno per ogni luce|
|Resistenze 220 Ω o 330 Ω|3|Una per ogni LED|
|Ponticelli|alcuni|Per GND e pin 11, 12, 13|

Collegamenti:

1. collegare **GND** di Arduino alla linea `−` della breadboard;
2. inserire i tre LED sulla breadboard, con i terminali di ogni LED su righe diverse;
3. collegare i tre **catodi**, terminali corti, alla linea `−`;
4. collegare l'**anodo** del LED verde a una resistenza, poi al **pin 11**;
5. collegare l'**anodo** del LED rosso a una resistenza, poi al **pin 12**;
6. collegare l'**anodo** del LED giallo a una resistenza, poi al **pin 13**.

Quando un pin viene portato a `HIGH`, fornisce 5 V: la corrente esce dal pin, attraversa la resistenza, attraversa il LED e torna a GND. Quando il pin è `LOW`, non c'è differenza di potenziale sufficiente e il LED resta spento.

```c
#define Giallo 13
#define Rosso  12
#define Verde  11

void setup() {
  pinMode(Giallo, OUTPUT);
  pinMode(Rosso,  OUTPUT);
  pinMode(Verde,  OUTPUT);
}

void loop() {
  digitalWrite(Giallo, LOW);
  digitalWrite(Rosso, HIGH);
  delay(15000);               // rosso: 15 s
  digitalWrite(Rosso, LOW);
  digitalWrite(Verde, HIGH);
  delay(12000);               // verde: 12 s
  digitalWrite(Verde, LOW);
  digitalWrite(Giallo, HIGH);
  delay(3000);                // giallo: 3 s
}
```

Spiegazione del codice:

- `#define Giallo 13`, `#define Rosso 12` e `#define Verde 11` assegnano un nome leggibile ai pin. Il compilatore sostituisce quei nomi con i numeri corrispondenti;
- in `setup()` i tre pin vengono impostati come `OUTPUT`, perché Arduino deve accendere e spegnere i LED;
- in `loop()` si scrive la sequenza del semaforo nell'ordine in cui deve avvenire;
- `digitalWrite(Rosso, HIGH);` accende il LED rosso, mentre `digitalWrite(Rosso, LOW);` lo spegne;
- `delay(15000);` blocca il programma per 15000 ms, cioè 15 s. Durante questo tempo il LED rosso resta nello stato impostato;
- dopo il rosso, il programma spegne il rosso, accende il verde e attende 12 s;
- alla fine spegne il verde, accende il giallo e attende 3 s;
- quando `loop()` termina, Arduino torna automaticamente all'inizio di `loop()` e il ciclo ricomincia.

Questo sketch è una sequenza temporizzata: non legge ingressi e non prende decisioni. Esegue sempre lo stesso ordine di accensione dei LED.

## 4. Tipi di dati

In C/C++ ogni variabile deve essere dichiarata con il proprio **tipo** prima dell'uso. Il tipo determina quanta memoria SRAM occupa e quali valori può contenere: scegliere il tipo sbagliato può portare a errori sottili o a sprechi di una risorsa già scarsa.

|Tipo|Dimensione|Intervallo|
|---|---|---|
|`boolean`|1 byte|`false` / `true`|
|`char`|1 byte|−128 ÷ +127|
|`byte`|1 byte|0 ÷ 255|
|`int`|2 byte|−32.768 ÷ +32.767|
|`unsigned int`|2 byte|0 ÷ 65.535|
|`long`|4 byte|−2.147.483.648 ÷ +2.147.483.647|
|`unsigned long`|4 byte|0 ÷ +4.294.967.295|
|`float`|4 byte|±3,4 · 10³⁸|
|`double`|4 byte su Arduino UNO|uguale a `float` sull'ATmega328|

Una trappola frequente è l'**overflow**: un `byte` vale al massimo 255; sommando 1 si ottiene 0, senza alcun messaggio di errore. Sulla scheda Arduino UNO, inoltre, `double` **non** offre più precisione di `float`: sull'ATmega328 occupa gli stessi 4 byte. Le operazioni in virgola mobile vanno quindi usate con parsimonia su un microcontrollore piccolo.

Le costanti si possono esprimere in basi diverse:

```c
int a = 101;    // decimale → 101
int b = B101;   // binario  → 5
int c = 0101;   // ottale   → 65
int d = 0x101;  // esadecimale → 257
```


---

## 5. Strutture di controllo

Le strutture di controllo permettono di prendere decisioni e ripetere azioni in base alle condizioni del sistema — sono la traduzione in codice della logica booleana vista nel Focus 3.

### Selezione con if-else

`if` esegue un blocco solo se una condizione è vera; `else` gestisce il caso contrario:

```c
if (condizione) {
  // eseguito se vera
} else {
  // eseguito se falsa
}
```

Per selezioni multiple si incatenano `else if`. L'**operatore ternario** offre una forma compatta per selezioni semplici:

```c
a = (b > 9) ? 5 : 0;
// equivale a: if (b > 9) a = 5; else a = 0;
```

> ⚠️ **Trappola frequente:** `if (pippo = 1)` non è un confronto — è un'assegnazione che risulta sempre vera. Il confronto si scrive con il **doppio uguale**: `if (pippo == 1)`.

**Operatori di confronto:** `==` (uguale), `!=` (diverso), `<`, `>`, `<=`, `>=`.

**Operatori logici:** `&&` (AND, vera solo se entrambe le condizioni sono vere), `||` (OR, vera se almeno una è vera), `!` (NOT, inverte il valore di verità).

### Selezione multipla switch-case

Quando si deve scegliere tra molti valori discreti della stessa variabile, `switch-case` è più leggibile di una lunga catena `if-else if`:

```c
switch (variabile) {
  case 1:
    // eseguito se variabile == 1
    break;
  case 2:
    // eseguito se variabile == 2
    break;
  default:
    // eseguito se nessun case corrisponde
    break;
}
```

`break` è indispensabile: senza di esso il controllo "cade" nel case successivo e lo esegue anche se non corrisponde.

---

## 6. Strutture iterative

Le strutture iterative permettono di ripetere un blocco di istruzioni. Ne esistono tre, ognuna adatta a una situazione specifica.

Il **ciclo for** si usa quando si sa in anticipo quante volte ripetere:

```c
for (int i = 0; i < 10; i++) {
  // eseguito 10 volte (i da 0 a 9)
}
for (;;) { /* ciclo infinito */ }
```

Il **ciclo while** si usa quando si vuole ripetere _finché una condizione è vera_, senza sapere in anticipo quante iterazioni serviranno. La condizione è verificata _prima_ del corpo: se è falsa al primo controllo, il corpo non viene mai eseguito.

```c
while (condizione) {
  // eseguito finché la condizione è vera
}
```

Il **ciclo do-while** verifica la condizione _dopo_ il corpo, garantendo che il blocco venga eseguito **almeno una volta**:

```c
do {
  // eseguito almeno una volta
} while (condizione);
```

La scelta dipende dal caso: `for` quando il numero di iterazioni è noto; `while` quando potrebbe essere zero; `do-while` quando almeno un'esecuzione è necessaria. All'interno di qualsiasi ciclo, `break` esce immediatamente; `continue` salta le istruzioni rimanenti nel corpo e torna al controllo della condizione.


![[Media/Photon_to_Code_page_14_1.jpg]]

---

## 7. Operatori aritmetici e bit a bit

### Operatori aritmetici standard

```c
+    // addizione
-    // sottrazione
*    // moltiplicazione
/    // divisione intera (scarta il resto)
%    // resto della divisione (modulo)
```

### Operatori bit a bit

Agiscono direttamente sui singoli bit di una variabile, applicando le operazioni booleane di base a ogni coppia di bit corrispondenti:

```c
&    // AND bit a bit
|    // OR bit a bit
^    // XOR bit a bit
~    // NOT bit a bit (complemento)
```

### Operatori di scorrimento

Spostare i bit a sinistra o a destra equivale a moltiplicare o dividere per potenze di 2:

```c
x << n;   // shift sinistra di n posizioni → x * 2ⁿ
x >> n;   // shift destra di n posizioni  → x / 2ⁿ
```

Esempio: `6 = B00000110`; dopo `<< 2` diventa `B00011000 = 24`.

### Operatori composti

Forme abbreviate che rendono il codice più conciso:

```c
x++;    // post-incremento: usa il valore di x, poi incrementa
x--;    // post-decremento
++x;    // pre-incremento: incrementa, poi usa il nuovo valore
--x;    // pre-decremento

x += y;   // x = x + y
x -= y;   // x = x - y
x *= y;   // x = x * y
x /= y;   // x = x / y
```

---

## 8. Debug con la comunicazione seriale

Scrivere un programma non garantisce che funzioni subito: il debug è parte ordinaria del lavoro. Lo strumento principale di Arduino è la **comunicazione seriale**: la scheda può inviare messaggi al PC attraverso la porta USB, leggibili aprendo il **Monitor Seriale** dall'IDE (Strumenti → Monitor Seriale). La tecnica di debug più semplice consiste nell'inserire stampe strategiche nel codice per monitorare il valore delle variabili nei punti critici.

![[Media/img_44.jpeg]]

```c
// Nel setup():
Serial.begin(9600);        // inizializza la comunicazione a 9600 bit/s
Serial.flush();            // attende la trasmissione dei dati già inviati

// Nel loop():
Serial.print("Valore: ");  // invia testo senza andare a capo
Serial.println(variabile); // invia valore e va a capo
```

Le funzioni di invio si comportano in modo diverso — importante saperlo per non fraintendere l'output:

|Funzione|Comportamento|Output|
|---|---|---|
|`Serial.write(78)`|Invia il byte come carattere ASCII|→ `N`|
|`Serial.print(78)`|Invia le cifre come caratteri|→ `78`|
|`Serial.print(78, BIN)`|Invia in binario|→ `1001110`|
|`Serial.print(78, HEX)`|Invia in esadecimale|→ `4E`|
|`Serial.print(1.23456, 2)`|Invia float con 2 decimali|→ `1.23`|

Per ricevere dati inviati dal PC durante l'esecuzione:

```c
if (Serial.available() > 0) {
  pippo = Serial.read();  // legge un byte dalla coda di ricezione
}
```

---

### Progetto guidato in Tinkercad — Semaforo pedonale a chiamata

Il progetto seguente trasforma il semaforo precedente in un piccolo sistema automatico: normalmente le auto hanno il verde; quando un pedone preme il pulsante, Arduino esegue una sequenza controllata che ferma le auto, accende il verde pedonale per alcuni secondi e poi ritorna alla condizione iniziale.

Dal punto di vista dell'automazione, il sistema contiene:

- un **ingresso**: il pulsante di chiamata pedonale;
- alcune **uscite**: i LED del semaforo auto e del semaforo pedonale;
- una **logica di controllo**: il programma che decide quando cambiare stato.

#### Obiettivo

Realizzare in **Tinkercad Circuits** un semaforo pedonale a chiamata con Arduino UNO. Il sistema deve comportarsi così:

1. stato normale: auto verde, pedoni rosso;
2. se il pulsante viene premuto: auto giallo per un breve tempo;
3. poi auto rosso e pedoni verde;
4. dopo alcuni secondi: pedoni rosso e auto verde;
5. il ciclo resta in attesa di una nuova chiamata.

#### Componenti

|Componente|Quantità|Note|
|---|---:|---|
|Arduino UNO|1|Scheda di controllo|
|Breadboard|1|Per montare LED e pulsante|
|LED rosso, giallo, verde per auto|3|Semaforo veicolare|
|LED rosso e verde per pedoni|2|Semaforo pedonale|
|Resistenze 220 Ω o 330 Ω|5|Una in serie a ogni LED|
|Pulsante|1|Chiamata pedonale|
|Ponticelli|alcuni|Per alimentazione, GND e segnali|

#### Collegamenti

Usare una resistenza per ogni LED. I catodi dei LED, cioè i terminali corti, vanno collegati alla linea `−` della breadboard; gli anodi, cioè i terminali lunghi, vanno collegati ai pin indicati tramite resistenza.

|Funzione|Pin Arduino|
|---|---:|
|LED verde auto|11|
|LED giallo auto|12|
|LED rosso auto|13|
|LED rosso pedoni|8|
|LED verde pedoni|7|
|Pulsante chiamata|10|

Collegare inoltre:

1. **GND** di Arduino alla linea `−` della breadboard;
2. un lato del pulsante al **pin 10**;
3. il lato opposto del pulsante alla linea `−`.

Anche qui si usa `INPUT_PULLUP`: il pulsante non va collegato ai 5 V. Quando è rilasciato Arduino legge `HIGH`; quando viene premuto legge `LOW`.

#### Procedura in Tinkercad

1. creare un nuovo circuito in **Tinkercad Circuits**;
2. trascinare nell'area di lavoro Arduino UNO e una breadboard;
3. aggiungere i cinque LED, ciascuno con la propria resistenza;
4. collegare i LED ai pin indicati nella tabella;
5. inserire il pulsante a cavallo del canale centrale della breadboard;
6. collegare il pulsante tra pin 10 e GND;
7. aprire l'editor del codice, scegliere la modalità **Testo** e inserire lo sketch;
8. avviare la simulazione e premere il pulsante.

#### Sketch

```c
const int AUTO_VERDE = 11;
const int AUTO_GIALLO = 12;
const int AUTO_ROSSO = 13;
const int PEDONI_ROSSO = 8;
const int PEDONI_VERDE = 7;
const int PULSANTE = 10;

void setup() {
  pinMode(AUTO_VERDE, OUTPUT);
  pinMode(AUTO_GIALLO, OUTPUT);
  pinMode(AUTO_ROSSO, OUTPUT);
  pinMode(PEDONI_ROSSO, OUTPUT);
  pinMode(PEDONI_VERDE, OUTPUT);
  pinMode(PULSANTE, INPUT_PULLUP);

  statoNormale();
}

void loop() {
  if (digitalRead(PULSANTE) == LOW) {
    cicloPedonale();
  }
}

void statoNormale() {
  digitalWrite(AUTO_VERDE, HIGH);
  digitalWrite(AUTO_GIALLO, LOW);
  digitalWrite(AUTO_ROSSO, LOW);
  digitalWrite(PEDONI_ROSSO, HIGH);
  digitalWrite(PEDONI_VERDE, LOW);
}

void cicloPedonale() {
  digitalWrite(AUTO_VERDE, LOW);
  digitalWrite(AUTO_GIALLO, HIGH);
  delay(2000);

  digitalWrite(AUTO_GIALLO, LOW);
  digitalWrite(AUTO_ROSSO, HIGH);
  delay(1000);

  digitalWrite(PEDONI_ROSSO, LOW);
  digitalWrite(PEDONI_VERDE, HIGH);
  delay(5000);

  digitalWrite(PEDONI_VERDE, LOW);
  digitalWrite(PEDONI_ROSSO, HIGH);
  delay(1000);

  digitalWrite(AUTO_ROSSO, LOW);
  statoNormale();
}
```

#### Spiegazione dello sketch

La prima parte assegna un nome a ogni pin:

```c
const int AUTO_VERDE = 11;
const int AUTO_GIALLO = 12;
const int AUTO_ROSSO = 13;
const int PEDONI_ROSSO = 8;
const int PEDONI_VERDE = 7;
const int PULSANTE = 10;
```

Queste righe non accendono ancora nulla: servono solo a rendere leggibile il programma. Scrivere `AUTO_VERDE` è più chiaro di scrivere sempre `11`, soprattutto quando il circuito ha molti LED.

Nel `setup()` Arduino prepara i pin:

- i cinque LED sono impostati come `OUTPUT`, perché Arduino deve comandarli;
- il pulsante è impostato come `INPUT_PULLUP`, quindi legge `HIGH` quando è rilasciato e `LOW` quando viene premuto;
- alla fine viene chiamata la funzione `statoNormale();`, che porta subito il semaforo nella condizione iniziale.

La funzione `loop()` controlla continuamente il pulsante:

```c
void loop() {
  if (digitalRead(PULSANTE) == LOW) {
    cicloPedonale();
  }
}
```

`digitalRead(PULSANTE)` legge il pin 10. Se il valore è `LOW`, significa che il pulsante è premuto, perché il pulsante collega il pin a GND. In quel caso Arduino esegue `cicloPedonale();`. Se il pulsante non è premuto, non succede nulla e `loop()` continua a ripetere il controllo.

La funzione `statoNormale()` descrive la situazione di riposo:

- auto verde acceso;
- auto giallo spento;
- auto rosso spento;
- pedoni rosso acceso;
- pedoni verde spento.

La funzione `cicloPedonale()` descrive invece cosa succede dopo la chiamata pedonale:

1. spegne il verde auto e accende il giallo auto per 2 s;
2. spegne il giallo e accende il rosso auto;
3. dopo 1 s spegne il rosso pedoni e accende il verde pedoni per 5 s;
4. spegne il verde pedoni e riaccende il rosso pedoni;
5. spegne il rosso auto e richiama `statoNormale()` per tornare alla situazione iniziale.

In questo esempio il codice è diviso in funzioni per renderlo più leggibile. `statoNormale()` e `cicloPedonale()` non sono comandi speciali di Arduino: sono funzioni create nel programma per raccogliere istruzioni che appartengono alla stessa fase del funzionamento.

#### Controlli da fare

Prima di considerare il progetto funzionante, verificare questi punti:

- in partenza devono essere accesi solo **verde auto** e **rosso pedoni**;
- premendo il pulsante, il verde auto deve spegnersi e accendersi il giallo;
- durante l'attraversamento devono essere accesi **rosso auto** e **verde pedoni**;
- alla fine il sistema deve tornare automaticamente allo stato iniziale;
- ogni LED deve avere la propria resistenza in serie.

#### Possibili modifiche

Per rendere il progetto leggermente più ricco si può chiedere agli studenti di:

- cambiare i tempi del ciclo;
- far lampeggiare il verde pedonale negli ultimi secondi;
- aggiungere un secondo pulsante dall'altro lato della strada;
- usare il Monitor Seriale per stampare lo stato del sistema: `NORMALE`, `AUTO_GIALLO`, `ATTRAVERSAMENTO`.

# FOCUS 4C — Esercitazioni Pratiche con Arduino

> Questo Focus è il complemento pratico del Focus 4A e del Focus 4B. Le esercitazioni sono organizzate in tre blocchi progressivi: si parte dai concetti più elementari — accendere un LED, leggere un pulsante — per arrivare a un progetto integrativo che mette insieme ingressi digitali, ingressi analogici, uscite e logica di controllo. Ogni esercitazione segue sempre la stessa struttura: obiettivo, componenti, schema di collegamento, sketch commentato e domande di verifica.

---

## Blocco A — Fondamenta: digitale in uscita e in ingresso

Il primo blocco si concentra sui concetti minimi necessari per usare Arduino in modo autonomo: configurare i pin, gestire i tempi con `delay`, leggere un ingresso e prendere una semplice decisione con `if`. Ogni esercitazione introduce un solo concetto nuovo alla volta, costruendo sulla precedente.

---

### Esercitazione A1 — LED lampeggiante a frequenza variabile

**Obiettivo:** montare il primo circuito su breadboard, caricare uno sketch e modificare i parametri di tempo per osservare come cambia il comportamento del sistema. Si introduce la struttura `setup / loop` e la funzione `delay`.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1|Alimentato via USB|
|Breadboard|1||
|LED|1|Qualsiasi colore|
|Resistenza 220 Ω|1|In serie al LED|
|Ponticelli|2|Rosso per il segnale, nero per GND|

**Schema di collegamento:**

Il LED va inserito sulla breadboard con i due terminali in gruppi di fori separati. Il catodo (terminale corto) si collega alla linea `−` della breadboard, che a sua volta è collegata a un pin **GND** di Arduino. L'anodo (terminale lungo) si collega alla resistenza da 220 Ω; l'altra estremità della resistenza si collega al **pin 13** di Arduino.

```
Pin 13 → Resistenza 220 Ω → Anodo LED → Catodo LED → GND
```

**Sketch:**

```c
// A1 — LED lampeggiante
// Il LED collegato al pin 13 si accende e spegne con tempi definiti dalle costanti.

const int LED_PIN = 13;
const int TEMPO_ON  = 500;   // ms di accensione
const int TEMPO_OFF = 500;   // ms di spegnimento

void setup() {
  pinMode(LED_PIN, OUTPUT);  // il pin 13 è un'uscita
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // accende il LED
  delay(TEMPO_ON);
  digitalWrite(LED_PIN, LOW);   // spegne il LED
  delay(TEMPO_OFF);
}
```

**Cosa fare:**

1. Caricare lo sketch sulla scheda e osservare il lampeggio.
2. Modificare `TEMPO_ON` a 100 e `TEMPO_OFF` a 900: descrivere il cambiamento.
3. Impostare `TEMPO_ON = 50` e `TEMPO_OFF = 50`: a quale frequenza lampeggia il LED? _(f = 1/T; T = 0,1 s → f = 10 Hz)_
4. Provare a portare entrambi i valori a 10 ms: il lampeggio è ancora visibile?

**Domande di verifica:**

- Cosa succederebbe se si rimuovesse la resistenza da 220 Ω?
- Perché `TEMPO_ON` e `TEMPO_OFF` sono dichiarati come `const int` invece di scrivere i numeri direttamente dentro `delay()`?
- In quale dei due blocchi (`setup` o `loop`) si configura il pin, e perché?

---

### Esercitazione A2 — LED a sequenza con ciclo for

**Obiettivo:** gestire tre LED con un ciclo `for`, introducendo gli array e il concetto di iterazione. Si vede concretamente come il ciclo permette di scrivere una sola volta il codice invece di ripetere le stesse istruzioni per ogni LED.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LED (colori diversi)|3|Es. rosso, giallo, verde|
|Resistenze 220 Ω|3|Una per ogni LED|
|Ponticelli|vari||

**Schema di collegamento:**

I tre LED si inseriscono sulla breadboard in posizioni separate. Ogni catodo va collegato alla linea `−`; ogni anodo va collegato alla propria resistenza, e poi al pin di Arduino corrispondente: LED 1 → **pin 11**, LED 2 → **pin 12**, LED 3 → **pin 13**. Un ponticello collega GND di Arduino alla linea `−`.

**Sketch:**

```c
// A2 — Sequenza di LED con ciclo for
// I tre LED si accendono uno alla volta in sequenza, poi si spengono
// in ordine inverso, usando un array e un ciclo for.

const int N_LED = 3;
const int PIN_LED[N_LED] = {11, 12, 13};  // array dei pin
const int PAUSA = 300;                     // ms tra un LED e il successivo

void setup() {
  for (int i = 0; i < N_LED; i++) {
    pinMode(PIN_LED[i], OUTPUT);  // configura ogni pin come uscita
  }
}

void loop() {
  // Accende i LED uno alla volta, dal primo all'ultimo
  for (int i = 0; i < N_LED; i++) {
    digitalWrite(PIN_LED[i], HIGH);
    delay(PAUSA);
  }

  // Spegne i LED uno alla volta, dall'ultimo al primo
  for (int i = N_LED - 1; i >= 0; i--) {
    digitalWrite(PIN_LED[i], LOW);
    delay(PAUSA);
  }
}
```

**Cosa fare:**

1. Caricare lo sketch e osservare la sequenza avanti/indietro.
2. Modificare il codice per fare in modo che i LED si accendano tutti insieme e poi si spengano tutti insieme.
3. Aggiungere un quarto LED al **pin 10** e modificare solo la costante `N_LED` e l'array `PIN_LED`: il resto del codice non deve cambiare.
4. Modificare la sequenza di spegnimento in modo che avvenga nello stesso ordine dell'accensione (non inverso).

**Domande di verifica:**

- Cosa contiene `PIN_LED[0]`? E `PIN_LED[2]`?
- Se si scrivesse `for (int i = 0; i <= N_LED; i++)` invece di `i < N_LED`, cosa succederebbe?
- Qual è il vantaggio di usare un array rispetto a dichiarare tre variabili separate `pin1`, `pin2`, `pin3`?

---

### Esercitazione A3 — Pulsante con antirimbalzo software

**Obiettivo:** leggere un ingresso digitale con `digitalRead` e capire il problema del rimbalzo dei contatti meccanici. Si introduce la tecnica di antirimbalzo software più semplice e si osserva la differenza nel comportamento del sistema.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LED|1||
|Resistenza 220 Ω|1|In serie al LED|
|Pulsante|1||
|Ponticelli|vari||

**Schema di collegamento:**

Collegare il LED al **pin 13** con la sua resistenza, come nell'esercitazione A1. Inserire il pulsante a cavallo del canale centrale della breadboard. Collegare un lato del pulsante al **pin 10**; collegare il lato opposto alla linea `−`. Usare `INPUT_PULLUP`: non serve collegare il pulsante ai 5 V.

**Sketch — Fase 1 (senza antirimbalzo):**

```c
// A3a — Pulsante senza antirimbalzo
// Il LED cambia stato a ogni pressione, ma può comportarsi in modo
// imprevedibile a causa del rimbalzo meccanico del pulsante.

const int LED_PIN = 13;
const int BTN_PIN = 10;

bool statoLed = false;      // false = spento
bool ultimoStatoBtn = HIGH; // pulsante rilasciato con INPUT_PULLUP

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  bool statoBtn = digitalRead(BTN_PIN);

  // Rileva il fronte di discesa: da HIGH a LOW (pulsante appena premuto)
  if (ultimoStatoBtn == HIGH && statoBtn == LOW) {
    statoLed = !statoLed;              // inverte lo stato del LED
    digitalWrite(LED_PIN, statoLed);
    Serial.println("Cambio stato");    // stampa ogni rilevamento
  }

  ultimoStatoBtn = statoBtn;
}
```

**Cosa osservare:** premere il pulsante lentamente e velocemente. Il LED potrebbe cambiare stato più di una volta per singola pressione. Aprire il Monitor Seriale (9600 baud) e contare quante volte viene stampato "Cambio stato" per ogni pressione.

**Sketch — Fase 2 (con antirimbalzo):**

```c
// A3b — Pulsante con antirimbalzo software
// Si introduce un ritardo minimo tra due rilevamenti consecutivi.
// Se la variazione dura meno di DEBOUNCE_MS, viene ignorata.

const int LED_PIN      = 13;
const int BTN_PIN      = 10;
const int DEBOUNCE_MS  = 50;  // soglia di antirimbalzo in millisecondi

bool statoLed          = false;
bool ultimoStatoBtn    = HIGH;
unsigned long tUltimoSegnale = 0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  bool statoBtn = digitalRead(BTN_PIN);

  if (ultimoStatoBtn == HIGH && statoBtn == LOW) {
    unsigned long adesso = millis();  // tempo corrente in ms

    if (adesso - tUltimoSegnale > DEBOUNCE_MS) {
      statoLed = !statoLed;
      digitalWrite(LED_PIN, statoLed);
      Serial.println("Cambio stato valido");
      tUltimoSegnale = adesso;
    }
  }

  ultimoStatoBtn = statoBtn;
}
```

**Cosa fare:**

1. Caricare la Fase 1 e contare i falsi rilevamenti sul Monitor Seriale.
2. Caricare la Fase 2 e verificare che ogni pressione produca esattamente un "Cambio stato valido".
3. Provare a ridurre `DEBOUNCE_MS` a 5 ms: il problema del rimbalzo ricompare?
4. Modificare il codice per rilevare invece il fronte di salita (rilascio del pulsante).

**Domande di verifica:**

- Perché `tUltimoSegnale` è dichiarato come `unsigned long` e non `int`?
- Cosa fa la funzione `millis()`? In che unità restituisce il valore?
- Perché con `INPUT_PULLUP` il pulsante legge `HIGH` quando è rilasciato e `LOW` quando è premuto?

---

## Blocco B — Uscite avanzate e logica di controllo

Il secondo blocco introduce le uscite analogiche simulate (PWM), il display a sette segmenti come caso di mappatura tra dati e uscite, e una logica di controllo più articolata che usa funzioni separate. Si consolida l'uso del Monitor Seriale come strumento di debug.

---

### Esercitazione B1 — Controllo della luminosità con PWM

**Obiettivo:** usare `analogWrite` per variare la luminosità di un LED tramite PWM (Pulse Width Modulation). Si introduce il concetto di duty cycle e si vede come un segnale digitale possa simulare un effetto analogico.

**Cosa è il PWM:** un pin PWM non può fornire una tensione intermedia tra 0 V e 5 V. Può però alternare rapidamente tra 0 V e 5 V. Se resta a 5 V per metà del tempo e a 0 V per l'altra metà (duty cycle 50 %), il LED percepisce in media 2,5 V e appare a metà luminosità. `analogWrite(pin, valore)` riceve un valore da 0 (sempre OFF) a 255 (sempre ON).

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LED|1||
|Resistenza 220 Ω|1||
|Pulsante|2|Per aumentare/diminuire la luminosità|
|Ponticelli|vari||

**Schema di collegamento:**

Collegare il LED al **pin 11** (che supporta PWM, indicato con `~` sulla scheda) con la sua resistenza da 220 Ω. Inserire due pulsanti a cavallo del canale centrale: pulsante "+" al **pin 9**, pulsante "−" al **pin 8**. Entrambi con l'altro lato a GND e modalità `INPUT_PULLUP`.

**Sketch:**

```c
// B1 — Controllo luminosità LED con PWM
// Due pulsanti aumentano e diminuiscono la luminosità a passi di 25.
// Il valore corrente viene stampato sul Monitor Seriale.

const int LED_PIN  = 11;  // pin PWM (~)
const int BTN_PIU  = 9;   // pulsante aumenta
const int BTN_MENO = 8;   // pulsante diminuisce
const int PASSO    = 25;  // variazione per ogni pressione
const int DEBOUNCE = 50;

int luminosita = 0;       // valore PWM: 0–255
bool statoP = HIGH, statoM = HIGH;
unsigned long tP = 0, tM = 0;

void setup() {
  pinMode(LED_PIN,  OUTPUT);
  pinMode(BTN_PIU,  INPUT_PULLUP);
  pinMode(BTN_MENO, INPUT_PULLUP);
  Serial.begin(9600);
  analogWrite(LED_PIN, luminosita);
}

void loop() {
  bool letturaPiu  = digitalRead(BTN_PIU);
  bool letturaMeno = digitalRead(BTN_MENO);
  unsigned long adesso = millis();

  // Pulsante +
  if (statoP == HIGH && letturaPiu == LOW && adesso - tP > DEBOUNCE) {
    luminosita = min(luminosita + PASSO, 255);  // non supera 255
    aggiorna();
    tP = adesso;
  }

  // Pulsante −
  if (statoM == HIGH && letturaMeno == LOW && adesso - tM > DEBOUNCE) {
    luminosita = max(luminosita - PASSO, 0);    // non scende sotto 0
    aggiorna();
    tM = adesso;
  }

  statoP = letturaPiu;
  statoM = letturaMeno;
}

void aggiorna() {
  analogWrite(LED_PIN, luminosita);
  Serial.print("Luminosità: ");
  Serial.print(luminosita);
  Serial.print(" / 255  →  duty cycle: ");
  Serial.print(luminosita * 100 / 255);
  Serial.println(" %");
}
```

**Cosa fare:**

1. Verificare che `analogWrite` funzioni solo sui pin con il simbolo `~` sulla scheda.
2. Portare la luminosità al massimo (255) e al minimo (0) e osservare i valori sul Monitor Seriale.
3. Modificare `PASSO` a 5: quante pressioni servono per passare da 0 a 255?
4. Aggiungere un terzo pulsante al **pin 7** che riporta la luminosità al 50 % (valore 127) in un solo tocco.

**Domande di verifica:**

- Un duty cycle del 75 % corrisponde a quale valore di `analogWrite`?
- Perché si usa `min(luminosita + PASSO, 255)` invece di scrivere semplicemente `luminosita = luminosita + PASSO`?
- I pin PWM di Arduino UNO sono 6: quali sono? _(risposta: 3, 5, 6, 9, 10, 11)_

---

### Esercitazione B2 — Display a sette segmenti

**Obiettivo:** pilotare un display a sette segmenti con anodo comune, introducendo il concetto di mappatura tra dato (una cifra da 0 a 9) e un insieme di uscite digitali. Si usa un array bidimensionale per codificare le cifre.

**Il display a sette segmenti:** è composto da sette LED interni (segmenti A–G) più il punto decimale. In un display ad anodo comune il pin comune va collegato a 5 V; ogni segmento si accende portando il suo pin a LOW (logica invertita). Per accendere il segmento A si manda LOW al pin corrispondente.

```
 _
|_|   ← A (sopra), B e C (lati destra), D (sotto),
|_|      E e F (lati sinistra), G (centro)
```

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|Display 7 segmenti (anodo comune)|1||
|Resistenze 220 Ω|7|Una per ogni segmento|
|Ponticelli|vari||

**Schema di collegamento:**

|Segmento|Pin Arduino|
|---|--:|
|A|2|
|B|3|
|C|4|
|D|5|
|E|6|
|F|7|
|G|8|
|COM (anodo comune)|5 V|

Inserire una resistenza da 220 Ω in serie a ogni segmento, tra il pin Arduino e il pin del display.

**Sketch:**

```c
// B2 — Display a sette segmenti
// Il display mostra in sequenza le cifre da 0 a 9.
// Ogni colonna dell'array corrisponde a un segmento (A–G).
// Con anodo comune, 0 = segmento acceso, 1 = segmento spento (logica invertita).

const int N_SEG = 7;
const int SEG_PIN[N_SEG] = {2, 3, 4, 5, 6, 7, 8};  // A, B, C, D, E, F, G

// Codifica delle cifre: ogni riga è una cifra (0–9),
// ogni colonna è un segmento (A, B, C, D, E, F, G)
// 0 = acceso, 1 = spento (anodo comune → logica invertita)
const bool CIFRE[10][7] = {
  {0, 0, 0, 0, 0, 0, 1},  // 0
  {1, 0, 0, 1, 1, 1, 1},  // 1
  {0, 0, 1, 0, 0, 1, 0},  // 2
  {0, 0, 0, 0, 1, 1, 0},  // 3
  {1, 0, 0, 1, 1, 0, 0},  // 4
  {0, 1, 0, 0, 1, 0, 0},  // 5
  {0, 1, 0, 0, 0, 0, 0},  // 6
  {0, 0, 0, 1, 1, 1, 1},  // 7
  {0, 0, 0, 0, 0, 0, 0},  // 8
  {0, 0, 0, 0, 1, 0, 0},  // 9
};

void setup() {
  for (int i = 0; i < N_SEG; i++) {
    pinMode(SEG_PIN[i], OUTPUT);
    digitalWrite(SEG_PIN[i], HIGH);  // tutti i segmenti spenti all'avvio
  }
}

void mostraCifra(int cifra) {
  for (int seg = 0; seg < N_SEG; seg++) {
    digitalWrite(SEG_PIN[seg], CIFRE[cifra][seg]);
  }
}

void loop() {
  for (int c = 0; c <= 9; c++) {
    mostraCifra(c);
    delay(1000);
  }
}
```

**Cosa fare:**

1. Caricare lo sketch e verificare che tutte le cifre da 0 a 9 vengano mostrate correttamente.
2. Aggiungere un pulsante al **pin 10**: ogni pressione incrementa la cifra visualizzata di uno (con antirimbalzo).
3. Aggiungere la visualizzazione del trattino `−` come undicesimo stato dell'array (solo il segmento G acceso).
4. Modificare la funzione `mostraCifra` per accettare anche il carattere `-` come parametro.

**Domande di verifica:**

- Perché ogni segmento ha bisogno della propria resistenza, anziché una sola resistenza sul pin comune?
- Nella codifica, la cifra 8 ha tutti gli elementi a 0: cosa significa?
- Cosa cambierebbe nella codifica se il display fosse a catodo comune anziché anodo comune?

---

### Esercitazione B3 — Semaforo con stato esplicito

**Obiettivo:** gestire una logica sequenziale con stati espliciti usando un `enum` e uno `switch-case`. Si impara a strutturare un programma in modo che lo stato del sistema sia sempre leggibile, evitando il problema di `delay` che blocca il processore.

**Il problema di delay:** quando il programma esegue `delay(15000)` per il rosso del semaforo, il microcontrollore è completamente bloccato per 15 secondi. Non può leggere pulsanti, aggiornare display o fare altro. Questo è accettabile per esempi semplici, ma in un sistema reale è un limite grave. La soluzione è verificare il tempo trascorso con `millis()` invece di aspettare passivamente.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LED rosso, giallo, verde|3||
|Resistenze 220 Ω|3||
|Pulsante|1|Simula la chiamata pedonale|
|Ponticelli|vari||

**Schema di collegamento:**

LED verde → **pin 11**, LED giallo → **pin 12**, LED rosso → **pin 13**. Pulsante tra **pin 10** e GND (modalità `INPUT_PULLUP`).

**Sketch:**

```c
// B3 — Semaforo con stato esplicito e millis()
// Il programma non usa delay(): controlla il tempo con millis()
// e può quindi rispondere al pulsante in qualsiasi momento.

const int PIN_VERDE  = 11;
const int PIN_GIALLO = 12;
const int PIN_ROSSO  = 13;
const int PIN_BTN    = 10;

// Definizione degli stati possibili del semaforo
enum StatoSemaforo { VERDE, GIALLO, ROSSO };

StatoSemaforo stato = VERDE;       // stato iniziale
unsigned long tInizioStato = 0;    // momento in cui è iniziato lo stato corrente
bool chiamata = false;             // il pulsante è stato premuto?

// Durate degli stati in millisecondi
const unsigned long DURATA_VERDE  = 8000;
const unsigned long DURATA_GIALLO = 2000;
const unsigned long DURATA_ROSSO  = 6000;

void setup() {
  pinMode(PIN_VERDE,  OUTPUT);
  pinMode(PIN_GIALLO, OUTPUT);
  pinMode(PIN_ROSSO,  OUTPUT);
  pinMode(PIN_BTN,    INPUT_PULLUP);
  Serial.begin(9600);
  impostaPinDaStato(VERDE);
  tInizioStato = millis();
}

void impostaPinDaStato(StatoSemaforo s) {
  digitalWrite(PIN_VERDE,  s == VERDE);
  digitalWrite(PIN_GIALLO, s == GIALLO);
  digitalWrite(PIN_ROSSO,  s == ROSSO);

  Serial.print("Stato → ");
  if (s == VERDE)  Serial.println("VERDE");
  if (s == GIALLO) Serial.println("GIALLO");
  if (s == ROSSO)  Serial.println("ROSSO");
}

void cambiaStato(StatoSemaforo nuovo) {
  stato = nuovo;
  impostaPinDaStato(nuovo);
  tInizioStato = millis();
}

void loop() {
  // Legge il pulsante (senza antirimbalzo per semplicità)
  if (digitalRead(PIN_BTN) == LOW) {
    chiamata = true;
  }

  unsigned long tempoNelloStato = millis() - tInizioStato;

  switch (stato) {
    case VERDE:
      if (tempoNelloStato >= DURATA_VERDE || chiamata) {
        chiamata = false;
        cambiaStato(GIALLO);
      }
      break;

    case GIALLO:
      if (tempoNelloStato >= DURATA_GIALLO) {
        cambiaStato(ROSSO);
      }
      break;

    case ROSSO:
      if (tempoNelloStato >= DURATA_ROSSO) {
        cambiaStato(VERDE);
      }
      break;
  }
}
```

**Cosa fare:**

1. Caricare lo sketch. Osservare nel Monitor Seriale i cambi di stato.
2. Premere il pulsante durante il VERDE: il semaforo dovrebbe anticipare il cambio al GIALLO.
3. Verificare che durante le pause il programma non sia bloccato: aggiungere nel `loop()`, prima dello `switch`, una stampa del tipo `Serial.println("loop in esecuzione")` con `delay(200)` e verificare che i messaggi continuino anche durante le fasi più lunghe.
4. Aggiungere allo stato ROSSO un LED aggiuntivo che lampeggia ogni 500 ms (senza usare `delay`).

**Domande di verifica:**

- Cos'è un `enum` e quale vantaggio offre rispetto a usare numeri interi (0 = VERDE, 1 = GIALLO, 2 = ROSSO)?
- Cosa calcola l'espressione `millis() - tInizioStato`?
- Perché il programma senza `delay` è preferibile in un sistema reale?

---

## Blocco C — Ingressi analogici e progetto integrativo

Il terzo blocco introduce la conversione analogico-digitale (ADC) di Arduino, i sensori analogici più comuni e la funzione `map()` per adattare i valori letti ai range delle uscite. L'ultima esercitazione è un progetto integrativo che richiede di mettere insieme tutti i concetti precedenti.

---

### Esercitazione C1 — Potenziometro e Monitor Seriale

**Obiettivo:** leggere un ingresso analogico con `analogRead`, capire il range dell'ADC (0–1023) e usare la funzione `map()` per scalare il valore letto in un range diverso. Si usa il Monitor Seriale per visualizzare i dati in tempo reale.

**L'ADC di Arduino:** i pin A0–A5 sono ingressi analogici collegati a un convertitore ADC a 10 bit. Un segnale tra 0 V e 5 V viene trasformato in un numero intero tra 0 e 1023. La risoluzione è 5 V / 1024 ≈ 4,9 mV per unità.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|Potenziometro 10 kΩ|1||
|LED|1||
|Resistenza 220 Ω|1||
|Ponticelli|vari||

**Schema di collegamento:**

Il potenziometro ha tre pin: i due estremi vanno collegati rispettivamente a **5 V** e **GND**; il pin centrale (cursore) va collegato al **pin A0**. Il LED con la sua resistenza va al **pin 11** (PWM).

**Sketch:**

```c
// C1 — Potenziometro: lettura analogica e controllo luminosità
// Il potenziometro controlla la luminosità del LED.
// Sul Monitor Seriale vengono stampati i valori grezzi e la percentuale.

const int POT_PIN = A0;  // ingresso analogico
const int LED_PIN = 11;  // uscita PWM

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int valoreGrezzo = analogRead(POT_PIN);  // legge un valore tra 0 e 1023

  // Scala il valore da 0–1023 a 0–255 per analogWrite
  int valorePWM = map(valoreGrezzo, 0, 1023, 0, 255);

  // Calcola la percentuale per la stampa
  int percentuale = map(valoreGrezzo, 0, 1023, 0, 100);

  analogWrite(LED_PIN, valorePWM);

  Serial.print("ADC grezzo: ");
  Serial.print(valoreGrezzo);
  Serial.print("  |  PWM: ");
  Serial.print(valorePWM);
  Serial.print("  |  Luminosità: ");
  Serial.print(percentuale);
  Serial.println(" %");

  delay(100);  // rallenta le stampe per renderle leggibili
}
```

**Cosa fare:**

1. Caricare lo sketch, aprire il Monitor Seriale e ruotare lentamente il potenziometro. Osservare come i tre valori cambiano in modo proporzionale.
2. Trovare sperimentalmente la posizione del potenziometro che dà un valore ADC di circa 512.
3. Modificare `map(valoreGrezzo, 0, 1023, 0, 255)` in `map(valoreGrezzo, 0, 1023, 255, 0)`: cosa cambia nel comportamento del LED?
4. Usare il **Plotter Seriale** (Strumenti → Plotter Seriale) invece del Monitor Seriale: il valore del potenziometro viene mostrato come grafico in tempo reale.

**Domande di verifica:**

- Qual è la risoluzione in volt dell'ADC a 10 bit con riferimento a 5 V?
- Se `analogRead` restituisce 512, a quale tensione corrisponde approssimativamente?
- Cosa fa `map(valore, 0, 1023, 0, 255)` se `valore` è 256?

---

### Esercitazione C2 — Sensore di luce (LDR) e soglia adattiva

**Obiettivo:** usare un sensore LDR (Light Dependent Resistor) come ingresso analogico. Si introduce il concetto di divisore di tensione per la lettura del sensore e si implementa una soglia di attivazione configurabile via Monitor Seriale.

**L'LDR:** è una resistenza che varia il suo valore in funzione della luce ricevuta: in piena luce ha resistenza bassa (poche centinaia di Ω), al buio ha resistenza alta (decine di kΩ). Da solo non produce una tensione: deve essere usato in un **divisore di tensione** con una resistenza fissa per convertire la variazione di resistenza in una variazione di tensione leggibile dall'ADC.

```
5 V → R_fissa (10 kΩ) → nodo A → LDR → GND
                            ↑
                          A0 di Arduino
```

Con più luce, l'LDR ha meno resistenza → il nodo A scende → `analogRead` restituisce un valore più basso.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LDR|1||
|Resistenza 10 kΩ|1|Resistenza di pull-down del divisore|
|LED|1|Simula una luce notturna automatica|
|Resistenza 220 Ω|1||
|Ponticelli|vari||

**Schema di collegamento:**

Costruire il divisore di tensione sulla breadboard: 5 V → resistenza 10 kΩ → nodo centrale → LDR → GND. Il nodo centrale si collega ad **A0**. Il LED con la sua resistenza va al **pin 13**.

**Sketch:**

```c
// C2 — Sensore di luce con soglia adattiva
// Il LED si accende quando la luce scende sotto la soglia.
// La soglia può essere modificata inviando un numero via Monitor Seriale.

const int LDR_PIN  = A0;
const int LED_PIN  = 13;

int soglia = 400;  // valore ADC sotto il quale il LED si accende

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("Soglia attuale: " + String(soglia));
  Serial.println("Invia un numero (0–1023) per cambiare la soglia.");
}

void loop() {
  // Legge la nuova soglia dal Monitor Seriale, se disponibile
  if (Serial.available() > 0) {
    int nuovaSoglia = Serial.parseInt();
    if (nuovaSoglia >= 0 && nuovaSoglia <= 1023) {
      soglia = nuovaSoglia;
      Serial.print("Nuova soglia impostata: ");
      Serial.println(soglia);
    }
  }

  int luce = analogRead(LDR_PIN);

  if (luce < soglia) {
    digitalWrite(LED_PIN, HIGH);  // buio: LED acceso
  } else {
    digitalWrite(LED_PIN, LOW);   // luce: LED spento
  }

  Serial.print("Luce: ");
  Serial.print(luce);
  Serial.print("  |  Soglia: ");
  Serial.print(soglia);
  Serial.print("  |  LED: ");
  Serial.println(luce < soglia ? "ACCESO" : "SPENTO");

  delay(200);
}
```

**Cosa fare:**

1. Caricare lo sketch. Coprire l'LDR con la mano e verificare che il LED si accenda.
2. Osservare nel Monitor Seriale il valore di "Luce" in condizioni normali e coperto: annotare i due valori.
3. Inviare una nuova soglia tramite Monitor Seriale per calibrare il punto di attivazione esatto.
4. Modificare il codice per aggiungere un'**isteresi**: il LED si accende sotto la soglia, ma si spegne solo quando la luce supera la soglia più 50 unità. Questo evita sfarfallii quando il valore ADC oscilla intorno alla soglia.

**Domande di verifica:**

- Cosa succederebbe se la resistenza fissa del divisore fosse 100 kΩ invece di 10 kΩ? Il sensore sarebbe più o meno sensibile alle variazioni di luce?
- Cos'è l'isteresi e perché è utile nei sistemi di controllo con soglia?
- `Serial.parseInt()` blocca il programma in attesa di un numero, oppure restituisce 0 se non ci sono dati? _(suggerimento: guardare il comportamento quando non si invia nulla)_

---

### Esercitazione C3 — Progetto integrativo: sistema di allerta ambientale

**Obiettivo:** progettare e realizzare un sistema completo che integra ingressi digitali, ingressi analogici, uscite digitali e PWM, logica condizionale e comunicazione seriale. Il sistema simula un pannello di controllo ambientale con tre livelli di allerta.

**Descrizione del sistema:**

Il sistema monitora continuamente due grandezze: la luce ambientale (LDR sul pin A0) e un valore di "temperatura simulata" (potenziometro sul pin A1). In base alla combinazione dei valori letti, attiva uno dei tre livelli di allerta:

|Livello|Condizione|LED verde|LED giallo|LED rosso|Monitor Seriale|
|---|---|:-:|:-:|:-:|---|
|OK|Nessuna anomalia|Acceso|Spento|Spento|"SISTEMA OK"|
|ATTENZIONE|Una soglia superata|Lampeggia|Acceso|Spento|"ATTENZIONE"|
|ALLARME|Entrambe le soglie superate|Spento|Spento|Lampeggia veloce|"ALLARME!"|

Un pulsante di reset (**pin 10**) riporta il sistema allo stato OK azzerando temporaneamente le letture per 3 secondi.

**Componenti:**

|Componente|Quantità|Note|
|---|--:|---|
|Arduino UNO|1||
|Breadboard|1||
|LDR|1|Con resistenza 10 kΩ|
|Potenziometro 10 kΩ|1|Simula la temperatura|
|LED verde, giallo, rosso|3||
|Resistenze 220 Ω|3||
|Pulsante|1|Reset|
|Ponticelli|vari||

**Schema di collegamento:**

|Componente|Pin Arduino|
|---|:-:|
|LDR (nodo centrale del divisore)|A0|
|Potenziometro (cursore)|A1|
|LED verde|11 (PWM)|
|LED giallo|12|
|LED rosso|13|
|Pulsante reset|10|

**Sketch:**

```c
// C3 — Sistema di allerta ambientale
// Integra: analogRead, digitalRead, PWM, millis(), funzioni, Serial.

const int LDR_PIN    = A0;
const int TEMP_PIN   = A1;
const int LED_VERDE  = 11;
const int LED_GIALLO = 12;
const int LED_ROSSO  = 13;
const int BTN_RESET  = 10;

const int SOGLIA_LUCE = 300;   // sotto = buio anomalo
const int SOGLIA_TEMP = 700;   // sopra = temperatura alta

enum Livello { OK, ATTENZIONE, ALLARME };

Livello livelloCorrente = OK;
unsigned long tBlink = 0;
bool statoBlinkVerde = false;
bool statoBlinkRosso = false;

bool inReset = false;
unsigned long tReset = 0;
const unsigned long DURATA_RESET = 3000;

void setup() {
  pinMode(LED_VERDE,  OUTPUT);
  pinMode(LED_GIALLO, OUTPUT);
  pinMode(LED_ROSSO,  OUTPUT);
  pinMode(BTN_RESET,  INPUT_PULLUP);
  Serial.begin(9600);
  Serial.println("=== SISTEMA DI ALLERTA AVVIATO ===");
}

void spegniTutti() {
  digitalWrite(LED_VERDE,  LOW);
  digitalWrite(LED_GIALLO, LOW);
  digitalWrite(LED_ROSSO,  LOW);
}

void gestisciOK() {
  digitalWrite(LED_VERDE,  HIGH);
  digitalWrite(LED_GIALLO, LOW);
  digitalWrite(LED_ROSSO,  LOW);
}

void gestisciAttenzione() {
  // Verde lampeggia ogni 500 ms, giallo fisso
  if (millis() - tBlink >= 500) {
    statoBlinkVerde = !statoBlinkVerde;
    digitalWrite(LED_VERDE, statoBlinkVerde);
    tBlink = millis();
  }
  digitalWrite(LED_GIALLO, HIGH);
  digitalWrite(LED_ROSSO,  LOW);
}

void gestisciAllarme() {
  // Rosso lampeggia ogni 150 ms, gli altri spenti
  digitalWrite(LED_VERDE,  LOW);
  digitalWrite(LED_GIALLO, LOW);
  if (millis() - tBlink >= 150) {
    statoBlinkRosso = !statoBlinkRosso;
    digitalWrite(LED_ROSSO, statoBlinkRosso);
    tBlink = millis();
  }
}

void loop() {
  // Gestione reset
  if (digitalRead(BTN_RESET) == LOW && !inReset) {
    inReset = true;
    tReset = millis();
    spegniTutti();
    Serial.println(">> RESET in corso per 3 secondi...");
  }

  if (inReset) {
    if (millis() - tReset < DURATA_RESET) {
      // Durante il reset tutti i LED lampeggiano insieme
      if ((millis() / 200) % 2 == 0) {
        digitalWrite(LED_VERDE,  HIGH);
        digitalWrite(LED_GIALLO, HIGH);
        digitalWrite(LED_ROSSO,  HIGH);
      } else {
        spegniTutti();
      }
      return;  // esce dal loop senza leggere i sensori
    } else {
      inReset = false;
      Serial.println(">> Reset completato.");
    }
  }

  // Lettura sensori
  int luce = analogRead(LDR_PIN);
  int temp = analogRead(TEMP_PIN);

  bool anomaliaLuce = (luce < SOGLIA_LUCE);
  bool anomaliaTemp = (temp > SOGLIA_TEMP);

  // Determinazione del livello
  Livello nuovoLivello;
  if (anomaliaLuce && anomaliaTemp) {
    nuovoLivello = ALLARME;
  } else if (anomaliaLuce || anomaliaTemp) {
    nuovoLivello = ATTENZIONE;
  } else {
    nuovoLivello = OK;
  }

  // Stampa sul Monitor Seriale solo se il livello cambia
  if (nuovoLivello != livelloCorrente) {
    livelloCorrente = nuovoLivello;
    Serial.print("Luce: "); Serial.print(luce);
    Serial.print("  |  Temp: "); Serial.print(temp);
    Serial.print("  |  → ");
    if (livelloCorrente == OK)         Serial.println("SISTEMA OK");
    if (livelloCorrente == ATTENZIONE) Serial.println("ATTENZIONE");
    if (livelloCorrente == ALLARME)    Serial.println("!!! ALLARME !!!");
  }

  // Gestione uscite in base al livello
  switch (livelloCorrente) {
    case OK:         gestisciOK();         break;
    case ATTENZIONE: gestisciAttenzione(); break;
    case ALLARME:    gestisciAllarme();    break;
  }
}
```

**Checklist di verifica del progetto:**

Verificare che il sistema soddisfi tutti i requisiti prima di considerare il progetto completato:

- [ ] In condizioni normali: solo il LED verde è acceso fisso.
- [ ] Coprendo l'LDR (o portando il potenziometro sopra la soglia): il LED verde lampeggia e il giallo è fisso.
- [ ] Con entrambe le anomalie: solo il LED rosso lampeggia velocemente.
- [ ] Il pulsante di reset blocca il sistema per 3 secondi con tutti i LED che lampeggiano insieme.
- [ ] Il Monitor Seriale mostra un messaggio solo quando il livello cambia, non ad ogni ciclo.
- [ ] Il programma non usa mai `delay()` per le pause: usa sempre `millis()`.

**Possibili estensioni:**

1. Aggiungere un buzzer passivo al **pin 9**: in stato ALLARME emette un segnale acustico intermittente.
2. Aggiungere la stampa del livello corrente ogni 5 secondi anche se non cambia, come "keep-alive" del sistema.
3. Contare quante volte si è raggiunto il livello ALLARME dall'avvio e stampare il numero nel Monitor Seriale.
4. Usare `EEPROM.write()` per salvare il contatore anche dopo lo spegnimento.

---

## Riepilogo delle funzioni Arduino usate nelle esercitazioni

|Funzione|Descrizione|Esempio|
|---|---|---|
|`pinMode(pin, MODE)`|Configura un pin come INPUT, OUTPUT o INPUT_PULLUP|`pinMode(13, OUTPUT)`|
|`digitalWrite(pin, valore)`|Porta un pin digitale a HIGH (5 V) o LOW (0 V)|`digitalWrite(13, HIGH)`|
|`digitalRead(pin)`|Legge il valore di un pin digitale: HIGH o LOW|`int s = digitalRead(10)`|
|`analogWrite(pin, val)`|Genera un segnale PWM su un pin `~` (0–255)|`analogWrite(11, 127)`|
|`analogRead(pin)`|Legge un ingresso analogico (0–1023)|`int v = analogRead(A0)`|
|`delay(ms)`|Blocca il programma per un numero di millisecondi|`delay(1000)`|
|`millis()`|Restituisce il tempo in ms dall'avvio (unsigned long)|`unsigned long t = millis()`|
|`map(v, iMin, iMax, oMin, oMax)`|Scala un valore da un range a un altro|`map(512, 0, 1023, 0, 255)`|
|`min(a, b)` / `max(a, b)`|Restituisce il minore / maggiore tra due valori|`min(val + 10, 255)`|
|`Serial.begin(baud)`|Inizializza la comunicazione seriale|`Serial.begin(9600)`|
|`Serial.print(dato)`|Invia dati al Monitor Seriale senza andare a capo|`Serial.print(valore)`|
|`Serial.println(dato)`|Invia dati e va a capo|`Serial.println("OK")`|
|`Serial.available()`|Restituisce il numero di byte in attesa di lettura|`if (Serial.available() > 0)`|
|`Serial.parseInt()`|Legge un numero intero dalla porta seriale|`int n = Serial.parseInt()`|

---

## Errori comuni e come evitarli

|Errore|Sintomo|Soluzione|
|---|---|---|
|LED senza resistenza|LED bruciato o pin Arduino danneggiato|Sempre 220 Ω in serie al LED|
|Pulsante non a cavallo del canale centrale|Il pulsante è sempre premuto o sempre rilasciato|Inserire il pulsante su entrambe le metà della breadboard|
|`INPUT_PULLUP` dimenticato|Il pin fluttua tra HIGH e LOW senza ragione|Dichiarare `INPUT_PULLUP` nel `pinMode`|
|`analogWrite` su pin non PWM|Il LED è sempre acceso o sempre spento|Usare solo i pin marcati `~`: 3, 5, 6, 9, 10, 11|
|`=` invece di `==` nell'`if`|La condizione è sempre vera|Usare `==` per confrontare, `=` solo per assegnare|
|Overflow di `int` con `millis()`|Il tempo si azzera dopo ~32 secondi|Dichiarare le variabili di tempo come `unsigned long`|
|Due terminali dello stesso componente nello stesso gruppo di fori|Il componente non funziona o è cortocircuitato|Verificare che ogni componente occupi fori di gruppi diversi|
