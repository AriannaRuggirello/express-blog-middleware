const express = require("express");
const jwt = require("jsonwebtoken");

/**
 * @param {express.Request} req
 * @param {*} res
 * @param {*} next
 */
module.exports= function(req,res,next){
// leggo il jwt ricevuto
// leggere header ritornato dal token
const bearerToken = req.header('Authorization');
// console.log(bearerToken);
// controller se il token è presente
if (!bearerToken) {
    return res.status(401).send('token mancante')
}

// estraggo solo il codice da bearer
const token = bearerToken.split(" ")[1];
// controllo la validità
// console.log(token);

  // Funzione verify richiede 3 parametri:
  // 1. Il token da verificare
  // 2. La chiave segreta con cui è stato firmato
  // 3. eventuali opzioni (es. algoritmo di cifratura)

  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

// console.log(jwtPayload);
// decido se passa o no 
// aggiungi la chiave user all'interno della request è il valore sara il payload
req['user']= jwtPayload
next();
};