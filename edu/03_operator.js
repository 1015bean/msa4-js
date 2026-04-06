// 산술 연산자
// +, -, *, /, % => 더하기 빼기 곱하기 나누기 나머지
let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum); // 15 출력

let minus = num1 - num2;
console.log(minus); // -5 출력

let multi = num1 * num2;
console.log(multi); // 50 출력

let division = num1 / num2;
console.log(division); // 0.5 출력

let remainer = num1 % num2;
console.log(remainer); // 5 출력



// 문자열 연결
// 문자열 연결에서 '+'는 오류가 나기 쉬움: 데이터타입이 제대로 체크 안됨. 데이터 형변환 발생(데이터타입을 자동으로 바꿔서 코드처리함)
// 템플릿리터럴을 주로 사용(`문자열${변수}`)
let str1 = 'a' + 'b';
let str2 = `test${str1}`;
console.log(str2);



// 산술 대입 연산자
// 간략화시킨 산술연산자 ('=': 대입 연산자)
let num = 1; 
// *아래 두 코드의 의미는 같음*
num += 1; 
num = num + 1

num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);



// 증감 연산자
// 대상인 값에 1씩 더하거나 빼는 연산자
num = 0; //초기값을 다시 설정해주는 것도 '초기화'라고 부름(이는 매 상황에 따라 다르기 때문에 처음 지정해준 초기값이랑은 다를 수 있음)
console.log(`전위 증감 연산자1: ${++num}`); //'전위'증감연산자이므로 1이 출력
console.log(`전위 증감 연산자2: ${num}`); //48번코드 계산결과가 1이므로 1 출력
num = 0;
console.log(`전위 증감 연산자1: ${num++}`); //'후위'증감연산자이므로 "여기서는 50번코드의 0이 출력"
console.log(`전위 증감 연산자1: ${num}`); //51번코드 계산결과가 1이므로 1이 출력



// 비교 연산자
// 두 값을 비교해서 true 또는 false를 반환하는 연산자
console.log(1>0); //true. 크다(초과)
console.log(1<0); //false. 작다(미만)
console.log(1>=0); //true. 크거나 같다(이상)
console.log(1<=0); //false. 작거나 같다(이하)
console.log(1 == '1'); //true. 불완전 비교(데이터타입은 체크하지 않고 형태만 비교)
console.log(1 === '1'); //false. 완전 비교(데이터타입까지 깐깐하게 체크하여 비교)
console.log(1 != '1'); //false. 불완전비교(형태만 비교, 결과를 역전시켜 반환)
console.log(1 !== '1'); //true. 완전비교(데이터타입까지 비교, 결과를 역전시켜 반환



// 논리 연산자
// and 연산자: '&&', 연결한 모든 조건이 true여야 true를 반환, 하나라도 false면 false를 반환
console.log(1 === 1 && 1 >= 3); //false

// or 연산자: '||' 연결한 조건 중 하나라도 true면 true를 반환, 모든 조건이 false면 false를 반환
console.log(1 === 1 || 1 >= 3); //true

// 소괄호로 묶어서 여러 연산자를 한번에 사용할 수도 있다
num = 1;
console.log((num === 1 || num >= 0) && typeof num === 'string');

// not 연산자; '!', 연산의 결과를 역전시켜서 반환
console.log(!(1 === 1)); //false
let bool = true;
console.log(!bool); //flase