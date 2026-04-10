//  ### 1단계: 배열과 반복문 연습 (기초)
//      가격 배열의 요소들의 총합과 평균값 구하기.

// "가격" 배열
let prices = [600, 2500, 5000, 10020, 34000];

// 가격 총합
// prices[0] + prices[1] + prices[2] + prices[3] + prices[4]

// 평균값
// 총합 / price.length

let allPrices = 0;
for(idx = 0; idx < prices.length; idx++) {
  allPrices = allPrices + prices[idx];
}
console.log(allPrices);


// ----------------------------------------------------------------------------------------------------------


// ### 2단계: 다양한 함수 선언법 (중급)
// **문제:** 가격에 10% 부가가치세를 더한 최종 가격을 반환하는 함수 `getFinalPrice`를 작성하세요.
//     * **함수 선언식**으로 하나 만드세요.
//     * **함수 표현식**으로 하나 만드세요.
//     * **화살표 함수**로 하나 만드세요.
// 세 함수 모두 매개변수로 `price`를 받고, `price * 1.1`의 결과를 반환해야 합니다.

// -----------------------------------------------

// "가격" 배열
prices = [600, 2500, 5000, 10020, 34000];

// final = prices[idx] + (prices[idex] / 10)

// 함수 선언식
function getFinalPrice1(Array, idx) {

  if(idx < Array.length && idx >= 0) {
    // let final = Array[idx] + (Array[idx] / 10);
    let final = Array[idx] * 1.1;
    return final;
  } else {
    return '잘못된 입력입니다1';
  }
  
}
console.log( getFinalPrice1(prices, -1) );

// --------------------------------------------------

// 함수 표현식
const getFinalPrice2 = function(Array, idx) {
  if(idx < Array.length && idx >= 0) {
    return Array[idx] * 1.1;
  } else {
    return '잘못된 입력입니다2';
  }
}
console.log( getFinalPrice2(prices, 3) );

// --------------------------------------------------

// 화살표 함수
const getFinalPrice3 = (Array, idx) => {
  if(idx < Array.length && idx >= 0) {
    return Array[idx] * 1.1;
  } else {
    return '잘못된 입력입니다3'
  }
} 

console.log( getFinalPrice3(prices, 10) );




// --------------------------------------------------------------------------------------------------------

// * **3문제:** 상품명 배열 `products = ["Apple", "Banana", "Cherry"]`가 있습니다.
// * `processArray`라는 함수를 만드세요. 이 함수는 두 개의 매개변수를 받습니다.
//     1.  `arr`: 배열
//     2.  `callback`: 각 요소에 적용할 함수
// * `processArray` 내부에서 반복문을 사용하여 배열의 각 요소를 `callback` 함수에 전달하고, 그 결과를 콘솔에 출력하세요.
// * **실행 예시:** `processArray(products, (item) => item + " - Out of Stock");`을 실행했을 때, 콘솔에 각 상품명 뒤에 품절 메시지가 붙어서 출력되어야 합니다.


// `${arr[idx]}out of sold` 

const products = ["Apple", "Banana", "Cherry"];

function processArray(arr, cb) {
  
  
  for(i = 0; i < arr.length; i++) {

    cb(arr[i]);
  }
}
const callback =(item)=>{console.log(item)}



processArray(products, callback)