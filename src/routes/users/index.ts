import express from 'express';
import { authUser } from '../../controllers/users/authUser';
import { createUser } from '../../controllers/users/createUser';
import { deleteUser } from '../../controllers/users/deleteUser';
import { getUserProfile } from '../../controllers/users/getUserProfile';
import { getUsers } from '../../controllers/users/getUsers';
import { updateUserProfile } from '../../controllers/users/updateUserProfile';


const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', authUser);
userRouter.get('/' , getUsers)
userRouter.get('/:id' , getUserProfile);
userRouter.delete('/:id' , deleteUser);
userRouter.put('/:id', updateUserProfile) 

export default userRouter;
