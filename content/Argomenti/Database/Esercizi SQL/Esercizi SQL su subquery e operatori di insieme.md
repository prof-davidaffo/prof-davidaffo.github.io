## Contesto
Database per la gestione di una piattaforma di freelance.  
I freelance lavorano su progetti, possono appartenere a più categorie professionali e generano compensi.
## Tabella freelancers
|id|nome|paese|
|---|---|---|
|1|Alice|Italia|
|2|Bruno|Italia|
|3|Clara|Francia|
|4|Diego|Spagna|
## Tabella projects
|id|titolo|budget|
|---|---|---|
|1|Sito web aziendale|5000|
|2|App mobile|12000|
|3|Analisi dati|8000|
|4|Migrazione server|6000|
## Tabella assignments
|freelancer_id|project_id|compenso|
|---|---|---|
|1|1|2500|
|1|3|4000|
|2|1|2000|
|2|2|6000|
|3|3|3500|
|4|2|5000|
|4|4|3000|
|freelancers.id è chiave primaria.|||
|projects.id è chiave primaria.|||
|assignments.freelancer_id e assignments.project_id sono chiavi esterne.|||
## Esercizi su subquery semplici
Esercizio 1  
Mostra i freelance che hanno guadagnato più del compenso medio di tutte le assegnazioni.  
Esercizio 2  
Elenca i progetti con budget superiore al budget medio di tutti i progetti.  
Esercizio 3  
Mostra i freelance che hanno lavorato su almeno un progetto con budget superiore a 7000.
## Esercizi su subquery nella WHERE con IN e NOT IN
Esercizio 4  
Elenca i freelance che hanno almeno un’assegnazione registrata.  
Esercizio 5  
Mostra i freelance che **non** hanno lavorato su alcun progetto.  
Esercizio 6  
Mostra i progetti che hanno almeno un freelance assegnato.
## Esercizi su subquery correlate
Esercizio 7  
Mostra le assegnazioni in cui il compenso è superiore al compenso medio dello stesso freelance.  
Esercizio 8  
Mostra i freelance che, per almeno un progetto, hanno ricevuto un compenso inferiore alla media dei compensi di quel progetto.
## Esercizi su subquery nella FROM
Esercizio 9  
Calcola il compenso totale guadagnato da ciascun freelance e mostra solo quelli con totale superiore a 6000.  
Esercizio 10  
Calcola il compenso medio per progetto e mostra i progetti con compenso medio superiore a 3000.
## Esercizi sugli operatori di insieme
Contesto  
Si vogliono confrontare insiemi di freelance in base ai progetti svolti.  
Esercizio 11  
Mostra i freelance che hanno lavorato su progetti con budget inferiore a 7000 **oppure** su progetti con budget superiore a 10000, senza duplicati.  
Esercizio 12  
Mostra i freelance che hanno lavorato **sia** su progetti con budget inferiore a 7000 **sia** su progetti con budget superiore a 10000.  
Esercizio 13  
Mostra i freelance che hanno lavorato su progetti con budget superiore a 7000 **ma non** su quelli con budget inferiore a 7000.
## Esercizi di consolidamento avanzato
Esercizio 14  
Individua i freelance che hanno guadagnato più della media complessiva **e** hanno lavorato su almeno due progetti.  
Esercizio 15  
Mostra i progetti che hanno coinvolto freelance provenienti da più di un paese.  