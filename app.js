'use strict'
let express = require('express');
let app = express()
let bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

// Route imports 
const FormRoutes = require('./routes/form');
const UserRoutes = require('./routes/user');
const TestRoutes = require('./routes/test');
const PostRoutes = require('./routes/post');
const CommentRoutes = require('./routes/comment');
// Middlewares
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Use routes
app.use('/form', FormRoutes);
app.use('/user', UserRoutes);
app.use('/test', TestRoutes);
app.use('/post', PostRoutes);
app.use('/comment', CommentRoutes);

app.use(express.static('uploads'));
module.exports = app;