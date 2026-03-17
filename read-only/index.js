"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    id: 1,
    name: "Teodor",
    age: 24,
};
// 'id' is a readonly property, meaning it can only be assigned during object creation.
// Reassigning it later will result in a TypeScript error.
// person.id = 2;
console.log(person);
//# sourceMappingURL=index.js.map