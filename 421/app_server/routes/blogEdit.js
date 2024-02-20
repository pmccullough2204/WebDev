var express = require('express');
var router = express.Router();
var ctrlBEdit = require('../controllers/blogEditCtrl.js');
/* GET home page. */
router.get('/', ctrlBEdit.index);

module.exports = router;