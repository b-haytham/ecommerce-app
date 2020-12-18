import mongoose from 'mongoose';
import { UserRoles } from './types';

interface UserAttrs {
	username: string;
	first_name: string | null;
	last_name: string | null;
	email: string;
	password: string;
	isVerified: boolean;
	shipping_address: string | null;
	role: UserRoles;
	address: string | null;
	phone: string | null;
	city: string | null;
	country: string | null;
	postal_code: number | null;
}

interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
	username: string;
	first_name: string | null;
	last_name: string | null;
	email: string;
	password: string;
	isVerified: boolean;
	shipping_address: string | null;
	role: UserRoles;
	address: string | null;
	phone: string | null;
	city: string | null;
	country: string | null;
	postal_code: number | null;
}

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		first_name: { type: String },
		last_name: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isVerified: { type: Boolean, required: true, default: false },
		shipping_address: { type: String },
		role: { type: String, required: true },
		address: { type: String },
		phone: { type: String },
		city: { type: String },
		country: { type: String },
		postal_code: { type: Number },
	},
	{
		timestamps: true,
		toJSON: {
			transform(doc, ret) {
				delete ret.password;
			},
		},
	}
);

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;
