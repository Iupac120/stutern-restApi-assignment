//login

const express = require('express')
const router = express.Router()

const path = require('path')
const controller = require('../controllers/controllerParcel1')
const registeredController = require('../controllers/signUp')
const verifyJWT = require('../middleware/verifyJWT3Auth')
const authController = require('../controllers/login')




/**
 * @swagger
 * /parcel:
 *  get:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */



router.get('/parcel/', verifyJWT, controller.getParcel)//user can /GET/parcels

/**
 * @swagger
 * /parcel:
 *  post:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */


router.post('/parcel',verifyJWT,controller.postParcel)//user can /POST/parcels


/**
 * @swagger
 * /parcel:
 *  put:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */

router.put('/parcel',controller.putParcel)//user can /PUT/parcels

/**
 * @swagger
 * /parcel:
 *  delete:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */

router.delete('/parcel',controller.deleteParcel)//user can /DELETE/parcels


//parcels id

/**
 * @swagger
 * /parcel/{parcelid}:
 *  get:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */
router.get('/parcel/:id',controller.getspecificParcel)//user can /GET/<parcelId>parcels

/**
 * @swagger
 * /parcel/{parcelid}:
 *  put:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */

router.put('/parcel/:id',controller.putSpecificParcel)//user can /PUT/<parcelID>parcels

/**
 * @swagger
 * /parcel/{parcelid}:
 *  delete:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */

router.delete('/parcel/:id',controller.deleteSpecificParcel)//user can /DELETE/<parcelID>parcels
//signup


/**
 * @swagger
 * /signup:
 *  post:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */
router.post('/signup',registeredController.handleNewUser)//user can/POST/Auth/sign




//login

/**
 * @swagger
 * /login:
 *  post:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 *      produces:
 *          -application/json
 */


router.post('/login',authController.handleLogin)//user can/POST/Auth/sign









module.exports = router