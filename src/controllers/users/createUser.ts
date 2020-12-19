import { NextFunction, Request, Response } from 'express';
import { UserRoles } from '../../models/types';
import User from '../../models/User';

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username, email, password } = req.body;
/*
	const isUserExist = await User.findOne({ email });

	if (isUserExist) {
		return res
			.status(400)
			.json({ error: { message: 'User already exist' } });
	}
*/
	const user = User.build({
		username,
		first_name: null,
		last_name: null,
		email,
		password,
		shipping_address: null,
		role: UserRoles.USER,
		address: null,
		phone: null,
		city: null,
		country: null,
		postal_code: null,
		isVerified: false,
	});

	await user.save();

	res.status(201).json(user);
};
