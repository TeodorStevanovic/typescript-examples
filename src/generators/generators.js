"use strict";
// function* counter(num: number) {
Object.defineProperty(exports, "__esModule", { value: true });
//     while (true) {
//         yield num++;
//     }
// };
// const gen = counter(5);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// //*********************************************************//
// function* fibonacci(a: number, b: number) {
//     while(true) {
//         yield a;
//         [a, b] = [b, a + b];
//     };
// };
// const genF = fibonacci(0, 1);
// console.log(genF.next().value);
// console.log(genF.next().value);
// console.log(genF.next().value);
// console.log(genF.next().value);
// console.log(genF.next().value);
const range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;
        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
for (const num of range) {
    console.log(num);
}
//# sourceMappingURL=generators.js.map