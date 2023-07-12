const pool = require("../../config/database");

module.exports = {
  
    addProduct: (data, callback) => {
      pool.query(
        `insert into product(name,status,is_imp) 
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
  
    getProduct: (data, callback) => {
      pool.query(`select * from product`, (error, results, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      });
    },
  
    getProductById: (data, callback) => {
      pool.query(
        `select * from product where id = ?`,
        [data],
        (error, results, field) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
  
    updateProductById: (data, callback) => {
      pool.query(
        `update product set name=?,status=?,is_imp=? where id=?`,
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
  
    deleteProductById: (data, callback) => {
      pool.query(
        `delete from product where id = ?`,
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