# Esercizio Java - Arena dei personaggi

## Obiettivo

Realizzare un piccolo programma Java che modelli alcuni personaggi di un gioco di ruolo usando:
- una **classe astratta**
- due **interfacce**
- **polimorfismo**

L'esercizio deve poter essere completato in circa un'ora.

---

## 1. Classe astratta `Personaggio`

Crea una classe astratta `Personaggio`.

### Attributi privati

|Attributo|Tipo|Significato|
|---|---|---|
|`nome`|`String`|Nome del personaggio|
|`puntiVita`|`int`|Punti vita attuali|
|`livello`|`int`|Livello del personaggio|

### Costruttore

|Firma|Comportamento|
|---|---|
|`Personaggio(String nome, int puntiVita, int livello)`|Inizializza gli attributi comuni|

### Metodi

|Tipo|Firma|Comportamento|
|---|---|---|
|concreto|`String getNome()`|Restituisce `nome`|
|concreto|`int getPuntiVita()`|Restituisce `puntiVita`|
|concreto|`int getLivello()`|Restituisce `livello`|
|concreto|`boolean isVivo()`|Restituisce `true` se `puntiVita > 0`|
|concreto|`int subisciDanno(int danno)`|Calcola `danno - calcolaDifesa()`. Se il risultato è minore di 0 usa 0. Sottrae il danno effettivo da `puntiVita`, senza scendere sotto 0. Restituisce il danno effettivo subito|
|concreto|`String descrivi()`|Restituisce una stringa con classe, nome, livello, punti vita e difesa|
|astratto|`String getClassePersonaggio()`|Restituisce il nome della classe del personaggio, ad esempio `"Guerriero"`|
|astratto|`int calcolaDifesa()`|Restituisce quanto il personaggio riduce i danni ricevuti|

La classe astratta rappresenta solo ciò che è comune a tutti i personaggi.
Non deve contenere metodi di attacco o magia.

---

## 2. Interfaccia `Combattente`

Crea un'interfaccia `Combattente`.

Un `Combattente` è un personaggio che può fare danno fisico.

|Tipo|Firma|Comportamento|
|---|---|---|
|astratto|`int calcolaDannoFisico()`|Restituisce il danno fisico prodotto|
|astratto|`String getArma()`|Restituisce il nome dell'arma usata|
|default|`String descriviAttacco()`|Restituisce una stringa che contiene arma usata e danno fisico prodotto|

---

## 3. Interfaccia `Incantatore`

Crea un'interfaccia `Incantatore`.

Un `Incantatore` è un personaggio che può lanciare incantesimi consumando mana.

|Tipo|Firma|Comportamento|
|---|---|---|
|astratto|`int lanciaIncantesimo()`|Prova a lanciare un incantesimo e restituisce il danno magico prodotto|
|astratto|`int getMana()`|Restituisce il mana attuale|
|default|`String descriviMana()`|Restituisce una stringa con il mana attuale|

---

## 4. Classi concrete

Implementa queste tre classi.

---

### `Guerriero`

`Guerriero` estende `Personaggio` e implementa `Combattente`.

### Attributi privati

|Attributo|Tipo|Significato|
|---|---|---|
|`forza`|`int`|Influenza il danno fisico|
|`dannoArma`|`int`|Danno base dell'arma|
|`armatura`|`int`|Influenza la difesa|
|`arma`|`String`|Nome dell'arma usata|

### Costruttore

|Firma|Comportamento|
|---|---|
|`Guerriero(String nome, int puntiVita, int livello, int forza, int dannoArma, int armatura, String arma)`|Inizializza attributi comuni e specifici|

### Metodi

|Metodo|Comportamento|
|---|---|
|`getClassePersonaggio()`|Restituisce `"Guerriero"`|
|`calcolaDifesa()`|Restituisce `armatura`|
|`calcolaDannoFisico()`|Restituisce `forza + dannoArma + getLivello()`|
|`getArma()`|Restituisce `arma`|

Il `Guerriero` non ha mana e non può lanciare incantesimi.

---

### `Mago`

`Mago` estende `Personaggio` e implementa `Incantatore`.

### Attributi privati

|Attributo|Tipo|Significato|
|---|---|---|
|`intelligenza`|`int`|Influenza il danno magico|
|`potenzaMagica`|`int`|Danno base degli incantesimi|
|`mana`|`int`|Risorsa consumata dagli incantesimi|
|`barriera`|`int`|Influenza la difesa|

### Costruttore

|Firma|Comportamento|
|---|---|
|`Mago(String nome, int puntiVita, int livello, int intelligenza, int potenzaMagica, int mana, int barriera)`|Inizializza attributi comuni e specifici|

### Metodi

|Metodo|Comportamento|
|---|---|
|`getClassePersonaggio()`|Restituisce `"Mago"`|
|`calcolaDifesa()`|Restituisce `barriera`|
|`getMana()`|Restituisce `mana`|
|`lanciaIncantesimo()`|Se `mana >= 10`, sottrae 10 mana e restituisce `intelligenza + potenzaMagica + getLivello()`. Altrimenti restituisce `0`|

Il `Mago` non è un combattente fisico.

---

### `Paladino`

`Paladino` estende `Personaggio` e implementa sia `Combattente` sia `Incantatore`.

### Attributi privati

|Attributo|Tipo|Significato|
|---|---|---|
|`forza`|`int`|Influenza il danno fisico|
|`dannoArma`|`int`|Danno base dell'arma|
|`fede`|`int`|Influenza difesa e danno magico|
|`potenzaMagica`|`int`|Danno base degli incantesimi|
|`mana`|`int`|Risorsa consumata dagli incantesimi|
|`arma`|`String`|Nome dell'arma usata|

### Costruttore

|Firma|Comportamento|
|---|---|
|`Paladino(String nome, int puntiVita, int livello, int forza, int dannoArma, int fede, int potenzaMagica, int mana, String arma)`|Inizializza attributi comuni e specifici|

### Metodi

|Metodo|Comportamento|
|---|---|
|`getClassePersonaggio()`|Restituisce `"Paladino"`|
|`calcolaDifesa()`|Restituisce `fede / 2`|
|`calcolaDannoFisico()`|Restituisce `forza + dannoArma`|
|`getArma()`|Restituisce `arma`|
|`getMana()`|Restituisce `mana`|
|`lanciaIncantesimo()`|Se `mana >= 15`, sottrae 15 mana e restituisce `fede + potenzaMagica`. Altrimenti restituisce `0`|

Il `Paladino` serve a mostrare che una classe può implementare più interfacce.

---

## 5. Main di test

Il `main` serve solo a provare il comportamento delle classi.
Non deve contenere metodi statici extra o logica complicata.

|Passo|Cosa fare|
|---|---|
|1|Crea una `ArrayList<Personaggio>`|
|2|Inserisci almeno un `Guerriero`, un `Mago` e un `Paladino`|
|3|Scorri la lista e stampa `descrivi()` per ogni personaggio|
|4|Se un personaggio è `Combattente`, stampa `descriviAttacco()`|
|5|Se un personaggio è `Incantatore`, stampa `descriviMana()`, poi chiama `lanciaIncantesimo()` e stampa il danno magico prodotto|
|6|Fai subire a ogni personaggio un danno fisso, ad esempio `20`, e stampa il danno effettivo restituito da `subisciDanno(...)`|

Il `main` deve mostrare:
- uso di una lista di tipo `ArrayList<Personaggio>`
- uso di `instanceof`
- uso dei metodi default delle interfacce
- uso del `Paladino` sia come `Combattente` sia come `Incantatore`

---

## 6. Vincoli

- Gli attributi devono essere `private`.
- `Personaggio` deve essere astratta.
- `Combattente` e `Incantatore` devono essere interfacce.
- `Guerriero` non deve implementare `Incantatore`.
- `Mago` non deve implementare `Combattente`.
- `Paladino` deve implementare entrambe le interfacce.
- Il codice deve compilare.
- I nomi dei metodi devono essere quelli indicati.

---

## Cosa deve emergere

La classe astratta `Personaggio` contiene solo lo stato e i comportamenti comuni: nome, punti vita, livello, difesa e descrizione.

Le interfacce rappresentano capacità opzionali:
- `Combattente` significa "può fare danno fisico"
- `Incantatore` significa "può usare mana per fare danno magico"

In questo modo non ci sono metodi inutili o duplicati: ogni metodo ha un compito diverso.
