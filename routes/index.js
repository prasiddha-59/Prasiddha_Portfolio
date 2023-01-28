var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home' });
});

router.get('/home', function (req, res, next) {
  res.render('index', { page: 'Home' });
});


router.get('/projects', function (req, res, next) {
  res.render('projects.ejs', { page: 'Projects' });
});

router.get('/about-me', function (req, res, next) {
  res.render('about_me', { page: 'About Me' });
});

router.get('/services', function (req, res, next) {
  res.render('services.ejs', { page: 'Services' });
});

router.get('/contact-me', function (req, res, next) {
  res.render('contact_me.ejs', { page: 'Contact Me' });
});

router.post('/contact-me', function (req, res) {
  console.log(req.body);
  res.send('Success');
});




module.exports = router;
