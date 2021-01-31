const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        index: true
    },
    likes: {
        type: Number,
        index: true
    },
    usersLiked : {
        type: Array,
        index: true
    }
});

//Export the model
module.exports = mongoose.model('Comment', commentSchema);
