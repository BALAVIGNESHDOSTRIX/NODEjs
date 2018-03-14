var parser = require('url');

var address = 'http://localhost:8080/default.htm?year=2017&month=february';

var work = parser.parse(address,true);

console.log(work.host); //return the host from the specific URL
console.log(work.search); //return the search request details
console.log(work.pathname); //return the pathname of URL
console.log(work.port); //return the port number of the URL
console.log(work.query); //return the queries of the URl
console.log(work.protocol); //return the protocol used