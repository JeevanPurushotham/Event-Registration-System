const express = require('express')
const participantController = require('./../Controller/participantController')

const router = express.Router()

router.route('/participants-registration').post(participantController.createParticipant)

router.route('/participantlist/:id').get(participantController.getAllParticipantsByEventId)

module.exports = router