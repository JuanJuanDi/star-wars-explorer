const mongoose = require('mongoose');

// Esquema de "Favorito"
const favoriteSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true }, 
  name: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: Object, required: true }
});

// Exportamos el model
module.exports = mongoose.model('Favorite', favoriteSchema);
