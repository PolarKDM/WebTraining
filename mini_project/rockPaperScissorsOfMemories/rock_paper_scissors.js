const SCISSORS = 1;
const ROCK = 2;
const PAPER = 3;

let playerCode = 0;

// 난수 생성기
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 가위바위보를 내면 실행
function playRPS() {
  let result = document.getElementById("result");
  // let test = document.getElementById('test');
  let cmptCode = rand(SCISSORS, PAPER + 1);
  let cmptStr = changeToRPSString(cmptCode);

  // test.innerHTML = "상대는 현재 " + cmptStr + " " + cmptCode + "낼 준비를 하고있습니다."

  // 가위바위보 실행
  if (playerCode === cmptCode) {
    // 무승부
    result.innerHTML = "상대는 " + cmptStr + "를 냈습니다. 무승부입니다.";
  } else if (playerCode === SCISSORS) {
    // 가위
    if (cmptCode === ROCK) {
      result.innerHTML = isLose(cmptStr);
    } else if (cmptCode == PAPER) {
      result.innerHTML = isWin(cmptStr);
    } else {
      result.innerHTML = isError(cmptCode);
    }
  } else if (playerCode === ROCK) {
    // 바위
    if (cmptCode === PAPER) {
      result.innerHTML = isLose(cmptStr);
    } else if (cmptCode == SCISSORS) {
      result.innerHTML = isWin(cmptStr);
    } else {
      result.innerHTML = isError(cmptCode);
    }
  } else if (playerCode === PAPER) {
    // 보
    if (cmptCode === SCISSORS) {
      result.innerHTML = isLose(cmptStr);
    } else if (cmptCode == ROCK) {
      result.innerHTML = isWin(cmptStr);
    } else {
      result.innerHTML = isError(cmptCode);
    }
  } else {
    result.innerHTML = isError(playerCode);
  }
}

// 가위, 바위, 보의 문자열을 코드로 바꿈
function changeToRPSCode(rpsStr) {
  let rpsCode = 0;
  switch (rpsStr) {
    case "가위":
      rpsCode = SCISSORS;
      break;
    case "바위":
      rpsCode = ROCK;
      break;
    case "보":
      rpsCode = PAPER;
      break;
    default:
      rpsCode = 0;
      break;
  }
  return rpsCode;
}

// 가위바위보 코드를 문자열로 바꿈
function changeToRPSString(rpsCode) {
  let rpsStr = "";
  switch (rpsCode) {
    case 1:
      rpsStr = "가위";
      break;
    case 2:
      rpsStr = "바위";
      break;
    case 3:
      rpsStr = "보";
      break;
    default:
      rpsStr = "값을 벗어났습니다.";
      break;
  }
  return rpsStr;
}

// 가위, 바위, 보 선택
function selectRPS(value) {
  let rpsCode = changeToRPSCode(value);
  let str = document.getElementById("ready");
  str.innerHTML = value + "를 내시겠습니까?";

  return rpsCode;
}

// 이겼을때 출력
function isWin(rpsStr) {
  return "상대는 " + rpsStr + "를 냈습니다. 당신이 이겼습니다.";
}

// 졌을때 출력
function isLose(rpsStr) {
  return "상대는 " + rpsStr + "를 냈습니다. 당신이 졌습니다.";
}

// 1 ~ 3을 제외한 다른값이 들어가면 오류 출력
function isError(rpsCode) {
  return "오류!! 값을 벗어났습니다.";
}
