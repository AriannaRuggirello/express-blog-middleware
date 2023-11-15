// importo jwt
const jwt = require('jsonwebtoken');

// funzione che genera il token
module.exports= function(user){
    // estraggo i dati che voglio salvare dentro il token la psw non deve MAI passare 
    const payload={
        id:user.id,
        username:user.username
    };

    // // ritorniamo il token firmato con scadenza di 1 h
    // // sign genererà il codice,lo leggerà e lo decripterà
    return jwt.sign(user,process.env.JWT_SECRET,
        {expiresIn:'1h'});
}