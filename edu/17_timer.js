// 타이머 함수
//    일정한 시간 간격으로 작업을 반복 실행하거나, 일정시간이 지난 후 작업을 실행하는데 사용
//    비동기 적으로 코드를 실행


// setTimeout(cb, ms[, ...args]) []는 생략 가능 :number
//    설정한 일정 시간 후에 콜백함수를 실행
//    콜백함수에 파라미터가 필요한 경우 ...args를 추가
//    리턴값은 timeoutID 0이 아닌 정수값(해당 타이머의 고유한 식별값)
const timeoutID1 = setTimeout(() => {
  console.log('1초');
}, 1000);



// clearTimeout(timeoutID;타임아웃의 리턴값);
//    설정한 타임아웃을 삭제
clearTimeout(timeoutID1);



// setInterval(cb, ms[, ...args]): number
//   설정한 일정시간마다 콜백함수를 실행
//    반환값은 intervalID로 0이 아닌 정수값(해당 인터벌의 고유한 식별값)
const intervalID1 = setInterval(() => {
  console.log('인터벌');
}, 1000);


// clearInterval(intervalID;인터벌타임아웃의 리턴값);
//    설정한 인터벌타임아웃을 삭제
setTimeout(() => {
  clearInterval(intervalID1);
}, 5000);