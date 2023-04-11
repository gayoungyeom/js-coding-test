# Javascript로 정리하는 [이것이 코딩 테스트다]
아래 도서를 Javascript 코드로 정리한 레포지토리입니다.

![book](https://user-images.githubusercontent.com/42757774/231062095-c9fea84c-722e-4ccb-941c-2a8e9cd8cb20.jpeg)

<br/>

## 문제 풀이 템플릿
- 다른 언어와 달리, javascript는 입력을 받는 부분이 특이해 템플릿을 만들어 사용했습니다.
- 입력을 받고 정제하는 부분과 문제 풀이 부분을 분리했습니다. (프로그래머스 방식 차용)

cf) 백준 제출 시 입력 파일을 불러오는 부분을 `'/dev/stdin'`로 변경해야 합니다.
```javascript
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;

function solution(n, arr) {
  let ans = 0;
  return ans;
}

console.log(solution(n, arr));
```

<br/>

## 개념 정리 링크
- https://gyyeom.tistory.com/category/Algorithm/Javascript%EB%A1%9C%20%EC%A0%95%EB%A6%AC%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%BD%94%ED%85%8C
