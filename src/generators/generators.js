"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* counter(num) {
    while (true) {
        yield num++;
    }
}
;
const gen = counter(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//*********************************************************//
function* fibonacci(a, b) {
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
    ;
}
;
const genF = fibonacci(0, 1);
console.log(genF.next().value);
console.log(genF.next().value);
console.log(genF.next().value);
console.log(genF.next().value);
console.log(genF.next().value);
//# sourceMappingURL=generators.js.map