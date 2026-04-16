// 데이터 타입: 여러 종류의 데이터를 식별하는 분류 체계(데이터의 분류)
// JS는 하나의 변수에 어떤 타입의 데이터도 저장이 가능

// typeof: 데이터타입을 판별하는 요소 
let num1 = 1
mun1 = "ttt"


// 1. numder: 숫자
let num = 1; //변수 선언 및 초기화
console.log(typeof num); 


// 2. string: 문자열
let str1 = '문자열'; //  ( ' 와 " ) 둘 다 사용가능
let str2 = "문자열";
let str3 = `문자열${num}`; // 템플릿리터럴(작성양식): 변수에 저장된 값을 이용해 문자열을 합칠 때 사용
console.log(str3);

// 2-1. 템플릿리터럴 예시
let id = '아이디';
let pw = '비밀번호';
let msg = '가 틀렸습니다.';
`${id}${msg}`; // ==> '아이디가 틀렸습니다.'


// 3. boolean: 논리(참/거짓)
let bool1 = true;
let bool2 = false;


// 4. undefind: 변수선언만 하고 값은 할당되지 않은 상태(시스템의 선택)
let undefindVal;


// 5. null : 변수에 값이 없음을 의도적으로 명시한 데이터의 타입 
// (개발자의 선택, 나중에 값 할당할지도? 혹시 모를 오류에 대비 & null인 걸 눈으로 보고 알 수 있도록)
let nullVal = null;


// 6. Symbol : 절대 중복되지 않는 원시 타입(primitive type)
const symbol1 = symbol('test');


// 7. Object(객체) : 키(key) & 데이터값(value)을 쌍으로 저장하는 참조 타입(reference type)
//   => 다양한 형태의 데이터를 여러개 저장할 수 있는 데이터타입
let obj = {
  key1: 'val1',
  key2: 123,
  key3: true
};
console.log(obj.key1);





// 원시 타입(primitive type)과 참조 타입(reference type)
// 원시 타입 
//    : number, string, boolean, null, undefined, symbol 등.
//    메모리에 각 데이터값을 서로 따로따로 저장.
//    let num = 5;   let num2 = num;    =>   num과 num2는 각각 5를 가짐

// 참조 타입 
//   : object, 배열 등. 
//   복제된 객체는 "원본 데이터의 주소값"을(참조) 데이터값으로 저장
//   > 둘 중에 하나라도 데이터 값이 바뀌면 둘 다 바뀌어버림


