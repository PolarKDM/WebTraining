/**
 * 객체(Object)
 */

// 한쌍의 key : value 로 이루어져 있다. 
let me = {
    name : 'kim',
    age : 29,
    study: function(){
        return `${this.name}은 공부를 시작합니다.`; // 'me'객체 내에서 this를 사용했으므로 this는 현재 'me'객체를 가리키고있다.
    }
};
// 정의하고 싶은 값들을 성격이 비슷한 값들끼리 묶는 역할을 한다.
// this : 자기자신을 가리키는 키워드
// 프로퍼티(property) : 다른 값과 연관되어 있는 값

console.log(me); // { name: 'kim', age: 29, study: [Function: study] }
console.log(me.name); // kim
console.log(me['name']); // kim

const key = 'name';
console.log(me[key]); // kim

console.log(me.study()); // kim은 공부를 시작합니다. - 함수 실행

// 객체를 선언할 때 변수를 사용하는 방법
const nameKey = 'name';
const nameValue = 'kim'

const ageKey = 'age';
const ageValue = 29;

const me2 = { // 변수를 사용하여 객체를 생성할 땐 key값은 변수에 대괄호를 묶어서 선언하고 value값은 변수만 입력하면 된다.
    [nameKey] : nameValue,
    [ageKey] : ageValue,
    study: function(){
        return `${this.name}은 공부를 시작합니다.`;
    }
}
console.log(me2);
console.log(me2.study());

// 객체의 값 변경
me2['name'] = 'dongmin';
console.log(me2);

// 객체에 존재하지 않는 프로퍼티 생성
me2['fullName'] = 'Kim Dong Min'; // 존재하지 않는 key값을 넣으면 새로 생성된다.
console.log(me2);

// 객체 프로퍼티 삭제
delete me2['fullName'];
console.log(me2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const me3 = {
    name : 'kdm',
    age : 29,
}
console.log(me3);

// me3 = {}; // 객체 안의 값들을 바꾸는건 가능하지만 객체 자체를 다시 선언하는건 불가능하다.

/**
 * 추가 기능
 */

// 모든 키값 가져오기
console.log(Object.keys(me2)); // [ 'name', 'age', 'study' ]

// 모든 밸류값 가져오기
console.log(Object.values(me2)); // [ 'dongmin', 29, [Function: study] ]

// 밸류값 생략
const name = 'kdm';

const me4 = {
    name, // name: name 과 같은 의미를 가진다. value의 값이 생략되면 변수의 이름은 key가 되고 해당 변수의 값은 value가 된다.
}
console.log(me4);
