"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
repeat(3, (i) => {
    console.log(i);
});
console.log("********************");
repeat(3, (i) => {
    console.log(i * 2);
});
//*********************************************//
function run(fn) {
    fn(10);
}
run((x) => {
    console.log(x);
});
//# sourceMappingURL=contextual-typing.js.map