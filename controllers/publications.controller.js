const Publication = require('../models/Publication.model')
const jwt = require('jsonwebtoken')
module.exports.publicationController={
    getPublcation: async (req, res)=>{
        try{const publications = await Publication.find({})
        res.json(publications)}
        catch(err){res.json(err)}
    },

    getPublicationById: async (req, res)=>{
        const {id} = req.params;
        try {
            const publication = await Publication.findById(id)
        if(publication.user.toString()===req.user.id)
        Publication.findById(req.params.id)
            
        res.json(publication);
        } catch (error) {
            res.json(error)
            
        }
        
    },

    postPublications: async (req, res)=>{
        try {
            const publications = await Publication.create({
                header: req.body.header,
                geoTag: req.body.geoTag,
                image: req.file.path,
                user: req.user.id,
                desc: req.body.desc
            })
            res.json(publications)
            
        } catch (error) {
            res.json(error)
        }
    },

    patchPublications: async (req, res)=>{
        try {
            const publication = await Publication.findById(id)
            if(publication.user.toString()===req.user.id)
            Publication.findByIdAndUpadate(
                req.params.id,
                {header: req.body.header,
                desc: req.body.desc,
                geoTag: req.body.geoTag},
                {new: true})
                res.json(publication)

        } catch (error) {
            res.json(error)
             
        }
    },
     
    deletePublication: async (req, res)=>{
        const {id} = req.params;
        try {
            const publication = await Publication.findById(id)
            if(publication.user.toString()===req.user.id)
            await Publication.findByIdAndDelete(id);
            return  res.json('Вы успешно удалили публикацию')
            
        } catch (error) {
            res.json(error)
            
        }

    }
}
