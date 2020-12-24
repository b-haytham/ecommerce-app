import express from 'express';
import categoryRouter from './routes/category';

import productRouter from './routes/product';
import userRouter from './routes/users';
import cors from 'cors';





const app = express();

app.use(express.json());
app.use(cors())
app.get('/', (req, res) => res.send('hello'));

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
export default app;
