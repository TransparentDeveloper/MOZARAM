# 에라토스테네스의 체
_Sieve of Eratosthenes_

<div align="center">

| ![SieveOfEratosthenes](https://github.com/user-attachments/assets/dbd3ebae-e6c7-41ef-9425-96cd3560fb53) |
|:---:|
| _이미지 출처: [wikipedia.org](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)_ |


</div>

<br/>

## 요약 설명

- 특정 범위 내의 모든 소수(prime number)를 찾는다.

### 과정

1. n+1 크기의 boolean 형 배열을 선언 (true 로 초기화)
2. 0 과 1은 false 로 설정
3. 2 부터 √n 까지 순회
  - _* 왜 n 까지가 아니라, √n 까지 순회하나?_
    - n 은 반드시 √n 이하의 약수를 갖기 때문에, 그 이상의 수까지 탐색하지 않아도 된다. 
4. 현재 탐색한 값이 소수가 아니라면 continue..
5. 현재 탐색한 값이 소수라면, 그 수을 제외한 그 수의 배수들을 모두 false

<br/>

## 언제 사용하면 좋은가?

- 시간 복잡도: **O( n * log( log( n ) ) )**
- **대량의 소수를 한 번에 찾아야 할 때**, 미리 판별용 배열을 구성해두었다면 빠르게 판별가능하다.


- But, 메모리를 많이 사용 (N+1 크기의 배열 필요)
- n 의 크기가 매우 큰 경우(보통 10^6 이상), 메모리 제한에 걸릴 수 있다.



<br/>

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/sieve-of-eratosthenes/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PQKgBIC6OD7tgFi4JUOBlFwJI10BrjZAtM2EwBQuBjAewDsBnAFzDIEsBTANzrAF4wAKAGxoFsaKAlKwB8YAN64wYYuSo0yABQBOvZmxJ0A7mACCSpQEMAnl178BAOgBmNTp3YUlAVzoDJYectUBtAAwBdVjArA04yOndPFR46bwBGQLYQsIj3GUpqAEclKjYAWQMKAAtrTiIiJXYC4osybIpTPkE3KXcrCo5OOjkggCYAbg8wAB42OpzBmgBqKYEJKSkaKw4AQiifGn8hGQoaEhd3KXalTu6wACsgmmwPQcvRsG4mu7ApthoWhcXFaNjzxOCoXC7gAvvgpEpuk4lCQPD9VLgwbhgMAwLD0IAbBcADHUALjAcV8AD0AGyEUgZdYxIK0Rh0dgE3yMxluMnkIhdCxlADm7EpsV6WzAKKkgFByMCAVAnAIMDYEAObOAUg68Y4Dul2XROUQeXz4gBmQXCsBiqWyhVgJURFUc7m8+Exby9ACsetRBol0vleOSwItaqtWoAnEy4n6naLXcbFc5zeTVerNTbYgymQEhPrDW6TZ66EA)

<br/>

## 추천 문제
- [_프로그래머스 > 42839_](https://school.programmers.co.kr/learn/courses/30/lessons/42839)
- [_프로그래머스 > 12977_](https://school.programmers.co.kr/learn/courses/30/lessons/12977)

<br/>
