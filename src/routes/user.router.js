const{createUser,getUsers,getUserByUserId,updateUser,deleteUser}=require("../controllers/user.controller")

const router =require("express").Router();

router.post("/",createUser)
router.get("/",getUsers)
router.get("/:id",getUserByUserId)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)



module.exports=router;