var express = require('express');
var postService = require('../services/authorService')
var router = express.Router();
var WPAPI = require('wpapi');
var wp = new WPAPI({
    endpoint: 'http://a1.w0448225.ca/wp-json',
    username: 'bruno',
    password: 'root'
  });

/* GET home page. */
router.get('/', async function (req, res, next) {  
  /* Get the Posts from the WordPressAPI */  
  let posts = await postService.fillMyPostList()
  // let postsWithAuthor = await postService.getMyAuthor(posts)




  res.render('index', { posts: posts });  
});


module.exports = router;





