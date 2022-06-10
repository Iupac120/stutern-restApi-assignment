//login

const express = require('express')
const router = express.Router()

const path = require('path')
const controller = require('../controllers/controllerParcel1')
const registeredController = require('../controllers/signUp')
const verifyJWT = require('../middleware/verifyJWT3Auth')
const authController = require('../controllers/login')
const getUserId = require('../controllers/getUserId')


//home
router.get('/home(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','views','home.html'))
    console.log('router')
})

router.get('/about(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','views','about.html'))
})
router.get('/contact(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','views','contact.html'))
})


//parcels
router.get('/parcel/', verifyJWT, controller.getParcel)
router.post('/parcel',controller.postParcel)
router.put('/parcel',controller.putParcel)
router.delete('/parcel',controller.deleteParcel)


//parcels id
router.get('/parcel/:id',controller.getspecificParcel)
router.put('/parcel/:id',controller.putSpecificParcel)
router.delete('/parcel/:id',controller.deleteSpecificParcel)
//signup
router.post('/signup',registeredController.handleNewUser)
//login
router.post('/login',authController.handleLogin)

router.post('/users/userid',getUserId)







module.exports = router