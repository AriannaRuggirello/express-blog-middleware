const generateJWT =require('../utilities/jwtToken')

function login(req,res){
    // leggo username e psw da req.body
    let {username,password}= req.body;

    if (!username || !password) {
        res.status(400).send('username e psw sono obbligatori')
        return
    }
    // leggo il db 
    const users=require('../db/users.json');
    // controllo se ce corrsipondenza
    const user= users.find((user)=>user.username === username && user.password === password);

    if (!user) {
        res.status(401).send('username e/o psw errati')
        return
    }

    // generiamo il token per invialo al client
    const token = generateJWT(user);


    res.json({token})
}

module.exports={
    login,
};