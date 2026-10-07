## Esercizi su NULL, espressioni e OUTER JOIN

## Tabella courses
|id|nome_corso|docente|crediti|
|---|---|---|---|
|1|Programmazione I|Rossi|12|
|2|Basi di dati|Bianchi|9|
|3|Sistemi operativi|Verdi|9|
|4|Reti di calcolatori|Neri|6|
|5|Ingegneria del software|Neri|12|
## Tabella students
|id|nome|anno_iscrizione|
|---|---|---|
|1|Luca|2022|
|2|Martina|2021|
|3|Giulia|2022|
|4|Marco|2023|
|5|Elisa|2023|
## Tabella enrollments
|student_id|course_id|voto|
|---|---|---|
|1|1|28|
|1|2|30|
|2|1|25|
|2|3|27|
|3|2|26|
|4|1|NULL|
|4|2|NULL|

### Esercizi

Esercizio 1  
Mostra per ogni studente il nome, il corso frequentato e il voto; se lo studente non è iscritto a nessun corso, il nome del corso e il voto devono risultare `NULL`.  
Esercizio 2  
Mostra per ogni iscrizione il voto e una colonna calcolata chiamata esito che vale `Superato` se il voto è maggiore o uguale a 18, `Non superato` se il voto è inferiore a 18 e `In attesa` se il voto è `NULL`.  
Esercizio 3  
Mostra per ogni corso il nome del corso e il numero di crediti, insieme al voto ottenuto dagli studenti; se il corso non ha studenti iscritti, il voto deve risultare `NULL`.  
Esercizio 4  
Mostra per ogni studente il nome e una colonna calcolata che indichi `Iscritto` se risulta iscritto ad almeno un corso oppure `Non iscritto` in caso contrario.  
Esercizio 5  
Mostra per ogni corso il nome e il voto massimo ottenuto; se il corso non ha voti assegnati, il valore deve risultare `NULL`.  
Esercizio 6  
Mostra nome dello studente, nome del corso e voto aumentato di 1 punto come espressione, considerando solo le iscrizioni con voto assegnato.