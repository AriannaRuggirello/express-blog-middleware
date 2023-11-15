// Esercizio
// Impariamo ad utilizzare i middleware e quindi gestiamo gli errori e le pagine 404.
// Questi middleware dovranno rispondere con un json contente il codice ed il messaggio dell’errore.Creiamo le seguenti rotte:

//     home
//     posts/ (index)
//     posts/ (store)
//     posts/:slug (show)

// Tramite JTW creiamo una rotta per autenticare un utente ed ottenere il Token JWT e tramite un middleware limitiamo l’accesso alla rota store dei post ai soli utenti loggati.Svolgiamo tutto l’esercizio tramite relativi controller e router.


const express = require("express");

// importo dotenv
const dotenv =require('dotenv').config();
// importo il controller
const homecontroller = require('./controller/home');
// importo il router
const postsRouter = require ('./router/posts');
// esporto il middleware degli errori
const errorsFormatterMiddleware = require("./middlewares/errorsFormatter");
const routesLoggerMiddleware = require("./middlewares/routesLogger");
const error404Middleware=require("./middlewares/error404");
// creo istanza express
const app=express();

// configuro express per leggere i dati in formato json
app.use(express.json());
// configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

// middleware 
app.use(routesLoggerMiddleware)

// Rotte relative all'entità pizze
app.use("/posts", postsRouter)


    // Gestione degli errori
app.use(errorsFormatterMiddleware)
// error 404
app.use(error404Middleware)

// avviamo il server
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
});