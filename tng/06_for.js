// // 구구단 n단 출력
// // 2 x 1 = 2
// // 2 x 2 = 4
// //  ...
// // 2 x 9 = 18


let dan = 3;
let multi = 19;

for(let i = 1; i <= multi; i++) {
  console.log(`${dan} x ${i} = ${i * dan}`);
}






// // // 구구단 2단 ~ 19단 출력
for(let i = 2; i <= 19; i++) {
  console.log(`** ${i}단 **`);
  for(let x = 1; x <= 19; x++) {
    console.log(`${i} X ${x} = ${i * x}`);
  }
}








// // 별을 찍어주세요.
for(let i = 0; i <= 4; i++) {
  console.log('*****');
}

// //
// //
for(let i = 1; i <= 5; i++) {
  let line = "";
  for(let j = 1; j <= 5; j++){
    line += "*";
  }  
  console.log(line);
}










// // 별의 개수를 하나씩 늘리면서 배열하기.
for(i = 1; i <= 5; i++) {
  if(i === 1) {
    console.log('*');
  } else if(i === 2) {
    console.log(`**`);   
  } else if(i === 3) {
    console.log(`***`);   
  } else if(i === 4) {
    console.log(`****`);   
  } else {
    console.log(`*****`);   
  }
}


// // 
for(let i = 1; i <= 5; i++) {     // i: 줄 반복(5줄)
  let line = "";              // 별을 담을 변수 선언 & !빈문자열로 초기화!(안해주면 undifinded 출력됨)
  for(let j = 1; j <= i; j++){    // j: 각 줄의 자릿수 
    line += "*";              // 첫째줄의 첫째자리에 '*'넣고, 위의 j++로 돌아감 
  }  
  console.log(line);          // 변수j인 for문 종료 후 한줄 출력
}


// //
let star = '';
for(let i = 1; i <= 5; i++) {
  star += '*';
  console.log(star);
}













// 위와는 별이 반대 방향으로 나열되도록 하기.(좌우반전)
for(let i = 1; i <= 5; i++) {
  let line = '';
  for(let space = 4; space >= i; space--) {
    line += ' ';
  }

  for(let star = 1; star <= i; star++) {
    line += '*';
  }
  console.log(line);
}





// 위와는 별이 반대 방향으로 나열되도록 하기.(역삼각형으로)
for(let i = 1; i <= 5; i++) {
  let line = '';

  for(let empty = 0; empty < (i - 1); empty++) {
    line += ' ';
  }

  for(let star = 5; star >= i; star--) {
    line += '*';
  }
  console.log(line);
}