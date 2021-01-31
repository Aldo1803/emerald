const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    surname:{
        type: String,
        required: true,
        index: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
        index:true,
    },
    createdAt:{
        type:String,
        required: true,
        index: true
    },
    admin:{
        type: Boolean,
        required: true,
        index: true
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);