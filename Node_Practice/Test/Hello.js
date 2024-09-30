const http = require('http');
const dt = require('./myFirstModule');

// create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200은 모든 것이 정상임을 의미, 두 번째 인수는 응답 헤더를 포함하는 개체
  res.write("The date and time are currently : " + dt.myDateTime());  // write a response to the client
  res.end('Hello World!');  // end the response
}).listen(10001); // the server object listens on port 10001