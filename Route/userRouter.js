const express = require('express')
const userController = require('./../Controller/userController')

const router = express.Router()

router.route('/register').post(userController.signUp)

router.route('/login').post(userController.login)

module.exports = router

