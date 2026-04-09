// String(문자열) 객체
let str1 = "쌍따옴표";
let str2 = '홀따옴표';
let str3 = `백틱`;


// lenght: 문자열 길이 반환
console.log(str1.length);  // 4


// String.charAt(idx)
//   string 타입
//   문자열에서 해당 인덱스에 맞는 문자를 반환
let str4 = "문자열입니다.";
console.log(str4.charAt(6)); // .


// String.indexOf(searchStr, idx)
//   Number 타입
//   문자열에서 해당 검색어를 찾아 최초의 인덱스를 변환
//   없을 경우 '-1'을 반환
let str5 = "문자열입니다. 문자열입니다.";
console.log(str5.indexOf('열')); //2
console.log(str5.indexOf('열', 4)); //인덱스4번부터 '열'요소를 찾도록 지시. 10 출력
console.log(str5.indexOf('입니다.')); // 3
console.log(str5.indexOf('메롱')); // -1


// String.replace(pattern, replacement)
//   String 타입
//   문자열에서 !해당 패턴의 첫번째 문자열!을 찾아서, 대체문자열로 변경한 문자열을 반환
let str6 = "문자열입니다. 문자열입니다.";
console.log(str6.replace('문자', ''));  // ' 열입니다. 문자열입니다.' 출력. 문자가 공백으로 치환됨


// String.replaceAll(pattern, replacement)
//   String 타입
//   문자열에서 해당 패턴의 !모든! 문자열을 찾아서, 대체문자열로 변경한 문자열을 반환
let str7 = "문자열입니다. 문자열입니다.";
console.log(str7.replace('문자열', '돈까스'));  // ' 돈까스입니다. 돈까스입니다.' 


// String.substring(startIdx, endIdx)
//   String 타입
//   문자열에서 시작 인덱스부터 끝 인덱스까지 자른 문자열을 반환
//   끝인덱스 생략 시, 시작 인덱스부터 끝까지 자른 문자열을 반환
let str8 = "문자열입니다. 문자열입니다.";
console.log(str8.substring(2, 3));  //인덱스 2번에서 인덱스 3번. '열' 출력


// String.split(separator, limit)
//   Array 타입
//   문자열에서 구분자를 기준으로 잘라 각 문자열을 배열로 만들어 변환
//   limit 배열의 길이를 조절, 생략 가능
let str9 = '짜장면, 짬뽕, 탕수육, 라조기, 크림새우';
let str9Arr = str9.split(', ');  //  ',' & '공백'을 기준으로 문자열을 잘라냄
str9Arr.forEach(val => {
  console.log(val);
});


// String.trim(): 
//   string 타입
//   문자열에서 시작과 끝의 공백을 제거한 문자열을 반환
let str10 = '      가나  다 ';
console.log(str10);         // '      가나  다 '
console.log(str10.trim());  //  '가나  다'


// String.toUpperCase(), String.toLowerCase()
//   문자열을 대소문자로 변경해서 반환
let str11 = 'dkfsjGFjaTGfsfM'
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());