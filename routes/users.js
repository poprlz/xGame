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
    console.log("user_password:"+req.param('user_password'))
    console.log("user_name:"+req.param('user_name'))
    res.json({ resp_code: '00000' })
    //res.render('users/login', { title: '用户登陆' });
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
