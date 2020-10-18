const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const db = require('./models');
const routes = require('./routes');

const app = express();
const authentication = require('./config/passport');
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

authentication();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser('secret'));
app.use(session({
	secret: 'secret',
	store: new SequelizeStore({
		db: db.sequelize,
	}),
	saveUninitialized: true,
	resave: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

if (NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	})
}

db.sequelize.sync(
	// { force: true }
).then(() => {
	if (NODE_ENV === 'development') {
		https.createServer({
			key: fs.readFileSync('./../localhost.key'),
			cert: fs.readFileSync('./../localhost.crt'),
		}, app).listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log('Currently listening to SSL port', PORT);
		});
	} else {
		app.listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log('Currently listening to Non-SSL port', PORT);
		});
	}
});