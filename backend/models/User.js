const mongoose = require('mongoose');

// 📌 Definimos el esquema del usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true }, 
  password: { type: String, required: true }
});


// 📌 Exportamos el modelo
module.exports = mongoose.model('User', userSchema);
