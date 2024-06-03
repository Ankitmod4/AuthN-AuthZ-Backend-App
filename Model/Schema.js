const mongoose = require('mongoose');

const DB = new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Email: {
        type: String,
        required:true,
    },
    Password: {
        type: String,
        required:true, 
    },
    Role: {
        type: String,
        required: true,
       enum:["Student","Admin"]
    }
})


module.exports = mongoose.model('model', DB)