### Creazione della tabella

Esercizio 1  
Crea una tabella chiamata `movies` con le seguenti colonne.

|colonna|tipo|vincoli|
|---|---|---|
|id|INTEGER|PRIMARY KEY|
|title|TEXT||
|director|TEXT||
|year|INTEGER||
|length_minutes|INTEGER||

### Inserimento dei dati

Esercizio 2  
Inserisci nella tabella `movies` i seguenti film.

|id|title|director|year|length_minutes|
|---|---|---|---|---|
|1|Toy Story|John Lasseter|1995|81|
|2|A Bug's Life|John Lasseter|1998|95|
|3|Toy Story 2|John Lasseter|1999|93|
|4|Monsters, Inc.|Pete Docter|2001|92|
|5|Finding Nemo|Andrew Stanton|2003|107|
|6|The Incredibles|Brad Bird|2004|116|

### Aggiornamento dei dati

Esercizio 3  
Aggiorna la durata del film `Toy Story`, portandola a `82` minuti.

Esercizio 4  
Aggiorna il regista del film `A Bug's Life`, impostandolo a `John Lasseter`.

Esercizio 5  
Aggiorna l’anno di uscita del film `Toy Story 2`, impostandolo a `1999`.

Esercizio 6  
Aggiorna il regista di tutti i film usciti prima del 2000, impostandolo temporaneamente a `"Unknown"`.

### Eliminazione dei dati

Esercizio 7  
Elimina il film `Toy Story 2`.

Esercizio 8  
Elimina tutti i film usciti prima del 2000.

Esercizio 9  
Elimina tutti i film diretti da `Andrew Stanton`.

### Modifica dello schema

Esercizio 10  
Aggiungi alla tabella `movies` una colonna `language` di tipo `TEXT`.

Esercizio 11  
Aggiungi alla tabella `movies` una colonna `rating` di tipo `FLOAT`.

### Eliminazione della tabella

Esercizio 12  
Elimina la tabella `movies`.

Esercizio 13  
Scrivi il comando per eliminare la tabella `movies` **solo se esiste**, evitando errori.
