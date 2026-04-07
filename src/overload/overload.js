"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(inp) {
    if (typeof inp === "number") {
        return inp.toString();
    }
    else {
        return inp.length;
    }
}
console.log(convert(123));
console.log(convert("Teodor"));
//# sourceMappingURL=overload.js.map