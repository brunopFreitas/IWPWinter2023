var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
var router = express.Router();
var postService = require('../services/authorService')

/* GET Post Form. */
router.get('/', async function(req, res, next) {
  let categories = await postService.getCategory()
  let categoryList = []
  categories.forEach(category => {
    categoryList.push(
      {
        "id": category.id,
        "name": category.name
      }
    )
  });
  res.render('post', {categoryList: categoryList });
});

/* POST submitted */
router.post('/', upload.single('featured_image'), async function(req, res, next){
  if(req.file.buffer && req.body.title && req.body.content){
    let newPostObject = {
      "featuredMediaBuffer": req.file.buffer,
      "featuredMediaTitle": req.file.originalname,
      "title": req.body.title,
      "content": req.body.content,
      "category": req.body.category
    }
    try {
      let isPosted = await postService.createNewPost(newPostObject)
      if (isPosted) {
        res.redirect('/')  
      } else {
        console.log("Something went wrong while creating a post")
        res.redirect('/post')
      }
    } catch (err) {
      console.log(err)
      res.redirect('/post')
    }
  } else {
    console.log("Missing Parameters")
    res.redirect('/post')
  }
});

module.exports = router;
