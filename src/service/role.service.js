const pool =require('../../config/database')

module.exports={
create:(data,callBack)=>{
    pool.query(
        'insert into roles(roletype) values(?)',
         [
            data.roletype
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

getRoles: callBack=>{
    pool.query(`select * from roles`,
    [],
    (error,results,fields)=>{
        if(error){
            return callBack(error)
        }
            return callBack(null,results)
        }
    )
},

}