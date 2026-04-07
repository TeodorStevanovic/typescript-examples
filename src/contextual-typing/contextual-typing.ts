function repeat(f: (i: number) => void, n: number) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

repeat(n => console.log(n), 4)