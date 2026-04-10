// Destructuring (구조분해) 문법
//   배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법



// 배열의 경우
const arr = [1, 2, 3, 4, 5];

// let arrVal1 = arr[0];
// let arrVal5 = arr[5];
const [val1, , , , val5] = arr;

// let arrVal1 = arr[0];
// let arrVal2 = arr[1];
// let arrVal3 = arr[2];
//      ...
const [val_1, val_2, val_3, val_4, val_5] = arr;


// ------------------------------


// 객체의 경우
const user = {
  name: '홍길동',
  age: '20',
  gender: 'M'
}
 
const {name, age} = user;
const { addr = '없음'} = user;   // user의 addr요소에 defalut값으로 '없음'을 줌
console.log(addr);  // '없음' 출력