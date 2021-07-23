var express = require('express');
var router = express.Router();

var db = require('../db/db');

router.get('/', async function(req, res, next) {
    
    var out = await db.getRects();
    res.render('index', { result: out });
});

module.exports = router;
