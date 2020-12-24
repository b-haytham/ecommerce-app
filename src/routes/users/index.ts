import express from 'express';
import { authUser } from '../../controllers/users/authUser';
import { createUser } from '../../controllers/users/createUser';
import { deleteUser } from '../../controllers/users/deleteUser';
import { getUserProfile } from '../../controllers/users/getUserProfile';
import { getUsers } from '../../controllers/users/getUsers';
import { updateUser } from '../../controllers/users/updateUser';
import { updateUserProfile, updateUserProfile1 } from '../../controllers/users/updateUserProfile';
import { admin, protect } from '../../middleware/authMiddleware';
import { runValidation } from '../../validators';
import { userSigninValidator, userSignupValidator } from '../../validators/auth';



const userRouter = express.Router();

userRouter.post('/',userSignupValidator, runValidation , createUser);
userRouter.post('/login', userSigninValidator, runValidation, authUser);

userRouter.get('/' , getUsers)
userRouter.get('/:id' , getUserProfile);
userRouter.delete('/:id', admin , deleteUser);
userRouter.put('/profile/:id' , protect, updateUserProfile) 
//userRouter.put('/:id', admin , updateUser)
userRouter.put('/la' , protect , updateUserProfile1)
export default userRouter;
