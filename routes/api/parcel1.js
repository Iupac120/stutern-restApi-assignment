//THE FIRST OF GETTING DIFFERENT ROUTES

const express = require('express')
const router = express.Router()
const path = require('path')
const controller = require('../../controllers/controllerParcel1')



router.get('/parce/',controller.getParcel)
router.post('/parcel',controller.postParcel)
router.put('/parcel',controller.putParcel)
router.delete('/parcel',controller.deleteParcel)


router.get('/parcel/:id',controller.getspecificParcel)
router.put('/parcel/:id',controller.putSpecificParcel)
router.delete('/parcel/:id',controller.deleteSpecificParcel)

module.exports = router