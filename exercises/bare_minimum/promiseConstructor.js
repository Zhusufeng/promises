/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {

  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        console.log('ERROR HERE: ', err);
        reject(err);
      } else {
        var newData = data.toString().split('\r\n')[0];
        console.log('LOOK!!!: ', newData);
        resolve(newData);
      }
    });
  });
  //This is where then block goes:
  // .then(function(response) {
  //   console.log('THEN RECEIVED ', response);
  //   return response;
  // });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
