var express = require('express');
var router = express.Router();

var db = require('../db/db')

router.post('/', async function(req, res, next) {
    await db.addRect(req.body);
    res.redirect('/');
});

router.delete('/:id', async function(req, res, next) {
    await db.delRect(req.params.id);
    res.redirect(303, '/');
});

// Open Rectangle Editor form
router.get('/edit/:id', async function(req, res, next) {
    res.render('rect_edit', {result: await db.getRectByID(req.params.id)});
});

// TODO: Update the database when the rectangle is editted
router.post('/edit', async function(req, res, next) {
    console.log(req.body);
    await db.editRect(req.body);
    res.redirect('/');
});

// Show Rectangle Details
router.get('/details/:id', async function(req, res, next) {
    res.render('rect_dets', {result: await db.getRectByID(req.params.id)});
});

module.exports = router;