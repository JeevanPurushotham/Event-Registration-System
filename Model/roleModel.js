const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['admin','organizer'],
        required: [true, "Type field is required"],
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

const Role = mongoose.model('Role', roleSchema)

module.exports = Role