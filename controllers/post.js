const Post = require('../models/post');
const moment = require('moment');
const _ = require('lodash');
function newPost(req, res) {

const body = req.body;
const post = new Post();

post.title = body.title;
post.body = body.body;
post.images = undefined;
post.comments = [];
post.date = moment().format('DD-MM-YYYY');
post.category = body.category;

post.save((err, NewPost)=>{
    if(err) res.status(500).send({err});
    if(NewPost) return res.status(200).send({NewPost});
})

    
}

function getPosts(req, res) {
    Post.find((err, posts)=>{
        if (err) res.status(500).send({ err });
        if (posts) return res.status(200).send({ posts });
    })
}

function getPost(req, res) {
    const id = req.params.id;

    Post.findById(id, (err, post)=>{
        if (err) res.status(500).send({ err });
        if (post) return res.status(200).send({ post });
    })
}

function updatePost(req, res) {
    const body = req.body;
    const post = new Post();
    const id = req.params.id;

    post.title = body.title;
    post.body = body.body;
    post.images = undefined;
    post.comments = [];
    post.date = `Actualizado el ${moment().format('DD-MM-YYYY')}` 
    post.category = body.category;

    Post.findByIdAndUpdate(id, post, {new: true}, (err, updatedPost)=>{
        if(err) res.status(500).send({err});
        if(updatedPost) return res.status(200).send({updatedPost});
    });
}

function deletePost(req, res) {
    const id = req.params.id;

    Post.findByIdAndDelete(id, (err, deleted)=>{
        if(err) res.status(500).send({err})
        if(deleted) return res.status(200).send({deleted});
    })
}

function uploadPhotos(req, res) {
    const id = req.params.id
    if (!req.files) {
        res.status(500).send({message: 'No hay imagenes para subir'});
    }

    let data = [];
    _.forEach(_.keysIn(req.files.photos), (key)=>{
        let photo = req.files.photos[key];

        photo.mv('./uploads/' + photo.name);
        
        data.push({
            name: photo.name,
            mimetype: photo.mimetype,
            size: photo.size
        });
    });
    console.log(req.files)

    Post.findById(id, (err, post)=>{
        if(err) res.status(500).send({err});
        if (post) {
            post.images = data;
            Post.findByIdAndUpdate(id, post ,{new:true}, (err, updatedPost)=>{
                if (err) res.status(500).send({ err });
                if(updatedPost) return res.status(200).send({updatedPost});
            })
        }
    });


}

function listByCategory(req, res) {
    const category = req.params.category;

    Post.find({category:category}, (err, posts)=>{
        if (err) res.status(500).send({ err });
        if (posts) return res.status(200).send({posts});
    });

    
}

module.exports = {newPost, getPosts, getPost, updatePost, deletePost, uploadPhotos, listByCategory}