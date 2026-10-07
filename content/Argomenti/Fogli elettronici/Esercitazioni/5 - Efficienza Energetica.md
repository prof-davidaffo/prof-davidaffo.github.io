# Analisi dell'efficienza energetica

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

La scuola confronta i consumi mensili di sette ambienti a pianta quadrata prima e dopo un intervento di efficientamento. Per ogni ambiente sono noti il lato e il consumo in kWh. Il foglio calcola il consumo per metro quadrato, la fascia di efficienza, la riduzione percentuale e alcune statistiche.

L'area si ottiene elevando il lato al quadrato:

```text
area = lato × lato
consumo per m² = consumo / area
```

Le soglie, definite esclusivamente per questa esercitazione, sono:

| Consumo per m² | Fascia |
|---:|---|
| ≤ 18,5 | Molto efficiente |
| ≤ 25 | Efficiente |
| ≤ 30 | Da migliorare |
| > 30 | Inefficiente |

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Controlla la tabella

Il foglio di partenza contiene già intestazioni e dati di ingresso: controlla la struttura e completa le celle di calcolo.

1. Controlla i due gruppi di colonne **Prima dell'intervento** e **Dopo l'intervento** e le relative intestazioni.
2. I nomi degli ambienti, i lati e i consumi sono già presenti in `A3:C9` e `F3:F9`.
3. Individua le celle vuote destinate a indici, riduzioni, fasce di efficienza, statistiche e riepiloghi.
4. Formatta consumi e indici come numeri con due decimali.

## 2. Calcola il consumo per metro quadrato

In `D3` traduci in formula i due passaggi descritti nello scenario: ricava l'area quadrata dal lato in `B3`, poi usa quell'area per rapportare il consumo iniziale. Non serve creare una colonna aggiuntiva per il risultato intermedio.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=C3/(B3*B3)
```

</details>

Copia la formula fino a `D9`.

Per il consumo successivo all'intervento la geometria non cambia: in `G3` riusa la stessa struttura modificando soltanto la cella che contiene il consumo.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=F3/(B3*B3)
```

</details>

Copia la formula fino a `G9`.

## 3. Calcola la riduzione dei consumi

In `H3` confronta il consumo finale con quello iniziale. Il risultato deve essere positivo quando il consumo diminuisce. Trascina fino a `H9` e applica il formato percentuale.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=1-F3/C3
```

</details>

## 4. Calcola media, massimo e minimo

Completa le righe 11–13 per le colonne numeriche `B:D` e `F:H`. Lavora separatamente sui due gruppi, senza copiare formule attraverso la colonna testuale `E`. Prima individua l'intervallo contenente i sette ambienti.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule iniziali</summary>

```calc
=MEDIA(B3:B9)
=MAX(B3:B9)
=MIN(B3:B9)
```

Copia le formule prima in `B:D` e poi in `F:H`, adattando i riferimenti.

</details>

## 5. Determina la fascia di efficienza

In `E3` confronta il consumo per m² con le soglie, dalla più bassa alla più alta. Trascina la formula fino a `E9`, quindi adattala in `I3:I9` al consumo finale.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=SE(D3<=18,5;"MOLTO EFFICIENTE";SE(D3<=25;"EFFICIENTE";SE(D3<=30;"DA MIGLIORARE";"INEFFICIENTE")))
```

</details>

Applica quattro regole di formattazione condizionale alle colonne `E` e `I`, usando un colore diverso per ogni fascia.

## 6. Crea i riepiloghi

1. Accanto all'etichetta **Numero ambienti:** conta le celle non vuote di `A3:A9`.
2. Accanto all'etichetta **Consumi diminuiti:** conta in `H3:H9` le percentuali maggiori di zero.
3. Completa i due riepiloghi già predisposti per le quattro fasce, uno prima e uno dopo l'intervento.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule principali</summary>

```calc
=CONTA.VALORI(A3:A9)
=CONTA.SE(H3:H9;">0")
=CONTA.SE(E3:E9;"MOLTO EFFICIENTE")
```

Per le altre fasce cambia il criterio; nel riepilogo finale usa la colonna `I`.

</details>

## 7. Cura l'aspetto del foglio

Completa la formattazione scegliendo liberamente colori e stile generale. Rendi riconoscibili intestazioni, consumi iniziali, consumi finali, riduzioni e aree di riepilogo. Usa bordi e allineamenti coerenti e scegli quattro colori chiaramente distinguibili per le fasce di efficienza, mantenendo la stessa associazione prima e dopo l'intervento. Cura larghezza delle colonne, altezza delle righe e leggibilità, senza modificare i formati numerici e percentuali richiesti.

---

# Prova non guidata: Pensione Le Viole

Apri il relativo foglio di partenza. La griglia contiene le prenotazioni di sette camere nei giorni della settimana; le celle grigie rappresentano giorni liberi.

Senza seguire una procedura passo passo:

1. conta le stanze prenotate in ogni giorno;
2. calcola massimo, minimo e media delle prenotazioni giornaliere;
3. conta per ogni camera i giorni prenotati;
4. calcola la percentuale di occupazione sui sette giorni;
5. assegna il giudizio **SCARSO** fino a 2 giorni, **SUFFICIENTE** con 3 o 4 giorni e **OTTIMO** oltre 4;
6. applica una formattazione condizionale ai tre giudizi.

Completa inoltre il foglio con una formattazione personale ma coerente: distingui intestazioni, giorni liberi, prenotazioni, risultati e riepiloghi mediante colori, bordi e allineamenti; cura le dimensioni di righe e colonne e mantieni corretto il formato percentuale.

Prima di consultare la soluzione, verifica che una camera occupata tutti i giorni mostri `100%` e giudizio `OTTIMO`.
