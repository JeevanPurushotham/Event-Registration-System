const dotenv = require('dotenv')
dotenv.config({ path : './../.env'})
const express = require('express');
const userRouter = require('./../Route/userRouter')
const eventRouter = require('./../Route/eventRouter')
const participantRouter = require('./../Route/participantRouter')
const roleRouter = require('./../Route/roleRouter')
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/participants', participantRouter)
app.use('/api/v1/roles', roleRouter)


mongoose.connect(process.env.DB_CONN_STR).then((conn) => {
    console.log("DB Connection Successful")
}).catch((err) => {
    console.log('Some Error Occurred')
});


app.listen(port,(req,res)=>{
    console.log("i am listening")
});