## Misurazioni di glucosio

Il file `misure.txt` contiene una sequenza non ordinata di misurazioni della concentrazione di glucosio nel sangue. Ogni riga ha il formato:

```text
identificatore_soggetto valore_glucosio
```

Il numero di misurazioni non è noto a priori. Per ogni soggetto sono presenti più misurazioni, e il loro numero può variare tra soggetti.

## Requisiti

1. Definire una `struct Soggetto` contenente l'identificatore e l'elenco delle misurazioni. Usare un `vector` per l'elenco delle misurazioni.
2. Definire una funzione che legga il file e memorizzi i dati in un elenco dinamico di soggetti.
3. Definire una funzione di stampa nel formato:

   ```text
   Id: 51 Glucosio: 100, 82, 70, 85, 79,
   ```

4. Definire una funzione che ordini **in-place** le misurazioni di ciascun soggetto.
5. Definire una funzione che crei due elenchi di soggetti:
   - **inclusi**: valore mediano del glucosio strettamente compreso tra `70` e `100`;
   - **esclusi**: valore mediano fuori da tali limiti.

   La mediana di un elenco ordinato è l'elemento centrale per una lunghezza dispari, oppure la media dei due elementi centrali per una lunghezza pari. Se non si implementa l'ordinamento, è ammesso usare la media al posto della mediana.
6. Definire una funzione che ordini un elenco di soggetti per identificatore.

## Main

1. Leggere `misure.txt` in un `vector` di soggetti.
2. Creare gli elenchi di inclusi ed esclusi.
3. Ordinare e stampare l'elenco degli esclusi: per identificatore e per misurazioni.

## Limitazioni

- Per i `vector` si possono usare solo `size`, `resize` e `push_back`.
- Implementare da zero ricerca e ordinamento; non usare `std::sort` né `std::swap`.
