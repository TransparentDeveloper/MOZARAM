/** 단일 소수 찾기 */

function isPrime(n) {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  
  const sqrt = Math.floor(Math.sqrt(n))

  for (let i = 3; i <= sqrt; i += 2)
    if(n%i===0) return false
  
  return true
}



console.log(isPrime(2)) //  ✅ 정상 출력: true
console.log(isPrime(13)) //  ✅ 정상 출력: true
console.log(isPrime(900019)) //  ✅ 정상 출력: true
console.log(isPrime(1114111)) //  ✅ 정상 출력: true

console.log(isPrime(1)) //  ✅ 정상 출력: false
console.log(isPrime(25)) //  ✅ 정상 출력: false
console.log(isPrime(7414875)) //  ✅ 정상 출력: false
console.log(isPrime(1000000000)) //  ✅ 정상 출력: false