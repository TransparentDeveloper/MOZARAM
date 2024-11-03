/* Heap */

/** 최소 힙 구현 */
class MinHeap{

  /** 생성자 */
  constructor() {
    this.heap = []
  }

  /** 새 값을 추가 */
  heapPush(newVal) {
    this.heap.push(newVal)
    this.bubbleUp(this.heap.length - 1)
  }

  /** 가장 작은 값을 제거 및 반환 */
  heapPop() {
    if (this.isEmpty()) return null
    const minVal = this.heap[0]
    const lastVal = this.heap.pop()
    if (!this.isEmpty()) {
      this.heap[0] = lastVal
      this.bubbleDown(0)
    }
    return minVal
  }

  /** 값을 위로 올리며 힙 속성을 유지 */
  bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[idx] >= this.heap[parentIdx]) break
      this.swap(idx, parentIdx)
      idx = parentIdx
    }
  }

  /** 값을 아래로 내리며 힙 속성을 유지 */
  bubbleDown(idx) {
    const lastIdx = this.heap.length - 1
    
    while (true) {
      const leftIdx = idx * 2 + 1
      const rightIdx = idx * 2 + 2
      
      let smallestIdx = idx;
      if (leftIdx < lastIdx && this.heap[leftIdx] < this.heap[smallestIdx]) 
        smallestIdx = leftIdx
      if (rightIdx < lastIdx && this.heap[rightIdx] < this.heap[smallestIdx])
        smallestIdx = rightIdx

      if (idx === smallestIdx) break
      this.swap(idx, smallestIdx)
      idx = smallestIdx
    }
  }

  /** 두 값의 저장된 위치를 교환 */
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  /** 저장된 값이 있는지 T/F 반환 */
  isEmpty() {
    return this.heap.length === 0
  }
}


/*  힙 정렬 구현 */

const heap = new MinHeap()
const originalArray = [32, 154, 12, 31, 77, 543, 432, 14, 1, 32, 98, 57]
const sortedArray = []

/* 삽입 */
originalArray.forEach((elem) => {
  heap.heapPush(elem)
})

/* 삭제 */
while (!heap.isEmpty()) 
  sortedArray.push(heap.heapPop())

console.log('originalArray:', originalArray)
console.log('sortedArray:', sortedArray) 