<div align="center">

# Formulario dei fogli elettronici

**Sintassi italiana · esempi essenziali · consultazione rapida**

</div>

---

## Indice rapido

| Se devi… | Vai a… |
|---|---|
| scrivere o copiare una formula | [Sintassi e riferimenti](#sintassi) |
| ottenere totale, media, minimo o massimo | [Calcoli e statistiche](#statistiche) |
| calcolare percentuali, variazioni o sconti | [Percentuali](#percentuali) |
| assegnare un risultato in base a condizioni | [Condizioni](#condizioni) |
| contare o sommare solo alcuni dati | [Formule con criteri](#criteri) |
| recuperare un dato da una tabella | [Ricerca](#ricerca) |
| arrotondare o gestire gli errori | [Utilità](#utilita) |

> [!NOTE]
> Ogni formula inizia con `=`. Negli esempi si usano i nomi italiani delle funzioni, `;` tra gli argomenti e `,` per i decimali.

---

<a id="sintassi"></a>
## 1 · Sintassi e riferimenti

### Simboli fondamentali

| Simbolo | Significato | Esempio |
|:---:|---|---|
| `=` | inizio della formula | `=A1+B1` |
| `:` | intervallo continuo | `A1:A10` |
| `;` | separazione degli argomenti | `=SOMMA(A1;C1)` |
| `"testo"` | testo o criterio | `"Promosso"`, `">10"` |
| `$` | blocco di riga o colonna | `$A$1` |

### Operatori

| Operazione | Simbolo | Esempio |
|---|:---:|---|
| somma | `+` | `=A1+B1` |
| sottrazione | `-` | `=A1-B1` |
| moltiplicazione | `*` | `=A1*B1` |
| divisione | `/` | `=A1/B1` |
| potenza | `^` | `=A1^2` |

Le parentesi stabiliscono la precedenza: `=A1/(B1+C1)` divide `A1` per l'intera somma.

### Riferimenti durante la copia

| Riferimento | Nome | Che cosa rimane fisso |
|---|---|---|
| `A1` | relativo | nulla |
| `$A$1` | assoluto | colonna e riga |
| `$A1` | misto | colonna |
| `A$1` | misto | riga |

Esempio con quantità variabile in colonna A e prezzo fisso in `B1`:

```calc
=A2*$B$1
```

### Altri fogli

| Situazione | Formula |
|---|---|
| cella in un altro foglio | `=Foglio2!A1` |
| nome del foglio con spazi | `='Dati annuali'!A1` |
| intervallo fisso in un altro foglio | `='Dati annuali'!$A$2:$B$100` |

---

<a id="statistiche"></a>
## 2 · Calcoli e statistiche

| Devi trovare… | Formula | Restituisce… |
|---|---|---|
| totale | `=SOMMA(A1:A10)` | somma dei valori |
| totale di celle separate | `=SOMMA(A1;C1;E1)` | somma delle sole celle indicate |
| media | `=MEDIA(A1:A10)` | media aritmetica |
| minimo | `=MIN(A1:A10)` | valore più piccolo |
| massimo | `=MAX(A1:A10)` | valore più grande |
| celle compilate | `=CONTA.VALORI(A1:A10)` | numero di celle non vuote |

> [!TIP]
> Nell'intervallo non includere intestazioni, etichette o la cella destinata al risultato.

---

<a id="percentuali"></a>
## 3 · Percentuali

| Devi calcolare… | Modello | Esempio con celle |
|---|---|---|
| parte sul totale | `parte/totale` | `=A2/B2` |
| parte su un totale composto | `parte/(parte1+parte2)` | `=A2/(A2+B2)` |
| variazione | `(nuovo-iniziale)/iniziale` | `=(B2-A2)/A2` |
| riduzione | `1-nuovo/iniziale` | `=1-B2/A2` |
| prezzo scontato | `prezzo*(1-sconto)` | `=A2*(1-B2)` |

### Come leggere la variazione

| Risultato | Significato |
|:---:|---|
| maggiore di `0` | aumento |
| minore di `0` | diminuzione |
| uguale a `0` | nessuna variazione |

> [!IMPORTANT]
> Il rapporto `25/100` produce `0,25`. Applicando il formato **Percentuale** viene mostrato `25%`: non occorre moltiplicare per 100.

---

<a id="condizioni"></a>
## 4 · Condizioni

### Operatori di confronto

| Operatore | Significato | Operatore | Significato |
|:---:|---|:---:|---|
| `=` | uguale | `<>` | diverso |
| `>` | maggiore | `<` | minore |
| `>=` | maggiore o uguale | `<=` | minore o uguale |

### `SE`

```text
=SE(condizione; risultato_se_vera; risultato_se_falsa)
```

```calc
=SE(A2>=6;"Superato";"Non superato")
```

### Più risultati: `SE` annidato

```calc
=SE(A2<6;"Basso";SE(A2<8;"Medio";"Alto"))
```

La formula assegna `Basso` sotto 6, `Medio` da 6 a meno di 8 e `Alto` da 8 in poi.

### Più condizioni

| Funzione | Quando è vera | Esempio |
|---|---|---|
| `E` | tutte le condizioni sono vere | `=E(A2>=6;B2>=6)` |
| `O` | almeno una condizione è vera | `=O(A2>=6;B2>=6)` |

Inserite dentro `SE`:

```calc
=SE(E(A2>=6;B2>=6);"Sì";"No")
=SE(O(A2>=6;B2>=6);"Sì";"No")
```

> [!TIP]
> Nei `SE` annidati ordina le soglie dal valore più basso al più alto, oppure viceversa, senza cambiare direzione a metà formula.

---

<a id="criteri"></a>
## 5 · Formule con criteri

Un criterio scritto direttamente nella formula va tra virgolette: `"Roma"`, `"<6"`, `">=10"`.

### Contare

| Funzione | Sintassi | Esempio |
|---|---|---|
| `CONTA.SE` | `CONTA.SE(intervallo;criterio)` | `=CONTA.SE(A2:A100;"Roma")` |
| `CONTA.PIÙ.SE` | `CONTA.PIÙ.SE(intervallo1;criterio1;intervallo2;criterio2)` | `=CONTA.PIÙ.SE(A2:A100;"Roma";B2:B100;">10000")` |

`CONTA.PIÙ.SE` conta soltanto le righe che rispettano **tutti** i criteri.

### Sommare

| Funzione | Sintassi |
|---|---|
| `SOMMA.SE` | `SOMMA.SE(intervallo_criterio;criterio;intervallo_somma)` |
| `SOMMA.PIÙ.SE` | `SOMMA.PIÙ.SE(intervallo_somma;intervallo1;criterio1;intervallo2;criterio2)` |

```calc
=SOMMA.SE(A2:A100;"Roma";B2:B100)
=SOMMA.PIÙ.SE(C2:C100;A2:A100;"Roma";B2:B100;">10000")
```

La prima formula somma B dove A contiene `Roma`. La seconda somma C dove A contiene `Roma` **e** B supera 10.000.

### Criterio contenuto in una cella

| Obiettivo | Criterio |
|---|---|
| uguale al contenuto di `D1` | `D1` |
| maggiore del contenuto di `D1` | `">"&D1` |
| diverso dal contenuto di `D1` | `"<>"&D1` |

Esempio:

```calc
=CONTA.SE(A2:A100;">"&D1)
```

> [!WARNING]
> In `SOMMA.SE` l'intervallo da sommare è l'ultimo argomento; in `SOMMA.PIÙ.SE` è il primo. Tutti gli intervalli devono avere la stessa dimensione.

---

<a id="ricerca"></a>
## 6 · Ricerca nelle tabelle

### Quale funzione scegliere?

| Disposizione dei dati | Funzione |
|---|---|
| tabella verticale | `CERCA.VERT` |
| tabella orizzontale | `CERCA.ORIZZ` |
| ricerca in qualsiasi direzione | `CERCA.X` |

### `CERCA.VERT`

```text
=CERCA.VERT(valore; tabella; numero_colonna; corrispondenza)
```

```calc
=CERCA.VERT(E2;$A$2:$C$100;2;FALSO)
```

Cerca `E2` nella prima colonna della tabella e restituisce il dato della seconda colonna.

| Ultimo argomento | Comportamento |
|:---:|---|
| `FALSO` | trova soltanto una corrispondenza esatta |
| `VERO` | trova la soglia più vicina; la prima colonna deve essere crescente |

### `CERCA.ORIZZ`

```text
=CERCA.ORIZZ(valore; tabella; numero_riga; corrispondenza)
```

```calc
=CERCA.ORIZZ(A2;$B$10:$F$11;2;VERO)
```

### `CERCA.X`

```text
=CERCA.X(valore; dove_cercare; cosa_restituire; "Non trovato")
```

```calc
=CERCA.X(E2;$A$2:$A$100;$C$2:$C$100;"Non trovato")
```

`CERCA.X` non richiede di contare le colonne e può restituire dati posti a destra o a sinistra.

### Opzioni avanzate di `CERCA.X`

| Obiettivo | Formula |
|---|---|
| testo che inizia per R | `=CERCA.X("R*";$A$2:$A$100;$B$2:$B$100;"Non trovato";2)` |
| ultima corrispondenza | `=CERCA.X(E2;$A$2:$A$100;$B$2:$B$100;"Non trovato";0;-1)` |
| restituire due colonne | `=CERCA.X(E2;$A$2:$A$100;$B$2:$C$100;"Non trovato")` |

`*` rappresenta qualsiasi sequenza di caratteri; `-1` imposta la ricerca dal basso verso l'alto.

---

<a id="utilita"></a>
## 7 · Utilità

### Numeri interi e resti

| Funzione | Uso | Esempio |
|---|---|---|
| `INT` | conserva la parte intera | `=INT(7,8)` → `7` |
| `ARROTONDA.DIFETTO` | arrotonda verso il basso | `=ARROTONDA.DIFETTO(A1;1)` |
| `RESTO` | restituisce il resto di una divisione | `=RESTO(17;5)` → `2` |

In alcune configurazioni di Fogli Google `ARROTONDA.DIFETTO` e `RESTO` corrispondono a `FLOOR` e `MOD`.

### Gestire un errore previsto

```text
=SE.ERRORE(formula; risultato_in_caso_di_errore)
```

```calc
=SE.ERRORE(CERCA.VERT(E2;$A$2:$C$100;2;FALSO);"Non trovato")
```

### Errori frequenti

| Errore | Controlla… |
|---|---|
| `#DIV/0!` | il denominatore della divisione |
| `#N/D` | il valore cercato e il tipo di corrispondenza |
| `#NOME?` | nome, lingua e ortografia della funzione |
| `#RIF!` | riferimenti a celle, righe o fogli eliminati |
| `#####` | larghezza della colonna |

> [!CAUTION]
> `SE.ERRORE` non corregge una formula: usalo soltanto quando l'assenza del risultato è prevista.

---

## Da ricordare

> [!TIP]
> Se una funzione, un separatore o un comando non corrisponde agli esempi, consulta la documentazione o la guida integrata del programma che stai usando. Excel, LibreOffice Calc e Fogli Google possono adottare nomi, sintassi e percorsi di menu leggermente diversi.
