const mongoose = require("mongoose")
const validator = require('validator')

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,"Please enter a valid email"]
    },
    mobile: {
        type: Number,
        required: [true, "Please enter a mobile."],
        unique: true
    },
    address: {
        type: String,
        required: [true, "Please enter a address."],
    },
    age: {
        type: Number
    },
    event_id: {
        type: Number,
        required: [true, "Event id is required"]
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const Participant = mongoose.model('Participant', participantSchema)

module.exports = Participant