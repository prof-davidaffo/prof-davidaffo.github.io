# Tabelle pivot: inventario automobili

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

Il foglio **Car Inventory** contiene dati grezzi: ogni riga è un'automobile e ogni colonna una caratteristica. Una tabella pivot permette di cambiare domanda senza modificare questi dati.

> **Come usare gli aiuti:** prova prima a svolgere ogni passaggio in autonomia. Se ti blocchi, oppure quando vuoi verificare il risultato, apri la tendina **💡 Aiuto e soluzione** sotto la consegna. Poi richiudila e completa tu il foglio.

## 1. Crea la prima tabella pivot

La prima domanda è: **quante automobili ci sono per ogni combinazione di marca, modello e colore?**

Prima di disporre i campi, assegna loro un ruolo:

- quali due caratteristiche formano una gerarchia, dalla più generale alla più specifica?
- quale caratteristica deve suddividere orizzontalmente i risultati?
- quale campo può essere contato per ottenere il numero di automobili?

<details>
<summary>💡 Aiuto e soluzione — Controlla creazione e disposizione dei campi</summary>

Seleziona una cella dei dati e crea la pivot in un nuovo foglio:

- **Microsoft Excel:** **Inserisci > Tabella pivot > Nuovo foglio di lavoro**;
- **LibreOffice Calc:** **Inserisci > Tabella pivot**, conferma la selezione corrente e scegli un nuovo foglio come destinazione;
- **Fogli Google:** **Inserisci > Tabella pivot > Nuovo foglio**.

Disponi:

- **Make** e poi **Model** nelle Righe;
- **Color** nelle Colonne;
- **Make** nei Valori, riepilogato come conteggio.

Espandi e comprimi la gerarchia per passare dalla marca ai modelli.

</details>

## 2. Analizza ricavi, costi e profitto

Ora vuoi confrontare, per ogni marca, incasso potenziale, spesa e profitto. Marca identifica i gruppi; prezzo e costo sono quantità numeriche da aggregare. Chiediti inoltre quale operazione trasforma prezzo e costo nel guadagno.

<details>
<summary>💡 Aiuto e soluzione — Controlla campi, calcolo e ordinamento</summary>

Rimuovi **Model** dalle Righe e **Color** dalle Colonne, lasciando soltanto **Make** nelle Righe. Inserisci **Price** e **Cost** nei Valori come somme, quindi crea il campo calcolato **Profit**:

```calc
=Price-Cost
```

Ordina il profitto dal maggiore al minore.

</details>

Successivamente cambia **Cost** da somma a media. Prima di farlo, formula a parole le due domande: “quanto è stato speso complessivamente?” e “quanto costa mediamente un'automobile?”. La modifica della funzione di riepilogo deve corrispondere al passaggio fra queste domande.

## 3. Percentuali e grafico pivot

L'ultima domanda non riguarda un importo ma la composizione dell'inventario: **quale percentuale delle automobili appartiene a ciascun colore?** Per rispondere, lo stesso campo deve identificare le categorie ed essere anche contato; il conteggio va poi mostrato rispetto al totale complessivo.

<details>
<summary>💡 Aiuto e soluzione — Controlla disposizione e visualizzazione</summary>

Rimuovi i campi precedenti e disponi **Color** nelle Righe e nei Valori. Imposta il valore come conteggio e mostralo come percentuale del totale complessivo. Ordina dal valore maggiore al minore e crea un grafico a colonne collegato alla pivot:

- **Microsoft Excel:** seleziona la pivot e usa **Analizza tabella pivot > Grafico pivot**;
- **LibreOffice Calc:** fai clic dentro la pivot e usa **Inserisci > Grafico**; Calc la riconosce e crea un grafico pivot;
- **Fogli Google:** seleziona i risultati della pivot e usa **Inserisci > Grafico**, quindi scegli **Grafico a colonne** nell'**Editor grafici**.

</details>

Cambia infine la disposizione di un campo e verifica che il grafico segua la pivot: serve a controllare che il grafico sia realmente collegato, non a produrre un nuovo risultato.

La soluzione guidata conserva la configurazione finale per colore. Le configurazioni dei punti 1 e 2 sono passaggi intermedi da controllare prima di modificare nuovamente la stessa pivot.

## 4. Cura l'aspetto dei fogli

Completa la formattazione scegliendo liberamente colori e stile. Rendi leggibile la tabella dei dati di origine e distingui nelle pivot intestazioni, livelli di raggruppamento, valori e totale complessivo. Usa formati adatti per importi e percentuali, cura larghezza delle colonne, bordi e allineamenti e coordina colori e caratteri dei grafici con le rispettive tabelle pivot. Il risultato deve restare chiaro anche quando i campi vengono espansi, compressi o spostati.

---

# Prova non guidata: composizione dell'inventario

Apri il relativo foglio di partenza, che contiene già i dati dell'inventario, e crea autonomamente una tabella pivot che:

1. mostri il numero di automobili per marca;
2. ordini le marche per quantità decrescente;
3. permetta di confrontare rapidamente le marche;
4. sia accompagnata da un grafico adeguato e collegato ai risultati della pivot: un **Grafico pivot** in Microsoft Excel e LibreOffice Calc oppure un normale grafico basato sulla pivot in Fogli Google.

Completa inoltre tabella pivot e grafico con una formattazione personale ma coerente. Rendi riconoscibili intestazioni, quantità e totale complessivo, cura bordi, allineamenti e dimensioni e coordina i colori del grafico con quelli della pivot.

Controllo finale: il totale complessivo deve essere di 24 automobili.
