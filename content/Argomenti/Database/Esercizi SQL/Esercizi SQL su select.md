## Tabella di partenza Film
```sql
CREATE TABLE Film (
    id INTEGER PRIMARY KEY,
    titolo TEXT,
    regista TEXT,
    anno INTEGER,
    durata_minuti INTEGER
);
INSERT INTO Film (id, titolo, regista, anno, durata_minuti) VALUES
(1, 'Toy Story', 'John Lasseter', 1995, 81),
(2, 'A Bug''s Life', 'John Lasseter', 1998, 95),
(3, 'Toy Story 2', 'John Lasseter', 1999, 93),
(4, 'Monsters, Inc.', 'Pete Docter', 2001, 92),
(5, 'Finding Nemo', 'Andrew Stanton', 2003, 107),
(6, 'The Incredibles', 'Brad Bird', 2004, 116),
(7, 'Cars', 'John Lasseter', 2006, 117),
(8, 'Ratatouille', 'Brad Bird', 2007, 115),
(9, 'WALL-E', 'Andrew Stanton', 2008, 104),
(10, 'Up', 'Pete Docter', 2009, 101),
(11, 'Toy Story 3', 'Lee Unkrich', 2010, 103),
(12, 'Cars 2', 'John Lasseter', 2011, 120),
(13, 'Brave', 'Brenda Chapman', 2012, 102),
(14, 'Monsters University', 'Dan Scanlon', 2013, 110),
(87, 'WALL-G', 'Brenda Chapman', 2042, 97);
```
## Tabella di partenza Città
```sql
CREATE TABLE Citta (
    citta TEXT,
    paese TEXT,
    popolazione INTEGER,
    latitudine REAL,
    longitudine REAL
);
INSERT INTO Citta (citta, paese, popolazione, latitudine, longitudine) VALUES
('Guadalajara', 'Messico', 1500800, 20.659699, -103.349609),
('Toronto', 'Canada', 2795060, 43.653226, -79.383184),
('Houston', 'Stati Uniti', 2195914, 29.760427, -95.369803),
('New York', 'Stati Uniti', 8405837, 40.712784, -74.005941),
('Philadelphia', 'Stati Uniti', 1553165, 39.952584, -75.165222),
('Havana', 'Cuba', 2106146, 23.054070, -82.345189),
('Mexico City', 'Messico', 8555500, 19.432608, -99.133208),
('Phoenix', 'Stati Uniti', 1513367, 33.448377, -112.074037),
('Los Angeles', 'Stati Uniti', 3884307, 34.052234, -118.243685),
('Ecatepec de Morelos', 'Messico', 1742000, 19.601841, -99.050674),
('Montreal', 'Canada', 1717767, 45.501689, -73.567256),
('Chicago', 'Stati Uniti', 2718782, 41.878114, -87.629798);
```
## Esercizi su SELECT di base
1. Seleziona tutti i dati presenti nella tabella `Film`.
2. Visualizza solo i titoli e gli anni di uscita dei film.
3. Ottieni l’elenco dei registi presenti nella tabella `Film`.
4. Mostra titolo e durata dei film.
5. Visualizza tutte le informazioni dei film ordinandole per `id` crescente.
## Esercizi su WHERE con dati numerici
6. Seleziona tutti i film usciti dopo il 2010.
7. Trova i film con durata inferiore a 100 minuti.
8. Elenca i film usciti tra il 2000 e il 2005 inclusi.
9. Mostra i film con `id` maggiore o uguale a 10.
10. Trova i film la cui durata non è compresa tra 90 e 110 minuti.
## Esercizi su WHERE con dati testuali
11. Seleziona tutti i film diretti da `Brad Bird`.
12. Elenca i film il cui titolo inizia con la lettera `C`.
13. Trova i film il cui titolo contiene la parola `Story`.
14. Visualizza i film che non sono diretti da `John Lasseter`.
15. Seleziona i film diretti da `Pete Docter` o `Andrew Stanton`.
## Esercizi su LIKE e pattern matching
16. Trova i film il cui titolo termina con un numero.
17. Elenca i film il cui titolo inizia con `Toy` ma non contiene `3`.
18. Seleziona i film che hanno un trattino `-` nel titolo.
19. Trova i film il cui titolo è composto da una sola parola.
20. Elenca i film il cui titolo inizia con `WALL-`.
## Esercizi su DISTINCT
21. Ottieni l’elenco dei registi senza duplicati.
22. Mostra gli anni di uscita dei film senza ripetizioni.
23. Elenca le durate distinte dei film.
24. Visualizza le coppie distinte `regista`–`anno`.
## Esercizi su ORDER BY
25. Elenca tutti i film ordinati per anno di uscita crescente.
26. Mostra i film ordinati per durata decrescente.
27. Elenca i film ordinati alfabeticamente per titolo.
28. Visualizza i film ordinati prima per regista e poi per anno.
## Esercizi su LIMIT e OFFSET
29. Mostra i primi 3 film in ordine alfabetico.
30. Visualizza gli ultimi 5 film in base all’anno di uscita.
31. Mostra il secondo e il terzo film più recente.
32. Visualizza 4 film a partire dal sesto in ordine alfabetico.
## Esercizi combinati
33. Elenca i film diretti da `John Lasseter`, ordinati per anno decrescente.
34. Trova i 3 film più lunghi usciti dopo il 2000.
35. Mostra i titoli dei film usciti prima del 2000 ordinati alfabeticamente.
36. Elenca i film diretti da `Brad Bird` con durata superiore a 110 minuti.
37. Trova il film più recente diretto da `Pete Docter`.
## Esercizi sulla tabella Città
38. Elenca tutte le città con popolazione superiore a 3 milioni.
39. Mostra le città degli Stati Uniti ordinate per popolazione crescente.
40. Trova le città con latitudine maggiore di 40.
41. Elenca le città del Messico ordinate da nord a sud.
42. Mostra le 3 città meno popolose presenti nella tabella.
43. Visualizza le città situate a est di `New York`.
44. Elenca le città canadesi ordinate per longitudine.