const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "Please add "]
    },
    email: {
        type: String,
        require: [true, "Please add "]
    },
    author: {
        type: String,
        require: [true, "Please add "]
    },
    date: {
        type: String,
        requ,ire: [true, "Please add "]
    },
    imageURL : {
        type: String,
        require: [true, "Please add "]
    },
    description: {
        type: String,
        require: [true, "Please add "]
    },
},{
    timestamps: true,
});

module.exports = mongoose.model('File', fileSchema);