var express = require('express');
var router = express.Router();
var ctrlBDelete = require('../controllers/blogDeleteCtrl.js');
/* GET home page. */
router.get('/', ctrlBDelete.index);

module.exports = router;