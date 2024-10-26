/* 유클리드 호제법 */

/** 입력(두 수)에 대한 최대공약수 구하기 */
const getGCD = (num1, num2) => {
  let max = Math.max(num1, num2)
  let min = Math.min(num1, num2)

  while (min !== 0) { 
    const mod = max % min 
    max = min
    min = mod
  }

  const gcd = max
  return gcd
}

// 입력(두 수)에 대한 최소공약수 구하기
const getLCM = (num1, num2) => {
  let max = Math.max(num1, num2)
  let min = Math.min(num1, num2)
  
  while (min !== 0) {
    const mod = max % min
    max = min
    mid = mod
  }
  
  const gcd = max
  const lcm = (num1 * num2) / gcd
  return lcm
}