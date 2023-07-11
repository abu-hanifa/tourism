const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    block: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User