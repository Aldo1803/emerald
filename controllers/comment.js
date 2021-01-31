const Comment = require('../models/comment');
const Post = require('../models/post');

 async function newComment(req, res) {
    const id = req.params.id;
    const body = req.body;
    let comment = new Comment();

    comment.body = body.body.toString();
    
    comment.user = req.user;
    comment.likes = 0;
    comment.usersLiked = []

    let response = await addCommentToPost(comment, id);

    return res.send({response});
    



}

function addCommentToPost(comment, id) {
    return new Promise((resolve, reject)=>{
        Post.findById(id, (err, post) => {
            if (err) res.status(500).send({ err });
            if (post) {
                post.comments.push(comment);
                Post.findByIdAndUpdate(id, post, { new: true }, (err, postUpdated) => {
                    if (err) res.status(500).send({ err });
                    if (postUpdated) resolve(postUpdated);
                })
            }
        });
    });
    
}



module.exports = {newComment}
