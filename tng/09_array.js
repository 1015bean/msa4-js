
// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];

let newARR1 = [...ARR1];
newARR1.sort((a, b) => a - b);

console.log(ARR1, newARR1);






// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2];

let AAR2resultHol = ARR2.filter((val) => val % 2 !== 0);
let AAR2resultJjak = ARR2.filter((val) => val % 2 === 0);

console.log(AAR2resultHol);
console.log(AAR2resultJjak);





// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];

let newQ3 = ARR3.map((val) => val % 3);
console.log(newQ3);




const arr4 = [5,7,3,4,5,1,2,0];

const result = test(arr4);
// console.log(arr4, result);

function test(arr) {
  return arr.sort((a, b) => a- b);
}