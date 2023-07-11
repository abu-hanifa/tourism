const Comments = require('../models/comments.model')

module.exports.commentsController = {
    getAllComments: async (req, res) => {
        const comments = await Comments.find()
        res.json(comments)
    },

    getPublicationComments: async (req, res) => {
        const comments = await Comments.find({publicationId: req.params.id}).populate('user')
        res.json(comments)
    },

    deleteComments: async (req, res) => {
        const {id} = req.params

        try {
            const data = await Comments.findByIdAndRemove(id)
            res.json(data)
            
        } catch (error) {
            return res.status(401).json({error: 'ошибка'+ error.toString()})
        }
    },

    createComments: async (req, res) => {
        const {text} = req.body

        try {
            const comments = await Comments.create({
                user: req.params.id,
                text: text,
                publicationId: req.params.id
            })
            return res.json(comments)
            
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    }
    
}