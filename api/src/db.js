require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_LOCAL_DB = process.env.MONGO_LOCAL_DB || "mongodb://localhost/prueba"

mongoose.connect(MONGO_LOCAL_DB, ()=>{
    
    console.log('conected to DB Mongo')
}, err => console.error(err))



module.exports = { // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: mongoose,     // para importart la conexión { conn } = require('./db.js');
  };