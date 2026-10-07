## Dataset
```sql
CREATE TABLE clienti (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    citta TEXT
);
INSERT INTO clienti VALUES
(1, 'Marco', 'Genova'),
(2, 'Luca', 'Milano'),
(3, 'Anna', 'Torino'),
(4, 'Giulia', 'Genova'),
(5, 'Paolo', 'Roma'),
(6, 'Sara', 'Milano'),
(7, 'Elena', 'Bologna');
CREATE TABLE prodotti (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    categoria TEXT,
    prezzo REAL
);
INSERT INTO prodotti VALUES
(1, 'Laptop', 'Elettronica', 1200),
(2, 'Mouse', 'Elettronica', 25),
(3, 'Tastiera', 'Elettronica', 60),
(4, 'Sedia', 'Arredamento', 150),
(5, 'Scrivania', 'Arredamento', 300),
(6, 'Monitor', 'Elettronica', 200),
(7, 'Lampada', 'Arredamento', 45),
(8, 'Webcam', 'Elettronica', 80);
CREATE TABLE ordini (
    id INTEGER PRIMARY KEY,
    cliente_id INTEGER,
    data TEXT
);
INSERT INTO ordini VALUES
(1, 1, '2024-01-10'),
(2, 2, '2024-01-12'),
(3, 1, '2024-01-15'),
(4, 3, '2024-01-20'),
(5, 4, '2024-02-01'),
(6, 2, '2024-02-10'),
(7, 6, '2024-02-12'),
(8, 1, '2024-02-18');
CREATE TABLE dettagli_ordini (
    ordine_id INTEGER,
    prodotto_id INTEGER,
    quantita INTEGER
);
INSERT INTO dettagli_ordini VALUES
(1, 1, 1),
(1, 2, 2),
(2, 2, 1),
(2, 3, 1),
(3, 6, 2),
(4, 4, 1),
(4, 5, 1),
(5, 2, 3),
(5, 7, 2),
(6, 1, 1),
(6, 6, 1),
(7, 3, 2),
(7, 8, 1),
(8, 2, 1),
(8, 6, 1);
```
## Esercizi
1. Mostra `nome` e `citta` di tutti i clienti ordinati alfabeticamente per nome.
2. Mostra nome e prezzo dei prodotti della categoria `Elettronica` ordinati per prezzo decrescente.
3. Mostra i nomi delle categorie presenti nella tabella `prodotti` senza duplicati.
4. Mostra gli ordini effettuati dal cliente con `cliente_id = 1`.
5. Mostra `nome` del cliente e `data` dell’ordine per tutti gli ordini effettuati.
6. Mostra `nome` del cliente, `data` dell’ordine, `nome` del prodotto e `quantita` per ogni riga presente in `dettagli_ordini`.
7. Mostra i clienti che non hanno mai effettuato ordini.
8. Mostra per ogni cliente il numero totale di ordini effettuati, includendo anche i clienti che non hanno mai ordinato.
9. Mostra per ogni prodotto il numero totale di unità vendute, includendo anche i prodotti mai acquistati.
10. Mostra per ogni ordine il totale dell’ordine, calcolato come somma di `quantita * prezzo`.
11. Mostra per ogni cliente il totale speso complessivo.
12. Mostra i clienti che hanno speso più di 500 euro in totale.
13. Mostra il cliente che ha speso di più in assoluto.
14. Mostra per ogni categoria il totale delle unità vendute.
15. Mostra le categorie per cui sono state vendute almeno 3 unità complessive.
16. Mostra gli ordini il cui totale è superiore alla media del totale degli ordini.
17. Mostra i clienti che hanno effettuato più ordini della media dei clienti.
18. Mostra i prodotti che sono stati acquistati in almeno 2 ordini diversi.
19. Mostra i clienti che hanno acquistato almeno un prodotto della categoria `Arredamento`.
20. Mostra i clienti che hanno acquistato solo prodotti della categoria `Elettronica`.
21. Mostra i clienti che hanno acquistato sia prodotti della categoria `Elettronica` sia prodotti della categoria `Arredamento`.
22. Mostra le città in cui il totale speso dai clienti è superiore alla media del totale speso delle città.
23. Mostra i clienti che hanno acquistato tutti i prodotti della categoria `Elettronica`.
24. Mostra il prodotto più venduto in termini di quantità totale.