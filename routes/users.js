var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
    res.render('users/login', { title: '用户登陆' });
});
router.post('/login', function(req, res, next) {
    res.render('users/login', { title: '用户登陆' });
});
router.get('/register', function(req, res, next) {
    res.render('users/register', { title: '用户注册' });
});
router.post('/register', function(req, res, next) {
    res.render('users/register', { title: '用户注册' });
});
router.get('/profile', function(req, res, next) {
    res.render('users/profile', { title: '个人信息' });
});
router.post('/profile', function(req, res, next) {
    res.render('users/profile', { title: '个人信息' });
});
module.exports = router;
