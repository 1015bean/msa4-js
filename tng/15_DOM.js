// 사과게임 앞에 장기 li요소 추가
//    트러블: insertBefore으로 shougi요소를 추가할 때 (파라미터1)의 타입이 node가 아닙니다.라며 에러
//    원인: insertBefore(파라미터) - '파라미터'를 따옴표를 감싸서.

const parentContainer = document.querySelector('ul');
const appleGameId = document.querySelector('#apple');

const shougi = document.createElement('li');
shougi.textContent = "장기";

parentContainer.insertBefore(shougi, appleGameId);


// ------------------------------------------------------

// 어메이징브릭에 베이지 배경색 추가


// const gameList = document.querySelector('ul > li:last-child');
// gameList.style.backgroundColor = 'beige';


// const gameList = document.querySelectorAll('.none-li');
// const amazing = gameList[7];
// amazing.style.backgroundColor = 'beige';


const ulList = document.querySelectorAll('ul > li');
ulList.forEach((item) => {
  if(item.textContent === '어메이징브릭') {    // li의 요소의 텍스트(.textcontent로 획득)가 '어메이징브릭'일 때
    item.style.backgroundColor = 'beige';    
  }
});




// -----------------------------------------------------

// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// li 홀짝 판별. if:짝일 때 ~ 홀일 때, 요걸 idx 수만큼 반복

const games = document.querySelectorAll('ul > li');       


// for(let i = 0; i < games.length; i++) {
  
//   if(i % 2 === 0) {
//     games[i].style.color = 'red';
//   } else {
//     games[i].style.color = 'blue';
//   }
// };





// games.forEach((item, key) => {
// // 인덱스가 0부터 시작하니까 key + 1
//   if((key + 1) % 2 === 0) {
//     item.style.color = 'red';        // '색꺌' 따옴표처리 해주기!!
//   } else {
//     item.style.color = 'blue';
//   }
// });




// // ------------------------------
// // 요소 추가 시 주의 사항

function setLineColor() {
  // 새로운 요소 '스타'를 추가할 때 요소를 추가만하면 새로생긴 요소에는 홀짝 색깔이 적용 안됨
  // 이걸 해결해주기 위해서 setLineColor라는 '함수'를 만들어준다.

  try{
    const games = document.querySelectorAll('ul > li');     

    if(games && games.length === 0) {
      throw new Error('노드 없음');                  //////////
    }
    
    games.forEach((item, key) => {
      // 인덱스가 0부터 시작하니까 key + 1
      if((key + 1) % 2 === 0) {
        item.style.color = 'red';
      } else {
        item.style.color = 'blue';
      }
    });

  } catch(err) {
    console.log(err);
  }
}



// setLineColor함수 실행
setLineColor();



// 새 요소 추가
const starcreft = document.createElement('li');
starcreft.textContent = '스타';

const gameUl = document.querySelector('ul');
gameUl.appendChild(starcreft);


// 새 요소 추가했으니 setLineColor함수 한 번 더 실행
setLineColor();