/**
 * 변수(Variable) 선언하기
 * 
 * 1) var - 더 이상 쓰진 않지만 아직 var 키워드로 만들어진 js가 많기 때문에 알아둬야한다.
 * 2) let
 * 3) const
 */

var name = "KDM";
console.log(name); // 'KDM'

let num = 20;
console.log(num); // 20

// let과 var로 선언시 값을 변경할 수 있다.

const cstNum = 30;
// cstNum = 40; - 에러
console.log(cstNum); // 30

// const로 선언시 초기값을 변경할 수 없다.

/**
 * 선언과 할당
 * 
 * 1) 선언 : var name
 * 2) 할당 : name = 'KDM'
 */

let ud;
console.log(ud); // undefined

// const cst; - 에러(const는 선언과 초기화를 동시에 해줘야한다.)