var server = require('http');
var urlparse = require('url');
var file = require('fs');

server.createServer(function(request,response)
{
    var parse_quy = urlparse.parse(request.url,true);
    var parse_res = '.'+ '/'+ parse_quy;
    file.readFile(parse_res,function(err,data)
{
    if(err)
    {
        response.writeHead(404,{'content-type': 'text/html'}); //404 is a status code for the html content is not working properly
        response.end('404 not found');
    }
    else{
        response.write(data); // write the content on the browser
        response.end();
    }
});
   
}).listen(1112);

console.log(" The connection is enabled at 127.0.0.1:1112 ");