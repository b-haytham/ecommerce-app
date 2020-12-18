import app from './app';

const start = async () => {
	app.listen(3000, () => console.log('>>>> listenig'));
};

start();
