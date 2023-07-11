const { registerUser,getUsers } = require("./user.service");

module.exports = {
  register: (req, res) => {
    const body = req.body;
    console.log("err4");
    registerUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      console.log("err3", body);
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getUserList: (req, res) => {
    const body = req.body;
    console.log("err4");
    getUsers(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "DB connection error",
        });
      }
      console.log("err3", body);
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

};
