// // importo jwt
// const jwt = requiure('jsonwebtoken');

// // funzione che genera il token
// function generateToken(user){
//     const payload={
//         user.id,
//         username:user.username
//     };

//     // ritorniamo il token firmato con scadenza di 1 h
//     // sign genererà il codice,lo leggerà e lo decripterà
//     return jwt.sign(payload,process.env.JWT_SECRET,
//         {expiresIn:'1h'});
// }