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
//# sourceMappingURL=generators.js.map