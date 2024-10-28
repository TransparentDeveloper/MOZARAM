# 약수 구하기

## 요약 설명
- 자연수 n 에 대한 모든 약수를 구한다.

### 과정
1. 1 부터 √n 까지 순회
2. 현재 탐색한 값으로 n 을 나누었을 때 나머지가 0 이라면, 그 수는 n 의 약수이다.
3. 현재 탐색한 값으로 n 을 나누었을 때 나머지가 0 이라면, 그 수로 n 을 나눈 몫도 n 의 약수이다.

> 왜 √n 까지만 순회하나?
>
> 모든 자연수는 √n 이하의 약수를 반드시 포함한다. 즉, √n 까지만 순회하여 작은 약수를 찾으면, 그에 대응하는 약수(n / 작은 약수)를 쉽게 구할 수 있다. 이를 이용해 순회 범위를 줄여 효율성을 높이기 위함이다.

<br/>

## 언제 사용하면 좋은가?

- 시간 복잡도: **O( √n )**
- 입력값의 크기와 상관없이 사용해도 좋다.

<br/>

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/약수_구하기/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PQKgBIvqOBhDaDa1gaq4BjqwmAKDQYwPYDsDOALmAOYCmhAIgJYBu1+2ATvmALxgAUuAlOwHxgA3mjBhqAMy64wAHjABGPkwoBXJjIDaAXVFg9OAsQAmdBs1YcdBvETD4Ajk2IcAsgENCACwB0EgDbYzJwe3j6Oztw8PHoSzFz+FOLsigDcybIcEYTp1ADUeTwiYmKS0mAApMlsNWAADHzFJWKm9IwsPgAOqvhenNQxzaVS-SjJAIS1vGCt5h3dvdxgwOI8qXpiAL562zZG9syEZMYps+344YecnO4ANABGPGz87gC0j3oqhOoy7UfGaF2WFs2ESPkCJE4ACIAByADXGwIAGHqgUNupAoNDaFk4MOiyxWgFByMCAVAnAIMDgBzZwCkHQAuMDwpEwTQKNEAJjRABY0TDtPpDIwwRDoQoAOwI5Go9FUMznTgivHAQkkik0xSihlgJlokW6Pmgsjg7CQqEKFkKMUotHkKVYliy03yxVkqm0k1m9Ua5mKT2unm8kECw1ClkAVnZ5olVsxc3wdtDDrARKdKpNofNYk1YDZYAAzGiAGysuoATg5Chh+ZZwq1IfZ2iAA)

<br/>

## 추천 문제
- [_백준 > 2501_](https://www.acmicpc.net/problem/2501)

<br/>