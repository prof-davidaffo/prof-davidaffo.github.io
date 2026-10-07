# Raccolta differenziata

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

Gli uffici della Regione Veneto ricevono dai capoluoghi di provincia fogli con la tipologia e la quantità dei rifiuti raccolti in modo differenziato. L'esercitazione usa i dati di Padova, Verona e Venezia e crea un foglio complessivo collegato ai tre fogli cittadini.

Per ogni tipologia di rifiuto si calcolano la quota di ciascun capoluogo sul totale e, per ciascuna città, il numero di percentuali inferiori al 20% o superiori al 40%. Si calcolano inoltre la raccolta pro capite e un giudizio complessivo.

Il giudizio sulla raccolta è **BUONA** se la quantità pro capite è superiore a 600 kg, **SUFFICIENTE** se è superiore a 550 kg e fino a 600 kg, **SCARSA** se è fino a 550 kg.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Completa i fogli dei capoluoghi

I fogli **Padova**, **Verona** e **Venezia** contengono già titoli, voci e dati ricevuti dai tre capoluoghi.

1. Controlla che in ciascun foglio siano presenti **Abitanti**, le cinque categorie di raccolta, **Rifiuto totale** e **% Raccolta differenziata**.
2. Formatta `B2:B8` come **Numero** con separatore delle migliaia.
3. In `B9` calcola la quota di raccolta differenziata. Prima individua quali righe rappresentano le cinque categorie da sommare e quale riga contiene il totale complessivo: la percentuale è il rapporto fra queste due quantità.

   <details>
   <summary>💡 Aiuto e soluzione — Controlla formula e formato</summary>

   ```calc
   =SOMMA(B3:B7)/B8
   ```

   Applica il formato **Percentuale**.

   </details>

4. Ripeti il calcolo in `B9` nei fogli **Verona** e **Venezia**.

## 2. Controlla il foglio Complessivo

Il foglio **Complessivo** contiene già titolo, intestazioni, etichette e unioni. Le celle dei risultati sono vuote.

1. Controlla la disposizione delle coppie **Valore assoluto/Percentuale** per Padova, Verona e Venezia e della colonna **Totale**.
2. Formatta i valori assoluti e i totali come **Numero** con separatore delle migliaia e le quote come **Percentuale**.
3. Formatta i risultati della riga **Raccolta pro capite** come **Numero** con 2 posizioni decimali.

## 3. Collega i fogli e calcola le percentuali

Il foglio **Complessivo** non deve duplicare i dati: deve rimanere collegato ai tre fogli cittadini. Crea il primo collegamento a Padova e verifica che, copiandolo verso il basso, cambi la riga ma non il foglio di origine. Ripeti poi lo stesso schema per Verona e Venezia.

<details>
<summary>💡 Aiuto e soluzione — Controlla collegamenti e intervalli</summary>

In `B4` collega il primo valore di Padova:

```calc
=Padova!B2
```

Copia fino a `B11`. Crea allo stesso modo i collegamenti a Verona in `D4:D11` e a Venezia in `F4:F11`.

</details>

Prima di calcolare le quote, completa in colonna `H` il totale delle tre città per ogni riga. I valori cittadini non sono adiacenti: osserva quali colonne contengono i valori assoluti.

<details>
<summary>💡 Aiuto e soluzione — Controlla il totale</summary>

In `H4` inserisci e copia fino a `H10`:

```calc
=B4+D4+F4
```

</details>

Ogni percentuale confronta una città con il totale della stessa riga. La formula deve poter essere copiata verso il basso e poi nelle colonne delle altre città: blocca quindi soltanto la colonna del totale, lasciando libera la riga.

<details>
<summary>💡 Aiuto e soluzione — Controlla il riferimento misto</summary>

In `C4` inserisci:

```calc
=B4/$H4
```

Copia fino a `C10`, quindi nelle colonne `E` e `G`.

</details>

## 4. Calcola statistiche e giudizio

Poiché le celle delle righe 12–15 sono unite a coppie, inserisci le formule nelle colonne `B`, `D` e `F`.

Le prime due statistiche contano quante percentuali cadono sotto il 20% o sopra il 40%. Hai già usato `CONTA.SE`: cambia il criterio, ma conserva lo stesso intervallo. Quando copi verso destra deve cambiare la colonna; le righe 4–10 devono restare ferme.

<details>
<summary>💡 Aiuto e soluzione — Controlla le due formule di conteggio</summary>

```calc
=CONTA.SE(C$4:C$10;"<20%")
=CONTA.SE(C$4:C$10;">40%")
```

Inseriscile in `B12` e `B13`, quindi copiale nelle colonne `D` e `F`.

</details>

Per ottenere i chilogrammi pro capite, individua nella stessa città il rifiuto totale e il numero di abitanti. Il giudizio successivo usa questo risultato: verifica prima la soglia più alta, così i tre intervalli non si sovrappongono.

<details>
<summary>💡 Aiuto e soluzione — Controlla calcolo pro capite e ordine delle soglie</summary>

In `B14`:

```calc
=B10/B4
```

In `B15`:

```calc
=SE(B14>600;"BUONA";SE(B14>550;"SUFFICIENTE";"SCARSA"))
```

Copia entrambe nelle colonne `D` e `F`, quindi applica la formattazione condizionale ai tre giudizi.

</details>

## 5. Cura l'aspetto dei fogli

Completa la formattazione scegliendo liberamente colori e stile. Applica lo stesso criterio grafico ai fogli dei capoluoghi e al foglio **Complessivo**. Distingui titoli, intestazioni, valori assoluti, percentuali, totali e giudizi finali; usa bordi e allineamenti coerenti e mantieni riconoscibili le coppie di colonne riferite alla stessa città. Cura larghezza delle colonne, altezza delle righe e leggibilità, senza modificare i formati numerici richiesti.

---

# Prova non guidata: Azienda agricola Campaccio

Apri il relativo foglio di partenza e completa il prospetto annuale di costi e ricavi.

1. Calcola il totale annuale di ogni voce e di ciascun quadrimestre.
2. Calcola l'incidenza percentuale di ogni voce sul totale dei costi o dei ricavi.
3. Calcola i saldi dei quadrimestri e il saldo annuale.
4. Evidenzia in rosso i saldi negativi.
5. Mostra **PASSIVO**, **PAREGGIO** o **ATTIVO** in base al saldo annuale.

Completa inoltre il foglio con una formattazione personale ma coerente: distingui costi, ricavi, quadrimestri, totali e saldi mediante colori, bordi e allineamenti; cura le dimensioni di righe e colonne e mantieni corretti i formati numerici e percentuali.

Prima di consultare la soluzione controlla che le percentuali dei costi e quelle dei ricavi sommino entrambe al 100%.
