/**
 * 호이스팅(Hoisting) : 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log(name); // undefined
var name = "KDM";
console.log(name); // KDM

// var로 변수 선언시 다른 언어(C나 JAVA 등)에선 에러가 출력되겠지만 JS에선 호이스팅으로 인해 undefined가 출력된다.
// 이를 방지하려면 let과 const를 사용하자.

// console.log(num); -> 에러
// console.log(cNum); -> 에러
let lNum = 40;
const cNum = 50
console.log(lNum);
console.log(cNum);