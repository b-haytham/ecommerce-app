import mongoose from 'mongoose';

import bcrypt from 'bcrypt'

interface UserAttrs {
	username: string;
	first_name: string | null;
	last_name: string | null;
	email: string;
	password: string;
	isVerified: boolean;
	shipping_address: string | null;
	isAdmin: boolean;
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
	isAdmin: boolean;
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
		isAdmin: { type: Boolean, required: true, default: false },
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
// hash password

userSchema.pre<UserDoc>("save", async function () {
	if (this.isModified("password")) {
	  const hash = await bcrypt.hashSync(String(this.password), 10);
	  this.password = hash;
	}
  });
  
  // check if password matches the hash password
  userSchema.methods.matchesPassword = function (password: string) {
	if (!this.password) {
	  return false;
	}
	return bcrypt.compareSync(password, this.password);
  };
userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;
