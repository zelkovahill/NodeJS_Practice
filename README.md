# 1. 자바스크립트 특성
## 1.1. blocking
``` js
function longRunningTask() {

  console.log('작업 끝')
}

console.log('시작')
longRunningTask();
console.log('다음작업')

// ======================================
// 출력 결과
// ======================================
// 시작
// 작업 끝
// 다음작업
// ======================================
```
- 자바스크립트는 **단일 스레드 기반** 언어
- 코드를 위에서 아래로 순차적으로 실행
- 함수가 호출되면, 해당 함수가 끝날 때까지 **블로킹**되어 다음 코드가 실행 X

<br>

## 1.2. callstack
``` js
function first() {
  second()
  console.log('첫 번째')
}

function second() {
  third()
  console.log('두 번째')
}

function third() {
  console.log('세 번째')
}

first();

// ======================================
// 출력 결과
// ======================================
// 세 번째
// 두 번째
// 첫 번째
// ======================================
```
- **호출 스택(Call Stack)** 예제
- 각 함수는 스택에 쌓이면서 실행
- 마지막 함수부터 차례대로 종료

<br>



## 1.3. setTimeout
``` js
function run() {
  console.log('3초 후 실행')
}

console.log('시작')
setTimeout(run, 3000)
console.log('끝')


// ======================================
// 출력 결과
// ======================================
// 시작
// 끝
// 3초 후 실행
// ======================================

```
- `setTimeout(함수, 밀리초)`  함수
    - 지정된 시간이 지나면 함수를 실행하는 **비동기 함수**

<br>

## 1.4. nonblocking
``` js
function longRunningTask() {
  // 오래 걸리는 작업 
  console.log('작업 끝')
}

console.log('시작')

// 비동기 함수 : 지정된 시간이 지나면 함수를 실행하도록 예약
// 0밀리초라고 해도 비동기 작업은 이벤트 루프에 의해 즉시 실행되지 않고,
// 현재 실행 중인 동기 작업 들이 모두 완료된 후 실행
setTimeout(longRunningTask, 0); 

console.log('다음 작업')


// ======================================
// 출력 결과
// ======================================
// 시작
// 다음 작업
// 작업 끝
// ======================================
```
- **비동기 처리**
- `setTimeout(함수,0)` 0밀리초를 설정 했지만 자바스크립트의 **이벤트루프(Event Loop)** 때문에 함수는 모든 동기 작업이 끝난 후 실행

  <br>
  
# 2. 자바스크립트 문법
## 2.1\. const\, let

```js
if (true) {
  var x = 3;    // 함수 스코프, 블록을 무시하고 함수 내 어디서든 접근 가능
}

console.log(x)    // 3

if (true) {
  const y = 3;    // 블록 스코프, 선언된 블록 내에서만 유효
}

console.log(y);    // Uncaught ReferenceError: y is not defined
```

* 함수 스코프 : 블록을 무시하고 함수 내 어디서든 접근 가능
* 블록 스코프 : 선언된 블록 내에서만 유효

<br>

```js
const a = 0;
a = 1; // Uncaught TypeError: Assignment to constant variable.

let b = 0;
b = 1;

const c; // Uncaught SyntaxError: Missing initializer in const declaration
```

* **const(상수)** 는 한 번 값을 할당하면 다른 값을 할당 X
    * 또한 초기화할 때 값을 할당하지 않으면 에러 발생
 
      
<br>
- 자바 스크립트를 사용할 때 한 번 초기화했던 변수에 다른 값을 할당하는 경우는 의외로 적음. <br>
- 따라서 변수 선언시에는 기본적으로 `const`를 사용, 다른 값을 할당해야 하는 상황이 생겼을 때 `let` 사용

  
<br><br>


## 2.2\. 템플릿 문자열

- 큰따옴표나 작은따옴표로 감싸는 기존 문자열과 달리 백틱 `` ` `` 사용
- 특이한 점은 문자열 안에 변수 사용 가능

``` js
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1); // 1 더하기 2는 '3'
```

- 문자열 `string1`은 띄어쓰기와 변수, 더하기 기호 때문에 가독성이 좋지 않음
- 또한 작은따옴표를 이스케이프(escape)하느라 코드가 지저분

<br>

``` js
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4} 는 '${result2}'`;
console.log(string2); // 1 더하기 2는 '3'
```

- `${변수}` 형식으로 변수를 더하기 기호 없이 문자열에 포함 가능
- 따옴표 대신 백틱`` ` ``을 사용하므로 큰따옴표나 작은따옴표와 함께 사용 가능
