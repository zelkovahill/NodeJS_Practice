// 예제 코드


// 파일 생성
const fs = require('fs')

fs.appendFile('mynewfile1.txt', ' This is my test.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

const fs = require('fs')

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


const fs = require('fs')

fs.writeFile('mynewfile3.txt', ' This is my test.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


// 파일 삭제
const fs = require('fs')

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


// 파일 이름 바꾸기
const fs = require('fs')

fs.rename('mynewfile1.txt', 'myrebanedfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});