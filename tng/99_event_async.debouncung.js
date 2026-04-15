// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.

// 1. 다음 버튼을 누르면 다음 페이지를 3개 가져옵니다.
// 	1-1. 다음 페이지를 가져올 때 기존 데이터는 지워지지 않습니다.
// 	1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

// 2. 리셋 버튼을 누르면 모든 카드가 초기화 됩니다.
// 	2-1. 리셋 후 다음 버튼을 누르면 첫 페이지부터 불러옵니다.

// 3. 사용하는 API는 아래와 같습니다.
// 	- baseURL: https://picsum.photos/v2/list
// 	- paramers: 
// 	  - page: number
// 	  - limit: number

// -----------------------------------------------------------------------------------------

// 다른 코드와 변수 등이 겹치치 않도록 '즉시 실행 함수'로 전체를 감싸줌
(() => {
// 디바운씽
  let allowFlg = true;    // 디바운씽 제어용 플래그
  let page = 0;

  const btnNext = document.querySelector('#btnNext');
  btnNext.addEventListener('click', async () => {
    if(allowFlg) {        // true일 때 try 실행
      allowFlg = false;

      try {
        const baseUrl = 'https://picsum.photos/v2/list';
        page += 1;
        const btnUrl = `${baseUrl}?page=${page}&limit=3`;
    
        const response = await axios.get(btnUrl);
        console.log(response.data);

        const container = document.querySelector('#container');
          
        response.data.forEach(item => {
          const card = document.createElement('div');
          container.appendChild(card);
          card.classList.add('card');
          
          const cardImg = document.createElement('div');
          cardImg.style.backgroundImage = `url('${item.download_url}')`;
          card.append(cardImg);
          cardImg.classList.add('card-img');
          
          const cardText = document.createElement('div');
          cardText.textContent = `${item.id}: ${item.author}`;
          card.append(cardText);
        });
      } catch(error) {
        console.log(error);
      } finally {
        allowFlg = true;       // try든 error(catch)든, 다음에 코드 실행 때는 말짱히 실행되게 하기 위해서
      }
    }
  });
  
  const btnReset = document.querySelector('#btnReset');
  btnReset.addEventListener('click', () => {
    const container = document.querySelector('#container');
    container.replaceChildren();
  
    page = 0;
  });
})();
