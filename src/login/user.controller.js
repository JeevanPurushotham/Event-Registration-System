const { getUsers } = require("./login.service");
const {create} = require("./login.service")
const {getUserByUserIds} = require("./login.service")
const {updateUsers} = require("./login.service")
const {deleteUser} = require("./login.service")
// const bcrypt = require('bcryptjs');
const{genSaltSync,hashSync,compareSync}=require("bcrypt")
const{sign}=require("jsonwebtoken")

module.exports={
    
    createUser:(req,res)=>{
        const body=req.body;
        const password=req.body;
        const salt=genSaltSync(10); 
        // body.password =hashSync(body.password, salt)
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


    getUsers:(req,res)=>{
        const body=req.body;
        getUsers( (error,results)=>{
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
    
    getUserByUserId: (req, res) => {
        const data = req.body;
        if (!data || !data.id) {
            return res.status(400).json({
                success: 0,
                message: "Invalid request data"
            });
        }
    
        getUserByUserIds(data, (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    
    
    updateUser: (req, res) => {
        const body = req.body;
          
        updateUsers(body, (error, results) => {
            if (error) {
                console.error(error);
                return res.json({
                    success: 0,
                    message: 'Failed to update user',
                });
            }
    
            // Check the "affectedRows" property to see if any rows were affected by the update
            if (results && results.affectedRows > 0) {
                return res.json({
                    success: 1,
                    message: 'Update successful',
                });
            } else {
                return res.json({
                    success: 0,
                    message: 'No user found to update',
                });
            }
        });
    },
    
    deleteUser:(req,res)=>{
        const data=req.body;
        deleteUser(data,(error,results)=>{
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