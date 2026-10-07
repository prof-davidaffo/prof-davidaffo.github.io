## Esercizio 1

```c
#include <stdio.h>
#include <math.h>

typedef struct {
    double width, height, depth;
} Box;

// Calcolo del volume di un Box
double calculateVolume(double width, double height, double depth) {
    return width * height * depth;
}

// Funzione per calcolare e confrontare i volumi di tre Box
void compareBoxes(Box box1, Box box2, Box box3, double *vol1, double *vol2, double *vol3, int *largest) {
    *vol1 = calculateVolume(box1.width, box1.height, box1.depth);
    *vol2 = calculateVolume(box2.width, box2.height, box2.depth);
    *vol3 = calculateVolume(box3.width, box3.height, box3.depth);

    if (*vol1 > *vol2 && *vol1 > *vol3) {
        *largest = 1;
    } else if (*vol2 > *vol1 && *vol2 > *vol3) {
        *largest = 2;
    } else {
        *largest = 3;
    }
}

int main() {
    Box box1 = {3.0, 4.0, 5.0};
    Box box2 = {2.0, 6.0, 8.0};
    Box box3 = {5.0, 3.0, 7.0};
    
    double volume1, volume2, volume3;
    int largestBox;

    compareBoxes(box1, box2, box3, &volume1, &volume2, &volume3, &largestBox);

    printf("Volume of Box 1: %.2f\n", volume1);
    printf("Volume of Box 2: %.2f\n", volume2);
    printf("Volume of Box 3: %.2f\n", volume3);
    printf("Box %d has the largest volume.\n", largestBox);

    return 0;
}
```


## Esercizio 2

```c
#include <stdio.h>
#include <string.h>

#define NUMERO_LIBRI 5

typedef struct {
    char titolo[50];
    int disponibile;
} Libro;

void prenotaLibro(Libro libri[], char *titolo) {
    for (int i = 0; i < NUMERO_LIBRI; i++) {
        if (strcmp(libri[i].titolo, titolo) == 0) {
            if (libri[i].disponibile == 1) {
                libri[i].disponibile = 0;
                printf("Libro '%s' prenotato con successo.\n", titolo);
                return;
            } else {
                printf("Il libro '%s' non è disponibile.\n", titolo);
                return;
            }
        }
    }
    printf("Libro '%s' non trovato.\n", titolo);
}

int main() {
    Libro libreria[NUMERO_LIBRI] = {
        {"Il Signore degli Anelli", 1},
        {"1984", 1},
        {"Il Piccolo Principe", 1},
        {"Il Grande Gatsby", 1},
        {"Moby Dick", 1}
    };

    prenotaLibro(libreria, "Il Signore degli Anelli");
    prenotaLibro(libreria, "Moby Dick");
    prenotaLibro(libreria, "Guerra e Pace");

    return 0;
}
```

## Esercizio 3

```c
#include <stdio.h>

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    Data data_inizio;
    Data data_fine;
    int ore;
    int tariffa;
} DettagliLavoro;

void calcolaPagamento(int g1, int m1, int a1, int g2, int m2, int a2, int ore, int tariffa) {
    Data data_inizio = {g1, m1, a1};
    Data data_fine = {g2, m2, a2};
    DettagliLavoro dettagli = {data_inizio, data_fine, ore, tariffa};

    int giorni_totali = (data_fine.anno - data_inizio.anno) * 365 + (data_fine.mese - data_inizio.mese) * 30 + (data_fine.giorno - data_inizio.giorno);
    int ore_totali = giorni_totali * 24 + dettagli.ore;
    int pagamento = ore_totali * dettagli.tariffa;

    printf("Pagamento totale: %d\n", pagamento);

    if (ore_totali > 160) {
        int bonus = (ore_totali - 160) * 15;
        printf("Bonus: %d\n", bonus);
    }

    if (ore_totali > 160) {
        int extra = (ore_totali - 160) * 15;
        printf("Extra: %d\n", extra);
    }
}

int main() {
    calcolaPagamento(1, 1, 2023, 31, 1, 2023, 172, 50);
    return 0;
}
```


## Esercizio 4
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    char title[50];
    char author[50];
    int year;
    float price;
} Book;

Book bookArray[100];
int bookCount = 0;

void addBook(const char* title, const char* author, int year, float price) {
    if (bookCount >= 100) {
        printf("Library is full.\n");
        return;
    }

    Book newBook;
    strncpy(newBook.title, title, 49);
    newBook.title[49] = '\0';
    strncpy(newBook.author, author, 49);
    newBook.author[49] = '\0';
    newBook.year = year;
    newBook.price = price;
    
    bookArray[bookCount++] = newBook;
}

void displayBooks() {
    for (int i = 0; i < bookCount; i++) {
        printf("Book %d: %s by %s, %d, $%.2f\n", i + 1, bookArray[i].title, bookArray[i].author, bookArray[i].year, bookArray[i].price);
    }
}

int findBookIndexByTitle(const char* title) {
    for (int i = 0; i < bookCount; i++) {
        if (strcmp(bookArray[i].title, title) == 0) {
            return i;
        }
    }
    return -1;
}

void searchBookByTitle(const char* title) {
    int index = findBookIndexByTitle(title);
    if (index != -1) {
        printf("Found: %s by %s, %d, $%.2f\n", bookArray[index].title, bookArray[index].author, bookArray[index].year, bookArray[index].price);
    } else {
        printf("Book not found.\n");
    }
}

void deleteBook(const char* title) {
    int index = findBookIndexByTitle(title);
    if (index == -1) {
        printf("Book to delete not found.\n");
        return;
    }
    for (int i = index; i < bookCount - 1; i++) {
        bookArray[i] = bookArray[i + 1];
    }
    bookCount--;
}

void updateBookPrice(const char* title, float newPrice) {
    int index = findBookIndexByTitle(title);
    if (index != -1) {
        bookArray[index].price = newPrice;
    } else {
        printf("Book not found to update price.\n");
    }
}

int main() {
    addBook("The C Programming Language", "Kernighan and Ritchie", 1978, 30.50);
    addBook("Clean Code", "Robert C. Martin", 2008, 25.60);

    displayBooks();

    searchBookByTitle("Clean Code");
    deleteBook("Clean Code");
    updateBookPrice("The C Programming Language", 35.99);

    displayBooks();

    return 0;
}

```

## Esercizio 5
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Product {
    char name[100];
    float price;
    int quantity;
};

struct Product inventory[50]; 
int num_products = 0;

void addProduct(char *name, float price, int quantity) {
    if(num_products >= 50) { 
        printf("Inventory is full!\n");
        return;
    }
    for(int i = 0; i < num_products; i++) {
        if(strcmp(inventory[i].name, name) == 0) {
            printf("Product already exists.\n");
            return;
        }
    }
    struct Product newProduct;
    strncpy(newProduct.name, name, 100);
    newProduct.name[99] = '\0';
    newProduct.price = price;
    newProduct.quantity = quantity;
    inventory[num_products++] = newProduct;
    printf("Product added successfully!\n");
}

void removeProduct(char *name) {
    int found = 0;
    for(int i = 0; i < num_products; i++) {
        if(strcmp(inventory[i].name, name) == 0) {
            found = 1;
            for(int j = i; j < num_products - 1; j++) {
                inventory[j] = inventory[j + 1];
            }
            num_products--;
            printf("Product removed successfully!\n");
            break;
        }
    }
    if(!found) {
        printf("Product not found.\n");
    }
}

void updateProduct(char *name, float price, int quantity) {
    for(int i = 0; i < num_products; i++) {
        if(strcmp(inventory[i].name, name) == 0) {
            inventory[i].price = price;
            inventory[i].quantity = quantity;
            printf("Product updated successfully!\n");
            return;
        }
    }
    printf("Product not found.\n");
}

int main() {
    addProduct("Product1", 9.99, 10);
    addProduct("Product2", 19.99, 5);
    updateProduct("Product1", 11.99, 15);
    removeProduct("Product2");
    // Intentionally left simple for demonstration purposes
    return 0;
}
```

## Esercizio 6

```c
#include <stdio.h>
#include <string.h>

#define MAX_ITEMS 100

typedef struct {
    char name[50];
    int quantity;
    double price;
    char category[50];
} Item;

Item inventory[MAX_ITEMS];

int itemCount = 0;

void addItem(char *name, int quantity, double price, char *category) {
    if (itemCount >= MAX_ITEMS) {
        printf("Inventory full. Cannot add more items.\n");
        return;
    }
    strcpy(inventory[itemCount].name, name);
    inventory[itemCount].quantity = quantity;
    inventory[itemCount].price = price;
    strcpy(inventory[itemCount].category, category);
    itemCount++;
}

void printInventory() {
    printf("Inventory List:\n");
    for (int i = 0; i < itemCount; i++) {
        printf("%d: %s, %d units, $%.2f each, Category: %s\n", i + 1, inventory[i].name, inventory[i].quantity, inventory[i].price, inventory[i].category);
        double totalValue = inventory[i].quantity * inventory[i].price;
        printf("Total value of %s: $%.2f\n", inventory[i].name, totalValue);
    }
}

void inventorySummary() {
    double totalInventoryValue = 0;
    int totalItems = 0;
    for (int i = 0; i < itemCount; i++) {
        totalItems += inventory[i].quantity;
        totalInventoryValue += inventory[i].quantity * inventory[i].price;
        // Duplicate code for printing summary
        printf("Total value of %s: $%.2f\n", inventory[i].name, inventory[i].quantity * inventory[i].price);
    }
    printf("Total number of items: %d\n", totalItems);
    printf("Total inventory value: $%.2f\n", totalInventoryValue);
}

int main() {
    addItem("Laptop", 10, 999.99, "Electronics");
    addItem("Smartphone", 20, 499.99, "Electronics");
    addItem("Coffee Maker", 15, 89.99, "Appliances");

    printInventory();
    inventorySummary();

    return 0;
}
```

## Esercizio 7
```c
#include <stdio.h>
#include <string.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

// Initialize employees with sample data
void initEmployees(struct Employee employees[]) {
	strcpy(employees[0].name, "John Doe"); employees[0].age = 30; employees[0].salary = 50000;
	 strcpy(employees[1].name, "Robert Clint"); employees[1].age = 34; employees[1].salary = 52000;
	 strcpy(employees[2].name, "Bob Smith"); employees[2].age = 28; employees[2].salary = 48000;
	 strcpy(employees[3].name, "George Smell"); employees[3].age = 47; employees[3].salary = 76000;
	 strcpy(employees[4].name, "Eva Roth"); employees[4].age = 25; employees[4].salary = 46000;
}

void printEmployees(struct Employee employees[]) {
    int i;
    for (i = 0; i < 5; i++) {
    if 
        printf("Name: %s, Age: %d, Salary: %.2f\n", employees[i].name, employees[i].age, employees[i].salary);
    }
}

int main() {
    struct Employee employees[5];
    initEmployees(employees);
    printEmployees(employees);

    printf("Total number of employees: %d\n", 5);

    float totalSalary = 0;
    for (int i = 0; i < 5; i++) {
        totalSalary += employees[i].salary;
    }
    printf("Total salary: %.2f\n", totalSalary);

    int employeeAgeGroup = 0;
    for (int i = 0; i < 5; i++) {
        if (employees[i].age < 30) {
            employeeAgeGroup = 1;
        } else if (employees[i].age >= 30 && employees[i].age <= 50) {
            employeeAgeGroup = 2;
        } else {
            employeeAgeGroup = 3;
        }

        switch (employeeAgeGroup) {
            case 1:
                printf("%s is in the young age group.\n", employees[i].name);
                break;
            case 2:
                printf("%s is in the middle age group.\n", employees[i].name);
                break;
            case 3:#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Prodotto {
  char nome[50];
  int quantita;
  float prezzo;
  char descrizione[200];
  int categoria;
} Prodotto;

void stampaProdotto(Prodotto prodotto) {
  printf("Nome: %s\n", prodotto.nome);
  printf("Quantità: %d\n", prodotto.quantita);
  printf("Prezzo: %.2f\n", prodotto.prezzo);
  printf("Descrizione: %s\n", prodotto.descrizione);
  switch (prodotto.categoria) {
    case 0: printf("Frutta\n"); break;
    case 1: printf("Verdura\n"); break;
    case 2: printf("Carne\n"); break;
    case 3: printf("Latticini\n"); break;
  }
}

void aggiungiProdotto(Prodotto** magazzino, int* nProdotti, Prodotto nuovoProdotto) {
  Prodotto* nuovoMagazzino = (Prodotto*)malloc((*nProdotti + 1) * sizeof(Prodotto));
  for (int i = 0; i < *nProdotti; i++) {
    nuovoMagazzino[i] = magazzino[i];
  }
  nuovoMagazzino[*nProdotti] = nuovoProdotto;
  (*nProdotti)++;
  free(magazzino);
  *magazzino = nuovoMagazzino;
}

void rimuoviProdotto(Prodotto** magazzino, int* nProdotti, char* nome) {
  int indiceProdotto = -1;
  for (int i = 0; i < *nProdotti; i++) {
    if (strcmp(magazzino[i].nome, nome) == 0) {
      indiceProdotto = i;
      break;
    }
  }
  if (indiceProdotto != -1) {
    for (int i = indiceProdotto; i < *nProdotti - 1; i++) {
      magazzino[i] = magazzino[i + 1];
    }
    (*nProdotti)--;
  }
}

void applicaSconto(Prodotto* prodotto, float sconto) {
  prodotto->prezzo *= (1 - sconto);
}

float calcolaValoreMagazzino(Prodotto* magazzino, int nProdotti) {
  float valoreTotale = 0;
  for (int i = 0; i < nProdotti; i++) {
    valoreTotale += magazzino[i].prezzo * magazzino[i].quantita;
  }
  return valoreTotale;
}

void stampaElencoProdotti(Prodotto* magazzino, int nProdotti) {
  for (int i = 0; i < nProdotti; i++) {
    stampaProdotto(magazzino[i]);
  }
}

// Funzione per ordinare l'elenco dei prodotti in ordine alfabetico
void ordinaElencoProdotti(Prodotto* magazzino, int nProdotti) {
  // ... algoritmo di ordinamento ...
}

// Funzione per applicare una promozione a un prodotto (sconto o aumento di prezzo)
void applicaPromozione(Prodotto* prodotto, float valore, int tipoPromozione) {
  if (tipoPromozione == 0) { // Sconto
    applicaSconto(prodotto, valore);
  } else if (tipoPromozione == 1) { // Aumento di prezzo
    prodotto->prezzo *= (1 + valore);
  }
}

int main() {
  // ... codice di esempio ...

  // Crea un nuovo prodotto
  Prodotto nuovoProdotto;
  strcpy(nuovoProdotto.nome, "Banana");
  nuovoProdotto.quantita = 10;
  nuovoProdotto.prezzo = 2.00;
  strcpy(nuovoProdotto.descrizione, "Banana gialla e matura");
  nuovoProdotto.categoria = 1;

  // Aggiungi il prodotto al magazzino
  Prodotto* magazzino = NULL;
  int nProdotti = 0;
  aggiungiProdotto(&magazzino, &nProdotti, nuovoProdotto);

  // ...

  // Stampa l'elenco dei prodotti
  stampaElenco
                printf("%s is in the senior age group.\n", employees[i].name);
                break;
        }
    }

    return 0;
}
```



## Esercizio 8
```c
#include <stdio.h>
#include <string.h>

#define MAX_ACCOUNTS 100

typedef struct {
    int accountId;
    char accountName[100];
    double balance;
    int status; // 1 for active, 2 for suspended, 3 for closed
} Account;

Account accounts[MAX_ACCOUNTS];
int numAccounts = 0;

void createAccount(int id, const char* name) {
    if (numAccounts >= MAX_ACCOUNTS) {
        printf("Maximum number of accounts reached.\n");
        return;
    }
    
    Account newAccount;
    newAccount.accountId = id;
    strncpy(newAccount.accountName, name, 99);
    newAccount.balance = 0.0;
    newAccount.status = 1; // Account status set to active
    accounts[numAccounts++] = newAccount;
}

void deposit(int accountId, double amount) {
    for (int i = 0; i < numAccounts; i++) {
        if (accounts[i].accountId == accountId) {
            if (accounts[i].status == 1) { // Check if account is active
                accounts[i].balance += amount;
                printf("Deposit of %f made to account %d.\n", amount, accountId);
            } else {
                printf("Account %d is not active.\n", accountId);
            }
            return;
        }
    }
    printf("Account %d not found.\n", accountId);
}

void withdraw(int accountId, double amount) {
    for (int i = 0; i < numAccounts; i++) {
        if (accounts[i].accountId == accountId) {
            if (accounts[i].status == 1) { // Check if account is active
                if (accounts[i].balance >= amount) {
                    accounts[i].balance -= amount;
                    printf("Withdrawal of %f from account %d.\n", amount, accountId);
                } else {
                    printf("Insufficient funds in account %d.\n", accountId);
                }
            } else {
                printf("Account %d is not active.\n", accountId);
            }
            return;
        }
    }
    printf("Account %d not found.\n", accountId);
}

void printAccountDetails(int accountId) {
    for (int i = 0; i < numAccounts; i++) {
        if (accounts[i].accountId == accountId) {
            printf("Account ID: %d\n", accounts[i].accountId);
            printf("Account Name: %s\n", accounts[i].accountName);
            printf("Balance: %f\n", accounts[i].balance);
            printf("Status: %d\n", accounts[i].status);
            return;
        }
    }
    printf("Account %d not found.\n", accountId);
}

int main() {
    createAccount(1, "John Doe");
    deposit(1, 100.0);
    withdraw(1, 50.0);
    printAccountDetails(1);
    return 0;
}
```
## Esercizio 9
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Prodotto {
  char nome[50];
  int quantita;
  float prezzo;
  char descrizione[200];
  int categoria;
} Prodotto;

void stampaProdotto(Prodotto prodotto) {
  printf("Nome: %s\n", prodotto.nome);
  printf("Quantità: %d\n", prodotto.quantita);
  printf("Prezzo: %.2f\n", prodotto.prezzo);
  printf("Descrizione: %s\n", prodotto.descrizione);
  switch (prodotto.categoria) {
    case 0: printf("Categoria: Frutta\n"); break;
    case 1: printf("Categoria: Verdura\n"); break;
    case 2: printf("Categoria: Carne\n"); break;
    case 3: printf("Categoria: Latticini\n"); break;
    default: printf("Categoria: Sconosciuta\n");
  }
}

void aggiungiProdotto(Prodotto** magazzino, int* nProdotti, Prodotto nuovoProdotto) {
  Prodotto* nuovoMagazzino = (Prodotto*)malloc((*nProdotti + 1) * sizeof(Prodotto));
  for (int i = 0; i < *nProdotti; i++) {
    nuovoMagazzino[i] = (*magazzino)[i];
  }
  nuovoMagazzino[*nProdotti] = nuovoProdotto;
  (*nProdotti)++;
  free(*magazzino);
  *magazzino = nuovoMagazzino;
}

void rimuoviProdotto(Prodotto** magazzino, int* nProdotti, char* nome) {
  int indiceProdotto = -1;
  for (int i = 0; i < *nProdotti; i++) {
    if (strcmp((*magazzino)[i].nome, nome) == 0) {
      indiceProdotto = i;
      break;
    }
  }
  if (indiceProdotto != -1) {
    for (int i = indiceProdotto; i < *nProdotti - 1; i++) {
      (*magazzino)[i] = (*magazzino)[i + 1];
    }
    (*nProdotti)--;
  }
}

void applicaSconto(Prodotto* prodotto, float sconto) {
  prodotto->prezzo *= (1 - sconto);
}

float calcolaValoreMagazzino(Prodotto* magazzino, int nProdotti) {
  float valoreTotale = 0;
  for (int i = 0; i < nProdotti; i++) {
    valoreTotale += magazzino[i].prezzo * magazzino[i].quantita;
  }
  return valoreTotale;
}

void stampaElencoProdotti(Prodotto* magazzino, int nProdotti) {
  for (int i = 0; i < nProdotti; i++) {
    stampaProdotto(magazzino[i]);
  }
}

void ordinaElencoProdotti(Prodotto* magazzino, int nProdotti) {
  int i, j;
  for (i = 0; i < nProdotti-1; i++) {     
    for (j = 0; j < nProdotti-i-1; j++) {
      if (strcmp(magazzino[j].nome, magazzino[j+1].nome) > 0) {
        // Scambio di prodotti
        Prodotto temp = magazzino[j];
        magazzino[j] = magazzino[j+1];
        magazzino[j+1] = temp;
      }
    }
  }
}

void applicaPromozione(Prodotto* prodotto, float valore, int tipoPromozione) {
  if (tipoPromozione == 0) {
    applicaSconto(prodotto, valore);
  } else if (tipoPromozione == 1) {
    prodotto->prezzo *= (1 + valore);
  }
}

int main() {
  Prodotto* magazzino = NULL;
  int nProdotti = 0;

  // Crea e aggiungi alcuni prodotti al magazzino
  Prodotto p1 = {"Mela", 50, 0.50, "Mela rossa", 0};
  aggiungiProdotto(&magazzino, &nProdotti, p1);

  Prodotto p2 = {"Pera", 30, 0.65, "Pera verde", 0};
  aggiungiProdotto(&magazzino, &nProdotti, p2);

  // Stampa prima dell'ordinamento
  printf("Elenco prodotti prima dell'ordinamento:\n");
  stampaElencoProdotti(magazzino, nProdotti);

  // Ordinamento dei prodotti
  ordinaElencoProdotti(magazzino, nProdotti);

  // Stampa dopo l'ordinamento
  printf("\nElenco prodotti dopo l'ordinamento:\n");
  stampaElencoProdotti(magazzino, nProdotti);

  // Pulizia della memoria
  free(magazzino);

  return 0;
}
```
