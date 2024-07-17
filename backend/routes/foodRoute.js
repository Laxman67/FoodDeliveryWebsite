import express from 'express';
import {
  addFood,
  listFood,
  removeFood,
} from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Configure the image storage engine
const storageConfig = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storageConfig });

// Define the route for adding food

foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);

export default foodRouter;
