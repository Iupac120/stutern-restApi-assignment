const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req,res,next) =>{
    // const authHeader = req.headers['authorization']
    // if(!authHeader){
    //     return res.sendStatus(401)
    // }
    // console.log(authHeader)
    // const token = authHeader.split(' ')[1]
    const token = req.cookies.jwt;
    if(!token) {
        return res.sendStatus(401);
    }
   // console.log(token);
    const user = jwt.decode(
        token,
        process.env.ACCESS_TOKEN_SECRET);
        // (err,decoded)=>{
        //     console.log(decoded);
        //     if(err){
        //         return res.sendStatus(403)
        //     }
        //     req.email = decoded.email;
        // }
        req.user = user
        return next();
}

module.exports = verifyJWT