// Event 이벤트
//    웹페이지에서 유저의 행위에 따라 특정 처리를 실행되도록 하는 처리



// inline 방식
//    이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법
//    HTML 분서에 JS가 존재하여 관리상의 문제가 발생



// propaty Listener 방식
//    DOM을 이용해서 해당 노드에 이벤트 프로퍼티를 통해 지정하는 방법

//         대상.프로퍼티 = () => {
//            실행할 함수
//         };
const btn1 = document.querySelector('button');
btn1.onclick = () => {
  alert('프로퍼티 리스너');
};






// ***addEventListener 방식***   <-> DOM 
//    DOM 요소에 이벤트 리스너를 추가하는 가장 현대적인 방법으로 권장
//    동일한 이벤트를 여러번 사용 가능

//         대상.addEventListener('이벤트명;유저의조작' () => {
//            실행 함수
//         });
const btnNow = document.querySelector('#btnNow');
btnNow.addEventListener('click', () => {
  alert('첫번째 클릭 이벤트');
});
btnNow.addEventListener('click', () => {
  alert('첫번째 클릭 이벤트');
});





// removeEventListner
//    DOM 요소에 추가된 이벤트를 제거하는 방법
window.removeEventListener('scroll', printScroll);


//    리무브이벤트는 앞서 애드이벤트로 추가한 것과 같은 것을 지정해야 지워짐.
//    함수이름을 찾아야 하니까, 애초에 애드이벤트로 이벤트 추가할 때 함수선언식으로 함수 작성(익명함수 X)

// window.addEventListener('scroll', () => {           //익명함수 X
//   console.log('스크롤 실행');
// });

function printScroll() {                             //함수선언식으로 함수 작성!
  console.log('스크롤 실행');
}
window.addEventListener('scroll', printScroll);               ////  프린트 스크롤 함수,() 안붙여도 되나??





// -------------------------------------------
// 처음에는 스크롤이벤트가 살아있다가 '삭제'버튼을 눌렀을 때 스크롤이벤트가 제거되도록 수정해보자

const btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', () => {
  window.removeEventListener('scroll', printScroll);
});
// -------------------------------------------






// 이벤트 객체 (e)
//    이벤트가 발생했을 때 해당 이벤트에 대한 정보를 포함하는 객체
//    이벤트 핸들러 함수('이벤트', 이벤트핸들러함수) 내부에서 파라미터로 사용

const btnObj = document.querySelector('#btnObj');
btnObj.addEventListener('click', e => {
  console.log(e);
  e.target.textContent = '히히히';
});




function eventInfo(e) {
  console.log(e);
}
const container = document.querySelector('.container');
container.addEventListener('scroll', eventInfo);
