import { NextFunction, Request, Response } from 'express';
import User from '../../models/User';
import { check, validationResult } from "express-validator";
import generateToken from '../../util/generateToken';


export const createUser =
	async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {

		await check("email", "Email is not valid").isEmail().run(req);
		await check("password", "Password must be at least 8 characters long").isLength({ min: 8 }).run(req);

		// validator error comming from req.body
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(404).json({ errors: errors.array() })
			return res.redirect("/login");
		}
		const { username, email, password } = req.body;


		try {
			const user = User.build({
				username,
				first_name: null,
				last_name: null,
				email,
				password,
				shipping_address: null,
				isAdmin : false ,
				address: null,
				phone: null,
				city: null,
				country: null,
				postal_code: null,
				isVerified: false,

			});
			await user.save();

		
				res.status(201).json({
					_id: user._id,
					username: user.username,
					email: user.email,

					token: generateToken(user._id),
				})
		




			
		} catch (error) {
			console.log(error)
			res.json(error);

		}





	};
