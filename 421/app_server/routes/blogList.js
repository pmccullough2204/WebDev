var express = require('express');
var router = express.Router();
var ctrlBList = require('../controllers/blogListCtrl.js');

/* GET home page. */
router.get('/', ctrlBList.index);

module.exports = router;


module.exports = router;
