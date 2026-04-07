// 짝수, 홀수 판별
let num = 4

if(typeof num !== 'number' || num === 0) {
  console.log('잘못된 입력입니다.')
} else if(num % 2 === 0) {
  console.log('짝수입니다.');
} else {
  console.log('홀수입니다.');
}




// 4월 날짜 입력, 요일 출력
// 수요일은 1일

// 7일부터, i = date % 7 
// 월6 화0 수1 목2 금3 토4 일5

let date = 25;
let day = '';

if(date <= 0 || date >= 31) {
   console.log(`잘못된 입력입니다.`);
} else {
  if(date % 7 === 0) {
    day = '화';
  } else if(date % 7 === 1) {
    day = '수';
  } else if(date % 7 === 2) {
    day = '목';
  } else if(date % 7 === 3) {
    day = '금';
  } else if(date % 7 === 4) {
    day = '토';
  } else if(date % 7 === 5) {
    day = '일';
  } else {
    day = '월';
  }
  console.log(`4월 ${date}일은 ${day}요일입니다.`);
}
  