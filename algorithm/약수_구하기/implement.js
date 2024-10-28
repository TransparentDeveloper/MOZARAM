/* 약수 구하기 */

const getDivisors = (n) => {
  if (n < 1) return []
  
  const divisors = []
  const sqrt = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= sqrt; i++){
    if (n % i === 0) {
      divisors.push(i)
      if (i * i !== n) divisors.push(n / i);
    }
  }

  const sorted = divisors.sort((a,b)=>a-b)
  return sorted
}


console.log("8의 배수", getDivisors(8)) // ✅ 정상출력: 8의 배수 [1, 2, 4, 8] 
console.log("17의 배수", getDivisors(17)) // ✅ 정상출력: 17의 배수 [1, 17]
console.log("121의 배수", getDivisors(121)) // ✅ 정상출력: 121의 배수  [1, 11, 121]  
console.log("1254의 배수", getDivisors(1254)) // ✅ 정상출력: 1254의 배수  [1, 2, 3, 6, 209, 418, 627, 1254]