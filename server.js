import express from 'express';
import cors from 'cors';

import db from './db/db.js';
import productRouter from './routes/productRoute.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

db.sync()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.log('Failed to async connect to database: ', err);
  });

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`Listening on port, ${port}`);
});
