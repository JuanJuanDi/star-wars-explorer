// backend/src/config/mongo.ts
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sw_explorer';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      autoIndex: process.env.NODE_ENV !== 'production',
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Mantener la conexión activa
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Configuración adicional para evitar depreciaciones
mongoose.set('strictQuery', true);
mongoose.set('bufferCommands', false);