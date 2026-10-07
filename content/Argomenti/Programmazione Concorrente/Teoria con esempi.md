La programmazione concorrente in C ti permette di eseguire più operazioni contemporaneamente, utilizzando thread, che sono come "mini-processi" (processi leggeri) all'interno di un programma. La libreria `pthread` è comunemente usata per gestire i thread in C. Ecco una spiegazione semplice e un esempio pratico.
# Multithreading classico

### Passaggi base:

1. **Includere la libreria pthread**:
   ```c
   #include <pthread.h>
   ```

2. **Definire la funzione che verrà eseguita dai thread**:
   La funzione deve avere un prototipo specifico:
   ```c
   void *myThreadFunction(void *arg);
   ```

3. **Creare e avviare i thread**:
   Utilizza `pthread_create` per creare e avviare un thread:
   ```c
   pthread_t thread_id;
   pthread_create(&thread_id, NULL, myThreadFunction, (void *)arg);
   ```

4. **Attendere che i thread terminino**:
   Utilizza `pthread_join` per attendere che un thread finisca:
   ```c
   pthread_join(thread_id, NULL);
   ```

### Esempio pratico:

Questo esempio crea due thread che stampano un messaggio.

```c
#include <pthread.h>
#include <stdio.h>

// Funzione che verrà eseguita dai thread
void *printMessage(void *arg) {
    char *message = (char *)arg;
    printf("%s\n", message);
    return NULL;
}

int main() {
    pthread_t thread1, thread2;

    // Messaggi da passare ai thread
    char *message1 = "Hello from Thread 1";
    char *message2 = "Hello from Thread 2";

    // Creare i thread
    pthread_create(&thread1, NULL, printMessage, (void *)message1);
    pthread_create(&thread2, NULL, printMessage, (void *)message2);

    // Attendere la terminazione dei thread
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    return 0;
}
```

### Spiegazione:

1. **Inclusione della libreria**:
   ```c
   #include <pthread.h>
   ```

2. **Definizione della funzione**:
   ```c
   void *printMessage(void *arg) {
       char *message = (char *)arg;
       printf("%s\n", message);
       return NULL;
   }
   ```
   Questa funzione prende un argomento, lo converte in una stringa e lo stampa.

3. **Creazione dei thread**:
   ```c
   pthread_create(&thread1, NULL, printMessage, (void *)message1);
   pthread_create(&thread2, NULL, printMessage, (void *)message2);
   ```
   Qui vengono creati due thread, ciascuno con un messaggio diverso.

4. **Attendere la terminazione dei thread**:
   ```c
   pthread_join(thread1, NULL);
   pthread_join(thread2, NULL);
   ```
   Questa parte del codice assicura che il programma principale attenda la fine dei thread prima di terminare.

Questo è un esempio molto semplice per iniziare con la programmazione concorrente in C. Man mano che avanzi, potresti voler esplorare argomenti più complessi come la sincronizzazione dei thread, i mutex, le variabili condizionali e altro ancora.
Ottimo, continuiamo ad esplorare la programmazione concorrente in C, approfondendo concetti come la sincronizzazione dei thread utilizzando mutex (mutual exclusion) e variabili condizionali.

# Sincronizzazione dei Thread con Mutex

Un mutex è un meccanismo che assicura che solo un thread alla volta possa accedere a una risorsa condivisa. Vediamo un esempio in cui due thread incrementano una variabile condivisa.

#### Passaggi:

1. **Dichiarare e inizializzare un mutex**:
   ```c
   pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
   ```

2. **Bloccare e sbloccare il mutex all'interno della funzione del thread**:
   ```c
   pthread_mutex_lock(&mutex);
   // sezione critica
   pthread_mutex_unlock(&mutex);
   ```

### Esempio Pratico con Mutex

Questo esempio mostra come due thread incrementano una variabile condivisa proteggendo l'accesso con un mutex.

```c
#include <pthread.h>
#include <stdio.h>

int counter = 0; // Variabile condivisa
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; // Dichiarazione e inizializzazione del mutex

void *incrementCounter(void *arg) {
    for(int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&mutex); // Blocca il mutex
        counter++; // Sezione critica
        pthread_mutex_unlock(&mutex); // Sblocca il mutex
    }
    return NULL;
}

int main() {
    pthread_t thread1, thread2;

    // Creare i thread
    pthread_create(&thread1, NULL, incrementCounter, NULL);
    pthread_create(&thread2, NULL, incrementCounter, NULL);

    // Attendere la terminazione dei thread
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Final counter value: %d\n", counter);
    return 0;
}
```
Spieghiamo in dettaglio perché è necessario proteggere la sezione critica con un mutex.

### Sezione Critica

Una sezione critica è una parte del codice che accede a una risorsa condivisa che non deve essere modificata simultaneamente da più thread. Nel nostro caso, la risorsa condivisa è la variabile `counter`.

### Problema di Concorrenza

Quando più thread accedono e modificano una variabile condivisa senza una corretta sincronizzazione, si possono verificare problemi di concorrenza. Vediamo cosa può succedere senza l'uso di un mutex.

### Esempio senza Mutex

Consideriamo due thread che incrementano la variabile `counter`:

1. **Thread 1** legge il valore corrente di `counter` (supponiamo che sia 0).
2. **Thread 2** legge il valore corrente di `counter` (ancora 0).
3. **Thread 1** incrementa `counter` a 1 e scrive il valore.
4. **Thread 2** incrementa `counter` a 1 (ma il valore corretto dovrebbe essere 2).

In questo scenario, anche se due incrementi sono stati eseguiti, il valore finale di `counter` è solo 1, non 2. Questo comportamento è noto come **race condition**.

### Uso del Mutex per Proteggere la Sezione Critica

Per evitare le race condition, si utilizza un mutex. Un mutex (mutual exclusion) garantisce che solo un thread alla volta possa eseguire la sezione critica.

### Funzionamento del Mutex

1. **Bloccare il Mutex**:
   ```c
   pthread_mutex_lock(&mutex);
   ```
   - Prima di accedere alla variabile condivisa `counter`, un thread deve bloccare il mutex. Se un altro thread ha già bloccato il mutex, il thread corrente attende fino a quando il mutex non viene sbloccato.

2. **Sezione Critica**:
   ```c
   counter++;
   ```
   - La sezione critica è il codice che accede alla variabile condivisa. In questo caso, incrementa `counter`.

3. **Sbloccare il Mutex**:
   ```c
   pthread_mutex_unlock(&mutex);
   ```
   - Dopo aver completato l'operazione sulla variabile condivisa, il thread sblocca il mutex, permettendo ad altri thread di accedere alla sezione critica.

### Vantaggi dell'Uso del Mutex

1. **Sicurezza dei Dati**: Assicura che la variabile `counter` venga aggiornata correttamente da ogni thread.
2. **Evita Race Condition**: Previene l'accesso simultaneo alla variabile condivisa, eliminando le race condition.
3. **Integrità dei Dati**: Mantiene l'integrità della variabile `counter`, garantendo che il valore finale sia corretto.

# Variabili Condizionali

Le variabili condizionali sono usate per sincronizzare i thread basandosi su alcune condizioni. Un thread può aspettare che una condizione sia vera, e un altro thread può segnalare il cambiamento di quella condizione.

#### Passaggi:

1. **Dichiarare e inizializzare una variabile condizionale e un mutex**:
   ```c
   pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
   pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
   ```

2. **Utilizzare `pthread_cond_wait` e `pthread_cond_signal`**:
   ```c
   pthread_cond_wait(&cond, &mutex);
   pthread_cond_signal(&cond);
   ```

### Esempio Pratico con Variabili Condizionali

Questo esempio mostra come un produttore e un consumatore possono sincronizzarsi utilizzando una variabile condizionale.

```c
#include <pthread.h>
#include <stdio.h>
#include <stdbool.h>

int buffer = 0;
bool bufferFull = false;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;

void *producer(void *arg) {
    for (int i = 1; i <= 10; i++) {
        pthread_mutex_lock(&mutex);
        while (bufferFull) {
            pthread_cond_wait(&cond, &mutex);
        }
        buffer = i; // Produci un elemento
        bufferFull = true;
        printf("Produced: %d\n", buffer);
        pthread_cond_signal(&cond);
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}

void *consumer(void *arg) {
    for (int i = 1; i <= 10; i++) {
        pthread_mutex_lock(&mutex);
        while (!bufferFull) {
            pthread_cond_wait(&cond, &mutex);
        }
        printf("Consumed: %d\n", buffer); // Consuma un elemento
        bufferFull = false;
        pthread_cond_signal(&cond);
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}

int main() {
    pthread_t producerThread, consumerThread;

    // Creare i thread
    pthread_create(&producerThread, NULL, producer, NULL);
    pthread_create(&consumerThread, NULL, consumer, NULL);

    // Attendere la terminazione dei thread
    pthread_join(producerThread, NULL);
    pthread_join(consumerThread, NULL);

    return 0;
}
```

### Spiegazione

1. **Inizializzazione**:
   ```c
   pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
   pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
   ```
   Dichiarazione e inizializzazione di mutex e variabile condizionale.

2. **Funzioni del produttore e del consumatore**:
   - **Produttore**:
     ```c
     while (bufferFull) {
         pthread_cond_wait(&cond, &mutex);
     }
     buffer = i;
     bufferFull = true;
     pthread_cond_signal(&cond);
     ```
     Il produttore attende finché il buffer non è vuoto, poi produce un elemento e segnala al consumatore.

   - **Consumatore**:
     ```c
     while (!bufferFull) {
         pthread_cond_wait(&cond, &mutex);
     }
     printf("Consumed: %d\n", buffer);
     bufferFull = false;
     pthread_cond_signal(&cond);
     ```
     Il consumatore attende finché il buffer non è pieno, poi consuma l'elemento e segnala al produttore.

Questi esempi illustrano i concetti fondamentali della programmazione concorrente in C usando `pthread`. Con la pratica, potrai gestire problemi più complessi e scenari di concorrenza avanzati.

# Semafori binari

I semafori sono strumenti di sincronizzazione che possono essere utilizzati per controllare l'accesso a una risorsa condivisa. I semafori possono essere utilizzati per risolvere problemi di sincronizzazione come il problema dei produttori-consumatori, controllo del numero di risorse disponibili e altro ancora.

#### Passaggi:

1. **Includere la libreria semaphore.h**:
   ```c
   #include <semaphore.h>
   ```

2. **Dichiarare e inizializzare un semaforo**:
   ```c
   sem_t sem;
   sem_init(&sem, 0, 1); // 1 per semaforo binario, >1 per semaforo contatore
   ```

3. **Usare il semaforo per sincronizzare l'accesso alle risorse**:
   ```c
   sem_wait(&sem); // Blocca o decrementa il semaforo
   // sezione critica
   sem_post(&sem); // Sblocca o incrementa il semaforo
   ```

### Esempio Pratico con Semaforo

Questo esempio mostra come due thread possono sincronizzarsi utilizzando un semaforo per evitare condizioni di gara (race condition).

```c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>

int counter = 0; // Variabile condivisa
sem_t sem; // Dichiarazione del semaforo

void *incrementCounter(void *arg) {
    for(int i = 0; i < 100000; i++) {
        sem_wait(&sem); // Blocca il semaforo
        counter++; // Sezione critica
        sem_post(&sem); // Sblocca il semaforo
    }
    return NULL;
}

int main() {
    pthread_t thread1, thread2;

    // Inizializzare il semaforo
    sem_init(&sem, 0, 1); // 1 indica un semaforo binario

    // Creare i thread
    pthread_create(&thread1, NULL, incrementCounter, NULL);
    pthread_create(&thread2, NULL, incrementCounter, NULL);

    // Attendere la terminazione dei thread
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Final counter value: %d\n", counter);

    // Distruggere il semaforo
    sem_destroy(&sem);

    return 0;
}
```

# Semaforo di Dijkstra con Contatore Interno

Un semaforo di conteggio può essere utilizzato per controllare l'accesso a una risorsa limitata, come un pool di connessioni o una serie di thread di lavoro. A differenza del semaforo binario, qui non ho una risorsa "occupata" o "libera", ma ho un numero di risorse limitato maggiore di uno. Ogni richiesta di wait del semaforo decrementerà il numero di risorse disponibili e viceversa quando viene rilasciato.

### Esempio: Gestione di un Pool di Risorse
In questo esempio, gestiremo un pool di risorse limitate utilizzando un semaforo di conteggio. Avremo un certo numero di risorse disponibili e più thread che cercheranno di acquisire una risorsa, utilizzarla, e poi rilasciarla.

#### Codice di Implementazione

```c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define NUM_RESOURCES 3
#define NUM_THREADS 10

sem_t semaphore;  // Semaforo di conteggio

void *threadFunction(void *arg) {
    int thread_id = *((int *)arg);

    // Acquisire una risorsa
    sem_wait(&semaphore);
    printf("Thread %d: Acquired a resource\n", thread_id);

    // Simulare l'utilizzo della risorsa
    sleep(rand() % 3 + 1);

    // Rilasciare la risorsa
    printf("Thread %d: Releasing the resource\n", thread_id);
    sem_post(&semaphore);

    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];

    // Inizializzare il semaforo con il numero di risorse disponibili
    sem_init(&semaphore, 0, NUM_RESOURCES);

    // Creare i thread
    for (int i = 0; i < NUM_THREADS; i++) {
        thread_ids[i] = i;
        pthread_create(&threads[i], NULL, threadFunction, &thread_ids[i]);
    }

    // Attendere la terminazione dei thread
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    // Distruggere il semaforo
    sem_destroy(&semaphore);

    return 0;
}
```

### Spiegazione

1. **Inizializzazione del Semaforo**:
   ```c
   sem_init(&semaphore, 0, NUM_RESOURCES);
   ```
   Inizializza il semaforo con il numero di risorse disponibili. Il secondo parametro è `0`, indicando che il semaforo è condiviso tra i thread del processo.

2. **Acquisizione della Risorsa**:
   ```c
   sem_wait(&semaphore);
   ```
   Quando un thread chiama `sem_wait`, il semaforo viene decrementato. Se il valore del semaforo è maggiore di `0`, il thread procede. Altrimenti, il thread viene bloccato finché il valore del semaforo non è maggiore di `0`.

3. **Utilizzo della Risorsa**:
   ```c
   printf("Thread %d: Acquired a resource\n", thread_id);
   sleep(rand() % 3 + 1);
   ```
   Il thread simula l'utilizzo della risorsa dormendo per un intervallo di tempo casuale.

4. **Rilascio della Risorsa**:
   ```c
   sem_post(&semaphore);
   ```
   Quando un thread ha terminato di utilizzare la risorsa, chiama `sem_post`, che incrementa il valore del semaforo. Se ci sono thread in attesa, uno di essi viene sbloccato.

5. **Creazione e Unione dei Thread**:
   ```c
   for (int i = 0; i < NUM_THREADS; i++) {
       thread_ids[i] = i;
       pthread_create(&threads[i], NULL, threadFunction, &thread_ids[i]);
   }
   for (int i = 0; i < NUM_THREADS; i++) {
       pthread_join(threads[i], NULL);
   }
   ```
   Il programma crea e unisce 10 thread, ciascuno dei quali cercherà di acquisire una risorsa dal semaforo.

Questo esempio mostra come utilizzare un semaforo di conteggio per gestire l'accesso concorrente a un pool limitato di risorse, garantendo che non più di un certo numero di thread possano utilizzare le risorse simultaneamente.
# Barriere

Le barriere sono un meccanismo di sincronizzazione che forza un gruppo di thread a fermarsi a un certo punto (barriera) e aspettare fino a quando tutti i thread del gruppo hanno raggiunto quella barriera. Solo allora, tutti i thread possono continuare.

#### Passaggi:

1. **Includere la libreria pthread**:
   ```c
   #include <pthread.h>
   ```

2. **Dichiarare e inizializzare una barriera**:
   ```c
   pthread_barrier_t barrier;
   pthread_barrier_init(&barrier, NULL, NUM_THREADS); // NUM_THREADS è il numero di thread che devono sincronizzarsi
   ```

3. **Usare la barriera per sincronizzare i thread**:
   ```c
   pthread_barrier_wait(&barrier);
   ```

### Esempio Pratico con Barriera

Questo esempio mostra come i thread possono usare una barriera per sincronizzarsi in determinati punti del codice.

```c
#include <pthread.h>
#include <stdio.h>

#define NUM_THREADS 3

pthread_barrier_t barrier; // Dichiarazione della barriera

void *threadFunction(void *arg) {
    int thread_id = *((int *)arg);
    printf("Thread %d raggiunge la barriera\n", thread_id);
    pthread_barrier_wait(&barrier); // Punto di sincronizzazione
    printf("Thread %d oltrepassa la barriera\n", thread_id);
    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];

    // Inizializzare la barriera
    pthread_barrier_init(&barrier, NULL, NUM_THREADS);

    // Creare i thread
    for (int i = 0; i < NUM_THREADS; i++) {
        thread_ids[i] = i;
        pthread_create(&threads[i], NULL, threadFunction, &thread_ids[i]);
    }

    // Attendere la terminazione dei thread
    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    // Distruggere la barriera
    pthread_barrier_destroy(&barrier);

    return 0;
}
```

### Spiegazione

1. **Inizializzazione**:
   ```c
   pthread_barrier_init(&barrier, NULL, NUM_THREADS);
   ```
   La barriera è inizializzata con il numero di thread che devono sincronizzarsi.

2. **Funzione del thread**:
   ```c
   pthread_barrier_wait(&barrier);
   ```
   Ogni thread esegue `pthread_barrier_wait` per aspettare che tutti i thread raggiungano questo punto.

3. **Creazione dei thread**:
   ```c
   for (int i = 0; i < NUM_THREADS; i++) {
       pthread_create(&threads[i], NULL, threadFunction, &thread_ids[i]);
   }
   ```

4. **Attesa della terminazione dei thread**:
   ```c
   for (int i = 0; i < NUM_THREADS; i++) {
       pthread_join(threads[i], NULL);
   }
   ```

5. **Distruzione della barriera**:
   ```c
   pthread_barrier_destroy(&barrier);
   ```

Ora conosci strumenti avanzati per la programmazione concorrente in C, come semafori e barriere, che ti permetteranno di gestire scenari di concorrenza ancora più complessi. Se hai altre domande o desideri ulteriori esempi, fammi sapere!

Hai ragione, l'esempio del semaforo che ho fornito è molto simile a quello del mutex, e può sembrare che i due meccanismi siano intercambiabili in questo caso. Tuttavia, i semafori e i mutex servono a scopi leggermente diversi. Per chiarire meglio, vediamo un esempio in cui l'uso di un semaforo è più appropriato rispetto a un mutex: il problema dei produttori e consumatori.

# Problema dei Produttori e Consumatori

In questo problema, i produttori producono elementi e li inseriscono in un buffer condiviso, mentre i consumatori prelevano elementi da questo buffer. Il buffer ha una capacità limitata, quindi è necessario sincronizzare l'accesso per evitare che i produttori inseriscano elementi in un buffer pieno e che i consumatori prelevino elementi da un buffer vuoto.

Utilizzeremo due semafori:
- **`empty`**: per contare il numero di spazi vuoti nel buffer.
- **`full`**: per contare il numero di elementi presenti nel buffer.

E un mutex per garantire l'accesso esclusivo al buffer.

#### Esempio Pratico

```c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define BUFFER_SIZE 5
#define NUM_ITEMS 10

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty;
sem_t full;
pthread_mutex_t mutex;

void *producer(void *arg) {
    for (int i = 0; i < NUM_ITEMS; i++) {
        int item = rand() % 100; // Produce un elemento
        sem_wait(&empty); // Attende uno spazio vuoto
        pthread_mutex_lock(&mutex); // Blocca l'accesso al buffer

        buffer[in] = item;
        printf("Produced: %d\n", item);
        in = (in + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex); // Sblocca l'accesso al buffer
        sem_post(&full); // Incrementa il numero di elementi pieni

        sleep(1); // Simula il tempo di produzione
    }
    return NULL;
}

void *consumer(void *arg) {
    for (int i = 0; i < NUM_ITEMS; i++) {
        sem_wait(&full); // Attende un elemento pieno
        pthread_mutex_lock(&mutex); // Blocca l'accesso al buffer

        int item = buffer[out];
        printf("Consumed: %d\n", item);
        out = (out + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex); // Sblocca l'accesso al buffer
        sem_post(&empty); // Incrementa il numero di spazi vuoti

        sleep(1); // Simula il tempo di consumo
    }
    return NULL;
}

int main() {
    pthread_t producerThread, consumerThread;

    // Inizializzare i semafori e il mutex
    sem_init(&empty, 0, BUFFER_SIZE);
    sem_init(&full, 0, 0);
    pthread_mutex_init(&mutex, NULL);

    // Creare i thread
    pthread_create(&producerThread, NULL, producer, NULL);
    pthread_create(&consumerThread, NULL, consumer, NULL);

    // Attendere la terminazione dei thread
    pthread_join(producerThread, NULL);
    pthread_join(consumerThread, NULL);

    // Distruggere i semafori e il mutex
    sem_destroy(&empty);
    sem_destroy(&full);
    pthread_mutex_destroy(&mutex);

    return 0;
}
```

### Spiegazione

1. **Inizializzazione**:
   ```c
   sem_init(&empty, 0, BUFFER_SIZE);
   sem_init(&full, 0, 0);
   pthread_mutex_init(&mutex, NULL);
   ```
   - `empty`: Inizializzato con il valore `BUFFER_SIZE`, indicando che inizialmente tutti gli spazi nel buffer sono vuoti.
   - `full`: Inizializzato con il valore `0`, indicando che inizialmente non ci sono elementi nel buffer.

2. **Produttore**:
   ```c
   sem_wait(&empty); // Attende uno spazio vuoto
   pthread_mutex_lock(&mutex); // Blocca l'accesso al buffer
   buffer[in] = item; // Inserisce l'elemento nel buffer
   in = (in + 1) % BUFFER_SIZE;
   pthread_mutex_unlock(&mutex); // Sblocca l'accesso al buffer
   sem_post(&full); // Incrementa il numero di elementi pieni
   ```
   Il produttore attende che ci sia spazio nel buffer (`sem_wait(&empty)`), poi inserisce un elemento nel buffer in modo sicuro (usando `pthread_mutex_lock` e `pthread_mutex_unlock`) e infine segnala che c'è un nuovo elemento nel buffer (`sem_post(&full)`).

3. **Consumatore**:
   ```c
   sem_wait(&full); // Attende un elemento pieno
   pthread_mutex_lock(&mutex); // Blocca l'accesso al buffer
   int item = buffer[out]; // Preleva l'elemento dal buffer
   out = (out + 1) % BUFFER_SIZE;
   pthread_mutex_unlock(&mutex); // Sblocca l'accesso al buffer
   sem_post(&empty); // Incrementa il numero di spazi vuoti
   ```
   Il consumatore attende che ci sia un elemento nel buffer (`sem_wait(&full)`), poi preleva un elemento dal buffer in modo sicuro (usando `pthread_mutex_lock` e `pthread_mutex_unlock`) e infine segnala che c'è uno spazio vuoto nel buffer (`sem_post(&empty)`).

In questo esempio, l'uso dei semafori è fondamentale per coordinare la produzione e il consumo degli elementi, evitando condizioni di gara e garantendo che il buffer non sia mai sovraccarico o vuoto.

### Riepilogo

1. **Thread con pthread**:
   - Creare thread: `pthread_create`
   - Sincronizzare thread: `pthread_join`
   - Mutex per accesso esclusivo: `pthread_mutex_lock` e `pthread_mutex_unlock`
   - Barriere per sincronizzazione: `pthread_barrier_wait`

2. **Semafori con semaphore.h**:
   - Inizializzare semaforo: `sem_init`
   - Bloccare/decrementare semaforo: `sem_wait`
   - Sbloccare/incrementare semaforo: `sem_post`
   - Distruggere semaforo: `sem_destroy`

3. **Produttori e consumatori**:
   - Usare semafori per gestire il buffer condiviso
   - Mutex per accesso esclusivo al buffer

# Deadlock

Il deadlock si verifica quando due o più thread sono bloccati in attesa di risorse che non verranno mai liberate. È importante progettare il codice in modo da evitare deadlock.

**Esempio di deadlock**:

```c
#include <pthread.h>
#include <stdio.h>

pthread_mutex_t lock1 = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t lock2 = PTHREAD_MUTEX_INITIALIZER;

void *thread1_func(void *arg) {
    pthread_mutex_lock(&lock1);
    sleep(1); // Simula un lavoro che impiega tempo
    pthread_mutex_lock(&lock2);

    printf("Thread 1 ha acquisito lock1 e lock2\n");

    pthread_mutex_unlock(&lock2);
    pthread_mutex_unlock(&lock1);
    return NULL;
}

void *thread2_func(void *arg) {
    pthread_mutex_lock(&lock2);
    sleep(1); // Simula un lavoro che impiega tempo
    pthread_mutex_lock(&lock1);

    printf("Thread 2 ha acquisito lock2 e lock1\n");

    pthread_mutex_unlock(&lock1);
    pthread_mutex_unlock(&lock2);
    return NULL;
}

int main() {
    pthread_t thread1, thread2;

    pthread_create(&thread1, NULL, thread1_func, NULL);
    pthread_create(&thread2, NULL, thread2_func, NULL);

    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    return 0;
}
```

Questo codice può causare un deadlock perché `thread1` acquisisce `lock1` e poi attende `lock2`, mentre `thread2` acquisisce `lock2` e poi attende `lock1`. Entrambi i thread rimangono bloccati.

**Prevenzione del deadlock**:
- **Ordine consistente di acquisizione dei lock**: Assicurati che tutti i thread acquisiscano i lock nello stesso ordine.
- **Timeout e retry**: Usa meccanismi di timeout per evitare attese infinite.

# Modelli di Programmazione Concorrenziale

1. **Map-Reduce**:
   - Suddividi il problema in parti più piccole (Map) e poi combina i risultati (Reduce).
   - Utilizzato ampiamente nel processing di grandi dataset.

2. **Pipeline**:
   - Diverse fasi di processamento organizzate in una catena.
   - Ogni fase è eseguita da un thread o gruppo di thread separato.

#### Esempio di Pipeline

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

#define NUM_STAGES 3
#define NUM_ITEMS 10

int buffer[NUM_STAGES][NUM_ITEMS];
int count[NUM_STAGES] = {0};

pthread_mutex_t mutex[NUM_STAGES];
pthread_cond_t cond[NUM_STAGES];

void *stage(void *arg) {
    int stage_id = *(int *)arg;

    for (int i = 0; i < NUM_ITEMS; i++) {
        if (stage_id > 0) {
            pthread_mutex_lock(&mutex[stage_id - 1]);
            while (count[stage_id - 1] == 0) {
                pthread_cond_wait(&cond[stage_id - 1], &mutex[stage_id - 1]);
            }
            int item = buffer[stage_id - 1][--count[stage_id - 1]];
            pthread_mutex_unlock(&mutex[stage_id - 1]);
            pthread_cond_signal(&cond[stage_id - 1]);

            buffer[stage_id][count[stage_id]++] = item * 2; // Processamento
        } else {
            buffer[stage_id][count[stage_id]++] = i + 1; // Produzione
        }

        pthread_mutex_lock(&mutex[stage_id]);
        pthread_cond_signal(&cond[stage_id]);
        pthread_mutex_unlock(&mutex[stage_id]);
    }

    return NULL;
}

int main() {
    pthread_t threads[NUM_STAGES];
    int stage_ids[NUM_STAGES];

    for (int i = 0; i < NUM_STAGES; i++) {
        pthread_mutex_init(&mutex[i], NULL);
        pthread_cond_init(&cond[i], NULL);
        stage_ids[i] = i;
    }

    for (int i = 0; i < NUM_STAGES; i++) {
        pthread_create(&threads[i], NULL, stage, &stage_ids[i]);
    }

    for (int i = 0; i < NUM_STAGES; i++) {
        pthread_join(threads[i], NULL);
    }

    for (int i = 0; i < NUM_STAGES; i++) {
        pthread_mutex_destroy(&mutex[i]);
        pthread_cond_destroy(&cond[i]);
    }

    for (int i = 0; i < NUM_ITEMS; i++) {
        printf("Final item %d: %d\n", i, buffer[NUM_STAGES - 1][i]);
    }

    return 0;
}
```

### Spiegazione

1. **Inizializzazione**:
   - Mutex e condition variable per ogni stage della pipeline.
   - Buffer per ogni stage.

2. **Funzione del thread**:
   - Ogni stage processa gli elementi dal buffer precedente e li inserisce nel proprio buffer.

3. **Sincronizzazione**:
   - Usare mutex e condition variable per sincronizzare l'accesso al buffer.

# Riepilogo
### Riepilogo: Programmazione Concorrente in C

La programmazione concorrente in C è essenziale per creare applicazioni efficienti che possono eseguire più operazioni contemporaneamente. Abbiamo esplorato vari concetti e meccanismi per gestire la concorrenza utilizzando thread, mutex, semafori, barriere e buffer circolari. Ecco un riepilogo di quanto appreso:

### 1. Thread di Base

**Creazione e Gestione dei Thread**:
- **Creare un thread**: `pthread_create(&thread, NULL, funzione, argomento);`
- **Attendere che un thread termini**: `pthread_join(thread, NULL);`

### 2. Mutex

**Protezione delle Risorse Condivise**:
- **Dichiarare e inizializzare un mutex**: `pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;`
- **Bloccare e sbloccare un mutex**:
  ```c
  pthread_mutex_lock(&mutex);
  // sezione critica
  pthread_mutex_unlock(&mutex);
  ```

### 3. Semafori

**Controllo dell'Accesso alle Risorse**:
- **Includere la libreria**: `#include <semaphore.h>`
- **Dichiarare e inizializzare un semaforo**:
  ```c
  sem_t semaphore;
  sem_init(&semaphore, 0, valore_iniziale);
  ```
- **Decrementare e incrementare un semaforo**:
  ```c
  sem_wait(&semaphore); // Decrementa il semaforo, attende se il valore è 0
  sem_post(&semaphore); // Incrementa il semaforo
  ```
- **Esempio di utilizzo del semaforo di Dijkstra per gestire un pool di risorse**:
  - `sem_wait(&semaphore)` per acquisire una risorsa.
  - `sem_post(&semaphore)` per rilasciare una risorsa.

### 4. Barriere

**Sincronizzazione di Gruppi di Thread**:
- **Dichiarare e inizializzare una barriera**:
  ```c
  pthread_barrier_t barrier;
  pthread_barrier_init(&barrier, NULL, NUM_THREADS);
  ```
- **Sincronizzare i thread**:
  ```c
  pthread_barrier_wait(&barrier);
  ```

### 5. Buffer Circolare

**Gestione di Produttori e Consumatori**:
- **Dichiarare un buffer circolare**:
  ```c
  int buffer[BUFFER_SIZE];
  int in = 0, out = 0;
  ```
- **Produttore**:
  - Attende uno spazio vuoto: `sem_wait(&empty);`
  - Blocca il mutex: `pthread_mutex_lock(&mutex);`
  - Inserisce l'elemento: `buffer[in] = item; in = (in + 1) % BUFFER_SIZE;`
  - Sblocca il mutex: `pthread_mutex_unlock(&mutex);`
  - Incrementa il semaforo degli elementi pieni: `sem_post(&full);`
- **Consumatore**:
  - Attende un elemento pieno: `sem_wait(&full);`
  - Blocca il mutex: `pthread_mutex_lock(&mutex);`
  - Preleva l'elemento: `item = buffer[out]; out = (out + 1) % BUFFER_SIZE;`
  - Sblocca il mutex: `pthread_mutex_unlock(&mutex);`
  - Incrementa il semaforo degli spazi vuoti: `sem_post(&empty);`

### 6. Prevenzione del Deadlock

**Evitare Situazioni di Deadlock**:
- **Ordine consistente di acquisizione dei lock**: Assicurati che tutti i thread acquisiscano i lock nello stesso ordine.
- **Timeout e retry**: Usa meccanismi di timeout per evitare attese infinite.

### 7. Esercizi Pratici

**Esercizi di Difficoltà Crescente**:
1. **Thread di base**: Creare e gestire thread semplici.
2. **Somma parallela**: Calcolare la somma di un array usando thread.
3. **Buffer Circolare con Produttori e Consumatori**: Sincronizzare l'accesso al buffer.
4. **Sincronizzazione con Barriere**: Utilizzare barriere per sincronizzare più thread.
5. **Deadlock e Prevenzione**: Comprendere e prevenire il deadlock.
6. **Lettori e Scrittori**: Implementare l'accesso concorrente a un sistema di file.
7. **Pipeline di Thread**: Simulare una catena di montaggio con thread.