# Segment Tree

## 요약 설명
- 구간 합을 구하는 트리 자료구조
- 주어진 배열의 특정 구간에 대한 정보(합, 최소값, 최대값) 을 구할 수 있다.

<br/>

## 언제 사용하면 좋은가?
- 트리 생성: **O(N)**
- 구간 조회: **O(logN)**
- 특정 구간의 통계값을 빠르게 계산해야할 경우
- 구간 합 계산이 많이 필요할 경우


> **주의 사항**
> - 세그먼트 트리의 크기는 보통 원본 배열 크기의 4배 정도록 설정한다.

<br/>


## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/data-structure/segment-tree/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PTAEGUFMHMFtIHYBcAqAnSkBQWDGAbAQwGdiIZ5l1NQBvLUUXAewWKTQFdclm0AKQmjQBKOg0agkACwCWxAHRC0oALygA2gu3KAuhMYz5CjjXUJIAd1ABBYYQCe-ACygAVFLmLlC-ImgyIgoAZrL4+PwADCIGoLGywaD8Rt7Cvv4yoAB8oNFxkpIpCgD6AEacYQAmUQA0uXVFPn4IAdKgALSgAIwxjAC+OIxlFfjVuJxodexCSHWIlWL0BQlJ02hIaqrq84uxhl4mGJAa42i6ap7GyhprSPoFjBhIEwiXiqbHp-eSAwWxLGwNrBZJULgBZQgyEL4Zh8fj8W6gADUoB2oDAACZepIAexQH5gkhwJxYBcisMqvxTu5QBjkd0pkgZnVgQt-qw8WhZNBpESSWSDhTRlSJjS6SiMSyQfSunMEGy-gUih8ThNzuoCXzSSiuTytbEni83odMKqzhIBhJoJA+aVibB+Jq6rrebtlolHZBCdlQC6NgAff34r0bAA8uVAgd93N52XUjTSzVaYj2njQzGsFmsAFFhHCAOSADPHAN1dgBwW0CAFJ7ACDjoEAoeOAUg789jGAabUbydbbfbavVjU0Mm1OrLg4TnTGkNjLUNO8S7SSRZNQLc5ZU6k7o3q3ZIVgimesfX7I0H5qBw5qUw9fW20K9IrFBtuPZrT+pEQAyN+o+Uvjeu-IPQ0b2NFUvgfRhcSBaV1AhKFghhOFdxmek0UxZsmA5DZNXtAVjGKGdODnB06Q8akUWHZdQFZNcQzHTd2UBX8tRwxQ8JtWdu2IphRQlKVQTIldqNHRi0NbZ4gKw-kdXHe0AG4LSwS0QFAQAbWsAEBrAEtVvAMNAPhuVkBBCHwOwVHUDRJVAABmYcMQsuouis8yAFZhwANmcOoAE5zK6Gy6hcjz9AgpcKEQVAjguLNyDgULqEgfhdOgfTDOMmItIY3gmXwe0ACEHCgaKqHC18QsKzAFHwwiewSpKjMTAcOm6GIgoywycocAAlSBKm4SALmqgzarQBQMG63A4sEXBcDqBASTEVQckISb6Rm2A6miHBcWYPxfGYaB+AAIkACq7AAOW0BAAWxwAYwcADXHQHUpJSgcUBAA5BwAP2sAHi7AA6l0APsAGs6RAALn2hpmEytr8soMLMDEJTAFByUBAFQJwBBgcAHNn63+0ATvO67bvux7Xs+76-vRyyMQxNLiC2yAdr2o7Tsum67v4B7bHsBxhq6nqAaBqQQdaklcs60bIGhsA4aR1H0cx+mcaZx7jMcdmhYBxgLNJuJycp6n+FSzbtphGnAGqZwAInsAD8mscAAN7AAZF57TaxwAZOsAAcmbvNwAQ3vUwGphKyGqYq7tIjqCyRBF0AxZRtHQGNs3Lqtm2o4ux3nbd4nHJcuJdap-WDsABRbbej63ABOmwB6Qdz+OndAV33e54gvdi8q2II7th0coP0VFhGw-RnO45jouS4T8uk8YDyujTjlNcz-anpLmPAAnOh3AEnO+2y4rj3goK72667edJX65K6paTIhxb2H24l2OLetufF8u-uV8YDEAA4PNAIA)

<br/>

## 추천 문제
- [_백준 > 2357_](https://www.acmicpc.net/problem/2357)

<br/>