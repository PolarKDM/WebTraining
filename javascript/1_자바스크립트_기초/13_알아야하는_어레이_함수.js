/**
 * 배열 함수(Array Function)
 */

let color = [
    'red',
    'blue',
    'yellow',
    'green',
    'black',
    'white',
];
console.log(color);

// push() : 새로운 값을 맨끝에다가 추가하고 해당 array의 길이를 반환한다.

console.log(color.push('pupple')); // push() 함수의 리턴값은 해당 array의 길이이다.
console.log(color);

console.log("----------");
// pop() : 마지막 elements를 삭제하고 삭제한 값을 반환한다.
console.log(color.pop());
console.log(color);

// shift() : 첫번째 값을 삭제하고 그 값을 반환한다.
console.log(color.shift());
console.log(color);

// unshift() : 첫번째에 값을 추가하고 해당 array의 길이를 반환한다.
console.log(color.unshift('red'));
console.log(color);

// splice([시작지점], [갯수]) : [시작지점]에서 [갯수]만큼 삭제하고 그 값들을 반환한다.
console.log(color.splice(0, 3));
console.log(color);

color = [
    'red',
    'blue',
    'yellow',
    'green',
    'black',
    'white',
];
console.log(color);

// concat() : 배열 맨끝에 추가한 값을 넣은 배열을 새로만들어서 반환한다. 원래 변수를 다시 출력해보면 변화가 없는것을 알 수 있다.
// push()와 concat()은 해당 배열 맨 끝에 값을 추가하는 기능은 같지만 원래 배열을 변경을 하냐 안하냐의 차이가 있다.
console.log(color.concat('pupple'));
console.log(color);

// slice([시작지점], [끝지점]) : [시작지점] ~ [끝지점]-1 번째까지 값들을 반환한다. concat()과 같이 기존 배열에는 변화가 없다.
console.log(color.slice(0, 3));
console.log(color);


// spread operator(...)
let color2 = [
    ...color, // ...을 입력하고 color를 넣게되면 color의 모든 값들이 펼쳐서 color2에 저장된다.
]
console.log(color2); // [ 'red', 'blue', 'yellow', 'green', 'black', 'white' ]

let color3 = [
    color, // 그냥 color를 넣게되면 배열안에 배열을 넣은것이기 때문에 대괄호 2개로 감싸지게 된다.
]
console.log(color3); // [ [ 'red', 'blue', 'yellow', 'green', 'black', 'white' ] ]

let color4 = color; // 배열에 넣지말고 그냥 변수에 color를 저장하게 되면 배열에 ...color를 저장한 것과 똑같은 결과가 나온다.
console.log(color4); // [ 'red', 'blue', 'yellow', 'green', 'black', 'white' ]

console.log(color4 === color); // color4를 color와 같은지 비교하면 color4에 color를 저장했기 때문에 당연히 true가 출력된다.

// console.log([
//     ...color,
// ] === color); // ...로 값을 펼쳐놓으면 완전히 새로운 배열이 생성되기 때문에(메모리 공간이 다르다) 값이 같더라도 false가 출력된다.


// join([separator]) : 배열의 모든 요소들을 연결하여 하나의 문자열로 만드는 함수이다. [separator]는 각 배열의 요소를 구분할 문자열을 설정한다. 기본값(,)
console.log(typeof color.join()); // string
console.log(color.join()); // red,blue,yellow,green,black,white
console.log(color.join(' / ')); // red / blue / yellow / green / black / white


// sort()
// 오름차순
color.sort();
console.log(color);

// 내림차순
color.reverse();
console.log(color);

let num = [1, 9, 7, 5, 3,];
console.log(num);

// a, b를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환한다.
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환한다.
// 3) 원래 순서를 그대로 두려면 0을 반환한다.
num.sort((a, b)=>{
    return a > b ? 1 : -1; // a가 b보다 크면 0보다 큰 숫자를 반환하기 때문에 오름차순이 된다.
})
console.log(num);

// map() : 배열에 있는 모든 값들을 순회를 하면서 그 각각의 값들을 변형시키는 역할을 한다.
console.log(color.map(x => `색 : ${x}`)); // ['색 : yellow', '색 : white', '색 : red', '색 : green', '색 : blue', '색 : black']

console.log(color.map(x => { // map 함수 안에 조건을 넣어서 특정 요소만 변경할 수 있다.
    if(x === 'red') {
        return `빨간색 : ${x}`;
    } else {
        return x;
    }
})); // [ 'yellow', 'white', '빨간색 : red', 'green', 'blue', 'black' ]
console.log(color); // [ 'yellow', 'white', 'red', 'green', 'blue', 'black' ]
// map() 함수도 원래 배열에는 변경 되지 않는다.


// filter() : 조건에 해당되는 값을 찾아서 모두 반환한다. true가 반환되면 filter에 값이 들어가고 false가 나오면 들어가지 않는다.
let num2 = [1, 8, 7, 6, 3];

console.log(num2.filter(x => x % 2 === 0)); // num2의 요소들 중 짝수인 값 찾아서 반환한다.
// [ 8, 6 ]

// find() : 조건에 해당되는 값을 순서대로 찾아서 먼저 찾은 값만 반환한다.
console.log(num2.find(x => x % 2 === 0));
// 8

// findIndex() : 조건의 해당되는 값을 순서대로 찾아서 먼저 찾은 값의 index를 반환한다.
console.log(num2.findIndex(x => x % 2 === 0));

// reduce((p, n) => [식], [초기값]) : 배열의 요소를 하나로 줄이는(reduce) 작업을 수행하는 함수이다. reduce 함수로 배열의 각 요소를 순회하면서 누적된 값을 계산하고 최종 결과를 반환할 수 있다.
// p : 이전 순회에서의 최종 결과값. [초기값]이 설정된 경우 첫번째 순회때 p는 [초기값]이 된다.
// n : 현재 순회중인 배열의 값
console.log(num2.reduce((p, n) => p + n, 0)); // 배열에 있는 값들을 모두 더한다.

console.log(num2.reduce(function(p, n){
    return p + n;
}, 0));