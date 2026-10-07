## Contesto gestione corsi universitari
Il database gestisce corsi universitari e iscrizioni degli studenti.  
Non tutti gli studenti sono ancora iscritti a un corso e non tutti i corsi hanno già studenti iscritti.  
Inoltre, alcune iscrizioni non hanno ancora un voto assegnato.
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
| student_id                     | course_id | voto |
| ------------------------------ | --------- | ---- |
| 1                              | 1         | 28   |
| 1                              | 2         | 30   |
| 2                              | 1         | 25   |
| 2                              | 3         | 27   |
| 3                              | 2         | 26   |
| 4                              | 1         | NULL |
| 4                              | 2         | NULL |
## Esercizi su INNER JOIN
Esercizio 1  
Mostra nome dello studente, nome del corso e voto per tutte le iscrizioni con voto assegnato.  
Esercizio 2  
Elenca i corsi seguiti dallo studente di nome Luca, mostrando anche il voto.  
Esercizio 3  
Mostra nome del corso e docente per i corsi a cui è iscritto almeno uno studente.  
Esercizio 4  
Elenca gli studenti che hanno ottenuto un voto maggiore o uguale a 28, indicando corso e voto.  
Esercizio 5  
Mostra i nomi degli studenti iscritti a corsi da almeno 9 crediti.
## Esercizi su LEFT JOIN
Esercizio 6  
Mostra tutti gli studenti con i corsi a cui sono iscritti, includendo anche quelli senza iscrizioni.  
Esercizio 7  
Mostra tutti i corsi con i relativi studenti iscritti, includendo anche i corsi senza studenti.  
Esercizio 8  
Mostra nome del corso e nome dello studente, lasciando `NULL` il nome dello studente per i corsi senza iscrizioni.
## Esercizi su NULL
Esercizio 9  
Elenca le iscrizioni per le quali il voto non è ancora stato assegnato.  
Esercizio 10  
Mostra gli studenti che hanno almeno un’iscrizione senza voto.  
Esercizio 11  
Mostra i corsi che non hanno ancora alcuno studente iscritto.
## Esercizi su OUTER JOIN e NULL
Esercizio 12  
Mostra tutti i corsi e il voto massimo ottenuto; se il corso non ha iscritti o voti, il valore deve risultare `NULL`.  
Esercizio 13  
Mostra tutti gli studenti e il numero di corsi superati, considerando superati solo quelli con voto maggiore o uguale a 18.
## Esercizi di riepilogo
Esercizio 14  
Mostra nome dello studente e media dei voti ottenuti, ignorando le iscrizioni senza voto.  
Esercizio 15  
Mostra i docenti i cui corsi hanno almeno uno studente senza voto assegnato.  
Esercizio 16  
Mostra gli studenti iscritti a un solo corso. 