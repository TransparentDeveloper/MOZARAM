# Heap

## 요약 설명
- 우선순위가 높은 요소를 빠르게 찾기 위해 사용하는 자료구조
- 완전 이진 트리 특성을 유지한다.
- _*최소 힙을 기준으로_,
  - 부모노드가 자식노드보다 작거나 같다.
  - 구현에 따라 다르지만 자식 노드 중, 왼쪽 노드가 오른쪽 노드보다 작다.


<br/>

## 언제 사용하면 좋은가?
- 삽입&삭제 간 시간복잡도: **O(log N)**
- **우선순위 큐** 구현이 필요한 경우
  - ex) 다익스트라 알고리즘 (**Dijkstra**)에서 최단 거리 탐색 시, 우선순위 큐로 활용
- 최대값 또는 최소값 찾을 경우

<br/>

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/data-structure/heap/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PQKgBAEgpghgDmEwBQzTkDqzgYwbITPWyA2tYCBriKAxgDYwDO1YAsgJYB208A3qmGOmILsDgRkHACeOlk3MgHtm1AC4AnAK5kZEuQAoAlGE7duMgBaNqAOn2wEAXjABtALpiwAXy48Q4QBMDYQEg1gEXGwgFNnAABrRbjN4AAUFan01ZigAdwA1GAotHV0DI1NzYzgomLiklI0HPUMTACMFCoqKKABVODVMkzC4YzrmAHMDMABaMABGEu5nB15AwFLxsEBE8cABce8-QBwJwAcasEB4HrBADB7ADTWQsDbwiSa00rBGADMwZvLjIwBRAFs4GQBPTS05KBkFOWYwZgKCgUM6SaQyMCPFjJChgKwtbLwawABnsujAYNkYCoshhcLACLauWOmjOl2uAEIEQ9nm8PtozmUsm0UbZ8TiZDDGQTblUanUACISeLMNTIka6Zzor4-P6Q6EpBxjbi8XxgQAg44AdDrAgBoxwA1nYAHLrwYEAsYMCPyAAnHAAOT+z5tQaTUYABMAB6ndHxQx1a7Ol1gAB8YHFDPR4ikWLgMC+zBkAElXfj6DADMYLhQJKo1Gpff0hlpgGAAEwS9Hkm7M8zWX1s-3w24syPRuOu2xaCpfGAAa25COo8Xg2ddABowI2oDH427uTmrGOJ66zlKnC5VX5ACKjgAz27WAFobDcazZabUgHHbBcLRb73bpMRCOZP8YScp0evpc4MzmdPYxvc1FFAr+iN7YlAFzNn6Vg5uAhZgAA1EM3JAXIjBdPoYH4pBRawUW3LcnUELUI8KR1LI94Qa6ADc05XGodSgfeAA82I0GhABkLE8hWSK0WBbKMY+SIEURUAkS2WjctwgnAsJaFWNxk5UdcSEoWhjF3gmbEca0lZKahk68ZpiJwNYknETxJahiZ0mkWAOlgS4pbUTOFhWJZIlumA7awN2oYGX2A6+iOrlgeZ3AzmAQXyeiS7Kq44CAAot3iABrjYCAAATkyADgtGqABpzgA+nWAgAKtXsx4Sf2jquoMI6+sWIa6NY-FGb6gy2CO9VVq6ha2GyVh1fWlZVc1Bkso1nVKiubipRl3iAC7jYCABHjgApTTaAAqwAAGLbEVKChdQTwvO8AE2d8vz-PVHTji+cLOUGo1jGg4DGoAqBOADQdhAkMeyBAW0+KFAwLBsCcH3hhCqjISwKQAIJyHIMCvPi1gAMyFiOgwAKwACzI0jYDwxVYAAOx4yO6PwyOaOI8jGNDCO5NgAAnAAHETeP2EB1CqDIUBOpD0Ow919h3WAgC9A4AoeOiCDXRgxQ3Mw6mqj3DAZAxGoUB1I8WgWIG6REoc+TK6rJSOCUAuALUDSyiF+P4UkSNJ7fSDhs3IHNc1DMt5NEaja+YRwnEbmISHUHQSF0agAOTi5L0uvAAXCHI7h8wEMu68JR+wH6bByHDtO5HMeBeznOR1oQA)

<br/>

## 추천 문제
- [_백준 > 문제번호_](https://www.acmicpc.net/problem/1417)

<br/>