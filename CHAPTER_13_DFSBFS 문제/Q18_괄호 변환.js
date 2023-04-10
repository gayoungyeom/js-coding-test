const check = (str) => {
  const s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      s.push('(');
    } else {
      if (s.length === 0) return false;
      s.pop();
    }
  }
  if (s.length !== 0) return false;
  return true;
};

function solution(p) {
  //step1
  if (p === '') return '';

  //step2
  let a = 0,
    b = 0;
  let u = '',
    v = '';
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') a++;
    else b++;

    if (a === b) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  if (check(u)) {
    //step3
    return u + solution(v);
  } else {
    //step4
    let tmp = '(';
    tmp += solution(v);
    tmp += ')';

    u = u.slice(1, u.length - 1);
    for (let i = 0; i < u.length; i++) {
      if (u[i] === '(') tmp += ')';
      else tmp += '(';
    }
    return tmp;
  }
}
