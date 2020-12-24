import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User'
import { NextFunction, Request, Response } from 'express';


const protect = asyncHandler(async ( req: Request,
  res: Response,
  next: NextFunction) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET!)
      //@ts-ignore
      const existingUser  = await User.findById(decoded.id).select('-password')

      if(existingUser) {
        //@ts-ignore
        req.user = existingUser
      } else {
        throw new Error("NOT Found")
      }

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = ( req: Request,
  res: Response,
  next: NextFunction)  => {
    //@ts-ignore
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

export { protect, admin }
