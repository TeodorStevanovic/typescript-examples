const range = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let i = 0;
        let arr = this.data;
        return {
            next() {
                if (i < arr.length) {
                    let current = arr[i]
                    i++
                    return { value: current, done: false }
                }
                else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}

for (const num of range) {
    console.log(num)
}