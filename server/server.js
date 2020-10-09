const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
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
	saveUninitialized: true,
	resave: false,
}));

app.use(
	session({
		store: new SequelizeStore({
			db,
		}),
		resave: false, // we support the touch method so per the express-session docs this should be set to false
		proxy: true, // if you do SSL outside of node.
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

if (NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	})
}
db.sequelize.sync(
	// { force: true }
).then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on PORT ${PORT}`);
	});
});