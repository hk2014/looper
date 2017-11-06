var url = require('url');
var http = require('http');
var path = require('path');
var fs = require('fs');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    console.log(path);
    fs.readFile(endpoint, function(err, data){
      console.log(data);
      if(err){
        throw err;
      }
      globalCounter[dogs] = 1;
      res.end(globalCounter);
    })

  } else if (request.method === 'GET') {
    // YOUR CODE HERE
      console.log(path);
    fs.readFile(endpoint, function(err, data){
      console.log(data);
      if(err){
        throw err;
      }
      globalCounter[dogs] = data;
      res.end(globalCounter);
    })
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;


