const express = require('express');
const app = express();
const PostController = require('../controllers/post');
const auth = require('../middlewares/admin');

app.post('/new-post', auth.auth ,PostController.newPost);
app.get(('/posts', PostController.getPosts));
app.get('/post/:id', PostController.getPost);
app.put('/update/:id', auth.auth, PostController.updatePost);
app.delete('/delete/:id', auth.auth, PostController.deletePost);
app.put('/upload/:id', auth.auth, PostController.uploadPhotos);
app.get('/category/:category', PostController.listByCategory);

module.exports = app;