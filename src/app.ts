import express from 'express';
import userRouter from './routes/users';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('hello'));

app.use('/api/users', userRouter);


export default app;
