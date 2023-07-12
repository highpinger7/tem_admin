const pool = require("../../config/database");

module.exports = {
  
    addCategory: (data, callback) => {
      pool.query(
        `insert into category(name,status,is_imp) 
          values(?,?,?,?,?,?,?,?)`,
        [
          data.name,
          data.status,
          data.is_imp,
        ],
        (error, results, field) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
  
    getCategory: (data, callback) => {
      pool.query(`select * from category`, (error, results, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      });
    },
  
    getCategoryById: (data, callback) => {
      pool.query(
        `select * from category where id = ?`,
        [data],
        (error, results, field) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
  
    updateCategoryById: (data, callback) => {
      pool.query(
        `update category set name=?,status=?,is_imp=? where id=?`,
        [
            data.name,
            data.status,
            data.is_imp,
        ],
        (error, results, field) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
  
    deleteCategoryById: (data, callback) => {
      pool.query(
        `delete from category where id = ?`,
        [data],
        (error, results, field) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    }
  };