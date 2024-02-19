const mysql = require("mysql");
const pool =mysql.createPool({
    

    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Harshu123',
    database: 'newdb'
})

console.log("connected")
module.exports =pool;