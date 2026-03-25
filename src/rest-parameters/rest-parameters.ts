// Standard function - accepts an array of numbers as a single argument
function sumArray(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumArray([1, 2, 3, 4]))

// Rest parameters - accepts a variable number of arguments
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumAll(1, 4, 5, 6))