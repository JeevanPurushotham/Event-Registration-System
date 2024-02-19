const { getparticipant } = require("./participant.service");
const {createparticipant} = require("./participant.service")
const {getparticipantByparticipantIds} = require("./participant.service")
const {updateparticipant} = require("./participant.service")
const {deleteparticipant} = require("./participant.service")
// const bcrypt = require('bcryptjs');
const{genSaltSync,hashSync,compareSync}=require("bcrypt")
const{sign}=require("jsonwebtoken")

module.exports={
    
    createparticipant:(req,res)=>{
        const body=req.body;
        const password=req.body;
        const salt=genSaltSync(10); 
        // body.password =hashSync(body.password, salt)
        createparticipant(body, (error,results)=>{
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


    getparticipant:(req,res)=>{
        const body=req.body;
        getparticipant( (error,results)=>{
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
    
    getparticipantbyparticipantId: (req, res) => {
        const data = req.body;
        if (!data || !data.id) {
            return res.status(400).json({
                success: 0,
                message: "Invalid request data"
            });
        }
    
        getparticipantByparticipantIds(data, (error, results) => {
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
    
    
    updateparticipant: (req, res) => {
        const body = req.body;
          
        updateparticipant(body, (error, results) => {
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
    
    deleteparticipant:(req,res)=>{
        const data=req.body;
        deleteparticipant(data,(error,results)=>{
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