const jwt  = require('jsonwebtoken')

module.exports.verfiytoken = (req,res,next) =>{
    const bearerheader = req.headers['authorization']

    if(typeof bearerheader !== 'undefined'){
        const bearer = bearerheader.split(' ');
        const bearerTken = bearer[1];
        req.token= bearerTken
        next();
    }else{
        res.sendStatus(403)
    }

}