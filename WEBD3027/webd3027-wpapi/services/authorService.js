var WPAPI = require('wpapi');
var wp = new WPAPI({
    endpoint: 'http://a1.w0448225.ca/wp-json',
    username: 'bruno',
    password: 'root'
  });

module.exports = {
    async fillMyPostList () {
        let posts = [];  
        try {  
            const postData = await wp.posts();
            for await (const post of postData) {
                let title = post.title.rendered
                let excerpt = post.excerpt.rendered
                let authorData = await wp.users().id(post.author)
                let author = authorData.name
                let mediaData = await wp.media().id(post.featured_media)
                let media = mediaData.source_url
                posts.push(
                    {
                        featured_media: media,
                        title: title,
                        author: author,
                        excerpt: excerpt
                    }
                    );
                
            } 
        //     postData.forEach(function (item) {
                // posts.push(
                // {
                //     featured_media: item.featured_media,
                //     title: item.title.rendered,
                //     author: item.author,
                //     excerpt: item.excerpt.rendered
                // }
                // );
        //   });

        } catch (error) {
            console.log(error)
        }
        return posts
    }
}