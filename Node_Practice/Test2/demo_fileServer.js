const http = require('http');
const url = require('url');
const fs = require('fs');

const path = require('path');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  // const filename = "." + q.pathname;
  const filename = path.join(__dirname, q.pathname); 

  console.log(__dirname);
  console.log(filename);

  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);