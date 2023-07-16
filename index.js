const a = "hello"
const b = "hellya"

// Create the bidimesional matrix
let matrix = Array.from({ length: b.length + 1 }, () => {
    return Array.from({ length: a.length + 1 }, () => 0)
})

// Fill the first row
for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i
}

// Fill the first column
for (let i = 1; i <= b.length; i++) {
    matrix[i][0] = i
}

for (let i = 1; i <= a.length; i++) { // for each row
    for (let x = 1; x < b.length; x++) { // for each column item on the row
        console.log(i, x)
        if (a[i - 1] === b[x - 1]) {
            matrix[i][x] = matrix[i - 1][x - 1]
        } else {
            const insertion = matrix[i - 1][x] + 1 // top cell
            const deletion = matrix[i][x - 1] + 1// left cell
            const substitution = matrix[i - 1][x - 1] + 1  // top-left cell
            matrix[i][x] = Math.min(insertion, deletion, substitution)
        }
    }
}

