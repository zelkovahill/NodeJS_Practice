const http = require('http');

// 쿼리 문자열 읽기
// 전달된 함수에는 클라이언트의 요청을 객체(http.IncomingMessage 객체)로 나타내는 인수가 http.createServer() 있다.
// 
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write(req.url);
  res.end();
}).listen(8080);