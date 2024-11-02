# 조합


## 요약 설명

- 크기가 n 인 어떤 배열의 원소를 대상으로, r 개의 원소를 갖는 부분 배열을 모두 찾는다. 
- **순서를 고려하지 않는다.**

<br/>

## 언제 사용하면 좋은가?

- 시간 복잡도: **O(nCr) = O(n! / (r! (n-r)!)**
- 순열보다는 효율적!!
- 입력 크기가 커지면, 시간 비용이 커짐.
- n < 20 인 경우에 사용하는 게 적절함. 

<br/>

## 어떻게 구현할까?

> [보러가기 > _cd ./implements.js_](https://github.com/TransparentDeveloper/MOZARAM/blob/main/algorithm/조합/implement.js)

> [실행해보기 > _node ./implements.js_](https://www.typescriptlang.org/play/?ssl=30&ssc=56&pln=1&pc=1#code/PTAEgcJxLVYKGgzArgOwMYBcCWB7JoVYFsAjDJAQ0xwAoyAnWgGlFoEpQBvaUPHAZzVC4AvKDq0AdABsApkgDmaABZdQGOKCq1QAHlAAGUADJDgncza1paBLVwBtALqxu+JP1FuA7tNq9QIx2dQRFRKXAATOF4qcOkAByUmFBsASXCADyZeBCIAQXo2Tm5uNQ1YhMV-IRFWDhVij15vX3E4hF5FKjtxHuy8+gcWeuLLa1tQYYBfYbgsLSoZAQx-PFSMgG5VMyRNjABqPcLhlz4BZNoANTJJFbE7DCdj0D78iTaOqnOrySGG7kjouUlHsAIxMfZgl4FJ5Qt5YOJUX7FabcFGgAFUPRMLGOJGjGy4MheHy8aDTaCudxiFZ2ADMDAALAwAKyPSlYGRSLByT6EEjkMI0egMEEsNggUCAUHJQIBUCcAgwOAHNnAKQdAC5QHY6Q4mHYGVr1ayHBN2ZzJNzecRSBRsEghYwAExi0AS6Xy5VqjX00C67We1napmgA1Gvgc6Rcnn4C0C622hi0x3O2WK1XqulMANBoA)


<br/>