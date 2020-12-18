import express from 'express';
import { createUser } from './createUser';

const userRouter = express.Router();

userRouter.post('/', createUser);

export default userRouter;
