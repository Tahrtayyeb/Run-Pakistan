import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      if (isDevelopment) {
        console.log(`Server is running at port : ${process.env.PORT || 8000}`);
      }
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed !!!", err);
    process.exit(1);
  });