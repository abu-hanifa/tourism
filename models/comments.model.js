const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    publicationId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Publication'
    }
})
const Comments = mongoose.model('Comments', commentsSchema)
module.exports = Comments