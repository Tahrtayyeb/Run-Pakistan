import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
import mongoose from 'mongoose';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';

connectDB()
  .then(() => {
    mongoose.connection.once('open', () => {
      console.log('Connected to MongoDB');
      mongoose.connection.db.listCollections().toArray((err, collections) => {
        if (err) {
          console.error('Error listing collections:', err);
        } else {
          console.log('Available collections:', collections.map(c => c.name));
        }
      });
    });

    app.listen(process.env.PORT || 5500, () => {
      if (isDevelopment) {
        console.log(`Server is running at port : ${process.env.PORT || 5500}`);
      }
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed !!!", err);
    process.exit(1);
  });