## PixelArt

La PixelArt rappresenta disegni su matrici di dimensione variabile attraverso file di testo. Ogni sequenza è composta da coppie `N C`, dove `N` indica il numero di pixel adiacenti e `C` il simbolo da ripetere.

Realizzare un programma per gestire una versione semplificata di PixelArt, che usa caratteri anziché colori.

I file `drawing1.txt` e `drawing2.txt` contengono:

- nell'intestazione, il numero di righe e colonne dell'immagine (la matrice è quadrata);
- una sequenza di coppie `numero - simbolo` che codifica l'immagine.

La sequenza riempie la matrice per righe consecutive. Le righe del file non coincidono necessariamente con quelle della matrice: se una sequenza supera lo spazio residuo della riga corrente, prosegue dalla prima colonna della riga successiva.

Il simbolo `-` nel codice deve essere memorizzato come spazio (`' '`) nella matrice.

## Requisiti

1. Definire una `struct pixels` che rappresenti una coppia `numero` (`int`) e `simbolo` (`char`).
2. Memorizzare l'immagine in una matrice bidimensionale di `char`.
3. Memorizzare la sequenza di coppie in una struttura dati opportuna (array dinamico o `vector`).
4. Definire `init_table`, che inizializzi a spazio ogni elemento della matrice già allocata.
5. Definire `print_table`, che stampi la matrice.
6. Definire `fill_table`, che riceva matrice e sequenza di coppie e riempia l'immagine. La funzione deve verificare la consistenza dei dati, ad esempio che il totale dei pixel codificati coincida con il numero di elementi della matrice.

Per semplificare il riempimento si può effettuare una scansione lineare della matrice:

```cpp
row = i / width;
col = i % width;
```

## Main

Per ciascuno dei file forniti:

1. leggere l'intestazione e allocare la matrice di `char` delle dimensioni corrispondenti;
2. inizializzare la matrice con `init_table`;
3. leggere e memorizzare la sequenza di codici;
4. riempire la matrice con `fill_table`;
5. stampare l'immagine con `print_table`.

Gestire eventuali errori nella sequenza di codici.
