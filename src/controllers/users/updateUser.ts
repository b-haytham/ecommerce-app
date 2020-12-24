
import User from "../../models/User"
import generateToken from "../../util/generateToken"
import asyncHandler from 'express-async-handler'

export const updateUser = asyncHandler(async (req, res) => {
    const user_id = req.params.id

    try {
        await User.findByIdAndUpdate(user_id, {
            username: req.body.username,
             email: req.body.email,
             isAdmin : req.body.isAdmin
        })

        res.json(
           req.body
        )

    } catch (error) {
        console.log(error)
        res.json(error);
    }

})



