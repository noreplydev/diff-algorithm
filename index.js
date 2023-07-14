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

const M = str1.length;
const N = str2.length;

// Create the matrix
const matrix = Array(M + 1).fill(null).map(() => Array(N + 1).fill(0));

// Fill the first row and column of the matrix
for (let i = 0; i <= M; i++) {
  matrix[i][0] = i;
}
for (let j = 1; j <= N; j++) {
  matrix[0][j] = j;
}

  // Fill the rest of the matrix
  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        const deletion = matrix[i - 1][j] + 1;
        const insertion = matrix[i][j - 1] + 1;
        const substitution = matrix[i - 1][j - 1] + 1;
        matrix[i][j] = Math.min(deletion, insertion, substitution);
      }
    }
  }

console.log(matrix)
