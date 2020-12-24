import generateToken from "../../util/generateToken";
import User from '../../models/User';

import { NextFunction, Request, Response } from 'express';

export const authUser = async (
   req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchesPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  
  }
  } catch (error) {
    console.log(error)
    res.send({message : "invalid email or password"})
  }

  }

  
