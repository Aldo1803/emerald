const express = require('express');
const app = express();
const AuthMiddleware = require('../middlewares/authenticated');
app.get('/test-auth', AuthMiddleware.auth ,(req, res) => {
    return res.status(200).send({ message: 'Autenticacion completa', user: req.user});
});

module.exports = app;