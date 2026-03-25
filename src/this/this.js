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
//# sourceMappingURL=this.js.map