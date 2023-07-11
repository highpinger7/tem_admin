const pool = require("../../config/database");

module.exports = {
  registerUser: (data, callback) => {
    console.log("err5");
    pool.query(`insert into registration(first_name,last_name,status,email,password,phone_number,is_admin,is_emp) 
        values(?,?,?,?,?,?,?,?)`),
      [
        data.first_name,
        data.last_name,
        data.status,
        data.email,
        data.password,
        data.phone_number,
        data.is_admin,
        data.is_emp,
      ],
      (error, results, field) => {
        if (error) {
          console.log("err1");
          return callback(error);
        }
        console.log("err2");
        return callback(null, results);
      };
  },
  getUsers: (data, callback) => {
    console.log("err6");
    pool.query(`select * from registration`),
    (error, results, field) => {
      if (error) {
        console.log("err1");
        return callback(error);
      }
      console.log("err2");
      return callback(null, results);
    };
  }
};
