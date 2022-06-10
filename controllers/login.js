let userDB = require('../model/user2.json')
const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleLogin = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password ){
        res.status(400).json({"message":"Person details are required "})
    }
    const foundUser = userDB.find((person)=>person.email === email)
    if(!foundUser){
        console.log('first')
        console.log(foundUser)
        console.log('first')
        res.sendStatus(401)//unauthorized
    }
    const match = await bcrypt.compare(password,foundUser.password)
    if(match){
        const accessToken = jwt.sign(
            {email:foundUser.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'50s'}
                 )
        const refreshToken = jwt.sign(  // refresh token is used when a used logged out
            {email:foundUser.email},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
                )
        const otherUser = userDB.filter((person)=>person.email !== foundUser.email)
        const currentUser = {...foundUser,accessToken}  //refresh token is used when a used logged out
        userDB.push([...otherUser,currentUser])
        await fsPromises.writeFile(path.join(__dirname,'..','model','user2.json'),JSON.stringify(userDB))
        res.cookie('jwt', accessToken,{httpOnly: true, maxAge: 24*60*60*1000})
        //res.status(200).json({accessToken})
        res.status(201).json({currentUser})
    }else{
        res.staus(401).json({"message":"Unauthorized log in"})
    }
}

module.exports = {handleLogin}