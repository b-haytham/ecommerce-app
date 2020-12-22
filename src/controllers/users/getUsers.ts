
import  User  from '../../models/User';
import asyncHandler from 'express-async-handler'
import {  Request, Response } from 'express';


export const getUsers = asyncHandler(async (req: Request,
	res: Response) => {
    const users = await User.find({})
    res.json(users)
  })