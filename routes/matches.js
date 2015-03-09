var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('matches/index', { title: 'Express' });
});
router.get('/edit/:id([0-9]*)', function(req, res, next) {
    console.log(req.param('id'))
    res.render('matches/edit', { title: 'Express' });
});
router.get('/show', function(req, res, next) {
    res.render('matches/show', { title: 'Express' });
});
router.post('/save/:id([0-9]*)', function(req, res, next) {
    console.log(req.param('id'))
    res.render('matches/show', { title: 'Express' });
})
module.exports = router;