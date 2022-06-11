//login

const express = require('express')
const router = express.Router()

const path = require('path')
const controller = require('../controllers/controllerParcel1')
const registeredController = require('../controllers/signUp')
const verifyJWT = require('../middleware/verifyJWT3Auth')
const authController = require('../controllers/login')



//parcels
router.get('/parcel/', verifyJWT, controller.getParcel)//user can /GET/parcels
router.post('/parcel',verifyJWT,controller.postParcel)//user can /POST/parcels
router.put('/parcel',controller.putParcel)//user can /PUT/parcels
router.delete('/parcel',controller.deleteParcel)//user can /DELETE/parcels


//parcels id
router.get('/parcel/:id',controller.getspecificParcel)//user can /GET/<parcelId>parcels
router.put('/parcel/:id',controller.putSpecificParcel)//user can /PUT/<parcelID>parcels
router.delete('/parcel/:id',controller.deleteSpecificParcel)//user can /DELETE/<parcelID>parcels
//signup
router.post('/signup',registeredController.handleNewUser)//user can/POST/Auth/sign
//login
router.post('/login',authController.handleLogin)//user can/POST/Auth/sign









module.exports = router