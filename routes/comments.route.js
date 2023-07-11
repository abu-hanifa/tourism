const {commentsController} = require('../controllers/comments.controller')
const {Router} = require('express')
const authMiddleware = require('../models/middlewares/auth.middleware')


const router = Router()

router.get('/comments', commentsController.getAllComments)
router.get('/comments/:id', commentsController.getPublicationComments)
router.post('/comments/:id',authMiddleware, commentsController.createComments)
router.delete('/comments/:id',authMiddleware, commentsController.deleteComments)

module.exports = router