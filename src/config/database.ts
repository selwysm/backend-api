import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUri = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/service';

export const connectDB = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};
