const {register,getUserList,getUserDetails,updateUser,deleteUser} = require('./user.controller');
const router = require("express").Router();

router.post('/register',register);
router.get('/getUserList',getUserList);
router.post('/getUserDetails',getUserDetails);
router.post('/updateUser',updateUser);
router.post('/deleteUser',deleteUser);

module.exports = router;