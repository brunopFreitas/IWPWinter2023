var express = require('express');
var postService = require('../services/authorService')
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {  
  /* Get the Posts from the WordPressAPI */  
  let posts = await postService.fillMyPostList()
  res.render('index', { posts: posts });  
});


module.exports = router;





