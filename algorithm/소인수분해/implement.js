// 소인수분해

function primeFactorization(n) {
  const factors = []
  let divisor = 2
  
  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor)
      n /= divisor
    } else divisor++
  }
  
  return factors
}

const target1 = 15
const primeFactor1 = primeFactorization(target1)
console.log(`${target1} 의 소인수: ${primeFactor1}`) // ✅정상출력: 15 의 소인수: [3, 5]

const target2 = 158
const primeFactor2 = primeFactorization(target2)
console.log(`${target2} 의 소인수: ${primeFactor2}`) // ✅정상출력: 158 의 소인수: [2, 79]

const target3 = 1000
const primeFactor3 = primeFactorization(target3)
console.log(`${target3} 의 소인수: ${primeFactor3}`) // ✅정상출력: 1000 의 소인수: [2, 2, 2, 5, 5, 5]
