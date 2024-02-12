/**
 * 연산자(Operators)
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10); // 20
console.log(10 - 7); // 3
console.log(10 * 10); // 100
console.log(10 / 5); // 2
console.log(10 % 3); // 1
console.log('----------');

/**
 * 증가와 감소(++, --)
 */

let num = 1;
console.log(num); // 1
num++;
console.log(num); // 2
num--;
console.log(num); // 1
console.log('----------');

/**
 * 전위(--n, ++n), 후위(n--, n++)연산자
 */
let result = 1;
console.log(result); // 1

// 후위 연산자 : 해당 문장을 실행하고나서 증감한다.
result = num++; 
console.log(result, num); // 1 2

result = num--;
console.log(result, num); // 2 1

// 전위 연산자 : 먼저 증감하고나서 문장을 실행한다.
result = ++num; 
console.log(result, num); // 2 2

result = --num;
console.log(result, num); // 1 1


/**
 * 숫자 타입이 아닌 타입에 +, - 사용한다면?
 */

let sample = '99';
console.log(+sample); // '99'
console.log(-sample); // '-99'
console.log(typeof +sample); // number
// 문자열에 실제 숫자 값이 될 수 있는 문자가 들어있으면 + 를 붙였을 때 number타입으로 변환시킬수 있다.

console.log(sample); // '99'
console.log(typeof sample); // string
// sample 변수 자체가 number타입으로 변경되는 것은 아니다.

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number
// boolean 값을 숫자로 변환하면 true는 1, false는 0이 된다는 것을 알 수 있다.

sample = 'KDM'; 
console.log(+sample); // NaN -> Not a Number
// 숫자가 아닌 문자열은 Nan을 출력한다.

/**
 * 할당 연산자 (assignment operator, +=, -=, *=, /=, %=)
 */
num = 100;
console.log(num);

num += 10; // num = num + 10
console.log(num); // 110

num -= 10; // num = num - 10
console.log(num); // 100

num *= 10; // num = num * 10
console.log(num); // 1000

num /= 10; // num = num / 10
console.log(num); // 100

num %= 10; // num = num % 10
console.log(num); // 0

console.log('----------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 (==, !=)
 * 2) 값과 타입의 비교 (===, !==)
 * 3) 대소 관계 (<, >, <=, >=)
 */

// 값의 비교
// ==
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
// 해당 값을 타입 변환했을 때 값이 동일하면 true라고 판단한다.

// !=
console.log(5 != 5); // false
console.log(5 != '5'); // false


// 값과 타입의 비교
// ===
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(0 === ''); // false
console.log(true === 1); // false

// !==
console.log(5 !== 5); // false
console.log(5 !== '5'); // true
// 값과 타입을 둘다 비교하므로 ===, !==를 쓰는게 좋다.

console.log('----------');

/**
 * 대소 관계 비교 연산자 (<, >, <=, >=)
 */

console.log(100 > 1); // true
console.log(100 < 1); // false
console.log(100 <= 1); // false
console.log(100 >= 1); // true

console.log('----------');

/**
 * 삼항 조건 연산자 (ternary operator)
 * 조건 ? <true> : <false>;
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
// 조건이 true면 <true>식의 결과값을 출력하고 false면 <false>식의 결과값을 출력한다.

console.log('----------');

/**
 * 논리 연산자 (&&, ||)
 * 1) && : 두 조건이 모두 true여야 true를 반환한다. (and)
 * 2) || : 두 조건중 하나만 true여도 true를 반환한다. (or)
 */

console.log(true && true); // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

console.log('----------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true && 'KDM'); // KDM
console.log(false && 'KDM'); // false
console.log(true || 'KDM'); // true
console.log(false || 'KDM'); // KDM

console.log(true && true && 'KDM'); // KDM
// true && true -> true
// true && 'KDM' -> KDM
console.log(true && false && 'KDM'); // false
// true && false -> false
// false && 'KDM' -> false

// 해당 식처럼 2개 이상도 사용 가능하고, 왼쪽부터 2개씩 묶어서 풀어나가면 된다.

/**
 * 지수 연산자 (**)
 */
console.log(2 ** 2); // 4
console.log(10 ** 3); // 1000

/**
 * null 병합 연산자
 */
let str1;
console.log(str1); // undefined

str1 = str1 ?? 'KDM'; // KDM
console.log(str1);
// <변수> ?? <값> : <변수>값이 undefined이거나 null일 경우 <값>을 저장한다.

str1 = str1 ?? 'wow' // KDM
console.log(str1);
// 이후 ??를 다시 사용해도 str1은 값이 저장된 상태이므로 변경되지 않는다.