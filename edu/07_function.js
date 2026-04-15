// 함수 (function)
// 입력을 받아서 출력을 하는 일련의 과정을 정리한 것
// 특정 처리를 모듈화 해서, 코드의 중복 최소화










// 함수 선언식: 호이스팅 영향 O

//  function '함수이름'('변수: 파라미터') {
//    '처리식'
//    return '반환: 식 처리결과 출력'
//  }



// parameter(변수): 함수 정의에서 전달받은 argment를 저장하는 변수(소괄호 안)인 a와 b
function fnc1(a, b) {       // 선언부: {} 안, 처리할 식이 들어가는 부분
  let sum =  a + b;
  // 반환
  //return: 함수의 연산 결과를 반환
  return sum; 
}
// argument(인수): 함수 호출에서 전달되는 값(소괄호 안)인 1과 2
let result = fnc1(1, 2);
console.log(result);




function fnc2(a, b) {
  return a + b;
}
console.log(fnc2(3, 5));












// 함수 표현식: 호이스팅 영향 X
// !함수의 이름을 생략한! 익명함수를 변수에 할당해서 사용하는 방식(변수 값으로 새로 함수를 선언해서 넣음)

//  변수선언( const 변수이름 ) & 변수초기화 및 함수선언( = function(파라미터) ) {
//            return 처리식 ;
//   }        
//  함수 호출




//fnc3(1, 1);   // 참조에러 발생
const fnc3 = function(a, b) {
  return a + b;
}
console.log(fnc3(10, 20));












// 화살표 함수: 함수 표현식을 간략화 한 것. return 코드가 한줄일 때 간소화 가능

//  변수선언( const 변수이름 ) & 변수초기화 및 함수선언( = (파라미터) => 처리식; )
//     처리식이 복잡할 때는 처리식을 중괄호로 감싸기도 함(  { 처리식 }  )
const fnc4 = (a, b) => a + b;
const fnc5 = a => `ttt ${a}`;
const fnc6 = () => 'test';

const fnc7 = (val) => {
  
  if(val === '비교대상') {
    return true;
  } else {
    return false;
  }

}










// 콜백 함수: 유저가 특정 행동을 보였을 떄 이미 다 끝난 실행을 다시 불러와 실행

// callBackTest이라는 함수 선언
function callBackTest(bool, cb) {
  if(bool) {
    cb();
  } else {
    console.log(`콜백 실행 안함`);
  }
}

// test라는 함수 선언
function test() {
  console.log(`테스트 함수 실행`);
}

// callBackTest이라는 함수를 호출: 파라미터 bool에 true 대입, cb에 test함수를 대입
callBackTest(true, test);  //'태스트 함수 실행' 출력







// 즉시 실행 함수
//   - 함수의 정의와 동시에 바로 호출되는 함수
//   - 단 한번만 호출되며, 다시는 호출 불가
//   - 스코프 보호, 모듈패턴 구현, 클로저 형성을 위해 사용
//   - **익명함수**로 사용하는 것이 일반적

( ()=>{} )();