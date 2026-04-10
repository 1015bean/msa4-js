// 요소 선택 메소드 
//    const 변수명 = document.매소드명( '선택할 요소' );     =>( '선택자문법 + 요소명' )


// Node: DOM 내부네 각 가지에 달린 객체 // Element: 요소 // sh


// document.getElementById(ID): ID로 선택
const titleEle = document.getElementById('title');
titleEle.style.color = 'blue';


// document.getElementByTAgName.(tagName): 요소의 태그명으로 선택
//    해당 요소들을 HTMLCollction이라는 객체(배열)로 획득. 사용하기 불편
const tagEle = document.getElementsByTagName('h1');

//    스타일 적용 예시
for(let i = 0; i < tagEle.length; i++) {
  tagEle[1].style.color = 'red'
}


// document.getElementByClassName.(className): 클래스로 선택
//    해당 요소들을 HTMLCollction이라는 객체[배열]로 획득. 사용하기 불편
const classEle = document.getElementsByClassName('title2');
 


// ************** 매우 중요 ***************
// document.querySelector(slector): CSS 선택자를 사용해 요소를 찾는 메소드
//     선택된 요소가 복수일 경우, 가장 첫번째 요소만 선택
const queryID = document.querySelector('#title');  // ID선택자이므로 프로퍼티에 '#'tittle
queryID.style.color = 'skyblue';
const queryType = document.querySelector('h1');
queryType.style.color = 'green';



// ************* 매우 중요 ******************
// document.querySelectorAll(slector): CSS 선택자를 사용해 요소를 찾는 메소드
//     선택된 요소가 복수인 경우, 전부 선택
//     해당 요소들을 'Node.List객채'(배열)로 획득
const queryAll = document.querySelectorAll('h1');
queryAll.forEach(item => {
  item.style.fontSize = '5rem';
});





// -----------------------------------------------------------------------------------

// 요소 조작 메소드



// Element.textContent: 컨텐츠를 획득 및 변경
//    순수한 텍스트 데이터를 전달
const title1 = document.querySelector('#title');
title1.textContent;  // 콘텐츠 접근
title1.textContent = '테스트';   //콘텐츠 변경
title1.textContent  = '<p>피태그<P>'       // '<p>피태그<P>' 출력

//  element.innerHTML:컨텐츠를 획득 및 변경
//    태그는 태그로 인식해서 전달
title1.innerHTML = '<p>피태그<P>'          //  '피태그' 출력



// Element.setAttribute(attributeName, Value)
//   요소에 속성과 속성값을 추가
const setAttrInput = document.querySelector('.set-attr');
setAttrInput.setAttribute('placeholder', 'js에서 추가');
setAttrInput.setAttribute('style', 'color: red;');



// Element.removeAttribute(attributName)
//    요소의 특정 속성을 제거
setAttrInput.removeAttribute('placeholder');







// -----------------------------------------------------------------------------------

// 요소 스타일링



// Element.style: 요소에 인라인 스타일 추가
title1.style.color = 'red';

// Elememt.classlist: DOMTokenList 객체로 클래스를 제어
title1.classList.add('display-none');     //클래스 추가
title1.classList.remove('display-none');  //클래스 제거
title1.classList.toggle('display-none');  //클래스 토글 (true면 클래스추가, false면 클래스제거)




// ---------------------------------------------------------------------------------------

// 새로운 요소 생성



// document.createElement(tagName): 해당tag 요소생성
const newP = document.createElement('P');
newP.textContent = '탕수육';
newP.style.color = 'grey';




// Node.appendChild(node)
//    해당 부모의 가장 마지막 자식 노드로 추가
const parentContaner = document.querySelector('.container');
parentContaner.appendChild(newP);


const newSpan = document.createElement('span');
newSpan.textContent = '크림새우';
parentContaner.appendChild(newSpan);



// Node.insertBefore(newNode, referenceNode);  // (추가할요소, 요요소 앞에 추가)
//    해당 부모의 referenceNode의 앞에 자식 노드로 추가 
const newH3 = document.createElement('h3');
newH3.textContent = '짬뽕';
parentContaner.insertBefore(newH3, newSpan);



// Node.removeChild(node)
//    해당 노드의 특정 자식 노드를 제거
parentContaner.removeChild(newH3);