## Multiplexer: esercizi risolti
*Tratti da [edutecnica.it](https://www.edutecnica.it/sistemi/muxx/muxx.htm)*
### Esercizio 1
Tramite un multiplexer realizza la funzione:  
$Y = AB+\overline A B$
### Esercizio 2
Tramite un multiplexer a 4 ingressi dati e 2 ingressi di selezione.  
Funzione da realizzare:  
$Y = ABC +\overline A \ \overline B \ \overline C$
### Esercizio 3
Il motore di un tornio può avviarsi se:  
A: è presente il pezzo da lavorare  
B: è presente l’olio di raffreddamento  
È prevista una fase di test senza pezzo e con o senza olio.  
Realizzare il circuito logico tramite mux.
### Esercizio 4
Una tramoggia eroga il contenuto se:  
A: è presente il rimorchio  
B: livello mais superiore alla soglia  
Può erogare anche senza rimorchio se il livello è compreso tra B e C.  
<img src="Media/x4.png">
### Esercizio 5
Una pistola deve iniettare materiale chimico su un pezzo (C).  
Il processo è rischioso e deve avvenire con:  
A: sportello chiuso  
B: ambiente inertizzato (azoto)  
In fase di test può funzionare senza pezzo, con sportello aperto e senza azoto.  
<img src="Media/x5.png">
### Esercizio 6
Realizzare con un multiplexer 8×1 un rilevatore di numeri primi per un sistema binario a 4 bit.
### Esercizio 7
In un sistema di conteggio a 4 bit si vuole segnalare il passaggio attraverso successive potenze di 2.  
Realizzare il circuito con multiplexer.
### Esercizio 8
Gestione automatica degli scambi ferroviari E e D per instradare un treno dal binario K verso A, B o C.  
Attivare un allarme (Y) se la combinazione degli scambi porta su un binario occupato.  
<img src="Media/x7.png">  
Condizioni:  
E = 0 → verso A  
E = 1 → verso D  
D = 0 → verso B  
D = 1 → verso C  
Y = 1 → allarme  
Binario libero = 0  
Binario occupato = 1  
Realizzare prima con porte logiche e poi con multiplexer.
