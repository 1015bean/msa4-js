// if문
// if(조건) {
//    조건식이 true일 때 실행할 코드
// } else if(다음조건식) {
//   해당식이 true일때 실행코드
// } else {
//    앞선 모든 조건이 false인 경우 실핼할 코드
// }

// 조건에 따라서 서로 다른 처리(분기 처리)를 하는 문법
// 조건이 true면 해당 처리를 진행하고, 그렇지 않으면 다음 조건 체크 넘어감




// 경계값 테스트
// : 입력 도메인의 최솟값, 최댓값 및 그 경계 바로 위/아래 값에서 결함이 발생할 확률이 높다는 원리를 이용한 테스트 기법





// 1등이면 '우승', 2등이면 '준우승', 3등이면 '3등', 나머지는 '순위 외'를 출력
// + 5등 혹은 7등이면 '특별상'이 출력: 방법 2가지
let rank = 5;
if(rank === 1) {
  console.log('우승');
} else if(rank === 2) {
  console.log('준우승');
} else if(rank === 3) {
  console.log('3등');
} else if(rank === 5 || rank === 7) {
  console.log('특별상');
} else {
  console.log('순위 외');
}

// let rank = 1;
if(rank === 1) {
  console.log('우승');
} else if(rank === 2) {
  console.log('준우승');
} else if(rank === 3) {
  console.log('3등');
} else {
  if(rank !== 5 && rank !== 7) {
    console.log('순위 외');
  } else {
    console.log('특별상')
  }
}



