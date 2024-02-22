const mongoose = require("mongoose")
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: [true, "Please enter a password."],
        minlength: 8,
        select: false
    },
    role_id: {
        type: String,
        required: [true, "Role id is required"]
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

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.camparePasswordInDb = async function(pswd,pswdDB){
    return await bcrypt.compare(pswd,pswdDB)
}

const User = mongoose.model('User', userSchema)

module.exports = User