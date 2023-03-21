let p = '()))((()';

const check = (str) => {
  const s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      s.push(str[i]);
    } else {
      if (s.length === 0) return false;
      s.pop();
    }
  }
  if (s.length !== 0) return false;
  return true;
};

let ans = '';
function solution(p) {
  if (p === '') return '';

  //2. 균형잡힌 문자열 u,v로 분리
  let u, v;
  let lCnt = 0,
    rCnt = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      lCnt++;
    } else {
      rCnt++;
    }

    if (lCnt === rCnt) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);
      break;
    }
  }

  //3. 수행 결과 u에 이어 붙여 반환
  if (check(u)) {
    //3-1. u가 올바른 문자열인 경우
    return u + solution(v);
  } else {
    //3-2. u가 올바른 문자열이 아닌 경우
    let tmp = '(';
    tmp += solution(v);
    tmp += ')';

    u = u.slice(1, u.length - 1);
    let reversed = ''; //u를 뒤집은 결과

    for (let j = 0; j < u.length; j++) {
      if (u[j] === '(') reversed += ')';
      else reversed += '(';
    }

    tmp += reversed; //수행결과 += u
    return tmp;
  }
}

console.log(solution(p));
