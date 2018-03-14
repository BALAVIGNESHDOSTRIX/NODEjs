var server = require('http');

server.createServer(function(request,response)
{
    response.writeHead(200,{'content-type':'text/html'});   //Status code 200 means the http server working properly 
    response.write("Hello BALAVIGNESH"); //Write the msg into browser for displaying 
    response.end(); //end() method for cloing the http server connection 
}).listen(1111);      //listen method is used to listen the response via port 1111

console.log("The server connection is Establised successfully at 127.0.0.1:1111 - localhost");