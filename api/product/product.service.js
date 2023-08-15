const pool = require("../../config/database");

module.exports = {
  
    addProduct: (data, callback) => {
      pool.query(
        `insert into product(picture_map_id,manual_description,accounts_description,model_suitability,specification,part_no,consumer_price,weight,new_consumer_price) 
          values(?,?,?,?,?,?,?,?)`,
        [
          data.picture_map_id,
          data.manual_description,
          data.accounts_description,
          data.model_suitability,
          data.specification,
          data.consumer_price,
          data.weight,
          data.new_consumer_price
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