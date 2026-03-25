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
//# sourceMappingURL=this.js.map