"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert = (inp) => {
    if (typeof inp === "number") {
        return inp.toString();
    }
    else {
        return inp.length;
    }
};
console.log(convert(123));
//# sourceMappingURL=overload.js.map