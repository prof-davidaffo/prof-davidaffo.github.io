Le `struct` in C sono utilizzate per creare tipi di dati composti, permettendo di raggruppare variabili di tipi diversi sotto un'unica struttura. Questo è utile per rappresentare oggetti o entità complesse che richiedono più di un tipo di dato per essere descritte in modo accurato.

Per illustrare ciò, useremo come esempio un punto in uno spazio bidimensionale, includendo tipi di dati diversi all'interno della `struct`. Supponiamo di voler rappresentare un punto che, oltre alle coordinate `x` e `y`, ha anche un colore rappresentato da una stringa.

Ecco un codice di esempio:

```c
#include <stdio.h>

// Definizione della struct
struct Punto {
    int x;      // Coordinata x come numero
    int y;      // Coordinata y come numero
    char colore[20]; // Colore del punto come stringa
};

int main() {
    // Creazione di un'istanza della struct Punto
    struct Punto p1;

    // Assegnazione dei valori
    p1.x = 10.5;
    p1.y = 20.3;
    snprintf(p1.colore, sizeof(p1.colore), "Blu");

    // Stampa delle informazioni del punto
    printf("Il punto ha coordinate: x = %.2f, y = %.2f e colore %s\n", p1.x, p1.y, p1.colore);

    return 0;
}
```

In questo esempio, la `struct Punto` ora contiene due variabili di tipo `int` (`x` e `y`) e una variabile di tipo `char` array (`colore`). Questo permette di rappresentare un punto con più informazioni rispetto al solo posizionamento nello spazio. Nella funzione `main`, creiamo un'istanza di `Punto`, assegnamo valori alle sue proprietà, e poi stampiamo queste informazioni.

Questo esempio mostra come le `struct` in C possono essere utilizzate per raggruppare variabili di diversi tipi, fornendo una maggiore flessibilità nella rappresentazione di dati complessi.