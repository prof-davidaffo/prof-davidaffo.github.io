## Installazione di Docker
Con i seguenti comandi installiamo e configuriamo Docker per l'utilizzo su Linux su una distribuzione Debian-based. Nelle altre distribuzioni, utilizzare il packet manager relativo. Docker si può anche installare su Windows. In alcune distribuzioni Debian non serve utilizzare `systemctl enable`.
```bash
   sudo apt install docker
   systemctl enable docker
   sudo usermod -aG docker $USER
```
Se `usermod` non funziona, aggiungere manualmente il gruppo e poi lanciare `usermod`
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```
Riavviare il sistema
## Download e utilizzo di WebGoat-desktop

> [!danger] Attenzione!!!
> Non utilizzare mai WebGoat sulla tua macchina fisica in versione standalone, in quanto la rende vulnerabile ed espone ad attacchi. Se vuoi utilizzare WebGoat senza container, assicurati di utilizzare una macchina virtuale che abbia unicamente questo scopo

Per i nostri scopi utilizziamo WebGoat-desktop, un container Docker con un desktop environment Linux preconfigurato per l'utilizzo con WebGoat e i suoi strumenti (comodo per evitare di installare programmi aggiuntivi sul proprio sistema e buttare via tutto una volta che non si vuole più utilizzare WebGoat con un semplice comando). Lanciamo l'immagine con il seguente comando (questo comando va usato soltanto la prima volta):
```bash
docker run --name webgoat -p 127.0.0.1:3000:3000 webgoat/webgoat-desktop
```
Se fosse la prima volta che lanciamo l'immagine, Docker lo scaricherà automaticamente. Utilizzando il parametro `--name` diamo un nome al container che stiamo utilizzando, in questo caso `webgoat`. In questo modo, rendiamo persistenti le modifiche fatte all'immagine `webgoat` fintanto che non la eliminiamo.
A questo punto, per avviare l'immagine le volte successive basterà utilizzare
```bash
docker start webgoat
```
per avviare l'immagine e
```bash
docker stop webgoat
```
per fermarla.
Una volta avviata l'immagine, basterà aprire il proprio browser e connettersi all'indirizzo `localhost:3000` e potremmo utilizzare il nostro container tramite una connessione VNC.
Dentro l'immagine, possiamo eseguire WebGoat e ZAP con i seguenti comandi:
```bash
sh start_webgoat.sh
sh start_zap.sh
```
Una volta avviati, aprire il browser all'indirizzo indicato dalla console, di solito http://127.0.0.1:8080/WebGoat/
A tal proposito, se si vuole utilizzare ZAP, assicurarsi di avviare prima WebGoat, in quanto altrimenti ZAP userà la stessa porta di WebGoat impedendogli di avviarsi.