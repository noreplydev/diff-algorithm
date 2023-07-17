const a = "this is a new text"
const b = "this is a no new text"

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

let x = a.length + 1;
let y = b.length + 1;
const differences = [];

while (y > 0 || x > 0) {
    if (y > 0 && x > 0 && a[x - 1] === b[y - 1]) {
        differences.unshift({ type: 'equal', value: a[x - 1] })
        y--
        x--
    } else if (y > 0 && matrix[y][x] === matrix[y - 1][x] + 1) {
        differences.unshift({ type: 'delete', value: a[y - 1] });
        y--;
    } else if (x > 0 && matrix[y][x] === matrix[y][x - 1] + 1) {
        differences.unshift({ type: 'insert', value: b[x - 1] });
        x--;
    } else {
        differences.unshift({ type: 'replace', value: b[x - 1] });
        y--;
        x--;
    }
}

console.log(differences)

