var express = require('express');
var router = express.Router();
var ctrlBAdd = require('../controllers/blogAddCtrl.js');
/* GET home page. */
router.get('/', ctrlBAdd.index);

module.exports = router;
