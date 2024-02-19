const{createRole}=require("./role.controller")
const{getRoles}=require("./role.controller")
const router =require("express").Router();

router.post("/",createRole)
router.get("/",getRoles)

module.exports=router;