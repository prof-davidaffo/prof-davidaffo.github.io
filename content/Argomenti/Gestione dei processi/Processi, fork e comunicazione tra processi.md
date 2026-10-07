## 1. Programma e processo

Un **programma** e' un file eseguibile salvato sul disco, cioe' un insieme di istruzioni.

Un **processo** e' un programma in esecuzione. Quando un programma viene avviato, il sistema operativo crea un processo e gli assegna risorse come:

- uno spazio di memoria;
- un identificativo numerico chiamato PID;
- informazioni sullo stato del processo;
- file aperti;
- informazioni per la schedulazione.

Il sistema operativo mantiene queste informazioni in una struttura chiamata **PCB**, cioe' *Process Control Block*.

## 2. PID e PPID

Ogni processo ha:

- un **PID**, cioe' Process ID;
- un **PPID**, cioe' Parent Process ID, il PID del processo padre.

In C/C++ su sistemi Unix/Linux si possono ottenere con:

```cpp
getpid();   // restituisce il PID del processo corrente
getppid();  // restituisce il PID del processo padre
```

## 3. Stati di un processo

Un processo puo' trovarsi in diversi stati:

- **ready**: pronto per essere eseguito;
- **running**: in esecuzione sulla CPU;
- **waiting / blocked**: in attesa di un evento, per esempio input/output;
- **sleep**: sospeso per un certo tempo;
- **dead / terminated**: terminato.

Il passaggio da uno stato all'altro e' gestito dal sistema operativo.

## 4. Osservare i processi da terminale

Prima di scrivere programmi che creano processi, e' utile vedere come Linux mostra i processi gia' in esecuzione.

Il comando principale e':

```bash
ps
```

`ps` mostra un elenco dei processi attivi nel terminale corrente. Per vedere piu' informazioni si possono usare opzioni come:

```bash
ps -f
```

oppure:

```bash
ps aux
```

per ottenere il nome del processo:

```sh
ps -p 1234 -o comm=
```

Tra le informazioni piu' importanti ci sono:

- **PID**: identificativo del processo;
- **PPID**: identificativo del processo padre;
- **STAT**: stato del processo;
- **COMMAND**: comando o programma eseguito.

Per monitorare i processi in tempo reale si usa:

```bash
top
```

oppure, se installato:

```bash
htop
```

Questi strumenti permettono di vedere quali processi sono attivi e quante risorse stanno usando.

Per cercare un processo per nome si possono usare:

```bash
pgrep nome_processo
```

oppure:

```bash
pidof nome_programma
```

`pgrep` e `pidof` restituiscono PID associati a processi che corrispondono al nome indicato.

Attenzione: `fork()` non e' un comando da scrivere direttamente nel terminale. `fork()` e' una funzione di sistema che si usa dentro un programma C/C++.

Quindi il flusso corretto e':

1. scrivere un programma C/C++ che usa `fork()`;
2. compilarlo;
3. eseguirlo;
4. osservare i processi generati con `ps` o `top`.

## 5. La fork

La funzione `fork()` crea un nuovo processo quasi identico a quello che la chiama.

Il processo che chiama `fork()` viene chiamato **padre**. Il nuovo processo creato viene chiamato **figlio**.

La cosa importante e' capire che il figlio nasce come copia del padre nel punto esatto in cui viene eseguita la `fork()`.

Questo significa che dopo questa istruzione:

```cpp
pid_t childPid = fork();
```

il programma non continua piu' con un solo processo, ma con due processi:

- il **processo padre**, cioe' quello che esisteva gia';
- il **processo figlio**, cioe' quello appena creato.

Entrambi continuano a eseguire il codice dalla riga successiva alla `fork()`.

Padre e figlio hanno:

- lo stesso codice del programma;
- una copia delle stesse variabili;
- lo stesso punto di ripartenza, cioe' subito dopo la `fork()`;
- PID diversi, perche' sono due processi distinti.

## 6. Il valore di ritorno di fork

Anche se padre e figlio continuano dallo stesso punto del programma, devono avere un modo per distinguersi.

Questo modo e' il **valore di ritorno** della funzione `fork()`.

Quando si scrive:

```cpp
pid_t childPid = fork();
```

`childPid` e' una variabile in cui viene salvato il valore restituito dalla funzione `fork()`. Il nome ricorda che, nel processo padre, questo valore e' il PID del figlio.

La particolarita' e' che `fork()` restituisce due valori diversi, uno nel padre e uno nel figlio:

- nel **figlio**, il valore di ritorno di `fork()` e' `0`;
- nel **padre**, il valore di ritorno di `fork()` e' il PID del processo figlio appena creato;
- se c'e' un errore, il valore di ritorno di `fork()` e' un numero negativo.

Quindi, nel processo padre, la variabile `childPid` contiene il PID del figlio. 

Il PID reale del padre rimane quello restituito da:

```cpp
getpid();
```

Per questo si usa spesso una struttura `if / else`:

```cpp
pid_t childPid = fork();

if (childPid < 0) {
    // errore: la fork non e' riuscita
} else if (childPid == 0) {
    // codice eseguito dal processo figlio
} else {
    // codice eseguito dal processo padre
    // nel padre, la variabile childPid contiene il valore di ritorno di fork()
    // cioe' il PID del figlio
}
```

L'`if / else` non crea il processo figlio. Il processo figlio e' gia' stato creato dalla `fork()`.

L'`if / else` serve solo a far eseguire codice diverso ai due processi.

In pratica succede questo:

```text
Prima della fork:

    esiste un solo processo

Dopo la fork:

    processo padre                      processo figlio
    valore in childPid: PID figlio     valore in childPid: 0
    esegue il ramo else                 esegue il ramo childPid == 0
```

Esempio completo:

```cpp
#include <iostream>
#include <unistd.h>
using namespace std;

int main() {
    cout << "Prima della fork, PID: " << getpid() << endl;

    pid_t childPid = fork();

    if (childPid == 0) {
        cout << "Sono il figlio, PID: " << getpid()
             << ", PPID: " << getppid() << endl;
    } else {
        cout << "Sono il padre, PID: " << getpid()
             << ", PID figlio: " << childPid << endl;
    }

    cout << "Questa riga viene eseguita da chi arriva qui, PID: "
         << getpid() << endl;

    return 0;
}
```

La riga dopo l'`if / else` puo' essere eseguita sia dal padre sia dal figlio, perche' entrambi continuano il programma.

## 7. Esecuzione concorrente

Dopo la `fork()`, padre e figlio procedono in modo concorrente.

Questo significa che non si puo' sapere con certezza quale dei due stampera' prima, a meno di usare strumenti di sincronizzazione come `wait()`.

Esempio:

```text
Padre, ciclo 0
Figlio, ciclo 0
Figlio, ciclo 1
Padre, ciclo 1
```

Un'esecuzione successiva potrebbe produrre un ordine diverso.

## 8. Pause brevi

Per rallentare leggermente l'esecuzione e rendere piu' visibile l'alternanza tra padre e figlio si puo' inserire una breve pausa.

Una possibilita' e' usare `usleep()`, che sospende il processo per un certo numero di microsecondi.

```cpp
usleep(50000);
```

`50000` microsecondi corrispondono a 50 millisecondi.

Si possono usare anche altre funzioni di pausa, per esempio `sleep()` se bastano intervalli in secondi. La pausa serve solo a osservare meglio l'esecuzione concorrente: non deve essere usata per sincronizzare padre e figlio.

## 9. Memoria dopo fork

Quando viene eseguita una `fork()`, il figlio riceve una copia dello spazio di memoria del padre.

Questo e' un punto fondamentale:

> padre e figlio non condividono automaticamente le variabili.

Se prima della `fork()` esiste un array:

```cpp
int numbers[3] = {1, 2, 3};
```

dopo la `fork()` padre e figlio hanno ciascuno la propria copia dell'array.

Se il figlio modifica l'array:

```cpp
numbers[0] += 10;
```

il padre non vede quella modifica, perche' il padre sta leggendo la propria copia.

Attenzione: dire che il figlio e' una copia del padre non significa che padre e figlio condividano automaticamente le stesse variabili.

All'inizio i valori sono uguali, ma poi ogni processo lavora sulla propria memoria.

### Indirizzi virtuali e indirizzi fisici

Un aspetto che puo' creare confusione riguarda gli indirizzi delle variabili.

Esempio:

```cpp
int a = 8;

pid_t childPid = fork();

cout << &a << ": " << a << endl;
```

Dopo la `fork()`, padre e figlio potrebbero stampare lo stesso valore di `&a`.

Per esempio:

```text
0x7ffc1234abcd: 8
0x7ffc1234abcd: 16
```

Questo non significa che padre e figlio stiano usando la stessa variabile fisica in memoria.

L'indirizzo stampato da `&a` e' un **indirizzo virtuale**, cioe' un indirizzo visto dal processo nel proprio spazio di memoria.

Ogni processo ha il proprio spazio di indirizzamento virtuale. Quindi padre e figlio possono avere una variabile allo stesso indirizzo virtuale, ma quelle variabili appartengono a due spazi di memoria separati.

In pratica:

```text
padre:
&a = 0x7ffc1234abcd
a  = 8

figlio:
&a = 0x7ffc1234abcd
a  = 16
```

Lo stesso indirizzo virtuale non implica la stessa memoria condivisa.

Il sistema operativo, insieme alla MMU, traduce gli indirizzi virtuali in indirizzi fisici reali della RAM. Questa traduzione non e' normalmente visibile da un programma C/C++ comune.

Quindi, in un programma normale:

```cpp
cout << &a << endl;
```

mostra l'indirizzo virtuale, non l'indirizzo fisico reale.

L'indirizzo fisico reale puo' essere ricavato solo usando informazioni interne del sistema operativo, per esempio su Linux tramite strutture come `/proc/<pid>/pagemap`, ma e' un'operazione avanzata e spesso richiede privilegi di amministratore. Per lo studio di `fork()`, e' sufficiente sapere che gli indirizzi stampati dal programma sono indirizzi virtuali.

### Copy-on-write

Per motivi di efficienza, dopo una `fork()` il sistema operativo non copia immediatamente tutta la memoria del padre.

Inizialmente padre e figlio possono condividere alcune pagine fisiche in sola lettura. Quando uno dei due processi prova a modificare una variabile, il sistema operativo crea una copia privata della pagina modificata.

Questo meccanismo si chiama **copy-on-write**, cioe' "copia al momento della scrittura".

Dal punto di vista del programmatore, pero', il risultato e' semplice:

> se il figlio modifica una variabile, il padre non vede la modifica.

Esempio:

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>
using namespace std;

int main() {
    int a = 8;

    pid_t childPid = fork();

    if (childPid == 0) {
        a = 16;
        cout << "Figlio: " << &a << ": " << a << endl;
        return 0;
    } else {
        wait(nullptr);
        cout << "Padre: " << &a << ": " << a << endl;
    }

    return 0;
}
```

Output possibile:

```text
Figlio: 0x7ffe7c4f5abc: 16
Padre: 0x7ffe7c4f5abc: 8
```

L'indirizzo virtuale puo' essere lo stesso, ma i valori sono diversi perche' padre e figlio hanno memorie separate.

## 10. wait

La funzione `wait()` permette al padre di aspettare la terminazione di un processo figlio.

```cpp
#include <sys/wait.h>

wait(nullptr);
```

Serve per sincronizzare padre e figlio ed evitare che il padre termini senza attendere il figlio.

Il parametro di `wait()` serve per salvare informazioni su come e' terminato il figlio.

Se queste informazioni non servono, si passa `nullptr`:

```cpp
wait(nullptr);  // aspetta il figlio, ma ignora il codice di terminazione
```

Se invece si vuole controllare il codice di terminazione del figlio, si puo' usare una variabile:

```cpp
int status;
wait(&status);
```

### Come usare status

La variabile `status` non contiene direttamente il codice di uscita del figlio.

`status` contiene un valore codificato, dentro il quale il sistema operativo salva diverse informazioni:

- se il figlio e' terminato normalmente;
- qual e' il codice di uscita del figlio;
- se il figlio e' stato terminato da un segnale;
- quale segnale lo ha terminato.

Per questo `status` non va normalmente stampato direttamente.

Esempio non consigliato:

```cpp
int status;
wait(&status);

cout << status << endl;
```

Questo stampa il valore grezzo codificato, non il vero codice di uscita.

Per interpretare `status` si usano alcune macro definite in `<sys/wait.h>`.

Le piu' importanti sono:

```cpp
WIFEXITED(status)
```

controlla se il figlio e' terminato normalmente, cioe' con `return`, `exit()` o `_exit()`.

```cpp
WEXITSTATUS(status)
```

estrae il codice di uscita del figlio. Va usato solo se `WIFEXITED(status)` e' vero.

```cpp
WIFSIGNALED(status)
```

controlla se il figlio e' stato terminato da un segnale, per esempio `SIGKILL`, `SIGTERM` o `SIGSEGV`.

```cpp
WTERMSIG(status)
```

estrae il numero del segnale che ha terminato il figlio. Va usato solo se `WIFSIGNALED(status)` e' vero.

Esempio corretto:

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>
#include <cstdlib>
using namespace std;

int main() {
    pid_t childPid = fork();

    if (childPid == 0) {
        cout << "Sono il figlio" << endl;
        exit(1);
    } else {
        int status;
        wait(&status);

        if (WIFEXITED(status)) {
            cout << "Il figlio e' terminato normalmente" << endl;
            cout << "Codice di uscita: " << WEXITSTATUS(status) << endl;
        } else if (WIFSIGNALED(status)) {
            cout << "Il figlio e' stato terminato da un segnale" << endl;
            cout << "Segnale: " << WTERMSIG(status) << endl;
        }
    }

    return 0;
}
```

Output possibile:

```text
Sono il figlio
Il figlio e' terminato normalmente
Codice di uscita: 1
```

Quindi `wait(&status)` serve sia ad aspettare il figlio sia a raccogliere informazioni sulla sua terminazione.

## 11. exit status

Un processo puo' terminare restituendo un piccolo codice numerico:

```cpp
exit(0);
```

Il padre puo' leggere questo valore tramite `wait()`, ma questo metodo non e' adatto a scambiare dati complessi o valori grandi.

## 12. Terminare un processo

Un processo puo' terminare normalmente quando arriva alla fine del programma oppure quando esegue:

```cpp
exit(0);
```

Da terminale, invece, si puo' chiedere la terminazione di un processo usando il comando:

```bash
kill PID
```

Esempio:

```bash
kill 1234
```

In questo caso `1234` e' il PID del processo da terminare.

Il comando si chiama `kill`, non `kill()`: le parentesi indicano invece una funzione usata nei programmi C/C++.

Esiste anche:

```bash
killall nome_processo
```

che termina i processi con un certo nome. Va usato con attenzione, perche' puo' terminare piu' processi insieme.

## 13. Pipe

Una **pipe** e' un canale di comunicazione tra processi.

Si puo' immaginare come un piccolo tubo:

- da una parte un processo scrive;
- dall'altra parte un processo legge.

Serve quando padre e figlio devono scambiarsi un dato, perche' dopo la `fork()` non condividono automaticamente le variabili.

Si crea con:

```cpp
int fd[2];
pipe(fd);
```

L'ordine e' importante: prima si crea la pipe, poi si esegue la `fork()`.

```cpp
int fd[2];
pipe(fd);        // il padre crea la pipe

pid_t childPid = fork();  // il figlio eredita la pipe
```

Quando viene chiamata `fork()`, il figlio riceve una copia dei descrittori aperti dal padre.

Quindi dopo la `fork()` succede questo:

```text
                 pipe
          fd[1] ------> fd[0]
           scrittura     lettura

padre:  possiede fd[0] e fd[1]
figlio: possiede fd[0] e fd[1]
```

Padre e figlio sono collegati perche' usano due descrittori che puntano alla stessa pipe creata prima della `fork()`.

L'array `fd` contiene due descrittori:

- `fd[0]`: lettura;
- `fd[1]`: scrittura.

Quindi:

```cpp
read(fd[0], ...);   // legge dalla pipe
write(fd[1], ...);  // scrive nella pipe
```

Esempio: se il figlio calcola un valore e il padre deve conoscerlo, il figlio puo' scriverlo nella pipe:

```cpp
int minimum = 2;
write(fd[1], &minimum, sizeof(minimum));
```

Il padre puo' leggerlo da `fd[0]`:

```cpp
int receivedMinimum = 0;
read(fd[0], &receivedMinimum, sizeof(receivedMinimum));
```

In queste istruzioni:

- `&minimum` e `&receivedMinimum` indicano l'indirizzo della variabile in memoria;
- `sizeof(minimum)` indica quanti byte devono essere scritti o letti;
- `write()` copia i byte della variabile nella pipe;
- `read()` copia i byte dalla pipe dentro la variabile del padre.

Dopo la `fork()`, sia padre sia figlio possiedono entrambi i descrittori `fd[0]` e `fd[1]`.

Per questo e' buona pratica chiudere l'estremita' che non viene usata:

- il figlio deve solo scrivere, quindi chiude `fd[0]`;
- il padre deve solo leggere, quindi chiude `fd[1]`.

Chiudere il lato inutilizzato serve per tre motivi:

1. rende chiaro il ruolo di ogni processo: il figlio scrive, il padre legge;
2. libera descrittori che non servono;
3. permette al sistema operativo di capire quando non ci sono piu' processi che possono scrivere nella pipe.

Il terzo punto e' importante. Se il padre tiene aperto anche `fd[1]`, cioe' il lato di scrittura, il sistema operativo vede ancora un possibile scrittore collegato alla pipe.

In programmi piu' complessi questo puo' creare problemi: una `read()` potrebbe restare in attesa di altri dati, perche' la pipe risulta ancora aperta in scrittura.

Per questo, dopo la `fork()`, ogni processo chiude subito il lato che non usera':

```cpp
if (childPid == 0) {
    close(fd[0]);  // il figlio non legge dalla pipe
    // il figlio usa fd[1] per scrivere
} else {
    close(fd[1]);  // il padre non scrive nella pipe
    // il padre usa fd[0] per leggere
}
```

Schema:

```text
figlio                              padre
close(fd[0])                        close(fd[1])
calcola minimum
write(fd[1], &minimum, ...)  -->    read(fd[0], &receivedMinimum, ...)
close(fd[1])                        close(fd[0])
```

Questo permette a due processi separati di comunicare un valore in modo controllato.

## 14. File e risorse usate dai processi

Oltre a CPU e memoria, un processo puo' usare file, socket, dispositivi e altre risorse del sistema.

Per vedere quali processi stanno usando un certo file si puo' usare:

```bash
lsof nome_file
```

Esempio:

```bash
lsof /tmp/esempio.txt
```

Un altro comando utile e':

```bash
fuser nome_file
```

Esempio:

```bash
fuser /tmp/esempio.txt
```

Questi comandi sono utili quando un file sembra occupato, quando non si riesce a smontare un dispositivo, oppure quando si vuole capire quale processo sta usando una risorsa.

## 15. Consegna degli esercizi

### Obiettivo

Realizzare uno o piu' programmi C++ per studiare il comportamento dei processi creati con `fork()`.

La consegna deve contenere:

- il codice sorgente `.cpp`;
- un documento con le considerazioni su cosa avviene durante l'esecuzione;
- stampe utili a riconoscere il processo padre, il processo figlio e l'ordine di esecuzione.

Nella relazione e' utile inserire:

- brevi screenshot o trascrizioni dei comandi eseguiti;
- spiegazione del significato di PID, PPID e stato del processo;
- descrizione di cosa si osserva durante l'esecuzione;
- eventuali differenze tra due esecuzioni successive;
- consultazione del manuale con `man`, quando serve chiarire il significato di un comando o di una funzione.

Esempi:

```bash
man ps
man fork
man wait
man pipe
```

### Attivita' introduttiva da terminale

Prima degli esercizi in C++, osservare alcuni processi gia' presenti nel sistema.

Eseguire:

```bash
ps
```

poi:

```bash
ps -f
```

Individuare nelle stampe:

- PID;
- PPID;
- stato del processo;
- comando associato al processo.

Se disponibile, eseguire anche:

```bash
top
```

Questa attivita' serve a collegare i concetti teorici ai processi reali del sistema operativo.

Nota: la creazione di nuovi processi con `fork()` verra' fatta nel codice C++, non direttamente dalla shell.

### Esercizio 1: creazione di un processo figlio

Scrivere un programma che esegua una `fork()`.

Dopo la `fork()` sia il processo padre sia il processo figlio devono eseguire un ciclo `for` di 10 iterazioni.

Ad ogni iterazione devono essere stampati:

- il ruolo del processo, cioe' padre o figlio;
- il PID del processo corrente;
- il PID del processo padre;
- il numero dell'iterazione.

Dopo ogni iterazione inserire una breve pausa, ad esempio di circa 50 millisecondi, usando una funzione adatta.

Nel documento spiegare perche' l'ordine delle stampe non e' sempre prevedibile.

### Esercizio 2: array e memoria separata

Definire un array di 3 interi.

Dopo la creazione dell'array, eseguire una `fork()`.

Il processo figlio deve:

- stampare l'array ricevuto;
- incrementare ogni elemento dell'array di 10;
- stampare l'array modificato.

Il processo padre deve:

- attendere qualche istante;
- stampare il proprio array.

Nel documento spiegare perche' il padre non vede le modifiche fatte dal figlio.

### Esercizio 3: minimo e massimo in modo concorrente

Definire un array di 10 interi.

Verificare se e' possibile cercare minimo e massimo usando due processi concorrenti.

Una possibile organizzazione e':

- il processo figlio cerca il minimo;
- il processo padre cerca il massimo;
- il figlio invia il minimo al padre tramite pipe;
- il padre legge il minimo dalla pipe, aspetta la terminazione del figlio e stampa minimo e massimo.

Nel documento inserire:

- una breve spiegazione del comportamento;
- un diagramma di precedenza;
- alcune stampe che rendano visibile il lavoro dei due processi.

### Estensione facoltativa: risorse usate dai processi

Creare un piccolo programma che apre un file e rimane in pausa per alcuni secondi.

Durante l'esecuzione del programma, usare da terminale:

```bash
lsof nome_file
```

oppure:

```bash
fuser nome_file
```

Lo scopo e' verificare quale processo sta usando quel file.

Questa parte e' facoltativa, ma collega il tema dei processi al tema delle risorse condivise.

### Diagramma di precedenza richiesto per l'esercizio 3

```text
Creazione array
      |
   pipe()
      |
   fork()
   /    \
Figlio  Padre
 |       |
cerca   cerca
minimo  massimo
 |       |
scrive  legge
pipe    pipe
 \      /
 wait()
   |
stampa risultato finale
```
