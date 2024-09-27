if (true) {
  var x = 3 // 함수 스코프, 블록을 무시하고 함수 내 어디서든 접근 가능
}

if (true) {
  const y = 3 // 블록 스코프, 선언된 블록 내에서만 유효
}

console.log(y)  // // Uncaught ReferenceError: y is not defined