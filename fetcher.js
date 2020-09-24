const fs = require('fs');
const request = require('request');

const fetch = process.argv.slice(2);

request(fetch[0], (error, response, body) => {
  fs.writeFile(fetch[1], body, function(err) {
    if (err) throw err;
    console.log('Great Success!');
    });
});



