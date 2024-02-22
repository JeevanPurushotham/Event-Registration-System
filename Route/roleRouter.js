const express = require('express')
const roleController = require('./../Controller/roleController')

const router = express.Router()

router.route('/').post(roleController.roleExistanceAndCreate)

module.exports = router