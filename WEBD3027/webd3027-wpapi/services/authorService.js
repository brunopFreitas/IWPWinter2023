var WPAPI = require('wpapi');
var wp = new WPAPI({
    endpoint: 'http://a1.w0448225.ca/wp-json',
    username: 'legolas',
    password: 'root'
  });

module.exports = {
    async fillMyPostList () {
        let posts = [];  
        try {  
            const postData = await wp.posts().perPage(10).order('desc').embed();
            for await (const post of postData) {
                let title = post.title.rendered
                let excerpt = post.excerpt.rendered
                let author = post._embedded.author[0].name
                let media = post._embedded["wp:featuredmedia"][0].source_url
                posts.push(
                    {
                        featured_media: media,
                        title: title,
                        author: author,
                        excerpt: excerpt
                    }
                    );
                
            } 
        } catch (error) {
            console.log(error)
        }
        return posts
    },

    createNewPost (newPostObject) {
        let newPost = wp.media().file(newPostObject.featuredMediaBuffer, newPostObject.featuredMediaTitle).create({
            title: newPostObject.featuredMediaTitle
        }).then(media => {
                return wp.posts().create({
                title: newPostObject.title,
                content: newPostObject.content,
                featured_media: media.id,
                categories: [newPostObject.category],
                status: 'publish'
            })
        })
        return newPost
    },

    async getCategory () {
        let categories = await wp.categories()
        return categories
    }
}