/* 에라토스테네스의 체 */

const sieve = (limit) => {
  const isPrime = new Array(limit).fill(true)
  isPrime[0] = false
  isPrime[1] = false

  const sqrt = Math.floor(Math.sqrt(limit))
  
  for (let i = 2; i <= sqrt; i++){
    if (!isPrime[i]) continue
    for (let j = i * i; j <= limit; j += i)
      isPrime[j] = false
  }

  return isPrime
}

// n 의 크기: 10^6
const isPrime = sieve(1000000)

console.log(isPrime[2]) //  ✅ 정상 출력: true
console.log(isPrime[13]) //  ✅ 정상 출력: true
console.log(isPrime[25]) //  ✅ 정상 출력: false
console.log(isPrime[900019]) //  ✅ 정상 출력: true
console.log(isPrime[1000000]) //  ✅ 정상 출력: false