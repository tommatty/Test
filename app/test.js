var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<script>alert(\'testgh2\');</script>')
    res.end('Worked!');
}).listen(8080);