const jwt = require('jsonwebtoken')
module.exports = async(req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: 'нет авторизации'})
    }
    const [type, token] = authorization.split(' ')
    if(type !== "Bearer"){
        return res.status(401).json({error: 'неверный тип токена'})
    }
    try {
        req.user = await jwt.verify(token,process.env.SECRET_JWT_KEY)
        next()
    } catch (error) {
        return res.status(401).json({error: 'ошибка авторизации'+ ''+ e.message})
    }
}