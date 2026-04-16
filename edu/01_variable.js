// 변수 (variable): 변하는 데이터(값)를 저장하는 공간, 변수를 지정하는 속성: var & let
// 변수 처음 선언할 때 "let"빼먹지 않기! 빼먹으면 var로 선언한 것이 됨


// var: 1.중복 선언 가능, 2.재할당 가능, 3.함수레벨 스코프
var num1; // 변수 선언: 값을 넣을 물통을 만듦
var num1; // 1. 중복 선언 가능: 같은 이름으로 여러개 만들 수 있음
var age = 1; //변수 선언 및 초기화: 변수에 처음으로 값을 할당함(넣음)
age = 20; // 2. 재할당: 이미 값이 있는 변수에, 다른 값을 할당함

num1 = 90; // num1 변수의 초기화
str1 = 'sadsd'; // = (var str = 'sadsd';)   str1 변수선언 및 초기화




// let: 1.중복선언 불가능, 2.재할당 가능, 3.블록레벨 스코프
let name = '홍길동';
// let name = '홍길동';  //1.오류: 중복 선언 불가능
name = '둘리';  //2.재할당 가능
console.log(name);   //예시: '둘리'가 출력




// 상수(constance): 변하지 않는 데이터(값)를 저장하는 공간
//  1.중복선언 불가능, 2.재할당 불가능, 3.블록레벨 스코프
const gender = 'M';
// const gender  //1.중복선언 불가능
// gender = 'F';   //2.재할당 불가능





// 호이스팅(hoisting)
// 코드실행 전 엔진에서 먼저 코드를 읽을 때, var의 경우; 엔진에 있는 인터프린터가 선언된 변수와 함수를 먼저 메모리에 올려둠(메모해둠).
// 실제로 실행할 때 이걸 가져와서 출력하니 코드 순서가 이상해도 에러가 안 남(변수가 아직 선언되지 않았는데 마치 선언된 것 처럼 처리됨) 
console.log(hoho);  //undefined 출력
var hoho = '호호'; 
console.log(hoho);  //'호호' 출력


// let와 const의 경우 호이스팅 문제를 발생시키지 않음. 
// 선언되지 않은 변수가 등장하면 참조할 값이 없으니 에러남(참조 에러)
// console.log(haha);  //참조 에러 
let haha = '하하';
console.log(haha);






// 스코프: 함수레벨 스코프 & 블록레벨 스코프
////// 함수레벨 스코프
////// : var로 선언한 변수는 블록범위를 벗어나도, 같은 함수 범위 안에서는 에러가 안 남(var는 호이스팅 적용되므로)
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 출력 ({블록} 밖에서도 접근 가능)
}
console.log(x); // undefind(함수 밖에서는 접근 불가)

test();


////// 블록레벨 스코프
////// 블록: 함수에서 '{}'로 둘러싸인 범위를 의미
////// 함수 블록 안에 let&const 변수를 선언 시, 블록 안의 실행이 끝나면 블록 안의 데이터는 메모리에서 사라짐.
function test() {
  if (true) {
    var x = 10;
    console.log(x); // 10 출력 (같은 {블록} 안이므로 실행 잘 됨)
  }
  console.log(x); // undefind(블럭 밖에서는 접근 불가)
}
console.log(x); // undefind

test();



// console.log(변수 등); : 괄호 안의 내용을 출력해서 보여줌
// literal(리터럴): 우리가 변수에 넣어주는 "고정된 값", 예시 1 '1111'






var mul = undefined;
console.log(mul);


mul = "1";
console.log(mul);




