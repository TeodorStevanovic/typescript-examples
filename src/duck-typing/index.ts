type User = {
    name: string,
    age: number
};

let admin = {
    name: "Branko",
    age: 55,
    email: "brankoderic@gmail.com",
    isAdmin: true
};

let person: User = {
    name: "Teodor",
    age: 24
};

function printUser(user: User) {
    console.log(user.name);
    console.log(user.age);
};

printUser(admin);
printUser(person);