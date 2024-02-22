const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    event_name: {
        type: String,
        required: [true, "This is required field"],
        trim: true
    },
    contact_mobile: {
        type: Number,
        required: [true, "This is required field"],
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    venue_address: {
        type: String,
        required: [true, "This is required field"],
        trim: true
    },
    max_entry_per_registration: {
        type: Number,
    },
    registration_status: {
        type: String,
        trim: true
    },
    user_id: {
        type: String,
        required: [true, "This is required field"],
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

const Event = mongoose.model('Event', eventSchema)

module.exports = Event