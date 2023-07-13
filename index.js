const str1 = "hello"
const str2 = "helly"
let grid = Array.from({length: str1.length}, e => Array.from({length: str2.length}, e => 0));

for (let i = 0; i < str1.length; i++) {
  for (let x = 0; x < str2.length; x++) {
    if (str1[i] === str2[x]) {
      grid[i][x] = 1 
    }
  } 
}

console.log(grid)
