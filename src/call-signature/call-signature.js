"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberLetters = (str) => {
    if (str.length === 0) {
        return 0;
    }
    else {
        return str.length;
    }
};
console.log(numberLetters("Teodor"));
console.log("**********************");
const sumAll = (start, ...nums) => {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num += nums[i];
    }
    return start + num;
};
console.log(sumAll(20, 1, 2, 3));
//# sourceMappingURL=call-signature.js.map