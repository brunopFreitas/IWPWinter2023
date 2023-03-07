var express = require('express');
var multer = require('multer');

var storage = multer.memoryStorage();;
var upload = multer({storage: storage});

var router = express.Router();

/* GET Post Form. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'New Post' });
});

/* POST submitted */
router.post('/', upload.single('featured_image'), function(req, res, next){
  console.log(req.file.buffer);

  res.redirect('/');
});

module.exports = router;
