/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 원시(primitive) 값은 copy by value 이다.
 *    primitive : 오브젝트를 제외한 생성된 모든 데이터 타입(number, string, ...)
 * 2) 객체는 copy by reference 이다.
 */

// copy by value 예제
let original = '안녕하세요';
let clone = original;
// original 변수에 '안녕하세요'를 저장하고 clone 변수에 original의 값을 그대로 가져와서 저장한다.

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요

clone += ' 반갑습니다.'; // clone에 '반갑습니다'를 추가하고 출력하면
console.log('-------------');
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 반갑습니다.
// clone에만 '안녕하세요 반갑습니다.'로 변경되었다.
// 이처럼 값을 그대로 가져오는 형태를 copy by value 라고 한다.


// copy by reference 예제
let originalObj = {
    name : 'kdm',
    age : 29,
}
let cloneObj = originalObj;
// originalObj 객체에 값을 저장하고 cloneObj 객체에 originalObj 객체를 그대로 저장한다.

console.log(originalObj); // { name: 'kdm', age: 29 }
console.log(cloneObj); // { name: 'kdm', age: 29 }

originalObj['name'] = 'kim dong min'; // originalObj 의 name의 값을 'kim dong min'으로 변경 후 출력하면
console.log('-------------');
console.log(originalObj); // { name: 'kim dong min', age: 29 }
console.log(cloneObj); // { name: 'kim dong min', age: 29 }
// originalObj 와 cloneObj 객체 둘다 name의 값이 변경되었다.
/**
 * 왜 이런 현상이 일어나냐면 현재 선언한 객체는 어느 메모리 한 공간에 저장되어 있고 
 * originalObj 변수는 객체의 메모리 주소를 저장하고 있기 때문이다.
 * cloneObj 변수는 originalObj를 그대로 저장했으므로 객체의 메모리 주소를 받았을 것이고
 * 객체에 값들이 변경이 되면 cloneObj 와 originalObj는 똑같은 메모리 주소를 가리키기 때문에 
 * originalObj 와 cloneObj 둘다 변경된 값이 출력된다.
 * */ 

console.log(originalObj === cloneObj); // true
// 두 변수는 같은 주소를 가리키고 있기 때문에 true가 출력된다.

originalObj = {
    name : 'kdm',
    age : 29,
}
cloneObj = {
    name : 'kdm',
    age : 29,
}

console.log(originalObj === cloneObj); // false
// 객체의 값이 완전히 같아도 객체의 주소가 다르면 false가 출력된다.

/**
 * Spread Operator (...)
 */

const cloneObj2 = {
    ...originalObj, 
};
console.log(cloneObj2); // { name: 'kdm', age: 29 }
console.log(cloneObj2 === originalObj); // false
// ...을 사용해서 값을 복사하면 메모리 공간은 다른곳을 가리킨다. 즉, 똑같은 값을 가지고 있는 객체나 배열을 copy by value로 완전히 새로운 값으로 복사할 수 있다.

const cloneObj3 = {
    year : 2003,
    ...originalObj,
}
console.log(cloneObj3); // { year: 2003, name: 'kdm', age: 29 }
// ...을 사용하면서 따로 프로퍼티를 추가 할 수 있다.

const cloneObj4 = {
    name:'kim dong min',
    ...originalObj,
    age : 55,
}
console.log(cloneObj4); // { name: 'kdm', age: 55 }
// 객체는 key가 동일한 값이 2개이상 입력되었으면 먼저 입력된 값은 나중에 입력된 값에 의해 덮여씌워진다.
// 'kim dong min'이 저장된 name은 ...originalObj에 저장된 name이 뒤에 있으므로 저장되지 않았고
// ...originalObj의 age는 뒤에 변경된 age에 의해 덮어씌워지게 된다.

// copy by reference 추가 예제
let obj1 = {
    name : 'kdm',
    age : 29,
}
let obj2 = obj1;
let obj3 = {
    name : 'kdm',
    age : 29,
}
console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false
console.log(obj2 === obj3); // false



