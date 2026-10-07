## Functional Programming in JavaScript
Questo è un corso di apprendimento interattivo con esercizi da completare direttamente nel browser.Se vuoi semplicemente consultare i contenuti, puoi scegliere di mostrare tutte le risposte e leggere il materiale senza svolgere gli esercizi.
## Introduzione
Questa è una serie di esercizi interattivi per imparare la libreria Microsoft Reactive Extensions (Rx) per JavaScript.Perché allora il titolo è “Functional Programming in JavaScript”?Perché la chiave per imparare Rx è allenarsi a usare la programmazione funzionale per manipolare collezioni.La programmazione funzionale fornisce agli sviluppatori gli strumenti per astrarre le operazioni comuni sulle collezioni in blocchi riutilizzabili e componibili.Rimarrai sorpreso nello scoprire che la maggior parte delle operazioni che esegui sulle collezioni può essere realizzata con cinque semplici funzioni, alcune native di JavaScript e altre incluse nella libreria RxJS:
* map
* filter
* concatAll
* reduce
* zip
  Se impari queste cinque funzioni, il tuo codice diventerà più corto, più auto-descrittivo e più robusto.Inoltre, per ragioni che forse ora non sono ancora evidenti, scoprirai che queste cinque funzioni sono la chiave per semplificare la programmazione asincrona.Una volta completato questo tutorial, avrai anche tutti gli strumenti necessari per evitare facilmente le race condition, propagare e gestire errori asincroni e sequenziare eventi e richieste AJAX.In breve, queste cinque funzioni saranno probabilmente le più potenti, flessibili e utili che imparerai mai.
## Completare gli esercizi interattivi
Questo non è solo un tutorial, ma una serie di esercizi interattivi che puoi completare direttamente nel browser.Completare gli esercizi è semplice: basta modificare il codice e premere “Run”.Se il codice funziona, apparirà un nuovo esercizio più in basso.In caso contrario, verrà mostrato un errore.
Nota: usa il tasto F4 per attivare o disattivare la modalità a schermo intero per ciascun editor.
Questo tutorial potrebbe contenere dei bug.Se ti trovi in uno stato strano o sei sicuro di avere la risposta corretta ma non riesci ad andare avanti, aggiorna semplicemente la pagina.Se stai usando un browser moderno, e se sei qui lo stai probabilmente facendo, lo stato dei tuoi esercizi verrà salvato.Se vuoi, puoi anche riavviare il laboratorio.
Questo tutorial è su GitHub ed è in costante avvicinamento al completamento.Se vuoi aggiungere un esercizio, chiarire una descrizione o correggere un bug, sentiti libero di fare un fork e inviare una pull request.Cercheremo di integrare gli esercizi proposti dagli utenti in una narrazione coerente.
Le tue risposte verranno salvate nel local storage.Usa i pulsanti sottostanti se vuoi trasferirle su un’altra macchina.
## Working with Arrays
L’Array è l’unico tipo di collezione in JavaScript.Gli array sono ovunque.Aggiungeremo le cinque funzioni al tipo Array e, nel farlo, lo renderemo molto più potente e utile.In realtà Array possiede già le funzioni map, filter e reduce.Tuttavia le reimplementeremo come esercizio di apprendimento.
Questa sezione seguirà uno schema ricorrente.Prima risolveremo i problemi nel modo probabilmente insegnato a scuola o appreso leggendo il codice di altri, trasformando collezioni in nuove collezioni usando cicli e istruzioni.Successivamente implementeremo una delle cinque funzioni e la useremo per risolvere lo stesso problema senza usare cicli.Una volta imparate le cinque funzioni, vedrai come combinarle per risolvere problemi complessi con pochissimo codice.I primi due esercizi sono già completati, ma osserva attentamente le soluzioni.
## Traversing an Array
### Exercise 1: Print all the names in an array
```js
function (console) {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
      counter;
  for (counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}
```
Chiediti: era necessario specificare l’ordine in cui i nomi venivano stampati?Se no, perché farlo?
### Exercise 2: Use forEach to print all the names in an array
Ripetiamo l’esercizio precedente usando la funzione forEach.
```js
function (console) {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
  names.forEach(function (name) {
    console.log(name);
  });
}
```
Nota come forEach ci permetta di specificare cosa deve accadere a ciascun elemento dell’array, nascondendo però il modo in cui l’array viene attraversato.
## Projecting Arrays
Applicare una funzione a un valore e creare un nuovo valore si chiama proiezione.Per proiettare un array in un altro array, applichiamo una funzione di proiezione a ciascun elemento dell’array e raccogliamo i risultati in un nuovo array.
### Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach
Per ogni video, aggiungi una coppia proiettata {id, title} all’array videoAndTitlePairs.
```js
function () {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ],
  videoAndTitlePairs = [];
  newReleases.forEach(function (video) {
    videoAndTitlePairs.push({ id: video.id, title: video.title });
  });
}
```
Tutte le proiezioni di array condividono due operazioni comuni:
* attraversare l’array sorgente
* aggiungere il valore proiettato di ciascun elemento a un nuovo array
  Perché non astrarre il modo in cui queste operazioni vengono eseguite?
### Exercise 4: Implement map
Per rendere le proiezioni più semplici, aggiungiamo una funzione map al tipo Array.map accetta una funzione di proiezione da applicare a ciascun elemento dell’array sorgente e restituisce l’array proiettato.
```js
Array.prototype.map = function (projectionFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    results.push(projectionFunction(itemInArray));
  });
  return results;
};
```
```js
// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === "[2,3,4]"
```
### Exercise 5: Use map to project an array of videos into an array of {id,title} pairs
Ripetiamo l’esercizio di raccolta delle coppie {id, title} per ogni video nell’array newReleases, questa volta usando la funzione map.
```js
function () {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];
  return newReleases.map(function (video) {
    return { id: video.id, title: video.title };
  });
}
```
Nota come map ci permetta di specificare quale proiezione vogliamo applicare a un array, nascondendo completamente il modo in cui l’operazione viene eseguita.
## Filtering Arrays
Come la proiezione, anche il filtraggio di un array è un’operazione molto comune.Per filtrare un array applichiamo un test a ciascun elemento e raccogliamo in un nuovo array solo quelli che superano il test.
### Exercise 6: Use forEach to collect only those videos with a rating of 5.0
Usa forEach per scorrere i video nell’array newReleases e, se un video ha rating pari a 5.0, aggiungilo all’array videos.
```js
function () {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ],
  videos = [];
  newReleases.forEach(function (video) {
    if (video.rating === 5.0) {
      videos.push(video);
    }
  });
}
```
Nota che, come map, ogni operazione di filter condivide alcune operazioni comuni:
* attraversare l’array
* aggiungere a un nuovo array gli oggetti che superano il test
  Perché non astrarre anche queste operazioni?
### Exercise 7: Implement filter
Per rendere il filtraggio più semplice, aggiungiamo una funzione filter al tipo Array.La funzione filter accetta un predicato, cioè una funzione che riceve un elemento dell’array e restituisce un booleano che indica se l’elemento deve essere mantenuto nel nuovo array.
```js
Array.prototype.filter = function (predicateFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });
  return results;
};
```
```js
// JSON.stringify([1,2,3].filter(function(x){ return x > 2; })) === "[3]"
```
Come map, filter ci permette di esprimere quali dati vogliamo, senza specificare come raccoglierli.
## Query Data by Chaining Method Calls
### Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
```js
function () {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];
  return newReleases
    .filter(function (video) {
      return video.rating === 5.0;
    })
    .map(function (video) {
      return video.id;
    });
}
```
Concatenare map e filter ci dà un enorme potere espressivo.Queste funzioni di alto livello ci permettono di esprimere quali dati vogliamo, lasciando alle librerie la libertà di decidere come eseguire le query.
## Querying Trees
A volte, oltre ad array piatti, dobbiamo interrogare strutture ad albero.Gli alberi pongono una sfida perché devono essere “appiattiti” in array prima di poter applicare operazioni come filter e map.In questa sezione definiremo una funzione concatAll che potrà essere combinata con map e filter per interrogare alberi.
### Exercise 9: Flatten the movieLists array into an array of video ids
Iniziamo usando due cicli forEach annidati per raccogliere l’id di ogni video nell’array bidimensionale movieLists.
```js
function () {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ];
  var videoIds = [];
  movieLists.forEach(function (list) {
    list.videos.forEach(function (video) {
      videoIds.push(video.id);
    });
  });
  return videoIds;
}
```
Appiattire alberi con forEach annidati è semplice perché possiamo aggiungere esplicitamente elementi a un array.Purtroppo è proprio questo tipo di operazione di basso livello che stiamo cercando di astrarre con funzioni come map e filter.
### Exercise 10: Implement concatAll
Aggiungiamo una funzione concatAll al tipo Array.La funzione concatAll itera su ciascun sotto-array e raccoglie i risultati in un nuovo array piatto.Nota che concatAll si aspetta che ogni elemento dell’array sia a sua volta un array.
```js
Array.prototype.concatAll = function () {
  var results = [];
  this.forEach(function (subArray) {
    results.push.apply(results, subArray);
  });
  return results;
};
```
```js
// JSON.stringify([[1,2,3],[4,5,6],[7,8,9]].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
```
concatAll è una funzione molto semplice, e inizialmente potrebbe non essere evidente come combinarla con map per interrogare un albero.
### Exercise 11: Use map and concatAll to project and flatten the movieLists into an array of video ids
Suggerimento: usa due chiamate annidate a map e una chiamata a concatAll.
```js
function () {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ];
  return movieLists
    .map(function (list) {
      return list.videos.map(function (video) {
        return video.id;
      });
    })
    .concatAll();
}
```
Ottimo lavoro. Mettere insieme map e concatAll è fondamentale per la programmazione funzionale efficace.
## Projecting and Flattening Deeper Trees
Ora che sappiamo usare map e concatAll insieme, possiamo affrontare alberi più profondi.
### Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
In questo esercizio ogni video contiene una collezione di boxart con dimensioni diverse.Dobbiamo selezionare, per ogni video, il boxart con dimensioni 150x200 e restituire un oggetto {id, title, boxart}.
Non è consentito usare indicizzazioni di array.
```js
function () {
  var movieLists = [
    {
      name: "Instant Queue",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ];
  return movieLists
    .map(function (list) {
      return list.videos.map(function (video) {
        return video.boxarts
          .filter(function (boxart) {
            return boxart.width === 150 && boxart.height === 200;
          })
          .map(function (boxart) {
            return {
              id: video.id,
              title: video.title,
              boxart: boxart.url
            };
          });
      })
      .concatAll();
    })
    .concatAll();
}
```
Ottimo risultato.Abbiamo interrogato un albero profondo tre livelli combinando map, filter e concatAll.
## concatMap
Spesso concateniamo map e concatAll insieme.Per ridurre la verbosità del codice, creiamo una funzione di supporto.
### Exercise 13: Implement concatMap
concatMap è semplicemente una map seguita da concatAll.
```js
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this
    .map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    })
    .concatAll();
};
```
```js
/*
var spanishFrenchEnglishWords = [
  ["cero","rien","zero"],
  ["uno","un","one"],
  ["dos","deux","two"]
];
var allWords =
  [0,1,2].concatMap(function (index) {
    return spanishFrenchEnglishWords[index];
  });
// ["cero","rien","zero","uno","un","one","dos","deux","two"]
*/
```
### Exercise 14: Use concatMap to retrieve id, title, and 150x200 box art url for every video
Ripetiamo l’esercizio precedente usando concatMap.
```js
function () {
  var movieLists = [
    {
      name: "Instant Queue",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "rating": 4.0
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
          ],
          "rating": 5.0
        }
      ]
    }
  ];
  return movieLists.concatMap(function (list) {
    return list.videos.concatMap(function (video) {
      return video.boxarts
        .filter(function (boxart) {
          return boxart.width === 150 && boxart.height === 200;
        })
        .map(function (boxart) {
          return {
            id: video.id,
            title: video.title,
            boxart: boxart.url
          };
        });
    });
  });
}
```
È molto comune vedere più concatMap annidati con un map finale. Questo pattern è l’equivalente funzionale di più forEach annidati.
## Projecting and Flattening Deeper Trees
Ora che sappiamo usare map e concatAll insieme, possiamo affrontare alberi più profondi.
### Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
In questo esercizio ogni video contiene una collezione di boxart con dimensioni diverse.Dobbiamo selezionare, per ogni video, il boxart con dimensioni 150x200 e restituire un oggetto {id, title, boxart}.
Non è consentito usare indicizzazioni di array.
```js
function () {
  var movieLists = [
    {
      name: "Instant Queue",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ];
  return movieLists
    .map(function (list) {
      return list.videos.map(function (video) {
        return video.boxarts
          .filter(function (boxart) {
            return boxart.width === 150 && boxart.height === 200;
          })
          .map(function (boxart) {
            return {
              id: video.id,
              title: video.title,
              boxart: boxart.url
            };
          });
      })
      .concatAll();
    })
    .concatAll();
}
```
Ottimo risultato.Abbiamo interrogato un albero profondo tre livelli combinando map, filter e concatAll.
## concatMap
Spesso concateniamo map e concatAll insieme.Per ridurre la verbosità del codice, creiamo una funzione di supporto.
### Exercise 13: Implement concatMap
concatMap è semplicemente una map seguita da concatAll.
```js
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this
    .map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    })
    .concatAll();
};
```
```js
/*
var spanishFrenchEnglishWords = [
  ["cero","rien","zero"],
  ["uno","un","one"],
  ["dos","deux","two"]
];
var allWords =
  [0,1,2].concatMap(function (index) {
    return spanishFrenchEnglishWords[index];
  });
// ["cero","rien","zero","uno","un","one","dos","deux","two"]
*/
```
### Exercise 14: Use concatMap to retrieve id, title, and 150x200 box art url for every video
Ripetiamo l’esercizio precedente usando concatMap.
```js
function () {
  var movieLists = [
    {
      name: "Instant Queue",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "rating": 4.0
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
          ],
          "rating": 5.0
        }
      ]
    }
  ];
  return movieLists.concatMap(function (list) {
    return list.videos.concatMap(function (video) {
      return video.boxarts
        .filter(function (boxart) {
          return boxart.width === 150 && boxart.height === 200;
        })
        .map(function (boxart) {
          return {
            id: video.id,
            title: video.title,
            boxart: boxart.url
          };
        });
    });
  });
}
```
È molto comune vedere più concatMap annidati con un map finale.Questo pattern è l’equivalente funzionale di più forEach annidati.
## Reducing Arrays
A volte dobbiamo eseguire un’operazione che coinvolge più elementi dell’array contemporaneamente.Un esempio classico è trovare il valore massimo.Non possiamo usare filter perché confronta un elemento alla volta: serve confrontare gli elementi tra loro.Questo processo si chiama riduzione, perché riduciamo molti valori a uno solo.
### Exercise 15: Use forEach to find the largest box art
```js
function () {
  var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ],
  currentSize,
  maxSize = -1,
  largestBoxart;
  boxarts.forEach(function (boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });
  return largestBoxart;
}
```
### Exercise 16: Implement reduce
Questa implementazione è diversa dalla reduce standard di ES5, perché restituisce un array contenente il valore ridotto.
```js
Array.prototype.reduce = function (combiner, initialValue) {
  var counter,
      accumulatedValue;
  if (this.length === 0) {
    return this;
  }
  if (arguments.length === 1) {
    counter = 1;
    accumulatedValue = this[0];
  } else if (arguments.length === 2) {
    counter = 0;
    accumulatedValue = initialValue;
  } else {
    throw "Invalid arguments.";
  }
  while (counter < this.length) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
    counter++;
  }
  return [accumulatedValue];
};
```
### Exercise 17: Retrieve the largest rating
```js
function () {
  var ratings = [2, 3, 1, 4, 5];
  return ratings.reduce(function (acc, curr) {
    return acc > curr ? acc : curr;
  });
}
```
### Exercise 18: Retrieve url of the largest boxart
```js
function () {
  var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];
  return boxarts
    .reduce(function (acc, curr) {
      return acc.width * acc.height > curr.width * curr.height ? acc : curr;
    })
    .map(function (boxart) {
      return boxart.url;
    });
}
```
### Exercise 19: Reducing with an initial value
```js
function () {
  var videos = [
    { "id": 65432445, "title": "The Chamber" },
    { "id": 675465, "title": "Fracture" },
    { "id": 70111470, "title": "Die Hard" },
    { "id": 654356453, "title": "Bad Boys" }
  ];
  return videos.reduce(function (accumulatedMap, video) {
    var obj = {};
    obj[video.id] = video.title;
    return Object.assign(accumulatedMap, obj);
  }, {});
}
```
### Exercise 20: Retrieve the id, title, and smallest box art url for every video
```js
function () {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ]
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
          ]
        }
      ]
    }
  ];
  return movieLists.concatMap(function (list) {
    return list.videos.map(function (video) {
      var smallestBoxart =
        video.boxarts.reduce(function (acc, curr) {
          return acc.width * acc.height < curr.width * curr.height ? acc : curr;
        });
      return {
        id: video.id,
        title: video.title,
        boxart: smallestBoxart[0].url
      };
    });
  });
}
```
## Zipping Arrays
A volte dobbiamo combinare due array prendendo progressivamente un elemento da ciascuno e combinando la coppia risultante.È il funzionamento di una zip: ogni “dente” è formato da un elemento di ciascun array.
### Exercise 21: Combine videos and bookmarks by index
Usiamo un ciclo for per attraversare contemporaneamente gli array videos e bookmarks.Per ogni coppia creiamo un oggetto {videoId, bookmarkId}.
```js
function () {
  var videos = [
    { "id": 70111470, "title": "Die Hard" },
    { "id": 654356453, "title": "Bad Boys" },
    { "id": 65432445, "title": "The Chamber" },
    { "id": 675465, "title": "Fracture" }
  ],
  bookmarks = [
    { id: 470, time: 23432 },
    { id: 453, time: 234324 },
    { id: 445, time: 987834 }
  ],
  videoIdAndBookmarkIdPairs = [];
  for (var i = 0; i < Math.min(videos.length, bookmarks.length); i++) {
    videoIdAndBookmarkIdPairs.push({
      videoId: videos[i].id,
      bookmarkId: bookmarks[i].id
    });
  }
  return videoIdAndBookmarkIdPairs;
}
```
### Exercise 22: Implement zip
Aggiungiamo una funzione statica zip al tipo Array.zip attraversa due array in parallelo e applica una funzione combinatrice.
```js
Array.zip = function (left, right, combinerFunction) {
  var results = [];
  for (var i = 0; i < Math.min(left.length, right.length); i++) {
    results.push(combinerFunction(left[i], right[i]));
  }
  return results;
};
```
```js
// JSON.stringify(Array.zip([1,2,3],[4,5,6],function(l,r){return l+r;})) === "[5,7,9]"
```
### Exercise 23: Combine videos and bookmarks using zip
```js
function () {
  var videos = [
    { "id": 70111470, "title": "Die Hard" },
    { "id": 654356453, "title": "Bad Boys" },
    { "id": 65432445, "title": "The Chamber" },
    { "id": 675465, "title": "Fracture" }
  ],
  bookmarks = [
    { id: 470, time: 23432 },
    { id: 453, time: 234324 },
    { id: 445, time: 987834 }
  ];
  return Array.zip(videos, bookmarks, function (video, bookmark) {
    return {
      videoId: video.id,
      bookmarkId: bookmark.id
    };
  });
}
```
### Exercise 24: Retrieve id, title, middle interesting moment time, and smallest box art url
```js
function () {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "interestingMoments": [
            { type: "End", time: 213432 },
            { type: "Start", time: 64534 },
            { type: "Middle", time: 323133 }
          ]
        }
      ]
    }
  ];
  return movieLists.concatMap(function (list) {
    return list.videos.map(function (video) {
      var smallestBoxart =
        video.boxarts.reduce(function (acc, curr) {
          return acc.width * acc.height < curr.width * curr.height ? acc : curr;
        })[0];
      var middleMoment =
        video.interestingMoments.filter(function (m) {
          return m.type === "Middle";
        })[0];
      return {
        id: video.id,
        title: video.title,
        time: middleMoment.time,
        url: smallestBoxart.url
      };
    });
  });
}
```
## Powerful Queries
Ora che conosciamo le cinque funzioni, possiamo usarle per costruire query molto potenti su strutture complesse.
## Powerful Queries
Ora che abbiamo imparato le cinque funzioni fondamentali, possiamo usarle per scrivere query molto potenti.
### Exercise 25: Converting from Arrays to Trees
In questo esercizio partiamo da due array: uno di liste e uno di video.Ogni video contiene un listId che indica a quale lista appartiene.Dobbiamo costruire una struttura ad albero in cui ogni lista contiene i propri video.
```js
function () {
  var lists = [
    { "id": 5434364, "name": "New Releases" },
    { "id": 65456475, "name": "Thrillers" }
  ],
  videos = [
    { "listId": 5434364, "id": 65432445, "title": "The Chamber" },
    { "listId": 5434364, "id": 675465, "title": "Fracture" },
    { "listId": 65456475, "id": 70111470, "title": "Die Hard" },
    { "listId": 65456475, "id": 654356453, "title": "Bad Boys" }
  ];
  return lists.map(function (list) {
    return {
      name: list.name,
      videos:
        videos
          .filter(function (video) {
            return video.listId === list.id;
          })
          .map(function (video) {
            return {
              id: video.id,
              title: video.title
            };
          })
    };
  });
}
```
### Exercise 26: Converting from Arrays to Deeper Trees
Qui partiamo da quattro array: liste, video, boxart e bookmark.Dobbiamo costruire una struttura ad albero profonda che includa anche il bookmark e il boxart più piccolo.
```js
function () {
  var lists = [
    { "id": 5434364, "name": "New Releases" },
    { "id": 65456475, "name": "Thrillers" }
  ],
  videos = [
    { "listId": 5434364, "id": 65432445, "title": "The Chamber" },
    { "listId": 5434364, "id": 675465, "title": "Fracture" },
    { "listId": 65456475, "id": 70111470, "title": "Die Hard" },
    { "listId": 65456475, "id": 654356453, "title": "Bad Boys" }
  ],
  boxarts = [
    { videoId: 65432445, width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    { videoId: 65432445, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
    { videoId: 675465, width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { videoId: 675465, width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    { videoId: 70111470, width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  ],
  bookmarks = [
    { videoId: 65432445, time: 32432 },
    { videoId: 675465, time: 3534543 },
    { videoId: 70111470, time: 645243 },
    { videoId: 654356453, time: 984934 }
  ];
  return lists.map(function (list) {
    return {
      name: list.name,
      videos:
        videos
          .filter(function (video) {
            return video.listId === list.id;
          })
          .map(function (video) {
            var smallestBoxart =
              boxarts
                .filter(function (b) {
                  return b.videoId === video.id;
                })
                .reduce(function (acc, curr) {
                  return acc.width * acc.height < curr.width * curr.height ? acc : curr;
                })[0];
            var bookmark =
              bookmarks.filter(function (b) {
                return b.videoId === video.id;
              })[0];
            return {
              id: video.id,
              title: video.title,
              time: bookmark.time,
              boxart: smallestBoxart.url
            };
          })
    };
  });
}
```
Questo tipo di query sarebbe estremamente verboso con cicli annidati.Con le cinque funzioni il codice resta compatto e auto-descrittivo.
## Stock Ticker
### Exercise 27: Stock Ticker
Filtriamo una collezione di prezzi NASDAQ per mostrare solo quelli di Microsoft negli ultimi dieci giorni.
```js
function (pricesNASDAQ, printRecord) {
  var now = new Date();
  var tenDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);
  pricesNASDAQ
    .filter(function (priceRecord) {
      return priceRecord.name === "MSFT" && priceRecord.timeStamp > tenDaysAgo;
    })
    .forEach(function (priceRecord) {
      printRecord(priceRecord);
    });
}
```
Da qui in poi il corso introduce un nuovo tipo di collezione reattiva, gli Observable, che permettono di lavorare con dati asincroni come eventi e richieste HTTP usando esattamente le stesse funzioni viste finora.
## Working with Observables
La libreria Reactive Extensions introduce un nuovo tipo di collezione in JavaScript: l’Observable.Un Observable è simile a un Event, ma con una differenza fondamentale: può notificare il completamento e può propagare errori.Come gli array, anche gli Observable rappresentano una sequenza di valori, ma a differenza degli array i valori possono arrivare nel tempo e in modo asincrono.
Gli Observable permettono di modellare eventi, richieste asincrone, stream di dati continui e molto altro, mantenendo lo stesso modello di programmazione usato finora con map, filter, reduce, concatAll e zip.
## Events vs Observables
Un Event tradizionale è una sequenza di valori potenzialmente infinita che non completa mai.Un Observable invece può:
* emettere valori
* segnalare un errore
* segnalare il completamento
  Questa differenza rende possibile scrivere codice asincrono più sicuro, leggibile e privo di memory leak.
## Exercise 28: Subscribing to an event
In questo esempio ci iscriviamo a un evento di click su un bottone e ci disiscriviamo dopo il primo click.
```js
function (button) {
  var handler = function (ev) {
    button.removeEventListener("click", handler);
    alert("Il bottone è stato cliccato. Disiscrizione dall’evento.");
  };
  button.addEventListener("click", handler);
}
```
## Exercise 29: Traversing an Event
Convertiamo un evento in un Observable e lo attraversiamo come se fosse una collezione.
```js
function (button) {
  var buttonClicks = Observable.fromEvent(button, "click");
  var subscription =
    buttonClicks
      .do(function () {
        alert("Bottone cliccato. Arresto della traversata.");
        subscription.unsubscribe();
      })
      .subscribe();
}
```
La differenza principale rispetto agli array è che la traversata è asincrona e potenzialmente infinita.La disiscrizione è l’equivalente asincrono di interrompere un ciclo for.
## Completing Sequences
Gli Observable basati su eventi non completano mai spontaneamente.Per evitare memory leak è fondamentale forzare il completamento della sequenza.
## Exercise 30: Completing sequences with take
La funzione take crea una nuova sequenza che completa dopo un numero finito di valori.
```js
function (button) {
  var buttonClicks = Observable.fromEvent(button, "click");
  buttonClicks
    .take(1)
    .forEach(function () {
      alert("Bottone cliccato una sola volta. Sequenza completata.");
    });
}
```
In questo modo non è necessario disiscriversi manualmente.
## Exercise 31: Completing sequences with takeUntil
takeUntil completa una sequenza quando un’altra sequenza emette un valore.
```js
function (pricesNASDAQ, printRecord, stopButton) {
  var stopButtonClicks = Observable.fromEvent(stopButton, "click");
  var microsoftPrices =
    pricesNASDAQ
      .filter(function (priceRecord) {
        return priceRecord.name === "MSFT";
      })
      .takeUntil(stopButtonClicks);
  microsoftPrices.forEach(function (priceRecord) {
    printRecord(priceRecord);
  });
}
```
Grazie a take e takeUntil, la gestione della memoria e delle disiscrizioni diventa implicita e sicura.
## Riepilogo
* Gli Observable possono essere attraversati con forEach
* fromEvent converte eventi in Observable che non completano
* take e takeUntil permettono di completare le sequenze
* Completare una sequenza equivale a disiscrivere automaticamente tutti i listener
## Querying Observables
La differenza tra interrogare un Array e interrogare un Observable non sta nelle funzioni usate, ma nella direzione del flusso dei dati.Gli array vengono “tirati” dal consumatore, gli Observable “spingono” i dati al consumatore.Le trasformazioni però sono identiche.
```js
[1,2,3].map(function(x){ return x + 1; })           // [2,3,4]
seq([1,,,2,,,3]).map(function(x){ return x + 1; })  // seq([2,,,3,,,4])
```
Lo stesso vale per filter, concatAll, reduce, zip, take e takeUntil.
## Exercise 32: Creating a mouse drag event
Creiamo un evento di trascinamento del mouse combinando mouseDown, mouseMove e mouseUp.
```js
function (sprite, spriteContainer) {
  var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown");
  var spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove");
  var spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup");
  var spriteMouseDrags =
    spriteMouseDowns.concatMap(function () {
      return spriteContainerMouseMoves.takeUntil(spriteContainerMouseUps);
    });
  spriteMouseDrags.forEach(function (dragPoint) {
    sprite.style.left = dragPoint.pageX + "px";
    sprite.style.top = dragPoint.pageY + "px";
  });
}
```
## Exercise 33: Improving the mouse drag event
Aggiungiamo l’offset per rendere il trascinamento più naturale.
```js
function (sprite, spriteContainer) {
  var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown");
  var spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove");
  var spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup");
  var spriteMouseDrags =
    spriteMouseDowns.concatMap(function (contactPoint) {
      return spriteContainerMouseMoves
        .takeUntil(spriteContainerMouseUps)
        .map(function (movePoint) {
          return {
            pageX: movePoint.pageX - contactPoint.layerX,
            pageY: movePoint.pageY - contactPoint.layerY
          };
        });
    });
  spriteMouseDrags.forEach(function (dragPoint) {
    sprite.style.left = dragPoint.pageX + "px";
    sprite.style.top = dragPoint.pageY + "px";
  });
}
```
## HTTP Requests
Gli eventi non sono l’unica fonte di dati asincroni.Anche le richieste HTTP producono valori asincroni.
## Exercise 34: HTTP requests with callbacks
```js
function ($) {
  $.getJSON(
    "http://api-global.netflix.com/queue",
    {
      success: function () {
        alert("Dati ricevuti.");
      },
      error: function () {
        alert("Errore di rete.");
      }
    }
  );
}
```
## Exercise 36: Traversing callback-based APIs
Convertiamo una API a callback in un Observable usando Observable.create.
```js
function ($) {
  var getJSON = function (url) {
    return Observable.create(function (observer) {
      var subscribed = true;
      $.getJSON(url, {
        success: function (data) {
          if (subscribed) {
            observer.next(data);
            observer.complete();
          }
        },
        error: function (err) {
          if (subscribed) {
            observer.error(err);
          }
        }
      });
      return function () {
        subscribed = false;
      };
    });
  };
  getJSON("http://api-global.netflix.com/abTestInformation")
    .forEach(function (data) {
      alert(JSON.stringify(data));
    });
}
```
Gli Observable permettono propagazione degli errori, completamento e cancellazione, come nel codice sincrono.
## Exercise 37: Sequencing HTTP requests with Observable
```js
function (window, getJSON, showMovieLists, showError) {
  var movieListsSequence =
    Observable.zip(
      getJSON("http://api-global.netflix.com/abTestInformation")
        .concatMap(function (abTestInformation) {
          return Observable.zip(
            getJSON("http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists"),
            Observable.fromEvent(window, "load"),
            function (movieLists) {
              return movieLists.list;
            }
          );
        })
    );
  movieListsSequence.forEach(
    function (movieLists) {
      showMovieLists(movieLists);
    },
    function (err) {
      showError(err);
    }
  );
}
```
## Throttling and Autocomplete
## Exercise 38: Throttle Input
```js
function (clicks, saveData, name) {
  return clicks
    .throttleTime(1000)
    .concatMap(function () {
      return saveData(name);
    });
}
```
## Exercise 39: Autocomplete Box
```js
function (getSearchResultSet, keyPresses, textBox) {
  return keyPresses
    .map(function () {
      return textBox.value;
    })
    .throttleTime(1000)
    .concatMap(function (text) {
      return getSearchResultSet(text).takeUntil(keyPresses);
    });
}
```
## Exercise 40: Distinct Until Changed
```js
function (keyPresses, isAlpha) {
  return keyPresses
    .map(function (e) { return String.fromCharCode(e.keyCode); })
    .filter(function (c) { return isAlpha(c); })
    .distinctUntilChanged()
    .scan(function (acc, c) {
      return acc + c;
    }, "");
}
```
## Exercise 41: Autocomplete Box – Versione corretta
```js
function (getSearchResultSet, keyPresses, textBox) {
  return keyPresses
    .map(function () {
      return textBox.value;
    })
    .throttleTime(1000)
    .distinctUntilChanged()
    .filter(function (s) { return s.length > 0; })
    .concatMap(function (text) {
      return getSearchResultSet(text).takeUntil(keyPresses);
    });
}
```
## Conclusione
Evitando l’uso di indici e utilizzando sempre le cinque funzioni fondamentali, otteniamo un modello di programmazione unificato per dati sincroni e asincroni.Questo rende banale passare da array a eventi, stream e richieste HTTP, mantenendo codice compatto, espressivo e sicuro.
