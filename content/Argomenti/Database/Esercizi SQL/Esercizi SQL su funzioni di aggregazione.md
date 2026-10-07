## Contesto
Database per la gestione di corsi di formazione online.  
Un corso può avere più iscrizioni.  
Ogni iscrizione registra il progresso dello studente e può non essere ancora completata.
## Tabella students
|id|nome|paese|
|---|---|---|
|1|Alice|Italia|
|2|Bruno|Italia|
|3|Clara|Francia|
|4|Diego|Spagna|
## Tabella courses
|id|titolo|categoria|
|---|---|---|
|1|SQL base|Database|
|2|SQL avanzato|Database|
|3|Python introduttivo|Programmazione|
|4|Linux essentials|Sistemi|
## Tabella enrollments
| student_id | course_id | progresso_percento |
| ---------- | --------- | ------------------ |
| 1          | 1         | 100                |
| 1          | 2         | 60                 |
| 2          | 1         | 80                 |
| 2          | 3         | 100                |
| 3          | 1         | 40                 |
| 3          | 4         | NULL               |
| 4          | 2         | 20                 |

| students.id è chiave primaria.                             |
| ---------------------------------------------------------- |
| courses.id è chiave primaria.                              |
| enrollments.student_id è chiave esterna verso students.id. |
| enrollments.course_id è chiave esterna verso courses.id.   |

## Esercizi di aggregazione senza JOIN
Esercizio 1  
Calcola il numero totale di iscrizioni presenti nella piattaforma.  
Esercizio 2  
Calcola il valore massimo di progresso_percento ignorando i valori NULL.  
Esercizio 3  
Calcola la percentuale media di avanzamento considerando solo le iscrizioni con progresso noto.
## Esercizi di aggregazione con GROUP BY
Esercizio 4  
Mostra per ogni corso il numero totale di iscrizioni.  
Esercizio 5  
Mostra per ogni corso il progresso medio degli studenti.  
Esercizio 6  
Mostra per ogni studente il numero di corsi a cui è iscritto.
## Esercizi avanzati con JOIN e aggregazioni
Esercizio 7  
Mostra per ogni corso il numero di studenti iscritti, indicando il titolo del corso.  
Esercizio 8  
Mostra per ogni categoria di corso il numero totale di iscrizioni.  
Esercizio 9  
Mostra per ogni studente il progresso medio complessivo, indicando il nome dello studente.  
Esercizio 10  
Mostra solo i corsi che hanno almeno 2 studenti iscritti.
## Esercizi avanzati con JOIN e HAVING
Esercizio 11  
Seleziona le categorie di corsi per le quali il numero totale di iscrizioni è superiore a 2.  
Esercizio 12  
Mostra gli studenti che hanno una percentuale media di avanzamento superiore o uguale a 70.  
Esercizio 13  
Individua i corsi per i quali il progresso medio degli studenti è inferiore a 50. 