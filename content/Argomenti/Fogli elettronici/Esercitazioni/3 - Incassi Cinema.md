# Calcolo degli incassi di un cinema multisala

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

Il gestore di un cinema con cinque sale vuole controllare il numero degli spettatori e gli incassi settimanali.

La tabella **Spettatori** riporta i biglietti interi e ridotti venduti, dal martedì alla domenica, e calcola per ogni sala i totali settimanali. La tabella **Incassi** calcola gli incassi giornalieri e settimanali, la percentuale prodotta da ogni sala e i dati riepilogativi dell'intero cinema.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Controlla il costo dei biglietti

Il foglio di partenza contiene già testi, prezzi e vendite.

1. Controlla in `A1:A2` le etichette del biglietto intero e ridotto.
2. Controlla in `C1:C2` i relativi prezzi, inseriti senza il simbolo dell'euro.
3. Formatta `C1:C2` come **Valuta**, con simbolo `€` e 2 cifre decimali.

## 2. Controlla la tabella Spettatori

Il titolo, i giorni, le intestazioni **Interi/Ridotti**, i nomi delle sale e le unioni necessarie sono già predisposti in `A3:P11`. Controlla la struttura e formatta titolo e intestazioni.

## 3. Disegna i bordi

1. Applica bordi interni ed esterni a `A4:P11`.
2. Elimina i bordi non richiesti da `A4:A5`.
3. Ripeti l'operazione per `A11` e `N11:P11`.

## 4. Calcola gli spettatori

Il numero di biglietti interi e ridotti venduti durante la settimana è già presente in `B6:M10`.

Le vendite intere e ridotte si alternano nelle colonne. Per ottenere il totale settimanale della Sala 1, individua prima tutte le colonne dei biglietti interi; fai lo stesso per i ridotti. Le colonne `N` e `O` conterranno i due risultati, mentre `P` li riunirà nel totale della sala.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule della prima sala</summary>

```calc
=B6+D6+F6+H6+J6+L6
=C6+E6+G6+I6+K6+M6
=N6+O6
```

Inserisci le formule rispettivamente in `N6`, `O6` e `P6`, quindi copiale fino alla riga 10.

</details>

La riga 11 deve invece totalizzare ogni giorno e tipo di biglietto tra le cinque sale. Ora i valori da sommare sono contigui: richiama la funzione usata per sommare un intervallo.

<details>
<summary>💡 Aiuto e soluzione — Controlla formula e copia</summary>

In `B11` inserisci:

```calc
=SOMMA(B6:B10)
```

Copia fino a `M11`.

</details>

## 5. Controlla la tabella Incassi

La tabella **Incassi** è già predisposta a partire dalla riga 13, con le sale sulle righe, i giorni sulle colonne e gli spazi per totale, percentuale e riepilogo. Controllane la disposizione e applica un'impaginazione coerente con la tabella **Spettatori**.

## 6. Calcola incassi e percentuali

1. Formatta `B15:H20` come **Valuta**.

Per ogni giorno, l'incasso è formato da due prodotti: quantità di biglietti interi per il relativo prezzo e quantità di ridotti per il relativo prezzo. Quando la formula viene riutilizzata, le quantità devono cambiare ma i due prezzi in `C1:C2` devono restare fermi. Decidi quindi quali riferimenti rendere assoluti.

<details>
<summary>💡 Aiuto e soluzione — Controlla la prima formula e la copia</summary>

In `B15` inserisci:

```calc
=B6*$C$1+C6*$C$2
```

Per gli altri giorni della riga 15 usa le coppie di colonne successive (`D:E`, `F:G` e così via), poi copia l'intera riga fino alla Sala 5.

</details>

Completa ora i totali giornalieri in riga 20 e quelli settimanali in colonna `H`. In entrambi i casi devi sommare intervalli contigui, ma orientati in direzioni diverse.

<details>
<summary>💡 Aiuto e soluzione — Controlla intervalli e direzione di copia</summary>

In `B20` totalizza le cinque sale e copia fino a `G20`:

```calc
=SOMMA(B15:B19)
```

In `H15` somma invece gli incassi dei sei giorni della Sala 1 e copia fino a `H19`.

</details>

Formatta `I15:I19` come percentuale. Ogni quota confronta l'incasso settimanale della singola sala con l'incasso complessivo in `O18`: il numeratore deve cambiare scendendo, il denominatore deve rimanere fermo.

<details>
<summary>💡 Aiuto e soluzione — Controlla formula e riferimenti</summary>

```calc
=H15/$O$18
```

Inseriscila in `I15` e copia fino a `I19`.

</details>

## 7. Calcola i dati di riepilogo

Le etichette del riepilogo sono già presenti in `L14:L18`. Completa i risultati in colonna `O`, osservando quali valori intermedi sono disponibili nelle colonne `N`, `O` e `H`.

<details>
<summary>💡 Aiuto e soluzione — Controlla etichette e formule</summary>

Inserisci le formule in colonna `O`:

```calc
=SOMMA(N6:N10)
=SOMMA(O6:O10)
=O14+O15
=SOMMA(H15:H19)
```

Le quattro formule vanno rispettivamente in `O14`, `O15`, `O16` e `O18`.

</details>

## 8. Cura l'aspetto del foglio

Completa la formattazione scegliendo liberamente colori e stile. Distingui chiaramente le aree **Spettatori** e **Incassi**, i prezzi dei biglietti, le intestazioni, i totali settimanali e il riepilogo finale. Usa bordi e allineamenti coerenti e, se assegni un colore a ciascuna sala, mantieni la stessa associazione nelle due tabelle. Cura larghezza delle colonne, altezza delle righe e leggibilità, senza modificare i formati valuta e percentuale richiesti.

---

# Prova non guidata: Museo della Scienza e della Tecnica

Apri il relativo foglio di partenza, che riporta i visitatori dei primi sei mesi dell'anno.

1. Somma biglietti interi e ridotti per ottenere quelli a pagamento.
2. Aggiungi i biglietti gratuiti per ottenere il totale dei visitatori.
3. Dal secondo mese calcola la variazione rispetto al mese precedente con `(corrente - precedente) / precedente`.
4. Applica il formato percentuale e completa i totali di colonna.

Completa infine il foglio con una formattazione personale ma coerente: rendi riconoscibili titolo, intestazioni, dati, variazioni e totali mediante colori, bordi e allineamenti; cura le dimensioni di righe e colonne e mantieni corretti i formati numerici.

Verifica che gennaio abbia `58.854` visitatori complessivi.
