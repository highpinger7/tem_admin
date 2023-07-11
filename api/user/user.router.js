const {register,getUserList} = require('./user.controller');
const router = require("express").Router();

router.post('/',register);
router.get('/getUserList',getUserList);

module.exports = router;