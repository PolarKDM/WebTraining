/**
 * 함수(function)
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString()); // 1

/**
 * 해당 식이 여러곳에서 쓰여야 한다면 함수가 필요하다.
 * 함수 : 어떤 목적을 가진 작업들을 수행하는 코드들이 모인 블럭
 * DRY -> Don't Repeat Yourself
 */

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(5);
calculate(7);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter 라고 한다.
 *
 * 실제 입력하는 값은 argument 라고 한다.
 */

/**
 * 파라미터는 여러개를 받을 수 있다.
 */

function multiply(x, y) {
  console.log(x * y);
}

multiply(3, 5); // 15

/**
 * 파라미터는 기본값을 설정 할 수 있다.
 */

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(5); // 50

/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
  return x * y;
}
const result1 = multiply(4, 5); // 함수에서 작업한 값을 외부로 반환하여 유용하게 사용할 수 있다.
console.log(result1); // 20

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
  return x * y;
};

const multiply3 = (x, y) => x * y; // 중괄호 안의 식이 간단하면 중괄호를 생략할 수 있다.
console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2; // 파라미터가 한개라면 괄호를 생략 할 수 있다.
console.log(multiply4(5));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(4)(5)(8));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(4)(5)(8));

const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments); // arguments : 실제로 입력한 arguments들을 순서대로 반환 받을 수 있다.
  return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

(function (x, y) {
  console.log(x * y);
})(6, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
// instanceof 좌측값이 우측값이랑 같은지 비교하는 키워드
