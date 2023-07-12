const pool = require("../../config/database");

module.exports = {
  registerUser: (data, callback) => {
    pool.query(
      `insert into registration(first_name,last_name,status,email,password,phone_number,is_admin,is_emp) 
        values(?,?,?,?,?,?,?,?)`,
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
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUsers: (data, callback) => {
    pool.query(`select * from registration`, (error, results, field) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getUserById: (data, callback) => {
    pool.query(
      `select * from registration where id = ?`,
      [data.id],
      (error, results, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateUserById: (data, callback) => {
    pool.query(
      `update registration set first_name=?,last_name=?,status=?,email=?,password=?,phone_number=?,is_admin=?,is_emp=? where id=?`,
      [
        data.first_name,
        data.last_name,
        data.status,
        data.email,
        data.password,
        data.phone_number,
        data.is_admin,
        data.is_emp,
        data.id,
      ],
      (error, results, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  deleteUserById: (data, callback) => {
    console.log('data:',data);
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
