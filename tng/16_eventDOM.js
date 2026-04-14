const modalBtn = document.querySelector('#modalBtn');
const overlay = document.querySelector('#overlay');

// modalBtn.addEventListener('mouseenter', () => {
//   modalBtn.classList.add('btn-hover');
// });
  
// modalBtn.addEventListener('mouseleave', () => {
//   modalBtn.classList.remove('btn-hover');
// });
    
modalBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});
    
    
// --------------------------------------------------------
// 다시 숨을 떄 랜덤한 위치로 이동하는 함수 (position 활용)

const randomPosition = () => {
  const ohyes = document.querySelector('#ohyes');
  
  // 변수 = 소숫점날리기( 랜덤수 * (뷰포트 - 요소의크기) )
  //    Math.random(): 0.0이상 1.0미만 범위의 실수 난수를 무작위로 생성하는 함수
  //    window.innerWidth: JS에서 웹 브라우저의 뷰포트 내부 너비를 px단위로 반환
  //    offsetWidth: JS에서 HTML 요소 너비를 px단위로 반환
  const randomX = Math.floor(Math.random() * (window.innerWidth - ohyes.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - ohyes.offsetHeight));
  
  // position: absolute의 위치 지정
  ohyes.style.top = `${randomY}px`;
  ohyes.style.left = `${randomX}px`;
};


// ------------------------------------------------------------
// 반복해서 게임을 플레이하기 위해, 두근두근 & 들켰다 &두근두근 삭제 & 숨는다를 함수 선언
const btnStart = document.querySelector('#btnStart');
const ohyes = document.querySelector('#ohyes');
    

function heartBeat() {                            //hearBeat함수 이벤트 나중에 제거하기 위해 
  alert('두근두근');                             // 함수 + 이벤트(상호작용, 콜백함수)
} 

function addHeartBeat() {
  ohyes.addEventListener('mouseenter', heartBeat);
}

function oops() {
  alert('들켜버렸넹');
  ohyes.classList.add('ohyes-appear');
}

function removeHeartBeat() {
  ohyes.removeEventListener('mouseenter', heartBeat);
}

function hide() {
  alert('한 번 더 할까?');
  ohyes.classList.remove('ohyes-appear'); 
}





// ---------------------------------------------------------
btnStart.addEventListener('click', () => {
  alert('나를 찾아봐');
  ohyes.classList.add('ohyes-disappear');   
});


// ------------------------------------------------------------
addHeartBeat();

let clicked = true;

ohyes.addEventListener('click', () => {
  
  if(clicked) {
    oops();
    removeHeartBeat();
  } else {
    randomPosition();
    hide();
    addHeartBeat();
  } 
  
  clicked = !clicked;
});