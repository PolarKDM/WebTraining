/**
 * 데이터 타입
 * 
 * 여섯개의 원시 타입(Primitive Type)과
 * 한개의 오브젝트(Object) 타입이 있다.
 * 
 * 원시 타입 : 자바스크립트에서 타입을 구성하는 가장 작은 단위
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 객체 타입
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * - Number 타입
 */ 
const num = 30;
console.log('num의 타입 = ' + typeof num); // number 
// typeof : 변수의 타입 출력

const infinity = Infinity; // 무한대
console.log('infinity의 타입 = ' + typeof Infinity); 

/**
 * - String 타입
 */
const str1 = '안녕"하"세요'; // 문자열을 할당할 땐 큰따옴표나 작은따옴표를 사용한다.
console.log('str1의 타입 = ' + typeof str1); 
console.log(str1); // 안녕"하"세요

/** 
 * Escaping Character
 * 
 * 1) newLine(enter) -> \n
 * 2) tap -> \t
 * 3) \ -> \\
 */ 
const str2 = "hi\nhello"; // newline
console.log(str2);
const str3 = "hi\thello"; // tap
console.log(str3);
const str4 = "hi\\hello"; // 백슬래시
console.log(str4);

/**
 * Template Literal (`) : 입력한 그대로 출력한다.
 */
const strTL = `/// ' " ' " asdf asdf
1122344 hello`;
console.log(strTL);

console.log(`${str1} <- 변수입니다.`) // Template Literal을 사용해서 ${}로 변수를 사용할 수 있다.

/**
 * - Boolean 타입 : true, false
 */
const isTrue = true;
console.log('isTrue의 타입 = ' + typeof isTrue);

/**
 * - undefined 타입 : 사용자가 직접 값을 초기화하지 않았을때 지정되는 값이다.
 * 
 * undefined로 값을 초기화 하는건 지양해야한다.
 */
let noInit;
console.log('noInit의 타입 = ' + typeof noInit);

/**
 * - Null 타입 : undefined와 같이 값이 없다는 뜻이지만 JS에서는 개발자가 명시적으로 없는 값으로 초기화 할때 사용된다.
 */
let init = null;
console.log(init);
console.log('init의 타입 = ' + typeof init); // object 라고 나오는 이유 : 버그

/**
 * - Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 원시 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false

/**
 * - Object 타입
 * 
 * Map : 키:벨류의 쌍으로 이루어져있다. (key:value)
 */
const ob = {
    red: '빨간색',
    orange:'주황색',
    yellow:'노란색'
};
console.log(ob);
console.log(ob['red']);
console.log(ob['orange']);
console.log('ob의 타입 = ' + typeof ob); // object

/**
 * - Array 타입 : 값을 리스트로 나열 할 수 있는 타입이다.
 */

const arr = [
    '1',
    'melon',
    'red',
    'KDM'
];
console.log(arr);
console.log('arr의 타입 = ' + typeof arr); // object

/**
 * index : 0부터 시작해서 1씩 올라간다.
 */
console.log(arr[3]); // [숫자] -> 인덱스 값

/**
 * Static typing : 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. 
 *                 ex) C언어 (int, char, ...)
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 *                 ex) JavaScript (var, let)
 */