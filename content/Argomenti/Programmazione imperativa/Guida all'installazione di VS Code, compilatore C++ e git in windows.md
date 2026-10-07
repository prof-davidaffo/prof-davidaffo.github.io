Guida completa passo passo per installare tutto lato utente (senza admin).
## Link ufficiali
- Visual Studio Code (download): [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Guida ufficiale VS Code + MinGW: [https://code.visualstudio.com/docs/cpp/config-mingw](https://code.visualstudio.com/docs/cpp/config-mingw)
- Git for Windows: [https://git-scm.com/install/windows](https://git-scm.com/install/windows)
- MSYS2: [https://www.msys2.org/](https://www.msys2.org/)
## 1. Installare Visual Studio Code
1. Vai su: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2. Scarica **Windows User Installer (x64)**
3. Avvia il file `VSCodeUserSetup-...exe`
4. Lascia tutte le impostazioni di default
5. Assicurati che sia selezionata l’opzione per aggiungere VS Code al PATH
6. Apri VS Code almeno una volta
## 2. Installare l’estensione C/C++
1. Apri VS Code
2. Premi `Ctrl+Shift+X`
3. Cerca `C/C++`
4. Installa **C/C++ (Microsoft)**
## 3. Installare Git
1. Vai su: [https://git-scm.com/install/windows](https://git-scm.com/install/windows)
2. Scarica la versione **64-bit Git for Windows Setup**
3. Avvia l’installer
4. Lascia tutte le impostazioni di default
5. Al termine, riapri il terminale  
    Verifica:
```powershell
git --version
```


> [!warning] Primo commit in VS Code
> Se visual studio code vi da errore sul primo commit dicendo che dovete configurare name email, aprite il terminale di code e inserite i seguenti comandi (modificando le parti che vanno modificate)  
> 
git config --global user.name "vostro username"  
git config --global user.email "vostra email"
  
## 4. Installare MSYS2
1. Vai su: [https://www.msys2.org/](https://www.msys2.org/)
2. Scarica l’installer `msys2-x86_64-...exe`
3. Avvialo
4. Quando chiede la cartella, lascia:
```text
C:\msys64
```
5. Alla fine seleziona **Run MSYS2 now**
## 5. Installare MinGW-w64 (GCC, G++, GDB)
Nel terminale MSYS2 esegui:
```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```
Premi `Enter` quando richiesto e poi `Y` per confermare
## 6. Aggiungere MinGW al PATH (utente)
1. Cerca su Windows: **variabili di ambiente**
2. Apri **Modifica le variabili di ambiente per il tuo account**
3. In **User variables** seleziona `Path` → **Edit**
4. Premi **New**
5. Inserisci:
```text
C:\msys64\ucrt64\bin
```
6. Conferma tutto con OK
7. Chiudi e riapri il terminale
## 7. Verifica finale
Apri un nuovo terminale e prova:
```powershell
git --version
gcc --version
g++ --version
gdb --version
code --version
```
Se tutti funzionano, hai finito
## Riassunto veloce
```md
1. Installa VS Code (User Installer)
2. Installa estensione C/C++
3. Installa Git
4. Installa MSYS2
5. Esegui:
   pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
6. Aggiungi al PATH:
   C:\msys64\ucrt64\bin
7. Verifica con:
   gcc --version
```