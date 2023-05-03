const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true, 'Email is required']
    },
    password : {
        type : String,
        required : [true, 'Password is required']
    },
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    is_verified : {
        type : Boolean,
        default : false,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)
