const{createRole ,getRoles}=require("../controllers/role.controller")
const router =require("express").Router();

router.post("/",createRole)
router.get("/",getRoles)

module.exports=router;