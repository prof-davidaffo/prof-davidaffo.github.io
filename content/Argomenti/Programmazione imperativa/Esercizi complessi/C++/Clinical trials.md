## Clinical trials

Il file `data.txt` contiene un elenco di sperimentazioni cliniche, una per riga. Per ogni trial sono presenti:

- identificatore intero progressivo e univoco;
- patologia (`CP`, `MS`, `amputees`, `stroke`, `SLA`);
- centro clinico;
- numero intero di soggetti arruolati;
- data di inizio, compresa tra `1/1/2024` e `31/12/2025`.

Il numero di trial non è noto a priori; le righe non sono ordinate e ciascun trial compare una sola volta.

## Requisiti

1. Definire una `struct data` con giorno, mese e anno.
2. Definire una `struct trial` con tutti i dati del file, includendo una `struct data` per la data di inizio.
3. Definire una funzione che legga il file e memorizzi i trial in una struttura dinamica (consigliato `vector`).
4. Definire una funzione di stampa che mostri identificatore, patologia, centro clinico e numero di soggetti arruolati.
5. Definire una funzione che, dati la struttura e una patologia, restituisca l'indice del trial di quella patologia con il maggior numero di soggetti arruolati.
6. Dividere l'intervallo temporale in tre batch:
   - B1: dal `1/1/2024` al `30/6/2024`;
   - B2: dal `1/7/2024` al `31/12/2024`;
   - B3: dal `1/1/2025` al `31/12/2025`.

   Definire una funzione che, data una `struct data`, restituisca il batch di appartenenza oppure `-1` se la data è fuori intervallo.
7. Definire una funzione che, dati la struttura e un batch, restituisca il numero di trial previsti in quel batch.
8. Definire una funzione che ordini la struttura per numero di soggetti arruolati in ordine decrescente.

## Main

1. Leggere `data.txt` e memorizzare i trial.
2. Stampare i dati inseriti.
3. Per ciascuna delle cinque patologie, stampare il trial con più soggetti arruolati.
4. Stampare il numero di trial nei batch B1, B2 e B3.
5. Ordinare i trial per numero di soggetti arruolati e stamparli nuovamente.
