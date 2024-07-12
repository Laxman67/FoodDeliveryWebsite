import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log('DB Connected');
    })
    .catch((err) => console.log(`Error while connecting => ${err}`));
};
