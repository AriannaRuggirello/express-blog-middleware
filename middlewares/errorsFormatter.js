const fs = require("fs");
const path = require("path");

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
  res.format({
    json: () => {
      res.status(500).json({
        message: "Oops, mi sa che qualcosa è andato storto",
        error: err.message,
  
      });
    },
    default: () => {
      res.status(500).send("<h1>Oops, mi sa che qualcosa è andato storto</h1>");
    },
  });
};