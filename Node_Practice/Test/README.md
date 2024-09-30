## 예제

```js
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(10001);
```

### 1\. const http = require\('http'\);

* require('http')를 사용하여 Node.js의 기본 모듈인 http 묘듈을 가져옴
* http 모듈은 HTTP 서버와 클라이언트 기능 제공
* 이 코드는 서버를 생성하는 데 사용
<br>

### 2\. http\.createServer\(function \(req\, res\) \{

* http.createServer()는 HTTP 서버 객체를 생성하는 함수
* 이 함수는 콜백 함수를 인수로 받으며, 서버에 요청이 들어 올때 마다 호출

<br>
### 3\. res\.witeHead\(200\,\{'Content\-Type': 'text/plain'\}\);

* res.writeHead()는 HTTP 응답의 헤더를 설정하는 메서드
    * 첫 번째 인수 200은 HTTP 상태 코드 나타냄. 200은 성공적인 요청을 의미
    * 두 번째 인수는 응답 헤더
        * {'Content-Type': 'text/plain'}은 응답이 일반 텍스트 형식임을 나타냄.
        * 이를 통해 브라우저나 클라이언트는 서버가 어떤 형식의 데이터를 전송하는 지 알 수 있음.

<br>
### 4\. res\.end\('Hello World\!'\);

* res.end()는 응답을 종료하고 클라이언트에게 데이터를 전송하는 메서드
* 인수로 전달된 'Hello World!'가 클라이언트에게 응답 본문으로 전송

<br>
### 5. }).listen(10001);

* listen(10001)은 서버가 특정 포트(10001)에서 클라이언트 요청을 기다리도록 설정
* 즉, 이 서버는 포트 10001에서 실행
* 해당 포트로 들어오는 모든 HTTP 요청을 처리