"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let admin = {
    name: "Branko",
    age: 55,
    email: "brankoderic@gmail.com",
    isAdmin: true
};
let person = {
    name: "Teodor",
    age: 24
};
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
}
;
printUser(admin);
printUser(person);
//# sourceMappingURL=index.js.map