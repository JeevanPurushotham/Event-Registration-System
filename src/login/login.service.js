const pool =require('../db/connection')

module.exports={
create:(data,callBack)=>{
    pool.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
         [
            data.email,
            data.userpassword
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

getUsers: callBack=>{
    pool.query(`select * from users`,
    [],
    (error,results,fields)=>{
        if(error){
            return callBack(error)
        }
            return callBack(null,results)
        }
    )
},

getUserByUserIds: (data, callBack) => {
    const userIDs = data.id; // Assuming userIDs is an array of user IDs
    pool.query(`SELECT * FROM users WHERE id IN (?)`, [userIDs], (error, results, fields) => {
        if (error) {
            return callBack(error);
        }
        return callBack(null, results);
    });
},



updateUsers: (data, callBack) => {
    pool.query(
        'UPDATE users SET user_name=? WHERE id=?',
        [data.user_name, data.id],  // Add data.id for the WHERE clause
        (error, results, fields) => {
            if (error) {
                console.error('Error in updateUsers query:', error);
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
},
deleteUser:(data,callBack)=>{
    pool.query(
        `delete from users where id =?`,
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