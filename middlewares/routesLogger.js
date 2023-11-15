module.exports = function (req, res, next) {
// middleware semplce da eseguire prima 
console.log(`${req.method} ${req.url}`);
  
next();
  }