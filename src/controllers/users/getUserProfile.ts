import  User  from '../../models/User';
import asyncHandler from 'express-async-handler'
import {  Request, Response } from 'express';


 export const getUserProfile = asyncHandler(async (req: Request,
	res: Response) => {
    const  user_id = req.params.id
    const user = await User.findById(user_id)
  
    if (user) {
      res.json({
        _id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        username: user.username,
				first_name: user.first_name,
				last_name: user.last_name,
				shipping_address: user.shipping_address,
				address: user.address,
				phone: user.phone,
				city: user.city,
				country: user.country,
				postal_code: user.postal_code,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })