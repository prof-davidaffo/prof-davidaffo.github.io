## Esercizio Java
Realizza un programma in Java per la gestione dei voti di alcuni studenti.
Il progetto deve permettere di usare in modo concreto:
- `ArrayList`
- classi wrapper
- eccezioni
- overloading dei metodi
## Obiettivo
Devi creare un piccolo sistema che consenta di:
- gestire una lista di studenti
- aggiungere voti agli studenti
- cercare studenti
- rimuovere dati
- svuotare liste
- calcolare alcune statistiche sui voti
- gestire eventuali errori di input
## Classe Student
Crea una classe `Student` con i seguenti attributi:
- `String name`
- `ArrayList<Integer> grades`
La classe deve contenere almeno questi metodi:
- `addGrade(int grade)`
- `addGrade(String grade)`
- `removeGrade(int grade)`
- `clearGrades()`
- `hasGrade(int grade)`
- `getGradeAt(int index)`
- `getGradesCount()`
- `getAverage()`
- `getMaxGrade()`
- `getMinGrade()`
## Comportamento richiesto della classe Student
Il metodo `addGrade(int grade)` deve aggiungere un voto alla lista.
Il metodo `addGrade(String grade)` deve convertire la stringa in intero usando una classe wrapper, poi aggiungere il voto.
Il metodo `removeGrade(int grade)` deve rimuovere dalla lista la prima occorrenza di quel voto.
Il metodo `clearGrades()` deve svuotare completamente la lista dei voti.
Il metodo `hasGrade(int grade)` deve verificare se un certo voto è presente.
Il metodo `getGradeAt(int index)` deve restituire il voto nella posizione indicata.
Il metodo `getGradesCount()` deve restituire quanti voti sono presenti.
Il metodo `getAverage()` deve restituire la media dei voti.
Il metodo `getMaxGrade()` deve restituire il voto massimo.
Il metodo `getMinGrade()` deve restituire il voto minimo.
## Vincoli sui voti
Un voto è valido solo se compreso tra `0` e `10`.
Se si tenta di inserire un voto non valido, il programma deve lanciare un’eccezione.
## Classe GradeManager
Crea una classe `GradeManager` con il seguente attributo:
- `ArrayList<Student> students`
La classe deve contenere almeno questi metodi:
- `addStudent(Student s)`
- `findStudent(String name)`
- `removeStudent(String name)`
- `clearStudents()`
- `getStudentCount()`
- `addGradeToStudent(String name, int grade)`
- `addGradeToStudent(String name, String grade)`
## Comportamento richiesto della classe GradeManager
Il metodo `addStudent(Student s)` deve aggiungere uno studente alla lista.
Non devono essere ammessi studenti duplicati con lo stesso nome.
Il metodo `findStudent(String name)` deve cercare uno studente per nome e restituirlo. Se lo studente non esiste, deve essere lanciata un’eccezione.
Il metodo `removeStudent(String name)` deve rimuovere lo studente con quel nome.
Il metodo `clearStudents()` deve svuotare completamente la lista degli studenti.
Il metodo `getStudentCount()` deve restituire quanti studenti sono presenti.
I due metodi `addGradeToStudent(...)` devono permettere di aggiungere un voto a uno studente, una volta passando un `int` e una volta passando una `String`.
## Uso obbligatorio di ArrayList
Nel progetto devono comparire e venire usati correttamente questi metodi di `ArrayList`:
- `add()`
- `remove()`
- `clear()`
- `contains()`
- `get()`
- `size()`
La ricerca di uno studente deve essere realizzata con un ciclo, perché `ArrayList` non possiede un metodo `find()`.
## Uso obbligatorio delle classi wrapper
Quando il voto viene passato come stringa, devi convertirlo usando `Integer.parseInt()`.
## Gestione delle eccezioni
Devi gestire almeno i seguenti casi:
- voto non valido
- stringa non numerica durante la conversione
- studente non trovato
- indice non valido nella lista dei voti
Puoi usare eccezioni standard oppure crearne una personalizzata per il caso dello studente non trovato.
## Classe Main
Nel `main` devi:
- creare almeno 3 studenti
- aggiungerli al gestore
- aggiungere voti sia come `int` sia come `String`
- cercare almeno uno studente
- rimuovere almeno un voto
- verificare la presenza di un voto
- leggere almeno un voto tramite indice
- stampare il numero di voti di uno studente
- stampare media, voto massimo e voto minimo di almeno uno studente
- rimuovere almeno uno studente
- svuotare almeno una lista con `clear()`
- provocare e gestire almeno 3 errori diversi
## Esempi di errori da testare
Puoi ad esempio provare questi casi:
- inserire `"abc"` come voto
- inserire un voto come `15`
- cercare uno studente che non esiste
- leggere un voto con indice non valido