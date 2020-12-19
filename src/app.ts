import express from 'express';
import productRouter from './routes/product';
import userRouter from './routes/users';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('hello'));

app.use('/api/users', userRouter);
app.use('/api/product', productRouter)

export default app;
