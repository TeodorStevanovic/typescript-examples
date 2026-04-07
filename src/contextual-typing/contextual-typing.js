"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeat(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
repeat(n => console.log(n), 4);
//# sourceMappingURL=contextual-typing.js.map