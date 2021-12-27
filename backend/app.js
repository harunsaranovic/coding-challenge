const express = require('express');
const router = express.Router();
const app = express();
const port = 8080;
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

require('./config/sequelize');

//Cors setup
app.use(cors());

//Load routes
const index = require('./routes/index');
const authentication = require('./routes/authentication');

const requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Node.js Server!');
};

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport authentication
app.use(passport.initialize());

//flash
app.use(flash());

//express session middleware
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false
	})
);

//use routes
app.use('/', index);
app.use('/', authentication);

app.listen(port, () => console.log(`Application started at http://localhost:${port}`));
