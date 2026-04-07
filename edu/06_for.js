// for문: 기본문법
// for(초기값; 조건식; 1회 루프당 증감값 ) {
//    //반복하고 싶은 처리
// }

// 인피니티 루프: 조건식 설정 실수하면, 무한루프에 빠지는 일이 생김.




// break: 처리중 break를 만나면 그 즉시 루프 종료
for(let i = 0; i < 3; i++) {
  console.log(`${i}번째 루프문`);

  if(i === 1) {
    break;  
  }
}




// continue: 만나는 즉시 그 다음 루프로 진행. 밑의 코드는 실행 X
//     여기서는 i = 0, 2, 4의 경우 if가 true이므로 continue실행되어 출력X
for(let i = 0; i < 5; i++) {
  if(i % 2 === 0) {
    continue; 
  }
  console.log(`${i}번째 루프문`);
}




// 다중루프
for(let i = 0; i < 3; i++) {
  console.log(`부모: ${i}번째`);

  for(let z = 0; z < 3; z++) {
    console.log(`자식: ${z}번째`);
  }
}