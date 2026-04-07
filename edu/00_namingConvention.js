// 명명 기법: 코드 표기법(변수 등의 이름을 작성하는 규칙)
// ex)파스칼기법/카멜기법/스네이크기법


//카멜(Camel) 기법
// 첫단어 소문자, 이후는 첫글자만 대문자
// 단어와 단어가 연결될 때, 가장 첫 글자를 대문자로 작성
// js, java 같은 언어에서 변수`함수 등에서 사용
let user;
let userName;
let userFirstName;


//파스칼(Pascal) 기법
// 모든 단어의 첫글자를 대문자로 작성
// java 같은 언어에서 클래스명으로 주로 사용
let User;
let UserName;
let UserFirstName;


//스네이크(snake) 기법
// 모든 단어를 소문자로 적고 각 단어 사이에 `_`를 이용해서 연결
// 데이터베이스 및 C계열 언어에서 주로 사용(PHP, 파이썬)
let user;
let user_name;
let user_first_name;


// 케밥(kebab) 기법
// 모든 단어를 소문자로 작성
// 단어와 단어 사이를 `-`로 연결
let user;
let user-name;
let user-first-name;


// 변형 기법
// 상수의 경우 전부 대문자, 단어와 단어를 `_`로 연결
let USER;
let USER_NAME;
let USER_first_NAME;