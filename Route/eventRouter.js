const express = require("express")
const eventController = require("./../Controller/eventController")
const userController = require("./../Controller/userController")

const router = express.Router()

router.route('/register-event').post(userController.protect,userController.restrict('admin','organizer'),eventController.createEvent)

router.route('/update-event/:id').put(userController.protect,userController.restrict('admin','organizer'),eventController.updateEvent)

router.route('/delete-event/:id').delete(userController.protect,userController.restrict('admin'),eventController.deleteEvent)

router.route('/').get(eventController.getAllEvents)

router.route('/:id').get(eventController.getEvent)


module.exports = router