# 유클리드 호제법
_Euclidean Algorithm_

<div align="center">

| ![Euclidean Algorithm](https://github.com/user-attachments/assets/774b0b27-a408-4ebf-8630-2a1f4cca5fed) |
|:---:|
| _이미지 출처: [velog.io/@h_zee](https://velog.io/@h_zee/%EC%A0%95%EC%88%98%EB%A1%A0-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%ED%98%B8%EC%A0%9C%EB%B2%95)_ |

</div>

## 요약 설명
- 두 자연수에 대해 최대공약수를 구하는 알고리즘

### 핵심 개념

> 자연수 `a`, `b`, 그리고 `a` 를 `b` 로 나눈 나머지를 `r` 이라 하자.

- **a와 b의 최대공약수는 b와 r의 최대공약수와 같다.**
  - `b` 와 `r` 최대공약수는 `r` 과 (`b` % `r`) 와 같다.
  - 나머지가 0 이 되는 순간까지 이를 반복하여 최대공약수를 구한다.

- **`a` 와 `b` 의 곱에서 그것의 최대공약수를 나눴을 때의 몫은 최소공배수이다.**

<br/>

## 언제 사용하면 좋은가?

- 시간복잡도: **O(log min(a,b))**
- 입력값의 크기와 상관없이 사용해도 좋다.


<br/> 

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/euclidean-algorithm/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PQKgBIBOOC4Lg1nYOy1kBxrgcCcKk9YTAFBdOQoeOCkHQBSAKLWIBhDAlIAujYgAM2A6q2IDqz9grzWC+oxWIDa1gGquAGOozYAxgHsAdgGcALmADmAU1kBxAMIARMAF4wxSQFcAtgEYANGCPGATFV0A+MAG8sYMABsVYYwEMAHrpgALK+sgAWAHR+-gYmFlYmdm6e3sYAlpJBoRHRmXFmltbJKQDu4ele+hlZAIQ6egAM9s5gKe4SMvLG4gAmQTFgAKQ+mW3u7oN6Ne2jWdN9KQC+OB1Scoqi-dMBKQBOKoZ7WQpbWCu4wGBEZJS0DMwsgDGDXDwCglidG8qyADLqwSCBQSxXsOicrncXm6AWyYSiMWBRSSVBS0LmcNyNSRiVsqPcZQqVWINTA9SaLVmX26fQGsJGMwmPlh00ys1JC16yxSKWpm22zP8vPW8g8omMQOspgwuLsYCupy57gOsiOWTFxnOOBweDc4AA2qp0gA3JSSAC6evcAFowORADg1gA1xsCAVAmKFawLafhpNMQqJYfv9gn6rVb9QB1cJmy0yz2KFQ+v1IQA5s-xADejdsozrYr0APp18IQer0qINJxCpjPkCjZl6ABh6KPn3qGZfqACpRi1F+NqLRJwACY93S-ZnYAGmsAPzVgZOELuAH4nAC2jgBHJ10UQAANWAAMw2CcADjAgBdxwA+7YAXLvMHqZtpz3EAKU1gbdniYXusUG+bvXYT4i3HSvR3vnFIKvh+XT8kE3q9lKyJ4kBGwaqBJYAjioLQeIXiRB44gKMQABEl4UAAXFh5iKqiXwoUoaEYdhzzsPWBHmBqVBAA)

<br/>

## 추천 문제
- [_프로그래머스 > 120808_](https://school.programmers.co.kr/learn/courses/30/lessons/120808)
- [_프로그래머스 > 12953_](https://school.programmers.co.kr/learn/courses/30/lessons/12953)

<br/>
