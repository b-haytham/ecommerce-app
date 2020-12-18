import app from './app';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const start = async () => {
	if (!process.env.MONGO_URI) {
		throw new Error('MONGO_URI must be defined');
	}

	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useFindAndModify: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('>>> Connected to DB');
	} catch (error) {
		console.error(error);
	}

	app.listen(3000, () => console.log('>>>> listenig'));
};

start();
