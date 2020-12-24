import User from "../../models/User"
import generateToken from "../../util/generateToken"
import asyncHandler from 'express-async-handler'
import { NextFunction, Request, Response } from 'express';
export const updateUserProfile = asyncHandler(async (req: Request,
    res: Response,
    next: NextFunction) => {
    const user_id = req.params.id
    //@ts-ignore
    if (req.user._id.toString() !== user_id) {
        throw new Error("Not Authorized")
    }
    try {
        const newuser = {
            username: req.body.username,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            shipping_address: req.body.shipping_address,
            address: req.body.address,
            phone: req.body.phone,
            city: req.body.city,
            country: req.body.country,
            postal_code: req.body.postal_code,
            token: generateToken(user_id)
        }
        const user = await User.findOneAndUpdate({_id: user_id}, newuser, {new: true})
        console.log(user)
        res.json({
            mesaage: "user updated",
            user
        })

    } catch (error) {
        res.json(error);
        throw new Error("Ooopps")
    }

})

 export const updateUserProfile1 = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params._id)

    if (user) {
        user.username = req.body.name || user.username
        user.email = req.body.email || user.email
        user.first_name = req.body.first_name || user.first_name
        user.last_name = req.body.last_name || user.last_name
        user.shipping_address = req.body.shipping_address || user.shipping_address
        user.address = req.body.address || user.address
        user.phone = req.body.phone || user.phone
        user.city = req.body.city || user.city
        user.country = req.body.country || user.country
        user.postal_code = req.body.postal_code || user.postal_code
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
       
            username: updatedUser.username,
          
            first_name: updatedUser.first_name,
  
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})
