const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PROD || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

const api = require("./api");
app.use('/api', api);

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});