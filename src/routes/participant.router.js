const{createparticipant}=require("./participant.controller")
const{getparticipant}=require("./participant.controller")
const{getparticipantbyparticipantId}=require("./participant.controller")
const{updateparticipant}=require("./participant.controller")
const{deleteparticipant}=require("./participant.controller")
const router =require("express").Router();

router.post("/",createparticipant)
router.get("/",getparticipant)
router.get("/:id",getparticipantbyparticipantId)
router.patch("/:id",updateparticipant)
router.delete("/:id",deleteparticipant)



module.exports=router;