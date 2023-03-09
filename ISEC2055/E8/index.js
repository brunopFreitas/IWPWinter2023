var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');
var crypto = require('crypto');

function onRequest(req, res) {
  // Parse the query string
  var query = url.parse(req.url, true, true).query;

  if (query && query.name) {
    // Crypto example
    var mykey = crypto.createCipher('aes-128-cbc', '1234');
    var mystr = mykey.update(query.name, 'utf8', 'hex')
    mystr += mykey.final('hex');
    
    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(mystr), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
    return;
  }

  // Parse the cookies on the request
  var cookies = cookie.parse(req.headers.cookie || '');

  // Get the visitor name set in the cookie
  var name = cookies.name;
    if (name) {
        try {
            var mykey = crypto.createDecipher('aes-128-cbc', '1234');
            name = mykey.update(cookies.name, 'hex', 'utf8')
            name += mykey.final('utf8');
            res.setHeader('Content-Type', 'text/html; charset=UTF-8');
          }
          catch (err){
            console.log(err)
          }
        res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
    } else {
        res.write('<p>Hello, new visitor!</p>');
    }

    res.write('<form method="GET">');
    res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">');
    res.end('</form>');

}

http.createServer(onRequest).listen(3000);