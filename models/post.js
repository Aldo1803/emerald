const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:true,
    },
    body:{   
        type:String,
        required:true,
        index:true,
    },
    images:{
        type:Array,
        index:true,
    },
    comments:{
        type: Array,
        index: true
    },
    date: {
        type: String,
        index: true
    },
    category: {
        type: String,
        index: true
    }
});

//Export the model
module.exports = mongoose.model('Post', postSchema);