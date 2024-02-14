/**
 * try... catch
 *
 * 1) 에러를 발생시킬때 === 던진다. (throw)
 * 2) 명시적으로 인지할 때 === 잡는다. (catch)
 */

function runner() {
  try {
    // try : 에러가 발생할지도 모르는 코드 블록

    console.log("Hello");

    throw new Error("!!! 에러가 발생했습니다. !!!"); // throw : 에러 생성
    // 새로운 에러 객체 생성

    console.log("World!");
  } catch (e) {
    // catch : 에러 발생시 실행되는 코드 블록, e : 실제로 잡은 에러를 출력
    console.log("---catch---");
    console.log(e);
  } finally {
    // finally : try, catch와 상관없이 항상 실행되는 코드 블록
    console.log("---finally---");
  }
}

runner();
