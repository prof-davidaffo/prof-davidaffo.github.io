# 📡 Telecomunicazioni

### Connessioni in Radiofrequenza

---

## 1. La Fisica delle Telecomunicazioni

Per capire le telecomunicazioni moderne — il WiFi, il Bluetooth, il 5G — bisogna partire da una domanda semplice: com'è possibile trasmettere informazioni attraverso l'aria, senza nessun filo?

La risposta sta nelle **onde elettromagnetiche**, e la storia inizia nell'Ottocento con tre personaggi chiave.

Il primo è il fisico scozzese **James Clerk Maxwell** (1831–1879), che nel 1860 capì, solo sulla carta e con le equazioni, che dovevano esistere delle onde invisibili capaci di trasportare energia attraverso l'aria, esattamente come la luce. Non le aveva ancora viste nessuno, ma la matematica le prevedeva con precisione.

Qualche anno dopo, il fisico tedesco **Heinrich Rudolph Hertz** (1857–1894) diede ragione a Maxwell in laboratorio: dimostrò che facendo variare rapidamente la corrente elettrica in un filo conduttore si potevano davvero generare onde radio. In pratica, inventò la prima antenna della storia — il cosiddetto **dipolo hertziano** — che consisteva semplicemente in due pezzi di filo metallico aperti.

Ma il salto dalla teoria alla comunicazione pratica lo fece **Guglielmo Marconi** (1874–1937). Nel 1895, da giovane ventunenne, riuscì a inviare e ricevere il primo segnale radio a distanza. Da lì in poi, la radio, la televisione, i telefoni cellulari e tutto il wireless moderno non sarebbero stati possibili senza quel primo esperimento.

![[Media/image-002.png]]

---

## 2. Connessioni Radio

### Cosa sono le onde elettromagnetiche?

Immaginate di lanciare un sasso in uno stagno fermo: si formano cerchi che si allargano verso l'esterno, trasportando energia dall'impatto verso le rive. Le **onde elettromagnetiche** funzionano in modo analogo, ma invece di increspare l'acqua, "increspano" due campi fisici invisibili: il campo elettrico e il campo magnetico. E la cosa straordinaria è che non hanno bisogno di nessun mezzo fisico per propagarsi — viaggiano benissimo anche nel vuoto assoluto dello spazio.

Tutto ciò che chiamiamo "radiazione elettromagnetica" — la luce del sole, il calore di un fornello, i raggi X dal dentista, il segnale WiFi del router — è la stessa cosa. Cambiano solo le caratteristiche dell'onda.

> 🔎 Attenzione
> In un’onda elettromagnetica non si spostano elettroni dal trasmettitore al ricevitore attraverso l’aria: a propagarsi nello spazio è la perturbazione dei campi elettrico e magnetico.

### I tre parametri fondamentali

Per descrivere un'onda elettromagnetica si usano tre grandezze strettamente legate tra loro:

**Frequenza (_f_):** indica quante volte al secondo l'onda completa un'oscillazione completa. Si misura in hertz (Hz): 1 Hz significa un'oscillazione al secondo. Nella pratica delle telecomunicazioni si usano multipli enormi: MHz (milioni di Hz) e GHz (miliardi di Hz). Per confronto, la radio FM trasmette intorno ai 100 MHz, il WiFi a 2,4 GHz.

**Velocità (_c_):** tutte le onde elettromagnetiche viaggiano esattamente alla stessa velocità — la velocità della luce — che vale 300.000.000 m/s (trecento milioni di metri al secondo). Questo valore è una costante universale: non cambia mai, né con la frequenza né con il mezzo.

**Lunghezza d'onda (_λ_):** è la distanza fisica che separa due creste consecutive dell'onda. Si calcola con una formula molto intuitiva: se sai quante oscillazioni ci sono al secondo (frequenza) e quanto veloce va l'onda (velocità), dividi e ottieni quanto spazio occupa ogni oscillazione.

$$\lambda = \frac{c}{f}$$

Questo ci dice una cosa importante: **più alta è la frequenza, più corta è la lunghezza d'onda**, e viceversa. Un segnale WiFi a 2,4 GHz ha una lunghezza d'onda di circa 12 cm; un'onda radio FM a 100 MHz ha una lunghezza d'onda di 3 metri.

### Lo spettro elettromagnetico

L'insieme di tutte le possibili onde elettromagnetiche, ordinate per frequenza (o per lunghezza d'onda), forma lo **spettro elettromagnetico**. È utile immaginarlo come una scala continua:

<svg width="100%" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"> <defs> <linearGradient id="vis" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#D14520"/> <stop offset="25%" stop-color="#F9CB42"/> <stop offset="50%" stop-color="#3B6D11"/> <stop offset="75%" stop-color="#185FA5"/> <stop offset="100%" stop-color="#534AB7"/> </linearGradient> </defs> <text font-size="11" fill="#888" x="40" y="18" text-anchor="start">← λ crescente</text> <text font-size="11" fill="#888" x="640" y="18" text-anchor="end">frequenza crescente →</text> <rect x="40" y="28" width="90" height="52" rx="4" fill="#3B6D11"/> <text font-size="12" font-weight="500" x="85" y="50" text-anchor="middle" fill="#C0DD97">Onde radio</text> <text font-size="10" x="85" y="64" text-anchor="middle" fill="#9FE1CB">FM · AM · GSM</text> <rect x="132" y="28" width="90" height="52" rx="4" fill="#0F6E56"/> <text font-size="12" font-weight="500" x="177" y="50" text-anchor="middle" fill="#9FE1CB">Microonde</text> <text font-size="10" x="177" y="64" text-anchor="middle" fill="#E1F5EE">WiFi · BT · 5G</text> <rect x="224" y="28" width="80" height="52" rx="4" fill="#854F0B"/> <text font-size="12" font-weight="500" x="264" y="50" text-anchor="middle" fill="#FAC775">Infrarossi</text> <text font-size="10" x="264" y="64" text-anchor="middle" fill="#FAEEDA">Calore · IR</text> <rect x="306" y="28" width="68" height="52" rx="4" fill="url(#vis)"/> <text font-size="12" font-weight="500" x="340" y="50" text-anchor="middle" fill="#fff">Visibile</text> <text font-size="10" x="340" y="64" text-anchor="middle" fill="#fff">400–700 nm</text> <rect x="376" y="28" width="80" height="52" rx="4" fill="#534AB7"/> <text font-size="12" font-weight="500" x="416" y="50" text-anchor="middle" fill="#CECBF6">Ultravioletti</text> <text font-size="10" x="416" y="64" text-anchor="middle" fill="#EEEDFE">UV solari</text> <rect x="458" y="28" width="90" height="52" rx="4" fill="#185FA5"/> <text font-size="12" font-weight="500" x="503" y="50" text-anchor="middle" fill="#B5D4F4">Raggi X</text> <text font-size="10" x="503" y="64" text-anchor="middle" fill="#E6F1FB">Radiografia</text> <rect x="550" y="28" width="90" height="52" rx="4" fill="#A32D2D"/> <text font-size="12" font-weight="500" x="595" y="50" text-anchor="middle" fill="#F7C1C1">Raggi γ</text> <text font-size="10" x="595" y="64" text-anchor="middle" fill="#FCEBEB">Nucleare</text> <line x1="40" y1="98" x2="640" y2="98" stroke="#ccc" stroke-width="0.5"/> <text font-size="10" fill="#666" x="85" y="113" text-anchor="middle">λ &gt; 1 m</text> <text font-size="10" fill="#666" x="177" y="113" text-anchor="middle">1 mm – 1 m</text> <text font-size="10" fill="#666" x="264" y="113" text-anchor="middle">700 nm – 1 mm</text> <text font-size="10" fill="#666" x="340" y="113" text-anchor="middle">400 – 700 nm</text> <text font-size="10" fill="#666" x="416" y="113" text-anchor="middle">10 – 400 nm</text> <text font-size="10" fill="#666" x="503" y="113" text-anchor="middle">0,01 – 10 nm</text> <text font-size="10" fill="#666" x="595" y="113" text-anchor="middle">&lt; 0,01 nm</text> <text font-size="10" fill="#999" x="85" y="130" text-anchor="middle">&lt; 300 MHz</text> <text font-size="10" fill="#999" x="177" y="130" text-anchor="middle">300 MHz – 300 GHz</text> <text font-size="10" fill="#999" x="264" y="130" text-anchor="middle">300 GHz – 430 THz</text> <text font-size="10" fill="#999" x="340" y="130" text-anchor="middle">430 – 770 THz</text> <text font-size="10" fill="#999" x="416" y="130" text-anchor="middle">770 THz – 30 PHz</text> <text font-size="10" fill="#999" x="503" y="130" text-anchor="middle">30 PHz – 30 EHz</text> <text font-size="10" fill="#999" x="595" y="130" text-anchor="middle">&gt; 30 EHz</text> <rect x="40" y="148" width="182" height="22" rx="4" fill="#f0f4f0" stroke="#aaa" stroke-width="0.5"/> <text font-size="11" fill="#3B6D11" x="131" y="163" text-anchor="middle">Telecomunicazioni wireless</text> <rect x="306" y="148" width="68" height="22" rx="4" fill="#f4f0ff" stroke="#aaa" stroke-width="0.5"/> <text font-size="11" fill="#534AB7" x="340" y="163" text-anchor="middle">Visione umana</text> </svg>

I nostri occhi riescono a vedere solo una porzione minuscola di questo spettro — la luce visibile — con lunghezze d'onda comprese tra 400 e 700 nm. Tutto il resto (onde radio, infrarossi, ultravioletti, raggi X) è invisibile all'occhio umano, ma reale e rilevabile con gli strumenti giusti.

Le onde radio utilizzate nelle telecomunicazioni hanno frequenze che vanno da frazioni di GHz (telefonia mobile) fino a 10 GHz (satelliti) e anche 50 GHz (radar militari).

### Come si comportano le onde radio nell'ambiente?

In uno spazio aperto e libero, le onde radio si propagano in linea retta, esattamente come un raggio di luce. Ma nella realtà ci sono muri, oggetti e atmosfera, e le onde interagiscono con tutto questo in tre modi diversi:

**Riflessione:** quando un'onda radio colpisce una superficie metallica, rimbalza completamente, come la luce su uno specchio. L'angolo di rimbalzo è uguale all'angolo di arrivo. Questo spiega, per esempio, perché dentro una gabbia metallica (o un forno a microonde) il segnale è assente: le onde non riescono ad entrare né ad uscire.

**Penetrazione:** le onde radio riescono ad attraversare i materiali non metallici (muri, legno, vetro, plastica), ma vengono indebolite. La regola fondamentale è: **più bassa è la frequenza, meglio penetra**. Ecco perché il 4G (800 MHz) arriva meglio al piano interrato rispetto al 5G (28 GHz): le onde più lunghe si infilano più facilmente attraverso i muri.

> 💡 Intuizione
> Le onde a frequenza più alta si attenuano di più nei materiali perché oscillano più rapidamente e interagiscono maggiormente con le cariche presenti nel mezzo.  
> Le onde a frequenza più bassa, invece, perdono meno energia e quindi penetrano meglio.

**Diffrazione:** se un'onda incontra un ostacolo solido con uno spigolo vivo (l'angolo di un muro, di un edificio), si "piega" leggermente attorno allo spigolo, riuscendo a propagarsi anche dietro l'angolo dove geometricamente non dovrebbe arrivare. Se invece incontra un'apertura piccola rispetto alla sua lunghezza d'onda (una fessura, un buco), si "spalma" e si diffonde in molte direzioni, come l'acqua che passa attraverso un piccolo foro in una diga.

> 💡 Intuizione
> La capacità di aggirare un ostacolo dipende dal rapporto tra la dimensione dell’ostacolo e la lunghezza d’onda: se la lunghezza d’onda è grande rispetto all’ostacolo, l’onda riesce a “girargli attorno” più facilmente.

---

## 2b. Campi Elettrici e Magnetici: il Motore delle Onde Radio

Prima di parlare di antenne, bisogna capire due concetti che stanno alla base di tutto: il **campo elettrico** e il **campo magnetico**. Senza di loro non si capisce né come funziona un'antenna, né perché le onde radio esistono.

### Il campo elettrico

Avete mai strofinato un palloncino sui capelli e poi visto che attira pezzettini di carta? Quello che avete creato è un **campo elettrico**: una zona di spazio attorno a un oggetto carico elettricamente, in cui altre cariche elettriche "sentono" una forza.

Il campo elettrico non è una cosa che si vede, ma è reale: è la "zona di influenza" di una carica.

> 🔎 Perché esiste il campo elettrico?
> Una carica elettrica modifica lo spazio attorno a sé: invece di dover “toccare” un’altra carica per esercitare una forza, crea una zona in cui questa forza può agire a distanza.
> Il campo elettrico è quindi il modo in cui la forza elettrica si trasmette nello spazio.

Se mettete una carica positiva e una negativa vicine, il campo elettrico fra di loro tira le due cariche l'una verso l'altra. Se le cariche sono dello stesso segno, il campo le respinge. Ogni volta che c'è tensione elettrica — tra i due poli di una batteria, tra i fili di una presa di corrente — c'è un campo elettrico nello spazio tra di essi.

La cosa importante da ricordare: **un campo elettrico che cambia nel tempo genera un campo magnetico**. Questo è il punto chiave che ci porterà alle onde radio.

### Il campo magnetico

Il campo magnetico lo conoscete già, anche se magari non con questo nome. È quello che fa sì che una calamita attiri il ferro, o che un ago di bussola punti sempre a nord. Ma non è solo una proprietà delle calamite permanenti: **qualsiasi filo percorso da corrente elettrica crea un campo magnetico attorno a sé**.

> 🔎 Che cos’è davvero un “campo”?
> Un campo è una proprietà dello spazio che si manifesta quando un oggetto posto in quella zona subisce una forza.
> 
> La differenza tra campo elettrico e magnetico è nel tipo di effetto:
> - il campo elettrico agisce su cariche elettriche anche se sono ferme
> - il campo magnetico agisce solo su cariche in movimento o su oggetti magnetici
> 
> In altre parole: il campo magnetico “si vede” solo quando c’è movimento.

Potete immaginarlo come una serie di cerchi invisibili che si avvolgono attorno al filo, come gli anelli attorno a un tronco d'albero. Più corrente scorre nel filo, più il campo è intenso. Se la corrente si inverte di direzione, il campo si inverte anch'esso.

E qui arriva la simmetria fondamentale della fisica: esattamente come un campo elettrico che cambia genera un campo magnetico, **un campo magnetico che cambia genera un campo elettrico**. I due campi si "generano" a vicenda.

### Il legame tra i due campi: come nasce un'onda

Questo legame reciproco tra i due campi è la chiave di tutto. Immaginate cosa succede se fate variare rapidamente una corrente elettrica in un filo:

1. La corrente variabile crea attorno al filo un **campo magnetico variabile**.
2. Quel campo magnetico variabile genera a sua volta un **campo elettrico variabile** nello spazio circostante.
3. Quel campo elettrico variabile rigenera un **campo magnetico variabile** ancora più lontano.
4. E così via, all'infinito.

I due campi si autosostentano: ognuno rigenera l'altro, e il tutto si propaga nello spazio come un'**onda**. Questo è esattamente ciò che chiamiamo **onda elettromagnetica**: non è altro che un campo elettrico e un campo magnetico che oscillano perpendicolarmente tra loro e si trascinano avanti nello spazio alla velocità della luce.

> 🔎 Cosa significa davvero che i campi “si propagano”?
> Non significa che si staccano fisicamente dal filo come un oggetto che si rompe.  
> Significa che la variazione di un campo genera l’altro anche nei punti vicini dello spazio: in questo modo la perturbazione si trasmette da una zona all’altra e continua ad avanzare anche lontano dall’antenna.

Se la corrente oscilla lentamente (pochi Hz), i campi cambiano troppo piano per staccarsi e propagarsi — restano "incollati" al filo. Ma se la corrente oscilla molto rapidamente — milioni o miliardi di volte al secondo — i campi riescono a staccarsi e a viaggiare via da soli nello spazio. È come una corda che si agita lentamente fa onde che muoiono subito, mentre una corda agitata velocissimamente crea onde che si propagano in avanti con forza.

> 💡 Chiarimento
> Con una corrente continua, o comunque troppo lenta, il campo magnetico non varia abbastanza nel tempo da generare un campo elettrico variabile capace di propagarsi.  
> Per questo attorno al filo esiste un campo, ma non si forma un’onda radio efficace.

Questa è la fisica alla base di ogni comunicazione radio. E l'antenna è esattamente il dispositivo progettato per fare questa cosa nel modo più efficiente possibile.

---

## 3. Parametri Caratteristici delle Antenne

### Cos'è un'antenna e come funziona?

Ora che sappiamo cosa sono i campi elettrico e magnetico e come interagiscono, capire l'antenna diventa semplice.

Immaginate un filo elettrico percorso da corrente alternata ad alta frequenza — milioni di oscillazioni al secondo. Come abbiamo appena visto, quella corrente che oscilla crea attorno al filo due campi variabili che si autosostengono e si propagano nello spazio sotto forma di onda elettromagnetica. In pratica, l'energia elettrica che entra nel filo si trasforma in un'onda radio che viaggia alla velocità della luce.

> 📘 In sintesi
> Un’antenna è un dispositivo che trasforma un segnale elettrico in un’onda elettromagnetica quando trasmette, e compie il processo inverso quando riceve.

Questo è esattamente quello che fa un'**antenna in trasmissione**: prende un segnale elettrico (prodotto da un circuito trasmettitore) e lo converte in un'onda elettromagnetica che si irradia nello spazio.

Il processo inverso funziona altrettanto bene: quando un'onda elettromagnetica colpisce un pezzo di metallo, fa oscillare gli elettroni al suo interno, generando una piccola corrente elettrica. Questa corrente è il segnale ricevuto, che poi viene amplificato e interpretato dall'elettronica. Questo è quello che fa un'**antenna in ricezione**.

> 💡 Idea chiave
> In trasmissione è l’antenna a far oscillare gli elettroni e a generare l’onda; in ricezione è l’onda incidente a far oscillare gli elettroni del metallo, producendo un piccolo segnale elettrico.

La cosa affascinante è che lo stesso oggetto fisico — un semplice pezzo di filo metallico — può fare entrambe le cose. Per questo in ogni sistema radio ci sono almeno due antenne: una sull'apparato trasmittente e una su quello ricevente.

Ma non tutti i pezzi di filo funzionano ugualmente bene come antenne. Ci sono tre caratteristiche fondamentali che determinano le prestazioni di un'antenna: la **frequenza di lavoro** (a quale frequenza funziona meglio), l'**angolo di apertura** (in quante direzioni irradia) e il **guadagno** (quanto è efficiente nel concentrare l'energia). Vediamole una per una.

### 3.1 Frequenza di Lavoro

La cosa forse più sorprendente delle antenne è che le loro dimensioni fisiche non sono casuali: dipendono direttamente dalla frequenza del segnale che devono trasmettere o ricevere. Più alta è la frequenza (e quindi più corta è la lunghezza d'onda), più piccola deve essere l'antenna.

> 💡 Conseguenza pratica
> Se la frequenza raddoppia, la lunghezza d’onda si dimezza; di conseguenza anche una tipica antenna in λ/4 diventa circa la metà.

Il motivo fisico è che un'antenna funziona al meglio quando la sua lunghezza è esattamente un quarto della lunghezza d'onda del segnale (λ/4). In quel caso, la corrente elettrica nell'antenna entra in risonanza con l'onda, e tutta l'energia elettrica si trasforma efficientemente in onda elettromagnetica.

> 🔎 Cosa significa davvero “risonanza” in un’antenna?
> 
> Quando un segnale percorre un filo, non si trasmette istantaneamente: l’oscillazione si propaga lungo l’antenna con un certo ritardo.  
> Questo significa che gli elettroni nelle diverse parti del filo non si muovono esattamente nello stesso istante.
> 
> Ogni punto dell’antenna genera quindi un piccolo campo elettromagnetico.  
> Se la lunghezza dell’antenna è quella giusta rispetto alla lunghezza d’onda, questi contributi risultano in fase e si sommano tra loro, producendo un’onda forte ed efficiente.
> 
> Se invece la lunghezza non è corretta, le diverse parti dell’antenna risultano parzialmente fuori fase: alcuni contributi si annullano tra loro e l’energia non viene irradiata in modo efficace.
> 
> In altre parole: un’antenna in risonanza è “accordata” alla lunghezza d’onda del segnale e permette alle diverse parti del filo di lavorare insieme invece che ostacolarsi.

Partiamo dall'**antenna hertziana** (o dipolo a mezz'onda). Immaginate due bacchette metalliche allineate, ognuna lunga λ/4, aperte a 180° come una "T" rovesciata. Quando vengono alimentate, irradiano energia in tutte le direzioni orizzontali (come una ciambella/toroide attorno all'antenna), mentre verso l'alto e il basso non irradia nulla. Questo tipo di emissione circolare si chiama **omnidirezionale**.

Il **dipolo marconiano** (o antenna a stilo, o antenna in λ/4) è la versione semplificata e più diffusa: si usa un solo braccio verticale lungo λ/4, mentre il secondo braccio mancante viene "simulato" collegando la base a massa (terra). Il piano di massa si comporta come uno specchio elettromagnetico e completa virtualmente l'antenna. La antenna del tetto di un'auto per la radio AM/FM è esattamente questo: un dipolo marconiano.

Nella pratica, la lunghezza esatta dell'antenna va corretta in base al materiale usato, con un coefficiente _k_ (sempre minore di 1 perché la lunghezza reale è leggermente più corta di λ/4):

$$l = k \cdot \frac{\lambda}{4}$$

|Materiale|Coefficiente _k_|
|---|---|
|Rame|0,95|
|Alluminio|0,85|

> **Esempio guidato —** Determinare la lunghezza di un'antenna in λ/4, realizzata in rame, che deve lavorare a 5,15 GHz.
> 
> Prima troviamo la lunghezza d'onda del segnale a quella frequenza: λ = c/f = (3 · 10⁸ m/s) / (5,15 · 10⁹ Hz) = 0,058 m = **5,8 cm**
> 
> Poi applichiamo la correzione per il rame (k = 0,95): l = 0,95 · 5,8/4 = **1,38 cm**
> 
> Risultato: un'antenna in rame per il WiFi a 5 GHz è lunga poco più di un centimetro!

### 3.2 Angolo di Apertura

Per capire come un'antenna irradia energia nello spazio, si usa come punto di partenza un'antenna ideale immaginaria: il **radiatore isotropico**. Pensatelo come una lampadina perfetta che irradia luce in modo assolutamente uniforme in tutte le direzioni — sopra, sotto, a destra, a sinistra, davanti e dietro — con la stessa intensità. Geometricamente, la zona illuminata è una sfera perfetta centrata sull'antenna.

Partendo da questa antenna ideale, possiamo calcolare come si distribuisce la potenza nello spazio. Se l'antenna irradia una potenza totale _P_rad_, questa si distribuisce uniformemente su tutta la superficie di una sfera di raggio _r_ (che vale 4π·r²). La **densità di potenza** (quanti watt arrivano su ogni metro quadrato a distanza r) è quindi:

$$S = \frac{P_{rad}}{4\pi r^2}$$

Nota importante: la densità di potenza cala con il **quadrato della distanza**. Se raddoppio la distanza, la potenza ricevuta si riduce a un quarto. Se la distanza diventa dieci volte maggiore, la potenza diventa cento volte più debole. Questo spiega perché i segnali radio si indeboliscono rapidamente allontanandosi dalla sorgente.

> **Esempio guidato —** Determinare la densità di potenza rilevabile a 4 km di distanza da un radiatore isotropico che irradia una potenza di 10 W.
> 
> S = 10 / (4π · (4 · 10³)²) ≈ **49,7 nW/m²**
> 
> Cioè, a 4 km di distanza arrivano meno di 50 nanowatt per metro quadrato — pochissimo!

Le antenne reali, però, non sono mai isotropiche: irradiano sempre di più in certe direzioni e di meno in altre. L'**angolo di apertura** (in inglese _Beamwidth_, BW) descrive quanto è "stretto" o "largo" il fascio di emissione dell'antenna. Si definisce come l'angolo entro il quale la densità di potenza rimane almeno al **50% del valore massimo**.

Un'antenna con un angolo di apertura piccolo (es. 15°) concentra tutta l'energia in una direzione precisa — è molto direttiva, come un faro. Un'antenna con un angolo di apertura grande (es. 360°) distribuisce l'energia in tutte le direzioni — è omnidirezionale, come una lampadina.

### 3.3 Guadagno d'Antenna

Il **guadagno d'antenna (_G_)** è il parametro che quantifica quanto un'antenna è brava a concentrare la potenza in una direzione rispetto al radiatore isotropico ideale.

Per capirlo con un'analogia: se avete una torcia con riflettore parabolico e una lampadina senza riflettore, entrambe consumano la stessa energia — ma la torcia illumina in modo molto più intenso nella direzione in cui la puntate, perché concentra tutta la luce in un fascio stretto. Il "guadagno" della torcia rispetto alla lampadina nuda è questo fattore di concentrazione.

> 🔎 Attenzione
> Il guadagno non crea potenza dal nulla: concentra la potenza disponibile in una direzione preferenziale, riducendola nelle altre.

Formalmente: il guadagno G = 2 significa che, nella direzione di massima emissione, l'antenna irradia il doppio della densità di potenza rispetto a un radiatore isotropico con la stessa potenza in ingresso.

Valori tipici di guadagno: **1,64** per il dipolo hertziano (λ/2) e **3,3** per il dipolo marconiano (λ/4).

Il guadagno può essere espresso in due modi:

- **forma lineare**: ad esempio \(G = 2\)
- **forma logaritmica in decibel**: ad esempio \(G_{dB} = 3\ \text{dB}\)

La conversione si fa con queste formule:

$$
G_{dB} = 10 \cdot \log_{10}(G)
 $$

$$
 G = 10^{G_{dB}/10}
 $$

Nella pratica, i costruttori di antenne indicano spesso il guadagno in dB, mentre nei calcoli della potenza conviene spesso usare il valore lineare.

**Esempio guidato —** Convertire un guadagno di 15,85 dB in valore lineare.

$$
G = 10^{15,85/10} \approx 38,5
$$

Quindi un'antenna con guadagno **15,85 dB** ha guadagno lineare **38,5**.

La potenza effettivamente emessa nella direzione di massima radiazione — chiamata **EIRP** (Equivalent Isotropic Radiated Power) — si calcola semplicemente moltiplicando la potenza che entra nell'antenna per il suo guadagno:

$$\text{EIRP} = P_{in} \cdot G$$

Attenzione però: il guadagno da solo non basta per confrontare due antenne. Un'antenna molto direttiva (piccolo angolo di apertura) ha naturalmente un guadagno elevato, ma solo in una direzione ristretta. Per fare confronti sensati, si paragonano sempre antenne con lo stesso angolo di apertura.

> **Esempio guidato —** Determinare la densità di potenza rilevabile a 10 km di distanza, nella direzione di massima emissione, da un'antenna hertziana alimentata con 20 W.
> 
> Il guadagno del dipolo hertziano è 1,64. La potenza effettiva irradiata nella direzione migliore vale: EIRP = 20 · 1,64 = 32,8 W
> 
> La densità di potenza a 10 km è: S = 32,8 / (4π · (10⁴)²) ≈ **2,61 nW/m²**

---

## 4. Antenne per Applicazioni Industriali

Nella pratica industriale e commerciale, la scelta del tipo di antenna dipende principalmente dall'utilizzo previsto. Se un dispositivo deve muoversi (telefono, robot mobile, veicolo), serve un'antenna **omnidirezionale**, che "guarda" in tutte le direzioni allo stesso modo — non si sa mai da dove arriverà il segnale. Se invece la comunicazione è fissa (un ponte radio tra due edifici, un'antenna su un palo), è molto più efficiente usare un'antenna **direzionale**, che concentra tutta la potenza nella direzione giusta.

Per le applicazioni RF industriali si utilizzano antenne omnidirezionali in λ/4 di diversi tipi e forme, ognuna con i suoi vantaggi pratici:

|Tipo|Descrizione|
|---|---|
|**(A) A frusta**|Esterna, omnidirezionale|
|**(B) Ad elica**|Banda larga, omnidirezionale|
|**(C) Su PCB**|Integrata nel circuito stampato|
|**(D) A chip**|Compatta, bassa potenza|

![[Media/image-012.jpg]]

![[Media/image-014.jpg]]

![[Media/image-016.jpg]]

![[Media/image-018.jpg]]

Oltre a queste, ci sono antenne pensate per applicazioni specifiche che richiedono alta direttività o coperture particolari.

L'**antenna Yagi** — dal nome dello scienziato giapponese Hidetsugu Yagi (1886–1976) — è quella che si vede ancora sui tetti di molte case per la televisione terrestre. È formata da un dipolo centrale che irradia davvero, un elemento riflettore dietro di esso e una serie di elementi direttori passivi davanti. Questi elementi non sono collegati elettricamente ma influenzano il campo elettromagnetico, "guidando" l'onda in avanti come le pale di un ventilatore. Il risultato è un'antenna molto direttiva, con angoli di apertura tipici di soli **15°**.

![[Media/image-021.png]]

Le **antenne a pannello** (o settoriali) sono quelle che si vedono sui tralicci della telefonia cellulare: quei rettangoli grigi montati in gruppi di tre su ogni palo. Ogni pannello copre 120° orizzontalmente; tre pannelli montati a 120° l'uno dall'altro coprono l'intera circonferenza di 360°. Hanno un buon guadagno (G = 8÷13 dB) e un fascio verticale stretto (5°–15°), che serve a non disperdere il segnale verso il cielo o il suolo.

![[Media/image-025.jpg]]

Le **antenne verticali omnidirezionali con guadagno** sono una via di mezzo: irradiano a 360° orizzontalmente, ma con un fascio verticale stretto (10°–15°), concentrando tutta la potenza attorno all'orizzonte dove si trovano i dispositivi da servire, invece di sprecarla verso il basso o verso il cielo.

![[Media/image-026.png]]

### 4.1 Area Efficace

Finora abbiamo sempre parlato di antenne che trasmettono. Ma come si comporta la stessa antenna quando invece deve ricevere?

Intuitivamente si potrebbe pensare che un'antenna più grande cattura più segnale — come un secchio più grande raccoglie più pioggia. Ed è esattamente così. Quando un'onda radio arriva su un'antenna, induce una corrente elettrica proporzionale a quanta energia riesce a "intercettare". Questa capacità di cattura si chiama **area efficace**: è una superficie virtuale, espressa in m², che rappresenta quanto spazio di cielo l'antenna "vede" in ricezione. Un'antenna con area efficace di 1 m² raccoglie tutta la potenza dell'onda che attraversa 1 metro quadrato di spazio.

> 💡 Idea chiave
> Un’antenna molto efficace nel concentrare l’energia in trasmissione è anche molto efficace nel raccoglierla in ricezione.

La cosa interessante è che l'area efficace non dipende solo dalle dimensioni fisiche dell'antenna, ma anche dalla sua forma e dal guadagno. E c'è una simmetria elegante: un'antenna con alto guadagno in trasmissione ha anche una grande area efficace in ricezione. La formula che lega i due parametri è:

$$A_{eff} = \frac{\lambda^2}{4\pi} \cdot G \quad [\text{m}^2]$$

Questo significa che la stessa antenna, usata in ricezione, raccoglie più potenza se il segnale ha una lunghezza d'onda maggiore (frequenza più bassa). Da cui la potenza raccolta:

$$P_{ric} = S_{inc} \cdot A_{eff} = S_{inc} \cdot \frac{\lambda^2}{4\pi} \cdot G$$

L'esempio più famoso di antenna con grande area efficace è l'**antenna a parabola**. Il principio è lo stesso di uno specchio parabolico: tutte le onde che colpiscono la parabola vengono riflesse verso un unico punto — il fuoco — dove è posizionato il ricevitore (l'illuminatore). È molto direttiva e molto efficiente per segnali debolissimi, come quelli dei satelliti.

![[Media/image-027.jpg]]

La sua efficienza (η) varia tra 0,5 e 0,8 a seconda della qualità costruttiva. Il guadagno e l'area efficace dipendono dal diametro (d) della parabola e dalla lunghezza d'onda del segnale:

$$\eta = 0{,}5 \div 0{,}8$$

$$G = \eta \cdot \left(\frac{\pi d}{\lambda}\right)^2$$

$$A_{eff} = \eta \cdot \frac{\pi d^2}{4} = G \cdot \frac{\lambda^2}{4\pi}$$

#### Tabella 18 — Parametri di Alcune Antenne Tipiche

|Antenna|G|A_eff [m²]|
|---|---|---|
|Hertziana (λ/2)|1,64|0,13 · λ²|
|Marconiana (λ/4)|3,3|0,26 · λ²|
|Yagi|8 ÷ 64|(0,63 ÷ 5) · λ²|
|Parabola (d = 20 cm, η = 0,8)|—|0,025 m²|

> **Esempio guidato —** Determinare la potenza raccolta da una parabola di diametro 0,5 m, con efficienza 0,55, in presenza di una densità di potenza S = 86,4 nW/m².
> 
> Prima calcoliamo l'area efficace della parabola (quanto "sente"): A_eff = η · π · d²/4 = 0,55 · π · 0,25/4 = **0,11 m²**
> 
> Poi moltiplichiamo per la densità di potenza del segnale: P_ric = 86,4 · 0,11 = **9,5 nW**

---

## 5. Connessioni Wireless a Lungo e Corto Raggio

La comunicazione wireless — cioè senza fili — è ovunque: dal telefonino in tasca al sensore di temperatura in un magazzino, dalla TV satellitare al cancello automatico del garage. Tutte queste applicazioni usano onde radio, ma con caratteristiche molto diverse a seconda di quanta distanza devono coprire e quanti dati devono trasmettere.

In ambito industriale, una connessione wireless torna particolarmente utile quando stendere cavi sarebbe difficile, costoso o impossibile: collegare due edifici separati della stessa azienda (**building to building**), portare la rete LAN in zone difficili da cablare, o raccogliere dati da sensori in movimento sono casi tipici.

### 5.1 Classificazione delle Reti Wireless

Le reti wireless si classificano in base alla distanza che coprono, esattamente come le reti cablate:

**WWAN (Wireless Wide Area Network)** — coprono aree enormi, come intere nazioni. Sono le reti della telefonia mobile (3G, 4G, 5G) e dei satelliti. Vengono gestite da operatori come TIM, Vodafone, WindTre. Chiunque abbia uno smartphone le usa ogni giorno.

**WMAN (Wireless Metropolitan Area Network)** — coprono aree di dimensione urbana, con raggio fino a 10 km. Lo standard più noto è **WiMAX**, pensato per portare Internet ad alta velocità in zone dove la fibra non arriva ancora.

**WLAN (Wireless Local Area Network)** — è la rete di casa o dell'ufficio: il WiFi. Copre tipicamente decine o centinaia di metri. Gli standard usati sono definiti dall'IEEE con il codice **802.11** (802.11b, 802.11g, 802.11n, 802.11ax — quest'ultimo è il WiFi 6).

**WPAN (Wireless Personal Area Network)** — copre distanze molto corte, pochi metri o decine di metri. È il mondo del Bluetooth e di ZigBee: auricolari, smartwatch, tastiere wireless, sensori industriali a batteria. Il punto di forza è il bassissimo consumo energetico, che permette ai dispositivi di funzionare per mesi o anni con una piccola pila.

In ambito industriale, le reti WPAN per sensori si chiamano **WSN (Wireless Sensor Network)**. Immaginate decine di piccoli sensori disseminati in uno stabilimento produttivo, ognuno alimentato a batteria, che misurano temperatura, pressione, vibrazioni e trasmettono i dati via radio a una centralina. Sono sistemi autonomi e installabili senza fare nessun lavoro elettrico.

![[Media/image-034.jpg]]

---

## 6. Connessioni M2M su Rete Mobile

Nell'automazione industriale moderna, molti sistemi devono comunicare tra loro o con una centrale di controllo remota senza intervento umano diretto. Queste comunicazioni si chiamano **M2M (Machine To Machine)**: macchina parla con macchina, attraverso la rete mobile.

Pensate a un distributore automatico di caffè in una stazione ferroviaria: quando il caffè sta per finire, la macchina manda automaticamente un messaggio alla centrale di rifornimento. Oppure a un ascensore che segnala al centro assistenza un guasto prima ancora che qualcuno rimanga bloccato. O ancora a un camion che comunica in tempo reale la sua posizione GPS e i km percorsi alla sede centrale.

Per capire come funziona la rete che gestisce tutto questo, occorre sapere che una **rete mobile** divide il territorio in celle, ognuna gestita da una **stazione base (BS)**. Quando un dispositivo si sposta da una cella all'altra, la connessione passa automaticamente alla stazione base più vicina — questo si chiama **handover**. Il coordinamento tra tutte le stazioni base è gestito da una centrale chiamata **MSC (Mobile services Switching Center)**.

![[Media/image-049.jpg]]

### 6.1 Modem GSM/GPRS

Nella pratica, come fa concretamente una macchina industriale a connettersi alla rete mobile? La risposta è il **modem GSM/GPRS**: un piccolo modulo elettronico — grande quanto un francobollo — che contiene una SIM card, un ricetrasmettitore radio e tutta l'elettronica per agganciare la rete del gestore.

Per capire come una macchina industriale si connette alla rete mobile, bisogna chiarire una cosa importante: **GSM e GPRS non sono due reti diverse**, ma due modalità di utilizzo della stessa rete.

Il **GSM (Global System for Mobile Communications)** è la rete di telefonia mobile tradizionale. È una rete radio che permette di effettuare chiamate e inviare SMS.

Il **GPRS (General Packet Radio Service)** è un’estensione del GSM che permette di trasmettere dati.

> 🔎 Attenzione: GSM non è Internet  
> Il GSM è una rete radio che collega il dispositivo all’operatore.  
> Internet è una rete globale di server.  
> Il GPRS fa da collegamento tra queste due cose.

In altre parole:
- GSM → voce e SMS  
- GPRS → dati

Un dispositivo può usare entrambe le modalità a seconda di cosa deve fare.  
Per esempio:
- inviare un SMS di allarme → GSM  
- trasmettere dati continuamente (posizione, sensori, ecc.) → GPRS  

Un normale telefono cellulare utilizza automaticamente entrambe le modalità: quando fai una chiamata usa il GSM, quando navighi su Internet usa il GPRS (o tecnologie più moderne come 3G, 4G, 5G).

> 🔎 Come viaggiano davvero i dati?
> 
> Quando un dispositivo usa il GPRS, il percorso dei dati è questo:
> 
> 1. Il dispositivo invia i dati via radio alla stazione base (antenna dell’operatore)
> 2. La rete dell’operatore riceve questi dati
> 3. L’operatore li inoltra sulla rete Internet
> 4. I dati raggiungono il server di destinazione
> 
> In pratica: la rete mobile è il collegamento radio, mentre l’operatore è il ponte verso Internet.

Fisicamente il modem si collega al microcontrollore o al PLC della macchina tramite una porta seriale, esattamente come si collegava un vecchio modem dial-up al computer.

Una volta connesso, il microcontrollore può "parlargli" inviandogli semplici comandi testuali: i **comandi AT**.

Il nome "AT" viene da "ATtention": ogni comando inizia con le lettere AT, seguite da un codice che specifica l'operazione. È un protocollo nato negli anni '80 per i modem telefonici e sopravvissuto fino ad oggi perché è semplicissimo da implementare anche su microcontrollori con poche risorse.

> 🔎 Cosa fanno davvero i comandi AT?
> I comandi AT non trasmettono i dati veri e propri.  
> Servono per controllare il modem, ad esempio:
> - aprire una connessione
> - inviare un SMS
> - iniziare una trasmissione dati  
> 
> Una volta stabilita la connessione, i dati vengono inviati automaticamente dal modem sotto forma di pacchetti.

Ecco alcuni esempi pratici:

```

at+cmgl="REC_UNREAD" → visualizza i messaggi non ancora letti  
at+cmgd=1,4 → cancella tutti i messaggi presenti  
at+cmgs="340987654" → invia un messaggio al numero specificato

```

Il **GSM** è ideale per comunicazioni sporadiche (SMS, allarmi).  
Il **GPRS** è usato quando serve trasmettere dati in modo continuo.

Un esempio concreto: un modem GSM installato su un distributore automatico permette alla centrale di sapere quando un prodotto è esaurito o quando c'è un guasto.

Nel **Vehicle Tracking**, ogni veicolo ha un’unità OBU con GPS e modem GSM/GPRS che invia continuamente posizione e stato alla centrale.

---

### Visibilità tra Terminali

Un aspetto tecnico importante riguarda la **raggiungibilità dei dispositivi**.

> 🔎 Perché i dispositivi GPRS non sono raggiungibili direttamente?
> 
> Quando un dispositivo si connette tramite GPRS, riceve un indirizzo IP privato (non pubblico).
> 
> Questo significa che:
> - può inviare dati verso Internet  
> - ma non può essere contattato direttamente dall’esterno  

Il motivo è che gli operatori utilizzano il **NAT (Network Address Translation)** per condividere pochi indirizzi IP pubblici tra molti dispositivi.

Inoltre, l’indirizzo IP del dispositivo è **dinamico**, cioè cambia ogni volta che si connette.

Per questo motivo, nei sistemi industriali si usa una soluzione diversa:
- ogni dispositivo si connette a un server con IP fisso  
- mantiene la connessione attiva  
- comunica attraverso quel server  

In questo modo, anche se i dispositivi non sono direttamente raggiungibili, possono comunque scambiarsi dati in modo affidabile.

---

## 7. Connessioni Long Range in Banda ISM

Le frequenze radio sono una risorsa condivisa e limitata: non si possono usare a caso, altrimenti tutti interferirebbero con tutti. Per questo motivo le bande di frequenza vengono assegnate dagli organi regolatori (in Italia l'AGCOM, in Europa l'ETSI, negli USA la FCC): alla radio FM tocca la sua fetta di spettro, alla telefonia mobile la sua, ai radar aeroportuali la loro, e così via.

Esistono però alcune bande — le cosiddette **bande ISM (Industrial, Scientific and Medical)** — che sono liberamente utilizzabili senza bisogno di licenza. Chiunque può usarle, purché rispetti certi limiti di potenza. Attenzione però: queste bande non sono le stesse in tutto il mondo. In Europa, per esempio, la banda a 900 MHz è occupata dal GSM e non è libera; in America invece sì.

#### Tabella 19 — Limiti di Potenza per le Principali Bande Libere

|Banda ISM [MHz]|FCC 15.247 (USA)|ETSI Europa — ETS 300 328|
|---|---|---|
|902 ÷ 928|< 1 W|—|
|2 400 ÷ 2 483,5|< 1 W (4 W EIRP)|< 100 mW EIRP|
|5 725 ÷ 5 875|< 1 W|< 100 mW|

Ecco le principali bande libere europee usate nell'automazione:

- Le bande a **125 kHz** e **134,5 kHz** sono destinate ai sistemi di identificazione senza contatto (**RFID**): la prima per le persone (badge, braccialetti), la seconda per gli animali (microchip sottocutaneo nei cani e gatti).
    
- La banda a **13,56 MHz** è usata sia dai sistemi RFID più moderni che dalla tecnologia **NFC** degli smartphone (i pagamenti contactless usano questa frequenza).
    
- Le bande a **433 MHz** e **868 MHz** sono usate per telemetria e controlli remoti. La prima copre fino a 100 m (tipica degli apricancelli domestici), la seconda fino a 500 m. Meno comuni ma più potenti: **434 MHz** (fino a 1 km) e **458 MHz** (fino a 10 km).
    
- Le bande a **2,4 GHz** e **5,8 GHz** sono quelle del WiFi, Bluetooth e ZigBee: distanze tipiche da 10 a 100 m, potenze da 1 a 10 mW.
    

### 7.1 LoRa

**LoRa (Long Range)** è una tecnologia recente pensata per colmare il gap tra il corto raggio del WiFi/Bluetooth e il costo/complessità del GSM. L'idea è semplice: trasmettere piccole quantità di dati su distanze enormi, consumando pochissima energia.

In Europa usa le bande ISM libere 433 e 868 MHz, con potenza fino a 100 mW. Le distanze che riesce a coprire sono notevoli: oltre 10 km in campagna aperta, 3–5 km in città. È ideale per reti di sensori ambientali, contatori intelligenti, tracker GPS per animali o veicoli — tutti dispositivi che trasmettono pochi byte di dati ogni tanto e devono durare anni a batteria.

---

## 8. Standard Short Range

Con "**dispositivi short range (SRD)**" si intendono tutti quei sistemi di comunicazione radio a bassa potenza che operano su distanze brevi — da pochi centimetri a qualche centinaio di metri. Sono i protagonisti del mondo IoT (Internet of Things): sensori, attuatori, indossabili, elettrodomestici connessi.

Le tre tecnologie più importanti in questa categoria — WiFi, Bluetooth e ZigBee — operano tutte nella banda libera a 2,4 GHz, ma con caratteristiche molto diverse, pensate per utilizzi diversi:

#### Tabella 20 — Soluzioni Wireless Short Range in Banda Libera a 2,4 GHz

|Standard|Dimensioni [mm]|Costo per nodo [$]|Data rate [Mbps]|Consumo [mW]|
|---|---|---|---|---|
|**WiFi**|12 × 12|20 ÷ 30|54|500|
|**Bluetooth**|7 × 7|10 ÷ 20|0,7|2 350 ÷ 100|
|**ZigBee**|7 × 7|5 ÷ 10|0,25|0,5 ÷ 50|

![[Media/image-005.jpg]]

### WiFi

Il **WiFi** è la versione wireless dell'Ethernet: permette di connettere computer, tablet, smartphone alla rete LAN e a Internet senza cavi. Lo standard 802.11b raggiunge velocità fino a 11 Mbps, mentre il più moderno 802.11g arriva a 54 Mbps.

#### Tabella 21 — Standard WiFi

|Standard|Transmission Rate|
|---|---|
|802.11b|1 ÷ 11 Mbps|
|802.11g|6 ÷ 54 Mbps|

Un aspetto interessante: la potenza emessa dal WiFi è abbastanza bassa da essere compatibile con i dispositivi medici delicati come pompe per infusione, defibrillatori e ventilatori polmonari. Per questo motivo il WiFi è ampiamente usato negli ospedali per connettere palmari e tablet del personale medico al database centrale, senza interferire con le apparecchiature salvavita.

### Bluetooth

Il **Bluetooth** è pensato per collegare dispositivi vicini — tipicamente entro 10 metri — con un consumo molto contenuto. Auricolari, tastiere, mouse, smartwatch: questi sono gli usi quotidiani. Tecnicamente, usa 79 canali da 1 MHz ciascuno nella banda 2,4 GHz e salta continuamente da un canale all'altro (tecnica _frequency hopping_) per ridurre le interferenze con altri dispositivi presenti nella stessa banda.

I dispositivi Bluetooth si dividono in tre classi in base alla potenza trasmessa e quindi alla distanza massima raggiungibile:

- **Classe 1:** 100 mW — fino a circa 100 m
- **Classe 2:** 2,5 mW — fino a circa 10 m
- **Classe 3:** 1 mW — fino a circa 1 m

La sensibilità minima del ricevitore è **100 pW**.

Le versioni più recenti hanno aperto nuovi scenari. Il **BTLE (Bluetooth Low Energy)** riduce drasticamente i consumi, rendendolo adatto a sensori e dispositivi indossabili che devono durare mesi a batteria — a scapito di una velocità più bassa (sotto 100 kbps) e di una piccola latenza. Il **BT5** aggiunge la possibilità di creare reti mesh: ogni nodo che riceve un messaggio lo ritrasmette agli altri, permettendo di coprire aree grandi con tanti piccoli dispositivi. Teoricamente si possono raggiungere fino a **32.767 nodi** in una rete mesh BT5.

### ZigBee

**ZigBee** è lo standard pensato per reti di sensori industriali dove il consumo energetico è la priorità assoluta. Trasmette a soli 250 kbps (lentissimo rispetto al WiFi, ma più che sufficiente per dati di sensori), in pacchetti da 256 bit, e può gestire reti fino a **255 nodi**.

Il consumo bassissimo (anche solo 0,5 mW) permette a un sensore ZigBee di funzionare per anni con un paio di pile AA. Questo lo rende la scelta naturale per reti di sensori distribuiti in grandi stabilimenti, dove sostituire le batterie frequentemente sarebbe impraticabile.

Le funzioni di rete e la radio ZigBee sono già integrate in alcuni microcontrollori, come lo **STM32W108** di ST Microelectronics e il **CC2531** di Texas Instruments, semplificando molto lo sviluppo di dispositivi.

![[Media/image-041.jpg]]

---

## 9. Tecnologie Wireless Short Range per Connessioni Punto-Punto

Esistono infine due tecnologie wireless pensate non per creare reti, ma per identificare oggetti o persone o stabilire connessioni rapide tra due dispositivi: **RFID** e **NFC**.

### 9.1 RFID
L'**RFID (Radio Frequency IDentification)** è una tecnologia per identificare oggetti, animali o persone senza contatto fisico. Il principio è semplice: all'oggetto da identificare viene agganciato un piccolo sistema passivo — il **tag** (o transponder) — composto da un microchip e una piccola antenna. Il tag non ha batteria: si alimenta da solo sfruttando l'energia del campo radio emesso dal lettore.

![[Media/image-043.jpg]]

> 🔎 Cos’è davvero l’induzione elettromagnetica?
> 
> Per capire l’RFID, dobbiamo chiarire un concetto fondamentale.
> 
> Immaginate due bobine di filo vicine tra loro:
> 
> - nella prima facciamo passare una corrente che cambia nel tempo  
> - nella seconda non colleghiamo nulla  
> 
> Cosa succede?
> 
> 👉 La corrente nella prima bobina crea un **campo magnetico variabile**  
> 👉 Questo campo attraversa anche la seconda bobina  
> 👉 Il campo che cambia nel tempo “spinge” gli elettroni nella seconda bobina  
> 
> ➡️ Risultato: nella seconda bobina nasce una corrente, **senza alcun contatto fisico**
> 
> Questo fenomeno si chiama **induzione elettromagnetica**.
> 
> > 💡 Idea chiave  
> > Non serve un filo collegato:  
> > è il campo magnetico che trasporta l’energia nello spazio.

---

Prima di spiegare come funziona nel dettaglio, applichiamo il principio appena visto.

Un trasformatore funziona perché una bobina percorsa da corrente alternata crea un campo magnetico variabile che induce corrente in un'altra bobina vicina, senza contatto.

> 🔎 Ma perché nasce corrente?
> 
> Perché un campo magnetico che cambia nel tempo genera una forza sugli elettroni nei materiali conduttori, mettendoli in movimento.

I tag RFID funzionano esattamente con questo principio, ma a distanza di qualche centimetro invece di essere avvolti attorno allo stesso nucleo.

La stazione base (il lettore) ha una bobina che emette un campo magnetico oscillante alla sua frequenza di lavoro (ad esempio 125 kHz).

Dentro il tag c'è un altro circuito risonante (una bobina e un condensatore), accordato esattamente sulla stessa frequenza.

Quando il tag entra nel campo, il circuito entra in **risonanza** — come un diapason che vibra solo se colpito dalla sua nota precisa — e in questo modo amplifica enormemente la piccola energia che arriva dal campo, raccogliendone abbastanza da alimentare il microchip interno.

> 🔎 Da dove arriva l’energia?
> 
> L’energia non nasce nel tag: arriva dal lettore.
> 
> Il lettore “invia” energia tramite il campo magnetico, e il tag la cattura grazie alla bobina, esattamente come una piccola antenna.

Una volta alimentato, il microchip si sveglia, legge il codice ID memorizzato nella sua memoria e lo invia indietro al lettore in modo furbo: invece di usare un trasmettitore radio (che richiederebbe una batteria), modula il proprio consumo energetico.

> 🔎 Come fa il tag a “mandare” l’ID senza trasmettere?
> 
> Il tag non invia un segnale radio attivo.
> 
> Invece:
> - assorbe energia dal campo del lettore  
> - poi cambia leggermente quanto ne assorbe (più / meno)  
> 
> Questo comportamento altera il campo magnetico.
> 
> Il lettore rileva queste variazioni e le interpreta come 0 e 1.

Questo causa piccole variazioni nel campo magnetico della stazione base — variazioni che il lettore rileva e converte nel codice digitale dell'ID.

È un sistema elegantissimo: il tag non ha batteria, non ha pulsanti, non richiede manutenzione — dura praticamente per sempre.

Le frequenze usate sono: 125 kHz e 13,56 MHz per le persone (badge aziendali, braccialetti ospedalieri, tessere per i tornelli), e **134,2 kHz** per l'identificazione animale (il microchip sottocutaneo negli animali domestici usa questa frequenza).
### 9.2 NFC

L'**NFC (Near Field Communication)** è un'evoluzione dell'RFID sviluppata da un consorzio di aziende (Philips, LG, Nokia, Sony) per gli smartphone. Lavora a **13,56 MHz** con velocità fino a **424 kbps** ed è bidirezionale: entrambi i dispositivi possono inviare e ricevere dati.

La differenza rispetto all'RFID classico è la distanza di funzionamento: l'NFC richiede che i due dispositivi siano avvicinati entro circa **4 cm** per stabilire la connessione. Una volta stabilita, può reggere fino a **10 cm**. Questa distanza cortissima è una scelta deliberata di sicurezza: per pagare con lo smartphone devi avvicinarlo consapevolmente al POS, non è sufficiente passare a caso nelle vicinanze.

Le applicazioni più note dell'NFC sono i pagamenti contactless (Google Pay, Apple Pay), la validazione dei biglietti sui mezzi pubblici, l'accesso controllato ad aree riservate e la condivisione rapida di informazioni tra smartphone.

![[Media/image-046.jpg]]
