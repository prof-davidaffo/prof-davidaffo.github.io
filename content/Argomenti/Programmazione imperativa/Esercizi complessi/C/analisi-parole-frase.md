# Analisi delle parole di una frase

Realizzare un programma C che analizzi una frase lunga al massimo 200 caratteri.

La frase può contenere lettere, spazi e i segni di punteggiatura `.`, `,`, `;`, `:`, `!` e `?`. Una parola è una sequenza di caratteri alfabetici delimitata da spazi, punteggiatura oppure dalla fine della stringa.

Il programma deve estrarre le parole della frase e memorizzarle in un array di stringhe. Si possono memorizzare al massimo 40 parole, ciascuna lunga al massimo 25 caratteri.

Ai fini del confronto, lettere maiuscole e minuscole devono essere considerate equivalenti. Ad esempio, `Casa`, `casa` e `CASA` rappresentano la stessa parola.

Usare le funzioni di `string.h` e `ctype.h`, funzioni adeguate e il passaggio di parametri. Le funzioni di elaborazione non devono effettuare stampe con `printf`.

## Funzioni richieste

Sviluppare almeno le seguenti funzioni.

1. Leggere una frase, conservando anche gli eventuali spazi.
   La funzione deve eliminare il carattere `'\n'` lasciato da `fgets`, se presente.

2. Convertire una stringa in caratteri minuscoli.
   La funzione modifica direttamente la stringa ricevuta.

3. Verificare se un carattere è un separatore.
   La funzione restituisce `1` per uno spazio o uno dei segni di punteggiatura ammessi, `0` altrimenti.

4. Estrarre le parole dalla frase.
   La funzione riempie l'array di stringhe senza modificare la frase originale e restituisce:
   - il numero di parole estratte, se l'operazione riesce;
   - `-1` se una parola supera la lunghezza massima;
   - `-2` se il numero di parole supera lo spazio disponibile.

5. Cercare una parola nell'array.
   Il confronto non deve distinguere tra lettere maiuscole e minuscole. La funzione restituisce la posizione della prima occorrenza oppure `-1`.

6. Contare le parole distinte.
   Parole uguali con combinazioni diverse di maiuscole e minuscole devono essere contate una sola volta.

7. Trovare la parola più lunga.
   La funzione restituisce la posizione della parola oppure `-1` se l'array è vuoto. In caso di parità deve restituire la prima.

8. Contare le occorrenze di ogni parola.
   La funzione riempie un array parallelo di interi. Solo la prima occorrenza di una parola deve contenere il conteggio complessivo; per le occorrenze successive si deve memorizzare `0`.

9. Stampare le parole distinte con il relativo numero di occorrenze.
   Questa funzione può effettuare stampe con `printf`.

## Main

Nel `main`:

1. leggere la frase;
2. estrarre le parole e gestire gli eventuali codici di errore;
3. stampare il numero totale di parole e il numero di parole distinte;
4. mostrare la parola più lunga;
5. leggere una parola da cercare e mostrarne la prima posizione;
6. stampare tutte le parole distinte con il numero di occorrenze.

## Vincoli

- Non usare `strtok`.
- Non usare allocazione dinamica.
- Non modificare la frase originale durante l'estrazione.
- Usare `strcmp`, `strcpy` e `strlen` dove opportuno.
- Non usare variabili globali, tranne le costanti definite con `#define`.
- Lasciare commentate eventuali righe di codice usate temporaneamente durante lo sviluppo.
