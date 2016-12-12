var http = require('http');

// 监听端口 process.env.PORT为 coding端口, 1340为本地或Daocloud端口
var appPort = process.env.PORT || 1340;

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!')
});

server.listen(appPort, function() {
    console.log('Docker DEMO with Node.js is running.')
});