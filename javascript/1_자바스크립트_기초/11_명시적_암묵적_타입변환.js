/**
 * 타입 변환(Type Conversion)
 *
 * 1) 명시적 : 특정 함수를 사용하여 타입을 변환한다.
 * 2) 암묵적 : 자바스크립트 자체에서 자동으로 타입을 변환한다.
 */

let number = 30;

// 명시적
let stringNumber = number.toString();
console.log(typeof stringNumber, stringNumber);

// toString
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// parseInt
console.log(typeof parseInt("0"), parseInt("0")); // number 0
console.log(parseInt(0o017)); // 15
console.log(parseInt(0x0f)); // 15
console.log(parseInt("string")); // NaN

// parseFloat
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));

// boolean
console.log(typeof Boolean("1"), Boolean("1"));
// true : 값이 있을 경우 true (1, "string", '0', 'false', {}, [] ...)
// false : 값이 없을 경우 false (0, -0, undefined, null, ...)

// 암묵적 :
let test = 50 + "";
console.log(typeof test, test);

console.log("90" + 2); // 902
console.log("90" * 2); // 180
console.log("90" - 2); // 88
console.log("aaa" * 2); // NaN
