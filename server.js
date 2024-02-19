const express = require("express");
const app =express();

const roleRouter = require("./api/roles/role.router")
const userRouter = require("./api/Users/user.router")
const eventRouter = require("./api/events/event.router")
const participantRouter = require("./api/participants/participant.router")

app.use(express.json());

const PORT = 5000;

app.use("/api/roles",roleRouter);
app.use("/api/users",userRouter);
app.use("/api/events",eventRouter);
app.use("/api/participants",participantRouter);

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}`);
});