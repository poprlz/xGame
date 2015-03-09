var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('teams/index', { title: 'Express' });
});
router.get('/edit/:id([0-9]*)', function(req, res, next) {
    console.log(req.param('id'))
    res.render('teams/edit', { title: 'Express' });
});
router.get('/show', function(req, res, next) {
    res.render('teams/show', { title: 'Express' });
});
router.post('/save/:id([0-9]*)', function(req, res, next) {
    console.log(req.param('id'))
    res.render('teams/show', { title: 'Express' });
})
module.exports = router;