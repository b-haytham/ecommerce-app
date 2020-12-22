import generateToken from "../../util/generateToken";
import User from '../../models/User';
import asyncHandler from 'express-async-handler'
import { check, validationResult } from "express-validator";


export const authUser = asyncHandler(async (req, res) => {
  await check("email", "Email is not valid").isEmail().run(req);
  await check("password", "Password cannot be blank").isLength({min: 1}).run(req);

 

   	// validator error comming from req.body
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(404).json({ errors: errors.array() })
			return res.redirect("/login");
		}
    const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user && (await user.matchesPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
  }} catch (error) {
    console.log(error)
			res.json(error);
  }/*
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
      throw new Error('Invalid email or password')*/
    })
