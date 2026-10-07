# Esercizio Java – Animali (ereditarietà e polimorfismo)
### Obiettivo
Realizzare un programma Java che modelli diversi animali usando:
- una **classe base concreta**
- **ereditarietà**
- **override**
- **polimorfismo**
- **metodi esclusivi** nelle sottoclassi
---
## 1. Classe base `Animale`
Crea una classe concreta `Animale` con:
### Attributi (privati)
- `nome` (String)
- `peso` (double)
- `energia` (int)
### Metodi
- `muoviti()`  
    Restituisce una stringa generica:  
    `"L'animale si muove"`
- `mangia()`  
    Restituisce una stringa generica:  
    `"L'animale mangia"`
- `calcolaConsumoEnergia()`  
    Restituisce un intero fisso (es. 10)
- `svolgiAttivita()`
    - chiama `calcolaConsumoEnergia()`
    - diminuisce `energia`
    - se energia < 0 → mettila a 0
    - restituisce una stringa:  
        `"Consumo: X - Energia rimasta: Y"`
- `descrivi()`  
    Restituisce una stringa con: nome, peso, energia
- `riposa()`
    - aumenta energia di 10
    - restituisce: `"Energia aumentata a X"`
---
## 2. Sottoclassi
Crea **tre classi**:
- `Leone`
- `Aquila`
- `Delfino`
Ognuna deve:
- avere **1 attributo specifico**
- fare **override di almeno 2 metodi**
- avere **1 metodo esclusivo**
---
### Leone
Attributo:
- `forza` (int)
Override:
- `muoviti()` → `"Il leone corre"`
- `calcolaConsumoEnergia()` → restituisce un valore maggiore (es. 20)
Metodo esclusivo:
- `caccia()`
    - diminuisce energia di 15
    - restituisce `"Il leone caccia"`
---
### Aquila
Attributo:
- `aperturaAlare` (double)
Override:
- `muoviti()` → `"L'aquila vola"`
- `calcolaConsumoEnergia()` → valore medio (es. 15)
Metodo esclusivo:
- `individuaPreda()`
    - restituisce `"Preda individuata"` oppure `"Nessuna preda"` (puoi scegliere tu)
---
### Delfino
Attributo:
- `velocita` (double)
Override:
- `muoviti()` → `"Il delfino nuota"`
- `calcolaConsumoEnergia()` → valore medio-basso (es. 12)
Metodo esclusivo:
- `usaEcolocalizzazione()`
    - restituisce `"Il delfino usa l'ecolocalizzazione"`
---
## 3. Main
Nel `main`:
### Creazione oggetti
- crea almeno **5 animali** (di tipi diversi)
### Polimorfismo
- inseriscili in una `ArrayList<Animale>`
- per ogni animale:
    - stampa `descrivi()`
    - stampa `muoviti()`
    - stampa `svolgiAttivita()`
### Metodi esclusivi
Richiama:
- `caccia()` sui leoni
- `individuaPreda()` sulle aquile
- `usaEcolocalizzazione()` sui delfini
---
## 4. Parte obbligatoria finale
Calcola e stampa:
- numero di animali per tipo
- energia totale di tutti gli animali
- animale con energia maggiore
---
## Vincoli
- attributi **privati**
- uso corretto di **override**
- uso di `ArrayList<Animale>`
- classe `Animale` **non astratta**
- codice compilabile e ordinato
---
