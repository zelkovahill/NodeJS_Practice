const http = require('http');
const fs = require('fs');

// 파일을 못 가져오는 중
http.createServer(function (req, res) {
  fs.readFile('/demo1.html', function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('File not Found');
      return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log('Server is runing on http://localhost:8080');