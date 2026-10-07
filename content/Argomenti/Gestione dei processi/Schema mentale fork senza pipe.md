```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>

using namespace std;
int main() {
// trovandosi prima della fork, viene creata una copia di questo array per entrambi i processi, ognuno modifica in modo autonomo la sua copia senza influire sull'altro
int ordini[10] = {18, 4, 27, 9, 31, 2, 15, 44, 6, 21};

// Questa chiamata clona il processo creando il figlio, il pid del figlio verrà salvato dentro alla variabile. Nella stessa variabile, il figlio avrà invece zero.
pid_t childPid = fork();

// A questo punto posso usare un semplice if per capire in quale processo mi trovo
if(childPid == 0){
	//Queste istruzioni verranno eseguite soltanto dal processo figlio
	//...istruzioni eseguite dal figlio...
	// Serve per terminare il processo figlio e restituire un valore al padre che indica come è stato terminato. Può essere omesso.
exit(0);
}

else if(childPid == -1){
	// Istruzioni eseguite in caso di errore, ovvero se la fork non ha avuto buon fine e non ha generato il processo figlio, verrà restituito -1.
}
else{
	//Queste istruzioni verranno eseguite soltanto dal processo padre
	//...istruzioni eseguite dal padre...
	// wait permette di aspettare che il figlio termini prima di procedere, è un meccanismo di sincronizzazione, se non mi interesa lo stato posso usare wait(nullptr)
	int status;
	wait(&status);
	//...altre istruzioni eseguite dal padre dopo la terminazione del figlio...
	// posso leggere il valore di exit del processo figlio con questa funzione
int statoLeggibile = WEXITSTATUS(status);
}

return 0;
}
```