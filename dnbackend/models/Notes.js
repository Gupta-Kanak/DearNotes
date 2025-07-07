const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    email : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    description : {
        type : String
    },

    style : {
        type : String,
        required : true
    },
    
    date : {
        type : String,
        default : (new Date()).toLocaleDateString()
    }
});

const note = mongoose.model('note', noteSchema);
module.exports = note;