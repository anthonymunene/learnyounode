var http = require('http'),
    url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf8')
    .on('error', function(e) {
      console.log(e.message);
    })
    .on('data', function(data) {
      console.log(data);
    });
});
