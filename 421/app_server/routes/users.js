var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/usersCtrl.js');

/* GET home page. */
router.get('/', ctrlUsers.index);

module.exports = router;

