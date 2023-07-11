const Router  = require ('express');
const {publicationController} = require('../controllers/publications.controller');
const authMiddleware  = require('../models../middlewares/auth.middleware.js');

const router  = Router();
router.get('/publications',authMiddleware, publicationController.getPublcation );
router.get('/publicationsById/:id',authMiddleware, publicationController.getPublicationById)
router.post('/addPublications',  authMiddleware,publicationController.postPublications);
router.patch('/changePublications/:id', authMiddleware, publicationController.patchPublications);
router.delete('/deletePublications/:id', authMiddleware, publicationController.deletePublication);

module.exports  = router