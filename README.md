# Progetto Ecommerce_fine_corso

# Sviluppatori:

Federico Massimino e Bruno Rodrigues Silva

# Descrizione:

Il progetto è ancora in corso e fa parte da un'esercitazione assegnataci come conclusione di un corso
di programmazione sviluppo lato Back-End, pertanto tutta la parte di sviluppo Front-End
non è ancora disponibile e non siamo ancora certi che verrà implementata.

l'assegnazione dell'esercitazione mirava a farci utilizzare tutta la conoscenza che abbiamo accumulato negli ultimi mesi. Il compito era quello di creare un E-COMMERCE collegato ad un database esterno e gestito da un server in grado di fare delle chiamate API di tipo RESTful (POST, GET, PUT, DELETE), in modo tale da poter andare a fare delle operazioni di visualizzazione, creazione, modifica ed eliminazione degli elementi saltavi all'interno del database.

Il database che abbiamo utilizzato è MongoDB quindi NoSQL.

All'attuale fase di sviluppo, non essenso ancora stato implementato in maniera dettagliata, potrebbe essere considerato un ecommerce embrionale che quindi può servire da base per quasi qualsiasi tipo di implementazione. Spero possa essere utile anche per chiunque altro si stia avvicinando al mondo della programmazione come spunto per imparare.

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

# Installiamo le dependencies e le dev dependencies scrivendo sul terminale:

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

da implementare ancora sicuramente dot.env per la sicurezza dei dati sensibili.

# Tecnologie e linguaggio Utilizzato:

TypeScript
Node.js
Express.js
MongoDB
JWT (JSON Web Tokens)
API RESTful
Git

# NOTE SULLO STATO DEL PROGETTO:

- MANCANZA DEL MIDDLEWARE PER CONTROLLARE IL RUOLO E L'ACCESSO AGLI POINT.
- IL CART E LA SUA GESTIONE SONO STATE IMPLEMENTATE IN PARTE MA MANCANO DUE CONTROLLI DI TIPO DELETE DA IMPLEMENTARE. 
- ORDINI NON IMPLEMENTATI E NON TESTATI.
- INOLTRE ESSENDO UN PROGETTO A CUI LAVORIAMO TUTTORA, NON è STATA FATTA UNA REVISIONE DI PULIZIA DEL CODICE, PER CUI 
SI POTREBBERO TROVARE DELLE RIPETIZIONI NEL CODICE O FUNZIONI INUTILIZZATE.

# API di autenticazione:

- POST /api/auth/register: Permette agli utenti generici di registrarsi fornendo le informazioni necessarie come nome, email e password. COMPLETO
- POST /api/auth/admin/register: Permette agli utenti admin di registrarsi fornendo le informazioni necessarie come nome, email e password.
- POST /api/auth/login: Consente agli utenti di effettuare l'accesso utilizzando le proprie credenziali. COMPLETO
- GET /api/auth/logout: Permette agli utenti di disconnettersi. COMPLETO
- GET /api/auth/user: Restituisce le informazioni dell'utente attualmente autenticato (generico o Admin). COMPLETO

# API per la gestione dei prodotti:

- GET /api/products: Restituisce l'elenco completo dei prodotti disponibili nel catalogo COMPLETO
- GET /api/products/:id: Restituisce i dettagli di un singolo prodotto identificato dal suo ID. COMPLETO
- POST /api/products: Permette agli utenti Admin di aggiungere un nuovo prodotto al catalogo. 
COMPLETATO SENZA MIDDL E RESTRIZIONI DI RUOLO
- PUT /api/products/:id: Consente agli utenti Admin di modificare le informazioni di un prodotto esistente. NON COMPLETO
- DELETE /api/products/:id: Permette agli utenti Admin di eliminare un prodotto dal catalogo. COMPLETO

# API per la gestione del carrello:

- GET /api/cart: Restituisce il contenuto attuale del carrello dell'utente. COMPLETO
- POST /api/cart/add/:id: Aggiunge un prodotto al carrello dell'utente. NON FUNZIONANTE AL 100%
- DELETE /api/cart/remove/:id: Rimuove un prodotto dal carrello dell'utente. NO
- DELETE /api/cart/clear: Svuota il carrello dell'utente. NO

# API degli Ordini: 

- GET /api/orders: Restituisce lo storico degli ordini dell'utente. Opzionale: implementato un sistema di paginazione per migliorare le performance dell’API.
- POST /api/orders: Permette agli utenti di creare un nuovo ordine a partire dai prodotti presenti attualmente nel carrello, con l’aggiunta dei dati di spedizione necessari.
- GET /api/orders/:id: Restituisce i dettagli di un singolo ordine identificato dal suo ID.
- PUT /api/orders/:id: Consente agli amministratori di aggiornare lo stato di un ordine esistente.
- DELETE /api/orders/:id: Permette agli amministratori di cancellare un ordine. Suggerimento: modificare lo stato dell’ordine.

