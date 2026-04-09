// Date
// 시간과 날짜를 처리하기 위한 속성과 메서들를 가진 내장 객체
// 내부적으로 로컬 타임존(지역 시각 서울, 일본, 영국...)에 따른 유닉스 타임스탬프(1970년 첫날부터 경과 초 계산) 기반의 동작

const now = new Date(); //현재 시간으로 Date객체를 생성 (인스턴스: 메모리 상에 올려서 사용할 준비가 된 객체)
console.log(now);
const date1 = new Date('1995-12-17 13:59:36');  // 'YYYY-MM-DD hh:mp:ss'로 새로 날짜지정
console.log(date1);
const date2 = new Date(545787963)  // 유닉스타임스탬프 기준 시간으로 지정
console.log(date2);
const date3 = new Date(1995, 11, 17, 3, 24, 0);
console.log(date3);


// Date.getFullYear()
//   number 타입
//  연도를 정수로 변환
console.log(now.getFullYear());


// Date.getMonth()
//   number 타입
//  월을 정수로 변환, ** 0 ~ 11의 값을 반환. 1월 = 0 **
console.log(now.getMonth());


// Date.getDate()
//   number 타입
//  일을 정수로 변환
console.log(now.getDate());


// Date.getHours()
//   number 타입
//  시를 정수로 변환
console.log(now.getHours());


// Date.getMinutes()
//   number 타입
//  분을 정수로 변환
console.log(now.getMinutes());


// Date.getSeconds()
//   number 타입
//  분을 정수로 변환
console.log(now.getSeconds());

// Date.getMilliseconds()
//   number 타입
//  밀리초를 정수로 변환
console.log(now.getMilliseconds());


// Date.getDay()
//   **number 타입**
//  !요일을 정수로 변환!, 일요일 0부터 토요일 6까지 보관
console.log(now.getDay());



// Dare.getTime()
//   number 타입
//  `1970-01-01 00:00:00` 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환
//  단위: 밀리초
console.log(now.getTime());


let noWfomat = `${now.getFullYear()} - ${now.getMonth() +1 } - ${now.getDate()}  ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} : ${now.getMilliseconds()}`;
console.log(noWfomat);
