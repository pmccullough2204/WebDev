var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/indexCtrl.js');

/* GET home page. */
router.get('/', ctrlIndex.index);

module.exports = router;
