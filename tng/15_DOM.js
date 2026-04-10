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


const gameList = document.querySelectorAll('.none-li');
const amazing = gameList[7];
amazing.style.backgroundColor = 'beige';



// -----------------------------------------------------

// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// li 홀짝 판별. if:짝일 때 ~ 홀일 때, 요걸 idx 수만큼 반복

const games = document.querySelector('ul');

for(let i = 0; i < games.length; i++) {
  
  if(i % 2 === 0) {
    games[i].style.color = 'red';
  } else {
    games[i].style.color = 'blue';
  }
};