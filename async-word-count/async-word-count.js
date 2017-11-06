var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};
var filePath1 = '../async-word-count/files/fileOne.txt';
var filePath2 = '../async-word-count/files/fileTwo.txt'
var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE

  getWordCount(filePathOne, function(err, data){

  	getWordCount(filePathTwo, function(err, data2){
  		var d = data + data2;
  		callback(err, d);
  	});

  });
  
};

getTotalWordCount(filePath1,filePath2, function(err, data){console.log(data);});
module.exports = getTotalWordCount;
