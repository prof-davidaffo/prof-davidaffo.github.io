**Passo 1: Scarica e Installa VirtualBox**
1. Vai al sito web di VirtualBox: https://www.virtualbox.org/
2. Fai clic su "Downloads" nella barra di navigazione.
3. Scarica la versione più recente di VirtualBox per Windows.
4. Esegui il file di installazione scaricato e segui le istruzioni per completare l'installazione.

**Passo 2: Scarica un'immagine ISO di Linux**
1. Decide quale distribuzione Linux vuoi utilizzare. Suggerisco di utilizzare Linux Mint ai principianti.
2. Vai al sito web della distribuzione Linux scelta e scarica l'immagine ISO del sistema operativo.

**Passo 3: Crea una Nuova Macchina Virtuale in VirtualBox**
1. Apri VirtualBox.
2. Clicca su "Nuova" nella barra degli strumenti.
3. Inserisci un nome per la tua macchina virtuale e seleziona il tipo "Linux".
4. Scegli la versione che corrisponde al sistema operativo Linux che hai scaricato (ad esempio, "Mint" se hai scaricato Linux Mint).
5. Clicca su "Avanti".

**Passo 4: Assegna la Quantità di Memoria**
1. Assegna la quantità di memoria RAM per la tua macchina virtuale. Scegli un valore che non comprometta le prestazioni del tuo sistema host. Una media di 2 GB è spesso sufficiente.
2. Clicca su "Avanti".

**Passo 5: Crea un Disco Rigido Virtuale**
1. Seleziona "Crea un nuovo disco rigido virtuale" e clicca su "Avanti".
2. Scegli il tipo di file del disco rigido virtuale (di solito, "VDI" è una buona scelta).
3. Seleziona se vuoi un disco fisso o dinamico (dinamico è di solito una buona opzione per risparmiare spazio sul disco).
4. Assegna la dimensione del disco rigido virtuale e clicca su "Crea".

**Passo 6: Monta l'Immagine ISO di Linux**
1. Torna alla schermata principale di VirtualBox.
2. Seleziona la tua nuova macchina virtuale e clicca su "Impostazioni".
3. Nella finestra delle impostazioni, vai su "Archiviazione" nella barra laterale.
4. Sotto "Controller: IDE", trova il simbolo del disco e clicca su "Vuoto".
5. Nella sezione "Disco Ottico", clicca sull'icona del disco accanto a "Controller: IDE" e seleziona "Scegli un file disco ottico".
6. Seleziona l'immagine ISO di Linux che hai scaricato e clicca su "Apri".

**Passo 7: Avvia la Macchina Virtuale**
1. Torna alla schermata principale di VirtualBox.
2. Seleziona la tua macchina virtuale e clicca su "Avvia".
3. La macchina virtuale dovrebbe avviarsi con l'immagine ISO di Linux che hai montato. Segui le istruzioni di installazione di Linux.

**Passo 8: Completa l'Installazione di Linux**
1. Segui le istruzioni guidate per installare Linux sulla tua macchina virtuale.
2. Quando richiesto, seleziona il disco rigido virtuale creato in precedenza come posizione di installazione.
3. Completa il processo di installazione, inclusa la configurazione dell'utente e della password.

Una volta completati questi passaggi, dovresti avere una macchina virtuale Linux funzionante su Windows tramite VirtualBox. Puoi avviare e spegnere la macchina virtuale quando ne hai bisogno, consentendoti di esplorare Linux senza dover installarlo direttamente sul tuo computer.