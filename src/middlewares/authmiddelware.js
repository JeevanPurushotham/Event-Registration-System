const authPage = (permissions)=>{
    return(req,res,next)=>{
        const userRole =req.body.role
        if(permissions.includes(userRole)){
            next()
        }
        else{
            return res.staus(402).json("you dont have permissiom!")
        }
        }
    }

module.exports={authPage}
