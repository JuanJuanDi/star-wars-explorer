import mongoose, { ConnectOptions } from 'mongoose';
import { config } from 'dotenv';
config();


const MONGO_URI: string =
  process.env.MONGO_URI || 'mongodb://localhost:27017/starwars';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      autoIndex: process.env.NODE_ENV !== 'production',
    } as ConnectOptions);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Mantener la conexión activa
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to DB');
});

mongoose.connection.on('error', (err: Error) => {
  console.error('❌ Mongoose connection error:', err);
});

// Configuración adicional para evitar depreciaciones
mongoose.set('strictQuery', true);
mongoose.set('bufferCommands', false);
