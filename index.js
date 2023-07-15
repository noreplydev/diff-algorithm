const a = "hello"
const b = "hellya"

// Create the bidimesional matrix
let matrix = Array.from({ length: b.length + 1 }, () => {
    return Array.from({ length: a.length }, () => null)
})

// Fill the first row
for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i
}

// Fill the first column
for (let i = 1; i <= b.length; i++) {
    matrix[i][0] = i
}

console.log(matrix)

// Fill the rest of the matrix
// Iterate over each row
/* for (let i = 1; i <= a.length; i++) {
  // Iterate over each column
  for (let x = 1; x <= b.length; x++) {
    if (str1[i - 1] === str2[x - 1]) {
      matrix[i][x] = matrix[i - 1][x - 1];
    } else {
      const deletion = matrix[i - 1][x] + 1;
      const insertion = matrix[i][x - 1] + 1;
      const substitution = matrix[i - 1][x - 1] + 1;
      matrix[i][x] = Math.min(deletion, insertion, substitution);
    }
  }
} */

