const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
app.use(cookieParser('secret'));

// Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: false,
}));

// Passport init
// require('./config/passport');
// app.use(passport.initialize());
// calls deserialize
// app.use(passport.session());

const api = require("./routes/api/user/example");
app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	})
}

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});