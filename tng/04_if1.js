let score = 101

if(0 <= score && score <= 100) {
  if(score === 100) {
    console.log(`당신의 점수는${score}점 입니다. <A+>`);
  } else if(90 <= score && score < 100) {
    console.log(`당신의 점수는${score}점 입니다. <A>`);
  } else if(80 <= score && score < 90) {
    console.log(`당신의 점수는${score}점 입니다. <B>`);
  } else if(70 <= score && score < 80) {
    console.log(`당신의 점수는${score}점 입니다. <C>`);
  } else if(60 <= score && score < 70) {
    console.log(`당신의 점수는${score}점 입니다. <D>`);
  } else if(score !== 100) {
    console.log(`당신의 점수는${score}점 입니다. <F>`);
  }
}






let grade = 'F';

if((0 > score) || (100 < score) || typeof score !== 'number') {
    console.log('점수가 바르지 않습니다.');
} else {
    if (score === 100) {
    grade = 'A+';
  } else if(90 <= score) {
    grade = 'A';
  } else if(80 <= score) {
    grade = 'B';
  } else if(70 <= score) {
    grade = 'C';
  } else if(60 <= score) {
    grade = 'D';
  } else{
    grade = 'F';
  } 
  console.log(`당신의 점수는${score}점 입니다. <${grade}>`);
}
