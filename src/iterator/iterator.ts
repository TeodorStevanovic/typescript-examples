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

console.log("*********************************************************")

//*******************************************************************//

const numbers = {
    data: [1, 2, 3],
}

function iterator() {
    let i = 0;
    let arr = numbers.data;
    return {
        next() {
            if (i < arr.length) {
                let curr = arr[i]
                i++
                return {value: curr, done: false}
            }
            else {
                 return {value: undefined, done: true}
            }
        }
    }
}

const it = iterator();

console.log(it.next())
console.log(it.next())
console.log(it.next())