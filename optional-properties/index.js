"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUser(user) {
    console.log("Name: ", user.name);
    console.log("Age: ", user.age);
    if (user.email) {
        console.log("Email: ", user.email);
    }
    else {
        console.log("E-mail not provided");
    }
}
;
const admin = {
    name: "Branko",
    age: 55,
    email: "brankodev55@gmail.com"
};
printUser(admin);
const person = {
    name: "Teodor",
    age: 24
};
printUser(person);
//# sourceMappingURL=index.js.map