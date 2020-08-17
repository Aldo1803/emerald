const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        index:true,
    },
    message:{
        type:String,
        required:true,
        index:true,
    },
    done:{
        type: Boolean,
        required: true,
        index: true
    },
    date: {
        type: String,
        required: true,
        index: true
    },
    phone:{
        type:String,
        required:false,
        index: true
    },
    option:{
        type: String,
        required: true,
        index: true
    }
});

//Export the model
module.exports = mongoose.model('Form', formSchema);