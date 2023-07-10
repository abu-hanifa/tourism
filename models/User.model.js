const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema)
module.exports = User