// switch문
// switch(검증 대상) {
//   case '검증대상과 비교할 대상':
//     실행할 처리
//     break;     //각 조건의 마지막 자리에 "break"를 붙여줘야 switch문이 더 진행 안되고 끝남
// }

let food = '떡볶이';

switch(food) {
  case '김밥':
    console.log('분식');
    break;
  case '돈까스':
    console.log('양식');
    break;
  default:
    console.log('이상한 음식');
    break;
}