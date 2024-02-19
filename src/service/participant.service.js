const pool =require('../../config/database')

module.exports={
createparticipant:(data,callBack)=>{
    pool.query(
        'INSERT INTO participants (name, email, mobile, address, age,event_id) VALUES (?, ?, ?, ?, ?,?)',
         [
            data.name,
            data.email,
            data.mobile,
            data.address,
            data.age,
            data.event_id
         ],
         (error,results,fields)=>{
            if(error){
                callBack(error);
                console.log(error)
            }
            return callBack(null,results)
         }
    )
},

getparticipant: callBack=>{
    pool.query(`select * from participants`,
    [],
    (error,results,fields)=>{
        if(error){
            return callBack(error)
        }
            return callBack(null,results)
        }
    )
},

getparticipantByparticipantIds: (data, callBack) => {
    const participantIDs = data.id; // Assuming userIDs is an array of user IDs
    pool.query(`SELECT * FROM participants WHERE id IN (?)`, [participantIDs], (error, results, fields) => {
        if (error) {
            return callBack(error);
        }
        return callBack(null, results);
    });
},

updateparticipant: (data, callBack) => {
    pool.query(
        'UPDATE participants SET name=? WHERE id=?',
        [data.event_name, data.id],  // Add data.id for the WHERE clause
        (error, results, fields) => {
            if (error) {
                console.error('Error in updateUsers query:', error);
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
},

deleteparticipant:(data,callBack)=>{
    pool.query(
        `delete from participants where id =?`,
        [
          data.id
            
        ],
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results)
        })
},


}