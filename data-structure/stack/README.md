# Stack

## 요약 설명
- First In Last Out (FILO)
- Last In First Out (LIFO)
- 데이터의 삽입과 삭제가 한쪽 끝에서만 이루어지는 선형 자료구조

<br/>

## 언제 사용하면 좋은가?
- 괄호 매칭 검사
- DFS 구현

<br/>

### 시간 복잡도
- Push/Pop 연산: **O(1)**
- Peek 연산: **O(1)**
- 검색: **O(n)**

> **_(* JS 기준 )_ `배열` 로 구현 vs `연결리스트` 로 구현**
>
> #### 배열 기반 구현
> - 구현이 매우 간단
> - JS 엔진에 최적화된 Array 메서드 사용 가능
>
> #### 연결리스트 기반 구현
> - 동적 메모리 할당으로 메모리 효율적
> - 크기 제한 없음
> - 구현이 상대적으로 복잡
>
> #### 결론
> _특별한 제약이 없다면, 배열 기반 구현을 사용하는 것이 쉽고 효율적_

<br/>

## 어떻게 구현할까?
> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/data-structure/stack/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?#code/PTAEGUBcEMGMGsBQjYBtoGcMRg0BvZUUWAewDsNIAnAV1klOoAoBKAxY4yACwEsMAOipx4oALygA2gF1OoAL5FQAB1oYezAKaotAW3aEuoXgOG54gtRu26D8pfJWkVbDsb4AzUMwCEpoREEQV1yAHNedmotSFpqclByWlRUeWJo2PiTfkCLKxc2B2UMPgAvLTcjLgy4hIDzURCtcN4i+QEAUT0VSABPSrTQGqz6oMtQiJ4JcUkABjbiFS0teAGPbz9RvInIoZjaxOTU42G6nIaEKS3GnamAWlAARjliR0cQUEAIMcAcCdAHqFEoEAOmuASrGADSgQAMPYAX0dAgBwhwA4g6BACUtgEXJwAMdcgyJRIKAxhJEloAO44USFFAUKigJh8MJ8cjQVAEqSPCEAJghAGYIQAWCEAVjk2Kp0QAblpqBgtAATZlyRCeJg+YW4nT6aneGl0hmoQzyMZWdSaNX2JRE-i6Hy+A2dbp9Nh69JacWSmWGmwG5yuVisRCOYWkXQhUhhZgAAy19MZAC5QAASfCRnUKMPsD6AUHJAKgTgEGBwA5s4BSDtjLPZXN5AqFlMDWmDobDYolUulsYT9dd0pTabAWbzhek-LLoG5oA5TzkQA)

<br/>