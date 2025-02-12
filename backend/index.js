// 📌 Importaciones necesarias
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express'); 
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const User = require('./models/User');
const Favorite = require('./models/Favorite');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const SWAPI_BASE_URL = 'https://swapi.dev/api/';
const MONGO_URI = process.env.MONGO_URI;
const SECRET_KEY = process.env.SECRET_KEY;

// 📌 Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// 📌 Cargar documentación de Swagger
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 📌 Conectar a MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// 📌 Middleware de autenticación (JWT)
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

// ===================== 🚀 AUTENTICACIÓN (Usuarios) =====================

// 📌 Registrar un usuario
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ mensaje: 'Usuario registrado con éxito!' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// 📌 Login de usuario
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ userId: user._id.toString() }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ mensaje: 'Login exitoso!', token });
  } catch (error) {
    res.status(500).json({ error: 'Error en login' });
  }
});

// ===================== ⭐ FAVORITOS =====================

// 📌 Guardar un favorito
app.post('/api/favorites', authMiddleware, async (req, res) => {
  try {
    const { name, type, details } = req.body;
    const userId = req.user.userId;

    if (!name || !type || !details) {
      return res.status(400).json({ error: 'Faltan datos para guardar el favorito.' });
    }

    const existingFavorite = await Favorite.findOne({ userId, name, type });
    if (existingFavorite) {
      return res.status(400).json({ error: 'Este favorito ya está guardado.' });
    }

    const newFavorite = new Favorite({ userId, name, type, details });
    await newFavorite.save();

    res.status(201).json({ mensaje: 'Favorito guardado con éxito!' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar favorito' });
  }
});

// 📌 Obtener favoritos del usuario
app.get('/api/favorites', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const favorites = await Favorite.find({ userId });

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
});

// 📌 Eliminar un favorito
app.delete('/api/favorites/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const favorite = await Favorite.findOneAndDelete({ _id: id, userId });

    if (!favorite) {
      return res.status(404).json({ error: 'Favorito no encontrado' });
    }

    res.json({ mensaje: 'Favorito eliminado con éxito!' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar favorito' });
  }
});

// ===================== 🔍 SWAPI (Star Wars API) =====================

// 📌 Obtener datos de SWAPI con paginación
app.get('/api/:resource', async (req, res) => {
  try {
    const { resource } = req.params; 
    const { page = 1 } = req.query; 

    const validResources = ['people', 'planets', 'starships', 'vehicles', 'films'];
    if (!validResources.includes(resource)) {
      return res.status(400).json({ error: 'Recurso no válido.' });
    }

    const response = await axios.get(`${SWAPI_BASE_URL}${resource}/?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener ${resource} de SWAPI` });
  }
});

// 📌 Búsqueda en SWAPI
app.get('/api/search', async (req, res) => {
  const { type, name } = req.query;
  if (!type || !name) {
    return res.status(400).json({ error: 'Se requieren "type" y "name" para buscar.' });
  }

  try {
    const response = await axios.get(`${SWAPI_BASE_URL}${type}/?search=${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar búsqueda en SWAPI' });
  }
});

// 📌 Middleware para manejar errores globales
app.use((err, req, res, next) => {
  console.error('❌ Error en la API:', err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

// ===================== 🚀 INICIAR SERVIDOR =====================
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`📄 Documentación disponible en: http://localhost:${PORT}/api-docs`);
});
