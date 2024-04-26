# Progetto Ecommerce_fine_corso

# Sviluppatori:

Federico Massimino e Bruno Rodrigues Silva

# Descrizione:

Il progetto è ancora in corso e fa parte da un'esercitazione assegnataci come conclusione di un corso
di programmazione sviluppo lato Back-End, pertanto tutta la parte di sviluppo Front-End
non è ancora disponibile e non siamo ancora certi che verrà implementata.

l'assegnazione dell'esercitazione mirava a farci utilizzare tutta la conoscenza che abbiamo accumulato negli ultimi mesi. Il compito era quello di creare un E-COMMERCE collegato ad un database esterno e gestito da un server in grado di fare delle chiamate API di tipo RESTful (POST, GET, PUT, DELETE), in modo tale da poter andare a fare delle operazioni di visualizzazione, creazione, modifica ed eliminazione degli elementi saltavi all'interno del database.

Il database che abbiamo utilizzato è MongoDB quindi NoSQL.

All'attuale fase di sviluppo, non essenso stato implementato in maniera dettagliata potrebbe essere considerato un ecommerce embrionale che quindi può servire da base per quasi qualsiasi tipo di implementazione. Spero possa essere utile anche per chiunque altro si stia avvicinando al mondo della programmazione come spunto per imparare.

https://github.com/GimbeiNa89/Ecommerce_ITA_BRA.git

# Per avviare il progetto:

Per avviare il progetto bisogna installare node.js
(Installiamo node.js come descritto qui: https://nodejs.org/en/#download).

# Avviamo node:

1. Assicurati di essere nella directory del progetto contenente il file package.json.

2. Apri il terminale o la finestra del prompt dei comandi.

3. Esegui il comando npm init:
   Segui le istruzioni interattive per apportare le modifiche desiderate alle informazioni nel file package.json. Puoi inserire nuovi valori o modificare quelli esistenti.

Alla fine del processo, npm ti chiederà di confermare le impostazioni. Se sei soddisfatto delle modifiche, conferma e il file package.json verrà aggiornato con le nuove informazioni.

# Installiamo le dipendenze scrivendo sul terminale:

$ npm install
express
nodemon
ts-node
jsonwebtoken
mongodb
dotenv

$ npm i --save-dev
@types/express
@types/bcrypt,
@types/express,
@types/jsonwebtoken,
@types/uuid
@types/mongoose

# Tecnologie Utilizzate:

Node.js: Utilizzato per lo sviluppo del backend.
Express.js: Utilizzato per la creazione di un'applicazione web robusta e scalabile.
MongoDB: Utilizzato per la memorizzazione dei dati dei prodotti, degli utenti e degli ordini.
JWT (JSON Web Tokens): Utilizzato per l'autenticazione e l'autorizzazione degli utenti.
API RESTful: Progettate e implementate per consentire l'accesso alle funzionalità del backend da parte di client esterni, come un'applicazione web frontend o un'app mobile.
Git: Utilizzato per il controllo della versione del codice.

# \*\*\*

questi 3 asterischi significano che:
o in quella chiamata o nell'intera route, c'è qualcosa di non funzionante
o ha qualche mancanza a livello di sicurezza.

# API di autenticazione:

POST /api/auth/register: Permette agli utenti generici di registrarsi fornendo le informazioni necessarie come nome, email e password.
POST /api/auth/admin/register: Permette agli utenti admin di registrarsi fornendo le informazioni necessarie come nome, email e password. ***
POST /api/auth/login: Consente agli utenti di effettuare l'accesso utilizzando le proprie credenziali.
GET /api/auth/logout: Permette agli utenti di disconnettersi. _**
GET /api/auth/user: Restituisce le informazioni dell'utente attualmente autenticato (generico o Admin).

# API per la gestione dei prodotti:

GET /api/products: Restituisce l'elenco completo dei prodotti disponibili nel catalogo
GET /api/products/:id: Restituisce i dettagli di un singolo prodotto identificato dal suo ID.
POST /api/products: Permette agli utenti Admin di aggiungere un nuovo prodotto al catalogo.
PUT /api/products/:id: Consente agli utenti Admin di modificare le informazioni di un prodotto esistente.
DELETE /api/products/:id: Permette agli utenti Admin di eliminare un prodotto dal catalogo.

# API per la gestione del carrello:

GET /api/cart: Restituisce il contenuto attuale del carrello dell'utente.
POST /api/cart/add/:id: Aggiunge un prodotto al carrello dell'utente.
DELETE /api/cart/remove/:id: Rimuove un prodotto dal carrello dell'utente. **_
DELETE /api/cart/clear: Svuota il carrello dell'utente. _**

# API degli Ordini: \*\*\*

GET /api/orders: Restituisce lo storico degli ordini dell'utente. Opzionale: implementato un sistema di paginazione per migliorare le performance dell’API.
POST /api/orders: Permette agli utenti di creare un nuovo ordine a partire dai prodotti presenti attualmente nel carrello, con l’aggiunta dei dati di spedizione necessari.
GET /api/orders/:id: Restituisce i dettagli di un singolo ordine identificato dal suo ID.
PUT /api/orders/:id: Consente agli amministratori di aggiornare lo stato di un ordine esistente.
DELETE /api/orders/:id: Permette agli amministratori di cancellare un ordine. Suggerimento: modificare lo stato dell’ordine.

# NOTE

..da completare

GRAZIE GIANFRANCO E ALINA PER I CONSIGLI, PAZIENZA E LA SERIETà. è STATO UN PIACERE!
