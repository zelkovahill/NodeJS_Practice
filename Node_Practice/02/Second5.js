// 함수 선언
var sayNode = function () {
  console.log('Node')
}

// 변수 선언
var es = 'ES'


// 객체 정의
var oldObject = {
  sayJS: function () {
    console.log('JS')
  },
  sayNode: sayNode,
}

oldObject[es + 6] = 'Fantastic'
oldObject.sayNode(); // Node
oldObject.sayJS();  // JS
console.log(oldObject.ES6)  // Fantastic