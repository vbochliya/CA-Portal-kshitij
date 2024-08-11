const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        // required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        // required:true,
    },
    phone: {
        type: Number,
        // required:true,
        minlength: 10,
    },
    college: {
        type: String,
        // required:true,
    },
    city: {
        type: String,
    },
    state:
    {
        type: String,
    },
    ca_id:
    {
        type: String,
    }
    ,
    is_ca:
    {
        type: Boolean,
        default: false,
    },
    points:
    {
        type: Number,
        default: 0,
    }



});


const User = mongoose.model('User', userSchema);
module.exports = User;
