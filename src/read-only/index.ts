type User = {
    readonly id: number,
    name: string,
    age: number
};

const person: User = {
    id: 1,
    name: "Teodor",
    age: 24,
};

// 'id' is a readonly property, meaning it can only be assigned during object creation.
// Reassigning it later will result in a TypeScript error.

// person.id = 2;

console.log(person);