const { registerUser,getUsers,updateUserById,getUserById,deleteUserById } = require("./user.service");

module.exports = {
  register: (req, res) => {
    const body = req.body;
    registerUser(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getUserList: (req, res) => {
    const body = req.body;
    getUsers(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    updateUserById(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserDetails: (req, res) => {
    const body = req.body;
    getUserById(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  deleteUser: (req, res) => {
    const body = req.body;
    console.log('id:',body)
    deleteUserById(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

};
