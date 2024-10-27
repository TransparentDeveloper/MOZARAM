# 단일 수 소수 판별법

## 요약 설명
- 하나(혹은 적은 갯 수)의 자연수에 대해 소수인지 여부 판단

### 과정

> 입력 n(자연수) 에 대하여,

1. 2 보다 작다면(0,1), false
2. 2 와 같다면, true
3. 2 의 배수라면 false
4. 3 ~ √n 사이의 홀수로 n 을 나눈다.
  - 한번이라도 나머지가 0 이 된다면, false
  - 그렇지 않다면 true

> **왜 n 까지가 아니라, √n 까지 순회하나?**
>
>  n 은 반드시 √n 이하의 약수를 갖기 때문이다.

<br/>

## 언제 사용하면 좋은가?
- 시간 복잡도: **O( √n )**
- 소수 판별 횟수가 적은 경우 
  - 그렇지 않다면 [에라토스테네스의 체](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/sieve-of-eratosthenes/README.md) 활용하는 편이 좋다.

### **에라토스테네스의 체** 와 비교했을 때 장점
- 훨씬 큰 수를 판별할 수 있다.
- 메모리 사용량이 적다. (추가 메모리가 거의 필요 없음)

<br/>

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/단일_수_소수_판별법/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PQKhAJAumwfcfQYwcBhD5B8M4BjrwmAKCwMwK4B2AxgC4CWA9oeOQM4AKATuQLYCmAFIQJTgDeWcLVzhu4ADzgATHybtS+JjVwBDADZ12QkWJoBeQzLkKlNUk3zbh5UeICkM8If3gADCcXLwazdfA6xNR0pOB0AI5Moa4AsqqkABYAdLjqlJRMnHGJSRFR3Dw8OMK4GWLqCrTO4ADMANxVEq55pA3k4ADUrrI6Nrjc9uQuHuDyXioaWjo6Y2bgFlZYAL44OEGEdJQVSWkA5pz0zGxcsnzAwMKAoOTggKgTgIMD4IA5s4CkHQBc85ba65vbeweMLA4nAAjDVCuBzldbg8Xu8Fl9glt2DtKPtDoCuABONw44GY8GQ8DXe5PN4fRbfJEotEA44g4HAgAsDOBBIuROhpLhnzWiN+qP+RyBrLO7OJMLJvimlP5NKFJwArGyoSTYT5JgiNlS-ui6QB2ZmMgAceqVopVEveUs1P2ROtpwpxTudyo5qslGqAA)

<br/>

## 추천 문제
- [_프로그래머스 > 문제번호_](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

<br/>