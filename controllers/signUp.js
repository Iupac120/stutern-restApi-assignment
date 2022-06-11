
///THE SECOND ONE IS AUTHORIZATION OF USER
let userDB = require('../model/user2.json')
const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async(req,res)=>{
    const {email,password,firstname,lastname,address} = req.body
    if(!email || !password ||!firstname || !lastname || !address){
        console.log('first')
        return res.status(400).json({"message":"Person details are required "})
    }
    const duplicate = userDB.find((person)=>person.email === email)
    //const userIndex = userDB.findIndex((person)=>person.email === email)
    if(duplicate){
        console.log('two')
        res.status(409).json({"meassage":"Person already exists"})
    }
    try{
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = {
            id:userDB.length + 1,
            email:email,
            password:hashedPassword,
            firstname:firstname,
            lastname:lastname,
            address:address,
            destination:destination
        }
    userDB.push(newUser)
    await fsPromises.writeFile(path.join(__dirname,'..','model','user2.json'),JSON.stringify(userDB))
    console.log(userDB)
    res.status(200).json(newUser)

    }catch(err){
        console.log(err.message)
        res.status(500).json({"mesage":err.mesage})
    }
}

module.exports = {handleNewUser}