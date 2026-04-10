// 에러(Error)
// 소스코드에 의해서 수습될 수 없는 심각한 오류

// 예외(Exception)
// 소스코드에 의해서 수습될 수 있는 다소 미약한 오류

// 예외처리(Exception Handling)
// 예외나 오류가 원인으로 전체 시스템의 비정상 동작을 방지하는 기술


// ------------------------------------------------------------------------------------------


// Try문 (예외처리 문법)
//    try: 우리가 실행시키려는 처리
//    catch: 발생한 예외를 어떻게 처리할 것인지
//    finally: 예외 발생여부 상관없이 가장 마지막에 실행된느 처리작성


try {
  // 내가 실행할 처리를 작성
  console.log('가나다');
  console.log('가나다');
  user.name;
} catch(error) {                         // (error): 에러 객체의 정보가 담기게 됨
  // try문에서 에러발생시 처리할 로직 작성
  console.log('에러 발생!!');
  console.log(error.name);               // 발생한 에러명(에러 객체의 프로퍼티)
  console.log(error.message);            // 발생한 에러 내용
  console.log(error.srack);              // 발생한 에러 상세
} finally {
  // 예외 여부와 상관없이 무조건 실행시켜야할 로직 작성(필수는 아님)
  console.log('파이널리 실행');
}
console.log('라마바');
console.log('라마바');

// 가나다
// 가나다
// 에러 발생!!
// 라마바
// 라마바
//  파이널리 실행




// --------------------------------------------------------------------------------------------



try{
  // throw: 강제로 예외 발생시킴
  console.log('트라이 시작');

  if(true) {
    const error = new Error('내가 강제로 일으킨 에러');
    error.name = '커스텀 에러';
    throw error;
  }

  console.log('트라이 끝');
} catch(error) {
  
  console.log(error.stack);
}




// -------------------------------------------------------------------------------------------



// 에러를 상세하게 처리하는 방법
//    여러 종류의  예외를 처리하고 싶을 댸,
//    instanceof 연산자를 사용하여 예외를 구체적으로 처리

try {
  throw new ReferenceError();

} catch(error) {
  if(error instanceof SyntaxError) {
    console.log('싱텍스 에러');
  } else if(error instanceof ReferenceError) {
    console.log('레퍼런스 에러');
  } else {
    console.log('기타 에러');
  }
}