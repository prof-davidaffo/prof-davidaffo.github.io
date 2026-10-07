# Conversione decimale-binario e binario-decimale

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

## Scenario e metodo

Realizza un foglio di calcolo che converta un numero in base 10 in base 2 e un numero binario in un numero decimale.

Per passare da decimale a binario si applicano divisioni successive per 2, conservando ogni quoziente e resto fino a ottenere 0. Il numero binario è formato dai resti letti dall'ultimo al primo. Per esempio:

```text
179₁₀ = 10110011₂
```

Per passare da binario a decimale si sommano i prodotti di ogni bit per la corrispondente potenza di 2. Per esempio:

```text
01010011₂ = 1×2⁰ + 1×2¹ + 0×2² + 0×2³ + 1×2⁴ + 0×2⁵ + 1×2⁶ + 0×2⁷ = 83₁₀
```

I numeri da convertire vanno inseriti nelle celle con sfondo colorato. La conversione usa otto bit: il numero decimale deve essere un intero compreso tra `0` e `255` e ciascuna cella del numero binario deve contenere soltanto `0` oppure `1`.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Controlla la struttura e gli ingressi

Il foglio di partenza contiene già titoli, etichette, celle unite e valori di esempio. A sinistra il numero decimale è in `D3`; a destra gli otto bit sono in `O3:V3`. I pesi da `b₇` a `b₀` sono già disposti nell'ordine corretto.

Imposta una regola di convalida affinché `D3` accetti soltanto numeri interi da `0` a `255` e `O3:V3` accetti soltanto `0` oppure `1`:

- **Microsoft Excel:** **Dati > Convalida dati**;
- **LibreOffice Calc:** **Dati > Validità**;
- **Fogli Google:** **Dati > Convalida dati**.

Per creare manualmente etichette analoghe con il pedice usa:

- **Microsoft Excel:** modifica la cella, seleziona soltanto il numero, apri **Formato celle > Carattere** e attiva **Pedice**;
- **LibreOffice Calc:** modifica la cella, seleziona soltanto il numero e usa **Formato celle > Carattere > Posizione > Pedice**;
- **Fogli Google:** usa direttamente i caratteri Unicode `₀`–`₇`.

## 2. Imposta bordi e sfondo

Le celle di ingresso sono già evidenziate: `D3:K3` contiene il numero decimale e `O3:V3` contiene gli otto bit. Controlla che bordi, sfondo e allineamento le rendano immediatamente riconoscibili.

## 3. Calcola il numero binario

### Quozienti delle divisioni successive

La prima divisione parte dal numero decimale in `D3`; ogni divisione successiva deve invece usare il quoziente appena ottenuto nella cella alla propria destra. Poiché servono soltanto quozienti interi, richiama la funzione di arrotondamento per difetto e costruisci le prime due celle prima di copiare verso sinistra.

<details>
<summary>💡 Aiuto e soluzione — Controlla le prime formule e la direzione di copia</summary>

In `K6` calcola il primo quoziente:

```calc
=ARROTONDA.DIFETTO(D3/2;1)
```

In `J6` usa il quoziente precedente, non di nuovo il numero iniziale:

```calc
=ARROTONDA.DIFETTO(K6/2;1)
```

Trascina `J6` verso sinistra fino a `D6`.

</details>

### Resti delle divisioni

Ogni cifra binaria è il resto della stessa divisione che ha prodotto il quoziente sottostante. Parti quindi dal numero originale e poi segui la catena dei quozienti. La funzione utile è `RESTO` (`MOD` in Fogli Google).

<details>
<summary>💡 Aiuto e soluzione — Controlla le prime formule e la copia</summary>

In `K4` calcola il resto della prima divisione:

```calc
=RESTO(D3;2)
```

In `J4` calcola il resto della divisione successiva:

```calc
=RESTO(K6;2)
```

Trascina `J4` fino a `D4` ed evidenzia `D4:K4` con un colore a tua scelta.

In Fogli Google le due funzioni corrispondenti sono `FLOOR` e `MOD`.

</details>

## 4. Calcola il numero decimale

Unisci `O4:V4` ed evidenzia il risultato con un colore a tua scelta. Per ricostruire il numero decimale, associa a ogni bit il proprio peso: partendo da destra i pesi sono `1`, `2`, `4`, `8` e continuano raddoppiando. Somma poi gli otto prodotti.

<details>
<summary>💡 Aiuto e soluzione — Controlla l'associazione tra bit e pesi</summary>

```calc
=V3+U3*2+T3*4+S3*8+R3*16+Q3*32+P3*64+O3*128
```

</details>

## 5. Cura l'aspetto del foglio

Completa la formattazione scegliendo liberamente colori e stile. Le due conversioni devono apparire come aree distinte; rendi immediatamente riconoscibili celle di ingresso, passaggi di calcolo e risultati finali. Usa bordi, sfondi e allineamenti coerenti, cura le dimensioni di righe e colonne e verifica che testi e valori siano sempre leggibili. Usa lo stesso criterio grafico per evidenziare i risultati delle due conversioni.
