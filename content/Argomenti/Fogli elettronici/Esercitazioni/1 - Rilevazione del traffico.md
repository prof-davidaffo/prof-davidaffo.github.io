# Rilevazione del traffico

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

L'Assessorato all'ambiente del comune di Giulianova vuole monitorare il traffico in due punti nevralgici della città: **via Buonarroti** e **piazza del Popolo**. La tabella registra, per ogni giorno della settimana, i passaggi di automobili e mezzi pesanti.

Il foglio dovrà calcolare:

- il totale settimanale dei passaggi;
- la media giornaliera;
- la percentuale di automobili e mezzi pesanti sul totale dei veicoli transitati.

La percentuale di automobili, per esempio, si calcola come:

```text
totale automobili / (totale automobili + totale mezzi pesanti)
```

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Completa il titolo e le intestazioni

Il foglio di partenza contiene già titolo, intestazioni, giorni, dati del traffico ed etichette delle righe di riepilogo.

1. In `A1` il titolo è scritto su una sola riga. Modifica la cella e inserisci un'interruzione di riga prima di **Rilevazione del traffico**, in modo da ottenere:

   ```text
   Comune di Giulianova
   Rilevazione del traffico
   ```

   Premendo solo `Invio` confermi il contenuto e passi alla cella sottostante. Per inserire un'interruzione di riga mentre modifichi la stessa cella usa:

   - **Microsoft Excel:** `Alt+Invio`;
   - **LibreOffice Calc:** `Ctrl+Invio`;
   - **Fogli Google:** `Ctrl+Invio`.

2. Seleziona `A1:E1`, usa **Unisci e allinea al centro**, formatta il titolo e aumenta l'altezza della riga.
3. Le località sono già scritte in `B2` e `D2`: unisci `B2:C2` e `D2:E2`, quindi centra e formatta le due intestazioni.
4. Controlla la disposizione delle intestazioni in riga 3, dei giorni in `A4:A10` e delle etichette di riepilogo in `A11:A15`.

## 2. Disegna i bordi

1. Seleziona `A2:E15` e applica i bordi interni ed esterni.
2. Se la cella `A1` mostra bordi indesiderati, selezionala e usa **Elimina bordo** dal menu **Bordi**.

## 3. Inserisci le formule

I passaggi degli automezzi sono già presenti in `B4:E10`.

### Riepiloga la settimana

Le righe 11–14 devono descrivere ciascuna colonna di dati: totale, media, valore più basso e valore più alto. Hai già a disposizione le funzioni `SOMMA`, `MEDIA`, `MIN` e `MAX`: associa ogni domanda alla funzione adatta e usa sempre i sette giorni, senza includere le intestazioni.

<details>
<summary>💡 Aiuto e soluzione — Controlla intervalli, formule e copia</summary>

In `B11:B14` inserisci:

```calc
=SOMMA(B4:B10)
=MEDIA(B4:B10)
=MIN(B4:B10)
=MAX(B4:B10)
```

Seleziona le quattro formule e copiale fino alla colonna `E`. I riferimenti relativi adatteranno automaticamente l'intervallo.

</details>

### Calcola le percentuali

In ogni località automobili e mezzi pesanti formano insieme il totale dei passaggi. Per la percentuale in `B15`, individua prima la **parte** da mettere al numeratore e poi costruisci il **totale della stessa località** al denominatore. Quando copierai verso destra, controlla che le colonne continuino ad accoppiarsi correttamente.

<details>
<summary>💡 Aiuto e soluzione — Controlla formula e copia</summary>

Le categorie della stessa località devono usare lo stesso denominatore. Inserisci quindi:

```calc
=B11/(B11+C11)
=C11/(B11+C11)
=D11/(D11+E11)
=E11/(D11+E11)
```

Le quattro formule vanno rispettivamente in `B15`, `C15`, `D15` ed `E15`. Non trascinare un'unica formula lungo tutta la riga, perché al passaggio fra le due località il denominatore cambierebbe in modo errato.

</details>

## 4. Imposta il formato dei dati

1. Formatta `B4:E11` come **Numero** con 0 posizioni decimali.
2. Formatta `B12:E14` come **Numero** con 2 posizioni decimali.
3. Formatta `B15:E15` come **Percentuale** con 1 posizione decimale.

## 5. Cura l'aspetto del foglio

Completa la formattazione scegliendo liberamente colori e stile. Titolo, intestazioni, due località e righe di riepilogo devono essere immediatamente riconoscibili. Usa bordi coerenti per delimitare la tabella e distingui in modo uniforme **Totale**, **Media**, **Minimo**, **Massimo** e **Percentuale**. Cura inoltre allineamenti, larghezza delle colonne, altezza delle righe e leggibilità del testo, senza modificare i formati numerici richiesti.

---

# Prova non guidata: Five Points Hotels

Apri il relativo foglio di partenza e completa l'analisi delle presenze di cinque alberghi nei mesi di giugno, luglio e agosto.

1. Per ogni hotel calcola presenza massima, minima e media nei tre mesi.
2. Per ogni mese calcola massimo, minimo e media tra i cinque hotel.
3. Applica una formattazione personale ma coerente: distingui titolo, intestazioni, dati e risultati mediante colori, bordi e allineamenti; cura le dimensioni di righe e colonne e mantieni corretti i formati numerici.

Controllo finale: il massimo di giugno deve essere `1250` e il minimo `615`.
