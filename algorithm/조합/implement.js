// 조합

function combination(arr, r) {
  const n = arr.length
  if (r < 0 && n < r) return []

  const answers = []

  function dfs(depth, curIdx, subArr) {
    if (depth === r) {
      answers.push([...subArr])
      return 
    }
    for (let i = curIdx; i < n; i++) {
      const curVal = arr[i]

      subArr.push(curVal)
      dfs(depth+1, i+1,subArr)
      subArr.pop()
    }
  }
  dfs(0, 0,[])
  return answers
}


console.log(permutation(arr,1)) // ✅ 정상출력: [[3], [4], [5]] 
console.log(permutation(arr,2)) // ✅ 정상출력: [[3, 4], [3, 5], [4, 3], [4, 5], [5, 3], [5, 4]] 
console.log(permutation(arr,3)) // ✅ 정상출력: [[3, 4, 5], [3, 5, 4], [4, 3, 5], [4, 5, 3], [5, 3, 4], [5, 4, 3]] 