# Funzioni di ricerca

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

Il file contiene più fogli per imparare a recuperare informazioni da tabelle verticali e orizzontali. Lavora nell'ordine proposto e usa riferimenti assoluti quando la tabella di ricerca non deve spostarsi.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. `CERCA.VERT` con corrispondenza esatta

Nel foglio **Vlookup_Exact_Match**, usa l'ID scritto in `F2` per mostrare in `F3` il nome del cliente. Individua:

- valore da cercare;
- tabella contenente ID, nome e note;
- numero della colonna da restituire;
- tipo di corrispondenza.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=SE.ERRORE(CERCA.VERT($F$2;$A$2:$C$6;2;FALSO);"ID non trovato")
```

</details>

Ripeti in `F4` restituendo le note e usa anche qui `SE.ERRORE`. Prova poi un ID inesistente e verifica che entrambe le celle mostrino il messaggio previsto.

## 2. Tabelle e corrispondenza approssimata

Nel foglio **Vlookup_Make_Table** trasforma `A1:C6`, intestazioni comprese, in una tabella chiamata `clienti`. Nel foglio **Vlookup_Closest_Match** trasforma `E1:F6` in una tabella chiamata `tabella_soglie`:

- **Microsoft Excel:** **Inserisci > Tabella**, conferma che la tabella contiene intestazioni e assegnale il nome nella scheda **Struttura tabella**;
- **LibreOffice Calc:** **Dati > Definisci intervallo**, inserisci il nome e attiva **Contiene etichette di colonna** nelle opzioni;
- **Fogli Google:** **Formato > Converti in tabella**, quindi usa il menu della tabella per rinominarla.

Nel foglio **Vlookup_Closest_Match** assegna poi i biscotti omaggio. Le soglie devono rimanere ordinate in modo crescente.

<details>
<summary>💡 Aiuto e soluzione — Controlla la struttura della formula</summary>

```calc
=CERCA.VERT(A2;$E$2:$F$6;2;VERO)
```

La tabella denominata rende più chiara l'organizzazione dei dati; l'intervallo assoluto evita comunque che la tabella di ricerca si sposti durante la copia.

</details>

Inserisci la formula in `C2` e copiala fino a `C8`.

## 3. Ricerca in un altro foglio

Nel foglio **Vlookup_across_sheets_1** recupera la quantità omaggio dalla tabella presente nel foglio successivo. Usa l'intervallo assoluto del foglio **Vlookup_across_sheets_2**, poi calcola il totale dei biscotti.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule</summary>

```calc
=CERCA.VERT(A2;'Vlookup_across_sheets_2'!$A$2:$B$6;2;VERO)
=SOMMA(A2;C2)
```

</details>

Inserisci le formule in `C2` e `D2`, quindi copiale fino alla riga 8.

## 4. `CERCA.ORIZZ`

Nel foglio **Hlookup** la tabella delle soglie è disposta per righe. Cerca nella prima riga e restituisci il valore della seconda.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=CERCA.ORIZZ(A2;$B$12:$F$13;2;VERO)
```

</details>

Inserisci la formula in `C2`, copiala fino a `C8`, quindi calcola in `D2` il totale dei biscotti:

```calc
=SOMMA(A2;C2)
```

Copia anche questa formula fino a `D8`.

## 5. `CERCA.X`

Nel foglio **Xlookup**, recupera ricavo e costo unitario del prodotto. Con `CERCA.X` non occorre contare le colonne: scegli separatamente intervallo di ricerca e intervallo risultato. In LibreOffice Calc la funzione è disponibile dalla versione 24.8.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule della prima riga</summary>

```calc
=CERCA.X(B2;$K$2:$K$7;$I$2:$I$7;"Biscotto non trovato")
=CERCA.X(B2;$K$2:$K$7;$J$2:$J$7;"Biscotto non trovato")
=C2*E2+C2*F2
```

I costi nella tabella sono memorizzati come valori negativi: per questo vengono sommati al ricavo. Per esempio, `5 + (-2)` produce un profitto unitario di `3`.

</details>

Inserisci le formule rispettivamente in `E2`, `F2` e `G2`, quindi copiale fino alla riga 701.

Nel foglio **Xlookup_Return_multiple_values** restituisci contemporaneamente ricavo e costo. Usa il prodotto in `C2` come valore da cercare, `K2:K7` come intervallo di ricerca e le due colonne `I2:J7` come intervallo risultato.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula con due risultati</summary>

```calc
=CERCA.X(C2;$K$2:$K$7;$I$2:$J$7;"Biscotto non trovato")
```

In Microsoft Excel e Fogli Google inserisci la formula in `F2`: il risultato si estende anche in `G2`. In LibreOffice Calc seleziona `F2:G2`, inserisci la formula e confermala come formula di matrice con `Ctrl+Maiusc+Invio`. Copia il risultato fino alla riga 701.

</details>

## 6. Wildcard e direzione di ricerca

Nel foglio **_Xlookup_Wildcard_Match** trova il primo cliente il cui nome inizia per `W`. Ricorda che `*` rappresenta una sequenza qualsiasi di caratteri; resta da scegliere la modalità che abilita le wildcard.

Nel foglio **Xlookup_Search_mode** trova l'ultimo ordine di Lola. La ricerca predefinita restituisce il primo incontro: per ottenere l'ultimo devi cambiare la direzione, cercando dal basso verso l'alto.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule</summary>

```calc
=CERCA.X("W*";$B$2:$B$7;$B$2:$B$7;"Non trovato";2)
=CERCA.X("Lola";A2:A32;B2:B32;"Non trovato";0;-1)
```

Nella prima formula `2` abilita le wildcard; nella seconda `-1` imposta la ricerca dall'ultimo valore verso il primo.

</details>

Inserisci la prima formula in `E3` nel foglio **_Xlookup_Wildcard_Match** e la seconda in `E3` nel foglio **Xlookup_Search_mode**.

## 7. Cura l'aspetto dei fogli

Completa la formattazione scegliendo liberamente colori e stile. In ogni foglio distingui chiaramente la tabella di ricerca, le celle nelle quali si inseriscono i valori da cercare e i risultati restituiti dalle formule. Usa la stessa convenzione grafica in tutta la cartella di lavoro e cura intestazioni, bordi, allineamenti, larghezza delle colonne e altezza delle righe. I messaggi di errore e i risultati devono essere ben leggibili e i formati numerici devono restare adatti ai dati mostrati.

---

# Prova non guidata: preventivo School of English

Apri il relativo foglio di partenza. Le tariffe si trovano nel foglio **Tariffe**, mentre nel foglio **Preventivo** sono già presenti i menu a discesa.

1. Recupera il costo settimanale dell'alloggio scelto e moltiplicalo per le settimane.
2. Recupera il costo unitario del corso e moltiplicalo per le lezioni settimanali e per il numero di settimane.
3. Recupera il costo del volo.
4. Calcola il totale lordo.
5. Applica uno sconto dell'1,5% per ogni gruppo completo di tre anni di servizio.
6. Calcola il preventivo finale.
7. Proteggi il foglio lasciando modificabili solo le celle azzurre. Prima sblocca queste celle, quindi usa:

   - **Microsoft Excel:** **Revisione > Proteggi foglio**;
   - **LibreOffice Calc:** **Strumenti > Proteggi foglio**;
   - **Fogli Google:** **Dati > Proteggi fogli e intervalli**, proteggendo il foglio con un'eccezione per le celle azzurre.

Usa una funzione di ricerca, non una catena di `SE` annidati.

Completa infine i fogli **Tariffe** e **Preventivo** con una formattazione personale ma coerente. Mantieni riconoscibili le celle di ingresso azzurre, distingui tabelle di ricerca, descrizioni, importi intermedi e totale finale e cura bordi, allineamenti e dimensioni di righe e colonne, senza modificare i formati monetari e percentuali.

Controllo finale con i dati iniziali: il totale lordo deve essere `1.665,00 €`, lo sconto `7,5%` e il preventivo finale `1.540,13 €`.
