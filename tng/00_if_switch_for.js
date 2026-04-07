// 짝수, 홀수 판별
let num = 0

if(typeof num !== 'number' || num === 0) {
  console.log('잘못된 입력입니다.')
} else if(num % 2 === 0) {
  console.log('짝수입니다.');
} else {
  console.log('홀수입니다.');
}


// 날짜 입력, 요일 출력
// let month = 4
let date = 7

// 수요일 1일

// 7일부터, i = date % 7 
// 월6 화0 수1  목 2 금3 토4 일5

for(i = 0; 1 <= 6; i++) {
  if(date % 7 === (6)) {
  
  }

}

console.log(`${month}월 ${date}일은 ${day}요일입니다.`)
