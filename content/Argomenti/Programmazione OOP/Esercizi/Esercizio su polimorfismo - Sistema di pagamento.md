## Esercizio Java sul polimorfismo
### Tema: sistema di pagamento
Devi progettare un piccolo programma Java che simuli diversi metodi di pagamento in un negozio online.
L’obiettivo è usare una **classe astratta** e il **polimorfismo**, cioè la possibilità di trattare oggetti diversi attraverso un tipo comune, ottenendo però comportamenti diversi quando viene chiamato lo stesso metodo.
## Consegna
Crea una classe astratta chiamata `PaymentMethod`, che rappresenta un metodo di pagamento generico.
La classe deve memorizzare il nome del proprietario del metodo di pagamento.
Deve avere:
- un costruttore che riceve il nome del proprietario;
- un metodo concreto che stampa il proprietario;
- un metodo astratto chiamato `pay`, che riceve l’importo da pagare.
---
Crea poi tre classi figlie:
- `CreditCard`
- `PayPal`
- `BankTransfer`
Ogni classe deve rappresentare un diverso metodo di pagamento e deve ridefinire il metodo `pay`.
## Comportamento richiesto
### CreditCard
La classe deve memorizzare anche il numero della carta.
Quando viene eseguito un pagamento, deve stampare un messaggio che indica che il pagamento è stato effettuato con carta di credito, mostrando solo le ultime quattro cifre della carta.
### PayPal
La classe deve memorizzare anche l’indirizzo email dell’account.
Quando viene eseguito un pagamento, deve stampare un messaggio che indica che il pagamento è stato effettuato tramite PayPal, mostrando l’email dell’account.
### BankTransfer
La classe deve memorizzare anche l’IBAN.
Quando viene eseguito un pagamento, deve stampare un messaggio che indica che il pagamento è stato effettuato tramite bonifico bancario, mostrando l’IBAN.
## Classe principale
Nel programma principale crea una collezione di metodi di pagamento contenente almeno:
- una carta di credito;
- un account PayPal;
- un bonifico bancario.
Tutti questi oggetti devono essere gestiti usando il tipo comune `PaymentMethod`.
Poi scorri la collezione e, per ogni metodo di pagamento:
- stampa il proprietario;
- esegui un pagamento dello stesso importo, ad esempio 50 euro.
## Obiettivo dell’esercizio
Il programma deve mostrare che lo stesso comando di pagamento produce risultati diversi a seconda dell’oggetto reale usato.
Anche se tutti gli oggetti vengono trattati come metodi di pagamento generici, Java deve eseguire automaticamente la versione corretta del metodo `pay`.
Questo è il punto centrale del **polimorfismo**.
## Esempio di output atteso
```text
Owner: Mario Rossi
Payment of 50.0 euros made by credit card ending with 1234
Owner: Luca Bianchi
Payment of 50.0 euros made with PayPal account luca@example.com
Owner: Anna Verdi
Payment of 50.0 euros made by bank transfer from IBAN IT60X0542811101000000123456
```
## Domande di riflessione
1. Perché ha senso che `PaymentMethod` sia una classe astratta?
2. Perché il metodo `pay` deve essere astratto?
3. Perché oggetti diversi possono essere inseriti nella stessa collezione?
4. Quale versione del metodo `pay` viene eseguita per ogni oggetto?
5. Dove si vede concretamente il polimorfismo in questo esercizio?