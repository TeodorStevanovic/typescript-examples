function repeat(n: number, f: (i: number) => void) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

repeat(3, (i) => {
    console.log(i)
})

console.log("********************")

repeat(3, (i) => {
    console.log(i * 2)
})

//*********************************************//

function run(fn: (x: number) => void) {
    fn(10)
}

run((x) => {
    console.log(x)
})