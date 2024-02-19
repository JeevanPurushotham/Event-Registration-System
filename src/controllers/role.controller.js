const { getRoles } = require("./role.service");
const {create} = require("./role.service")


module.exports={
    
    createRole:(req,res)=>{
        const body=req.body;
      
        create(body, (error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message:"Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    
    getRoles:(req,res)=>{
        const body=req.body;
        getRoles( (error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message:"Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },

}