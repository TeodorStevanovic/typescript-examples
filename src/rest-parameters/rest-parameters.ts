function sumArray(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumArray([1, 2, 3, 4]))