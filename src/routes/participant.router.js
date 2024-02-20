const{createparticipant ,getparticipant}=require("../controllers/participant.controller")
const{getparticipantbyparticipantId ,updateparticipant ,deleteparticipant}=require("../controllers/participant.controller")
const router =require("express").Router();

router.post("/",createparticipant)
router.get("/",getparticipant)
router.get("/:id",getparticipantbyparticipantId)
router.patch("/:id",updateparticipant)
router.delete("/:id",deleteparticipant)



module.exports=router;