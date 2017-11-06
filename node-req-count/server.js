var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    //console.log(path);
    if(globalCounter[property]){
      globalCounter[property]++;
    }else{
      globalCounter[property]=1;
    }
    response.statusCode = 201;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`${property}`)

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(JSON.stringify(globalCounter[property]));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;


