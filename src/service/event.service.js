const pool =require('../../config/database')

module.exports={
createEvent:(data,callBack)=>{
    pool.query(
        'INSERT INTO events (event_name, contact_mobile, date, venue_address, max_entry_per_registration,registration_status,user_id) VALUES (?, ?, ?, ?, ?,?,?)',
         [
            data.event_name,
            data.contact_mobile,
            data.date,
            data.venue_address,
            data.max_entry_per_registration,
            data.registration_status,
            data.user_id
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

getEvents: callBack=>{
    pool.query(`select * from events`,
    [],
    (error,results,fields)=>{
        if(error){
            return callBack(error)
        }
            return callBack(null,results)
        }
    )
},

getEventsByEventId: (data, callBack) => {
    const eventIDs = data.id; // Assuming userIDs is an array of user IDs
    pool.query(`SELECT * FROM events WHERE id IN (?)`, [eventIDs], (error, results, fields) => {
        if (error) {
            return callBack(error);
        }
        return callBack(null, results);
    });
},

updateEvent: (data, callBack) => {
    pool.query(
        'UPDATE events SET event_name=? WHERE id=?',
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

deleteEvent:(data,callBack)=>{
    pool.query(
        `delete from events where id =?`,
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