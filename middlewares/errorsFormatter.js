

/**
 * Questo middleware ha 4 argomenti, 
 * quindi express lo riconosce come middleware degli errori
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function (err, req, res, next) {
 

      res.status(500).json({
        message: "error 500!internal server",
        error: err.message,
  
      });
  
  
}