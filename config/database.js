const {createPool} = require("mysql");

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"tem_db",
    connectionLimit:10
});

// pool.query(`select * from registration`,(err,res,fields)=>{
//     if(err) {
//         return console.log(err)
//     }
//     return console.log(res)
// })

module.exports = pool