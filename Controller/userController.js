const dotenv = require('dotenv')
dotenv.config({ path : './../.env'})
const User = require("./../Model/userModel")
const jwt = require('jsonwebtoken')
const util = require('util')
const Role = require('./../Model/roleModel')

const signToken = user => {
    return jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
    }, process.env.SECTRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRE
    })
}

exports.signUp = async (req, res, next) => {
    try{
        const newUser = await User.create(req.body)
        res.status(200).json({
            status : "success",
            data : {
                user : newUser
            },
            message: "user registration successfully"
        })

    }catch(err){
        res.status(404).json({
            status : "fail",
            message : "Unable to register user"
        })
    }

}

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    // check if email or password present in request.
    if(!email || !password){
        return res.status(404).json({
            status : "fail",
            message : "Unable to login"
        })
    }

    // check if user exists with given email
    const user = await User.findOne({ email }).select('+password')   
    if(!user || !(await user.camparePasswordInDb(password, user.password))){
        return res.status(404).json({
            status : "fail",
            message : "Email/Password does not match"
        })
    }

    const token = signToken(user)
    res.status(200).json({
        status: "Success",
        token,
        user,
        message: "login successful"
    })

}

exports.protect = async (req, res, next) => {
    //1. Read the token & check if it exist
    const testToken = await req.headers.authorization
    let token
    if(testToken){
        if(testToken.startsWith("bearer")){
            token = testToken.split(" ")[1]
        }
    }
    if(!token){
        return res.status(404).json({
            status : "fail",
            message : "You are not logged in!"
        })
    }

    //2. validate the token
    const decodedToken = await util.promisify(jwt.verify)(token, process.env.SECTRET_STR)

    //3. if the user exist 
    const user = await User.findById(decodedToken.id)

    if(!user){
        return res.status(404).json({
            status : "fail",
            message : "The user withen given token not exist"
        })
    }

    //4. allow user to access route
    req.user = user
    next()
}

exports.restrict = (...roles) => {
    return async (req,res,next) => {
        const user_role_id = req.user.role_id
        const role = await Role.findById(user_role_id)
        if(!roles.includes(role.type)){ 
            return res.status(404).json({
                status : "fail",
                message : "Role does not have permission to do operations"
            })
        }
        next()
    }
}