const express = require("express");
const app =express();

const roleRouter = require("./src/routes/role.router")
const userRouter = require("./src/routes/user.router")
const eventRouter = require("./src/routes/event.router")
const participantRouter = require("./src/routes/participant.router")

app.use(express.json());

const PORT = 5000;

app.use("/api/roles",roleRouter);
app.use("/api/users",userRouter);
app.use("/api/events",eventRouter);
app.use("/api/participants",participantRouter);

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}`);
});