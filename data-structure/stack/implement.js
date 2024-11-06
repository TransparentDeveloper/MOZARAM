// Stack

class Stack {

  constructor() {
    this.stack = []
  }

  push(elem) {
    this.stack.push(elem)
  }

  pop() {
    if (!this.stack.length) return null
    return this.stack.pop()
  }

  size() {
    return this.stack.length
  }

  isEmpty() {
    return this.stack.length === 0
  }

  peek() {
    if (!this.stack.length) return null
    return this.stack[this.stack.length - 1]
  }

}

// 예제 - Stack 활용, 배열 순서 뒤집기

const stack = new Stack()

const original = [1, 2, 3, 4, 5]
const reversed = []

for (const elem of original) {
  stack.push(elem)
}
while (!stack.isEmpty()) {
  reversed.push(stack.pop())
}

console.log(`original: ${original}`) // ✅정상출력: [1, 2, 3, 4, 5]
console.log(`reversed: ${reversed}`) // ✅정상출력: [5, 4, 3, 2, 1]