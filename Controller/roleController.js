const Role = require("./../Model/roleModel")

exports.roleExistanceAndCreate = async (req, res, next) => {
    try{
        const existedRole = await Role.findOne({type: req.body.type})   
        if(existedRole!=null && (existedRole.type=='admin' || existedRole.type=='organizer')){
            return res.status(404).json({
                status : "fail",
                message : "Role is exist in Db, Can not create a duplicate role"
            })
        }

        const newRole = await Role.create(req.body)
         
        res.status(200).json({
            status : "success",
            data : {
                role : newRole
            },
            message: "Role created successfully"
        })

    }catch(err){
        res.status(404).json({
            status : "fail",
            message :  "Unable to create role"
        })
    }
}