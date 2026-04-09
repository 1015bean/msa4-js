// 프로퍼티(property) & 메소드(method)

const obj = {
  length: 1,   //프로퍼티(속성): 객체 안에 선언한 변수.    객체명.프로퍼티명
  fnc: () => {   //메소드: 객체 안에 선언한 함수.     객체명.메소드명(parameter)
    console.log(`함수임`);
  }
}






// 객체를 복사하기(딥카피 & 쉘로우카피)

// 딥카피(deep copy)
//    모든 계층을 새롭게 복사  =>  참조를 공유하지 X
//       => 카피본을 변경해도 원본은 바뀌지 않는다
// 방법: JSON객체

// 쉘로우카피(shallow copy)
//   객체의 최상위 계층만 복사하고, 그 이하 계층의 참조형 데이터는 *주소만 복사*하는 방식
//       => (참조형 데이터)카피본을 변경하면 원본도 바뀜
// 방법: spread 문법 { ...obj }
const userInfo = {
    id: 1,
    info: {
        name: '이름'
    }
};

const copyUserInfo = { ...userInfo };  // Spread문법으로 복사

// 최상위 계층 요소 재할당
copyUserInfo.id = 100;
console.log(userInfo.id); // 1 (원본 영향 없음)

// 중첩 객체 요소 재할당
copyUserInfo.info.name = '초코';
console.log(userInfo.info.name); // '초코' (원본 영향 있음)









// 배열 (Array) 객체
//   하나의 변수에 여러 값을 순차적으로 저장할 수 있는 데이터 구조
//   데이터 타입: Object
//   배열의 크기가 동적으로 변화 가능
//   인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
//         : 인덱스 번호는 [앞에서부터 0, 1, 2, 3, 4...]
//   반복문을 통해서 배열의 각요소에 쉽게 접근 가능

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1[4]);   // 인덱스번호 4번인 요소 '5'가 출력











// Array의 프로퍼티와 메소드
// **length map push pop shift unshift
// *forEach filter some every



// length: 배열의 길이를 반환
console.log(arr1.length);  //arr1배열 안에 요소가 5개이므로 '5' 출력



// Array.isArray(arg:인수)
//    (이 친구)가 배열인지 아닌지를 체크
//    데이터타입: boolean(true 혹은 false가 출력)
Array.isArray(arr1);   //true
Array.isArray('어레이1');   //false



// Array.includes(searchElement)
//   배열에서 (어떤 특정한 요소)의 존재 여부를 확인
//   데이터타입: boolean
console.log(arr1.includes(5));  // true
console.log(arr1.includes(100));  //false



// Array.indexOf(searchElement)
//   배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
//   데이터타입: number
//   없으면 '-1'을 반환
let arr = ['홍길동', '둘리', '도우너']
console.log(arr.indexOf('홍길동'));  // 0 반환
console.log(arr.indexOf('도우너'));  // 2 반환
console.log(arr.indexOf('또치'));  // -1 반환



// Array.push(...args:인수)
//   데이터타입: number
//   원본 배열에 마지막 요소를 추가하고, 변경된 !length를 반환!
//   **원본 배열 자체를 변경시킴**
arr = [1, 2, 3];
let arr2 = [...arr];
let resultArr = arr2.push(5);
console.log(resultArr, arr, arr2);



// Array.concat(...args): T[]
//   배열의 마지막 요소를 추가한 !새로운 배열을 반환!
arr = [1, 2, 3];
resultArr = arr.concat(4, 5, 6,);  //임시로 배열을 만드는 것이기 때문에 변수에 담아둬야 함
console.log(arr, resultArr);



// Array.pop(): T | undefinded
//   원본 배열의 마지막 요소를 제거하고, !제거된 요소를 반환!
//   **원본 배열 자체를 변경시킴**
arr = [1, 2, 3];
resultArr = arr.pop();   // resultArr = 3
console.log(arr, resultArr);  // [1, 2] 3



// Array.unshift(...args):
//   데이터타입: number
//   원본 배열의 첫번째 요소를 추가하고, 변경된 !length를 반환!
//   **원본 배열 자체를 변경시킴**
arr = [1, 2, 3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);  // [ 100, 200, 300, 1, 2, 3 ] 6



// Array.shift(): T | undefinded
//   원본 배열의 첫번째 요소를 제거하고, !제거된 요소를 반환!
//   **원본 배열 자체를 변경시킴**
arr = [1000, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);  // [ 2, 3 ] 1000



// Array.splice(start, count, ...args): T[]
// **원본 배열 자체를 변경시킴**
   //1. start만 전달했을 경우
   //   - start가 양수인 경우
   //     > 해당 인데스 요소부터 모두 제거하고, 제거한 요소들을 배열로 변환
   //   - start가 음수인 경우
   //     > 끝 요소부터 start 구 만큼의 해당 인덱스 요소를 모두 제거하고, 
   //       제거한 요소들을 배열로 변환
arr = [6, 7, 8, 9, 10];
resultArr = arr.splice(2);   // 2번째요소 7의 다음요소 '8'부터 모두 제거
console.log(arr, resultArr);  // [ 6, 7 ] [ 8, 9, 10 ]


   //2. start와 count를 전달했을 경우
   //   - 해당 인데스 요소부터 count 수만큼의 요소를 제거하고, 
   //     제거한 요소들을 배열로 변환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1);  
console.log(arr, resultArr);  // [ 1, 2, 4, 5 ] [ 3 ]


   //3. start와 count와 args를 전달했을 경우
   //   - 해당 인데스 요소부터 count 수만큼의 요소를 제거하고, 
   //     해당 위치에 args를 삽입하고,
   //     제거한 요소들을 배열로 변환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, [100, 200, 300]);  
console.log(arr, resultArr);  // [ 1, 2, [ 100, 200, 300 ], 4, 5 ] [ 3 ]



// Array.join(separator)
//  데이터타입: string
//  배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//  배열의 요소가 없으면 빈문자열을 반환
//  separator를 생략하면 기본 구분자가 ','로 연결
arr = [1, 2, 3, 4, 5]
resultArr = arr.join('a');
console.log(arr, resultArr);  // 1a2a3a4a5



// Array.sort(): T[]
//    **원본 배열 자체를 변경시킴**
//    배열의 요소를 문자열로 변환 후, !오름차순 정렬!을 하고 정렬한 배열을 반환. 
// number을 배열할 경우, sort 안에 콜백함수 사용((a, b) => (a - b))
//    파라미터 a와 b에 배열의 요소를 대입하여 나오는 결과를 보고 배열
//    **숫자 오름차순은 처리식(a - b) // 숫자 내림차순은 처리식(b - a)**
//예를 들어 (a - b)가,
//    양수일 경우 - a가 큰수 & b가 작은수로 인식하여 정렬
//    음수일 경우 - a가 작은수 & b가 큰수로 인식하여 정렬
//    0일 경우 - 같은 값으로 인식하여 정렬하지 않음
arr = [6, 4, 7, 1, 11];
resultArr = arr.sort((a, b) => (a - b)); 
console.log(arr, resultArr);

// 버블 정렬: 배열을 정렬할 때 사용하는 정렬 방식의 하나



// Array.map(callback): T[]
//   기존의 배열을 활용하여 새로운 배열을 만들고 싶을 때 사용
//   배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후,
//   콜백 함수의 리턴 값을 모아서 새로운 배열을 반환
arr = [1, 2, 3, 4, 5, 6];

resultArr = arr.map(val => {
  if(val % 3 === 0) {
    return '짝';
  } else {
    return val;
  }
});
console.log(resultArr);  //[1, 2, '짝', 4, 5, '짝']


// map메소드의 내부구조(함수)
class MyArr {
  arr = [1, 2, 3, 4, 5, 6];

  map(cb) {
    // 새로운 배열을 선언
    const newArr = [];

    for(let i = 0; i < this.arr.length; i++) {
      newArr.push(cb(this.arr[i]));
    }
    return newArr;
  }
}



// Array.some(callback)
//  데이터타입: boolean
//   배열의 모든 요소에 대해 콜백함수를 실행한 후,
//   조건에 맞는 결과가 하나라도 있으면 true, 없으면 false를 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 40 },
  { name: '또치', age: 45 }
];
resultArr = arr.some(item => item.name === '홍길동');
console.log(resultArr);  // name에 '홍길동'이 있으므로 'true' 출력



// Array.every(callback)
//  데이터타입: boolean
//   배열의 모든 요소에 대해 콜백함수를 실행한 후,
//   모두 조건에 맞으면 true, 아니면 false를 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 40 },
  { name: '또치', age: 45 }
];
resultArr = arr.every(item => item.age >= 50);
console.log(resultArr);  //'false'



// Array.filter(callback): T[]
//   배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후,
//   조건에 만족한 요소만 모아서 새로운 배열을 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 40 },
  { name: '또치', age: 45 }
];
resultArr = arr.filter(item => item.age < 45);
console.log(resultArr);



// Array.forEach(callback): void
//   배열의 모든 요소에 대해 콜백 !함수를 반복 실행하고 싶을 때! 사용
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 40 },
  { name: '또치', age: 45 }
];

arr.forEach((val, idx) => {
  // 내가 하고 싶은 처리
});

// forEach메소드의 구조
for(let i = 0; i < arr.length; i++) {
  //내가 하고 싶은 처리
  // arr[i];
}











// ----------------------------------------
// 배열 [2,4,5,6,9]가 있다.
// 여기서 특정 요소가 있는지 확인하고 true/false를 반환하는 `myIncludes`함수를 만들라.


  
  // arr[0] === search
  // arr[1] === search
  // arr[2] === search
  // arr[3] === search
  // arr[4] === search


  // if( arr[0] === search || arr[1] === search  ) {
  //   return true;
  // } else {
  //   return false;
  // }


const myArr = [2, 4, 5, 6, 9];


function includes(search, arr) {

  let result = false;  // return 키워드를 만나면 그즉시 함수 실행 종료되므로 미리 변수선언 및 할당
  
  for(let idx = 0; idx < arr.length; idx++) {

    if(search === arr[idx]) {
      result = true;  
    }
    
  }
  return result;   
}


console.log(includes(10, myArr));




