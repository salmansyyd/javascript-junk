// creating a simple http server with nodejs

// import the http module
var http = require('http');

// define the port number
var port = 3000;

// create the server
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

// listen to the port  
server.listen(port, function(){
    console.log('Server is running on port: ' + port);
});