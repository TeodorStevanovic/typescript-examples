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
console.log("***************************");
let printUser = (firstName, lastName) => {
    if (typeof lastName === "undefined") {
        return `${firstName}`;
    }
    else {
        return `${firstName} ${lastName}`;
    }
};
console.log(printUser("Teodor"));
console.log(printUser("Teodor", "Stevanovic"));
//# sourceMappingURL=overload.js.map