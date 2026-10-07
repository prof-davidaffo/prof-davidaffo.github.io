# Risultati delle elezioni politiche

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

L'ufficio elettorale regionale vuole confrontare i risultati dei partiti nelle elezioni politiche del 2018 e del 2022. Per ciascun partito il foglio riporta voti, percentuale ed eletti nelle due tornate, oltre alle relative differenze.

Viene eletto un candidato ogni 2,5% dei voti; sotto il 2,5% non viene assegnato alcun eletto. Il numero degli eletti si ottiene arrotondando per difetto:

```text
eletti = arrotondamento per difetto(percentuale × 100 / 2,5)
```

Un secondo foglio conterrà due grafici a torta delle percentuali e un grafico a colonne con eletti 2018, eletti 2022 e differenza.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Controlla la tabella

Il foglio di partenza contiene già i fogli **Risultati** e **Statistiche**. Nel primo sono presenti titolo, intestazioni, partiti, voti e unioni delle intestazioni; il secondo è vuoto e accoglierà i grafici.

1. Controlla la disposizione dei due anni, delle colonne calcolate e delle due condizioni nelle colonne K e L.
2. Formatta il titolo, le intestazioni e la riga dei totali.
3. Applica bordi interni ed esterni alla tabella.

## 2. Formatta le celle

1. Formatta `B4:B12`, `D4:E12` e `G4:G12` come **Numero**, con 0 decimali e separatore delle migliaia.
2. Formatta `H4:H11` e `J4:J11` come **Numero**, mostrando in rosso i valori negativi.
3. Formatta `C4:C12`, `F4:F12` e `I4:I11` come **Percentuale** con 2 posizioni decimali.

## 3. Calcola percentuali, eletti e differenze

### Dal numero di voti alla percentuale

Per ogni anno serve prima il totale dei voti. La percentuale di un partito è poi il rapporto fra i suoi voti e il totale dello stesso anno. Quando copi verso il basso, i voti del partito devono cambiare mentre il totale deve restare fisso.

<details>
<summary>💡 Aiuto e soluzione — Controlla totali, percentuali e riferimenti</summary>

Calcola in `B12` ed `E12` i due totali:

```calc
=SOMMA(B4:B11)
=SOMMA(E4:E11)
```

Calcola le prime percentuali in `C4` e `F4`:

```calc
=B4/$B$12
=E4/$E$12
```

Copia le percentuali fino alla riga 11.

</details>

### Dalla percentuale agli eletti

Un eletto corrisponde a ogni 2,5 punti percentuali completi. Il foglio memorizza però le percentuali come numeri decimali: trasformale prima in punti percentuali, dividile per `2,5` e conserva soltanto la parte intera con l'arrotondamento per difetto.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule dei due anni</summary>

```calc
=ARROTONDA.DIFETTO(100*C4/2,5;1)
=ARROTONDA.DIFETTO(100*F4/2,5;1)
```

Inseriscile in `D4` e `G4`, quindi copiale fino alla riga 11.

</details>

### Confronta le due elezioni

Le colonne `H:J` devono mostrare il cambiamento dal 2018 al 2022. Mantieni sempre lo stesso ordine della sottrazione, così un valore positivo indicherà una crescita e uno negativo una diminuzione.

<details>
<summary>💡 Aiuto e soluzione — Controlla l'ordine delle sottrazioni</summary>

```calc
=E4-B4
=F4-C4
=G4-D4
```

Inserisci le formule in `H4:J4` e copiale fino alla riga 11.

</details>

## 4. Combina più condizioni con `E` e `O`

Le colonne K e L rispondono a due domande diverse:

- il partito ha raggiunto almeno il 3% **in entrambe** le elezioni?
- il partito ha raggiunto almeno il 10% **in almeno una** delle due?

Prima di scrivere `SE`, scegli quale domanda richiede `E` e quale richiede `O`.

<details>
<summary>💡 Aiuto e soluzione — Controlla le due formule</summary>

```calc
=SE(E(C4>=3%;F4>=3%);"SÌ";"NO")
=SE(O(C4>=10%;F4>=10%);"SÌ";"NO")
```

Inseriscile in `K4` e `L4`, quindi copiale fino alla riga 11.

</details>

## 5. Inserisci i grafici a torta

1. Verifica che i due fogli si chiamino **Risultati** e **Statistiche**.
2. Seleziona `A4:A11`; tenendo premuto `Ctrl`, seleziona anche `C4:C11`. La selezione di intervalli non adiacenti con `Ctrl` funziona in **Microsoft Excel**, **LibreOffice Calc** e **Fogli Google** su Windows e Linux.
3. Inserisci un grafico **Torta 2D**.
4. Negli elementi del grafico disattiva **Legenda** e attiva **Etichette dati**.
5. Nelle opzioni delle etichette attiva **Nome categoria**, **Percentuale** e **Mostra guide**; imposta la posizione su **Adatta**.
6. Imposta il titolo **PERCENTUALI DEI PARTITI ELEZIONI POLITICHE 2018**, amplia il grafico e sposta il titolo sulla destra.
7. Taglia il grafico con `Ctrl+X`, passa al foglio **Statistiche** e incollalo con `Ctrl+V`; le due scorciatoie sono le stesse in **Microsoft Excel**, **LibreOffice Calc** e **Fogli Google** su Windows e Linux.
8. Ripeti usando `A4:A11` e `F4:F11` per il grafico del 2022.

Per creare e configurare il grafico usa:

- **Microsoft Excel:** **Inserisci > Grafico a torta o anello > Torta 2D**, quindi i pulsanti **Elementi grafico** e **Stili grafico**;
- **LibreOffice Calc:** **Inserisci > Grafico**, quindi la **Creazione guidata grafico**;
- **Fogli Google:** **Inserisci > Grafico**, quindi configura tipo, intervallo, titoli ed etichette nell'**Editor grafici**.

## 6. Inserisci il grafico degli eletti

1. Seleziona `A4:A11` e, tenendo premuto `Ctrl`, seleziona `D4:D11`, `G4:G11` e `J4:J11`; anche qui la scorciatoia vale per **Microsoft Excel**, **LibreOffice Calc** e **Fogli Google** su Windows e Linux.
2. Inserisci un grafico a **Colonne raggruppate** 2D.
3. Negli elementi del grafico attiva **Legenda**, **Assi**, **Titoli degli assi**, **Titolo del grafico** e **Linee della griglia**.
4. Modifica i nomi delle tre serie in **Eletti 2018**, **Eletti 2022** e **Differenza eletti**.
5. Imposta il titolo **Elezioni politiche 2018 e 2022: eletti per partito**.
6. Amplia il grafico e trasferiscilo nel foglio **Statistiche**.
7. Salva il file come `Risultati elezioni.xlsx`.

## Scelta rapida del grafico

- **Colonne o barre:** confrontano valori appartenenti a una o più categorie.
- **Torta:** mostra l'incidenza delle singole parti sul totale.
- **Linea:** mostra l'andamento nel tempo di uno o più valori.

## 7. Cura l'aspetto dei fogli

Completa la formattazione scegliendo liberamente colori e stile. Nel foglio **Risultati** distingui titolo, intestazioni, dati del 2018, dati del 2022, differenze e totali; usa bordi e allineamenti coerenti e cura le dimensioni di righe e colonne. Nel foglio **Statistiche** disponi ordinatamente i grafici e usa colori coordinati con quelli scelti per i due anni nella tabella. Titoli, etichette e valori devono restare leggibili e i formati numerici e percentuali non devono essere modificati.
