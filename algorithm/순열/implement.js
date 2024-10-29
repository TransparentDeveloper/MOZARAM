/* 순열 */

/** arr 의 원소를 기준으로, r 개의 원소를 갖는 부분 배열을 모두 찾는다. (순서 고려)*/
function permutation(arr, r) {
  const n = arr.length;

  if (r < 1 || n < r) return [];

  const answer = [];
  const visited = Array(n).fill(false);

  function dfs(depth, subArr) {
    if (depth === r) {
      answer.push([...subArr])
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      subArr.push(arr[i]);
      dfs(depth + 1, subArr);
      subArr.pop();
      visited[i] = false;
    }
  }

  dfs(0, []);
  return answer;
}


const arr = [3,4,5]

console.log(permutation(arr,1)) // ✅ 정상출력: [[3], [4], [5]] 
console.log(permutation(arr,2)) // ✅ 정상출력: [[3, 4], [3, 5], [4, 3], [4, 5], [5, 3], [5, 4]] 
console.log(permutation(arr,3)) // ✅ 정상출력: [[3, 4, 5], [3, 5, 4], [4, 3, 5], [4, 5, 3], [5, 3, 4], [5, 4, 3]] 