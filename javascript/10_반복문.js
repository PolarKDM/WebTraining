/**
 * 조건문(Loops)
 * 
 * 1) for
 * 2) while
 */

for(let i = 0;i < 5; i++){
    console.log(i);
}

let starTower = '';
for(let i = 0;i < 5; i++){
    for(let j = 0; j <= i; j++){
        starTower += '*'
    }
    starTower += '\n'
}
console.log(starTower);

/**
 * for...in : 객체의 key값이나 배열의 index값을 받아올 때 사용한다.
 */
const obj1 = {
    shape : 'square',
    color : 'red'
}

for(let key in obj1){
    console.log(key); // for..in에 객체를 사용하면 key값을 받아올 수 있다.
}

const arr1 = ['red', 'blue', 'yellow', 'black', 'white']

for(let index in arr1){
    console.log(index); // for..in에 배열을 사용하면 index값을 받아올 수 있다.
}

/**
 * for...of : array나 map 등 반복가능한 객체에서 값을 받아올 수 있다.
 */

for(let value of arr1){
    console.log(value); // for..of에 배열을 사용하면 배열의 값을 받아올 수 있다.
}

/**
 * While : <조건>이 false가 될때까지 반복한다.
 * while(<조건>){
 *  <코드>
 * }
 */

let number = 0;

while(number < 10){
    number++;
}
console.log(number);

/**
 * do..while : <조건>을 판단하기 전에 한번 실행 후 <조건>을 판단하고 false가 될 때까지 반복한다.
 * do{
 *  <코드>
 * }while(<조건>)
 */

let number2 = 0;

do{
    number2++;
}while(number2 < 10);
console.log(number2);
console.log('----------');
/**
 * break : 현재 반복문을 강제로 빠져나올때 사용한다.
 */

for(let i = 0;i < 5; i++){
    if(i===3){
        break;
    }
    console.log(i); // 0 1 2
}
console.log('----------');

let number3 = 0;
while(number3 < 5){
    if(number3 === 2){
        break;
    }
    number3++;
    console.log(number3); // 1 2
}
console.log('----------');
/**
 * continue : 현재 진행하고 있는 루프만 스킵하고 다음 루프를 실행한다.
 */

for(let i = 0; i < 5; i++){
    if(i===3){
        continue;
    }
    console.log(i); // 0 1 2 4
}
console.log('----------');

let number4 = 0;
while(number4 < 5){
    number4++;
    if(number4 === 2){
        continue;
    }
    console.log(number4); // 1 3 4 5
}