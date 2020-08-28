const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
app.use(cookieParser('secret'));

// Express Session
app.use(session({
	// secret is string used as hash
	secret: 'secret',
	saveUninitialized: true,
	resave: false,

}));

// Passport init
require('./config/passport');
app.use(passport.initialize());
// calls deserialize
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eigoDB", { useNewUrlParser: true });

const api = require("./api");
app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (_req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path  
	})
}

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});