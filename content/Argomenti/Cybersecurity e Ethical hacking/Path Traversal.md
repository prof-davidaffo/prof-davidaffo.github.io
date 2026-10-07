## Comprensione del Path Traversal

### Definizione e Meccanismo

Il path traversal, noto anche come directory traversal, è una vulnerabilità di sicurezza che si verifica quando non viene applicata una valida sicurezza alla verifica degli input dei file forniti dall'utente. Questo permette agli aggressori di accedere a file o directory che sono conservati fuori dalla cartella prevista. Manipolando gli input, gli aggressori possono navigare attraverso la struttura delle directory del server e accedere a file o directory al di fuori di quelli concessi dall'applicazione.

### Esempio di Attacco

Consideriamo un'applicazione che ospita file in questo formato: `http://example.com/file=report.pdf`. Un attaccante, interessato ad accedere ad altri file, potrebbe provare a inserire `http://example.com/file=../../../../../etc/passwd` nel browser. In questo esempio, l'attaccante tenta di risalire fino alla radice del filesystem e quindi accedere al file `/etc/passwd`. L'uso della sequenza `../`, nota anche come dot-dot-slash, è il metodo fondamentale per navigare tra le directory in modo retrogrado.

### Tecniche di Elusione della Sicurezza

Sebbene negli esempi più diretti questo metodo possa non funzionare a causa dei controlli implementati nei moderni framework, gli aggressori possono diventare più creativi per eludere tali misure. Un metodo comune è l'encoding dell'URL. Codificando `../` come `%2e%2e%2f`, il server web riceverà questa richiesta e la decodificherà nuovamente in `../`.

Inoltre, se l'applicazione filtra questi encoding, la doppia codifica può risultare efficace. La doppia codifica potrebbe essere necessaria quando un sistema A chiama un sistema B. Il sistema A potrebbe decodificare una volta sola e passare l'URL ancora codificato al sistema B.

### Contromisure

Per mitigare le vulnerabilità di path traversal, gli sviluppatori devono implementare una rigorosa validazione dell'input, limitando le possibilità degli utenti di inserire percorsi relativi o assoluti. È anche prudente utilizzare liste di controllo di accesso a file (file access control lists) per restringere l'accesso ai file solo a quelli strettamente necessari per l'operatività dell'applicazione.