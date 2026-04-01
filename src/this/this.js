"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUser() {
    return `My name is ${this.name}, I am ${this.age} years old.`;
}
const person = {
    name: "Teodor",
    age: 24,
};
console.log(printUser.call(person));
function greet() {
    return `Hello my name is ${this.name}`;
}
const userOne = {
    name: "Teodor"
};
const userTwo = {
    name: "Jovan"
};
const greetUserOne = greet.bind(userOne);
const greetUserTwo = greet.bind(userTwo);
console.log(greetUserOne());
console.log(greetUserTwo());
function findMax() {
    if (this.numbers.length === 0) {
        throw Error("Array is empty!");
    }
    let max = this.numbers[0];
    for (let n = 1; n < this.numbers.length; n++) {
        if (this.numbers[n] > max) {
            max = this.numbers[n];
        }
    }
    return max;
}
const arrNumbers = {
    numbers: [3, 65, 100, 56]
};
console.log(findMax.apply(arrNumbers));
//# sourceMappingURL=this.js.map