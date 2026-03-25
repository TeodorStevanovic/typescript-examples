"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumArray(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumArray([1, 2, 3, 4]));
function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll());
//# sourceMappingURL=rest-parameters.js.map