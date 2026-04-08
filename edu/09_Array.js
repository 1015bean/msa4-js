// 배열 (Array) 객체
//   하나의 변수에 여러 값을 순차적으로 저장할 수 있는 데이터 구조
//   데이터 타입: Object
//   배열의 크기가 동적으로 변화 가능
//   인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
//         : 인덱스 번호는 [앞에서부터 0, 1, 2, 3, 4...]
//   반복문을 통해서 배열의 각요소에 쉽게 접근 가능

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1[4]);   // 인덱스번호 4번인 요소 '5'가 출력







// Array의 메소드


// length: 배열의 길이를 반환
console.log(arr1.length);  //arr1배열 안에 요소가 5개이므로 '5' 출력

const obj = {
  length: 1,   //프로퍼티(속성): 객체 안에 선언한 변수 
  fnc: () => {   //메소드: 객체 안에 선언한 함수
    console.log(`함수임`);
  }
}


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

  let arrCount = arr.length;
  let result = false;  // return 키워드를 만나면 그즉시 함수 실행 종료되므로 변수에 할당
  
  for(let idx = 0; idx < arrCount; idx++) {

    if(search === arr[idx]) {
      result = true;  
    }
    
  }
  return result;   
}


console.log(includes(10, myArr));




