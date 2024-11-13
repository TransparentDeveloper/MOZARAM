// Segment Tree

class SegmentTree {
  constructor(arr) {
    this.arr = [...arr]
    this.tree = new Array(4 * this.arr.length).fill(0)
    
    if (this.arr.length > 0) 
      this._build(0, 0, this.arr.length - 1)
  }

  _build(cur, start, end) {
    if (start === end) {
      this.tree[cur] = this.arr[start]
      return this.tree[cur]
    }
    
    const mid = Math.floor((start + end) / 2)
    const leftSum = this._build(cur * 2 + 1, start, mid)
    const rightSum = this._build(cur * 2 + 2, mid + 1, end)
    
    this.tree[cur] = leftSum + rightSum
    return this.tree[cur]
  }

  getSubSum(left, right) {
    if (left > right || left < 0 || right >= this.arr.length) 
      throw new Error('잘못된 범위 입력')
    
    return this._getSubSum(0, 0, this.arr.length - 1, left, right)
  }

  _getSubSum(cur, start, end, left, right) {
    if (start > right || end < left) 
      return 0
    

    if (left <= start && end <= right) 
      return this.tree[cur]

    const mid = Math.floor((start + end) / 2)
    const leftSum = this._getSubSum(2 * cur + 1, start, mid, left, right)
    const rightSum = this._getSubSum(2 * cur + 2, mid + 1, end, left, right)
    
    return leftSum + rightSum;
  }
}

// 구간합
const originalArr = [2, 31, 23, 1312, 51, 64, 92, 123, 69]
const segmentTree = new SegmentTree(originalArr)

const totalSumBySegmentTree = segmentTree.getSubSum(0, originalArr.length - 1)
const totalSumByReduce = originalArr.reduce((acc, num) => acc + num, 0)

console.log("모든 원소의 합 (by 세그먼트 트리):", totalSumBySegmentTree) // ✅ 정상출력: 모든 원소의 합 (by 세그먼트 트리):  322
console.log("모든 원소의 합 (by Array.reduce):", totalSumByReduce) // ✅ 정상출력: 모든 원소의 합 (by Array.reduce):  322 

console.log()

console.log("첫번째 원소부터 세번째 원소까지의 부분합:", segmentTree.getSubSum(0, 3)) // ✅ 정상출력: 첫번째 원소부터 세번째 원소까지의 부분합:  56 
console.log("두번째 원소부터 다섯번째 원소까지의 부분합:", segmentTree.getSubSum(1, 5)) // ✅ 정상출력: 두번째 원소부터 다섯번째 원소까지의 부분합:  91 
console.log("세번째 원소부터 마지막 원소까지의 부분합:", segmentTree.getSubSum(2,originalArr.length - 1)) // ✅ 정상출력: 세번째 원소부터 마지막 원소까지의 부분합:  289 