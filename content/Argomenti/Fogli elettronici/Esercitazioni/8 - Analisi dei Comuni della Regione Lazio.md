# Analisi dei dati dei comuni della regione Lazio

<!-- MATERIALI-PARTENZA:INIZIO -->
> [!IMPORTANT]
> ### 📂 Materiale di partenza
>
> [**Apri la cartella con i fogli di partenza**](https://drive.google.com/drive/folders/1v0DVvnXBFXiAnMzJs8f9TT5MU8jZgS9n?usp=drive_link)
>
> Scegli la cartella dell’esercitazione, quindi:
>
> - **Microsoft Excel:** scarica il file `.xlsx` e aprilo con Excel;
> - **LibreOffice Calc:** scarica il file `.xlsx` e aprilo con Calc;
> - **Fogli Google:** apri il file in Drive e scegli **Apri con > Fogli Google**.
>
> Lavora su una tua copia del file, senza modificare il foglio di partenza condiviso.
<!-- MATERIALI-PARTENZA:FINE -->

## Scenario e obiettivo

Un foglio elettronico può essere usato come archivio: ogni riga rappresenta un'entità, mentre ogni colonna ne descrive un attributo. I filtri permettono di mostrare soltanto i dati che soddisfano determinati requisiti senza modificare o cancellare gli altri.

Il file dell'esercitazione contiene open data ISTAT relativi ai 378 comuni del Lazio:

- comune;
- residenti maschi e femmine;
- totale residenti, calcolato;
- famiglie residenti;
- persone per famiglia, calcolato;
- provincia;
- indicazione `si/no` della prevalenza dei residenti maschi, calcolata.

L'obiettivo è calcolare i campi mancanti, ordinare i comuni e creare estrazioni filtrate per provincia, popolazione e composizione familiare.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Calcola i campi derivati

Le colonne `D`, `F` e `H` derivano da dati già presenti nella stessa riga. Per il primo comune:

- ricava i residenti complessivi dai due gruppi di popolazione;
- calcola quante persone corrispondono in media a ogni famiglia;
- produci una risposta `si/no` confrontando maschi e femmine.

Prima di aprire la tendina, individua per ciascun risultato se serve una somma, un rapporto oppure una condizione.

<details>
<summary>💡 Aiuto e soluzione — Controlla le tre formule della prima riga</summary>

```calc
=B2+C2
=D2/E2
=SE(B2>C2;"si";"no")
```

Inseriscile rispettivamente in `D2`, `F2` e `H2`, quindi copiale fino alla riga 379.

</details>

## 2. Assegna un nome all'intervallo

1. Seleziona da `A1` a `H379` usando `Shift` dopo essere sceso alla riga 379. La selezione estesa con `Shift` funziona in **Microsoft Excel**, **LibreOffice Calc** e **Fogli Google**.
2. Assegna all'intervallo il nome `Comuni`:

   - **Microsoft Excel:** scrivi `Comuni` nella **casella Nome** a sinistra della barra della formula e premi `Invio`;
   - **LibreOffice Calc:** scrivi `Comuni` nella **casella del nome** a sinistra della barra della formula e premi `Invio`;
   - **Fogli Google:** usa **Dati > Intervalli denominati**, inserisci `Comuni` e conferma con **Fine**.

Il nome consente di selezionare rapidamente l'intera tabella nelle operazioni successive.

## 3. Crea le statistiche per provincia

Nel foglio **Statistiche province** ogni riga deve riassumere una provincia. Parti dalle prime due domande: vuoi **contare le righe** della provincia oppure **sommarne i residenti**? Per un solo criterio sono utili `CONTA.SE` e `SOMMA.SE`.

Le due colonne successive aggiungono una seconda condizione: oltre alla provincia, il comune deve superare 10.000 residenti oppure 2,5 persone per famiglia. In questo caso servono le versioni `CONTA.PIÙ.SE` e `SOMMA.PIÙ.SE`.

In tutte le formule, gli intervalli dei dati devono restare fermi quando copi; il riferimento alla provincia in colonna A deve invece cambiare riga.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule della prima provincia</summary>

```calc
=CONTA.SE('Regione Lazio'!$G$2:$G$379;A3)
=SOMMA.SE('Regione Lazio'!$G$2:$G$379;A3;'Regione Lazio'!$D$2:$D$379)
=CONTA.PIÙ.SE('Regione Lazio'!$G$2:$G$379;A3;'Regione Lazio'!$D$2:$D$379;">10000")
=SOMMA.PIÙ.SE('Regione Lazio'!$D$2:$D$379;'Regione Lazio'!$G$2:$G$379;A3;'Regione Lazio'!$F$2:$F$379;">2,5")
```

Inseriscile da `B3` a `E3`, seguendo le intestazioni.

</details>

Copia le formule sulle altre province e controlla che il totale dei comuni sia 378.

## 4. Ordina i comuni per numero di abitanti

1. Seleziona l'intervallo `Comuni` dalla casella del nome; in Fogli Google puoi sceglierlo dal relativo menu a discesa.
2. Apri il comando di ordinamento.
3. Ordina per **Totale residenti**, in base ai valori delle celle, **dal più grande al più piccolo**.

- **Microsoft Excel:** **Dati > Ordina** e attiva **Dati con intestazioni**;
- **LibreOffice Calc:** **Dati > Ordina** e, nelle opzioni, specifica che l'intervallo contiene etichette di colonna;
- **Fogli Google:** **Dati > Ordina intervallo > Opzioni avanzate di ordinamento intervallo** e attiva **I dati hanno una riga di intestazione**.

## 5. Ordina province e comuni alfabeticamente

1. Seleziona `Comuni` e apri **Ordina**.
2. Come primo livello scegli **PROVINCIA**, ordine **dalla A alla Z**.
3. Aggiungi un livello e scegli **COMUNE**, ancora **dalla A alla Z**.

## 6. Filtra i comuni di Viterbo con più maschi che femmine

1. Seleziona `Comuni` e attiva il **Filtro**.
2. Nell'intestazione **Provincia**, deseleziona tutto e seleziona soltanto **Viterbo**.
3. Nell'intestazione **M>F**, deseleziona tutto e seleziona soltanto **si**.
4. Controlla che rimangano visibili 8 comuni.
5. Per tornare alla tabella completa, rimuovi il filtro.

- **Microsoft Excel:** **Dati > Filtro**;
- **LibreOffice Calc:** **Dati > Filtro automatico**;
- **Fogli Google:** **Dati > Crea un filtro**.

## 7. Crea il foglio Frosinone

1. Inserisci un nuovo foglio e chiamalo **Frosinone**.
2. Nel foglio **Regione Lazio**, seleziona `Comuni` e attiva il filtro.
3. Filtra **Provincia** lasciando selezionata soltanto **Frosinone**.
4. Seleziona le celle visibili dell'intervallo `A1:H379`.
5. Copia la selezione nel foglio **Frosinone**. Il risultato deve contenere 91 comuni, oltre alla riga delle intestazioni.

## 8. Crea il foglio PopolazioneCompresa

1. Inserisci un nuovo foglio e chiamalo **PopolazioneCompresa**.
2. Nel foglio **Regione Lazio**, cancella il filtro precedente, seleziona `Comuni` e riattiva il filtro.
3. Nell'intestazione **Totale residenti**, apri il menu del filtro.
4. Imposta entrambe le condizioni con operatore `AND`:

   ```text
   maggiore di 10000
   minore di 100000
   ```

   - **Microsoft Excel:** **Filtri per numeri > Filtro personalizzato**;
   - **LibreOffice Calc:** **Filtro standard**, quindi aggiungi le due condizioni collegate da `E`;
   - **Fogli Google:** **Filtra per condizione > La formula personalizzata è** e usa `=E($D2>10000;$D2<100000)`.

5. Seleziona le celle visibili di `A1:H379` e copiale nel foglio **PopolazioneCompresa**. Il risultato deve contenere 59 comuni, oltre alla riga delle intestazioni.

## 9. Crea il foglio PersoneFamiglia

1. Inserisci un nuovo foglio e chiamalo **PersoneFamiglia**.
2. Nel foglio **Regione Lazio**, rimuovi il filtro, seleziona `Comuni` e riattivalo.
3. Nell'intestazione **Provincia**, seleziona **Latina** e **Rieti**.
4. Nell'intestazione **Persone per famiglia**, apri il menu del filtro e imposta:

   ```text
   maggiore di 2,5
   ```

   - **Microsoft Excel:** **Filtri per numeri > Maggiore di**;
   - **LibreOffice Calc:** **Filtro standard > maggiore di**;
   - **Fogli Google:** **Filtra per condizione > Maggiore di**.

5. Seleziona le celle visibili di `A1:H379` e copiale nel foglio **PersoneFamiglia**. Il risultato deve contenere 52 comuni, oltre alla riga delle intestazioni.

## 10. Cura l'aspetto dei fogli

Completa la formattazione scegliendo liberamente colori e stile. Nel foglio **Regione Lazio** rendi ben riconoscibile la riga delle intestazioni, adatta la larghezza delle colonne e distingui i campi originali da quelli calcolati senza ostacolare l'uso dei filtri. Nel foglio **Statistiche province** evidenzia intestazioni e risultati riepilogativi. Applica ai fogli **Frosinone**, **PopolazioneCompresa** e **PersoneFamiglia** uno stile coerente con la tabella principale. Puoi usare righe alternate, bordi e allineamenti, purché l'archivio resti ordinato e leggibile e i valori conservino il formato corretto.
