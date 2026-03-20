"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = ["Teodor", "Stevanovic", 2002];
console.log(person);
// Readonly tuple cannot be modified after initialization
// person[0] = "Bosko"; // Error: Cannot assign to '0' because it is a read-only property
// Readonly tuple cannot be modified directly.
// Methods like concat can be used to create a new array without changing the original tuple.
let updatePerson = person.concat("Frontend Developer");
console.log(updatePerson);
//# sourceMappingURL=tuples.js.map