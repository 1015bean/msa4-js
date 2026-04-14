// 데이터를 받아와서, 데이터(사진과 저작권자명) 정보가 담긴 카드가 생성되도록 하기


// 받아올 데이터주소
const url = 'https://picsum.photos/v2/list?page=2&limit=4'



// html 폼태그 불러오기 & 폼태그 'submit'작용하면 이벤트효과
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  console.log(e);
  // event.preventDefault(): JS에서 HTML요소의 기본이벤트(예: a 태그-링크 이동, form-제출)을 막는 메서드
  //    여기서는 form태그의 기본이밴트(submit 누르면 정보송신 및 페이지 리로드)가 실행 안 되게 하고, 아래에서 axios로 설정해준 코드가 실행되게 함.
    e.preventDefault();
  
  
    // 사용자로부터 요청받은 데이터(form태그로)를 불러오기 위한 url 만들기
    //     url = baseUrl + 파라미터( page&limit )
    const baseUrl = 'https://picsum.photos/v2/list';
  
    const page = form['page'].value;
    const limit = form['limit'].value;
    const url = `${baseUrl}?page=${page}&limit=${limit}`;
  
  
  
  


    axios.get(url)             // (위에서 만든)url서버에 데이터를 주세요 요청
    .then(response => {          //무사히 답장이 왔을 때 (함수) 안의 {처리}를 실행




    console.log(response);

      // 카드 넣을 컨테이너
      const container = document.querySelector('.container');
      container.replaceChildren();

      // response.data: 서버가 보내준 데이터가 저장된 프로파티 (배열)
      response.data.forEach(item => {

      // 카드 이미지 요소 생성
      const newCardImg = document.createElement('span');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
      
      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement('div');
      newAuthor.textContent = `${item.id}: ${item.author}`;
      
      // 카드 요소 생성
      const newCard = document.createElement('div');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
      newCard.classList.add('card');
      
      // 컨테이너에 카드 삽입
      container.appendChild(newCard);
    });
})




    .catch(error => {            //에러 났을 때 (함수) 안의 {처리}를 실행
      console.log(error);
    })

    .finally(() => {             // 요청의 성공여부 관계없이 실행
      // 처리
    }); 
  });







// -----------------------------------------------------------------------



axios.get(url)             // url서버에 데이터를 주세요 요청
.then(response => {          //무사히 답장이 왔을 때 (함수) 안의 {처리}를 실행





  console.log(response);

  // 카드 넣을 컨테이너
  const container = document.querySelector('.container');

  // response.data: 서버가 보내준 데이터가 저장된 프로파티 (배열)
  response.data.forEach(item => {

    // 카드 이미지 요소 생성
    const newCardImg = document.createElement('span');
    newCardImg.style.backgroundImage = `url('${item.download_url}')`;
    newCardImg.classList.add('card-img');
    
    // 카드 저작권자 요소 생성
    const newAuthor = document.createElement('div');
    newAuthor.textContent = `${item.id}: ${item.author}`;
    
    // 카드 요소 생성
    const newCard = document.createElement('div');
    newCard.appendChild(newCardImg);
    newCard.appendChild(newAuthor);
    newCard.classList.add('card');
    
    // 컨테이너에 카드 삽입
    container.appendChild(newCard);
  });
})




.catch(error => {            //에러 났을 때 (함수) 안의 {처리}를 실행
  console.log(error);
})

.finally(() => {             // 요청의 성공여부 관계없이 실행
  // 처리
}); 