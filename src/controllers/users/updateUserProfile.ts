import User from "../../models/User"
import generateToken from "../../util/generateToken"
import asyncHandler from 'express-async-handler'

export const updateUserProfile = asyncHandler(async (req, res) => {
    const user_id = req.params.id

    try {
        await User.findByIdAndUpdate(user_id, {
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
        })

        res.json({
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
        })

    } catch (error) {
        res.json(error);
    }

})