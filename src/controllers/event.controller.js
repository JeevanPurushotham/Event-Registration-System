const { getEvents} = require("./event.service");
const {createEvent} = require("./event.service")
const {getEventsByEventId} = require("./event.service")
const {updateEvent} = require("./event.service")
const {deleteEvent} = require("./event.service")
// const bcrypt = require('bcryptjs');
const{genSaltSync,hashSync,compareSync}=require("bcrypt")
const{sign}=require("jsonwebtoken")

module.exports={
    
    createEvents:(req,res)=>{
        const body=req.body;
        const password=req.body;
        const salt=genSaltSync(10); 
        // body.password =hashSync(body.password, salt)
        createEvent(body, (error,results)=>{
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


    getEvents:(req,res)=>{
        const body=req.body;
        getEvents( (error,results)=>{
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
    
    getEventsByEventsId: (req, res) => {
        const data = req.body;
        if (!data || !data.id) {
            return res.status(400).json({
                success: 0,
                message: "Invalid request data"
            });
        }
    
        getEventsByEventId(data, (error, results) => {
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
    
    
    updateEvents: (req, res) => {
        const body = req.body;
          
        updateEvent(body, (error, results) => {
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
    
    deleteevents:(req,res)=>{
        const data=req.body;
        deleteEvent(data,(error,results)=>{
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