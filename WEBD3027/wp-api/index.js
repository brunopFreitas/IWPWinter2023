var WPAPI = require( 'wpapi' );
var wp = new WPAPI({
    endpoint: 'http://portfolio.webd3027.ca/wp-json',
    // This assumes you are using basic auth, as described further below
    username: 'bruno',
    password: 'root'
});

wp.media()
    // Specify a path to the file you want to upload, or a Buffer
    .file( '/home/bruno/Downloads/direct.jpeg' )
    .create({
        title: 'Tortoise',
        alt_text: 'This is a tortoise',
        caption: 'Tortoises are cool',
        description: 'Tortoise are cool nice animals'
    })
    .then(function( response ) {
        // Your media is now uploaded: let's associate it with a post
        var newImageId = response.id;
        return wp.posts().id(97).update({
            featured_media: response.id
        });
    })
    .then(function( response ) {
        console.log( 'Media ID #' + response.id );
        console.log( 'is now associated with Post ID #' + response.post );
    })
    .catch(function( err ) {
            console.log(err)
        });

// wp.posts().get(function( err, data ) {
//     if ( err ) {
//         // handle err
//     }
//     // do something with the returned posts
// });

// // Promises
// wp.posts().then(function( data ) {
//     console.log(data)
// }).catch(function( err ) {
//     // handle error
// });