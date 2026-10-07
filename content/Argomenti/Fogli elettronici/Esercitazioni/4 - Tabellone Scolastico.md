# Tabellone scolastico

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

Il tabellone finale della classe 3ª F calcola media, debiti, regolarità della frequenza ed esito. Per accedere allo scrutinio occorre almeno il 75% di presenze. L'esito è:

- **NON AMMESSO** se è stato superato il limite di assenze oppure ci sono più di 3 debiti;
- **AMMESSO** con frequenza regolare e nessun debito;
- **SOSPESO** con frequenza regolare e da 1 a 3 debiti.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Controlla la tabella e il riepilogo

Il foglio di partenza contiene già titolo, intestazioni e dati della classe: controllali e completa le celle destinate ai risultati.

1. Unisci `A1:C1` e formatta il titolo **Classe 3ª F**.
2. Controlla le intestazioni in riga 2 e i dati degli studenti nelle righe 3–13.
3. Osserva le celle vuote destinate a media, debiti, frequenza ed esito.
4. Controlla le etichette della riga 14 e del riepilogo nelle righe 16–18.

## 2. Calcola media e debiti

In `G3` riassumi i cinque voti con la loro media. Hai già usato `MEDIA`: questa volta assicurati che l'intervallo comprenda soltanto le materie, senza nome, presenze o colonne di risultato.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=MEDIA(B3:F3)
```

</details>

In `H3` devi ottenere non una somma, ma il numero di materie insufficienti. Richiama `CONTA.SE` e costruisci il criterio che identifica un voto inferiore a 6.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=CONTA.SE(B3:F3;"<6")
```

</details>

Copia le formule di `G3:H3` fino alla riga 13.

## 3. Verifica la frequenza con un `SE` semplice

In `J3` mostra **REGOLARE** quando la percentuale in `I3` è almeno il 75%; in caso contrario mostra **LIMITE SUPERATO**. Individua condizione, risultato vero e risultato falso prima di aprire la soluzione.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=SE(I3>=75%;"REGOLARE";"LIMITE SUPERATO")
```

</details>

Trascina fino a `J13`.

## 4. Determina l'esito finale

In `K3` controlla per prima cosa le due condizioni che causano la non ammissione: limite di assenze superato **oppure** più di tre debiti. Se nessuna è vera, distingui tra zero debiti e uno–tre debiti.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula</summary>

```calc
=SE(O(J3="LIMITE SUPERATO";H3>3);"NON AMMESSO";SE(H3=0;"AMMESSO";"SOSPESO"))
```

</details>

Trascina fino a `K13`.

## 5. Calcola medie e riepilogo

In `B14` calcola la media di Italiano. Copia la formula in `C14:E14` per le altre materie e in `G14` per la media generale; lascia vuota `F14`, perché non è richiesta la media della Condotta.

<details>
<summary>💡 Aiuto e soluzione — Controlla la formula iniziale</summary>

```calc
=MEDIA(B3:B13)
```

</details>

Nel riepilogo tutte le domande sono conteggi con un criterio. Considera **meritevoli** gli studenti con una media superiore a 8. Prima di scrivere ciascuna formula individua la colonna che contiene l'informazione da osservare — media, esito o numero di debiti — e traduci la domanda nel criterio corrispondente.

<details>
<summary>💡 Aiuto e soluzione — Controlla le formule del riepilogo</summary>

```calc
=CONTA.SE(G3:G13;">8")
=CONTA.SE(K3:K13;"AMMESSO")
=CONTA.SE(K3:K13;"NON AMMESSO")
=CONTA.SE(H3:H13;"=1")
=CONTA.SE(H3:H13;"=2")
=CONTA.SE(H3:H13;"=3")
```

</details>

## 6. Applica la formattazione condizionale

1. Evidenzia in rosso i voti e le medie inferiori a 6 in `B3:G13`.
2. Evidenzia **LIMITE SUPERATO** in rosso in `J3:J13`.
3. Evidenzia gli esiti in `K3:K13`: verde per **AMMESSO**, giallo per **SOSPESO**, rosso per **NON AMMESSO**.

## 7. Cura l'aspetto del foglio

Completa la formattazione scegliendo liberamente colori e stile generale. Distingui titolo, intestazioni, dati degli studenti, risultati calcolati e riepilogo della classe. Usa bordi e allineamenti coerenti, cura larghezza delle colonne, altezza delle righe e ritorno a capo delle intestazioni. La formattazione scelta deve restare leggibile insieme ai colori significativi già usati per voti, frequenza ed esito.

---

# Prova non guidata: recensioni dei bed and breakfast

Apri il relativo foglio di partenza. Ogni struttura ha tre voti da 1 a 10: rapporto qualità/prezzo, posizione e pulizia.

Completa il foglio autonomamente:

1. assegna **SCARSO** sotto 6, **BUONO** con 6 o 7, **ECCELLENTE** da 8 in poi;
2. applica la formula alle tre valutazioni di ogni struttura;
3. conta quanti giudizi di ciascun tipo ha ricevuto ogni B&B;
4. usa la formattazione condizionale per rendere immediatamente leggibili i risultati.

Completa inoltre il foglio con una formattazione personale ma coerente: distingui titolo, intestazioni, valutazioni e riepiloghi mediante bordi, colori e allineamenti e cura le dimensioni di righe e colonne.

Controllo finale: la somma di Eccellenti, Buoni e Scarsi deve essere sempre uguale a 3.
