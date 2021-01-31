const express = require('express');
let app = express();
const UserController = require('../controllers/user');

app.post('/register', UserController.register);
app.post('/login', UserController.login);

module.exports = app
