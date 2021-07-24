var express = require('express');
var router = express.Router();

var db = require('../db/db')

// Client requests to add a rectangle
router.post('/', async function(req, res, next) {
    await db.addRect(req.body);
    res.redirect('/');
});

// Client requests to delete a rectangle
router.delete('/:id', async function(req, res, next) {
    await db.delRect(req.params.id);
    res.redirect(303, '/');
});

// Client requests to view the edit rectangle form
router.get('/edit/:id', async function(req, res, next) {
    res.render('rect_edit', {result: await db.getRectByID(req.params.id)});
});

// Client requests to edit the rectangle
router.post('/edit', async function(req, res, next) {
    await db.editRect(req.body);
    res.redirect('/');
});

// Client requests to view the rectangle details
router.get('/details/:id', async function(req, res, next) {
    res.render('rect_dets', {result: await db.getRectByID(req.params.id)});
});

module.exports = router;