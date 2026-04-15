// 콜벡지옥: "비동기 처리"를 하기위해 콜백함수를 과도하게 중첩하여 사용하여, 코드의 들여쓰기가 깊어지고 가독성이 극도로 떨어져 유지보수가 어려워지는 현상
// setTimeout(() => {
//   console.log("A");
//     setTimeout(() => {
//       console.log("B");
//       setTimeout(() => {
//         console.log("C");
//       }, 1000);
//     }, 1000);
// }, 1000);


// 위 콜백 지옥을 회피하기 위해 프로미스 기반으로 변경해보자.

// resoleve: 작업이 성공했을 떄 알려주는 객체
// reject: 작업이 실패했을 때 알려주는 객체
const timePromise = (str, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof str === 'string') {
        console.log(str);
        return resolve('성공');
      } else {
        return reject('실패');
      }
    }, ms);
  });
};





// 동기처리하는 코드: 'AA'->'BB'->'cc' 하나 다 처리되고 다음거 실행.
timePromise('AA', 1000)
.then(() => timePromise('BB', 1000))
.then(() => timePromise('CC', 1000))
.catch(error => {
  console.log(error);
})
.finally(() => console.log('파이널리'));







// 병열처리(비동기처리) 하는 방법: 요이땅하면 ABC 한 번에 시작하는 코드
Promise.all(
  [
    timePromise('A', 1000),
    timePromise('B', 3000),
    timePromise('C', 5000)
  ]
)
.then(() => console.log('모든 작업 완료'));