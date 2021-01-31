const express = require('express');
let app = express();
const auth = require('../middlewares/authenticated');
const CommentController = require('../controllers/comment');

app.put('/new-comment/:id', auth.auth, CommentController.newComment );

module.exports = app;