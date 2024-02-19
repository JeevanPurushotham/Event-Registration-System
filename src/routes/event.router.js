const{createEvents}=require("./event.controller")
const{getEvents}=require("./event.controller")
const{getEventsByEventsId}=require("./event.controller")
const{updateEvents}=require("./event.controller")
const{deleteevents}=require("./event.controller")
const router =require("express").Router();

router.post("/",createEvents)
router.get("/",getEvents)
router.get("/:id",getEventsByEventsId)
router.patch("/:id",updateEvents)
router.delete("/:id",deleteevents)

module.exports=router;