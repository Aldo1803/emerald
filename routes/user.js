const express = require('express');
const app = express();
const UserController = require('../controllers/user');

app.post('/register', UserController.register);
app.post('/login', UserController.login);

module.exports = app
