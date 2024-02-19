const{createUser}=require("./user.controller")
const{getUsers}=require("./user.controller")
const{getUserByUserId}=require("./user.controller")
const{updateUser}=require("./user.controller")
const{deleteUser}=require("./user.controller")
const router =require("express").Router();

router.post("/",createUser)
router.get("/",getUsers)
router.get("/:id",getUserByUserId)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)



module.exports=router;