// 전통적인 함수 선언
function add1(x, y) {
  return x + y
}

// 화살표 함수 (Block body)
const add2 = (x, y) => {
  return x + y
}

// 화살표 함수 (Concise body)
const add3 = (x, y) => x + y

// 괄호 사용한 간결한 화살표 함수
const add4 = (x, y) => (x + y)

// 전통적인 함수 선언 (부정)
function not1(x) {
  return !x;
}

// 화살표 함수 (부정)
const not2 = x => !x;