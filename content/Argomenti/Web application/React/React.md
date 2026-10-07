https://www.youtube.com/watch?v=SqcY0GlETPk
# 📘 Corso Completo di React con TypeScript
## Introduzione al Corso
In questo corso imparerai tutto ciò che serve per costruire applicazioni moderne con React, da zero fino ad argomenti avanzati, tra cui:
* Routing
* State Management
* React Query
* Ottimizzazione delle performance
* Autenticazione
* Error Handling
L'applicazione che costruiremo è **completa, moderna e in produzione**, con funzionalità come:
* Modalità chiara/scura
* Ricerca e filtri (genere, piattaforma)
* Aggiornamento dinamico del titolo della pagina
* Skeleton Loader per i dati in caricamento
---
## ✅ Requisiti per il Corso
Non è necessario conoscere React, ma **è richiesto**:
* Buona conoscenza di **HTML**, **CSS** e **JavaScript**
* In questo corso useremo **TypeScript**
### Perché TypeScript?
* Permette di trovare errori prima dell'esecuzione
* Migliora l'autocompletamento
* Aiuta a mantenere il codice scalabile e manutenibile
---
## 🔧 Setup Ambiente di Sviluppo
### 1. Installazione di Node.js
* Richiesta: **Node.js v16 o superiore**
* Comando per verificare versione:
```bash
node -v
```
* Se necessario, scarica da: [https://nodejs.org](https://nodejs.org)
### 2. Editor consigliato: **Visual Studio Code**
> Estensione consigliata: **Prettier – Code formatter**
* Cerca e installa da Extensions
* Attiva "Format on Save" dalle impostazioni
---
## 🚀 Creazione del Progetto con Vite
Usiamo **Vite** invece di Create React App per prestazioni superiori.
```bash
npm create vite@4.1.0
```
> Durante la creazione:
* Nome progetto: `react-app`
* Framework: `React`
* Linguaggio: `TypeScript`
Poi:
```bash
cd react-app
npm install
code .
npm run dev
```
Apri il browser su `http://localhost:5173`
---
## 📁 Struttura del Progetto
| File/Cartella    | Descrizione                                          |
| ---------------- | ---------------------------------------------------- |
| `node_modules/`  | Librerie installate (non modificare)                 |
| `public/`        | File pubblici (immagini, video)                      |
| `src/`           | Codice sorgente dell'applicazione                    |
| `index.html`     | Template HTML principale, contiene `<div id="root">` |
| `main.tsx`       | Entry point dell'app                                 |
| `App.tsx`        | Componente principale (root)                         |
| `package.json`   | Informazioni sul progetto e dipendenze               |
| `vite.config.ts` | Configurazione di Vite (solitamente non da toccare)  |
| `tsconfig.json`  | Configurazione TypeScript                            |
---
## 🧱 Primo Componente React: `Message.tsx`
```tsx
function Message() {
  return <h1>Hello World</h1>;
}
export default Message;
```
* Il file ha estensione `.tsx` perché contiene **JSX**
* JSX è una sintassi simile all’HTML ma scritta dentro JavaScript
* JSX viene compilato in chiamate come `React.createElement(...)`
---
## 🧩 Utilizzo del componente in `App.tsx`
```tsx
import Message from "./Message";
function App() {
  return (
    <div>
      <Message />
    </div>
  );
}
export default App;
```
> ⚠️ Ogni componente React deve avere **una lettera maiuscola** all'inizio (PascalCase)
---
## 📋 ListGroup Component con Bootstrap
### Installazione di Bootstrap
Per uno stile moderno e professionale, installiamo **Bootstrap**:
```bash
npm install bootstrap
```
### Pulizia dei file CSS
Nel progetto generato da Vite, rimuoviamo gli stili generati automaticamente:
* `src/app.css` → elimina tutto il contenuto
* `src/index.css` → elimina l'intero file
Poi modifichiamo `main.tsx` per importare Bootstrap:
```tsx
import "bootstrap/dist/css/bootstrap.css";
```
---
# 🧱 Sezione: Creazione del componente `ListGroup`
## 📁 Struttura del progetto
All’interno della cartella `src`, creiamo una nuova sottocartella chiamata `components`:
```
src/
├── components/
│   └── ListGroup.tsx
```
---
## 🔨 Codice iniziale di `ListGroup.tsx`
```tsx
function ListGroup() {
  return <h1>ListGroup</h1>;
}
export default ListGroup;
```
---
## ✅ Uso in `App.tsx`
```tsx
import ListGroup from "./components/ListGroup";
function App() {
  return (
    <div>
      <ListGroup />
    </div>
  );
}
export default App;
```
---
## 🎨 Aggiunta del markup Bootstrap
Copiamo da [Bootstrap > List group](https://getbootstrap.com/docs/5.2/components/list-group/):
```tsx
function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">New York</li>
      <li className="list-group-item">San Francisco</li>
      <li className="list-group-item">Tokyo</li>
      <li className="list-group-item">London</li>
      <li className="list-group-item">Paris</li>
    </ul>
  );
}
```
> ⚠️ In JSX si usa `className` al posto di `class`.
---
## 🔁 Lista dinamica con `.map()`
```tsx
const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
return (
  <ul className="list-group">
    {items.map((item) => (
      <li className="list-group-item">{item}</li>
    ))}
  </ul>
);
```
> ❗ Ma React chiederà una `key` unica per ogni elemento.
### Corretto con `key`:
```tsx
{items.map((item) => (
  <li key={item} className="list-group-item">{item}</li>
))}
```
---
## ⚠️ Condizione: Lista vuota
```tsx
if (items.length === 0)
  return <p>No item found</p>;
return (
  <>
    <h1>List</h1>
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul>
  </>
);
```
---
## 🔀 Fragments: evitare div inutili
React **non permette più di un elemento al return root**. Le opzioni sono:
### ❌ Usare `<div>`
```tsx
return (
  <div>
    <h1>List</h1>
    <ul className="list-group">...</ul>
  </div>
);
```
### ✅ Usare `<React.Fragment>`
```tsx
import { Fragment } from "react";
return (
  <Fragment>
    <h1>List</h1>
    <ul className="list-group">...</ul>
  </Fragment>
);
```
### ✅✅ Sintassi breve consigliata: `<>...</>`
```tsx
return (
  <>
    <h1>List</h1>
    <ul className="list-group">...</ul>
  </>
);
```
---
## 🧠 Condizioni inline e pulizia JSX
### Con `&&`:
```tsx
{items.length === 0 && <p>No item found</p>}
```
### Con ternario:
```tsx
{items.length === 0 ? <p>No item found</p> : null}
```
---
## 🖱️ Gestione click + `useState`
```tsx
import { useState } from "react";
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```
---
## 🔌 Componenti riutilizzabili con Props
### Definizione Props
```tsx
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
```
### Uso delle Props
```tsx
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
```
---
## 🧪 Uso in `App.tsx`
```tsx
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log("Selected:", item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
```
---
# 🚨 Sezione: Creazione del componente `Alert`
## 🎯 Obiettivo
Costruire un componente `Alert` riutilizzabile con:
* Supporto al contenuto dinamico via `children`
* Pulsante per chiusura (`×`)
* Comunicazione dell'evento al componente genitore
---
## 📁 Struttura del file
Percorso:
```
src/
├── components/
│   └── Alert.tsx
```
---
## 🧱 Creazione base di `Alert.tsx`
```tsx
interface Props {
  children: React.ReactNode;
  onClose: () => void;
}
function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
}
export default Alert;
```
### 🔍 Spiegazione
* `alert alert-primary` → classi Bootstrap per lo stile
* `alert-dismissible` → abilita la chiusura
* `btn-close` → stile del pulsante “×”
* `children` → contenuto dinamico HTML/JSX
* `onClose` → funzione chiamata alla chiusura
---
## 🧪 Uso base in `App.tsx`
```tsx
import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert onClose={() => console.log("Alert closed")}>
        Hello <span>world</span>
      </Alert>
    </div>
  );
}
```
---
## ⚙️ Gestione visibilità tramite `useState`
```tsx
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My alert message
        </Alert>
      )}
      <button
        className="btn btn-primary"
        onClick={() => setAlertVisibility(true)}
      >
        Show Alert
      </button>
    </div>
  );
}
```
### 🔍 Spiegazione
* `alertVisible` controlla se mostrare o meno il componente
* Il bottone imposta `alertVisible = true`
* Il componente `Alert` notifica la chiusura tramite `onClose`
* Questo imposta `alertVisible = false` ⇒ alert scompare
---
## 🧠 Tipi avanzati con TypeScript
```ts
interface Props {
  children: React.ReactNode;   // accetta qualsiasi contenuto JSX
  onClose: () => void;         // funzione senza parametri, ritorna void
}
```
> Questo rende il componente versatile e fortemente tipizzato.
---
## 📌 Vantaggi di `children`
✅ Puoi scrivere contenuto direttamente nel JSX:
```tsx
<Alert onClose={...}>Simple string</Alert>
```
✅ O contenuto HTML/JSX più complesso:
```tsx
<Alert onClose={...}>
  This is <strong>important</strong>!
</Alert>
```
---
## 🔁 Riepilogo logica
| Aspetto            | Implementazione                |
| ------------------ | ------------------------------ |
| Visualizzazione    | `useState` in `App.tsx`        |
| Chiusura           | `onClose` passato da `App.tsx` |
| Contenuto dinamico | `children`                     |
| Stile              | Classi Bootstrap               |
| Accessibilità      | `aria-label="Close"`           |

---
