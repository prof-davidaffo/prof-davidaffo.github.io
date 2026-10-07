# Consegna progetto
Immagina di dover sviluppare un piccolo sistema per la gestione di una **libreria digitale**. Il sistema deve permettere di archiviare e consultare i libri disponibili, aggiungere nuovi titoli e rimuovere quelli non più presenti. La struttura dati da utilizzare per l’archiviazione è una **Single Linked List** implementata da zero (senza usare le classi di librerie standard come `LinkedList` di Java).
### Specifiche tecniche
1. **Classe `Book`**
   * Campi: `title` (String), `author` (String), `year` (int), `isbn` (String).
   * Metodi: costruttori, `toString()`, getter/setter.
2. **Classe `Node`**
   * Campo: `Book data` e riferimento al nodo successivo.
3. **Classe `BookList`** (la tua single linked list)
   Implementare almeno i seguenti metodi:
   * `void addFirst(Book b)` → aggiunge un libro in testa.
   * `void addLast(Book b)` → aggiunge un libro in coda.
   * `Book removeFirst()` → rimuove e restituisce il primo libro.
   * `Book removeLast()` → rimuove e restituisce l’ultimo libro.
   * `Book findByISBN(String isbn)` → ricerca un libro dato il suo ISBN.
   * `boolean removeByISBN(String isbn)` → rimuove un libro dato il suo ISBN.
   * `int size()` → restituisce il numero totale di libri.
   * `void printAll()` → stampa la lista completa.
4. **Metodi aggiuntivi richiesti** (per verificare competenze più avanzate):
   * `Book getNth(int n)` → restituisce il libro alla posizione n (0-based).
   * `void insertAt(Book b, int pos)` → inserisce un libro in una posizione arbitraria.
   * `void reverse()` → inverte l’ordine della lista.
   * `Book getOldestBook()` → restituisce il libro più vecchio.
   * `Book getNewestBook()` → restituisce il libro più recente.
   * `void insertAlphabetical(Book b)` → inserisce un libro mantenendo l’ordine alfabetico in base al titolo.
   * `void sortAlphabetical()` → riordina l’intera lista in ordine alfabetico in base al titolo.
5. **Classe `LibraryApp` (main)**
   * Menù testuale con le principali operazioni:
     * Aggiungere un libro (in testa, in coda, in posizione specifica o in ordine alfabetico).
     * Rimuovere un libro (dal primo, dall’ultimo o dato l’ISBN).
     * Cercare un libro per ISBN.
     * Visualizzare tutti i libri.
     * Mostrare il libro più vecchio e il più recente.
     * Invertire l’ordine della lista.
     * Riordinare la lista alfabeticamente.
     * Visualizzare il numero totale di libri.
# Codice
## Book.java
```java
/**
 * Simple data class for a book.
 */
public class Book {
    private String title;
    private String author;
    private int year;
    private String isbn;
    public Book(String title, String author, int year, String isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    @Override
    public String toString() {
        return String.format("\"%s\" by %s (%d) [ISBN:%s]", title, author, year, isbn);
    }
}
```
## BookList.java
```java
import java.util.NoSuchElementException;
/**
 * Single Linked List for Book objects, implemented from scratch.
 */
public class BookList {
    private static class Node {
        Book data;
        Node next;
        Node(Book data) { this.data = data; }
    }
    private Node head;
    private int size;
    public int size() { return size; }
    public boolean isEmpty() { return size == 0; }
    /** Adds a book at the beginning. */
    public void addFirst(Book b) {
        Node n = new Node(b);
        n.next = head;
        head = n;
        size++;
    }
    /** Adds a book at the end. */
    public void addLast(Book b) {
        Node n = new Node(b);
        if (head == null) {
            head = n;
        } else {
            Node cur = head;
            while (cur.next != null) cur = cur.next;
            cur.next = n;
        }
        size++;
    }
    /** Removes and returns the first book. */
    public Book removeFirst() {
        if (head == null) throw new NoSuchElementException("List is empty");
        Book out = head.data;
        head = head.next;
        size--;
        return out;
    }
    /** Removes and returns the last book. */
    public Book removeLast() {
        if (head == null) throw new NoSuchElementException("List is empty");
        if (head.next == null) {
            Book out = head.data;
            head = null;
            size--;
            return out;
        }
        Node prev = null, cur = head;
        while (cur.next != null) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        size--;
        return cur.data;
    }
    /** Returns the book with given ISBN or null if not found. */
    public Book findByISBN(String isbn) {
        Node cur = head;
        while (cur != null) {
            if (cur.data.getIsbn().equals(isbn)) return cur.data;
            cur = cur.next;
        }
        return null;
    }
    /** Removes the first book with given ISBN. */
    public boolean removeByISBN(String isbn) {
        Node prev = null, cur = head;
        while (cur != null) {
            if (cur.data.getIsbn().equals(isbn)) {
                if (prev == null) head = cur.next; else prev.next = cur.next;
                size--;
                return true;
            }
            prev = cur;
            cur = cur.next;
        }
        return false;
    }
    /** Returns the book at index n (0-based). */
    public Book getNth(int n) {
        if (n < 0 || n >= size) throw new IndexOutOfBoundsException("Index: " + n);
        Node cur = head;
        for (int i = 0; i < n; i++) cur = cur.next;
        return cur.data;
    }
    /** Inserts at position pos (0-based). */
    public void insertAt(Book b, int pos) {
        if (pos < 0 || pos > size) throw new IndexOutOfBoundsException("Index: " + pos);
        if (pos == 0) { addFirst(b); return; }
        Node cur = head;
        for (int i = 0; i < pos - 1; i++) cur = cur.next;
        Node n = new Node(b);
        n.next = cur.next;
        cur.next = n;
        size++;
    }
    /** Reverses the list in-place. */
    public void reverse() {
        Node prev = null, cur = head;
        while (cur != null) {
            Node next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        head = prev;
    }
    /** Returns the oldest book (min year) or null if empty. */
    public Book getOldestBook() {
        if (head == null) return null;
        Node cur = head;
        Book best = cur.data;
        cur = cur.next;
        while (cur != null) {
            if (cur.data.getYear() < best.getYear()) best = cur.data;
            cur = cur.next;
        }
        return best;
    }
    /** Returns the newest book (max year) or null if empty. */
    public Book getNewestBook() {
        if (head == null) return null;
        Node cur = head;
        Book best = cur.data;
        cur = cur.next;
        while (cur != null) {
            if (cur.data.getYear() > best.getYear()) best = cur.data;
            cur = cur.next;
        }
        return best;
    }
    /** Case-insensitive comparator by title; nulls last. */
    private int cmpByTitle(Book a, Book b) {
        String ta = a == null ? null : a.getTitle();
        String tb = b == null ? null : b.getTitle();
        if (ta == null && tb == null) return 0;
        if (ta == null) return 1;
        if (tb == null) return -1;
        return ta.compareToIgnoreCase(tb);
    }
    /** Inserts book keeping the list in alphabetical order by title (case-insensitive). */
    public void insertAlphabetical(Book b) {
        Node n = new Node(b);
        if (head == null || cmpByTitle(b, head.data) <= 0) {
            n.next = head;
            head = n;
            size++;
            return;
        }
        Node cur = head;
        while (cur.next != null && cmpByTitle(cur.next.data, b) < 0) cur = cur.next;
        n.next = cur.next;
        cur.next = n;
        size++;
    }
    /** Sorts the entire list alphabetically by title using merge sort (stable, O(n log n)). */
    public void sortAlphabetical() {
        head = mergeSort(head);
    }
    private Node mergeSort(Node h) {
        if (h == null || h.next == null) return h;
        Node mid = splitMiddle(h);
        Node left = mergeSort(h);
        Node right = mergeSort(mid);
        return merge(left, right);
    }
    private Node splitMiddle(Node h) {
        Node slow = h, fast = h, prev = null;
        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev != null) prev.next = null;
        return slow;
    }
    private Node merge(Node a, Node b) {
        Node dummy = new Node(null);
        Node tail = dummy;
        while (a != null && b != null) {
            if (cmpByTitle(a.data, b.data) <= 0) { tail.next = a; a = a.next; }
            else { tail.next = b; b = b.next; }
            tail = tail.next;
        }
        tail.next = (a != null) ? a : b;
        // Recompute size since structure may change order but not length
        // (not strictly necessary here, as size is preserved)
        return dummy.next;
    }
    /** Prints all books with indices. */
    public void printAll() {
        Node cur = head;
        int i = 0;
        while (cur != null) {
            System.out.printf("[%d] %s%n", i, cur.data);
            cur = cur.next;
            i++;
        }
    }
}
```
## LibraryApp.java

```java
import java.util.Scanner;

public class LibraryApp {
    private static Scanner sc = new Scanner(System.in);

    private static int readInt(String prompt) {
        System.out.print(prompt);
        return sc.nextInt();
    }

    private static String readString(String prompt) {
        System.out.print(prompt);
        sc.nextLine(); // consume newline
        return sc.nextLine();
    }

    private static Book readBookFromInput() {
        String title = readString("Title: ");
        String author = readString("Author: ");
        int year = readInt("Year: ");
        String isbn = readString("ISBN: ");
        return new Book(title, author, year, isbn);
    }

    private static void printMenu() {
        System.out.println("==== Library Menu ====");
        System.out.println("1) Add first");
        System.out.println("2) Add last");
        System.out.println("3) Insert at position");
        System.out.println("4) Insert alphabetical (by title)");
        System.out.println("5) Remove first");
        System.out.println("6) Remove last");
        System.out.println("7) Remove by ISBN");
        System.out.println("8) Find by ISBN");
        System.out.println("9) Get Nth");
        System.out.println("10) Reverse list");
        System.out.println("11) Sort alphabetical (by title)");
        System.out.println("12) Oldest book");
        System.out.println("13) Newest book");
        System.out.println("14) Print all");
        System.out.println("15) Size");
        System.out.println("0) Exit");
    }

    // Seed data for quick testing
    private static void seed(BookList list) {
        list.addLast(new Book("Clean Code", "Robert C. Martin", 2008, "9780132350884"));
        list.addLast(new Book("The Pragmatic Programmer", "Andrew Hunt, David Thomas", 1999, "9780201616224"));
        list.addLast(new Book("Design Patterns", "Erich Gamma et al.", 1994, "9780201633610"));
        list.addLast(new Book("Refactoring", "Martin Fowler", 1999, "9780201485677"));
        list.addLast(new Book("Effective Java", "Joshua Bloch", 2018, "9780134685991"));
    }

    public static void main(String[] args) {
        BookList list = new BookList();

        // preload some books
        seed(list);

        while (true) {
            printMenu();
            int choice = readInt("Choice: ");
            switch (choice) {
                case 1: {
                    Book b = readBookFromInput();
                    list.addFirst(b);
                    break;
                }
                case 2: {
                    Book b = readBookFromInput();
                    list.addLast(b);
                    break;
                }
                case 3: {
                    Book b = readBookFromInput();
                    int pos = readInt("Position (0-based): ");
                    list.insertAt(b, pos);
                    break;
                }
                case 4: {
                    Book b = readBookFromInput();
                    list.insertAlphabetical(b);
                    break;
                }
                case 5: {
                    System.out.println("Removed: " + list.removeFirst());
                    break;
                }
                case 6: {
                    System.out.println("Removed: " + list.removeLast());
                    break;
                }
                case 7: {
                    String isbn = readString("ISBN to remove: ");
                    boolean ok = list.removeByISBN(isbn);
                    System.out.println(ok ? "Removed." : "Not found.");
                    break;
                }
                case 8: {
                    String isbn = readString("ISBN to find: ");
                    Book b = list.findByISBN(isbn);
                    System.out.println(b != null ? b : "Not found.");
                    break;
                }
                case 9: {
                    int n = readInt("Index (0-based): ");
                    System.out.println(list.getNth(n));
                    break;
                }
                case 10: {
                    list.reverse();
                    System.out.println("List reversed.");
                    break;
                }
                case 11: {
                    list.sortAlphabetical();
                    System.out.println("List sorted alphabetically.");
                    break;
                }
                case 12: {
                    System.out.println("Oldest: " + list.getOldestBook());
                    break;
                }
                case 13: {
                    System.out.println("Newest: " + list.getNewestBook());
                    break;
                }
                case 14: {
                    list.printAll();
                    break;
                }
                case 15: {
                    System.out.println("Size: " + list.size());
                    break;
                }
                case 0: {
                    System.out.println("Bye.");
                    return;
                }
                default: {
                    System.out.println("Unknown choice.");
                }
            }
            System.out.println();
        }
    }
}
```