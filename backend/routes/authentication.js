const express = require('express');
const router = express.Router();
const passport = require('passport');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const autorize = require('../middlewares/authorization');
const config = require('../config/auth');
require('../config/passport')(passport);

router.post('/login', (req, res, next) => {
	console.log(req.body);
	
	User.findOne({
		where: { email: req.body.email }
	}).then((user) => {
		if (user) {
			if(req.body.password === user.password){
				let tokenPayload = {
					id: user.id,
					email: user.email
				}
				let token = jwt.sign(tokenPayload, config.JWT_SECRET)
				return res.status(200).json({
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					id: user.id,
					apiKey: token
				});
			} else {
				return res.status(200).json({
					error: "Wrong password"
				});
			}
		} else {
			return res.status(200).json({
				error: "Wrong email"
			});
		}
	});
});

router.post('/register', (req, res, next) => {
	User.findOne({
		where: { email: req.body.email }
	}).then((user) => {
		if (user) {
			return res.status(200).json({ error: 'User already exists.' });
		} else if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
			return res.status(200).json({ error: 'Fill in the form.' });
		} else {
			User.create({
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				password: req.body.password
			});
			res.status(201).json({ message: 'User created successfully' });
		}
	});
});

module.exports = router;
