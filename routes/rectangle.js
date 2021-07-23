var express = require('express');
var router = express.Router();

var db = require('../db/db')

router.post('/', async function(req, res, next) {
    await db.addRect(req.body);
    res.redirect('/');
})

router.delete('/:id', async function(req, res, next) {
    await db.delRect(req.params.id);
    res.redirect(303, '/');
})

// TODO: Open a new window form
router.get('/edit/:id', async function(req, res, next) {
    res.render('rect_dets', {result: await db.getRectByID(req.params.id)});
});

// TODO: update the database when the rectangle is editted
router.post('/edit', function(req, res, next) {
    res.render('rect_edit');
});

// TODO: Set up response for rectangle details
router.get('/details', function(req, res, next) {
    res.render('rect_edit');
});

module.exports = router;