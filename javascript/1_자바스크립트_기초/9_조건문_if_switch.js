/**
 * if
 */
let number = 5;

if (number % 2 === 0) {
  console.log("number 변수는 짝수 입니다.");
} else {
  console.log("number 변수는 홀수 입니다.");
}

if (number % 2 === 0) {
  console.log("2의 배수 입니다.");
} else if (number % 3 === 0) {
  console.log("3의 배수 입니다.");
} else {
  console.log("2, 3의 배수가 아닙니다.");
}

const englishDay = "wednesday";

let koreanDay;

switch (englishDay) {
  case "monday":
    koreanDay = "월요일";
    break;
  case "tuesday":
    koreanDay = "화요일";
    break;
  case "wednesday":
    koreanDay = "수요일";
    break;
  case "thursday":
    koreanDay = "목요일";
    break;
  case "friday":
    koreanDay = "금요일";
    break;
  default:
    koreanDay = "주말";
    break;
}
console.log(koreanDay);
