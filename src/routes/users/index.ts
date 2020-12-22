import express from 'express';
import { authUser } from '../../controllers/users/authUser';
import { createUser } from '../../controllers/users/createUser';


const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', authUser);

export default userRouter;
