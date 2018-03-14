var server = require('http'); //importing the http built in module for creating the server
var obj = require('./exports'); //importing you created module

server.createServer(function(request,response)
{
    response.writeHead(200,{'content-type': 'text/html'});

    response.write(obj.mymodule()); //write the contents
    response.end(); //end() method for cloing the http server connection 
}).listen(2345);

console.log("The server connection is Establised successfully at 127.0.0.1:2345 - localhost");